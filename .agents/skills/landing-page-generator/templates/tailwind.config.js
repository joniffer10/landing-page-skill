/** @type {import('tailwindcss').Config} */
// Production Minimal UI System - Tailwind CSS Preset
// Flat, tactile, distraction-free minimalist configuration (Zero Glass, Solid Matte)
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Core background surfaces (100% solid, zero translucent glass)
        canvas: {
          light: '#F8F8FA',
          dark: '#111113',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#18181B',
          subtle: {
            light: '#F2F2F5',
            dark: '#222226',
          },
          elevated: {
            light: '#FFFFFF',
            dark: '#202024',
          },
        },
        // Borders (Crisp, matte, zero specular halos in dark mode)
        border: {
          subtle: {
            light: '#E6E6EB',
            dark: '#26262B',
          },
          default: {
            light: '#D4D4DC',
            dark: '#323238',
          },
          strong: {
            light: '#A0A0B0',
            dark: '#4C4C56',
          },
        },
        // Typography tokens (WCAG AAA/AA contrast compliant)
        content: {
          title: {
            light: '#111113',
            dark: '#EDEDF0',
          },
          body: {
            light: '#44444C',
            dark: '#A4A4B2',
          },
          muted: {
            light: '#6E6E7A',
            dark: '#727280',
          },
        },
        // Action pill colors
        brand: {
          primary: '#E60023', // Signature tactile red
          'primary-hover': '#CC001F',
          neutral: {
            light: '#18181A',
            dark: '#F4F4F6',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      borderRadius: {
        card: '16px',
        button: '9999px', // Tactile Action Pill
        input: '12px',
        panel: '20px',
      },
      boxShadow: {
        // Subtle crisp ambient offsets, never hazy neon halos
        tactile: '0 1px 2px rgba(0, 0, 0, 0.05)',
        elevated: '0 4px 16px -2px rgba(0, 0, 0, 0.08)',
        'elevated-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
