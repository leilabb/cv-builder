/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBE7C6",
        darker: "#f39b0c",
        button: "#f7b73f",
        creme: "#FEF3DF",
        green: "#5dba6b",
        darkergreen: "#299439",

        background: "#e4d9cb",
        //background: "#282534",
        stone: "#71736D",
        softTeal: "#8C9C9A	",
        accent: "#F08C56	",

        text: "#282534",

        header: "#b7a193",
      },
      keyframes: {
        typewriter: {
          to: { left: "100%" },
        },
      },
      animation: {
        typewriter: "typewriter 3s steps(10) forwards",
      },
    },
  },
  plugins: [],
};
