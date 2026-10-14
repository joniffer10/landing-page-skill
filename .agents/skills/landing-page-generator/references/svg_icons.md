# Production Minimal SVG Icon System

A collection of clean, crisp, accessible 24x24 vector icons designed specifically for the **Production Minimal UI System**. 

* **Stroke Width:** `2px` (tactile, high contrast)
* **ViewBox:** `0 0 24 24`
* **Color:** Uses `currentColor` to inherit parent text color
* **Style:** Flat, crisp, geometric, zero blur/gloss

---

## 1. Trust & Conversion Icons

### Checkmark (Features & Pricing Tiers)
```html
<svg class="icon icon-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <polyline points="20 6 9 17 4 12"></polyline>
</svg>
```

### Shield Check (Security & Guarantees)
```html
<svg class="icon icon-shield" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  <path d="m9 12 2 2 4-4"></path>
</svg>
```

### Lock (Data Privacy & Secure Checkout)
```html
<svg class="icon icon-lock" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
```

### Star (Ratings & Social Proof)
```html
<svg class="icon icon-star" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" aria-hidden="true">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
```

---

## 2. Navigation & Action Icons

### Arrow Right (Primary Action Buttons)
```html
<svg class="icon icon-arrow-right" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <line x1="5" y1="12" x2="19" y2="12"></line>
  <polyline points="12 5 19 12 12 19"></polyline>
</svg>
```

### Chevron Down (FAQ Accordions)
```html
<svg class="icon icon-chevron-down" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <polyline points="6 9 12 15 18 9"></polyline>
</svg>
```

### Sun & Moon (Theme Switcher)
```html
<!-- Sun (Light Mode) -->
<svg class="icon icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <circle cx="12" cy="12" r="5"></circle>
  <line x1="12" y1="1" x2="12" y2="3"></line>
  <line x1="12" y1="21" x2="12" y2="23"></line>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
  <line x1="1" y1="12" x2="3" y2="12"></line>
  <line x1="21" y1="12" x2="23" y2="12"></line>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
</svg>

<!-- Moon (Dark Mode) -->
<svg class="icon icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>
```

---

## 3. Product & Metrics Icons

### Lightning / Fast (Speed & Performance)
```html
<svg class="icon icon-zap" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
```

### Chart / Growth (Analytics & Outcomes)
```html
<svg class="icon icon-chart" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <line x1="18" y1="20" x2="18" y2="10"></line>
  <line x1="12" y1="20" x2="12" y2="4"></line>
  <line x1="6" y1="20" x2="6" y2="14"></line>
</svg>
```

### Users / Community (Customer Base & Collaboration)
```html
<svg class="icon icon-users" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
  <circle cx="9" cy="7" r="4"></circle>
  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
```

---

## Accessibility Best Practice
Always include `aria-hidden="true"` when an icon is purely decorative next to text. If an icon is used as a standalone button without visible text, provide an `aria-label`:
```html
<button aria-label="Toggle dark theme" class="theme-toggle-btn">
  <!-- svg icon here with aria-hidden="true" -->
</button>
```
