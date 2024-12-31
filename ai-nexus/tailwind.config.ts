import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors:{
			primary:"#BF00FF",
			secondary:"#6F00FF",
			tertiary:"#E5E4E2",
			bg_color:"#F5F5F5",
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
