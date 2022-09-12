module.exports = {
   plugins: [ require('@tailwindcss/line-clamp')],
  // purge: [],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
  
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        jamolhari: ["Jamolhari"]
        
      },
      maxWidth: {
        "4xl": "850px",
        "8xl": "84rem",
      },

      colors: {
        "nav-opacity": "rgba(0,0,0,0.25)",
        overlay: "rgba(0,0,0,0.8)",
        "gray-input-bg": "#F2F2F2",
        whitesmoke: "#F4f5f5",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        blur: {
          "0%": { filter: "blur(5px)  grayscale(0%)" },
          "100%": { filter: "blur(0px) grayscale(100%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 3000ms",
        blur: "blur 0.7s linear",
      },
    },
  },
};
