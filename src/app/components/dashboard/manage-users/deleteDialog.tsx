import React from 'react';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { User } from '@prisma/client';

type Props = { id: string };

const DeleteDialog = ({ id }: Props) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async () => {
			const res = await fetch(`/api/user/${id}`, {
				method: 'DELETE'
			});
			return (await res.json()) as User;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['usersList', 'all'] });
		}
	});

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="destructive">Delete</Button>
			</DialogTrigger>
			<DialogContent className="bg-[#292929]">
				<DialogHeader>
					<DialogTitle className="text-red-600">
						Are you sure absolutely sure?
					</DialogTitle>
					<DialogDescription className="text-white">
						This action cannot be undone. This will permanently delete selected
						account and remove its data from our servers.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button
							type="button"
							variant="destructive"
							onClick={() => mutation.mutate()}
						>
							Delete
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteDialog;
