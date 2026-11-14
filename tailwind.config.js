/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        oklahoma: {
          blue: {
            DEFAULT: '#173B57',
            50: '#F0F5F9',
            100: '#D8E5EF',
            200: '#B0CBDD',
            300: '#7FAAC7',
            400: '#487EA6',
            500: '#235D86',
            600: '#173B57', // Deep Oklahoma Blue
            700: '#112C41',
            800: '#0C1F2E',
            900: '#07121B',
          },
          gold: {
            DEFAULT: '#D6A64F',
            50: '#FCF9F1',
            100: '#F7EED9',
            200: '#EFDCB2',
            300: '#E6C685',
            400: '#DEAD5F',
            500: '#D6A64F', // Warm Prairie Gold
            600: '#BE8C34',
            700: '#946B23',
            800: '#6C4D18',
            900: '#45300E',
          },
          ivory: {
            DEFAULT: '#FAF8F2',
            50: '#FFFFFF',
            100: '#FAF8F2', // Soft Ivory
            200: '#F4EFE0',
            300: '#ECE2CA',
            400: '#DFD1B0',
            500: '#D0BD94',
          },
          sage: {
            DEFAULT: '#A8B9A0',
            50: '#F5F8F4',
            100: '#E7EFE5',
            200: '#D0DEC9',
            300: '#B8CDAC',
            400: '#A8B9A0', // Sage Green
            500: '#8FA387',
            600: '#73876B',
            700: '#576851',
          },
          charcoal: {
            DEFAULT: '#292F33',
            50: '#F6F7F7',
            100: '#E4E6E7',
            200: '#C5C9CB',
            300: '#9DA3A7',
            400: '#6B7378',
            500: '#495257',
            600: '#3A4247',
            700: '#292F33', // Charcoal
            800: '#1F2427',
            900: '#141719',
          }
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(23, 59, 87, 0.08), 0 0 1px 1px rgba(214, 166, 79, 0.15)',
        'luxury-hover': '0 25px 50px -12px rgba(23, 59, 87, 0.16), 0 0 2px 1px rgba(214, 166, 79, 0.3)',
        'gold-glow': '0 0 25px rgba(214, 166, 79, 0.35)',
      }
    },
  },
  plugins: [],
};
