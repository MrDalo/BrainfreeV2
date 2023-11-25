import { TaskPriority } from "@prisma/client";

const priorityTexts = {
	[TaskPriority.URGENT_IMPORTANT]: 'Urgent important',
	[TaskPriority.URGENT_NOT_IMPORTANT]: 'Urgent non important',
	[TaskPriority.NOT_URGENT_IMPORTANT]: 'Non urgent important',
	[TaskPriority.NOT_URGENT_NOT_IMPORTANT]: 'Non urgent non important',
	[TaskPriority.NOT_ASSIGNED]: 'Unassigned'
};

export default priorityTexts;
