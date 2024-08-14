"use client"

import UploadBox from "@/components/editor/upload-video/upload-box";
const uploadVideos = () => {
    const onSubmit = async (e) => {
        // e.preventDefault();
        console.log("Upload");
        await Upload();
        console.log("Done");
    }
    return (
        <div>
            <UploadBox />
        </div>
    )
}

export default uploadVideos;