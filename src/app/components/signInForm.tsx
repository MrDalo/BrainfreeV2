'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { signIn } from 'next-auth/react';

const SignInForm = () => {
	return (
		<div className="  flex w-full flex-col flex-nowrap sm:w-2/3 md:w-full xl:w-2/3">
			{/* <form action="" className="flex flex-col flex-nowrap items-center gap-4">
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
			</div> */}
			<div className="flex w-full flex-col flex-nowrap items-center gap-3">
				<button
					onClick={() =>
						signIn('google', {
							callbackUrl: 'http://localhost:3000/dashboard'
						})
					}
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
				</button>
				<button
					onClick={() =>
						signIn('discord', {
							callbackUrl: 'http://localhost:3000/dashboard'
						})
					}
					className=" button-shadow stroke-shadow relative flex w-[80%] flex-row items-center justify-center rounded-full border bg-white px-5 py-2 duration-100 hover:scale-105 sm:gap-[30%] md:w-2/3 md:gap-[20%]"
				>
					<Image
						src="/img/discord-icon-v2.png"
						width={25}
						height={25}
						alt="github-icon"
						className=" absolute left-6 object-contain"
					/>
					<p>Continue with Discord</p>
				</button>

				{/* <div className="flex flex-row flex-wrap items-center justify-center gap-1 px-[5%]">
					<p>Forget your password? </p>
					<Link
						href="reset-password"
						className=" text-primary-pink underline duration-75 hover:scale-105"
					>
						Reset password
					</Link>
				</div> */}
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
	);
};

export default SignInForm;
