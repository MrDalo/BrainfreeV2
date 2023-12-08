'use client';
import React from 'react';
import { UsersQuery } from '../../queries/usersQuery';
import { User } from '@prisma/client';
import { columns } from '@/app/(headlessLayout)/dashboard/manage-users/columns';
import { DataTable } from '../../dataTable';

const ManageUsersTable = () => {
	const usersFromQuery = UsersQuery();
	const emptyUsers: User[] = [];

	return (
		<DataTable
			columns={columns}
			data={usersFromQuery.data == undefined ? emptyUsers : usersFromQuery.data}
		/>
	);
};

export default ManageUsersTable;
