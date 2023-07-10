// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  darkMode: "media",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#CDDBFE",
        "app-background": "#5145CD",
        "deep-blue": "#362F78"
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        waves: "url('./assets/Wave.svg')",
        circles: "url('./assets/IrregularCircle.svg')",
        lecture1: "url('./assets/Lecture_1.svg')",
        lecture2: "url('./assets/Lecture_2.svg')",
        lecture3: "url('./assets/Lecture_3.svg')",
        lecture4: "url('./assets/Lecture_4.svg')",
        lecture5: "url('./assets/Lecture_5.svg')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
