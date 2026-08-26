# UX and Design Rules

Guidelines for page structure, visual hierarchy, layout recommendations, and
mobile behaviour. These rules apply to the UX / UI Recommendations section of
every output.

All visual UI, HTML, and CSS implementations MUST adhere to the **Liquid Glass
Design System** (`references/liquid_glass_design_system.md` & `templates/tokens.css`).

> **Core Philosophy:** Cool light grey-white ground (`#f5f5f7`) + unified white
> surfaces + hairline dividers (`rgba(0,0,0,0.07)`); glass ONLY where layers truly overlap.
> Restraint is the luxury.

---

## 5 Liquid Glass Core Philosophy Rules

1. **Unified surface > fragmented cards:** Sibling items belong on one white panel with hairline dividers (`rgba(0,0,0,0.07)`), not a pile of separately-bordered cards.
2. **Glass is seasoning, not the dish:** `backdrop-filter: saturate(180%) blur(20px)` frost ONLY on overlapping layers (sticky nav, modals, colored CTA blocks). Plain content is solid `#ffffff` + 2-layer shadow.
3. **Restraint is luxury:** If whitespace and hierarchy solve it, don't add borders, decorative icons, or colored fills.
4. **Hierarchy from weight + size + grayscale, not color:** Body world is black-white-grey. Color is strictly reserved for Accent (`#0071e3`), Heat (`#ff6b00`), and Live (`#30d158`).
5. **Quality lives in details:** Negative letter-spacing (`-0.02em` to `-0.035em`) on titles, `tabular-nums` on figures, 2-layer elevation shadows, hairline dividers.

---

## Default Page Hierarchy

Use this order unless the business model or conversion goal justifies a change.
Always explain the rationale if you deviate from the default.

```
Hero                  ← first impression, value proposition
Trust Strip           ← immediate credibility after the hero
Problem               ← empathy and resonance
Solution              ← the answer to the problem
Benefits              ← desire and specificity
Differentiation       ← why this product, not an alternative
How It Works          ← reduce process anxiety
Reinforcement         ← belief consolidation before the offer
Offer                 ← what is included and what it costs
Social Proof          ← third-party validation before final ask
About                 ← trust through human connection
FAQ                   ← eliminate final objections
Final CTA             ← committed visitor → conversion
```

**When to reorder:**
- Short-form squeeze page: Hero → Bullet benefits → Single CTA
- High-trust brand with strong social proof: Move Trust above Problem
- Free trial product: Move Offer higher (offer appears low-risk)
- B2B enterprise: Move About and Differentiation higher (credibility first)
- Event or launch page: Replace Offer with Event details

---

## Section Density Guide

| Section | Desktop | Mobile |
|---|---|---|
| Hero | Medium — clear, not cluttered | Light — one headline, one CTA visible |
| Trust Strip | Light — logos or a single stat | Light — horizontal scroll or 2-col grid |
| Problem | Medium — 3–5 blocks or paragraphs | Stack vertically, short paragraphs |
| Solution | Light — focus on the reveal | Light — single strong statement |
| Benefits | Heavy — 8–10 cards or blocks | Stack vertically, one card per viewport |
| Differentiation | Medium — comparison table or 3 columns | Stack comparison rows vertically |
| How It Works | Medium — 3–5 numbered steps | Stack steps vertically with connecting line |
| Offer | Medium — include list and CTA | Stack list, then CTA full-width |
| Social Proof | Medium — 2–3 quotes + result metrics | Carousel or stacked cards |
| About | Light — photo + short bio + mission | Stack image above text |
| FAQ | Medium — accordion preferred | Accordion (single open at a time) |
| Final CTA | Light — headline + CTA only | Full-width CTA, minimal text |

---

## CTA Placement Rules

| Position on page | CTA type | Purpose |
|---|---|---|
| Hero (above fold) | Primary CTA | Capture ready visitors immediately |
| After Solution reveal | Primary CTA | Capture visitors who only needed context |
| After Benefits section | Primary CTA | Capture desire-driven visitors |
| After How It Works | Secondary CTA | Capture anxious visitors now reassured |
| After Offer section | Primary CTA | Capture intent-driven visitors |
| After Social Proof | Primary CTA | Capture trust-driven visitors |
| Final CTA section | Primary CTA | Capture all remaining committed visitors |

**Rule:** Never place more than 2 CTAs in a single section.  
**Rule:** The primary CTA must appear at least 3 times on a full-length page.  
**Rule:** Secondary CTAs should be lower-commitment ("See How It Works" vs. "Book a Call").

---

## Desktop Layout Recommendations

| Section | Recommended layout |
|---|---|
| Hero | Full-width background, headline left or centre, visual right or behind |
| Trust Strip | Full-width row, logos or stats spaced evenly, light background |
| Problem | 2-column (text left, visual right) or centred single column |
| Solution | Centred, full-width, contrast background to signal transition |
| Benefits | 3-column grid (cards) or alternating 2-column rows |
| Differentiation | Comparison table (3 columns) or side-by-side panels |
| How It Works | Numbered horizontal steps or alternating vertical timeline |
| Offer | Centred card or 2-column (features left, CTA right) |
| Social Proof | 3-column card grid or full-width quote with background |
| About | 2-column: photo or video left, text right |
| FAQ | 2-column accordion or single-column full-width |
| Final CTA | Full-width, centred, high-contrast background |

---

## Mobile Layout Rules

1. Stack all multi-column layouts vertically
2. Headline font size: minimum 28px, recommended 32–40px
3. Body text: minimum 16px
4. CTA buttons: minimum 48px tall, full-width or near-full-width
5. Tap targets: minimum 44x44px for all interactive elements
6. Avoid horizontal scrolling (except intentional carousels)
7. Keep hero text under 60 characters per line on mobile
8. Accordion for FAQ (do not show all answers expanded on mobile)
9. Lazy-load images below the fold
10. Avoid autoplay video with audio on mobile

---

## Mobile Sticky CTA

Recommend a sticky bottom CTA bar on mobile when:
- The page is longer than 3 scrolls
- The conversion goal is a single clear action (not a multi-step form)
- The product is a purchase, booking, or sign-up (not a contact form)

**Sticky CTA bar format:**
- Background: brand primary colour
- Text: short CTA (under 5 words)
- Height: 56–64px
- Appears after the first scroll
- Disappears when the visitor reaches a full CTA section

Example sticky copy:
```
Book My Free Call
Start My Free Trial
Get a Custom Quote
```

---

## Navigation Recommendations

| Situation | Recommendation |
|---|---|
| Standalone landing page (no nav) | No navigation menu — focus on CTA only |
| Landing page within a site | Sticky minimal header: logo + single CTA |
| Long-form page | Add anchor links to a sticky header: Problem / Benefits / Pricing / FAQ |
| Mobile | Hamburger menu only if multiple anchor links needed |

Do not link away from a landing page unless the link leads to a conversion
(e.g. a booking tool, checkout, or sign-up form).

---

## Visual Hierarchy Rules

1. One H1 per page — the hero headline
2. Section titles are H2
3. Benefit and FAQ titles are H3
4. Never skip a heading level for visual effect — use CSS instead
5. Use white space to group related content and separate sections
6. Use background contrast to signal section transitions (light → dark → light)
7. Use size and weight to establish importance: headline > subheading > body > caption
8. Do not centre-align body copy longer than 3 lines on desktop

---

## Form Design Rules

For lead generation pages, the form is the conversion event. Apply these rules:

| Rule | Detail |
|---|---|
| Field count | Minimum needed. Every extra field reduces conversion |
| Required fields | Mark clearly — do not mark all fields required |
| Labels | Above the field, not inside as placeholder text |
| Error messages | Inline, specific, and non-punitive |
| Submit button | Full-width, strong CTA copy, high contrast |
| Privacy line | One line beneath the button: "We never share your information." |
| Success state | Show a clear confirmation message with next steps and timeframe |

**Recommended field order:**
1. First name (personalisation)
2. Email address (primary)
3. Company name (B2B only)
4. Project type or service interest (routing)
5. Budget range (qualification — B2B or high-value only)
6. Message (optional — reduces friction if removed for high-volume lead gen)

**Form headline:**
Frame the form as a benefit, not a data collection exercise.

- Instead of: "Contact Us"
- Write: "Tell Us About Your Project" or "Start Your Free Consultation"

---

## Page Speed Considerations

When relevant, include these notes in UX recommendations:

- Compress all images (WebP format preferred)
- Defer non-critical JavaScript
- Avoid hero background videos unless the page is specifically designed for them
- Use a CDN for all static assets
- Target Largest Contentful Paint under 2.5 seconds
- Avoid layout shifts caused by late-loading fonts (use font-display: swap)

---

## Accessibility Baseline

All layout recommendations must be compatible with:

- Keyboard navigation
- Screen reader semantic structure (proper heading order, alt text on images)
- Colour contrast ratio: minimum 4.5:1 for body text, 3:1 for large text
- Focus indicators on all interactive elements
- No information conveyed by colour alone
