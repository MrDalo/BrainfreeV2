'use client';
import React from 'react';
import { Task } from '@prisma/client';
import { columns } from '@/app/(headlessLayout)/dashboard/tasks/columns';
import { DataTable } from '../../data-table';
import { TasksQuery } from '../../queries/tasksQuery';

type Props = {
	tasks: Task[];
	id: string;
};

const TasksTable = ({ id, tasks }: Props) => {
	const tasksFromQuery = TasksQuery(id, tasks);

	return <DataTable columns={columns} data={tasksFromQuery.data} />;
};

export default TasksTable;
