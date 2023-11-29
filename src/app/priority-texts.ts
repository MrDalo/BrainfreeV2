import { TaskPriority } from "@prisma/client";

const priorityTexts = {
	[TaskPriority.URGENT_IMPORTANT]: 'Do',
	[TaskPriority.URGENT_NOT_IMPORTANT]: 'Delegate',
	[TaskPriority.NOT_URGENT_IMPORTANT]: 'Schedule',
	[TaskPriority.NOT_URGENT_NOT_IMPORTANT]: 'Delete',
	[TaskPriority.NOT_ASSIGNED]: 'Unassigned'
};

export default priorityTexts;
