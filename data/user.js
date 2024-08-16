import { db } from "@/lib/db";

export const getUserByEmail = async (email) => {
    try{
        const user =  await db.user.findUnique({
            where :{
                email: email,
            },
            cacheStrategy: { ttl: 60 },
        })
        return user;
    } catch(e){
        return null;
    }
}

export const getEditor = async (email) => {
    try{
        const user =  await db.user.findUnique({
            where :{
                email: email,
                role: "EDITOR"
            },
            cacheStrategy: { ttl: 60 },
        })
        return user;
    } catch(e){
        return null;
    }
}

export const getUserById = async (id) => {
    try{
        const user = await db.user.findUnique({
            where: {
                id: id
            },
            cacheStrategy: { ttl: 60 },
        });
        return user;
    } catch(e) {
        return null;
    }
}

export const createUser = async (name, email, password) => {
    try{
        await db.user.create({
            data: {
                name: name,
                email: email,
                password: password,
                role: "EDITOR"
            },
            cacheStrategy: { ttl: 60 },
        })
    } catch(e){
        throw new Error(e);
    }
}