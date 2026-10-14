---
name: production-minimal-ui
description: Architect, design, and generate production-grade, accessible, responsive flat minimalist UI/UX components and layouts inspired by Pinterest, Raycast, and modern creative platforms. Use when generating production code (React, Tailwind CSS, Web Components), establishing WCAG 2.1 AA/AAA design tokens, solid dark-mode surfaces with zero glass/translucency, fluid responsive breakpoints, and tactile content-first layouts.
---

# Production Minimal UI System (Flat, Responsive & Universal UX)

An opinionated, production-grade design system and implementation guide engineered for crisp, tactile, distraction-free, and universally responsive interfaces.

---

## 1. Absolute Anti-Patterns (Zero Glass & Zero Gloss)

### Liquid Glass Ban
* **Never use `backdrop-filter: blur(...)` or `backdrop-blur-*`:** No frosted-glass modals, hazy toolbars, or blurry backdrops.
* **Never use translucent glowing borders in Dark Mode:** Do not use semi-transparent whites (e.g., `rgba(255, 255, 255, 0.15)`) or neon highlights that mimic light catching a glass pane.
* **100% Solid Surfaces:** Every surface, modal, card, and popover must be an opaque fill in both light and dark modes.

### Structural Separation
* Separate containers using solid matte tonal steps (Canvas → Surface → Elevated Surface) and 1px matte borders, never drop-shadow halos or specular highlights.

---

## 2. Design Tokens & Semantic Variables

### Semantic Surface & Border Matrix (Solid Matte)

```css
:root {
  /* Surfaces & Canvas (Light) */
  --bg-app: #F7F7F8;
  --bg-surface: #FFFFFF;
  --bg-surface-subtle: #F0F0F2;
  --bg-surface-hover: #E6E6EB;
  --bg-surface-active: #DCDCE2;

  /* Borders & Hairlines (Light - 1px Crisp Matte) */
  --border-subtle: #ECECED;
  --border-default: #E2E2E6;
  --border-strong: #C7C7CE;

  /* Typography (WCAG 2.1 AAA Compliant) */
  --text-primary: #111111;       /* 16.5:1 contrast against pure white */
  --text-secondary: #585860;     /* 5.6:1 contrast (WCAG AA compliant) */
  --text-tertiary: #787882;      /* Helper icons & timestamps */
  --text-inverse: #FFFFFF;

  /* Brand & Actions */
  --brand-primary: #E60023;      /* Signature Focal Red */
  --brand-primary-hover: #CC001F;
  --brand-primary-active: #A80019;
  --brand-primary-fg: #FFFFFF;

  --brand-neutral: #18181A;      /* Dark solid action pill */
  --brand-neutral-hover: #2E2E33;
  --brand-neutral-fg: #FFFFFF;

  /* Universal Accessibility & Focus */
  --focus-ring: #0066CC;
  --focus-ring-offset: #FFFFFF;

  /* Flat Controlled Elevation (Light Mode) */
  --shadow-surface: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03);
  --shadow-popover: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
}

/* Dark Mode Tokens (100% Solid Matte, Zero Liquid Edge) */
@media (prefers-color-scheme: dark) {
  :root {
    /* Pure Solid Matte Backgrounds */
    --bg-app: #0F0F11;
    --bg-surface: #18181B;
    --bg-surface-subtle: #242428;
    --bg-surface-hover: #2E2E34;
    --bg-surface-active: #383840;

    /* Matte Muted Borders (Never glow or glassy white lines) */
    --border-subtle: #222226;
    --border-default: #2C2C32;
    --border-strong: #3D3D46;

    /* Typography */
    --text-primary: #F4F4F6;
    --text-secondary: #A0A0A8;
    --text-tertiary: #6E6E78;
    --text-inverse: #111111;

    --brand-neutral: #F4F4F6;
    --brand-neutral-hover: #E0E0E6;
    --brand-neutral-fg: #111111;

    --focus-ring: #3B82F6;
    --focus-ring-offset: #0F0F11;

    /* Elevation in Dark Mode (Pure Border Containment, Zero Dirty Halos) */
    --shadow-surface: 0 0 0 1px var(--border-default);
    --shadow-popover: 0 8px 24px rgba(0, 0, 0, 0.6), 0 0 0 1px var(--border-default);
  }
}
```

### Typographic Scale

* **Display / H1:** `clamp(1.5rem, 1.2rem + 1.2vw, 2rem)` / Weight: `700` / Tracking: `-0.025em`
* **Section / H2:** `20px` / Line Height: `1.3` / Weight: `600` / Tracking: `-0.015em`
* **Body / Standard:** `16px` / Line Height: `1.5` / Weight: `400` / Tracking: `-0.005em`
* **Subtext / Labels:** `14px` / Line Height: `1.4` / Weight: `500` / Tracking: `0`
* **Micro / Metadata:** `12px` / Line Height: `1.3` / Weight: `600` / Tracking: `+0.01em`

### Precision Radius Scale

* **8px (`rounded-lg`):** Tooltips, tags, compact chips.
* **14px (`rounded-xl`):** Dropdown popovers, select menus, input fields.
* **20px (`rounded-2xl`):** Sidebar squircle active hitboxes, preview thumbnails.
* **32px (`rounded-3xl`):** Media pin cards, large containers.
* **9999px (`rounded-full`):** Action pills (`Save`, `Create`, `Visit site`, search inputs).

---

## 3. Responsive Architecture & Viewport Adaptations

| Breakpoint | Window Width | Layout Structure | Navigation Metamorphosis | Touch Target Size |
| --- | --- | --- | --- | --- |
| **Mobile (`sm`)** | `< 640px` | Single-column fluid stack; full-width media cards | Fixed bottom bar (`h-16`) with safe-area insets | $\ge$ 48x48px (Thumb ergonomics) |
| **Tablet (`md`)** | `640px – 1023px` | Adaptive 2-column or collapsible preview | Compact vertical icon rail (`56px – 64px`) | $\ge$ 44x44px |
| **Desktop (`lg`+)** | `≥ 1024px` | Split-view canvas (media left, metadata right) | Fixed vertical sidebar rail (`68px – 72px`) or top bar | $\ge$ 44x44px |

### Key Adaptive Behaviors

1. **Rail to Bottom Dock:** Navigation shifts from a desktop left sidebar (`w-[68px]`, full viewport height) or top bar to a fixed bottom dock (`h-16 w-full bottom-0 left-0 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] pb-[env(safe-area-inset-bottom)]`) on mobile.
2. **Split Card Stacking:** The 50/50 dual-column desktop pin card collapses into a vertical single-column stack on mobile. Primary action pills pin to a sticky bottom bar so users do not need to scroll to access core verbs.
3. **Fluid Masonry Columns:**
* Mobile: 2 columns with 12px gutters.
* Tablet: 3 columns with 16px gutters.
* Desktop: 4 to 5 fluid columns with 16px gutters.
* All media containers must reserve aspect ratios to ensure Cumulative Layout Shift (CLS) = 0.

---

## 4. Universal UX & Accessibility Standards

1. **Touch Target Size:** Interactive elements must have a minimum hit area of **44x44 CSS pixels** on desktop/tablet, and **48x48 CSS pixels** on mobile.
2. **Keyboard Navigation & Focus Management:**
* Never hide `:focus` outlines without a visible fallback.
* Enforce `:focus-visible` using `outline: 2px solid var(--focus-ring); outline-offset: 2px;`.
* Floating menus, modals, and sheets must trap focus, dismiss on `Escape`, and return focus to the trigger on close.
3. **Screen Reader Optimization:**
* All icon-only buttons require an explicit `aria-label` or `.sr-only` descriptive tag.
* Contextual popover menus must implement `role="menu"` with child `role="menuitem"` elements.
* Expandable sections must toggle `aria-expanded="true|false"`.
4. **Motion Ergonomics:**
* Micro-interactions should use subtle tactile compression (`active:scale-[0.97] transition-transform duration-150`).
* Wrap kinetic movements in reduced motion media queries:
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 5. Component Patterns

### A. Responsive Navigation Metamorphosis

```html
<!-- Desktop Navigation Rail (≥ 768px) -->
<aside class="hidden md:flex fixed top-0 left-0 bottom-0 w-[68px] bg-[var(--bg-surface)] border-r border-[var(--border-subtle)] flex-col items-center py-4 z-40">
  <a href="/" aria-label="Home" class="w-12 h-12 flex items-center justify-center rounded-2xl bg-[var(--bg-surface-subtle)] text-[var(--text-primary)]">
    <!-- Icon SVG -->
  </a>
</aside>

<!-- Mobile Bottom Navigation (< 768px) -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] flex items-center justify-around z-40 pb-[env(safe-area-inset-bottom)]">
  <a href="/" aria-label="Home" class="min-w-[48px] min-h-[48px] flex items-center justify-center text-[var(--text-primary)]">
    <!-- Icon SVG -->
  </a>
</nav>
```

### B. Action Pill Buttons

```html
<!-- Primary Action (Focal CTA) -->
<button class="h-11 px-6 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] active:scale-95 text-white font-semibold text-sm transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]">
  Save
</button>

<!-- Secondary Action -->
<button class="h-11 px-6 rounded-full bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] active:scale-95 text-[var(--text-primary)] font-semibold text-sm transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]">
  Visit site
</button>
```

### C. Contextual Floating Popover (Zero Glass)

```html
<div role="menu" aria-orientation="vertical" class="min-w-[190px] p-1.5 bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl shadow-[var(--shadow-popover)]">
  <button role="menuitem" class="w-full text-left px-3.5 py-2.5 rounded-xl font-medium text-sm text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors focus-visible:bg-[var(--bg-surface-hover)]">
    Pin
  </button>
  <button role="menuitem" class="w-full text-left px-3.5 py-2.5 rounded-xl font-medium text-sm text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors focus-visible:bg-[var(--bg-surface-hover)]">
    Board
  </button>
</div>
```

---

## 6. Implementation Checklist

* [ ] Zero instances of `backdrop-filter` or `backdrop-blur` in generated code.
* [ ] 100% solid matte surfaces across all layers, modals, headers, and cards.
* [ ] Dark mode borders use matte neutral tones (`#2C2C32`) instead of glowing semi-transparent whites.
* [ ] Navigation automatically collapses to an accessible mobile bottom bar on screens `< 768px`.
* [ ] Detail split-pane stacks cleanly into a single-column layout without horizontal overflow.
* [ ] Text contrast ratios satisfy WCAG AA (minimum 4.5:1) for body text and AAA (minimum 7:1) for headlines.
* [ ] Interactive touch targets satisfy 44x44px (desktop) and 48x48px (mobile).
* [ ] The reduced motion query `@media (prefers-reduced-motion: reduce)` is present on all kinetic transitions.
