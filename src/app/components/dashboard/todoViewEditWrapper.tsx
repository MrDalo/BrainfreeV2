'use client';

import { Task } from '@prisma/client';
import { Dispatch, SetStateAction, useState } from 'react';
import TodoView from './todoView';
import TodoForm from './todoEdit';
import { TaskQuery } from '../queries/taskQuery';
import { useQueryClient } from '@tanstack/react-query';

const TodoViewEditWrapper = ({
	todo,
	open,
	update
}: {
	todo: Task;
	open: Dispatch<SetStateAction<boolean>>;
	update: () => void;
}) => {
	const [edit, setEdit] = useState<boolean>(false);

	const queryClient = useQueryClient();

	const data = TaskQuery(todo.id ?? '');

	return (
		<>
			{data.isLoading ? (
				<p>Loading...</p>
			) : data.isError ? (
				<p>Server error while loading...</p>
			) : edit ? (
				<TodoForm
					todo={data.data as Task}
					setEdit={setEdit}
					setOpen={open}
					queryClient={queryClient}
					update={update}
				/>
			) : (
				<TodoView todo={data.data as Task} setEdit={setEdit} />
			)}
		</>
	);
};

export default TodoViewEditWrapper;
