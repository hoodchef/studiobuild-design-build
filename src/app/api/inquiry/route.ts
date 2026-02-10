import { NextResponse } from "next/server";

const requiredFields = [
  "fullName",
  "email",
  "phone",
  "municipality",
  "projectType",
  "projectDescription",
  "desiredStartWindow",
  "budgetRange",
] as const;

type RequiredField = (typeof requiredFields)[number];
type InquiryPayload = Record<string, string | undefined>;
type DeliveryChannel = "resend" | "hubspot" | "webhook";

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_PER_WINDOW = 8;

const requestBuckets = new Map<string, number[]>();

function toSafeString(value: string | undefined, maxLength = 2000) {
  if (!value) {
    return "";
  }

  return value.toString().trim().slice(0, maxLength);
}

function hasRequiredField(payload: InquiryPayload, field: RequiredField) {
  return toSafeString(payload[field]).length > 0;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const bucket = requestBuckets.get(ip) ?? [];
  const recent = bucket.filter((timestamp) => now - timestamp < RATE_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_PER_WINDOW) {
    requestBuckets.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestBuckets.set(ip, recent);
  return false;
}

function buildInquiryMessage(payload: InquiryPayload) {
  return [
    "New StudioBuild inquiry",
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Project type: ${payload.projectType}`,
    `Municipality: ${payload.municipality}`,
    `Project address: ${payload.projectAddress}`,
    `Budget range: ${payload.budgetRange}`,
    `Desired start window: ${payload.desiredStartWindow}`,
    `Has plans: ${payload.hasPlans}`,
    `Permit status: ${payload.permitStatus}`,
    `Best consultation time: ${payload.consultationTime}`,
    `Referral source: ${payload.referralSource}`,
    `Source page: ${payload.sourcePage}`,
    "",
    "Project description:",
    payload.projectDescription ?? "",
  ].join("\n");
}

async function sendViaResend(payload: InquiryPayload, message: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.INQUIRY_TO_EMAIL;
  const fromEmail = process.env.INQUIRY_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject: `New inquiry: ${payload.projectType} | ${payload.municipality}`,
      text: message,
    }),
  });

  return response.ok;
}

async function sendViaHubSpot(payload: InquiryPayload) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!token) {
    return false;
  }

  const [firstName, ...lastNameParts] = toSafeString(payload.fullName, 120).split(" ");

  const response = await fetch(
    "https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: [
          {
            idProperty: "email",
            id: payload.email,
            properties: {
              email: payload.email,
              firstname: firstName,
              lastname: lastNameParts.join(" "),
              phone: payload.phone,
              city: payload.municipality,
              company: "StudioBuild Website Inquiry",
              website: "https://www.studiobuild.ca",
            },
          },
        ],
      }),
    }
  );

  return response.ok;
}

async function sendViaWebhook(payload: InquiryPayload) {
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event: "studiobuild.inquiry.created",
      timestamp: new Date().toISOString(),
      payload,
    }),
  });

  return response.ok;
}

export async function POST(request: Request) {
  const rawPayload = (await request.json()) as InquiryPayload;

  const payload: InquiryPayload = {
    fullName: toSafeString(rawPayload.fullName, 120),
    email: toSafeString(rawPayload.email, 160).toLowerCase(),
    phone: toSafeString(rawPayload.phone, 40),
    projectAddress: toSafeString(rawPayload.projectAddress, 240),
    municipality: toSafeString(rawPayload.municipality, 120),
    projectType: toSafeString(rawPayload.projectType, 120),
    projectDescription: toSafeString(rawPayload.projectDescription, 6000),
    desiredStartWindow: toSafeString(rawPayload.desiredStartWindow, 80),
    budgetRange: toSafeString(rawPayload.budgetRange, 80),
    hasPlans: toSafeString(rawPayload.hasPlans, 80),
    permitStatus: toSafeString(rawPayload.permitStatus, 80),
    consultationTime: toSafeString(rawPayload.consultationTime, 120),
    referralSource: toSafeString(rawPayload.referralSource, 120),
    companyWebsite: toSafeString(rawPayload.companyWebsite, 200),
    sourcePage: toSafeString(rawPayload.sourcePage, 120),
  };

  if (payload.companyWebsite) {
    return NextResponse.json({
      message: "Thanks for contacting StudioBuild. We received your inquiry.",
    });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      {
        error: "Too many submissions right now. Please try again shortly.",
      },
      { status: 429 }
    );
  }

  const missing = requiredFields.filter((field) => !hasRequiredField(payload, field));

  if (missing.length > 0) {
    return NextResponse.json(
      {
        error: `Please complete the required fields: ${missing.join(", ")}.`,
      },
      { status: 400 }
    );
  }

  if (!isValidEmail(payload.email ?? "")) {
    return NextResponse.json(
      {
        error: "Please enter a valid email address.",
      },
      { status: 400 }
    );
  }

  const message = buildInquiryMessage(payload);
  const deliveredChannels: DeliveryChannel[] = [];

  try {
    if (await sendViaResend(payload, message)) {
      deliveredChannels.push("resend");
    }
  } catch (error) {
    console.error("Resend delivery failed", error);
  }

  try {
    if (await sendViaHubSpot(payload)) {
      deliveredChannels.push("hubspot");
    }
  } catch (error) {
    console.error("HubSpot delivery failed", error);
  }

  try {
    if (await sendViaWebhook(payload)) {
      deliveredChannels.push("webhook");
    }
  } catch (error) {
    console.error("Webhook delivery failed", error);
  }

  console.log("StudioBuild inquiry received", {
    name: payload.fullName,
    municipality: payload.municipality,
    projectType: payload.projectType,
    budgetRange: payload.budgetRange,
    channels: deliveredChannels,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({
    message:
      "Thanks for contacting StudioBuild. We received your inquiry and will follow up with consultation availability and next steps.",
    deliveredChannels,
  });
}
