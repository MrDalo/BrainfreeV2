import { PrismaClient } from '@prisma/client';

import { columns } from './columns';
import { DataTable } from '../../../components/data-table';

const prisma = new PrismaClient();

const TasksPage = async () => {
	const tasks = await prisma.task.findMany({
		where: {
			userId: 'clpckoymo0000gf3hr4dqh059'
		}
	});

	return <DataTable columns={columns} data={tasks} />;
};

export default TasksPage;
