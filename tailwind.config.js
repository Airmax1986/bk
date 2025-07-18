/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand Colors basierend auf dem "Intelligent Vibrancy" Konzept
        'coral': {
          50: '#fef7f5',
          100: '#feeee8',
          200: '#fcddd1',
          300: '#f9c0aa',
          400: '#f49a7c',
          500: '#ee7652', // Primary Coral/Red
          600: '#df5a2f',
          700: '#bb4424',
          800: '#993a21',
          900: '#7c3420',
        },
        'ocean': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Primary Ocean Blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'slate-warm': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b', // Dark Anthracite
          900: '#0f172a',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#ee7652',
              '&:hover': {
                color: '#df5a2f',
              },
            },
            h1: {
              fontFamily: 'var(--font-space-grotesk)',
            },
            h2: {
              fontFamily: 'var(--font-space-grotesk)',
            },
            h3: {
              fontFamily: 'var(--font-space-grotesk)',
            },
            h4: {
              fontFamily: 'var(--font-space-grotesk)',
            },
          },
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'coral-lg': '0 10px 15px -3px rgba(238, 118, 82, 0.1), 0 4px 6px -2px rgba(238, 118, 82, 0.05)',
        'coral-xl': '0 20px 25px -5px rgba(238, 118, 82, 0.1), 0 10px 10px -5px rgba(238, 118, 82, 0.04)',
        'ocean-lg': '0 10px 15px -3px rgba(14, 165, 233, 0.1), 0 4px 6px -2px rgba(14, 165, 233, 0.05)',
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Custom plugin for brand-specific utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-coral': {
          'background': 'linear-gradient(135deg, #ee7652 0%, #df5a2f 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-ocean': {
          'background': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.bg-grain': {
          'background-image': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        },
        '.animation-delay-1000': {
          'animation-delay': '1s',
        },
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}