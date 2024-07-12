import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
export async function POST(req){
    const body = await req.json();
    const {name, email, password} = body;
    console.log(name, email, password);
    return NextResponse.json({message: "Email sent"}, {status: 200});
}