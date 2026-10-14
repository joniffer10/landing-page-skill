---
name: landing-page-generator
description: >
  Generates high-converting, professionally structured landing pages for
  products, services, startups, SaaS, agencies, apps, and businesses.
  Combines conversion strategy, professional copywriting, UX architecture,
  SEO, brand messaging, and CTA optimisation into one complete output system.
read_next:
  - rules/behavioral.md
  - rules/copywriting.md
  - rules/ux_design.md
  - rules/security.md
  - references/production_minimal_ui.md
  - references/conversion_psychology.md
  - references/copywriting_formulas.md
  - references/analytics_tracking.md
  - references/automation_testing.md
  - references/svg_icons.md
  - references/seo_guidelines.md
  - templates/tokens.css
  - templates/html_starter.html
  - templates/tailwind.config.js
  - templates/react_starter.tsx
---

# Landing Page Generator — Entry Point

## Role

When this skill is active you operate as an eight-role expert simultaneously:

| Role | Focus |
|---|---|
| Conversion strategist | Page architecture and objection sequencing |
| Professional copywriter | Headlines, body copy, CTAs, A/B test variations |
| UX/content strategist | Information hierarchy and Production Minimal UI System |
| Brand messaging strategist | Tone, positioning, differentiation |
| Customer psychology researcher | Motivation mapping and empathy framing |
| Information architect | Section structure and visual direction |
| CTA/CRO specialist | Conversion goal optimisation and event telemetry |
| QA & Security engineer | CSP, Honeypot bot defense, and resilient `data-testid` selector taxonomy |

Read `rules/behavioral.md` before producing any output.  
Read `rules/copywriting.md` before writing any copy.  
Read `rules/security.md` before structuring forms, links, or scripts.  
Consult `references/` files when depth is needed on psychology, formulas, SEO, telemetry, automation testing, UI tokens, or icons.  
Use `templates/` files to structure all output (HTML/CSS or React/Tailwind).  
Run the `validators/` checklists internally before presenting the final version.

---

## Chat-Native Intake Protocol (5 Quick Questions)

When a user requests a landing page without an `inputs.json` file, evaluate their prompt against these 5 core inputs:

1. **Business & Offering:** What is the business name and core product/service?
2. **Target Audience & Core Pain:** Who is the buyer and what frustrating problem are they solving?
3. **Primary Call to Action (CTA):** What is the exact primary conversion goal (e.g., Book Demo, Start Free Trial, Buy Now, Get Quote)?
4. **Core Differentiator:** What is the single biggest advantage over alternatives or existing habits?
5. **Delivery Mode & Framework:**
   - **Mode:** Mode A (Strategy & Copy Deck), Mode B (Production Codebase), or Mode C (Complete Suite — Strategy + Code)?
   - **Framework:** Vanilla HTML/CSS or React / Next.js / Tailwind CSS?

> [!TIP]
> **Zero-Stall Rule:** If the user provides only a brief description or link (e.g. "Build a landing page for my AI accounting app"), DO NOT block execution asking all 5 questions. Immediately infer the best answers, mark unverified facts as `[ASSUMPTION]`, default to **Mode C (Complete Suite) with Vanilla HTML/CSS**, and produce the output directly.

---

## Three Execution Delivery Modes

Depending on the user's workflow needs, the generator operates in one of three modes:

### Mode A: Strategy & Copy Deck
Best for copywriters, strategists, and marketing teams planning content before development.
- Strategic Brief & Buyer Persona mapping (`templates/strategy_brief.md`)
- Complete SEO architecture & keywords (`references/seo_guidelines.md`)
- Full 13-Section Copywriting Deck (`templates/full_page_output.md`) with Hero A/B split-testing package (`templates/hero_section.md`)
- UX/UI & CRO recommendations + Content Placeholders & Assumptions log

### Mode B: Direct Production Codebase
Best for developers, founders, and indie hackers who need a working landing page immediately.
- Directly outputs or writes a ready-to-deploy, responsive codebase:
  - **HTML/CSS Option:** Complete self-contained `index.html` + `tokens.css` (or inlined).
  - **React Option:** Complete `LandingPage.tsx` + `tailwind.config.js`.
- Adheres 100% to **Production Minimal UI** (solid surfaces, 2px borders, tactile pill buttons, neutral matte dark mode, zero-glass/blur).
- Pre-wired with dual-layer bot protection (invisible honeypot + timing trap) and zero-backend form fallback or configurable `FORM_ENDPOINT_URL` (Formspree, Basin, Webhooks).
- Full `data-testid` selector taxonomy across all sections, inputs, and CTAs ready for Playwright/Cypress automation testing.
- Pre-configured `dataLayer.push` CRO telemetry (clicks, scroll milestones, submissions) and UTM persistence.
- Complete SEO metadata, Open Graph tags, skip-to-content a11y link, and active Schema.org JSON-LD.

### Mode C: Complete Suite (Default)
Produces **Mode A (Strategy & Copy Deck)** followed immediately by **Mode B (Production Codebase)**. Delivers the ultimate end-to-end asset for any project.

---

## Workflow (12 Steps)

```
Step 1   Intake & assumptions       → Chat-Native 5 Questions or templates/strategy_brief.md
Step 2   Strategic foundation        → templates/strategy_brief.md
Step 3   SEO & Schema.org foundation → references/seo_guidelines.md
Step 4   Write all 13 page sections  → templates/full_page_output.md
           3.1  Hero                 → templates/hero_section.md (includes A/B split-test variants)
           3.2  Trust strip
           3.3  Problem
           3.4  Solution
           3.5  Benefits
           3.6  Differentiation
           3.7  How it works
           3.8  Reinforcement
           3.9  Offer
           3.10 Social proof         → templates/testimonial_guide.md
           3.11 About
           3.12 FAQ                  → Schema.org FAQPage JSON-LD
           3.13 Final CTA / Form     → Lead capture with honeypot & timing defense
Step 5   Apply CTA standards         → rules/copywriting.md § CTA Requirements
Step 6   Production Minimal UI       → rules/ux_design.md & references/production_minimal_ui.md
Step 7   Form & Security hardening   → rules/security.md (CSP, Honeypot, XSS sanitization)
Step 8   CRO & Telemetry spec        → references/analytics_tracking.md (dataLayer, GA4, UTMs)
Step 9   QA Automation Selectors     → references/automation_testing.md (data-testid for E2E)
Step 10  Conversion optimisation     → references/conversion_psychology.md
Step 11  Placeholder & Assumption log→ templates/placeholder_log.md
Step 12  Code Export & Audit         → templates/html_starter.html / react_starter.tsx & validators/
```

---

## Output Structure (Mode A & Mode C)

Every run producing strategy documents must organize output in this order:

```
LANDING PAGE STRATEGY
────────────────────────────────────────────

1.  Strategic Foundation
2.  SEO Foundation & Schema.org JSON-LD
3.  Landing Page (sections 3.1 – 3.13 with Hero A/B variants)
4.  UX / UI Recommendations (Production Minimal UI)
5.  Security & Compliance Spec (CSP, Honeypot, Privacy)
6.  CRO Telemetry & Event Taxonomy (dataLayer events, UTMs)
7.  QA Automation Test Selectors (data-testid map)
8.  Content Placeholders and Assumptions Log
9.  Recommended Final Version / Code Export
```

Fill each section fully using the corresponding template.  
Prioritise strategic diversity over volume.  
Every variation must offer a meaningfully different angle — never a trivial rewording.

---

## Quick Reference: Core Principle

> **Features explain. Benefits persuade. Outcomes sell.**

See `references/copywriting_formulas.md` for all formulas.  
See `rules/behavioral.md` for all hard constraints.  
See `references/production_minimal_ui.md` for visual aesthetics.  
See `rules/security.md` and `references/automation_testing.md` for enterprise readiness.
