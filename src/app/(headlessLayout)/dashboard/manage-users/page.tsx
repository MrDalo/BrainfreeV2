import { PrismaClient } from '@prisma/client';

import { columns } from './columns';
import { DataTable } from '../../../components/data-table';

const prisma = new PrismaClient();

const ManageUsersPage = async () => {
	const users = await prisma.user.findMany({});

	return <DataTable columns={columns} data={users} />;
};

export default ManageUsersPage;
