'use client';

import { Task, TaskPriority } from '@prisma/client';

const Pannels = ({
	todos,
	todosUncompleted
}: {
	todos: Task[];
	todosUncompleted: Task[];
}) => {
	return (
		<div className="flex h-fit w-full flex-col items-center justify-between gap-2 sm:flex-row sm:gap-0">
			<div className="flex h-full w-fit min-w-[80%] flex-col items-center justify-center rounded-[1rem] bg-primary-green px-1 py-2 text-primary-black sm:w-[30%] sm:min-w-0">
				<h3 className="text-center text-[1.5rem] font-light">
					Tasks to prioritize
				</h3>
				<p className="my-[-0.5rem] text-[2.5rem]">
					{
						todosUncompleted.filter(
							x => x.priority === TaskPriority.NOT_ASSIGNED
						).length
					}
				</p>
			</div>
			<div className="flex h-full w-fit min-w-[80%] flex-col items-center justify-center rounded-[1rem] bg-primary-black px-1 py-2 text-primary-green sm:w-[30%] sm:min-w-0">
				<h3 className="text-center text-[1.5rem] font-light">
					Tasks to complete
				</h3>
				<p className="my-[-0.5rem] text-[2.5rem]">{todosUncompleted.length}</p>
			</div>
			<div className="flex h-full w-fit min-w-[80%] flex-col items-center justify-center rounded-[1rem] bg-primary-green px-1 py-2 text-primary-black sm:w-[30%] sm:min-w-0">
				<h3 className="text-center text-[1.5rem] font-light">
					Tasks completed
				</h3>
				<p className="my-[-0.5rem] text-[2.5rem]">
					{todos.filter(x => x.completed === true).length}
				</p>
			</div>
		</div>
	);
};

export default Pannels;
