'use client';
import { motion } from 'framer-motion';
import React from 'react';

const SignUpHeading = () => {
	return (
		<>
			<motion.h1
				className=" z-10 text-[5rem]  font-extralight leading-none sm:text-[6rem] md:text-[7.2rem] lg:text-[9.7rem] xl:text-[12rem] 2xl:text-[14rem]"
				initial="hidden"
				animate="visible"
				transition={{ staggerChildren: 0.1 }}
			>
				{'Sign up'.split('').map((letter, index) => (
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
			</motion.h1>
			<motion.p
				className="  text-stroke-black absolute mb-[4px] ml-[4px] text-[5rem] font-extralight leading-none  sm:text-[6rem] md:mb-[6px] md:ml-[6px] md:text-[7.2rem] lg:text-[9.7rem] xl:text-[12rem] 2xl:text-[14rem]"
				initial="hidden"
				animate="visible"
				transition={{ staggerChildren: 0.1 }}
			>
				{'Sign up'.split('').map((letter, index) => (
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
			</motion.p>
		</>
	);
};

export default SignUpHeading;
