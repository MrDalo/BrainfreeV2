'use client';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const DnDContext = ({
	children,
	onDragEnd
}: {
	children: React.ReactNode;
	onDragEnd: (result: DropResult) => void;
}) => {
	return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
};

export default DnDContext;
