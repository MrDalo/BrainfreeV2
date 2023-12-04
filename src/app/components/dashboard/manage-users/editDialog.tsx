'use client';
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
import ProfileForm from '../../profileForm';

type EditDialogProps = { user: User };

const EditDialog = ({ user }: EditDialogProps) => {
	const [open, setOpen] = React.useState<boolean>(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="secondary">Edit</Button>
			</DialogTrigger>
			<DialogContent className="bg-[#292929]">
				<DialogHeader>
					<DialogTitle>Are you sure absolutely sure?</DialogTitle>
					<DialogDescription>
						This action will edit user&apos;s name and role.
					</DialogDescription>
				</DialogHeader>
				<ProfileForm
					id={user.id}
					name={user.name ? user.name : ''}
					email={user.email ? user.email : ''}
					role={user.role}
					isManageUsers={true}
					setOpen={setOpen}
				/>
			</DialogContent>
		</Dialog>
	);
};

export default EditDialog;
