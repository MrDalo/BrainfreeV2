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
import TodoForm from '../todoEdit';

type EditDialogProps = { task: Task };

const EditDialog = ({ task }: EditDialogProps) => {
	const [open, setOpen] = React.useState<boolean>(false);
	const queryClient = useQueryClient();

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="secondary">Edit</Button>
			</DialogTrigger>
			<DialogContent className="  bg-[#292929]">
				<TodoForm
					todo={task}
					fromList={true}
					setOpen={setOpen}
					queryClient={queryClient}
				/>
			</DialogContent>
		</Dialog>
	);
};

export default EditDialog;
