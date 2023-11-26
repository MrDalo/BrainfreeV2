'use client';

import { Droppable } from 'react-beautiful-dnd';
import DraggableTodo from './DraggableTodo';
import { Task } from '@prisma/client';

const DroppableTodoField = ({
	droppableId,
	todos,
	droppableName,
	check,
	update
}: {
	droppableId: string;
	todos: Task[];
	droppableName: string;
	check: (todo: Task) => void;
	update: () => void;
}) => {
	return (
		<Droppable droppableId={droppableId}>
			{provided => (
				<div
					className="relative left-0 top-0 flex h-full w-full py-3 "
					{...provided.droppableProps}
					ref={provided.innerRef}
				>
					<div
						className={`scrollbar flex h-max max-h-full w-full items-start justify-start gap-2 overflow-y-auto overflow-x-hidden px-4 py-1
					${droppableName === 'Assign' ? 'flex-row flex-wrap' : 'flex-col'}`}
					>
						{todos.map((todo, todoIndex) => (
							<DraggableTodo
								key={todoIndex}
								id={todo.id}
								index={todoIndex}
								todo={todo}
								colums={droppableName === 'Assign'}
								check={check}
								update={update}
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
