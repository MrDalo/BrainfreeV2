'use client';
import React from 'react';
import { UsersQuery } from '../../queries/usersQuery';
import { User } from '@prisma/client';
import { columns } from '@/app/(headlessLayout)/dashboard/manage-users/columns';
import { DataTable } from '../../data-table';

type Props = {
	users: User[];
};

const ManageUsersTable = (props: Props) => {
	const usersFromQuery = UsersQuery(props.users);

	return <DataTable columns={columns} data={usersFromQuery.data} />;
};

export default ManageUsersTable;
