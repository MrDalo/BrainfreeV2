import { db } from "@/server/db";
import { User } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

const prisma = db;

export const GET = async (req: NextRequest) => {
    try {
        const users: User[] = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (err) {
        return NextResponse.json({ error: 'Error occured while fetching users.' }, { status: 500 })
    }
};