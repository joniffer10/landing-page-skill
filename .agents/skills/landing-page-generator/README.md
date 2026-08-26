# Landing Page Generator

A production-quality AI skill that generates complete, high-converting landing
page systems for any product, service, startup, SaaS, app, agency, or business.

---

## What It Does

When activated, the AI becomes a seven-role expert:

- Conversion-focused landing page strategist
- Professional copywriter
- UX/content strategist
- Brand messaging strategist
- Customer psychology researcher
- Information architect
- CTA and conversion optimisation specialist

It produces a complete, structured document covering strategy, SEO, 13 page
sections, UX recommendations, conversion optimisation notes, a placeholder log,
and a clean final version ready for designer and developer handoff.

---

## Directory Structure

```
landing-page-generator/
│
├── SKILL.md                        Entry point and workflow orchestrator
├── README.md                       This file
├── LICENSE                         MIT license
│
├── rules/
│   ├── copywriting.md              Writing rules, formulas, tone, CTAs
│   ├── behavioral.md               Hard constraints: no fabrication, tagging protocol
│   └── ux_design.md                Layout, hierarchy, mobile, CTA placement
│
├── references/
│   ├── conversion_psychology.md    AIDA, loss aversion, social proof, friction
│   ├── copywriting_formulas.md     FAB, PAS, BAB, PASTOR, 4Ps and usage guide
│   └── seo_guidelines.md           Title, meta, slug, keywords, search intent
│
├── templates/
│   ├── strategy_brief.md           Strategic Foundation output template
│   ├── hero_section.md             Hero section fill-in template
│   ├── full_page_output.md         Complete 13-section page skeleton
│   ├── testimonial_guide.md        Real testimonial collection guide
│   └── placeholder_log.md          Tracking table for all placeholders
│
├── scripts/
│   └── gather_inputs.sh            Interactive input collection → inputs.json
│
└── validators/
    ├── quality_checklist.md        Pre-publish quality audit
    └── credibility_guard.md        Fabrication detection checklist
```

---

## How to Activate

In any Antigravity conversation, reference the skill by name:

```
Use the landing-page-generator skill to build a landing page for [business].
```

Or provide input directly:

```
Generate a landing page for:
- Business: Acme Studio
- Product: Brand identity design service
- Audience: Funded startups in Southeast Asia
- CTA: Book a discovery call
```

For more complete outputs, run the input script first:

```bash
bash .agents/skills/landing-page-generator/scripts/gather_inputs.sh
```

This will guide you through all input fields and write an `inputs.json` file.
Paste the contents of `inputs.json` into the conversation before invoking the
skill.

---

## Quick Example

**Input:**

```
Business: Vessel Coffee
Product: Specialty coffee subscription
Audience: Home baristas aged 25–40 in the US
CTA: Start my subscription
Primary keyword: specialty coffee subscription
```

**Output sections produced:**

1. Strategic Foundation (value proposition, problem map, objection stack)
2. SEO Foundation (title, meta, slug, keywords)
3. Hero (10 headlines, 5 subheadings, 10 CTAs + recommended combination)
4. Trust strip, Problem, Solution, Benefits (8–10 blocks), Differentiation,
   How It Works, Reinforcement, Offer, Social Proof, About, FAQ (8–12), Final CTA
5. UX / UI Recommendations
6. Conversion Optimisation Notes (5–10 specific recommendations)
7. Placeholder & Assumption Log
8. Recommended Final Version (designer-ready)

---

## Rules Summary

- Never fabricate testimonials, statistics, logos, awards, or client names
- Tag all missing information as `[PLACEHOLDER]`
- Tag all strategic assumptions as `[ASSUMPTION]`
- Never manufacture urgency or scarcity
- Every section must have a strategic conversion reason to exist
- The output must be useful to a copywriter, designer, and developer

See `rules/behavioral.md` for the full constraint list.

---

## Contributing

To extend or improve this skill:

1. Add new reference material to `references/`
2. Add new output formats to `templates/`
3. Add new validation criteria to `validators/`
4. Update `SKILL.md` to reference any new workflow steps

---

## License

MIT — see `LICENSE`.
