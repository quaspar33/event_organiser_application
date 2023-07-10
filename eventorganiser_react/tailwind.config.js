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
        "color-1": "#F0F5FF",
        "color-2": "#E5EDFF",
        "color-3": "#CDDBFE",
        "color-4": "#B4C6FC",
        "color-5": "#8DA2FB",
        "color-6": "#6875F5",
        "color-7": "#5850EC",
        "color-8": "#5145CD",
        "color-9": "#42389D",
        "color-10": "#362F78"
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
