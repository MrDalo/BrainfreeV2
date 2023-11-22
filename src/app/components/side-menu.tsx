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
					? 'left-0 bg-[#0e0e0e] md:relative'
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
					className="mr-5 mt-3 cursor-pointer"
					onClick={() => setsideMenuOpen(!sideMenuOpen)}
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0 1.27604C0 0.937614 0.148158 0.613048 0.411881 0.373744C0.675604 0.13444 1.03329 0 1.40625 0H28.5938C28.9667 0 29.3244 0.13444 29.5881 0.373744C29.8518 0.613048 30 0.937614 30 1.27604C30 1.61447 29.8518 1.93904 29.5881 2.17834C29.3244 2.41764 28.9667 2.55208 28.5938 2.55208H1.40625C1.03329 2.55208 0.675604 2.41764 0.411881 2.17834C0.148158 1.93904 0 1.61447 0 1.27604ZM0 8.50694C0 8.16852 0.148158 7.84395 0.411881 7.60465C0.675604 7.36534 1.03329 7.2309 1.40625 7.2309H28.5938C28.9667 7.2309 29.3244 7.36534 29.5881 7.60465C29.8518 7.84395 30 8.16852 30 8.50694C30 8.84537 29.8518 9.16994 29.5881 9.40924C29.3244 9.64855 28.9667 9.78299 28.5938 9.78299H1.40625C1.03329 9.78299 0.675604 9.64855 0.411881 9.40924C0.148158 9.16994 0 8.84537 0 8.50694ZM1.40625 14.4618C1.03329 14.4618 0.675604 14.5962 0.411881 14.8356C0.148158 15.0749 0 15.3994 0 15.7378C0 16.0763 0.148158 16.4008 0.411881 16.6401C0.675604 16.8794 1.03329 17.0139 1.40625 17.0139H28.5938C28.9667 17.0139 29.3244 16.8794 29.5881 16.6401C29.8518 16.4008 30 16.0763 30 15.7378C30 15.3994 29.8518 15.0749 29.5881 14.8356C29.3244 14.5962 28.9667 14.4618 28.5938 14.4618H1.40625Z"
						fill="#5E5D68"
					/>
				</svg>
			</div>
			<nav className="m-auto flex w-full flex-col items-center justify-center">
				<Link
					className={`${
						sideMenuOpen ? 'flex' : 'hidden'
					} w-full flex-row items-center justify-center gap-4 whitespace-nowrap px-8 py-5 text-[1.4rem] leading-none  text-[#96969E] duration-200 hover:bg-[#292929] md:justify-start `}
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
					} w-full flex-row items-center justify-center gap-4 whitespace-nowrap px-8 py-5 text-[1.4rem] leading-none  text-[#96969E] duration-200 hover:bg-[#292929] md:justify-start`}
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
					} w-full flex-row items-center justify-center gap-4 whitespace-nowrap px-8 py-5 text-[1.4rem] leading-none  text-[#96969E] duration-200 hover:bg-[#292929] md:justify-start`}
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
					} w-full flex-row items-center justify-center gap-4 whitespace-nowrap px-8 py-5 text-[1.4rem] leading-none  text-[#96969E] duration-200 hover:bg-[#292929] md:justify-start`}
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
					} w-full flex-row items-center justify-center gap-4 whitespace-nowrap px-8 py-5 text-[1.4rem] leading-none  text-[#96969E] duration-200 hover:bg-[#292929] md:justify-start`}
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
