import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { NextResponse } from "next/server";
import { AuthError } from "next-auth";

export async function POST(req){
    const body = await req.json();
    const {email, password} = body;

    const existingUser = await getUserByEmail(email);
    if (!existingUser || !existingUser.password) {
        return NextResponse.json({message: "User does not exist"}, {status: 400});
    }
    try{
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/editor"
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type){
                case "credentials-invalid":
                    return NextResponse.json({message: "Invalid credentials"}, {status: 400});
                default:
                    return NextResponse.json({message: "Some error occurred"}, {status: 500});
            }   
        }
        throw error;
    }
}