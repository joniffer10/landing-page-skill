# Landing Page Generator

A production-quality AI skill that generates complete, high-converting landing
page systems for any product, service, startup, SaaS, app, agency, or business.

---

## What It Does

When activated, the AI becomes a comprehensive eight-role expert:

- Conversion-focused landing page strategist
- Professional copywriter (including A/B test split variants)
- UX/content strategist (Production Minimal UI System)
- Brand messaging strategist
- Customer psychology researcher
- Information architect
- CTA, CRO & analytics specialist
- Security & privacy compliance reviewer
- QA automation engineer (E2E testability & selector architecture)

It produces a complete, structured system covering strategy, SEO, 13 page sections, UX recommendations, interactive conversion widgets, A/B test variations, security hardening (CSP, honeypots), dataLayer event tracking, standardized `data-testid` QA selectors for Playwright/Cypress automation, a placeholder log, and multi-framework production code (Vanilla HTML/CSS or React / Next.js / Tailwind CSS).

---

## Directory Structure

```
landing-page-generator/
│
├── SKILL.md                        Entry point and workflow orchestrator (12 steps)
├── README.md                       This file
├── LICENSE                         MIT license
│
├── rules/
│   ├── copywriting.md              Writing rules, formulas, tone, CTAs, prohibited phrasing
│   ├── behavioral.md               Hard constraints: zero fabrication, tagging protocol
│   ├── ux_design.md                Production Minimal UI, layout hierarchy, mobile dock
│   └── security.md                 CSP, honeypot anti-spam, XSS prevention, link safety
│
├── references/
│   ├── conversion_psychology.md    AIDA, loss aversion, social proof, friction reduction
│   ├── copywriting_formulas.md     FAB, PAS, BAB, PASTOR, 4Ps and usage guide
│   ├── production_minimal_ui.md    Flat, responsive minimal UI system (zero glass, solid matte)
│   ├── analytics_tracking.md       dataLayer schema, GA4, GTM, Meta Pixel, UTM attribution
│   ├── automation_testing.md       Playwright & Cypress selector taxonomy (data-testid specs)
│   ├── svg_icons.md                Production Minimal 24x24 accessible SVG icon system
│   └── seo_guidelines.md           Title, meta, slug, keywords, search intent, FAQ schema
│
├── templates/
│   ├── strategy_brief.md           Strategic Foundation output template
│   ├── hero_section.md             Hero section template with A/B split-test package
│   ├── full_page_output.md         Complete 13-section page skeleton
│   ├── html_starter.html           Production HTML starter (CSP, DTR, Honeypot, dataLayer, TestIDs)
│   ├── tokens.css                  Design tokens, utilities, forms, tabs, calculators
│   ├── tailwind.config.js          Tailwind CSS preset mapped to Production Minimal UI
│   ├── react_starter.tsx           Production React/Next.js landing page with testids & widgets
│   ├── testimonial_guide.md        Real testimonial collection guide
│   └── placeholder_log.md          Tracking table for all placeholders and assumptions
│
├── scripts/
│   └── gather_inputs.sh            Interactive input collection → inputs.json
│
└── validators/
    ├── quality_checklist.md        Pre-publish quality, security, telemetry & QA selector audit
    └── credibility_guard.md        Fabrication detection checklist
```

---

## Three Execution Delivery Modes

The generator can be invoked in any of three modes depending on your team's workflow:

| Delivery Mode | Description | Primary Output Artifacts |
|---|---|---|
| **Mode A: Strategy & Copy Deck** | For marketing strategists, copywriters, and content teams planning and reviewing copy before design. | Full 13-section copy deck, SEO meta, Hero A/B split-test package, audience objection map. |
| **Mode B: Production Codebase** | For developers and founders who need a live, production-grade landing page immediately. | Self-contained `index.html` + `tokens.css` or `LandingPage.tsx` + `tailwind.config.js`. |
| **Mode C: Complete Suite** *(Default)* | The ultimate end-to-end package: strategic foundations, copy variations, and fully wired production code. | Mode A Strategy Deck **+** Mode B Shipped Codebase. |

---

## How to Activate

### 1. Chat-Native 5-Question Quick Intake (Fastest)

Simply prompt the AI directly in Antigravity or your agent chat:

```
Use the landing-page-generator skill to create a landing page for:
1. Business: Pulse Metrics (B2B SaaS)
2. Audience: Seed to Series B Product Managers struggling with churn analytics
3. Primary CTA: Start 14-Day Free Trial
4. Differentiator: Real-time cohort churn prediction in under 5 minutes without SQL
5. Mode & Stack: Mode C, React + Tailwind
```

> **Zero-Stall Default:** Even if you only supply a single sentence or website link (e.g., *"Build a landing page for my boutique coffee subscription"*), the generator never halts or blocks. It immediately infers answers, marks unverified facts with `[ASSUMPTION]`, and generates the complete suite in Mode C.

### 2. Guided Interactive Script

For extensive enterprise campaigns, gather in-depth inputs using the interactive CLI script:

```bash
bash .agents/skills/landing-page-generator/scripts/gather_inputs.sh
```

Paste the resulting `inputs.json` into the chat when prompting the skill.

---

## Production-Grade Engineering Features

### 1. Production Minimal UI System
- **Zero-Glassmorphism:** Strictly bans performance-draining `backdrop-blur`, vague gradients, and floaty glows.
- **High-Contrast Solid Surfaces:** Flat, crisp card surfaces with deliberate `2px` tactile borders (`#111827` light / `#374151` dark).
- **Tactile Action Pills:** Distinctive `9999px` rounded action pills with active states (`translateY(1px)`).
- **Responsive Theme Switching:** Instant Light / Dark mode toggle using semantic CSS tokens or Tailwind presets.

### 2. Enterprise Security & Bot Defense
- **Zero-Backend Honeypot Defense:** Dual-layer invisible bot protection using hidden field traps (`hp_bot_trap`) + submission velocity thresholds (<1500ms rejected).
- **Zero-Dependency Backend Wiring:** Defaults to simulated instant success out of the box, or instantly connects to **Formspree**, **Basin**, **Formspark**, **Make / Zapier Webhooks**, or custom REST APIs via `FORM_ENDPOINT_URL`.
- **Strict Content Security Policy (CSP):** Self-contained scripts, blocked dangerous inline evals, and restricted origins.
- **XSS & Link Safety:** Strict DOM `textContent` escaping and automatic `rel="noopener noreferrer"` on all outbound links.

### 3. CRO Telemetry & Analytics Taxonomy
- **Standardized `dataLayer.push`:** Tracks `cta_click`, `form_submit`, `scroll_milestone` (25%, 50%, 75%, 90%), `roi_calculator_interact`, and `theme_toggle`.
- **UTM Persistence:** Automatically captures `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` from the URL and attaches them to every conversion event.
- **Dynamic Text Replacement (DTR):** Personalizes hero headlines dynamically based on URL query parameters (`?headline=...` or `?audience=...`) without risking XSS.

### 4. QA Automation Testing Ready (`data-testid`)
- Resilient automation selectors across every critical element:
  - Containers: `data-testid="section-hero"`, `data-testid="section-pricing"`, `data-testid="section-faq"`
  - Actions: `data-testid="btn-hero-primary"`, `data-testid="btn-lead-submit"`
  - Inputs: `data-testid="input-lead-email"`, `data-testid="input-lead-name"`
  - Verification: `data-testid="form-lead-success"`, `data-testid="form-lead-error"`
- Includes a drop-in Playwright test suite (`references/automation_testing.md`) to verify form submission, bot traps, and theme switching in CI/CD.

---

## Quick Example Output Hierarchy

1. **Strategic Foundation:** Value proposition, ICP pain points, objection stack
2. **SEO Foundation & Schema.org:** Title, meta, Open Graph, and active JSON-LD (`Organization`, `Service`, `FAQPage`)
3. **13 Conversion Sections:**
   - Hero (with Variant A & Variant B A/B split-testing package)
   - Trust strip (accessible SVGs)
   - Problem (PAS formula)
   - Solution & Interactive Demonstration (Feature tabs / interactive mockup)
   - Benefits (8–10 blocks with outcome-focused copy)
   - Differentiation matrix & Competitor comparison
   - How It Works (3 clear sequential steps)
   - Interactive ROI / Pricing Calculator
   - Offer breakdown & Risk Reversals (guarantees)
   - Social Proof (testimonial architecture with attribution)
   - About / Founder note
   - FAQ accordion (8–12 objection killers)
   - Final High-Converting Lead Form
4. **UX / UI Specifications:** Production Minimal design tokens, color palette, typography
5. **Security, Telemetry & Selector Blueprint:** Audit report against all 10 validator categories
6. **Code Export:** Complete, ready-to-deploy `html_starter.html` / `react_starter.tsx`

---

## Rules Summary

- Never fabricate testimonials, statistics, logos, awards, or client names.
- Tag all missing user info as `[PLACEHOLDER]`.
- Tag all strategic assumptions as `[ASSUMPTION]`.
- Never manufacture fake countdown timers or false urgency.
- Every section must serve a verifiable strategic conversion objective.
- Every code artifact must include complete security, telemetry, and testability hooks.

See `rules/behavioral.md` and `validators/quality_checklist.md` for complete audit requirements.

---

## License

MIT — see `LICENSE`.

