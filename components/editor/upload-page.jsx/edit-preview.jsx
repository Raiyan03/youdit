"use client"
import Dropbox from "@/components/editor/upload-video/dropbox";
import { useState } from "react";
const EditPreview = () => {
    const [file, setFile] = useState(null);

    const onChangeFile = async (e) => {
        const AddedFile = e.target.files[0];
        if (AddedFile) {
            setFile(AddedFile);
        }
    }
    return (
        <div className="flex gap-5 space-x-4 justify-center">
            <div className="">
                <Dropbox onChangeFile={onChangeFile}/>
                <p className=" text-center p-2 text-gray-500"> Thumbnail</p>
            </div>
            <form onSubmit="" className="flex-col flex w-1/2">
                <input type="text" placeholder="Title" className="w-full h-10 px-3 mb-2 text-sm border-2 rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800 dark:border-gray-600"/>
                <input type="text" placeholder="Tags" className="w-full h-10 px-3 mb-2 text-sm border-2 rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800 dark:border-gray-600"/>
                <textarea placeholder="Description" className="w-full h-32 p-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800 dark:border-gray-600"></textarea>
                <button type="submit" className="px-4 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-accent">Confirm</button>
            </form>
        </div>
    )
}

export default EditPreview;