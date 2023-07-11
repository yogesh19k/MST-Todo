/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        // 'layout': '0.15fr 0.15fr 0.3fr 0.3fr 0.1fr',
        'layout': '15fr 15fr 30fr 30fr 10fr',
      },
      gridTemplateRows: {
        // 'layout': '0.15fr 0.15fr 0.3fr 0.3fr 0.1fr',
        'layout': '40px auto ',
      },
      minWidth: {
        'DateFixed': '100px',
        'StatusFixed': '50px',
      },
      maxWidth: {
        'DateFixed': '100px',
        'StatusFixed': '80px',
      }
    },
  },
  plugins: [],
}
