import { useQuery } from '@tanstack/react-query';

export const TasksQuery = (id: string) =>
	useQuery({
		queryKey: ['tasksList'],
		queryFn: async () => {
			const res = await fetch(`/api/user/${id}/task`);
			return res.json();
		}
	});
