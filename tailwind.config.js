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
        // Gemini Light Theme Colors
        'gemini': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Primary Purple
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        'blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Primary Blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'cosmic': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-gemini': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
        'gradient-cosmic': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        'gradient-space': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e293b 100%)',
        'gradient-purple': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
        'gradient-nebula': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)',
        'gradient-light': 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        'gradient-chat': 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            h1: {
              fontFamily: 'var(--font-space-grotesk)',
              color: '#1f2937',
            },
            h2: {
              fontFamily: 'var(--font-space-grotesk)',
              color: '#1f2937',
            },
            h3: {
              fontFamily: 'var(--font-space-grotesk)',
              color: '#1f2937',
            },
            h4: {
              fontFamily: 'var(--font-space-grotesk)',
              color: '#1f2937',
            },
          },
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'gradient': 'gradient 6s ease infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        twinkle: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        }
      },
      boxShadow: {
        'gemini-sm': '0 1px 2px 0 rgba(59, 130, 246, 0.05)',
        'gemini-md': '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)',
        'gemini-lg': '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)',
        'gemini-xl': '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)',
        'gemini-2xl': '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
        'purple-lg': '0 10px 15px -3px rgba(168, 85, 247, 0.1), 0 4px 6px -2px rgba(168, 85, 247, 0.05)',
        'cosmic': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      aspectRatio: {
        '16/10': '16 / 10',
        '4/3': '4 / 3',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Custom plugin for Gemini-specific utilities
    function({ addUtilities, addComponents }) {
      const newUtilities = {
        '.text-gradient-gemini': {
          'background': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-purple': {
          'background': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-blue': {
          'background': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.bg-glass': {
          'background': 'rgba(255, 255, 255, 0.7)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
        },
        '.bg-glass-dark': {
          'background': 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
        },
        '.animation-delay-1000': {
          'animation-delay': '1s',
        },
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-3000': {
          'animation-delay': '3s',
        },
      }
      
      const newComponents = {
        '.feature-card': {
          'position': 'relative',
          'overflow': 'hidden',
          'border-radius': '1.5rem',
          'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          'cursor': 'pointer',
          'aspect-ratio': '16/10',
          '&:hover': {
            'transform': 'translateY(-4px)',
            'box-shadow': '0 20px 40px rgba(0, 0, 0, 0.1)',
          }
        },
        '.glass-card': {
          'background': 'rgba(255, 255, 255, 0.7)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.3)',
          'border-radius': '1.5rem',
          'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        }
      }
      
      addUtilities(newUtilities)
      addComponents(newComponents)
    }
  ],
}
