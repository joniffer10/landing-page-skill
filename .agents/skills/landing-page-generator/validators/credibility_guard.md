# Validator: Credibility Guard

A dedicated fabrication audit. Run this after the quality_checklist.md and
before final delivery. Its sole purpose is to detect invented content.

A single fabricated fact, testimonial, or statistic can permanently damage
the business's reputation and expose them to legal risk. This checklist
exists because the risk is real.

---

## How to Use

1. Search the entire output for each category below
2. For each item found, verify it against the original inputs
3. If the item was NOT in the inputs, it must either be removed or marked [PLACEHOLDER]
4. Do not present fabricated content even if it sounds plausible

---

## 1. Testimonials and Quotes

For every testimonial or customer quote in the output:

| Check | Result |
|---|---|
| Is the customer name taken from the real inputs? | |
| Is the quote the customer's actual words (not paraphrased by AI)? | |
| Is the company name confirmed? | |
| Has written consent been obtained (or marked [PLACEHOLDER])? | |
| Is the specific result quoted (metric, timeframe) real and verified? | |

**Fabrication signals to look for:**
- Suspiciously perfect quotes with no specific details
- Generic names without company attribution
- Results that seem round (e.g. "increased revenue by 300%") without a source
- Quotes that sound like marketing copy, not natural speech
- Customers described as "a small business owner" without a name

**Action if fabrication detected:**
Replace with [PLACEHOLDER — real testimonial from customer who struggled with
X and achieved Y. Refer to templates/testimonial_guide.md.]

---

## 2. Statistics and Metrics

For every number, percentage, or metric in the output:

| Check | Result |
|---|---|
| Does this number appear in the inputs provided? | |
| Is the source of this number the client (not generated)? | |
| Is the metric specific and attributable (not a vague "up to X%")? | |
| Is it free of exaggeration or cherry-picking? | |

**Fabrication signals to look for:**
- "X% of customers report..." — source unknown
- "Businesses using [product] see Y% improvement" — unverified
- "Over Z satisfied customers" — if not provided by client
- Round numbers without context ("10x results", "saves 40 hours")

**Action if fabrication detected:**
Replace with [PLACEHOLDER — insert real metric from client, verified before
publishing] or remove the claim entirely.

---

## 3. Awards, Certifications, and Press

For every award, certification, or press mention in the output:

| Check | Result |
|---|---|
| Is this award real and won by this specific business? | |
| Is the year and awarding body accurate? | |
| Is the press mention real (real publication, real article)? | |
| Is the certification current and applicable to this business? | |

**Fabrication signals to look for:**
- "Award-winning" without naming the award
- "As featured in Forbes / TechCrunch / Bloomberg" — verify before use
- Certifications that were not mentioned in the inputs
- "Industry-recognised" without a specific body

**Action if fabrication detected:**
Remove entirely or replace with [PLACEHOLDER — list real awards or press
mentions with verification].

---

## 4. Client Names and Logos

For every client name or logo reference in the output:

| Check | Result |
|---|---|
| Is this client name taken directly from the inputs? | |
| Has the client given written permission to be named publicly? | |
| Is the logo available in the correct format with usage rights? | |
| Is the client relationship accurately characterised? | |

**Fabrication signals to look for:**
- Well-known brand names used as clients when not mentioned in inputs
- "Trusted by companies like..." followed by invented examples
- Logo bar placeholder text implying specific real clients

**Action if fabrication detected:**
Replace with [PLACEHOLDER — client logo. Must obtain written permission
before publishing. See templates/testimonial_guide.md § Consent.]

---

## 5. Founder and Team Claims

For every claim about the founder or team in the output:

| Check | Result |
|---|---|
| Are years of experience confirmed in the inputs? | |
| Are named credentials (degrees, certifications) confirmed? | |
| Are previous employer or client references confirmed? | |
| Is the team size accurate (not inflated)? | |
| Is the founding year accurate? | |

**Fabrication signals to look for:**
- "Over 15 years of experience" — if not stated in inputs
- Named universities or employers not mentioned by client
- "Ex-Google, ex-McKinsey" type claims without confirmation
- Specific past client names in the About section not confirmed in inputs

**Action if fabrication detected:**
Replace specific claims with [PLACEHOLDER — insert verified credential] or
generalise to "extensive experience in [field]" until confirmed.

---

## 6. Competitive Claims

For every comparison or superiority claim in the output:

| Check | Result |
|---|---|
| Is the comparison based on a verifiable attribute? | |
| Is the claim supported by evidence (or marked [ASSUMPTION])? | |
| Does the output name a specific competitor negatively? | |
| Does the comparison table contain any invented values? | |

**Fabrication signals to look for:**
- "Unlike [named competitor], we..." followed by an attack
- "The only platform that..." — verify before use
- Comparison table values for the competitor column that were not sourced
- "Ranked #1 for..." without a verifiable ranking source

**Action if fabrication detected:**
Remove competitor names from negative framings. Replace comparison table
values with [ASSUMPTION — verify before publishing] or remove the table.

---

## 7. Urgency and Scarcity

For every urgency or scarcity claim in the output:

| Check | Result |
|---|---|
| Is the deadline real and confirmed by the client? | |
| Is the scarcity (limited spots, limited stock) real and verifiable? | |
| Is the "early bird" offer genuinely time-limited? | |
| Are countdown timers linked to a real event (not a rolling reset)? | |

**Action if fabrication detected:**
Remove the urgency claim entirely. Never manufacture scarcity.

---

## Credibility Guard Summary

| Category | Issues found | Actions taken |
|---|---|---|
| Testimonials and quotes | | |
| Statistics and metrics | | |
| Awards, certifications, press | | |
| Client names and logos | | |
| Founder and team claims | | |
| Competitive claims | | |
| Urgency and scarcity | | |

**Final status:**

- [ ] No fabricated content detected — output is safe to deliver
- [ ] Fabricated content found and replaced with [PLACEHOLDER] — output is safe to deliver
- [ ] Fabricated content found and NOT yet resolved — DO NOT DELIVER

*Audited by: [AI / Name]*
*Date: [DATE]*
