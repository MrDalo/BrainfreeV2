import React from 'react';
import SignUpHeading from '@/app/components/signUpHeading';
import SignUpForm from '@/app/components/signUpForm';

const SignUpPage = async () => {
	return (
		<main className="z-30 flex h-[120vh] flex-col items-center justify-start bg-primary-green text-primary-black md:h-[100vh] md:flex-row">
			<div className=" relative flex  h-full w-full flex-col items-center justify-center pt-10 md:w-1/2 md:pt-0">
				<SignUpHeading />
			</div>
			<div className=" bg-primary-white relative flex  w-full flex-col flex-nowrap items-center justify-center pb-[10vh] text-primary-black md:h-full md:w-1/2 md:py-0 md:pb-0">
				<SignUpForm />
			</div>
		</main>
	);
};

export default SignUpPage;
