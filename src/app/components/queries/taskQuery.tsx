import { useQuery } from '@tanstack/react-query';

export const TaskQuery = (id: string) =>
	useQuery({
		queryKey: ['taskInfo', { id }],
		queryFn: async () => {
			const res = await fetch(`/api/task/${id}`);
			return res.json();
		}
	});
