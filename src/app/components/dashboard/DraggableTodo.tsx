'use client';

import { Draggable } from 'react-beautiful-dnd';
import TodoFormScreen from './todoFormScreen';
import { Task } from '@prisma/client';
import { useState } from 'react';

const DraggableTodo = ({
	id,
	index,
	todo
}: {
	id: string;
	index: number;
	todo: Task;
}) => {
	const [openTodo, setOpenTodo] = useState<boolean>(false);

	return (
		<>
			<Draggable key={id} draggableId={id} index={index}>
				{provided => (
					<div
						className="w-full rounded-md bg-primary-green px-4 py-2 font-normal text-primary-black shadow-todo-shadow"
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						onClick={() => setOpenTodo(true)}
					>
						{todo.title}
					</div>
				)}
			</Draggable>
			{openTodo && <TodoFormScreen todo={todo} open={setOpenTodo} />}
		</>
	);
};

export default DraggableTodo;
