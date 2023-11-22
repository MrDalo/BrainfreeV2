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
					className="w-full rounded-md bg-white px-4 py-2 shadow-lg"
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{title}
				</div>
			)}
		</Draggable>
	);
};

export default DraggableTodo;
