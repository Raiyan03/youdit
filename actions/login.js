"use server"
import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { AuthError } from "next-auth";

export const Login = async (data) => {
    const {email, password} = data;

    const existingUser = await getUserByEmail(email);
    if (!existingUser || !existingUser.password) {
        return {error: "User does not exist"};
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
                    return {error: "Invalid credentials"};
                default:
                    return {error: "Invalid credentials"};
            }   
        }
        throw error;
    }
}