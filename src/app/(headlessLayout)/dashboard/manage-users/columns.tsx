'use client';

import { Button } from '@/components/ui/button';
import { User, Role } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';

import { XIcon, CheckIcon, ArrowUpDown, MoreHorizontal } from 'lucide-react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const columns: ColumnDef<User>[] = [
	{
		accessorKey: 'name',
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
		accessorKey: 'email',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Email
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		}
	},
	{
		accessorKey: 'role',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Role
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const priority: string = row.getValue('role');
			switch (priority) {
				default:
					return '';
				case Role.USER:
					return 'User';
				case Role.ADMIN:
					return 'Admin';
			}
		}
	},
	{
		accessorKey: 'email-verified',
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Email Verified
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
		cell: ({ row }) => {
			return (
				<span className=" flex items-center justify-center">
					{row.getValue('email-verified') ? (
						<CheckIcon color="#00ff00" />
					) : (
						<XIcon color="#ff0000" />
					)}
				</span>
			);
		}
	},
	{
		id: "actions",
		cell: ({ row }) => {
		  const payment = row.original
	 
			return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<MoreHorizontal className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{/* TODO */}
					{/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
					{/* <DropdownMenuSeparator /> */}
					<DropdownMenuItem>Edit user</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Delete user</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		  	)
		},
	},
];
