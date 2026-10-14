# Analytics, Conversion Tracking & CRO Telemetry

A comprehensive specification and drop-in implementation guide for landing page analytics, event telemetry, UTM attribution, and A/B test tracking.

---

## 1. Unified Event Schema (`dataLayer.push`)

All user interactions, button clicks, and micro-conversions must be dispatched through a standardized `dataLayer` array. This structure works seamlessly with **Google Tag Manager (GTM)**, **Google Analytics 4 (GA4)**, and customer data platforms like Segment or RudderStack.

### Standard Events Taxonomy

| Event Name | Trigger Condition | Parameters Payload |
|---|---|---|
| `landing_page_view` | Initial page load completed | `{ page_title, page_path, traffic_source, utm_campaign, variant_id }` |
| `cta_click` | Visitor clicks any primary or secondary CTA | `{ cta_text, cta_location, cta_destination, section_id }` |
| `form_start` | Visitor focuses or interacts with the first input | `{ form_id, form_name }` |
| `form_submit` | Lead form submitted successfully | `{ form_id, form_name, lead_type, utm_source, utm_medium }` |
| `faq_toggle` | Visitor expands an FAQ question accordion | `{ question_text, is_expanded: true }` |
| `scroll_milestone` | Scroll depth reaches 25%, 50%, 75%, 90% | `{ percent_scrolled: 50, time_on_page_seconds }` |
| `calculator_interact` | Visitor slides or alters an ROI calculator | `{ input_metric, output_value }` |
| `segment_switch` | Visitor switches tabbed audience perspective | `{ selected_tab }` |

---

## 2. Drop-in Event Tracking Helper (Vanilla JS)

Add this script to the landing page to automatically wire up CTA clicks, scroll depth tracking, and form interactions:

```javascript
// ── Universal CRO Telemetry Helper ──────────────────────────────────────────
window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, eventParams = {}) {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...eventParams
  };
  window.dataLayer.push(payload);
  
  // Console logging in development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('[Telemetry]', eventName, payload);
  }
}

// 1. Automatic CTA Click Tracking
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a.btn, button.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const section = btn.closest('section');
      trackEvent('cta_click', {
        cta_text: btn.textContent.trim(),
        cta_location: section ? section.id || section.className : 'header_or_dock',
        cta_destination: btn.getAttribute('href') || 'button_action'
      });
    });
  });

  // 2. Scroll Depth Milestones (25%, 50%, 75%, 90%)
  const milestones = [25, 50, 75, 90];
  const reached = new Set();
  
  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
    );
    
    milestones.forEach(m => {
      if (scrollPercent >= m && !reached.has(m)) {
        reached.add(m);
        trackEvent('scroll_milestone', { percent_scrolled: m });
      }
    });
  }, { passive: true });
});
```

---

## 3. Lead Capture UTM Attribution Protocol

Capturing attribution data enables exact ROI calculation for Google Ads, LinkedIn Ads, Meta Ads, and influencer campaigns.

### UTM Parameter List:
* `utm_source`: Traffic platform (e.g. `google`, `meta`, `newsletter`)
* `utm_medium`: Channel type (e.g. `cpc`, `paid_social`, `email`)
* `utm_campaign`: Campaign name (e.g. `q4_saas_launch`)
* `utm_term`: Search keyword or audience interest
* `utm_content`: Ad creative or variation identifier
* `gclid` / `fbclid`: Click IDs for Google / Meta offline conversion tracking

### Safe UTM Capture & Injection Script:

```javascript
function captureUtmParameters() {
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  const utmData = {};

  utmKeys.forEach(key => {
    const val = params.get(key);
    if (val) {
      // Sanitize input (alphanumeric, hyphens, underscores)
      const cleanVal = val.replace(/[^a-zA-Z0-9_\-\.]/g, '').slice(0, 100);
      utmData[key] = cleanVal;
      sessionStorage.setItem(key, cleanVal);
    } else {
      // Fallback to existing session data if visitor navigated pages
      const stored = sessionStorage.getItem(key);
      if (stored) utmData[key] = stored;
    }
  });

  // Populate hidden input fields in all forms on the page
  document.querySelectorAll('form').forEach(form => {
    Object.entries(utmData).forEach(([k, v]) => {
      let hiddenInput = form.querySelector(`input[name="${k}"]`);
      if (!hiddenInput) {
        hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = k;
        form.appendChild(hiddenInput);
      }
      hiddenInput.value = v;
    });
  });

  return utmData;
}

document.addEventListener('DOMContentLoaded', captureUtmParameters);
```

---

## 4. Meta Pixel & Google Analytics 4 (GA4) Direct Hooks

### GA4 Direct Snippet:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-[MEASUREMENT_ID]"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-[MEASUREMENT_ID]', {
    send_page_view: true,
    cookie_flags: 'SameSite=None;Secure'
  });
</script>
```

### Meta Pixel Conversion Snippet:
```javascript
// Dispatched inside form submit success handler:
if (typeof fbq === 'function') {
  fbq('track', 'Lead', {
    content_name: 'Main Landing Page Lead',
    status: 'success'
  });
}
```

---

## 5. A/B Split Testing Telemetry

When testing two headline or CTA variants (e.g. `Variant A: Loss Aversion` vs `Variant B: Outcome/Gain`):

1. **Tag the Variant ID:**
   ```html
   <body data-variant-id="variant_a">
   ```
2. **Send with Pageview & CTA clicks:**
   ```javascript
   const variantId = document.body.dataset.variantId || 'control';
   trackEvent('landing_page_view', { variant_id: variantId });
   ```
This allows Google Analytics, Mixpanel, or PostHog to immediately break down conversion rates by variant.
