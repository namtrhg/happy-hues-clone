const theme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin")

module.exports = {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ...theme.fontFamily,
        sans: ['sans-serif', ...theme.fontFamily.sans],
      },
      textColor: {
        'primary': '#1f1235',
      },
      colors: {
        purple: {
          750: '#301e4e',
          800: '#1f1235',
          900: '#301e4e',
        },
      },
      margin: {
        '-7px': '-7px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.container': {
          width: '90%',
          maxWidth: '1040px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }
      }
      addUtilities(newUtilities)
    }),
  ],
};
