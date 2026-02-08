# Business Card CMYK Export Checklist

Use this for `business-card-front-print.svg` + either `business-card-back-print.svg` or `business-card-back-print-qr.svg`.

## 1) Document + Size
- Keep canvas at `1125 x 675 px` (includes bleed).
- Final trim is `1050 x 600 px` (3.5in x 2in).
- Do not scale artwork non-proportionally.

## 2) Color Conversion
- Convert from RGB to CMYK before print export.
- Preferred profile: `GRACoL 2006 Coated1v2`.
- Alternate if printer requests: `US Web Coated (SWOP) v2`.
- Confirm rich black handling with printer for dark background cards.

## 3) Text + Vector Safety
- Outline fonts in final print PDF if printer requests it.
- Keep key text inside safe area equivalent (0.125in in from trim).
- Keep thin lines at least `0.5 pt` stroke.

## 4) PDF Export Settings
- Format: `PDF/X-1a:2001` (preferred) or `PDF/X-4` if requested.
- Resolution for rasterized elements: `300 DPI` minimum.
- Include bleed: `0.125in` on all sides.
- Do not add printer marks unless your printer asks for them.

## 5) QR Version Checks (if using QR back)
- Use `business-card-back-print-qr.svg`.
- Keep white QR backing box intact.
- Test scan from exported PDF at 100% zoom before sending.
- Test print one sheet and verify scan under normal lighting.

## 6) Stock + Finish Recommendation
- 16pt or 18pt uncoated matte for architectural look.
- Optional soft-touch matte laminate.
- Ask for edge paint only if you want a heavier premium feel.

## 7) Preflight Before Upload
- Spelling check: name, phone, email, URL.
- Contrast check: white text over dark background remains readable.
- QR scan test (if QR version).
- Export front/back as separate PDFs named:
  - `studiobuild-card-front-print.pdf`
  - `studiobuild-card-back-print.pdf`
