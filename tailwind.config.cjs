/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      colors: {
        'darker-cyan': 'hsl(158, 36%, 25%)',
        'dark-cyan': 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      fontSize: {
        base: '0.875rem',
        big: '2rem',
      },
      maxWidth: {
        mobile: '340px',
        desktop: '500px'
      },
      maxHeight: {
        mobile: '610px',
        desktop: '410px'
      }
    },
  },
  plugins: [],
};
