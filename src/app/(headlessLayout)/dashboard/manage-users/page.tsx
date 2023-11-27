import { db } from "@/server/db";

import { columns } from './columns';
import { DataTable } from '../../../components/data-table';

const ManageUsersPage = async () => {
	const users = await db.user.findMany({});

	return <DataTable columns={columns} data={users} />;
};

export default ManageUsersPage;
