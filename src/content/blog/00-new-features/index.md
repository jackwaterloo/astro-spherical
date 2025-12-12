---
title: "New Features"
summary: "New features I have added to this theme"
date: "Dec 10 2025"
draft: false
tags:
  - Tutorial
  - Astro
  - Astro Sphere
heroImage:
  src: "./Screenshot 2025-12-03 at 7.37.55 PM.png"
  alt: "example"
---

## H2 Heading to Start Post

**Things I need to do**

- adjust heading spacing in markdown. h1 vs h2 vs h3 etc
- footer

Example text to see how a paragraph is rendered. Below is a code block
that shows how a codeblock is rendered. It looks pretty good imo.

```javascript
// example.js
const jack = "jack";
let mouse = "mx master 4";

mouse = "lg g pro";
```

## Disabled Legal Pages

The Terms and Privacy pages are currently disabled but preserved for future use. They've been disabled by:

- Adding `.disabled` extension to page route: `src/pages/legal/[...slug].astro.disabled`
- Adding `.disabled` extension to content: `privacy.md.disabled` and `terms.md.disabled`
- Commenting out footer links in `src/components/Footer.astro`

**To re-enable:** Remove the `.disabled` extension from all three files and uncomment the legal links section in the footer (see comment in file for instructions).

This approach works for any page/route you want to temporarily disable while keeping the code intact.
