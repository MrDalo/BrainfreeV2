import { db } from "@/server/db";

import { columns } from './columns';
import { DataTable } from '../../../components/data-table';

const TasksPage = async () => {
	const tasks = await db.task.findMany({
		where: {
			userId: 'clpckoymo0000gf3hr4dqh059'
		}
	});

	return <DataTable columns={columns} data={tasks} />;
};

export default TasksPage;
