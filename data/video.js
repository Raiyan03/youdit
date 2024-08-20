import { db } from "@/lib/db";

export const saveVideo = async ( editorId, youtuberId, url) => {
    try{
        const response = await db.video.create({
            data: {
                editorId: editorId,
                youtuberId: youtuberId,
                url: url,
                verified: false,
            },
            cacheStrategy: { ttl: 60 },
        });
        return response?.id;
    } catch(e){
        console.log(e);
        return { error: "Couldn't add error" };
    }
}

export const saveInfo = async (id, info) => {
    const { title, description, tags, thumbnail } = info;

    try {
        const response = await db.video.update({
            where: {
                id: id,
            },
            data: {
                title: title,
                description: description,
                tags: tags,
                thumbnail: thumbnail,
            },
            cacheStrategy: { ttl: 60 },
        })
        return response;
    } catch(e){
        console.log(e);
        return { error: "Couldn't add error" };
    }
}

export const createRequest = async (videoId) => {
    try {
        const response = await db.videoVerification.create({
            data: {
                videoId: videoId,
                verified: false,
            },
            cacheStrategy: { ttl: 60 },
        })
    } catch(e){
        console.log(e);
        return { error: "Couldn't add error" };
    }
}

export const resolveRequest = async (videoId) => {
    try {
        const response = await db.video.update({
            where: {
                id: videoId,
            },
            data: {
                verified: new Date(),
            },
            cacheStrategy: { ttl: 60 },
        })

        await db.videoVerification.delete({
            where: {
                videoId: videoId,
            },
            cacheStrategy: { ttl: 60 },
        })

        return response;

    } catch(e){
        console.log(e);
        return { error: "Couldn't add error" };
    }
}
