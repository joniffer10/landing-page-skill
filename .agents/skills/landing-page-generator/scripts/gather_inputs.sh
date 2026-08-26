#!/usr/bin/env bash
# =============================================================================
# Landing Page Generator — Input Gathering Script
# =============================================================================
# Walks through all input fields required by the skill and writes a structured
# inputs.json file in the skill directory.
#
# Usage:
#   bash .agents/skills/landing-page-generator/scripts/gather_inputs.sh
#
# Output:
#   .agents/skills/landing-page-generator/inputs.json
#
# After running, paste the contents of inputs.json into your AI conversation
# before invoking the landing-page-generator skill.
# =============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(dirname "$SCRIPT_DIR")"
OUTPUT_FILE="$SKILL_DIR/inputs.json"

# ── Colour helpers ────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
RESET='\033[0m'

# ── Prompt helpers ────────────────────────────────────────────────────────────
prompt_field() {
  local label="$1"
  local required="$2"       # "required" or "optional"
  local example="${3:-}"
  local value=""

  if [ -n "$example" ]; then
    echo -e "  ${YELLOW}${label}${RESET} ${BLUE}(${required})${RESET}"
    echo -e "  Example: ${example}"
  else
    echo -e "  ${YELLOW}${label}${RESET} ${BLUE}(${required})${RESET}"
  fi

  while true; do
    printf "  → "
    read -r value
    if [ "$required" = "required" ] && [ -z "$value" ]; then
      echo -e "  ${RED}This field is required. Please enter a value.${RESET}"
    else
      break
    fi
  done

  printf '%s' "$value"
}

prompt_multiline() {
  local label="$1"
  local required="$2"
  echo -e "  ${YELLOW}${label}${RESET} ${BLUE}(${required} — enter multiple lines, blank line to finish)${RESET}"
  local lines=()
  while IFS= read -r line; do
    [ -z "$line" ] && break
    lines+=("$line")
  done
  local joined
  joined="$(IFS=$'\n'; echo "${lines[*]}")"
  printf '%s' "$joined"
}

escape_json() {
  local s="$1"
  s="${s//\\/\\\\}"
  s="${s//\"/\\\"}"
  s="${s//$'\n'/\\n}"
  s="${s//$'\r'/}"
  printf '%s' "$s"
}

section_header() {
  echo ""
  echo -e "${BOLD}${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
  echo -e "${BOLD}${GREEN}  $1${RESET}"
  echo -e "${BOLD}${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
  echo ""
}

# ── Welcome ───────────────────────────────────────────────────────────────────
clear
echo ""
echo -e "${BOLD}╔════════════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}║       LANDING PAGE GENERATOR                   ║${RESET}"
echo -e "${BOLD}║       Input Collection Script                   ║${RESET}"
echo -e "${BOLD}╚════════════════════════════════════════════════╝${RESET}"
echo ""
echo "  This script collects all inputs needed for the skill."
echo "  Required fields must be filled. Optional fields can be left blank."
echo "  Output will be saved to: inputs.json"
echo ""
echo "  Press ENTER to begin..."
read -r

# ── BUSINESS ──────────────────────────────────────────────────────────────────
section_header "1 / 6  BUSINESS"

business_name=$(prompt_field "Business name" "required" "Acme Studio")
product_name=$(prompt_field "Product / service name" "required" "Brand Identity Design")
product_description=$(prompt_multiline "Product / service description" "required")
industry=$(prompt_field "Industry" "required" "Creative services / SaaS / E-commerce")
business_stage=$(prompt_field "Business stage" "required" "idea / early / growth / established")
location=$(prompt_field "Geographic market(s) served" "required" "Southeast Asia / United States / Global")
website_url=$(prompt_field "Website URL (if live)" "optional" "https://acmestudio.com")

# ── AUDIENCE ──────────────────────────────────────────────────────────────────
section_header "2 / 6  AUDIENCE"

ideal_customer=$(prompt_field "Ideal customer" "required" "Funded startups needing a brand identity")
age_range=$(prompt_field "Age range" "optional" "28–45")
geography=$(prompt_field "Geography" "optional" "Singapore, Malaysia, Indonesia")
occupation=$(prompt_field "Occupation / role" "optional" "Founders, Marketing Directors")
income_level=$(prompt_field "Income / company size" "optional" "Series A–B / USD 100k–500k ARR")
interests=$(prompt_field "Interests" "optional" "Design, growth, product-led businesses")
knowledge_level=$(prompt_field "Knowledge level" "required" "beginner / intermediate / expert")
pain_points=$(prompt_multiline "Main pain points" "required")
desired_outcomes=$(prompt_multiline "Desired outcomes" "required")
buying_motivations=$(prompt_multiline "Buying motivations" "optional")
common_objections=$(prompt_multiline "Common objections" "optional")

# ── BRAND ─────────────────────────────────────────────────────────────────────
section_header "3 / 6  BRAND"

tone_of_voice=$(prompt_field "Tone of voice" "required" "professional, warm, direct")
brand_personality=$(prompt_field "Brand personality" "optional" "confident, thoughtful, no-nonsense")
positioning=$(prompt_field "Market positioning" "optional" "Premium studio for high-growth startups")
differentiators=$(prompt_multiline "Key differentiators" "required")
competitors=$(prompt_field "Main competitors" "optional" "Pentagram, Collins, local freelancers")
keywords=$(prompt_field "SEO / positioning keywords" "optional" "brand identity design startups Singapore")
brand_promises=$(prompt_multiline "Brand promises" "optional")

# ── CONVERSION ────────────────────────────────────────────────────────────────
section_header "4 / 6  CONVERSION"

primary_cta=$(prompt_field "Primary CTA action" "required" "Book a discovery call")
secondary_cta=$(prompt_field "Secondary CTA action" "optional" "Download our brand guide")
conversion_goal=$(prompt_field "Conversion goal" "required" "lead / purchase / sign-up / call / demo")
offer=$(prompt_multiline "What the customer receives" "required")
pricing=$(prompt_field "Pricing (if shareable)" "optional" "Starting from USD 8,000 / From USD 49/month")
guarantee=$(prompt_field "Guarantee (if any)" "optional" "30-day satisfaction guarantee")

# ── TRUST ─────────────────────────────────────────────────────────────────────
section_header "5 / 6  TRUST"

testimonials=$(prompt_multiline "Real testimonials (full name + quote, or leave blank)" "optional")
reviews=$(prompt_field "Review platform + rating" "optional" "Google 4.9 / 47 reviews")
client_logos=$(prompt_field "Client logos (list names if permission granted)" "optional" "Grab, Shopee, Funding Societies")
awards=$(prompt_field "Real awards or certifications" "optional" "Red Dot Award 2025")
metrics=$(prompt_field "Real, verified metrics" "optional" "200+ brand projects delivered")
founder_info=$(prompt_multiline "Founder / team background" "optional")

# ── DESIGN ────────────────────────────────────────────────────────────────────
section_header "6 / 6  DESIGN"

visual_style=$(prompt_field "Preferred visual style" "optional" "clean, minimal, editorial")
brand_colors=$(prompt_field "Brand colours (hex or description)" "optional" "#1A1A2E, #E8E8E8, accent gold")
typography=$(prompt_field "Typography preferences" "optional" "Inter, Neue Haas Grotesk")
design_references=$(prompt_field "Design reference URLs or descriptions" "optional" "linear.app, stripe.com")
platform=$(prompt_field "Platform / framework" "optional" "Webflow / WordPress / React / Framer")

# ── Write JSON ────────────────────────────────────────────────────────────────
echo ""
echo -e "${BOLD}Writing inputs.json...${RESET}"

cat > "$OUTPUT_FILE" << JSON
{
  "generated_at": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "skill": "landing-page-generator",
  "business": {
    "name": "$(escape_json "$business_name")",
    "product_name": "$(escape_json "$product_name")",
    "product_description": "$(escape_json "$product_description")",
    "industry": "$(escape_json "$industry")",
    "business_stage": "$(escape_json "$business_stage")",
    "location": "$(escape_json "$location")",
    "website_url": "$(escape_json "$website_url")"
  },
  "audience": {
    "ideal_customer": "$(escape_json "$ideal_customer")",
    "age_range": "$(escape_json "$age_range")",
    "geography": "$(escape_json "$geography")",
    "occupation": "$(escape_json "$occupation")",
    "income_level": "$(escape_json "$income_level")",
    "interests": "$(escape_json "$interests")",
    "knowledge_level": "$(escape_json "$knowledge_level")",
    "pain_points": "$(escape_json "$pain_points")",
    "desired_outcomes": "$(escape_json "$desired_outcomes")",
    "buying_motivations": "$(escape_json "$buying_motivations")",
    "common_objections": "$(escape_json "$common_objections")"
  },
  "brand": {
    "tone_of_voice": "$(escape_json "$tone_of_voice")",
    "brand_personality": "$(escape_json "$brand_personality")",
    "positioning": "$(escape_json "$positioning")",
    "differentiators": "$(escape_json "$differentiators")",
    "competitors": "$(escape_json "$competitors")",
    "keywords": "$(escape_json "$keywords")",
    "brand_promises": "$(escape_json "$brand_promises")"
  },
  "conversion": {
    "primary_cta": "$(escape_json "$primary_cta")",
    "secondary_cta": "$(escape_json "$secondary_cta")",
    "conversion_goal": "$(escape_json "$conversion_goal")",
    "offer": "$(escape_json "$offer")",
    "pricing": "$(escape_json "$pricing")",
    "guarantee": "$(escape_json "$guarantee")"
  },
  "trust": {
    "testimonials": "$(escape_json "$testimonials")",
    "reviews": "$(escape_json "$reviews")",
    "client_logos": "$(escape_json "$client_logos")",
    "awards": "$(escape_json "$awards")",
    "metrics": "$(escape_json "$metrics")",
    "founder_info": "$(escape_json "$founder_info")"
  },
  "design": {
    "visual_style": "$(escape_json "$visual_style")",
    "brand_colors": "$(escape_json "$brand_colors")",
    "typography": "$(escape_json "$typography")",
    "design_references": "$(escape_json "$design_references")",
    "platform": "$(escape_json "$platform")"
  }
}
JSON

# ── Done ──────────────────────────────────────────────────────────────────────
echo ""
echo -e "${BOLD}${GREEN}✓ inputs.json written to:${RESET}"
echo "  $OUTPUT_FILE"
echo ""
echo -e "${BOLD}Next steps:${RESET}"
echo "  1. Review the file to confirm all inputs are correct."
echo "  2. Paste the contents of inputs.json into your AI conversation."
echo "  3. Invoke the landing-page-generator skill."
echo ""
echo -e "${YELLOW}Tip:${RESET} You can view the file with:"
echo "  cat \"$OUTPUT_FILE\""
echo ""
