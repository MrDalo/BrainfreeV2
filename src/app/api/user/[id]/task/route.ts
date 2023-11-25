import { PrismaClient, Task } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();  

export const GET = async (
    req: NextRequest,
    { params: { id } }: { params: { id: string } }
) => {
    try {
        const tasks: Task[] = await prisma.task.findMany({
            where: {
                userId: id,
            }
        });
        return NextResponse.json(tasks);
    } catch (err) {
        return NextResponse.json({ error: 'Error occured while fetching tasks.' }, { status: 500 })
    }
};
