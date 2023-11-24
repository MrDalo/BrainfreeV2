import { PrismaClient, Task } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (
    req: NextRequest,
    { params: { id } }: { params: { id: string } }
) => {
    try {
        const task: Task | null = await prisma.task.findUnique({
            where: {
                id: id,
            },
        });

        if (!task) return NextResponse.json(
            { error: 'Task not found.' },
            { status: 404 }
        );
    
        return NextResponse.json(
            task,
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: 'Error occured while fetching task.' },
            { status: 500 }
        );
    }
}

export const PUT = async (
    req: NextRequest,
    { params: {id} } : { params: { id: string } },
) => {
    const bodyJson = await req.json();

    try {
        const task: Task = await prisma.task.update({
            where: {
                id: id,
            },
            data: {
                ...bodyJson,
            },
        });
    
        return NextResponse.json(
            task,
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: 'Error occured while updating task.' },
            { status: 500 }
        );
    }
}

export const DELETE = async (
    req: NextRequest,
    { params: { id } }: { params: { id: string } }
) => {
    try {
        await prisma.task.delete({
            where: {
                id: id,
            },
        });
    
        return NextResponse.json({ success: true });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: 'Error occured while deleting task.' },
            { status: 500 }
        );
    }
}