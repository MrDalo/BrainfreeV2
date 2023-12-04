import React from 'react';

import SignInForm from '@/app/components/signInForm';
import SignInHeading from '@/app/components/signInHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'BrainFree',
	description: 'Prioritize with Eisenhower matrix'
};

const SignInPage = async () => {
	return (
		<main className="flex h-[120vh] flex-col  items-center justify-start bg-primary-green text-primary-black md:h-[100vh] md:flex-row">
			<div className=" relative flex  h-full w-full flex-col items-center justify-center pt-10 md:w-1/2 md:pt-0">
				<SignInHeading />
			</div>
			<div className=" bg-primary-white relative flex  w-full flex-col flex-nowrap items-center justify-center  pb-[10vh] text-primary-black md:h-full md:w-1/2 md:py-0 md:pb-0">
				<SignInForm />
			</div>
		</main>
	);
};

export default SignInPage;
