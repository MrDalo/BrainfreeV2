import { User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export const UsersQuery = () =>
	useQuery({
		queryKey: ['usersList', 'all'],
		queryFn: async () => {
			const res = await fetch('/api/user/');
			return (await res.json()) as User[];
		}
	});
