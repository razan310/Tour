import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      space: {
        '13': '13.020%',
      },
      spacing: {
        '33': '33.8541%',
      },
      colors: {
        'white-20': '#FFFFFF33',
        'light': '#FFFFFF',
        'orange-500': '#FA8B02',
        'footer-bg': '#333333',
      },
      fontFamily:{
        'open_Sans': 'var(--font-open-sans)',
        'podcastFont': 'var(--font-podcast)'
      },
      borderRadius: {
        '50':'50px'
      },
      
    },
  },
  plugins: [],

};
export default config;
