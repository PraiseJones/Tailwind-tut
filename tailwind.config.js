/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        ublue: "#01203f",
        uorange: "#ff1700",
        ulblue: "#0344dc",
        uwhite: "#ffffff",
      },
      fontFamily: {
        Actay: ["Actay", "sans"],
      },
      animation:{
        move: "move 7s infinite both",
        movel: "movel 4s infinite both"
      },
      keyframes: {
        move: {
          "from": {
            transform: "translate(0, 0) scale(1)"
          },
          "30%": {
            transform: "translate(8rem, 9rem) scale(1.15)"
          },
          "60%":{
            transform: "translate(-13rem, 20rem) scale(1.5)"
          },
          "to": {
            transform: "translate(0, 0) scale(1)"
          }
        },
        movel: {
          "from": {
            transform: "translate(0, 0) scale(1)"
          },
          "30%": {
            transform: "translate(3.75rem, -2rem) scale(1.2)"
          },
          "60%": {
            transform: "translate(8.75rem, 2rem) scale(1.2)"
          },
          "to": {
            transform: "translate(0, 0) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
};
