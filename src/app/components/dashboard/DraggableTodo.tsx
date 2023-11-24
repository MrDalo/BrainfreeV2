'use client';

import { Draggable } from 'react-beautiful-dnd';

const DraggableTodo = ({
	id,
	index,
	title
}: {
	id: string;
	index: number;
	title: string;
}) => {
	return (
		<Draggable key={id} draggableId={id} index={index}>
			{provided => (
				<div
					className="w-full rounded-md bg-primary-green px-4 py-2 font-light text-primary-black shadow-todo-shadow"
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					onClick={() => console.log('clicked')}
				>
					{title}
				</div>
			)}
		</Draggable>
	);
};

export default DraggableTodo;
