module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A8FDFF",
          secondary: "#FFBEDA",
          accent: "#6F9A37",
          neutral: "#3d4451",
          "base-100": "#282B38",
        },
      },
    ],
  },
}