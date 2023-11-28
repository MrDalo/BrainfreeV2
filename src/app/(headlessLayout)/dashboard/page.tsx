import Dashboard from '@/app/components/dashboard/dashboard';
import React from 'react';

import { getServerAuthSession } from '@/server/auth';
import { db } from '@/server/db';

const prisma = db;

const DashboardPage = async () => {
	const status = await getServerAuthSession();
	const tasks = await prisma.task.findMany({
		where: { userId: 'clpfgd7250000rksqa3ltz7l1' }
	});
	const userId = status?.user?.id;
	const users = await prisma.user.findMany();

	// console.log(tasks);
	// console.log(userId);
	// console.log(users);
	return (
		<div className=" flex w-full flex-col items-center justify-center gap-6  text-white">
			{/* <div className="absolute left-0 top-0 flex min-h-screen w-full flex-col items-center justify-center bg-black font-andersonGrotesk"> */}
			<Dashboard tasks={tasks} />
		</div>
	);
};

export default DashboardPage;
