'use client';

import priorityTexts from '@/app/priority-texts';
import { Button } from '@/components/ui/button';
import { Task } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';

const TodoView = ({
	todo,
	setEdit
}: {
	todo: Task;
	setEdit: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center font-normal">
			<h2 className="mb-[1.5rem] text-[2rem] font-light text-primary-green">
				{todo.title}
			</h2>
			<div className="mb-[1rem] flex w-full flex-col items-start justify-start px-2 text-[1rem]">
				<h3 className="text-primary-green">Description: </h3>
				<p className="text-while mb-[1rem] px-2 text-[1rem]">
					{todo.description}
				</p>
			</div>
			<div className="mb-[1rem] flex w-full flex-row items-start justify-start px-2 text-[1rem]">
				<h3 className="mr-4 text-primary-green">Priority: </h3>
				<p className="text-white">{priorityTexts[todo.priority]}</p>
			</div>
			<div className="mb-[2rem] flex w-full flex-col justify-between sm:flex-row">
				<div className="mb-[1rem] flex flex-row items-start justify-start px-2 text-[1rem]">
					<h3 className="mr-4 text-primary-green">Deadline: </h3>
					<p className="text-white">
						{new Date(todo.deadline).toLocaleString('en-GB')}
					</p>
				</div>
				<div className="mb-[1rem] flex flex-row items-start justify-start px-2 text-[1rem] sm:justify-end">
					<h3 className="mr-4 text-primary-green">Completed: </h3>
					<p className="text-white">{todo.completed ? '✅' : '❌'}</p>
				</div>
			</div>
			{/* TODO: style - ako pri edit userovi -> zeleny button */}
			<Button
				variant="secondary"
				onClick={() => setEdit(true)}
				className=" bg-primary-green text-primary-black"
			>
				Edit
			</Button>
		</div>
	);
};

export default TodoView;
