'use client';

import { Task } from '@prisma/client';

const TodoView = ({ todo }: { todo: Task }) => {
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
			<div className="mb-[2rem] flex w-full flex-row justify-between">
				<div className="mb-[1rem] flex flex-row items-start justify-start px-2 text-[1rem]">
					<h3 className="mr-4 text-primary-green">Deadline: </h3>
					<p className="text-white"> {todo.deadline.toLocaleString()}</p>
				</div>
				<div className="mb-[1rem] flex flex-row items-start justify-end px-2 text-[1rem]">
					<h3 className="mr-4 text-primary-green">Completed: </h3>
					<p className="text-white"> {todo.completed ? '✅' : '❌'}</p>
				</div>
			</div>

			<button className="rounded-[1rem] border border-primary-green px-8 py-1 text-[1.2rem] text-primary-green transition duration-[400ms] hover:bg-primary-green hover:text-primary-black">
				Edit
			</button>
		</div>
	);
};

export default TodoView;