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
            },
            cacheStrategy: { ttl: 60 },
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
        return { error: "Already assigned"};
    } else{
        youtuber?.editors.push(editorId);
    }
    try{
        await updateYoutuber( youtuber);
    } catch(e){
        return { error: "Couldn't add error" };
    }
}

export const getAssignedYoutubers = async (id) => {
    const youtubers = await db.user.findMany({
        where: {
            role: "YOUTUBER",
            editors: {
                has: id
            }
        },
        cacheStrategy: { ttl: 60 },
    })
    return youtubers;
}