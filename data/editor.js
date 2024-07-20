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
        console.log("Youtuber already added");
        return;
    }
    editor.youtubers.push(youtuberId);
    try{
        await updateEditor(editor);
    } catch(e){
        console.log(e);
    }
    console.log("youtuber id", youtuberId);
    console.log("youtubers editor alrady has", youtubers);
}