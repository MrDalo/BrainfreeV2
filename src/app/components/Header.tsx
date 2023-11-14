'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
	const pathname = usePathname();

	return (
		<header className=" flex w-full flex-row items-center justify-center bg-primary-green px-5 py-6 sm:justify-end sm:px-16 ">
			<nav className=" animate-navigation flex flex-row items-center gap-12">
				{pathname === '/' ? (
					<Link
						href="/sign-in"
						className="rounded-full bg-primary-black px-[30px] py-[5px] text-[1.5rem] font-light text-primary-green duration-150 hover:scale-105"
					>
						Sign in
					</Link>
				) : (
					<Link
						href="/"
						className="rounded-full bg-primary-black px-[30px] py-[5px] text-[1.5rem] font-light text-primary-green duration-150 hover:scale-105"
					>
						Back
					</Link>
				)}
				<Link
					href="/sign-up"
					className=" mt-[5px] text-[1.5rem] font-light text-primary-black duration-150 hover:scale-105 2xl:text-[2rem]"
				>
					Sign up
				</Link>
			</nav>
		</header>
	);
};

export default Header;
