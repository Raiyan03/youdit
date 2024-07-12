import { db } from "@/lib/db";

export const getUserByEmail = async (email) => {
    try{
        const user =  await db.user.findUnique({
            where :{
                email: email
            }
        })
        return user;
    } catch(e){
        console.log(e);
        return null;
    }
}