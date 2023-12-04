'use client';

import { Dispatch, SetStateAction } from 'react';
import DialogWrapper from './dashboard/dialogWrapper';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ErrorDialog = ({
	message,
	open,
	setOpen
}: {
	message: string;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<DialogWrapper title="Error" open={open} setOpen={setOpen}>
			<p className="py-4">{message}</p>
			<DialogFooter className="sm:justify-center">
				<Button
					type="button"
					variant="secondary"
					onClick={() => {
						setOpen(false);
					}}
				>
					Ok
				</Button>
			</DialogFooter>
		</DialogWrapper>
	);
};

export default ErrorDialog;
