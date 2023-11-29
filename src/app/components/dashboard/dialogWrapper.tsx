'use client';

import { Button } from '@/components/ui/button';
import { DialogHeader } from '@/components/ui/dialog';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { Dispatch, SetStateAction } from 'react';

const DialogWrapper = ({
	title,
	open,
	setOpen,
	children
}: {
	title: string;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	children: React.ReactNode;
}) => {
	return (
		<div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-primary-black bg-opacity-75">
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="max-w-[90%] rounded-[1rem] bg-[#292929] p-4">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
					</DialogHeader>
					{children}
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default DialogWrapper;
