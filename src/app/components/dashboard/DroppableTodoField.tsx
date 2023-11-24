'use client';

import { Droppable } from 'react-beautiful-dnd';
import DraggableTodo from './DraggableTodo';
import { Task } from '@prisma/client';

const DroppableTodoField = ({
	droppableId,
	todos,
	droppableName
}: {
	droppableId: string;
	todos: Task[];
	droppableName: string;
}) => {
	return (
		<Droppable droppableId={droppableId}>
			{provided => (
				<div
					className="relative left-0 top-0 flex h-full w-full py-3 "
					{...provided.droppableProps}
					ref={provided.innerRef}
				>
					<div className="scrollbar flex h-full w-full flex-col gap-2 overflow-y-auto overflow-x-hidden px-4 py-1">
						{todos.map((todo, todoIndex) => (
							<DraggableTodo
								key={todoIndex}
								id={todo.id}
								index={todoIndex}
								todo={todo}
							/>
						))}
						{provided.placeholder}
					</div>
				</div>
			)}
		</Droppable>
	);
};

export default DroppableTodoField;
