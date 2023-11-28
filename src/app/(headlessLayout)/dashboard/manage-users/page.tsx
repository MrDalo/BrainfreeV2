import { db } from '@/server/db';
import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/server/auth';
import ManageUsersTable from '@/app/components/dashboard/manage-users/table';

const ManageUsersPage = async () => {
	const status = await getServerAuthSession();
	if (status?.user?.role !== 'ADMIN') {
		redirect('/dashboard');
	}

	const users = await db.user.findMany({});
	return <ManageUsersTable users={users} />;
};

export default ManageUsersPage;
