import Dashboard from '@/app/components/dashboard/dashboard';
import React from 'react';

import { getServerAuthSession } from '@/server/auth';
import { db } from '@/server/db';

const prisma = db;

const DashboardPage = async () => {
	const status = await getServerAuthSession();
	const userId = status?.user?.id;

	const tasks = await prisma.task.findMany({
		where: { userId: userId }
	});

	return (
		<div className=" flex w-full flex-col items-center justify-center gap-6  text-white">
			<Dashboard tasks={tasks} />
		</div>
	);
};

export default DashboardPage;
