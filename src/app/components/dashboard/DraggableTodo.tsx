'use client';

import { Draggable } from 'react-beautiful-dnd';
import TodoFormScreen from './todoFormScreen';
import { Task } from '@prisma/client';
import { useState } from 'react';
import Checkbox from '../checkbox';

const DraggableTodo = ({
	id,
	index,
	todo,
	colums,
	check
}: {
	id: string;
	index: number;
	todo: Task;
	colums: boolean;
	check: (todo: Task) => void;
}) => {
	const [openTodo, setOpenTodo] = useState<boolean>(false);

	return (
		<>
			<Draggable key={id} draggableId={id} index={index}>
				{provided => (
					<div
						className={`relative rounded-md bg-primary-green px-4 py-2 font-normal text-primary-black
						${
							todo.deadline < new Date()
								? 'border border-red-600 text-red-600 shadow-todo-shadow-red'
								: 'shadow-todo-shadow'
						}
						${colums ? 'w-[calc(50%-0.25rem)]' : 'w-full'}`}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						<p onClick={() => setOpenTodo(true)}>{todo.title}</p>
						<button
							className="absolute right-2 top-[50%] h-6 w-6 translate-y-[-50%] rounded-md border bg-white"
							onClick={() => check(todo)}
						></button>
					</div>
				)}
			</Draggable>
			{openTodo && <TodoFormScreen todo={todo} open={setOpenTodo} />}
		</>
	);
};

export default DraggableTodo;
