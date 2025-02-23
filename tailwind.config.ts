import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        mdxl: '1000px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px' ,
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)'],
        sans: ['var(--font-montserrat)'], 
      },
      boxShadow: {
        navbarShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
      },
      colors: {
        bodyColor: '#0A192F',
        textColor: '#64FFDA',
        textLight: '#ccd6f6',
        textDark: '#8892b0',
        textGreen: '#64FFDA',
        hoverColor: 'rgba(100, 255, 218, 0.1)',
    },
    keyframes: {
      gradient: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      }
    },
    animation: {
      gradient: 'gradient 6s ease infinite',
    },
  },
},
  plugins: [],
} satisfies Config;
