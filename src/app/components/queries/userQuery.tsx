import { useQuery } from '@tanstack/react-query';

export const UserQuery = (id: string) =>
	useQuery({
		queryKey: ['userInfo', { id }],
		queryFn: async () => {
			const res = await fetch(`/api/user/${id}`);
			// console.log('res: ', res.json());
			return res.json();
		}
	});
