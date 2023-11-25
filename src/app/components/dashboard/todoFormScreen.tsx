'use client';

import { Task } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';
import TodoView from './todoView';
import TodoForm from './todoForm';

const TodoFormScreen = ({
	todo,
	open
}: {
	todo: Task;
	open: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-primary-black bg-opacity-75">
			<div className="relative flex w-[90%] max-w-[700px] flex-col items-center justify-center rounded-[1rem] border border-primary-green bg-primary-black p-[1.5rem] text-white">
				<button
					className="absolute right-0 top-0 z-20 cursor-pointer px-4 py-3 text-[1.5rem] font-bold leading-[1.5rem] text-primary-green transition duration-300 hover:text-red-400"
					onClick={() => open(false)}
				>
					X
				</button>
				<TodoForm todo={todo} />
			</div>
		</div>
	);
};

export default TodoFormScreen;
