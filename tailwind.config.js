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
        background: "#f4f1e8",
        olivegreen: "#6a9b72",
        header: "#b7a193",
      },
      keyframes: {
        typewriter: {
          to: { left: "100%" },
        },
      },
      animation: {
        typewriter: "typewriter 4s steps(10) forwards",
      },
    },
  },
  plugins: [],
};
