'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { signOut } from 'next-auth/react';

const SideMenu = () => {
	const [sideMenuOpen, setsideMenuOpen] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 768) {
			setsideMenuOpen(true);
		}
	}, []);
	return (
		<aside
			className={`fixed flex h-screen
			${
				sideMenuOpen
					? 'left-0 top-0 bg-[#0e0e0e] md:relative'
					: 'left-[calc((70px-100vw))] bg-transparent md:absolute md:left-[-230px]'
			}
			 z-30 w-full flex-col flex-nowrap items-start justify-start py-6  duration-300 md:min-w-[300px] md:max-w-[300px]`}
		>
			<div className="flex w-full flex-row flex-nowrap items-center justify-between">
				<div className="flex flex-row flex-nowrap items-center gap-4 pl-8">
					<Image
						src="/img/brain-green-icon.svg"
						height={35}
						width={35}
						alt="matrix-icon"
					/>
					<p className=" self-center whitespace-nowrap text-[2rem] text-[#b0f191]">
						Brainfree
					</p>
				</div>
				<svg
					width="30"
					height="18"
					viewBox="0 0 30 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={`h-[3rem] w-[3rem] cursor-pointer rounded-[50%] text-primary-green 
					${
						sideMenuOpen
							? 'mr-3 bg-transparent'
							: 'duration-[400ms] border border-primary-green bg-primary-black transition hover:bg-primary-green hover:text-primary-black'
					}`}
					onClick={() => setsideMenuOpen(!sideMenuOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</svg>
			</div>
			<nav className="m-auto flex w-full flex-col items-center justify-center">
				<Link
					className={`${
						sideMenuOpen ? 'flex' : 'hidden'
					} w-full flex-row items-center justify-center gap-4 whitespace-nowrap px-8 py-5 text-[1.2rem] leading-none  text-[#96969E] duration-200 hover:bg-[#292929] md:justify-start `}
					href="/dashboard"
					onClick={() => {
						window.innerWidth < 768 ? setsideMenuOpen(false) : '';
					}}
				>
					<Image
						src="/img/matrix-icon.svg"
						height={25}
						width={25}
						alt="matrix-icon"
					/>
					Prioritize matrix
				</Link>
				<Link
					className={`${
						sideMenuOpen ? 'flex' : 'hidden'
					} w-full flex-row items-center justify-center gap-4 whitespace-nowrap px-8 py-5 text-[1.2rem] leading-none  text-[#96969E] duration-200 hover:bg-[#292929] md:justify-start`}
					href="/dashboard/tasks"
					onClick={() => {
						window.innerWidth < 768 ? setsideMenuOpen(false) : '';
					}}
				>
					<Image
						src="/img/task-icon.svg"
						height={20}
						width={20}
						alt="tasks-icon"
					/>
					Tasks
				</Link>
				<Link
					className={`${
						sideMenuOpen ? 'flex' : 'hidden'
					} w-full flex-row items-center justify-center gap-4 whitespace-nowrap px-8 py-5 text-[1.2rem] leading-none  text-[#96969E] duration-200 hover:bg-[#292929] md:justify-start`}
					href="/dashboard/profile"
					onClick={() => {
						window.innerWidth < 768 ? setsideMenuOpen(false) : '';
					}}
				>
					<Image
						src="/img/profile-icon.svg"
						height={25}
						width={25}
						alt="guide-icon"
					/>
					Profile
				</Link>
				<Link
					className={`${
						sideMenuOpen ? 'flex' : 'hidden'
					} w-full flex-row items-center justify-center gap-4 whitespace-nowrap px-8 py-5 text-[1.2rem] leading-none  text-[#96969E] duration-200 hover:bg-[#292929] md:justify-start`}
					href="/dashboard/guide"
					onClick={() => {
						window.innerWidth < 768 ? setsideMenuOpen(false) : '';
					}}
				>
					<Image
						src="/img/guide-icon.svg"
						height={25}
						width={25}
						alt="guide-icon"
					/>
					Guide
				</Link>
				<Link
					className={`${
						sideMenuOpen ? 'flex' : 'hidden'
					} w-full flex-row items-center justify-center gap-4 whitespace-nowrap px-8 py-5 text-[1.2rem] leading-none  text-[#96969E] duration-200 hover:bg-[#292929] md:justify-start`}
					href="/dashboard/manage-users"
					onClick={() => {
						window.innerWidth < 768 ? setsideMenuOpen(false) : '';
					}}
				>
					<Image
						src="/img/manage-users-icon.svg"
						height={25}
						width={25}
						alt="manage-users-icon"
					/>
					Manage users
				</Link>
				<button
					className={`${
						sideMenuOpen ? 'flex' : 'hidden'
					} w-full flex-row items-center justify-center gap-4 whitespace-nowrap px-8 py-5 text-[1.2rem] leading-none  text-[#96969E] duration-200 hover:bg-[#292929] md:justify-start`}
					onClick={() => {
						signOut({ callbackUrl: '/' });
					}}
				>
					<Image
						src="/img/sign-out-icon.svg"
						height={20}
						width={20}
						alt="sign-out-icon"
					/>
					Sign out
				</button>
			</nav>
		</aside>
	);
};

export default SideMenu;
