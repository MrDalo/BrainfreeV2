'use client';

import { Button } from '@/components/ui/button';
import { Task, TaskPriority } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';

import { XIcon, CheckIcon, ArrowUpDown } from 'lucide-react';

import EditDialog from '@/app/components/dashboard/tasks/editDialog';
import DeleteDialog from '@/app/components/dashboard/tasks/deleteDialog';
import priorityTexts from '@/app/priority-texts';

export const columns: ColumnDef<Task>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		}
	},
	{
		accessorKey: 'description',
		header: 'Description',
		cell: ({ row }) => {
			const description: string = row.getValue('description');
			return (
				<div className="max-w-sm overflow-hidden text-ellipsis whitespace-nowrap">
					{description}
				</div>
			);
		}
	},
	{
		accessorKey: 'priority',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Priority
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const priority: TaskPriority = row.getValue('priority');
			return priorityTexts[priority];
		}
	},
	{
		accessorKey: 'deadline',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Deadline
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const deadline: string = row.getValue('deadline');
			return (
				new Date(deadline).toLocaleDateString() +
				' ' +
				new Date(deadline).toLocaleTimeString()
			);
		}
	},
	{
		accessorKey: 'completed',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Completed
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			return (
				<span className=" flex items-center justify-center">
					{row.getValue('completed') ? (
						<CheckIcon color="#00ff00" />
					) : (
						<XIcon color="#ff0000" />
					)}
				</span>
			);
		}
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const task = row.original;
			return (
				<div className=" flex flex-row gap-2">
					<EditDialog task={task} />
					<DeleteDialog id={task.id} />
				</div>
			);
		}
	}
];
