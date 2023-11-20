import ButtonSignOut from '@/app/components/button-sign-out';
import { getServerAuthSession } from '@/server/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage = async () => {
	const status = await getServerAuthSession();
	console.log(status);
	// if (!status) {
	// 	// User unauthenticated, redirect to home
	// 	redirect('/');
	// }
	return (
		<div className=" text-black">
			DashboardPage
			<ButtonSignOut />
		</div>
	);
};

export default DashboardPage;
