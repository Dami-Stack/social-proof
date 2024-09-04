/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*html"],
  theme: {
    extend: {
      colors: {
        VeryDarkMagenta: "hsl(300, 43%, 22%)",
        SoftPink: "hsl(333, 80%, 67%)",
        DarkGrayishMagenta: "hsl(303, 10%, 53%)",
        LightGrayishMagenta: "hsl(300, 24%, 96%)",
        White: "hsl(0, 0%, 100%)"
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1040px",
        xl: "1400px"
      },
    },
  },
  plugins: [],
};

