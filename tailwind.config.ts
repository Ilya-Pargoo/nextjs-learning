import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: 'calc(1200px + 2rem)'
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        text: 'var(--text)',
        subtext: 'var(--subtext)',
        main: 'var(--main)',
        separator: 'var(--separator)',
      },
      boxShadow: {
        'custom-header': 'var(--custom-header-shadow)',
      },
      fontFamily: {
        sans: 'var(--font-family)',
      },
    },
  },
  plugins: [],
} satisfies Config;
