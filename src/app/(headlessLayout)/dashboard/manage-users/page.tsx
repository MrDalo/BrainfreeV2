import { db } from '@/server/db';
import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/server/auth';
import ManageUsersTable from '@/app/components/dashboard/manage-users/table';

const ManageUsersPage = async () => {
	const status = await getServerAuthSession();
	if (status?.user?.role !== 'ADMIN') {
		redirect('/dashboard');
	}

	return <ManageUsersTable />;
};

export default ManageUsersPage;
