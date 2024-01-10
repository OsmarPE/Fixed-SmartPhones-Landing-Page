/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns:{
				'grid-fill-250':'repeat(auto-fill,minmax(200px,1fr)',
				'grid-fill-300':'repeat(auto-fill,minmax(300px,1fr)',
			},
			colors:{
				'blue-main':'#246BFD'
			},
			fontFamily:{
				'primary':['Product Sans Regular','sans-serif'],
				'secundary':['Montserrat', 'sans-serif']
			},
			boxShadow:{
				'card':'8px 6px 30px 0px rgba(36, 107, 253, 0.11)',
				'contact':' 3px 10px 90px -8px rgba(36, 107, 253, 0.18)',
				'whats':'0px 2px 15px rgba(38, 211, 102, .2)'
			}
			
		},
	},
	plugins: [],
}
