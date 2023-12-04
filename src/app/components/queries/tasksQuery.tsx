import { Task } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const TasksQuery = (id: string, tasks: Task[]) =>
	useQuery({
		queryKey: ['tasksList', 'all'],
		queryFn: async () => {
			const res = await fetch(`/api/user/${id}/task`);
			return (await res.json()) as Task[];
		},
		initialData: tasks,
	});
