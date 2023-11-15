import localFont from 'next/font/local';

export const andersonGrotesk = localFont({
	src: [
		{
			path: './fonts/AndersonGrotesk-Light.otf',
			weight: '200',
			style: 'normal'
		},
		{
			path: './fonts/AndersonGrotesk-LightOblique.otf',
			weight: '200',
			style: 'italic'
		},
		{
			path: './fonts/AndersonGrotesk.otf',
			weight: '400',
			style: 'normal'
		},
		{
			path: './fonts/AndersonGrotesk-Oblique.otf',
			weight: '400',
			style: 'italic'
		},
		{
			path: './fonts/AndersonGrotesk-Bold.otf',
			weight: '700',
			style: 'normal'
		},
		{
			path: './fonts/AndersonGrotesk-BoldOblique.otf',
			weight: '700',
			style: 'italic'
		},
		{
			path: './fonts/AndersonGrotesk-Ultrabold.otf',
			weight: '900',
			style: 'normal'
		},
		{
			path: './fonts/AndersonGrotesk-UltraboldOblique.otf',
			weight: '900',
			style: 'italic'
		}
	],
	variable: '--font-andersonGrotesk'
});
