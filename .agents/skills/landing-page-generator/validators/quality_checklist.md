# Validator: Quality Checklist

Run this checklist internally before presenting any final output.
A FAIL on any CRITICAL item means the output must be revised before delivery.

---

## How to Use This Checklist

1. Work through every item in order
2. Mark each item: PASS / FAIL / REVIEW
3. For any FAIL: revise the output and re-check before continuing
4. For any REVIEW: flag it with a note in the output for the client to address
5. Do not deliver output with CRITICAL FAILs

---

## Category 1: Messaging Clarity

| # | Check | Priority | Result | Notes |
|---|---|---|---|---|
| M1 | Hero headline communicates clear value within 5 seconds | CRITICAL | | |
| M2 | Hero answers: What is this? Who is it for? Why care? What next? | CRITICAL | | |
| M3 | Page focuses on the customer's outcome, not the company's features | CRITICAL | | |
| M4 | Value proposition is specific and differentiated | CRITICAL | | |
| M5 | Benefits are outcome-focused (not feature lists) | HIGH | | |
| M6 | The primary differentiator is clearly communicated | HIGH | | |
| M7 | Problem section demonstrates genuine empathy (not manufactured drama) | HIGH | | |
| M8 | No section repeats the same message already communicated in another | MEDIUM | | |
| M9 | Copy speaks directly to the reader (second person: you/your) | MEDIUM | | |
| M10 | Tone is consistent throughout all sections | MEDIUM | | |

---

## Category 2: Conversion Architecture

| # | Check | Priority | Result | Notes |
|---|---|---|---|---|
| C1 | There is exactly one primary CTA on the page | CRITICAL | | |
| C2 | Primary CTA appears at least 3 times on the full page | CRITICAL | | |
| C3 | Every major objection is addressed before the final CTA | CRITICAL | | |
| C4 | Trust signals appear before the first major commitment is requested | HIGH | | |
| C5 | Every section moves the visitor toward the conversion goal | HIGH | | |
| C6 | No section introduces complexity or new competing options | HIGH | | |
| C7 | Secondary CTA is lower-commitment than the primary CTA | MEDIUM | | |
| C8 | How It Works reduces process anxiety before the offer | MEDIUM | | |
| C9 | Final CTA section summarises the transformation clearly | MEDIUM | | |
| C10 | Urgency used only when confirmed as genuine | CRITICAL | | |

---

## Category 3: Copy Quality

| # | Check | Priority | Result | Notes |
|---|---|---|---|---|
| Q1 | No prohibited phrases used (see rules/copywriting.md) | HIGH | | |
| Q2 | No generic AI phrases (game-changing, revolutionary, seamlessly) | HIGH | | |
| Q3 | No excessive exclamation marks | MEDIUM | | |
| Q4 | No passive voice in headline or CTA copy | MEDIUM | | |
| Q5 | Every benefit applies Feature → Problem → Benefit → Outcome | HIGH | | |
| Q6 | All claims either have supporting evidence or are marked [ASSUMPTION] | CRITICAL | | |
| Q7 | CTAs start with a strong action verb | HIGH | | |
| Q8 | CTAs avoid "Submit", "Click Here", "Learn More" (without context) | MEDIUM | | |
| Q9 | Paragraphs are 2–4 sentences maximum | MEDIUM | | |
| Q10 | Copy reads naturally when read aloud | HIGH | | |

---

## Category 4: Credibility and Proof

| # | Check | Priority | Result | Notes |
|---|---|---|---|---|
| P1 | No testimonials are fabricated | CRITICAL | | |
| P2 | No statistics are fabricated or unverified | CRITICAL | | |
| P3 | No client logos used without confirmed permission | CRITICAL | | |
| P4 | No awards or certifications that are not real | CRITICAL | | |
| P5 | No competitor attacks or unsupported superiority claims | CRITICAL | | |
| P6 | All missing proof is marked [PLACEHOLDER] with clear instructions | CRITICAL | | |
| P7 | Social proof is placed before the final CTA | HIGH | | |
| P8 | Testimonials (if real) include full name, title, and specific result | HIGH | | |
| P9 | About section does not fabricate founder credentials | CRITICAL | | |
| P10 | All [ASSUMPTION] tags are clearly visible and distinguishable from facts | HIGH | | |

---

## Category 5: UX, Structure & Production Minimal UI System

| # | Check | Priority | Result | Notes |
|---|---|---|---|---|
| U1 | There is exactly one H1 on the page | CRITICAL | | |
| U2 | Zero instances of `backdrop-filter` or `backdrop-blur` (Liquid Glass Ban) | CRITICAL | | |
| U3 | 100% solid matte surfaces (all containers, cards, modals, nav are fully opaque) | CRITICAL | | |
| U4 | Dark mode borders use matte neutral tones (`#2C2C32`, `#222226`), zero glowing/translucent glass lines | CRITICAL | | |
| U5 | Contrast satisfies WCAG 2.1 AAA for headlines and AA for body text | CRITICAL | | |
| U6 | Touch targets are $\ge$ 44x44px (desktop) and $\ge$ 48x48px (mobile) | HIGH | | |
| U7 | Navigation metamorphoses cleanly into mobile bottom dock (`h-16`) on `< 768px` | HIGH | | |
| U8 | Visible focus ring enforced (`:focus-visible` with `outline: 2px solid var(--focus-ring)`) | HIGH | | |
| U9 | Radius tiers (8px, 14px, 20px, 32px, 9999px) and solid flat elevation followed | HIGH | | |
| U10 | Kinetic micro-interactions use `@media (prefers-reduced-motion: reduce)` fallback | HIGH | | |
| U11 | Section order follows a logical conversion flow | HIGH | | |
| U12 | Form fields are minimised and styled cleanly with floating or top labels | MEDIUM | | |

---

## Category 6: Output Completeness

| # | Check | Priority | Result | Notes |
|---|---|---|---|---|
| O1 | All 7 output sections are present (Strategy through Final Version) | CRITICAL | | |
| O2 | Hero section has 10 headline variations | HIGH | | |
| O3 | Hero section has 5 subheading variations | HIGH | | |
| O4 | Hero section has 10 CTA variations | HIGH | | |
| O5 | A/B Split Test package (Variant A: Loss Aversion vs Variant B: Outcome) provided | HIGH | | |
| O6 | Benefits section has 8–10 blocks | HIGH | | |
| O7 | FAQ section has 8–12 questions | HIGH | | |
| O8 | Final CTA section has 10 CTA variations and 5 headline variations | HIGH | | |
| O9 | Placeholder log is complete and up to date | CRITICAL | | |
| O10 | Recommended final version is clean and designer/developer-ready | HIGH | | |
| O11 | Conversion optimisation notes include 5–10 specific recommendations | MEDIUM | | |

---

## Category 7: Security, Privacy & Form Hardening

| # | Check | Priority | Result | Notes |
|---|---|---|---|---|
| S1 | Content Security Policy (CSP) defined with `frame-ancestors 'none'` | CRITICAL | | |
| S2 | All external links (`target="_blank"`) enforce `rel="noopener noreferrer"` | CRITICAL | | |
| S3 | Zero instances of `innerHTML` or `document.write` used for dynamic parameters | CRITICAL | | |
| S4 | Dynamic Text Replacement (DTR) sanitizes inputs and uses `textContent` | CRITICAL | | |
| S5 | Invisible honeypot field integrated into lead capture forms | HIGH | | |
| S6 | Form submission speed threshold (timestamp token) active | HIGH | | |
| S7 | Client-side submission debouncing / rate limiting enabled | HIGH | | |
| S8 | Explicit Privacy Policy and Terms of Service consent links present on forms | HIGH | | |
| S9 | Subresource Integrity (SRI) hashes applied to external CDN scripts/styles | MEDIUM | | |

---

## Category 8: CRO Telemetry & Analytics Instrumentation

| # | Check | Priority | Result | Notes |
|---|---|---|---|---|
| T1 | Standard `dataLayer.push` telemetry helper present on page | HIGH | | |
| T2 | All primary and secondary CTAs track clicks with text, section, and target URL | HIGH | | |
| T3 | Scroll depth milestone tracking configured (25%, 50%, 75%, 90%) | HIGH | | |
| T4 | Lead form dispatches `form_submit_start` and `form_submit_success` | HIGH | | |
| T5 | UTM parameters safely parsed into session storage and hidden form inputs | HIGH | | |
| T6 | Zero PII (passwords, unhashed emails) exposed in telemetry payloads or URLs | CRITICAL | | |

---

## Category 9: Core Web Vitals & Performance

| # | Check | Priority | Result | Notes |
|---|---|---|---|---|
| V1 | Layout shifts prevented: explicit aspect-ratio or dimensions on images/cards (CLS = 0) | CRITICAL | | |
| V2 | Web fonts use `font-display: swap` and preconnect hints to avoid render blocking | HIGH | | |
| V3 | Interactive scripts are deferred or placed at bottom of document | HIGH | | |
| V4 | First Contentful Paint (FCP) and LCP optimized with no heavyweight third-party scripts | HIGH | | |

---

## Category 10: Automation Testing & QA Selectors

| # | Check | Priority | Result | Notes |
|---|---|---|---|---|
| A1 | Every page section includes a resilient `data-testid="section-{name}"` selector | CRITICAL | | |
| A2 | Primary and secondary CTAs have distinct `data-testid` attributes (e.g. `hero-primary-cta`, `nav-cta-btn`) | CRITICAL | | |
| A3 | Lead capture form and all form inputs include unique `data-testid` attributes | CRITICAL | | |
| A4 | Form submission button, honeypot, and feedback messages have explicit `data-testid` | HIGH | | |
| A5 | Interactive widgets (tabs, calculator slider, theme toggle) include test selectors | HIGH | | |
| A6 | FAQ accordion items and details/summary elements have indexed `data-testid="faq-item-{n}"` | HIGH | | |
| A7 | Footer legal links and mobile sticky dock have dedicated `data-testid` selectors | MEDIUM | | |

---

## Final Sign-Off

| Item | Status |
|---|---|
| All CRITICAL checks: PASS | |
| All HIGH checks: PASS or REVIEW with note | |
| Security & Honeypot validations verified | |
| Telemetry & Attribution verified | |
| Automation QA Selectors (`data-testid`) verified | |
| Placeholder log complete | |
| Credibility guard run (validators/credibility_guard.md) | |
| Output ready for designer, QA automation, and developer handoff | |

*Checked by: [AI / Name]*  
*Date: [DATE]*  
*Version: [VERSION]*


