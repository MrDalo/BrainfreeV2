import React from 'react';

import { getServerAuthSession } from '@/server/auth';
import SignInForm from '@/app/components/sign-in-form';
import SignInHeading from '@/app/components/sign-in-heading';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
	const status = await getServerAuthSession();

	// console.log(status);

	if (status) {
		redirect('/dashboard');
	}

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
