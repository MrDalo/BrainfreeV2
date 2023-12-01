'use client';

import { dateToLocalISO } from '@/app/date';
import priorityTexts from '@/app/priority-texts';
import { Button } from '@/components/ui/button';
import { TaskPriority } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

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
		}
	});

	const onSubmit: SubmitHandler<FormInputs> = data => {
		const userId = session?.user.id;
		data.userId = userId as string;
		data.deadline = new Date(data.deadline);
		data.completed = false;

		mutation.mutate(data);
	};

	return (
		<>
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
					></input>
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

				<div className="mb-[1rem] flex w-full flex-row items-start justify-start px-2 text-[1rem]">
					<h3 className="mr-4 text-primary-green">Deadline: </h3>

					<input
						className="rounded-[1rem] border border-primary-green bg-primary-black px-3 py-1 text-[1rem] text-white"
						type="datetime-local"
						{...register('deadline', { required: true })}
					/>
				</div>

				<div className="flex items-center justify-center gap-[2rem]">
					{/* TODO: jednotny style */}
					{/* className="duration-[400ms] w-fit rounded-[1rem] border border-primary-green px-8 py-1 text-[1.2rem] text-primary-green transition hover:bg-primary-green hover:text-primary-black" */}
					<Button type="submit" disabled={mutation.isPending}>
						{mutation.isPending ? 'Creating...' : 'Create'}
					</Button>
				</div>
			</form>
		</>
	);
};

export default TodoCreateForm;
