'use client';
import '../globals.css';

import { redirect, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Header from '../components/header';

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const { data } = useSession();
	const pathname = usePathname();

	if (data && (pathname === '/sign-in' || pathname === '/sign-up')) {
		redirect('/dashboard');
	}
	return (
		<>
			<Header />

			{children}
		</>
	);
}
