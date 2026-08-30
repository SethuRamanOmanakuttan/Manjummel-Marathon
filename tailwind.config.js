/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071321',
          800: '#0d1f33',
          700: '#142a45',
        },
        orange: {
          DEFAULT: '#F26A21',
          dark: '#d45a15',
          light: '#f5883f',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          dark: '#E7D8BD',
        },
        muted: '#496B7D',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '12xl': ['13rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}
