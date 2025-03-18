/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  mode: "jit",
  theme: {

    extend: {

      screens : {
        sm : "360px",
        bonus : "564px",
        md : "768px",
        lg : "1024px",
        xl : "1440px",
      },

      spacing : {
        "8p" : "0.5rem", 
        "12p" : "0.75rem", 
        "18p" : "1.125rem", 
        "24p" : "1.5rem", 
        "36p" : "2.25rem", 
        "48p" : "3rem",
        "64p" : "4rem",
        "80p" : "5rem",
        "96p" : "6rem", 

        
      },

      fontSize: {
        xs: "14px",
        sm: "16px",
        base: "18px",
        lg: "20px",
        xl: "24px",
        "2xl": "36px",
        display: "60px",
        huge: "80px",
      },

      lineHeight : {
        xsLH : "14.4px",
        smLH : "24.8px",
        "2xlLH" : "38.4px",
        "3xlLH" : "52.4px",
      },

      colors: {
        heading : "#212529",
        paragraph: "#495057",
        page : "#F8F9FA",
        primary : "#343A40",
        secondary : "#495057",
        tertiary : "#CED4DA",
      },
      
      fontFamily: {
        outfit : ['Outfit', 'sans-serif'],
        figtree : ['Figtree', 'sans-serif'],
      },

      width : {
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, cur) => {
          acc[cur] = `${cur}rem`;
          return acc;
        }, {}),
      },

      height : {
        "halfvh" : "50vh",
        ...Array.from({ length: 100 }, (_, i) => i + 1).reduce((acc, cur) => {
          acc[cur] = `${cur}rem`;
          return acc;
        }, {}),
      }
    },
  },

  daisyui: {
    themes: [
        {
            mytheme: {
                primary: "#25252B",
                secondary: "#636376",
                danger : "#e3342f",
                "base-100": "#EFEFEF" /* background color */,
            },
        },
        "dark",
    ],
},
  plugins: [
    require('daisyui'),
  ],
}

