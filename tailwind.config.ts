import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: 'calc(1200px + 2rem)'
      },
    },
    extend: {
      spacing: {
        4.5: "1.125rem",
        15: '3.75rem',
      },
      colors: {
        background: "#fbfbfb",
        text: "#161616",
        subtext: "#7a7a7a",
        main: "#e33a6d",
        separator: "#d1d1d1",
      },
      boxShadow: {
        header: "0 2px 10px 0 rgba(22, 22, 22, 0.1)",
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme })
    {
      addUtilities({
        '.header-link::before': {
          content: "''",
          position: 'absolute',
          bottom: '0',
          height: '4px',
          backgroundColor: theme('colors.main'),
          transition: 'width 0.3s ease, left 0.3s ease',
        },

        '.header-link-active::before': {
          width: "100%",
          left: "0",
        },

        '.header-link-mob-active::before': {
          height: "100%",
          width: "3px",
          left: "0",
        },
      });
    }),
  ],
} satisfies Config;
