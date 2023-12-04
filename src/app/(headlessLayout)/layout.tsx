import type { Metadata } from 'next';
import '../globals.css';
import SideMenu from '@/app/components/sideMenu';
import { getServerAuthSession } from '@/server/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Brainfree',
	description: 'Prioritize with Eisenhower matrix'
};

export default async function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const status = await getServerAuthSession();
	if (!status) {
		redirect('/sign-in');
	}
	return (
		<main className=" overflow-none relative  flex h-screen w-full flex-row flex-nowrap items-start justify-start bg-[#000]">
			<SideMenu />
			<div className=" flex h-full w-full flex-col items-start justify-start overflow-auto bg-[#000] px-4 py-20 text-black md:px-8 lg:pr-12">
				{children}
			</div>
		</main>
	);
}
