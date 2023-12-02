'use client';

import { dateToLocalISO } from '@/app/date';
import priorityTexts from '@/app/priority-texts';
import { Button } from '@/components/ui/button';
import { TaskPriority } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ErrorDialog from '../errorDialog';

type FormInputs = {
	title: string;
	description: string | null;
	priority: TaskPriority;
	deadline: Date;
	completed: boolean;
	userId: string;
};

const TodoCreateForm = ({
	setOpen,
	update
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
	update: () => void;
}) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormInputs>();

	const { data: session } = useSession();

	const mutation = useMutation({
		mutationFn: (newTodo: {
			title: string;
			description: string | null;
			priority: TaskPriority;
			deadline: Date;
			completed: boolean;
			userId: string;
		}) =>
			fetch(`/api/task`, {
				method: 'POST',
				body: JSON.stringify(newTodo)
			}),
		onSuccess: () => {
			update();
			setOpen(false);
		},
		onError: error => {
			setIsError(true);
		}
	});

	const onSubmit: SubmitHandler<FormInputs> = data => {
		const userId = session?.user.id;
		data.userId = userId as string;
		data.deadline = new Date(data.deadline);
		data.completed = false;

		mutation.mutate(data);
	};

	const [isError, setIsError] = useState<boolean>(false);

	return (
		<>
			{isError && (
				<ErrorDialog
					message="Error updating tasks, try it again."
					open={isError}
					setOpen={setIsError}
				/>
			)}
			<form
				className="flex h-full w-full flex-col items-center justify-center font-normal"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className="mb-[1.5rem] text-[2rem] font-light text-primary-green">
					Create Todo
				</h2>
				<div className="mb-[1rem] flex w-full flex-col items-start justify-start px-2 text-[1rem]">
					<h3 className="text-primary-green">Title: </h3>
					<input
						type="text"
						className="w-full rounded-[1rem] border border-primary-green bg-primary-black px-3 py-1 text-[1rem] text-white"
						defaultValue=""
						{...register('title', { required: true, maxLength: 60 })}
					/>
					{errors.title?.type === 'required' && (
						<span className="mt-1 w-full text-center text-red-400">
							This field is required
						</span>
					)}
					{errors.title?.type === 'maxLength' && (
						<span className="mt-1 w-full text-center text-red-400">
							Max length of 60 characters
						</span>
					)}
				</div>
				<div className="mb-[1rem] flex w-full flex-col items-start justify-start px-2 text-[1rem]">
					<h3 className="text-primary-green">Description: </h3>

					<textarea
						className="scrollbar h-[4.5rem] w-full rounded-[1rem] border border-primary-green bg-primary-black px-3 py-1 text-[1rem] text-white"
						defaultValue=""
						{...register('description')}
					></textarea>
				</div>
				<div className="mb-[1rem] flex w-full flex-row items-start justify-start px-2 text-[1rem]">
					<h3 className="mr-4 text-primary-green">Priority: </h3>
					<select
						className="rounded-[1rem] border border-primary-green bg-primary-black px-3 py-1 text-[1rem] text-white"
						defaultValue={TaskPriority.NOT_ASSIGNED}
						{...register('priority')}
					>
						<option value={TaskPriority.URGENT_IMPORTANT}>
							{priorityTexts[TaskPriority.URGENT_IMPORTANT]}
						</option>
						<option value={TaskPriority.NOT_URGENT_IMPORTANT}>
							{priorityTexts[TaskPriority.NOT_URGENT_IMPORTANT]}
						</option>
						<option value={TaskPriority.URGENT_NOT_IMPORTANT}>
							{priorityTexts[TaskPriority.URGENT_NOT_IMPORTANT]}
						</option>
						<option value={TaskPriority.NOT_URGENT_NOT_IMPORTANT}>
							{priorityTexts[TaskPriority.NOT_URGENT_NOT_IMPORTANT]}
						</option>
						<option value={TaskPriority.NOT_ASSIGNED}>
							{priorityTexts[TaskPriority.NOT_ASSIGNED]}
						</option>
					</select>
				</div>

				<div className="mb-[1rem] flex w-full flex-row flex-wrap items-start justify-start px-2 text-[1rem]">
					<h3 className="mr-4 text-primary-green">Deadline: </h3>

					<input
						className=" rounded-[1rem] border border-primary-green bg-primary-black  px-3 py-1 text-[1rem] text-white "
						type="datetime-local"
						{...register('deadline', { required: true })}
					/>
					{errors.deadline && (
						<span className="mt-1 w-full text-center text-red-400">
							This field is required
						</span>
					)}
				</div>

				<div className="flex items-center justify-center gap-[2rem]">
					<Button
						type="submit"
						disabled={mutation.isPending}
						className=" rounded-lg bg-primary-green text-primary-black hover:bg-[#c9cccf]"
					>
						{mutation.isPending ? 'Creating...' : 'Create'}
					</Button>
				</div>
			</form>
		</>
	);
};

export default TodoCreateForm;
