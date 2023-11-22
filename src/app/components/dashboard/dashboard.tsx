'use client';

import { useState } from 'react';
import DnDContext from './DnDContext';
import DroppableTodoField from './DroppableTodoField';

const todosall: Todo[] = [
	{
		id: '1',
		title: 'Todo 1',
		description: 'big big big',
		completed: false,
		taskPriority: '1'
	},
	{
		id: '2',
		title: 'Todo 2',
		description: 'big big big',
		completed: true,
		taskPriority: '1'
	},
	{
		id: '35',
		title: 'Todo 35',
		description: 'big big big',
		completed: false,
		taskPriority: '1'
	},
	{
		id: '4',
		title: 'Todo 4',
		description: 'big big big',
		completed: false,
		taskPriority: '2'
	},
	{
		id: '5',
		title: 'Todo 5',
		description: 'big big big',
		completed: true,
		taskPriority: '4'
	},
	{
		id: '42',
		title: 'Todo 42',
		description: 'big big big',
		completed: false,
		taskPriority: '4'
	}
];

const Dashboard = () => {
	//todo get from db
	const [todos, setTodos] = useState<Todo[]>(todosall);

	const handleDragAndDrop = (results: any) => {
		const { destination, source } = results;

		if (!destination) return;

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;

		let pickedItem = todos.filter(x => x.taskPriority === source.droppableId)[
			source.index
		];
		console.log(pickedItem);
		pickedItem.taskPriority = destination.droppableId;
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
							droppableId="1"
							droppableName="Do"
							todos={todos.filter(x => x.taskPriority === '1')}
						/>
					</div>
					<div className="h-[40vh] w-full rounded-tr-[1.5rem] border bg-blue-400 p-2">
						<DroppableTodoField
							droppableId="2"
							droppableName="Schedule"
							todos={todos.filter(x => x.taskPriority === '2')}
						/>
					</div>
					<div className="h-[40vh] w-full rounded-bl-[1.5rem] border bg-yellow-400 p-2">
						<DroppableTodoField
							droppableId="3"
							droppableName="Delegate"
							todos={todos.filter(x => x.taskPriority === '3')}
						/>
					</div>
					<div className="h-[40vh] w-full rounded-br-[1.5rem] border bg-green-400 p-2">
						<DroppableTodoField
							droppableId="4"
							droppableName="Eliminate"
							todos={todos.filter(x => x.taskPriority === '4')}
						/>
					</div>
				</div>
			</DnDContext>
		</div>
	);
};

export default Dashboard;
