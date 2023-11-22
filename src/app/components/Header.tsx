'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
	const pathname = usePathname();

	return (
		<header className=" absolute  flex w-full flex-row items-center justify-center bg-primary-green px-5 py-6 sm:justify-end sm:px-16">
			<nav className=" animate-navigation flex flex-row items-center gap-6 sm:gap-12">
				{pathname !== '/sign-in' ? (
					<Link
						href="/sign-in"
						className="z-30 rounded-full bg-primary-black px-[30px] pb-1 pt-[5px] text-[1.5rem] font-light text-primary-green duration-150 hover:scale-105"
					>
						Sign in
					</Link>
				) : (
					''
				)}

				{pathname !== '/sign-up' ? (
					<Link
						href="/sign-up"
						className=" z-30 mt-[5px] text-[1.5rem] font-light text-primary-black duration-150 hover:scale-105 2xl:text-[1.75rem]"
					>
						Sign up
					</Link>
				) : (
					''
				)}

				{pathname !== '/' ? (
					<Link
						href="/"
						className="z-30 mt-[5px] text-[1.5rem] font-light text-primary-black duration-150 hover:scale-105 2xl:text-[1.75rem]"
						// className="rounded-full bg-primary-black px-[30px] py-[5px] text-[1.5rem] font-light text-primary-green duration-150 hover:scale-105"
					>
						Back
					</Link>
				) : (
					''
				)}
			</nav>
		</header>
	);
};

export default Header;
