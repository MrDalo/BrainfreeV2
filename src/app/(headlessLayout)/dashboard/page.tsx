import Dashboard from '@/app/components/dashboard/dashboard';
import React from 'react';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const DashboardPage = async () => {
	const tasks = await prisma.task.findMany({
		where: { userId: 'clpce75rk0002eo3dhdc3bj80' }
	});
	const users = await prisma.user.findMany();

	console.log(tasks);
	console.log(users);
	return (
		<div className="absolute left-0 top-0 flex w-full flex-col items-center justify-center text-black">
			<Dashboard tasks={tasks} />
		</div>
	);
};

export default DashboardPage;
