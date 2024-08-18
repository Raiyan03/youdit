import { db } from "@/lib/db";

export const saveVideo = async ( editorId, youtuberId, url) => {
    try{
        await db.video.create({
            data: {
                editorId: editorId,
                youtuberId: youtuberId,
                url: url,
            },
            cacheStrategy: { ttl: 60 },
        });
    } catch(e){
        console.log(e);
        return { error: "Couldn't add error" };
    }
}