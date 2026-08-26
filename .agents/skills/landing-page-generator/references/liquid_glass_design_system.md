# iDesign — Liquid Glass Design System

When this skill produces any HTML/CSS/UI output, it MUST follow this design
system. This is the sole visual language for all generated landing pages.

Reference: naplesblue/apple-design-skill — Liquid Glass design language.

---

## Core Philosophy (One Sentence)

> Cool light grey-white ground + unified white surfaces + hairline dividers;
> glass only where layers truly overlap. **Restraint is the luxury.**

---

## The 5 Philosophy Rules (Apply in this order)

### Rule 1 — Unified Surface Over Fragmented Cards

Sibling items belong on **one white panel with hairline dividers**
(`rgba(0,0,0,0.07)`).

NEVER: a pile of separately-bordered, separately-tinted, separately-shadowed
cards for items in the same list.

This is enemy #1 of the Liquid Glass look. When in doubt: merge into one
surface, separate with a hairline.

### Rule 2 — Glass Is Seasoning, Not the Dish

`backdrop-filter: saturate(180%) blur(20px)` frost is used ONLY where layers
actually overlap:

- Sticky navigation bar
- Modal and popover overlays
- Colored CTA blocks that float over content

Plain content areas: solid `#ffffff` + soft 2-layer elevation shadow.
NEVER glass on plain content areas. Over-glassing reads as dirty.

### Rule 3 — Restraint Is Luxury

A thousand "no"s for one "yes".

If whitespace and typographic hierarchy solve the problem: no border, no fill,
no icon, no decorative element. Every visual element must earn its place.

### Rule 4 — Hierarchy From Weight + Size + Grayscale, Not Color

The body world is **black → white → grey**.

Color is reserved ONLY for:
- Accent (System Blue `#0071e3`) — primary buttons, active states, links
- Heat (Orange `#ff6b00`) — emphasis, hot items, warnings
- Live status (Green `#30d158`) — success, online, active

NEVER use color to fill space, decorate sections, or signal hierarchy.

### Rule 5 — Quality Lives in Details

These small decisions create the premium feel in aggregate:

- Negative letter-spacing on titles: `-0.02em` to `-0.035em`
- `font-variant-numeric: tabular-nums` on all numeric data
- Hairline dividers: `rgba(0,0,0,0.07)` — never heavier
- Hover lifts: gentle shadow increase, no color change
- 2-layer shadows: never a single hard drop shadow
- Glass uses `saturate(180%)` before `blur(20px)`

---

## Anti-Patterns — What Makes It NOT Liquid Glass

Study these. The self-check gate enforces them.

| Anti-pattern | Why it breaks Liquid Glass |
|---|---|
| Each list item gets its own border + tint + colored left-bar | Fragmentation — use one unified panel with hairlines |
| Blurring plain content sections | Glass is only for floating layers — blurring body text areas reads as dirty |
| Tinted section backgrounds, multi-color badges, rainbow gradients | Body world is grayscale. Color only for accent/heat/live |
| Warm cream / beige / kraft paper ground (`#faf8f5`, `#fffbf0`) | This is the over-used AI look. Ground is cool `#f5f5f7` always |
| Purple gradient on white hero | Only `--grad-blue` or `--grad-cta` tokens for gradient heroes |
| Hard black borders, heavy single drop-shadows | 2-layer soft shadows only, hairline dividers only |
| Emoji confetti, decorative pattern fills | Noise. Remove unconditionally |
| Even, timid spacing on every element | Intentional whitespace: let sections breathe with `clamp(34px, 6vw, 56px)` |
| Stats/numbers added to look "data-rich" | Only include numbers that carry real meaning, in `tabular-nums` |

---

## Surface Decision Tree

```
Is this a floating layer that overlaps other content?
  YES → backdrop-filter: saturate(180%) blur(20px) + semi-transparent bg
  NO  → solid #ffffff + var(--sh-card) or var(--sh-panel)

Are these sibling items?
  YES → One unified panel. Hairline dividers between items.
  NO  → Separate cards. Same shadow tokens. Same radius tier.

Does this section need visual emphasis?
  YES, it's a hero/CTA → var(--grad-blue) or var(--grad-cta) gradient
  YES, it's a stat/metric → System Blue accent on a white panel
  NO  → Solid white surface. Let the typography do the work.
```

---

## Radius Semantic Tiers

Never use ad-hoc radius values. Always use named tokens.

| Token | Value | Use for |
|---|---|---|
| `--r-pill` | 999px | Buttons, tags, segmented controls |
| `--r-hero` | 26px | Hero CTA banners |
| `--r-panel` | 22px | Main unified panels |
| `--r-card` | 18px | Standard cards |
| `--r-sheet` | 16px | Modals and bottom sheets |
| `--r-thumb` | 12px | Avatars and thumbnails |
| `--r-chip` | 6px | Small badges and chips |

### Radius Pairing Rules

- A panel (`--r-panel: 22px`) containing child items: child items touching the
  panel edge inherit a slightly smaller radius (`18px`).
- Buttons are always pill-shaped (`--r-pill`) unless embedded in a table row.
- Never mix multiple radius sizes in the same visual group.

---

## Elevation (Shadow) Tiers

Always use 2-layer shadows. Never a single hard drop shadow.

| Token | Use for |
|---|---|
| `--sh-card` | Default card elevation |
| `--sh-panel` | Main content panels |
| `--sh-lift` | Hover state (lift on interact) |
| `--sh-cta` | Colored CTA blocks (blue glow) |
| `--sh-overlay` | Modals, drawers, overlays |

### Shadow Rules

- Hover interaction: transition from `--sh-card` to `--sh-lift`
- CTA buttons get `--sh-cta` not `--sh-card`
- Do not apply shadows to hairline-divided list items within a unified panel
- Dark mode reduces opacity; do not invert shadow color

---

## Gradient Tokens (Hero and CTA Only)

| Token | Use for |
|---|---|
| `--grad-blue` | Hero section background |
| `--grad-warm` | Warning or promotional banner |
| `--grad-cta` | Primary CTA button (on white background) |

NEVER use gradients on plain body sections, benefit blocks, or FAQ sections.

---

## Typography Rules

| Element | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| Page H1 (hero) | clamp(40px, 6vw, 72px) | 700 | -0.035em | 1.05 |
| Section H2 | clamp(28px, 4vw, 48px) | 700 | -0.025em | 1.1 |
| Card H3 | 20–24px | 600 | -0.02em | 1.2 |
| Body | 17px | 400 | 0 | 1.85 |
| Caption / meta | 13–14px | 400 | 0.01em | 1.5 |
| CTA button | 17px | 500 | -0.01em | 1 |
| Numeric data | any | any | 0 | — (tabular-nums) |

### Typography Anti-Patterns

- Never `letter-spacing: 0.1em` on headlines — that is 2010-era design
- Never centre-align body paragraphs longer than 3 lines on desktop
- Never mix more than 2 type weights in a single card
- Never use a decorative typeface for body copy

---

## Motion Tokens

| Token | Value | Use for |
|---|---|---|
| `--ease-spring` | cubic-bezier(0.32, 0.72, 0, 1) | Expansions, modals, drawers |
| `--ease-out-quart` | cubic-bezier(0.25, 1, 0.5, 1) | Hover transitions, button presses |

Default transition: `all 0.22s var(--ease-out-quart)`
Heavy element enter: `all 0.38s var(--ease-spring)`

Avoid: `linear`, `ease-in` for UI elements. Avoid transitions longer than 500ms
in interactive elements.

---

## Layout Rules

```css
/* Centred reading column */
max-width: var(--max-read);   /* 720px */

/* Centred grid */
max-width: var(--max-grid);   /* 1120px */

/* Section vertical rhythm */
padding-block: clamp(34px, 6vw, 56px);

/* Inner horizontal padding */
padding-inline: var(--pad-x); /* 22px */

/* Responsive spacing */
gap: clamp(16px, 2.5vw, 24px);
```

### Layout Rules

- Never use a fixed-width layout without a `max-width` container
- Use CSS Grid for section layouts; Flexbox for inline arrangements
- All touch targets: minimum 44 × 44px
- Responsive: use `clamp()` for typography and spacing, not multiple breakpoints
- Avoid `px` for font sizes in body copy — use `rem` or `clamp()`

---

## Dark Mode

Apply via `:root.dark` class (toggled by JS). All tokens remap automatically.
Key dark mode rules:

- Ground becomes `#000000` (true black on OLED — not `#121212`)
- Surface becomes `#1c1c1e` (not navy, not charcoal)
- Hairlines become `rgba(255,255,255,0.12)`
- Shadow opacity increases (dark surfaces need stronger shadows)
- Accent blue shifts to `#0a84ff` (brighter for dark contrast)

Do not invert images in dark mode. Do not use dark grey as a background tint
for sections — use surface `#1c1c1e` only.

---

## Self-Check Gate (Run Before Delivering Any HTML)

Mark every item PASS or FAIL. A FAIL requires revision.

- [ ] Ground is cool `#f5f5f7` — never warm/cream/kraft
- [ ] Content sits on solid `#ffffff` surfaces
- [ ] Container centred with `max-width` (720 reading / 1120 grid)
- [ ] Sibling list items use **one unified panel + hairline**, not fragmented cards
- [ ] Glass (`backdrop-filter`) appears ONLY on nav / overlays / CTA blocks
- [ ] Big titles have negative letter-spacing (`-0.02em` to `-0.035em`)
- [ ] Long body line-height ≥ 1.85
- [ ] All numeric data uses `font-variant-numeric: tabular-nums`
- [ ] All radius values use named token tiers, not ad-hoc px values
- [ ] Shadows use 2-layer tokens, not single hard drop-shadows
- [ ] Accent color is System Blue / Heat Orange / Live Green ONLY
- [ ] Everything else in the palette is greyscale
- [ ] Touch targets ≥ 44px
- [ ] Responsive layout uses `clamp()` for spacing and typography
- [ ] Dark mode maps automatically via `:root.dark`
- [ ] No anti-patterns present (fragmented cards, warm ground, over-glassing,
      rainbow decorations, emoji confetti, heavy borders)
