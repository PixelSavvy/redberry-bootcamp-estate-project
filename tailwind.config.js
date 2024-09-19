/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: 'true',
      screens: {
        lg: '99.75rem',
      },
    },
    extend: {
      fontWeight: {},
      fontFamily: {
        firago: 'var(--ff-firago)',
      },
      fontSize: {
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        24: '1.5rem',
        28: '1.75rem',
        32: '2rem',
        48: '2.75rem',
      },
      lineHeight: {
        1.6: '1.6',
        1.2: '1.2',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          dark: 'hsl(var(--primary-dark))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        success: 'hsl(var(--success))',
      },
      borderRadius: {
        2: '0.125rem',
        6: '0.375rem',
        8: '0.5rem',
        10: '0.625rem',
        14: '0.875rem',
        16: '1rem',
        20: '1.25rem',
        44: '2.75rem',
      },
      boxShadow: {
        'filter-content': '5px 5px 12px 0px hsla(208, 90%, 8%, 0.08)',
      },
      keyframes: {},
      animation: {},
      transitionTimingFunction: {},
    },
  },
  plugins: [require('tailwindcss-animate')],
};
