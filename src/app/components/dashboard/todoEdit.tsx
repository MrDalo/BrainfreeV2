'use client';

import priorityTexts from '@/app/priority-texts';
import { Task, TaskPriority } from '@prisma/client';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { dateToLocalISO } from '@/app/date';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import ErrorDialog from '../errorDialog';

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
	update,
	fromList
}: {
	todo: Task;
	setEdit?: Dispatch<SetStateAction<boolean>>;
	setOpen?: Dispatch<SetStateAction<boolean>>;
	queryClient?: QueryClient;
	update?: () => void;
	fromList: boolean;
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
			queryClient?.invalidateQueries({ queryKey: ['taskInfo', { id }] });
			if (update) update();
			if (setEdit) setEdit(false);
			if (fromList && setOpen) setOpen(false);
		},
		onError: error => {
			setIsError(true);
		}
	});

	const mutationDelete = useMutation({
		mutationFn: () =>
			fetch(`/api/task/${id}`, {
				method: 'DELETE'
			}),
		onSuccess: () => {
			if (update) update();
			if (setOpen) setOpen(false);
		},
		onError: error => {
			setIsError(true);
		}
	});

	const onSubmit: SubmitHandler<FormInputs> = data => {
		// correct date format from input
		data.deadline = new Date(data.deadline);
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
					Edit Todo
				</h2>
				<div className="mb-[1rem] flex w-full flex-col items-start justify-start px-2 text-[1rem]">
					<h3 className="text-primary-green">Title: </h3>
					<input
						type="text"
						className="w-full rounded-[1rem] border border-primary-green bg-primary-black px-3 py-1 text-[1rem] text-white"
						defaultValue={todo.title as string}
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
							defaultValue={dateToLocalISO(new Date(todo.deadline)).slice(
								0,
								16
							)}
							{...register('deadline', { required: true })}
						/>

						{errors.deadline && (
							<span className="mt-1 w-full text-center text-red-400">
								This field is required
							</span>
						)}
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
					{!fromList ? (
						<Button
							variant="secondary"
							disabled={mutation.isPending || mutationDelete.isPending}
							onClick={() => {
								if (setEdit) setEdit(false);
							}}
						>
							Back
						</Button>
					) : (
						<DialogClose asChild>
							<Button type="button" variant="secondary">
								Close
							</Button>
						</DialogClose>
					)}

					<Button
						variant="destructive"
						type="submit"
						disabled={mutation.isPending || mutationDelete.isPending}
						onClick={() => mutationDelete.mutate()}
					>
						{mutationDelete.isPending ? 'Deleting...' : 'Delete'}
					</Button>

					<Button
						variant="secondary"
						type="submit"
						disabled={mutation.isPending || mutationDelete.isPending}
						className=" bg-primary-green text-primary-black"
					>
						{mutation.isPending ? 'Saving...' : 'Save'}
					</Button>
				</div>
			</form>
		</>
	);
};

export default TodoForm;
