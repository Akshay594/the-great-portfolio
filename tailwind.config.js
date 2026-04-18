module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#8B3A3A',
          dark: '#5C2626',
          light: '#A85454',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#D4AF37',
          muted: '#8B7355',
        },
        dark: {
          DEFAULT: '#0D0D0D',
          surface: '#1A1A1A',
          card: '#141414',
          elevated: '#1F1F1F',
        },
        cream: '#E8DCC8',
        sepia: '#8B7355',
        ink: '#E8DCC8',
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'body': ['EB Garamond', 'Georgia', 'serif'],
        'accent': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'parchment-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2C2416',
            a: {
              color: '#722F37',
              '&:hover': {
                color: '#4A1F24',
              },
            },
            h1: {
              color: '#f3f4f6',
            },
            h2: {
              color: '#f3f4f6',
            },
            h3: {
              color: '#f3f4f6',
            },
            h4: {
              color: '#f3f4f6',
            },
            strong: {
              color: '#f3f4f6',
            },
            code: {
              color: '#f3f4f6',
            },
            blockquote: {
              color: '#d1d5db',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
