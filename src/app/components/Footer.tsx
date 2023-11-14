'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Footer = () => {
	const router = useRouter();

	const onArrowClick = () => {
		router.push('/#matrix');
	};
	return (
		<footer className=" flex w-full flex-col-reverse flex-nowrap items-center justify-between gap-10 bg-primary-black px-12 py-12 text-primary-green md:flex-row md:py-10">
			{/* <footer className=" flex w-full flex-row flex-nowrap items-center justify-between bg-[#F2F2F2] px-12 py-8 text-black"> */}
			<div className="relative flex flex-row flex-nowrap items-end gap-4">
				<motion.h3
					className=" z-10 text-[4rem] font-extralight leading-none"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
				>
					{'BrainFree'.split('').map((letter, index) => (
						<motion.span
							key={index}
							variants={{
								hidden: { opacity: 0, y: 50 },
								visible: {
									opacity: 1,
									y: 0
								}
							}}
						>
							{letter}
						</motion.span>
					))}
				</motion.h3>
				<motion.h3
					className=" text-stroke-green absolute z-0 mb-[1px] ml-[3px] text-[4rem] font-extralight leading-none"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
				>
					{'BrainFree'.split('').map((letter, index) => (
						<motion.span
							key={index}
							variants={{
								hidden: { opacity: 0, y: 50 },
								visible: {
									opacity: 1,
									y: 0
								}
							}}
						>
							{letter}
						</motion.span>
					))}
				</motion.h3>
				<motion.svg
					width="22"
					height="35"
					viewBox="0 0 22 35"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className=" animate-bounce cursor-pointer duration-150"
					onClick={onArrowClick}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
				>
					<path
						d="M11 34L11 1M11 1L1 11.1809M11 1L21 11.1809"
						stroke="#B0F191"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</motion.svg>
			</div>

			<div className="flex flex-row gap-7">
				<Link
					href="/sign-in"
					className=" rounded-full bg-primary-green px-6 py-1 text-[1rem] font-extralight text-primary-black duration-150 hover:scale-105 sm:text-[1.5rem]"
				>
					Sign in
				</Link>
				<Link
					href="/sign-up"
					className=" mt-[5px] text-[1rem] font-extralight text-primary-green duration-150 hover:scale-105 sm:text-[1.5rem]"
				>
					Sign up
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
