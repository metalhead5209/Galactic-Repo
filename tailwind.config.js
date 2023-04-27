/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        swYellow: '#F5ED17',
        bgGray: '#1E2123',
        bMilk: '#12faff'
      },
      screens: {
        sm: '580px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
        xxl: '1536px'
      },
    },
  },
  plugins: [],
}
