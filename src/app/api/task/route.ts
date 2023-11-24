import { PrismaClient, Task } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (
    req: NextRequest
) => {
    const bodyJson = await req.json();
    console.log(bodyJson);

    try {
        const task: Task = await prisma.task.create({
            data: {
                ...bodyJson,
            },
        });

        return NextResponse.json(task, { status: 201 })
    } catch (err) {
        return NextResponse.json({ error: 'Error occured while adding a new task.' }, { status: 500 })
    }
}

export const GET = async (req: NextRequest) => {
    try {
        const tasks: Task[] = await prisma.task.findMany();
        return NextResponse.json(tasks);
    } catch (err) {
        return NextResponse.json({ error: 'Error occured while fetching tasks.' }, { status: 500 })
    }
};
