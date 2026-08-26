# SEO Guidelines Reference

Rules and best practices for the SEO Foundation section of every landing page.
SEO optimisation must always support conversion — it should never degrade the
naturalness or persuasiveness of the copy.

---

## Search Intent Classification

Identify the primary search intent before writing any SEO copy.

| Intent type | User is looking for | CTA implications |
|---|---|---|
| Informational | Answers, education, how-to | Soft CTA: guide, checklist, free resource |
| Navigational | A specific brand or site | Brand name in title; minimal CTA friction |
| Commercial investigation | Comparing options before buying | Differentiation and social proof prominent |
| Transactional | Ready to buy or take action | Strong primary CTA above fold; price visible |

Most landing pages target **commercial investigation** or **transactional**
intent. Adjust the page structure and CTA strength accordingly.

---

## Title Tag Rules

| Rule | Detail |
|---|---|
| Length | 50–60 characters (Google truncates beyond ~60) |
| Structure | Primary keyword first, brand name last |
| Format | Primary Keyword — Differentiator | Brand Name |
| Avoid | Keyword stuffing, all caps, clickbait |
| Tone | Descriptive and benefit-oriented |

**Examples:**

Good:
```
Brand Identity Design for Startups | Vessel Studio
Specialty Coffee Subscription — Freshly Roasted | Vessel Coffee
Website Design for Consultants | Acme Studio
```

Poor:
```
Best Cheapest Brand Design Agency Online — We Are Number 1
Home - Vessel Coffee
Welcome to Our Website | Acme Studio
```

---

## Meta Description Rules

| Rule | Detail |
|---|---|
| Length | 140–155 characters |
| Structure | Problem or benefit → differentiator → CTA |
| Keywords | Include the primary keyword naturally |
| Tone | Conversion-focused, not stuffed |
| Uniqueness | Every page must have a unique meta description |

**Template:**

> [Solve a specific problem] with [product/service]. [Differentiator].
> [CTA phrase].

**Example:**

> Get a brand identity that wins clients on first impression.
> Tailored for funded startups in Southeast Asia. Book your strategy session.

**Note:** Meta descriptions do not directly affect ranking but directly affect
click-through rate from search results. Treat them as ad copy.

---

## URL Slug Rules

| Rule | Detail |
|---|---|
| Format | All lowercase, words separated by hyphens |
| Length | As short as possible while remaining descriptive |
| Keywords | Include the primary keyword |
| Avoid | Underscores, numbers (unless essential), stop words |
| Avoid | Dynamic query strings in landing page URLs |

**Examples:**

Good:
```
/brand-identity-design-startups
/specialty-coffee-subscription
/website-design-consultants
```

Poor:
```
/page?id=123&cat=services&ref=google
/Brand_Identity_Design_For_Startups_2026
/our-amazing-brand-design-services-for-your-business
```

---

## Keyword Strategy

### Primary Keyword

- One per page
- Should appear in: title tag, H1, first 100 words of body copy, meta description, URL
- Use exact match or close variant naturally — do not force it

### Secondary Keywords

- 3–5 per page
- Should appear in: H2 headings, benefit headlines, FAQ questions, body copy
- Include semantic variants, related terms, and long-tail variations

### Keyword Density

- No target percentage — keyword density is not a ranking factor
- Primary keyword should appear naturally 3–6 times on a long-form page
- Secondary keywords: 1–3 times each
- Test naturalness: read the copy aloud — if a keyword placement sounds forced,
  remove it or rephrase

---

## On-Page SEO Checklist

Apply to every landing page output.

| Element | Requirement |
|---|---|
| H1 | One per page, includes primary keyword, matches user intent |
| H2s | One per major section, include secondary keywords naturally |
| H3s | Benefit titles, FAQ questions — use secondary or related keywords |
| Image alt text | Describe the image accurately; include keyword where natural |
| Internal links | Link to related pages if the site has them (omit on standalone pages) |
| External links | Only when citing a credible source; opens in new tab |
| Page speed | Target LCP under 2.5s; compress images; defer non-critical JS |
| Mobile | Must be fully functional on mobile (Google mobile-first indexing) |
| Schema markup | LocalBusiness, Product, or FAQ schema where relevant |

---

## FAQ Schema

When FAQs are included on the page, recommend implementing FAQ schema markup.
This can result in rich results in Google search (accordion FAQs in SERP).

**Implementation note for developers:**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does the process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most projects are completed within 4–6 weeks from kickoff."
      }
    }
  ]
}
```

---

## Keyword Integration by Section

| Section | Keyword placement |
|---|---|
| Hero headline (H1) | Primary keyword — naturally integrated |
| Hero subheading | Primary or secondary keyword |
| Problem section (H2) | Secondary keyword related to the problem |
| Benefits section headings (H3) | Secondary and related keywords |
| How It Works (H2) | Process-related secondary keyword |
| FAQ questions (H3) | Long-tail questions, secondary keywords |
| About section (H2) | Brand + location keyword if local SEO applies |
| Meta title | Primary keyword first |
| Meta description | Primary keyword within first 60 characters |

---

## Local SEO Considerations

When the business serves a specific geographic market:

- Include city/region in the H1 or H2 heading where natural
- Include city/region in the meta title
- Embed Google Maps or list the full address in the footer
- Implement LocalBusiness schema markup
- NAP consistency: ensure Name, Address, Phone are identical across all pages
  and all online listings

---

## What SEO Cannot Do

SEO optimisation cannot fix:

- A page with no clear value proposition
- A page with no primary CTA
- A page that loads slowly
- A page that is not mobile-responsive
- Copy that is keyword-stuffed and unreadable

Conversion comes first. If SEO optimisation degrades the copy quality, choose
the better copy every time.
