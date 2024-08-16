import { NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '@/data/user';
import { hashPassword } from '@/lib/util';
export async function POST(req){
    const body = await req.json();
    const {name, email, password} = body;
    const hashedPassword = await hashPassword(password);
    const user = await getUserByEmail(email);
    if (user) {
        return NextResponse.json({message: "User already exists"}, {status: 400});
    }
    try {
        await createUser(name, email, hashedPassword);
        return NextResponse.json({message: "You are registered successfully"}, {status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Some error occurred"}, {status: 500});
    }
}