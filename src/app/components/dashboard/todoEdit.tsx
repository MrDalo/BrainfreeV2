'use client';

import priorityTexts from '@/app/priority-texts';
import { Task, TaskPriority } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { dateToLocalISO } from '@/app/date';

type FormInputs = {
	title: string;
	description: string | null;
	priority: TaskPriority;
	deadline: Date;
	completed: boolean;
};

const TodoForm = ({
	todo,
	setEdit,
	setOpen,
	queryClient,
	update
}: {
	todo: Task;
	setEdit: Dispatch<SetStateAction<boolean>>;
	setOpen: Dispatch<SetStateAction<boolean>>;
	queryClient: QueryClient;
	update: () => void;
}) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormInputs>();

	const id = todo.id;

	const mutation = useMutation({
		mutationFn: (updatedTodo: {
			title: string;
			description: string | null;
			priority: TaskPriority;
			deadline: Date;
			completed: boolean;
		}) =>
			fetch(`/api/task/${id}`, {
				method: 'PUT',
				body: JSON.stringify(updatedTodo)
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['taskInfo', { id }] });
			update();
			setEdit(false);
		}
	});

	const mutationDelete = useMutation({
		mutationFn: () =>
			fetch(`/api/task/${id}`, {
				method: 'DELETE'
			}),
		onSuccess: () => {
			setOpen(false);
		}
	});

	const onSubmit: SubmitHandler<FormInputs> = data => {
		// correct date format from input
		data.deadline = new Date(data.deadline);
		mutation.mutate(data);
	};

	return (
		<form
			className="flex h-full w-full flex-col items-center justify-center font-normal"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className="mb-[1.5rem] text-[2rem] font-light text-primary-green">
				Edit Todo
			</h2>
			<div className="mb-[1rem] flex w-full flex-col items-start justify-start px-2 text-[1rem]">
				<h3 className="text-primary-green">Title: </h3>
				<input
					type="text"
					className="w-full rounded-[1rem] border border-primary-green bg-primary-black px-3 py-1 text-[1rem] text-white"
					defaultValue={todo.title as string}
					{...register('title', { required: true, maxLength: 60 })}
				></input>
			</div>
			<div className="mb-[1rem] flex w-full flex-col items-start justify-start px-2 text-[1rem]">
				<h3 className="text-primary-green">Description: </h3>

				<textarea
					className="scrollbar h-[4.5rem] w-full rounded-[1rem] border border-primary-green bg-primary-black px-3 py-1 text-[1rem] text-white"
					defaultValue={todo.description as string}
					{...register('description')}
				></textarea>
			</div>
			<div className="mb-[1rem] flex w-full flex-row items-start justify-start px-2 text-[1rem]">
				<h3 className="mr-4 text-primary-green">Priority: </h3>
				<select
					className="rounded-[1rem] border border-primary-green bg-primary-black px-3 py-1 text-[1rem] text-white"
					defaultValue={todo.priority as TaskPriority}
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
			<div className="mb-[2rem] flex w-full flex-col justify-between sm:flex-row">
				<div className="mb-[1rem] flex flex-row items-start justify-start px-2 text-[1rem]">
					<h3 className="mr-4 text-primary-green">Deadline: </h3>

					<input
						className="rounded-[1rem] border border-primary-green bg-primary-black px-3 py-1 text-[1rem] text-white"
						type="datetime-local"
						defaultValue={dateToLocalISO(new Date(todo.deadline)).slice(0, 16)}
						{...register('deadline', { required: true })}
					/>
				</div>
				<div className="mb-[1rem] flex flex-row items-start justify-start px-2 text-[1rem] sm:justify-end">
					<h3 className="mr-4 text-primary-green">Completed: </h3>
					<div className="checkbox-wrapper-18 mr-2">
						<div className="round">
							<input
								type="checkbox"
								id="checkbox-18"
								defaultChecked={todo.completed as boolean}
								{...register('completed')}
							/>
							<label htmlFor="checkbox-18"></label>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center gap-2 sm:gap-[2rem]">
				<button
					className="duration-[400ms] w-fit rounded-[1rem] border border-primary-green px-4 py-1 text-[1.2rem] text-primary-green transition hover:bg-primary-green hover:text-primary-black sm:px-8"
					onClick={() => setEdit(false)}
					disabled={mutation.isPending || mutationDelete.isPending}
				>
					Back
				</button>
				<button
					className="duration-[400ms] w-fit rounded-[1rem] border border-primary-green px-8 py-1 text-[1.2rem] text-primary-green transition hover:bg-primary-green hover:text-primary-black"
					disabled={mutation.isPending || mutationDelete.isPending}
					onClick={() => mutationDelete.mutate()}
				>
					{mutationDelete.isPending ? 'Deleting...' : 'Delete'}
				</button>
				<input
					type="submit"
					className="duration-[400ms] w-fit rounded-[1rem] border border-primary-green px-8 py-1 text-[1.2rem] text-primary-green transition hover:bg-primary-green hover:text-primary-black"
					disabled={mutation.isPending || mutationDelete.isPending}
					value={mutation.isPending ? 'Saving...' : 'Save'}
				></input>
			</div>
		</form>
	);
};

export default TodoForm;
