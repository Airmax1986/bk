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
        'gemini': { // Renamed from 'gemini light theme colors' to just 'gemini'
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
        'coral': { // Added coral colors for BrandKernel branding
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // 'cosmic' palette was identical to 'gemini' and has been removed.
      },
      backgroundImage: {
        'gradient-gemini': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
        'gradient-cosmic': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        'gradient-space': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e293b 100%)',
        'gradient-purple': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
        'gradient-nebula': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)',
        'gradient-light': 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        
        // Consolidated gradients from globals.css for BrandKernel features
        'gradient-chat': `linear-gradient(135deg, #60a5fa 0%, #a855f7 100%), url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='20' r='2'/%3E%3Ccircle cx='20' cy='80' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, // Pattern integrated
        'gems-gradient': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)', /* Purple to Blue */
        'live-gradient': 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)', /* Dark Blue to Indigo */
        'research-gradient': `linear-gradient(135deg, #1e1b4b 0%, #312e81 100%), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, // SVG-Muster direkt integriert
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
        'float': 'float 6s ease-in-out infinite', // Consolidated float animation
        'bounce-slow': 'bounce 2s infinite',
        'gradient': 'gradient 6s ease infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }, // Retained original value
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
    require('@tailwindcss/line-clamp'),
    // Custom plugin for BrandKernel-specific utilities
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
        '.text-gradient-hero': { // New gradient for hero headline
          'background': 'linear-gradient(90deg, #3b82f6 0%, #a855f7 100%)',
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
      
      const newComponents = {} 
      
      addUtilities(newUtilities)
      addComponents(newComponents)
    }
  ],
}
