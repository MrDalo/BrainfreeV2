import Dashboard from '@/app/components/dashboard/dashboard';
import React from 'react';

import { PrismaClient } from '@prisma/client';
import { getServerAuthSession } from '@/server/auth';

const prisma = new PrismaClient();

const DashboardPage = async () => {
	const status = await getServerAuthSession();
	const tasks = await prisma.task.findMany({
		where: { userId: 'clpe6af550002gtngs5nppg36' }
	});
	const userId = status?.user?.id;
	const users = await prisma.user.findMany();

	console.log(tasks);
	console.log(userId);
	console.log(users);
	return (
		<div className="absolute left-0 top-0 flex min-h-screen w-full flex-col items-center justify-center bg-black font-andersonGrotesk">
			<Dashboard tasks={tasks} />
		</div>
	);
};

export default DashboardPage;
