import { PrismaClient, User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (
    req: NextRequest,
    { params: { id } }: { params: { id: string } }
) => {
    try {
        const user: User | null = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });

        if (!user) return NextResponse.json(
            { error: 'User not found.' },
            { status: 404 }
        );
    
        return NextResponse.json(
            user,
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: 'Error occured while fetching user.' },
            { status: 500 }
        );
    }
}

export const PUT = async (
    req: NextRequest,
    { params: { id } }: { params: { id: string } }
) => {
    const bodyJson = await req.json();

    try {
        const user: User = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                ...bodyJson,
            },
        });

        return NextResponse.json(
            user,
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: 'Error occured while updating user.' },
            { status: 500 }
        );
    }
}

export const DELETE = async (
    req: NextRequest,
    { params: { id } }: { params: { id: string } }
) => {
    try {
        await prisma.user.delete({
            where: {
                id: id,
            },
        });
    
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json(
            { error: 'Error occured while deleting user.' },
            { status: 500 }
        );
    }
}