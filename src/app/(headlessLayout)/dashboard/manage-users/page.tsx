import { getServerAuthSession } from '@/server/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage = async () => {
	const status = await getServerAuthSession();
	console.log(status);
	if (!status) {
		// User unauthenticated, redirect to home
		redirect('/');
	}
	return (
		<div className=" flex items-center justify-center text-black">
			<h1 className=" text-[3rem]">Manage users page</h1>
		</div>
	);
};

export default DashboardPage;
