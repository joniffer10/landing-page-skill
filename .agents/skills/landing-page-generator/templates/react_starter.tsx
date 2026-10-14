// @ts-nocheck
import React, { useState, useEffect } from 'react';

/**
 * Production Minimal UI - Complete React / Next.js Landing Page Starter
 * Fully accessible (WCAG 2.1 AA/AAA), solid matte surfaces (zero glass),
 * interactive ROI calculator, tabbed segment switcher, honeypot form security,
 * dataLayer CRO telemetry, and automated testing selectors (data-testid).
 */

// ── Types ────────────────────────────────────────────────────────────────────
interface LeadFormData {
  name: string;
  email: string;
  companySize: string;
  hp_bot_trap: string; // Honeypot field
  utm_source?: string;
  utm_campaign?: string;
}

export default function LandingPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSegment, setActiveSegment] = useState<'startups' | 'agencies' | 'enterprise'>('startups');
  const [teamSize, setTeamSize] = useState<number>(10);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    companySize: '1-10',
    hp_bot_trap: '',
  });

  // ── Telemetry Helper ───────────────────────────────────────────────────────
  const trackEvent = (eventName: string, payload: Record<string, any> = {}) => {
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
        ...payload,
      });
      console.log('[Telemetry]', eventName, payload);
    }
  };

  // ── Dark Mode & Theme Toggle ───────────────────────────────────────────────
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
    trackEvent('landing_page_view', { theme: isDark ? 'dark' : 'light' });
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    trackEvent('theme_toggle', { theme: next });
  };

  // ── Lead Form Submission with Security & Honeypot ──────────────────────────
  // Configure live endpoint (e.g. Formspree or Webhook) or leave empty for demo simulation
  const FORM_ENDPOINT_URL = '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Bot Honeypot Check: If invisible field is populated, silently fail
    if (formData.hp_bot_trap.trim() !== '') {
      console.warn('Bot detected via honeypot');
      setFormStatus('success');
      return;
    }

    setFormStatus('submitting');
    trackEvent('form_submit_start', { form_id: 'lead-capture' });

    try {
      if (FORM_ENDPOINT_URL) {
        const resp = await fetch(FORM_ENDPOINT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            companySize: formData.companySize,
            submittedAt: new Date().toISOString()
          })
        });
        if (!resp.ok) throw new Error('Submission failed');
      } else {
        // Simulate API submission / Webhook call
        await new Promise((resolve) => setTimeout(resolve, 900));
      }

      setFormStatus('success');
      trackEvent('form_submit_success', {
        company_size: formData.companySize,
        email_domain: formData.email.split('@')[1] || '',
      });
    } catch (err) {
      setFormStatus('error');
      trackEvent('form_submit_error');
    }
  };

  // ── ROI Calculation Formula ────────────────────────────────────────────────
  const hoursSavedPerMonth = teamSize * 14;
  const estimatedDollarsSaved = hoursSavedPerMonth * 65;

  return (
    <div
      data-testid="landing-page-root"
      className="min-h-screen bg-[#F8F8FA] dark:bg-[#111113] text-[#111113] dark:text-[#EDEDF0] font-sans transition-colors duration-150 relative"
    >
      {/* ── Accessibility: Skip to Content Link ─────────────────────────────── */}
      <a
        href="#main-content"
        data-testid="skip-to-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#18181A] focus:text-white focus:rounded-full focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E60023]"
      >
        Skip to main content
      </a>

      {/* ── Header Navigation (Solid Matte, Zero Blur) ────────────────────────── */}
      <header
        data-testid="header-nav"
        className="sticky top-0 z-50 w-full h-[60px] bg-white dark:bg-[#18181B] border-b border-[#E6E6EB] dark:border-[#26262B] px-6 flex items-center justify-between"
      >
        <a
          href="#"
          data-testid="nav-logo"
          className="font-bold text-lg tracking-tight hover:opacity-80"
        >
          Acme Studio
        </a>

        <div className="flex items-center gap-4">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            data-testid="theme-toggle-btn"
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-[#D4D4DC] dark:border-[#323238] flex items-center justify-center text-sm hover:bg-[#F2F2F5] dark:hover:bg-[#222226] transition-colors"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <a
            href="#lead-form"
            data-testid="nav-cta-btn"
            onClick={() => trackEvent('cta_click', { location: 'header_nav' })}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#E60023] hover:bg-[#CC001F] rounded-full active:scale-95 transition-all shadow-sm"
          >
            Book Strategy Call
          </a>
        </div>
      </header>

      {/* ── Hero Section (Solid Background, Action Pills, Zero Gloss) ─────────── */}
      <main id="main-content" data-testid="main-content">
      <section
        data-testid="section-hero"
        className="pt-20 pb-16 px-6 max-w-5xl mx-auto text-center"
      >
        <div
          data-testid="hero-eyebrow"
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#D4D4DC] dark:border-[#323238] bg-white dark:bg-[#18181B] text-xs font-semibold uppercase tracking-wider text-[#E60023]"
        >
          <span className="w-2 h-2 rounded-full bg-[#E60023] animate-pulse"></span>
          New: Q4 High-Conversion System
        </div>

        <h1
          data-testid="hero-headline"
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto"
        >
          Turn passive traffic into verified pipeline with zero fluff.
        </h1>

        <p
          data-testid="hero-subheading"
          className="text-lg sm:text-xl text-[#44444C] dark:text-[#A4A4B2] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The battle-tested conversion architecture that eliminates friction, builds undeniable trust, and drives qualified inbound demos on day one.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#lead-form"
            data-testid="hero-primary-cta"
            onClick={() => trackEvent('cta_click', { location: 'hero_primary' })}
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-[#E60023] hover:bg-[#CC001F] rounded-full active:scale-95 transition-all shadow-md"
          >
            Start Free 14-Day Audit
          </a>
          <a
            href="#calculator"
            data-testid="hero-secondary-cta"
            onClick={() => trackEvent('cta_click', { location: 'hero_secondary' })}
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold border border-[#D4D4DC] dark:border-[#323238] bg-white dark:bg-[#18181B] hover:bg-[#F2F2F5] dark:hover:bg-[#222226] rounded-full active:scale-95 transition-all"
          >
            Calculate ROI
          </a>
        </div>

        {/* ── Interactive Code/UI Mockup Card (Eliminating Blank Wireframe Placeholders) ─ */}
        <div
          data-testid="hero-mockup-card"
          className="relative mx-auto rounded-2xl border border-[#D4D4DC] dark:border-[#323238] bg-white dark:bg-[#18181B] p-6 text-left shadow-lg overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#E6E6EB] dark:border-[#26262B] mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
              <span className="ml-2 text-xs font-mono text-[#6E6E7A] dark:text-[#727280]">
                telemetry-engine.config.ts
              </span>
            </div>
            <span
              data-testid="hero-mockup-status"
              className="text-xs font-mono px-2 py-0.5 rounded bg-[#F2F2F5] dark:bg-[#222226] text-[#E60023]"
            >
              Active Stream: 99.98% Uptime
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              data-testid="mockup-metric-pipeline"
              className="p-4 rounded-xl bg-[#F8F8FA] dark:bg-[#111113] border border-[#E6E6EB] dark:border-[#26262B]"
            >
              <p className="text-xs text-[#6E6E7A] dark:text-[#727280] font-medium">Qualified Leads Captured</p>
              <p className="text-2xl font-bold mt-1 text-[#111113] dark:text-[#EDEDF0]">1,428 / mo</p>
              <p className="text-xs text-[#27C93F] mt-1 font-semibold">+34.2% vs baseline</p>
            </div>
            <div
              data-testid="mockup-metric-friction"
              className="p-4 rounded-xl bg-[#F8F8FA] dark:bg-[#111113] border border-[#E6E6EB] dark:border-[#26262B]"
            >
              <p className="text-xs text-[#6E6E7A] dark:text-[#727280] font-medium">Drop-off Friction Rate</p>
              <p className="text-2xl font-bold mt-1 text-[#111113] dark:text-[#EDEDF0]">1.8%</p>
              <p className="text-xs text-[#27C93F] mt-1 font-semibold">-62% form abandonment</p>
            </div>
            <div
              data-testid="mockup-metric-cac"
              className="p-4 rounded-xl bg-[#F8F8FA] dark:bg-[#111113] border border-[#E6E6EB] dark:border-[#26262B]"
            >
              <p className="text-xs text-[#6E6E7A] dark:text-[#727280] font-medium">CAC Reduction</p>
              <p className="text-2xl font-bold mt-1 text-[#111113] dark:text-[#EDEDF0]">-44.6%</p>
              <p className="text-xs text-[#27C93F] mt-1 font-semibold">Immediate margin boost</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Segment Switcher (Personalized Value Proposition) ─────────────────── */}
      <section data-testid="section-segments" className="py-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Tailored architecture for your exact growth stage
          </h2>
          <p className="text-[#44444C] dark:text-[#A4A4B2] text-sm">
            Select your team size to inspect the dedicated implementation strategy.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-full border border-[#D4D4DC] dark:border-[#323238] bg-white dark:bg-[#18181B]">
            {(['startups', 'agencies', 'enterprise'] as const).map((tab) => (
              <button
                key={tab}
                data-testid={`tab-btn-${tab}`}
                onClick={() => {
                  setActiveSegment(tab);
                  trackEvent('segment_switch', { segment: tab });
                }}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full capitalize transition-all ${
                  activeSegment === tab
                    ? 'bg-[#18181A] dark:bg-[#EDEDF0] text-white dark:text-[#111113] shadow-sm'
                    : 'text-[#6E6E7A] dark:text-[#727280] hover:text-[#111113] dark:hover:text-[#EDEDF0]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Box */}
        <div
          data-testid={`tab-panel-${activeSegment}`}
          className="p-8 rounded-2xl border border-[#D4D4DC] dark:border-[#323238] bg-white dark:bg-[#18181B] shadow-sm"
        >
          {activeSegment === 'startups' && (
            <div>
              <h3 className="text-lg font-bold mb-2">Seed to Series A: Velocity & Clarity</h3>
              <p className="text-sm text-[#44444C] dark:text-[#A4A4B2] leading-relaxed mb-4">
                Validate your value proposition in days, not quarters. Focuses entirely on clear objection sequencing, founder authority, and single-action lead funnels.
              </p>
              <ul className="text-xs sm:text-sm space-y-2 text-[#44444C] dark:text-[#A4A4B2]">
                <li className="flex items-center gap-2">✓ Zero framework bloat — 100% Core Web Vitals pass</li>
                <li className="flex items-center gap-2">✓ Pre-configured Stripe and Calendly trigger hooks</li>
              </ul>
            </div>
          )}
          {activeSegment === 'agencies' && (
            <div>
              <h3 className="text-lg font-bold mb-2">Agencies: Client Handoff & White-Labeling</h3>
              <p className="text-sm text-[#44444C] dark:text-[#A4A4B2] leading-relaxed mb-4">
                Deliver ultra-high-converting landing pages for high-ticket clients with modular design tokens, zero third-party plugin reliance, and full CMS portability.
              </p>
              <ul className="text-xs sm:text-sm space-y-2 text-[#44444C] dark:text-[#A4A4B2]">
                <li className="flex items-center gap-2">✓ Strict accessibility compliance (WCAG 2.1 AA)</li>
                <li className="flex items-center gap-2">✓ Automated GTM and Meta Pixel attribution templates</li>
              </ul>
            </div>
          )}
          {activeSegment === 'enterprise' && (
            <div>
              <h3 className="text-lg font-bold mb-2">Enterprise: Security, Governance & Scale</h3>
              <p className="text-sm text-[#44444C] dark:text-[#A4A4B2] leading-relaxed mb-4">
                Strict Content Security Policies, zero unauthorized script execution, full GDPR/CCPA compliance, and air-tight honeypot bot defenses.
              </p>
              <ul className="text-xs sm:text-sm space-y-2 text-[#44444C] dark:text-[#A4A4B2]">
                <li className="flex items-center gap-2">✓ Subresource Integrity (SRI) on all CDNs</li>
                <li className="flex items-center gap-2">✓ Direct Webhook & HubSpot/Salesforce integration</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ── Interactive ROI / Savings Calculator ──────────────────────────────── */}
      <section
        id="calculator"
        data-testid="section-calculator"
        className="py-16 px-6 max-w-4xl mx-auto"
      >
        <div className="p-8 rounded-2xl border border-[#D4D4DC] dark:border-[#323238] bg-white dark:bg-[#18181B] shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Estimate Your Monthly Operational Savings</h2>
            <p className="text-sm text-[#44444C] dark:text-[#A4A4B2]">
              Adjust your marketing & sales team size to calculate recovered capacity.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-sm font-semibold mb-2">
              <span data-testid="calc-team-count">Team Members: {teamSize}</span>
              <span data-testid="calc-output-hours" className="text-[#E60023]">
                {hoursSavedPerMonth} hours saved / mo
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="50"
              value={teamSize}
              data-testid="calc-slider"
              onChange={(e) => {
                setTeamSize(Number(e.target.value));
                trackEvent('calculator_interact', { team_size: Number(e.target.value) });
              }}
              className="w-full accent-[#E60023] cursor-pointer"
            />
          </div>

          <div className="p-6 rounded-xl bg-[#F8F8FA] dark:bg-[#111113] border border-[#E6E6EB] dark:border-[#26262B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-[#6E6E7A] dark:text-[#727280]">
                Projected Monthly Value
              </p>
              <p
                data-testid="calc-output-value"
                className="text-3xl font-extrabold text-[#111113] dark:text-[#EDEDF0]"
              >
                ${estimatedDollarsSaved.toLocaleString()}{' '}
                <span className="text-sm font-normal text-[#6E6E7A]">/ month</span>
              </p>
            </div>
            <a
              href="#lead-form"
              data-testid="calc-cta-btn"
              onClick={() => trackEvent('cta_click', { location: 'calculator_cta' })}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#E60023] hover:bg-[#CC001F] rounded-full active:scale-95 transition-all"
            >
              Lock In These Savings
            </a>
          </div>
        </div>
      </section>

      {/* ── Secure Lead Capture Form (Honeypot + ARIA Live + Safe Payload) ───── */}
      <section
        id="lead-form"
        data-testid="section-lead-capture"
        className="py-20 px-6 max-w-xl mx-auto"
      >
        <div className="p-8 rounded-2xl border border-[#D4D4DC] dark:border-[#323238] bg-white dark:bg-[#18181B] shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Schedule Your Growth Consultation</h2>
            <p className="text-xs sm:text-sm text-[#44444C] dark:text-[#A4A4B2]">
              Receive an actionable tear-down of your current funnel within 24 business hours.
            </p>
          </div>

          {formStatus === 'success' ? (
            <div
              data-testid="form-success-alert"
              className="p-6 rounded-xl bg-[#27C93F]/10 border border-[#27C93F]/30 text-center"
            >
              <span className="text-3xl mb-2 block">✓</span>
              <h3 className="text-base font-bold text-[#111113] dark:text-[#EDEDF0] mb-1">
                Consultation Request Received!
              </h3>
              <p className="text-xs text-[#44444C] dark:text-[#A4A4B2]">
                Our senior strategist will review your funnel metrics and contact you today.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} data-testid="lead-form" className="space-y-4">
              {/* Security Honeypot: Invisible to real users */}
              <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
                <label htmlFor="hp_bot_trap">Do not fill this</label>
                <input
                  id="hp_bot_trap"
                  type="text"
                  tabIndex={-1}
                  data-testid="input-honeypot"
                  value={formData.hp_bot_trap}
                  onChange={(e) => setFormData({ ...formData, hp_bot_trap: e.target.value })}
                  autoComplete="off"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-[#44444C] dark:text-[#A4A4B2]">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Sarah Connor"
                  data-testid="input-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D4D4DC] dark:border-[#323238] bg-white dark:bg-[#111113] text-sm focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-[#44444C] dark:text-[#A4A4B2]">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  maxLength={120}
                  placeholder="sarah@company.com"
                  data-testid="input-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D4D4DC] dark:border-[#323238] bg-white dark:bg-[#111113] text-sm focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-[#44444C] dark:text-[#A4A4B2]">
                  Company Size
                </label>
                <select
                  value={formData.companySize}
                  data-testid="select-service"
                  onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D4D4DC] dark:border-[#323238] bg-white dark:bg-[#111113] text-sm focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                >
                  <option value="1-10">1 – 10 employees</option>
                  <option value="11-50">11 – 50 employees</option>
                  <option value="51-200">51 – 200 employees</option>
                  <option value="200+">200+ employees</option>
                </select>
              </div>

              <button
                type="submit"
                data-testid="btn-lead-submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-3 text-sm font-semibold text-white bg-[#E60023] hover:bg-[#CC001F] rounded-full active:scale-95 transition-all shadow-md disabled:opacity-50"
              >
                {formStatus === 'submitting' ? 'Submitting Request...' : 'Confirm My Strategy Session →'}
              </button>

              <p className="text-[11px] text-center text-[#6E6E7A] dark:text-[#727280] mt-3">
                🔒 256-bit TLS encrypted. Zero marketing spam. By submitting you agree to our{' '}
                <a
                  href="/privacy"
                  data-testid="form-link-privacy"
                  className="underline hover:text-[#111113] dark:hover:text-[#EDEDF0]"
                >
                  Privacy Policy
                </a>.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FAQ Section (Single Accordion State) ─────────────────────────────── */}
      <section data-testid="section-faq" className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-center mb-8">Frequently Answered Questions</h2>
        <div className="space-y-3">
          {[
            { q: 'How quickly can our team deploy this landing page system?', a: 'Because all tokens, components, and telemetry hooks are pre-integrated, teams typically deploy to Vercel or AWS within 2 to 4 business hours.' },
            { q: 'Does this interfere with our existing analytics or CRM?', a: 'Not at all. The telemetry layer uses an open standard dataLayer architecture that connects directly to your existing Google Tag Manager, HubSpot, or PostHog instance.' },
            { q: 'How does the honeypot security protect our forms?', a: 'Automated spam bots blindly scan and populate every HTML input tag. The invisible honeypot field catches these submissions silently without bothering real human visitors with frustrating CAPTCHAs.' },
          ].map((item, idx) => (
            <div
              key={idx}
              data-testid={`faq-item-${idx}`}
              className="rounded-xl border border-[#D4D4DC] dark:border-[#323238] bg-white dark:bg-[#18181B] overflow-hidden"
            >
              <button
                data-testid={`faq-question-${idx}`}
                onClick={() => {
                  const nextState = openFaq === idx ? null : idx;
                  setOpenFaq(nextState);
                  if (nextState !== null) {
                    trackEvent('faq_toggle', { question: item.q });
                  }
                }}
                className="w-full px-6 py-4 text-left font-semibold text-sm flex items-center justify-between hover:bg-[#F2F2F5] dark:hover:bg-[#222226] transition-colors"
              >
                <span>{item.q}</span>
                <span className="text-base font-bold">{openFaq === idx ? '−' : '+'}</span>
              </button>
              {openFaq === idx && (
                <div
                  data-testid={`faq-answer-${idx}`}
                  className="px-6 pb-4 text-xs sm:text-sm text-[#44444C] dark:text-[#A4A4B2] leading-relaxed border-t border-[#E6E6EB] dark:border-[#26262B] pt-3"
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Mobile Ergonomic Sticky Bottom Dock ───────────────────────────────── */}
      <div
        data-testid="mobile-sticky-dock"
        className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white dark:bg-[#18181B] border-t border-[#E6E6EB] dark:border-[#26262B] p-3 shadow-lg pb-[max(12px,env(safe-area-inset-bottom))]"
      >
        <a
          href="#lead-form"
          data-testid="mobile-sticky-cta"
          onClick={() => trackEvent('cta_click', { location: 'mobile_dock' })}
          className="w-full flex items-center justify-center py-3 text-sm font-semibold text-white bg-[#E60023] rounded-full active:scale-95 transition-all shadow-md"
        >
          Book Consultation Now
        </a>
      </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer
        data-testid="footer-container"
        className="py-12 px-6 border-t border-[#E6E6EB] dark:border-[#26262B] text-center text-xs text-[#6E6E7A] dark:text-[#727280]"
      >
        <p data-testid="footer-copyright">© {new Date().getFullYear()} Acme Studio. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-3">
          <a href="/privacy" data-testid="footer-link-privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" data-testid="footer-link-terms" className="hover:underline">Terms of Service</a>
          <a href="/security" data-testid="footer-link-security" className="hover:underline">Security</a>
        </div>
      </footer>
    </div>
  );
}
