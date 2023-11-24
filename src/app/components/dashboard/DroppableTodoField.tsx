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
					className="flex h-full w-full flex-col items-center justify-start"
					{...provided.droppableProps}
					ref={provided.innerRef}
				>
					<h2 className="w-full p-4 text-left text-2xl font-bold">
						{droppableName}
					</h2>
					<div className="flex w-full flex-col gap-2 overflow-y-auto overflow-x-hidden p-4">
						{todos.map((todo, todoIndex) => (
							<DraggableTodo
								key={todoIndex}
								id={todo.id}
								index={todoIndex}
								title={todo.title}
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
