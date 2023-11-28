import { db } from '@/server/db';
import TasksTable from '@/app/components/dashboard/tasks/table';
import { getServerAuthSession } from '@/server/auth';

const TasksPage = async () => {
	const status = await getServerAuthSession();

	const tasks = await db.task.findMany({
		where: {
			userId: status?.user?.id
		}
	});
	console.log(tasks);

	const userId = status?.user?.id ?? '';

	return <TasksTable id={userId} tasks={tasks} />;
};

export default TasksPage;
