'use client';

import { useState } from 'react';
import DnDContext from './DnDContext';
import DroppableTodoField from './DroppableTodoField';
import { Task, TaskPriority } from '@prisma/client';

const Dashboard = ({ tasks }: { tasks: Task[] }) => {
	const [todos, setTodos] = useState<Task[]>(tasks);

	const handleDragAndDrop = (results: any) => {
		const { destination, source } = results;

		if (!destination) return;

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;

		let pickedItem = todos.filter(x => x.priority === source.droppableId)[
			source.index
		];
		console.log(pickedItem);
		pickedItem.priority = destination.droppableId;
		console.log(pickedItem);
		setTodos([...todos]);

		// todo save to db
	};

	return (
		<div className="flex w-full items-center justify-center p-[2rem]">
			<DnDContext onDragEnd={handleDragAndDrop}>
				<div className="grid w-[50%] grid-cols-2 gap-1">
					<div className="h-[40vh] w-full rounded-tl-[1.5rem] border bg-red-400 p-2">
						<DroppableTodoField
							droppableId={TaskPriority.URGENT_IMPORTANT}
							droppableName="Do"
							todos={todos.filter(
								x => x.priority === TaskPriority.URGENT_IMPORTANT
							)}
						/>
					</div>
					<div className="h-[40vh] w-full rounded-tr-[1.5rem] border bg-blue-400 p-2">
						<DroppableTodoField
							droppableId={TaskPriority.NOT_URGENT_IMPORTANT}
							droppableName="Schedule"
							todos={todos.filter(
								x => x.priority === TaskPriority.NOT_URGENT_IMPORTANT
							)}
						/>
					</div>
					<div className="h-[40vh] w-full rounded-bl-[1.5rem] border bg-yellow-400 p-2">
						<DroppableTodoField
							droppableId={TaskPriority.URGENT_NOT_IMPORTANT}
							droppableName="Delegate"
							todos={todos.filter(
								x => x.priority === TaskPriority.URGENT_NOT_IMPORTANT
							)}
						/>
					</div>
					<div className="h-[40vh] w-full rounded-br-[1.5rem] border bg-green-400 p-2">
						<DroppableTodoField
							droppableId={TaskPriority.NOT_URGENT_NOT_IMPORTANT}
							droppableName="Eliminate"
							todos={todos.filter(
								x => x.priority === TaskPriority.NOT_URGENT_NOT_IMPORTANT
							)}
						/>
					</div>
				</div>
			</DnDContext>
		</div>
	);
};

export default Dashboard;
