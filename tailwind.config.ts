import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				'primary-green': '#B0F191',
				'primary-black': '#1A1A1A'
			},
			fontFamily: {
				andersonGrotesk: ['var(--font-andersonGrotesk)']
			},
			boxShadow: {
				'todo-shadow':  '2px 2px 7px 0px rgba(156,221,125,1)',
				'todo-shadow-red':  '2px 2px 7px 0px rgba(248,113,113,1)'
			}
		}
	},
	plugins: []
};
export default config;
