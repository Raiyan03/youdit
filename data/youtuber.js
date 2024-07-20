const { db } = require("@/lib/db")

export const updateYoutuber = async (youtuber) => {
    const { id, name, email, password, role, createdAt, updatedAt, editors } = youtuber;
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
                editors: editors,
            }
        });
        return { success: "Youtuber updated successfully" };
    } catch(e){
        return { error: "Couldn't add error" };
    }
}

export const addEditorToYoutuber = async (youtuber, editor) => {
    const editorId = editor?.id;
    const { editors } = youtuber;
    if (editors.includes(editorId)){
        console.log("Editor already added");
        return;
    } else{
        youtuber?.editors.push(editorId);
    }
    try{
        await updateYoutuber( youtuber);
    } catch(e){
        console.log(e);
    }
    console.log("editor id", editorId);
    console.log("editors youtuber alrady has", editors);
}