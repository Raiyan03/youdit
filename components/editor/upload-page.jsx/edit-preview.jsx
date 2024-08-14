"use client";
import Dropbox from "@/components/editor/upload-video/dropbox";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import ThumbnailImage from "./thumbnail-image";
const EditPreview = () => {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const onChangeFile = (e) => {
        const AddedFile = e.target.files[0];
        if (AddedFile) {
            setFile(AddedFile);
            const url = URL.createObjectURL(AddedFile);
            setPreviewUrl(url);
        }
    };

    const handleDelete = () => {
        setFile(null);
        setPreviewUrl(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            console.log(file);
        }
    }
    return (
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-10 justify-center">
            <div className="h-64 w-64 flex flex-col gap-3 items-center mx-auto md:mx-0">
                <div className=" relative m-1 h-full w-full">
                    {previewUrl ? (
                        <ThumbnailImage previewUrl={previewUrl} handleDelete={handleDelete} />
                    ) : (
                        <Dropbox onChangeFile={onChangeFile} />
                    )}
                    <p className="text-center p-1 text-gray-500">Thumbnail</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex sm:mt-24 md:mt-0 flex-col w-full md:w-1/2 lg:w-1/2 px-4">
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full h-10 px-3 mb-2 text-sm border-2 rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800 dark:border-gray-600"
                />
                <input
                    type="text"
                    placeholder="Tags"
                    className="w-full h-10 px-3 mb-2 text-sm border-2 rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800 dark:border-gray-600"
                />
                <textarea
                    placeholder="Description"
                    className=" resize-none w-full h-32 p-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800 dark:border-gray-600"
                ></textarea>
                <button
                    type="submit"
                    className="px-4 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-accent"
                >
                    Confirm
                </button>
            </form>
        </div>
    );
    
};

export default EditPreview;