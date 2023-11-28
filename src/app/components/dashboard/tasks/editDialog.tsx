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
import { Task } from '@prisma/client';

type EditDialogProps = { task: Task };

const EditDialog = ({ task }: EditDialogProps) => {
	const queryClient = useQueryClient();

	// const mutation = useMutation({
	// 	mutationFn: (newUserName: { name: string }) =>
	// 		fetch(`/api/user/${user.id}`, {
	// 			method: 'PUT',
	// 			body: JSON.stringify(newUserName)
	// 		}),
	// 	onSuccess: () => {
	// 		queryClient.invalidateQueries({ queryKey: ['usersList', 'all'] });
	// 	}
	// });

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="secondary">Edit</Button>
			</DialogTrigger>
			<DialogContent className="bg-[#292929]">
				<DialogHeader>
					<DialogTitle>Are you sure absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete selected
						account and remove its data from our servers.
					</DialogDescription>
				</DialogHeader>
				{/* TODO add form */}
				<DialogFooter className="sm:justify-start">
					{/* <DialogClose asChild>
						<Button
							type="button"
							variant="destructive"
							onClick={() => mutation.mutate()}
						>
							Delete
						</Button>
					</DialogClose> */}
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

export default EditDialog;
