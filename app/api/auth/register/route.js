import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req){
    const body = await req.json();
    const name = "test";
    const email = "test@test.com";
    // const password = "testsadfasdfasdf1212";
    try{
        await db.user.create({data: {name, email}})
    } catch (e){
        console.log(e);
        return NextResponse.json({message: "Error registering user"}, {status: 500});
    }

    return NextResponse.json({message: "Email sent"}, {status: 200})
}