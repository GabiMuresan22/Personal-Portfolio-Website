# Calendly Setup

This site is wired to open a Calendly popup when visitors click "Let's have a call".

## 1) Set your Calendly link

Edit `index.html` and replace the placeholder in the CTA anchor:

```html
<a
  href="#"
  class="open-calendly"
  data-calendly-url="https://calendly.com/YOUR-USERNAME/intro-call"
  rel="noopener"
  >Let's have a call</a
>
```

- Change `YOUR-USERNAME/intro-call` to your real Calendly link. Examples:
  - `https://calendly.com/gabimuresan22/intro-call`
  - `https://calendly.com/your-team/discovery-call`

No other changes are required.

## 2) How it works

- We include Calendly’s widget CSS in the `<head>` so the popup is styled.
- When a visitor clicks the CTA, we lazy-load Calendly’s widget JS if needed and open a popup.
- This keeps performance high (no widget JS loaded until the user needs it).

## 3) Optional: Inline embed (on a dedicated page)

If you prefer an inline scheduler section instead of a popup, you can add a new page (e.g., `book-a-call.html`) with:

```html
<link
  href="https://assets.calendly.com/assets/external/widget.css"
  rel="stylesheet"
/>
<script
  src="https://assets.calendly.com/assets/external/widget.js"
  type="text/javascript"
  async
></script>
<div
  class="calendly-inline-widget"
  data-url="https://calendly.com/YOUR-USERNAME/intro-call"
  style="min-width:320px;height:700px;"
></div>
```

Then link to it from anywhere in the site.

## 4) Troubleshooting

- If the popup doesn’t appear, check the browser console for network blockers.
- Ensure the `data-calendly-url` is a valid, public Calendly scheduling link.
- Some privacy extensions may block 3rd-party scripts; provide a fallback link to your contact form if needed.
