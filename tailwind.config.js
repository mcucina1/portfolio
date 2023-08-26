/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Ubuntu', 'sans-serif'],
        'github': ['Hubot Sans','sans-serif']
      },

      animation: {
        fade: 'fadeOut 0.5s ease-in-out',
        fadeMessage: 'fadeInThenOut 3s ease-in',
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: '0%;' },
          '100%': { opacity: '100%' },
        },

        fadeInThenOut: {
          '0%,100%': { opacity: '0%' },
          '10%,90%': { opacity: '100%' }
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

