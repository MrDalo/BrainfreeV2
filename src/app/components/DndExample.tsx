'use client';

import { cardsData } from '../bin/CardsData';
import { useEffect, useState } from 'react';
import { Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { DndContext } from '../context/DndContext';
interface Cards {
	id: string;
	title: string;
	components: {
		id: string;
		name: string;
	}[];
}
const DndExample = () => {
	const [data, setData] = useState<Cards[] | []>([]);
	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result;
		if (!destination) return;
		if (source.droppableId !== destination.droppableId) {
			const newData = [...JSON.parse(JSON.stringify(data))]; //shallow copy concept
			const oldDroppableIndex = newData.findIndex(
				x => x.id == source.droppableId.split('droppable')[1]
			);
			const newDroppableIndex = newData.findIndex(
				x => x.id == destination.droppableId.split('droppable')[1]
			);
			const [item] = newData[oldDroppableIndex].components.splice(
				source.index,
				1
			);
			newData[newDroppableIndex].components.splice(destination.index, 0, item);
			setData([...newData]);
		} else {
			const newData = [...JSON.parse(JSON.stringify(data))]; //shallow copy concept
			const droppableIndex = newData.findIndex(
				x => x.id == source.droppableId.split('droppable')[1]
			);
			const [item] = newData[droppableIndex].components.splice(source.index, 1);
			newData[droppableIndex].components.splice(destination.index, 0, item);
			setData([...newData]);
		}
	};
	useEffect(() => {
		setData(cardsData as Cards[] | []);
	}, []);
	if (!data.length) {
		return (
			<div className="flex h-screen items-center justify-center">
				nothing to show
			</div>
		);
	}
	return (
		<DndContext onDragEnd={onDragEnd}>
			<h1 className="mb-3 mt-8 text-center text-[25px] font-bold ">
				Drag and Drop Application
			</h1>
			<div className="mx-4 my-20 flex flex-col justify-between gap-4 lg:flex-row">
				{data.map((val, index) => {
					return (
						<Droppable key={index} droppableId={`droppable${index}`}>
							{provided => (
								<div
									className="w-full border border-dashed border-gray-400  bg-white p-5 lg:w-1/3"
									{...provided.droppableProps}
									ref={provided.innerRef}
								>
									<h2 className="mb-6 text-center font-bold text-black">
										{val.title}
									</h2>
									{val.components?.map((component, index) => (
										<Draggable
											key={component.id}
											draggableId={component.id}
											index={index}
										>
											{provided => (
												<div
													className="mx-1 my-3 bg-gray-200 px-4 py-3"
													{...provided.dragHandleProps}
													{...provided.draggableProps}
													ref={provided.innerRef}
												>
													{component.name}
												</div>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					);
				})}
			</div>
		</DndContext>
	);
};

export default DndExample;
