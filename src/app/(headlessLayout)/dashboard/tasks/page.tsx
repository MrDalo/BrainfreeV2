import { db } from '@/server/db';

import { columns } from './columns';
import { DataTable } from '../../../components/data-table';

const TasksPage = async () => {
	const tasks = await db.task.findMany({
		where: {
			userId: 'clpfgd7250000rksqa3ltz7l1'
		}
	});

	return <DataTable columns={columns} data={tasks} />;
};

export default TasksPage;
