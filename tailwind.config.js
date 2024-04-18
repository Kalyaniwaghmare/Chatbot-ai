module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 600: "#839671", 800: "#39462c", "800_02": "#435334", "800_01": "#38462c", "500_01": "#9eb384" },
        green: { 50: "#e9f2e0", 100: "#cedebd", 400: "#87a06a", "100_01": "#cfe0be" },
        blue_gray: { 900: "#2c2c2c", "900_01": "#25293f" },
        white: { A700: "#ffffff" },
        yellow: { 800: "#f59627" },
        orange: { 50: "#ffeed5", "50_01": "#faf1e4" },
        light_green: { 200: "#d5bc96" },
        indigo: { 900: "#1b2559" },
        red: { 200: "#d6bc97" },
        lime: { 700: "#ba9359", "700_01": "#ba9259" },
      },
      boxShadow: { xs: "0px 0px 14px 0px #00000026" },
      fontFamily: { plusjakartasans: "Plus Jakarta Sans", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
