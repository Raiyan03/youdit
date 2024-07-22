"use server";
import { db } from "@/lib/db";

export const updateEditor = async (editor) => {
    const { id, name, email, password, role, createdAt, updatedAt, youtubers } = editor;

    try{
        await db.user.update({
            where: {
                id: id
            },
            data: {
                email: email,
                name: name,
                password: password,
                role: role,
                youtubers: youtubers,
            }
        });
        return { success: "Editor updated successfully" };
    } catch(e){
        return { error: "Couldn't add error" };
    }
}

export const addYoutuberToEditor = async (editor, youtuber) => {
    const youtuberId = youtuber?.id;
    const { youtubers } = editor;

    if (youtubers.includes(youtuberId)){
        return { error: "Already assigned"}
    }
    editor.youtubers.push(youtuberId);
    try{
        await updateEditor(editor);
    } catch(e){
        return { error: "Couldn't add error" };
    }
}

export const getAssignedEditors = async (id) => {
    const editors = await db.user.findMany({
        where: {
            role: "EDITOR",
            youtubers: {
                has: id
            }
        }
    })
    return editors;
}