# UX and Design Rules

Guidelines for page structure, visual hierarchy, layout recommendations, and
mobile behaviour. These rules apply to the UX / UI Recommendations section of
every output.

All visual UI, HTML, and CSS implementations MUST adhere to the **Production Minimal UI System** (`references/production_minimal_ui.md` & `templates/tokens.css`).

> **Core Philosophy:** Flat, tactile, distraction-free minimalist UI inspired by Pinterest and Raycast. 100% solid matte surfaces with zero glass or translucency, crisp 1px matte borders, WCAG AAA/AA contrast, fluid responsive metamorphosis, and tactile action pills.

---

## Production Minimal UI Core Principles

1. **Absolute Anti-Patterns (Liquid Glass & Gloss Ban):**
   - **Never use `backdrop-filter: blur(...)` or `backdrop-blur-*`:** No frosted-glass modals, hazy toolbars, or blurry backdrops.
   - **Never use translucent glowing borders in Dark Mode:** Zero semi-transparent whites (e.g. `rgba(255, 255, 255, 0.15)`) or neon specular lines. Dark mode borders must be matte neutral tones (`--border-default: #2C2C32`, `--border-subtle: #222226`).
   - **100% Solid Surfaces:** Every surface, card, popover, modal, and header must be an opaque fill in both light and dark modes.

2. **Structural Separation via Matte Tonal Steps:**
   - Separate containers using solid matte tonal steps (Canvas `--bg-app` → Surface `--bg-surface` → Subtle `--bg-surface-subtle`) and 1px crisp matte borders (`--border-default`), never drop-shadow halos or specular highlights.

3. **Action Pill Buttons & Tactile Ergonomics:**
   - Primary action pills use signature focal red (`--brand-primary: #E60023`), neutral dark pill (`--brand-neutral: #18181A` / dark-mode `#F4F4F6`), `rounded-full` (9999px), and subtle tactile compression (`active:scale-95`).

4. **Universal Accessibility & Focus:**
   - Minimum touch target: **44x44px** on desktop/tablet, **48x48px** on mobile.
   - WCAG AAA contrast for titles, AA for body.
   - Visible focus states: `outline: 2px solid var(--focus-ring); outline-offset: 2px;`.
   - Motion ergonomics: Support `@media (prefers-reduced-motion: reduce)`.

5. **Responsive Architecture & Navigation Metamorphosis:**
   - Desktop: Vertical navigation rail (`w-[68px]`) or clean solid top bar.
   - Mobile (`< 768px` / `< 640px`): Collapses into fixed bottom dock (`h-16`) with safe-area insets (`pb-[env(safe-area-inset-bottom)]`), solid opaque surface background (`--bg-surface`), and 1px top border (`--border-subtle`).

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
