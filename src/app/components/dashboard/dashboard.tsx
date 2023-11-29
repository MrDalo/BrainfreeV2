'use client';

import { useState } from 'react';
import DnDContext from './DnDContext';
import DroppableTodoField from './DroppableTodoField';
import { Task, TaskPriority } from '@prisma/client';
import { resetServerContext } from 'react-beautiful-dnd';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import Pannels from './pannels';
import TodoCreateForm from './todoCreateForm';
import { useSession } from 'next-auth/react';

const Dashboard = ({ tasks }: { tasks: Task[] }) => {
	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [todos, setTodos] = useState<Task[]>(tasks);
	const { data: session } = useSession();

	const [todosUncompleted, setTodosUncompleted] = useState<Task[]>(
		tasks.filter(x => x.completed === false)
	);

	// Bug fix for react-beautiful-dnd
	resetServerContext();

	const mutation = useMutation({
		mutationFn: (newTodo: {
			priority: TaskPriority;
			id: string;
			completed: boolean;
		}) =>
			fetch(`/api/task/${newTodo.id}`, {
				method: 'PUT',
				body: JSON.stringify(newTodo)
			}),
		onError: error => {
			console.log(error); //todo error handling
		}
	});

	const updateData = async () => {
		setIsFetching(true);
		const userId = session?.user.id;
		const data = await fetch(`/api/user/${userId}/task`, {
			method: 'GET'
		});
		const res = await data.json();
		const loadedTodos: Task[] = await res;

		setTodos(await loadedTodos);
		setTodosUncompleted(await loadedTodos.filter(x => x.completed === false));
		setIsFetching(false);
	};

	const todoComplete = (todo: Task) => {
		todo.completed = true;
		setTodos([...todos]);
		setTodosUncompleted([...todos.filter(x => x.completed === false)]);
		mutation.mutate(todo);
	};

	const handleDragAndDrop = (results: any) => {
		const { destination, source } = results;

		if (!destination) return;

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;

		let pickedItem = todosUncompleted.filter(
			x => x.priority === source.droppableId
		)[source.index];

		pickedItem.priority = destination.droppableId;

		setTodos([...todos]);
		mutation.mutate(pickedItem);
	};

	const [create, setCreate] = useState<boolean>(false);

	return (
		<div className="w-[95%] max-w-[900px]">
			{create && <TodoCreateForm setOpen={setCreate} update={updateData} />}
			<Link
				href="/dashboard/guide"
				className="duration-[400ms] fixed right-[1.5rem] top-[1.5rem] z-10 h-[3rem] w-[3rem] cursor-pointer rounded-[50%] border border-primary-green bg-primary-black pt-[0.1rem] text-center text-[1.9rem] text-primary-green transition hover:bg-primary-green hover:text-primary-black"
			>
				?
			</Link>
			<button
				className="duration-[400ms] fixed bottom-[1.5rem] right-[1.5rem] z-10 h-[3rem] w-[3rem] cursor-pointer rounded-[50%] border border-primary-green bg-primary-black text-[2rem] leading-[2rem] text-primary-green transition hover:bg-primary-green hover:text-primary-black"
				onClick={() => setCreate(true)}
			>
				+
			</button>
			<div className="flex w-full flex-col items-center justify-center gap-[4rem] p-[2rem]">
				{isFetching ? (
					<p className="text-[3rem] text-primary-green">Updating...</p>
				) : (
					<>
						<Pannels todos={todos} todosUncompleted={todosUncompleted} />
						<DnDContext onDragEnd={handleDragAndDrop}>
							<div className="grid w-[95%] grid-cols-2 gap-[1px] rounded-[2rem] bg-primary-green font-light text-white">
								<div className="relative h-[30vh] w-full rounded-tl-[1.5rem] bg-primary-black p-2">
									<h2 className="tratext-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[2.5rem] font-light leading-[2.5rem] text-white">
										Do
									</h2>
									<p className="absolute left-[50%] top-[-2.5rem] translate-x-[-50%] text-[1.5rem] font-light text-primary-green">
										Urgent
									</p>
									<p className="absolute left-[-1.5rem] top-[50%] translate-x-[-50%] translate-y-[-50%] -rotate-90 text-[1.5rem] font-light text-primary-green">
										Important
									</p>
									<DroppableTodoField
										droppableId={TaskPriority.URGENT_IMPORTANT}
										droppableName="Do"
										todos={todosUncompleted.filter(
											x => x.priority === TaskPriority.URGENT_IMPORTANT
										)}
										check={todoComplete}
										update={updateData}
									/>
								</div>
								<div className="relative h-[30vh] w-full rounded-tr-[1.5rem] bg-primary-black p-2">
									<h2 className="tratext-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[2.5rem] font-light leading-[2.5rem] text-white">
										Schedule
									</h2>
									<p className="absolute left-[50%] top-[-2.5rem] translate-x-[-50%] text-[1.5rem] font-light text-primary-green">
										Non urgent
									</p>
									<DroppableTodoField
										droppableId={TaskPriority.NOT_URGENT_IMPORTANT}
										droppableName="Schedule"
										todos={todosUncompleted.filter(
											x => x.priority === TaskPriority.NOT_URGENT_IMPORTANT
										)}
										check={todoComplete}
										update={updateData}
									/>
								</div>
								<div className="relative h-[30vh] w-full rounded-bl-[1.5rem] bg-primary-black p-2">
									<h2 className="tratext-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[2.5rem] font-light leading-[2.5rem] text-white">
										Delegate
									</h2>
									<p className="absolute left-[-1.5rem] top-[50%] translate-x-[-50%] translate-y-[-50%] -rotate-90 text-[1.5rem] font-light text-primary-green">
										Non important
									</p>
									<DroppableTodoField
										droppableId={TaskPriority.URGENT_NOT_IMPORTANT}
										droppableName="Delegate"
										todos={todosUncompleted.filter(
											x => x.priority === TaskPriority.URGENT_NOT_IMPORTANT
										)}
										check={todoComplete}
										update={updateData}
									/>
								</div>
								<div className="relative h-[30vh] w-full rounded-br-[1.5rem] bg-primary-black p-2">
									<h2 className="tratext-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[2.5rem] font-light leading-[2.5rem] text-white">
										Delete
									</h2>
									<DroppableTodoField
										droppableId={TaskPriority.NOT_URGENT_NOT_IMPORTANT}
										droppableName="Eliminate"
										todos={todosUncompleted.filter(
											x => x.priority === TaskPriority.NOT_URGENT_NOT_IMPORTANT
										)}
										check={todoComplete}
										update={updateData}
									/>
								</div>
							</div>
							<div className="relative h-[30vh] w-[95%] rounded-[1.5rem] bg-primary-black p-2">
								<h2 className="tratext-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[2.5rem] font-light leading-[2.5rem] text-white">
									Assign
								</h2>
								<p className="absolute left-[50%] top-[-2.5rem] translate-x-[-50%] text-[1.5rem] font-light text-primary-green">
									Unassigned
								</p>
								<DroppableTodoField
									droppableId={TaskPriority.NOT_ASSIGNED}
									droppableName="Assign"
									todos={todosUncompleted.filter(
										x => x.priority === TaskPriority.NOT_ASSIGNED
									)}
									check={todoComplete}
									update={updateData}
								/>
							</div>
						</DnDContext>
					</>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
