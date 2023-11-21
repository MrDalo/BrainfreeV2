import DndExample from '@/app/components/DndExample';
import Dashboard from '@/app/components/dashboard';
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
		<div className=" flex flex-col items-center justify-center text-black">
			<h1 className=" text-[3rem]">Dashboard page</h1>
			<Dashboard />
			<DndExample />
		</div>
	);
};

export default DashboardPage;
