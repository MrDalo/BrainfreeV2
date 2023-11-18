'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const SignInPage = () => {
	return (
		<main className="flex h-[calc(100vh-106px)]  flex-col items-start justify-start bg-primary-green text-primary-black md:flex-row">
			<div className=" relative flex  h-full w-full flex-col items-center justify-center pt-10 md:w-1/2 md:pt-0">
				<motion.h1
					className=" z-10 text-[5rem]  font-extralight leading-none sm:text-[6rem] md:text-[7.2rem] lg:text-[9.7rem] xl:text-[12rem] 2xl:text-[14rem]"
					initial="hidden"
					animate="visible"
					transition={{ staggerChildren: 0.1 }}
				>
					{'Sign in'.split('').map((letter, index) => (
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
					className="text-stroke-black absolute mb-[4px] ml-[4px] text-[5rem] font-extralight leading-none  sm:text-[6rem] md:mb-[6px] md:ml-[6px] md:text-[7.2rem] lg:text-[9.7rem] xl:text-[12rem] 2xl:text-[14rem]"
					initial="hidden"
					animate="visible"
					transition={{ staggerChildren: 0.1 }}
				>
					{'Sign in'.split('').map((letter, index) => (
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
			</div>
			<div className=" bg-primary-white relative flex  w-full flex-col flex-nowrap items-center justify-center py-[10vh] text-primary-black md:h-full md:w-1/2 md:py-0">
				<div className="  flex w-full flex-col flex-nowrap sm:w-2/3 md:w-full xl:w-2/3">
					<form
						action=""
						className="flex flex-col flex-nowrap items-center gap-4"
					>
						<input
							type="text"
							placeholder="E-mail"
							name="eMail"
							required
							className="w-2/3 border-b border-primary-black bg-transparent text-lg placeholder:text-primary-black focus:outline-none"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							required
							className=" w-2/3 border-b border-primary-black bg-transparent text-lg placeholder:text-primary-black focus:outline-none"
						/>
						<button
							type="submit"
							className="mt-2 inline-block w-1/2 rounded-full bg-primary-black  py-[10px] text-center text-lg font-medium text-primary-green duration-100 hover:scale-105 lg:font-normal"
						>
							Sign in
						</button>
					</form>
					<div className="my-4 flex flex-row flex-nowrap items-center justify-center gap-3">
						<hr className="w-1/3 border-primary-black" />
						<p>OR</p>
						<hr className="w-1/3 border-primary-black" />
					</div>
					<div className="flex w-full flex-col flex-nowrap items-center gap-3">
						<Link
							href=""
							className=" button-shadow stroke-shadow relative flex w-[80%] flex-row items-center justify-center rounded-full border bg-white px-5 py-2 duration-100 hover:scale-105 sm:gap-[30%] md:w-2/3 md:gap-[20%]"
						>
							<Image
								src="/img/google-color.png"
								width={25}
								height={25}
								alt="google-icon"
								className=" absolute left-6 object-contain"
							/>
							<p>Continue with Google</p>
						</Link>
						<Link
							href=""
							className=" button-shadow stroke-shadow relative  flex w-[80%] flex-row items-center justify-center rounded-full border bg-white px-5 py-2 duration-100 hover:scale-105 sm:gap-[30%] md:w-2/3 md:gap-[20%]"
						>
							<Image
								src="/img/github-color.png"
								width={25}
								height={25}
								alt="github-icon"
								className=" absolute left-6 object-contain"
							/>
							<p>Continue with Github</p>
						</Link>
						<Link
							href=""
							className=" button-shadow stroke-shadow relative  flex w-[80%] flex-row items-center justify-center rounded-full border bg-white px-5 py-2 duration-100 hover:scale-105 sm:gap-[30%] md:w-2/3 md:gap-[20%]"
						>
							<Image
								src="/img/facebook-color.png"
								width={25}
								height={25}
								alt="facebook-icon"
								className=" absolute left-6 object-contain"
							/>
							<p>Continue with Facebook</p>
						</Link>

						<div className="flex flex-row flex-wrap items-center justify-center gap-1 px-[5%]">
							<p>Forget your password? </p>
							<Link
								href="reset-password"
								className=" text-primary-pink underline duration-75 hover:scale-105"
							>
								Reset password
							</Link>
						</div>
						<div className="flex flex-row flex-wrap items-center justify-center gap-1 px-[5%]">
							<p>Don&apos;t have an account?</p>
							<Link
								href="sign-up"
								className=" text-primary-pink underline duration-75 hover:scale-105"
							>
								Register
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default SignInPage;
