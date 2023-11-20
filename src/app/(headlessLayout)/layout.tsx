import type { Metadata } from 'next';
import { andersonGrotesk } from '../font';
import '../globals.css';
import SideMenu from '@/app/components/side-menu';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<main className=" relative flex h-screen w-full flex-row flex-nowrap items-start justify-start bg-[#fff]">
			<SideMenu />
			<div className="flex h-screen w-full flex-col items-start justify-center overflow-hidden bg-[#fff] px-4  py-10 md:px-8 lg:pr-12">
				{children}
			</div>
		</main>
	);
}