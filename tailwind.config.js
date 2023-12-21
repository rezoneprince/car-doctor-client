/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00aaff",

          secondary: "#00f500",

          accent: "#00e2d1",

          neutral: "#140500",

          "base-100": "#fffafc",

          info: "#00a6ff",

          success: "#009600",

          warning: "#e1ab00",

          error: "#ff254e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
