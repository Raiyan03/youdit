"use client"

import UploadBox from "@/components/editor/upload-video/upload-box";
import ChooseYoutuberDropdown from "@/components/editor/upload-video/choose-youtuber-dropdown";
const uploadVideos = () => {
    const onSubmit = async (e) => {
        // e.preventDefault();
        console.log("Upload");
        await Upload();
        console.log("Done");
    }
    return (
        <div className="flex flex-col gap-3">
            <ChooseYoutuberDropdown />
            <UploadBox />
        </div>
    )
}

export default uploadVideos;