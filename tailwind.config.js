const theme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ...theme.fontFamily,
        sans: ['Proxima Nova', ...theme.fontFamily.sans],
      },
      textColor: {
        primary: "#1f1235",
      },
      colors: {
        red: {
          500: "#ff6e6c",
        },
        purple: {
          750: "#301e4e",
          800: "#1f1235",
          900: "#301e4e",
        },
      },
      margin: {
        "-7px": "-7px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".container": {
          width: "90%",
          maxWidth: "1040px",
          marginRight: "auto",
          marginLeft: "auto",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
