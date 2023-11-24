'use client';

import { useState } from 'react';
import DnDContext from './DnDContext';
import DroppableTodoField from './DroppableTodoField';
import { Task, TaskPriority } from '@prisma/client';
import { resetServerContext } from 'react-beautiful-dnd';

const Dashboard = ({ tasks }: { tasks: Task[] }) => {
	const [todos, setTodos] = useState<Task[]>(tasks);

	resetServerContext();

	console.log(todos);

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
		<div className="w-[95%] max-w-[900px]">
			<div className="flex w-full flex-col items-center justify-center gap-[4rem] p-[2rem]">
				<div className="flex h-fit w-full items-center justify-between">
					<div className="flex h-full w-[30%] flex-col items-center justify-center rounded-[1rem] bg-primary-green px-1 py-2">
						<h3 className="text-[1.5rem] font-light">Tasks to prioritize</h3>
						<p className="my-[-0.5rem] text-[2.5rem]">
							{
								todos.filter(x => x.priority === TaskPriority.NOT_ASSIGNED)
									.length
							}
						</p>
					</div>
					<div className="flex h-full w-[30%] flex-col items-center justify-center rounded-[1rem] bg-primary-black px-1 py-2 text-primary-green">
						<h3 className="text-[1.5rem] font-light">Tasks to complete</h3>
						<p className="my-[-0.5rem] text-[2.5rem]">
							{todos.filter(x => x.completed === false).length}
						</p>
					</div>
					<div className="flex h-full w-[30%] flex-col items-center justify-center rounded-[1rem] bg-primary-green px-1 py-2">
						<h3 className="text-[1.5rem] font-light">Tasks completed</h3>
						<p className="my-[-0.5rem] text-[2.5rem]">
							{todos.filter(x => x.completed === true).length}
						</p>
					</div>
				</div>
				<DnDContext onDragEnd={handleDragAndDrop}>
					<div className="grid w-[95%] grid-cols-2 gap-[1px] rounded-[1.5rem] bg-primary-green font-light text-white">
						<div className="h-[30vh] w-full rounded-tl-[1.5rem] bg-primary-black p-2">
							<DroppableTodoField
								droppableId={TaskPriority.URGENT_IMPORTANT}
								droppableName="Do"
								todos={todos.filter(
									x => x.priority === TaskPriority.URGENT_IMPORTANT
								)}
							/>
						</div>
						<div className="h-[30vh] w-full rounded-tr-[1.5rem] bg-primary-black p-2">
							<DroppableTodoField
								droppableId={TaskPriority.NOT_URGENT_IMPORTANT}
								droppableName="Schedule"
								todos={todos.filter(
									x => x.priority === TaskPriority.NOT_URGENT_IMPORTANT
								)}
							/>
						</div>
						<div className="h-[30vh] w-full rounded-bl-[1.5rem] bg-primary-black p-2">
							<DroppableTodoField
								droppableId={TaskPriority.URGENT_NOT_IMPORTANT}
								droppableName="Delegate"
								todos={todos.filter(
									x => x.priority === TaskPriority.URGENT_NOT_IMPORTANT
								)}
							/>
						</div>
						<div className="h-[30vh] w-full rounded-br-[1.5rem] bg-primary-black p-2">
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
		</div>
	);
};

export default Dashboard;
