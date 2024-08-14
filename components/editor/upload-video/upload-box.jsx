"use client"
import { useState } from "react";
import FilePreview from "@/components/editor/upload-video/file-preview";
import DropBox from "@/components/editor/upload-video/dropbox";
const UploadBox = () =>{
    const [file, setFile] = useState(null);

    const onChangeFile = async (e) => {
        const AddedFile = e.target.files[0];
        await localStorage.setItem("file", AddedFile);
        if (AddedFile) {
            setFile(AddedFile);
            console.log(AddedFile);
        }
    }

    const handleConfirm = async () => {
        if (file) {
            console.log("Upload");
            // await Upload(file);
            console.log("Done");
        }
    }
    return (
        <div className="flex flex-col gap-3 items-center justify-center w-full">
            <DropBox onChangeFile={onChangeFile}/>
            { file && <FilePreview file={file}/>}
            { file && (<button onClick={handleConfirm} className="px-4 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-accent">Confirm</button>)}
        </div> 
    )
}

export default UploadBox;