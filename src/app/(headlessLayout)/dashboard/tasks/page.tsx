import { db } from '@/server/db';
import TasksTable from '@/app/components/dashboard/tasks/table';
import { getServerAuthSession } from '@/server/auth';

const TasksPage = async () => {
	const status = await getServerAuthSession();

	const tasks = await db.task.findMany({
		where: {
			// userId: status?.user?.id
			userId: 'clpckoymo0000gf3hr4dqh059'
		}
	});
	console.log(tasks);

	// const userId = status?.user?.id ?? '';
	const userId = 'clpckoymo0000gf3hr4dqh059';

	return <TasksTable id={userId} tasks={tasks} />;
};

export default TasksPage;
