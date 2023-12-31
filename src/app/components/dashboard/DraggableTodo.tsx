'use client';

import { Draggable } from 'react-beautiful-dnd';
import TodoViewEditWrapper from './todoViewEditWrapper';
import { Task } from '@prisma/client';
import { useState } from 'react';
import { Dialog, DialogContent } from '@radix-ui/react-dialog';
import DialogWrapper from './dialogWrapper';

const DraggableTodo = ({
	id,
	index,
	todo,
	colums,
	check,
	update
}: {
	id: string;
	index: number;
	todo: Task;
	colums: boolean;
	check: (todo: Task) => void;
	update: () => void;
}) => {
	const [openTodo, setOpenTodo] = useState<boolean>(false);

	return (
		<>
			<Draggable key={id} draggableId={id} index={index}>
				{provided => (
					<div
						// className={`relative rounded-md bg-primary-green px-4 py-2 font-normal text-primary-black
						className={`relative rounded-xl bg-[#333] px-4 py-2 font-normal text-primary-green
						${todo.deadline < new Date() ? 'border border-red-600 text-red-600' : ''}
						${colums ? 'w-full md:w-[calc(50%-0.25rem)]' : 'w-full'}`}
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
			{openTodo && (
				<DialogWrapper title="" open={openTodo} setOpen={setOpenTodo}>
					<TodoViewEditWrapper todo={todo} open={setOpenTodo} update={update} />
				</DialogWrapper>
			)}
		</>
	);
};

export default DraggableTodo;
