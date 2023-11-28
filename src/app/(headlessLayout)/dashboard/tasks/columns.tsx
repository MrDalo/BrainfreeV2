'use client';

import { Button } from '@/components/ui/button';
import { Task, TaskPriority } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';

import { XIcon, CheckIcon, ArrowUpDown } from 'lucide-react';

import EditDialog from '@/app/components/dashboard/tasks/editDialog';
import DeleteDialog from '@/app/components/dashboard/tasks/deleteDialog';

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
				// TODO: width
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
			const priority: string = row.getValue('priority');
			switch (priority) {
				default:
					return '';
				case TaskPriority.URGENT_IMPORTANT:
					return 'Do';
				case TaskPriority.NOT_URGENT_IMPORTANT:
					return 'Schedule';
				case TaskPriority.URGENT_NOT_IMPORTANT:
					return 'Delegate';
				case TaskPriority.NOT_URGENT_NOT_IMPORTANT:
					return 'Delete';
				case TaskPriority.NOT_ASSIGNED:
					return 'Not Assigned';
			}
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
			const deadline: Date = row.getValue('deadline');
			const deadlineString = deadline.toLocaleString();
			return deadlineString;
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
