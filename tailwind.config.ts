import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './content/**/*.md',
  ],
  darkMode: 'class',
  plugins: [
    typography,
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'scale-in': 'scaleIn 0.4s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, rgba(34, 201, 104, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(34, 201, 104, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(34, 201, 104, 0.08) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(34, 201, 104, 0.05) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(34, 201, 104, 0.1) 0px, transparent 50%)
        `,
      },
      boxShadow: {
        'glow-mint': '0 0 20px rgba(34, 201, 104, 0.3)',
        'glow-mint-lg': '0 0 40px rgba(34, 201, 104, 0.4)',
      },
      colors: {
        // M3 Expressive Mint Green / Dark Grey Palette
        mint: {
          50: '#f0fdf6',
          100: '#dcfce9',
          200: '#bbf7d4',
          300: '#86efb4',
          400: '#4ade8b',
          500: '#22c968',
          600: '#16a34f',
          700: '#15803e',
          800: '#166534',
          900: '#14532d',
          950: '#052e14',
        },
        slate: {
          850: '#1a1f2e',
          925: '#0f1219',
          950: '#080a0f',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          dim: 'var(--color-surface-dim)',
          elevated: 'var(--color-surface-container)',
          overlay: 'var(--color-surface-container-high)',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        // M3 Expressive typography scale
        'display-lg': ['4.5rem', { fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.1' }],
        'display-md': ['3.5rem', { fontWeight: '600', letterSpacing: '-0.02em', lineHeight: '1.15' }],
        'display-sm': ['2.5rem', { fontWeight: '600', letterSpacing: '-0.01em', lineHeight: '1.2' }],
        'headline-lg': ['2rem', { fontWeight: '600', letterSpacing: '-0.01em', lineHeight: '1.25' }],
        'headline-md': ['1.75rem', { fontWeight: '500', lineHeight: '1.3' }],
        'headline-sm': ['1.5rem', { fontWeight: '500', lineHeight: '1.35' }],
        'label-lg': ['0.875rem', { fontWeight: '500', letterSpacing: '0.01em', lineHeight: '1.4' }],
        'label-md': ['0.75rem', { fontWeight: '500', letterSpacing: '0.02em', lineHeight: '1.4' }],
        'title-lg': ['1.25rem', { fontWeight: '500', lineHeight: '1.4' }],
        'title-md': ['1rem', { fontWeight: '500', lineHeight: '1.5' }],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
} satisfies Config
