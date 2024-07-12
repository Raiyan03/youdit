import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
export async function POST(req){
    const body = await req.json();
    const {name, email, password} = body;
    console.log(name, email, password);
    if (getUserByEmail(email)) {
        console.log("User already exists");
        return NextResponse.json({message: "User already exists"}, {status: 400});
    }
    try{
        await db.user.create({data: {name, email}})
    } catch (e){
        console.log(e);
        return NextResponse.json({message: "Error registering user"}, {status: 500});
    }

    return NextResponse.json({message: "Email sent"}, {status: 200})
}