// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
 content: [
   './pages/**/*.{js,ts,jsx,tsx,mdx}',
   './components/**/*.{js,ts,jsx,tsx,mdx}',
   './app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
   extend: {
     colors: {
       'oak-blue': '#2B4B8C',
       'oak-gold': '#C4A052', 
       'oak-gray': '#58595B'
     },
     animation: {
       'fade-in': 'fadeIn 0.5s ease-in',
       'slide-up': 'slideUp 0.5s ease-out',
       'scale-in': 'scaleIn 0.3s ease-in-out'
     },
     keyframes: {
       fadeIn: {
         '0%': { opacity: '0' },
         '100%': { opacity: '1' }
       },
       slideUp: {
         '0%': { transform: 'translateY(20px)', opacity: '0' },
         '100%': { transform: 'translateY(0)', opacity: '1' }
       },
       scaleIn: {
         '0%': { transform: 'scale(0.9)', opacity: '0' },
         '100%': { transform: 'scale(1)', opacity: '1' }
       }
     }
   },
 },
 plugins: [],
}

export default config