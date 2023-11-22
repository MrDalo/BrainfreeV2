import Dashboard from '@/app/components/dashboard/dashboard';
import { getServerAuthSession } from '@/server/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage = async () => {
	// const status = await getServerAuthSession();
	// console.log(status);
	// if (!status) {
	// 	// User unauthenticated, redirect to home
	// 	redirect('/');
	// }
	return (
		<div className="absolute left-0 top-0 flex w-full flex-col items-center justify-center text-black">
			<Dashboard />
		</div>
	);
};

export default DashboardPage;
