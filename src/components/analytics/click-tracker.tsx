"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/tracking";

function asElement(value: EventTarget | null): Element | null {
  if (!value || !(value instanceof Element)) {
    return null;
  }

  return value;
}

export function ClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = asElement(event.target);

      if (!target) {
        return;
      }

      const tracked = target.closest<HTMLElement>("[data-track-event]");

      if (!tracked) {
        return;
      }

      const eventName = tracked.dataset.trackEvent;

      if (!eventName) {
        return;
      }

      trackEvent(eventName, {
        label: tracked.dataset.trackLabel,
        location: tracked.dataset.trackLocation,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
