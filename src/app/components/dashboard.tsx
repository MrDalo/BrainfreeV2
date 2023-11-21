'use client';

import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const todos: Todo[] = [
	{
		id: 1,
		title: 'Todo 1',
		description: 'big big big',
		completed: false
	},
	{
		id: 2,
		title: 'Todo 2',
		description: 'big big big',
		completed: true
	},
	{
		id: 35,
		title: 'Todo 35',
		description: 'big big big',
		completed: false
	}
];

const Dashboard = () => {
	const [dos, setDo] = useState<Todo[]>(todos);

	const handleDragAndDrop = (results: any) => {
		const { destination, source } = results;

		if (!destination) return;

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;

		const newDo = [...(dos as Todo[])];
		const [reorderedItem] = newDo.splice(source.index, 1);
		newDo.splice(destination.index, 0, reorderedItem);
		setDo(newDo);
	};

	return (
		<div className="flex w-full items-center justify-center">
			<DragDropContext onDragEnd={handleDragAndDrop}>
				<h1 className=" text-[3rem]">Dashboard</h1>
				<Droppable droppableId="todos">
					{provided => (
						<div
							className=" flex flex-col items-center justify-center"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{dos?.map((todo, index) => (
								<Draggable
									key={todo.id}
									draggableId={todo.id.toString()}
									index={index}
								>
									{provided => (
										<div
											className=" m-2 rounded-md bg-white p-2 shadow-md"
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>
											{todo.title}
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default Dashboard;
