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

type Props = { id: string };

const DeleteDialog = ({ id }: Props) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async () => {
			const res = await fetch(`/api/task/${id}`, {
				method: 'DELETE'
			});
			return await res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['tasksList', 'all'] });
		}
	});

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="destructive">Delete</Button>
			</DialogTrigger>
			<DialogContent className="bg-[#292929]">
				<DialogHeader>
					<DialogTitle>Are you sure absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete selected
						task.
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
