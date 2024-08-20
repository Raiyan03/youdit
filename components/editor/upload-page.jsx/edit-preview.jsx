"use client";
import Dropbox from "@/components/editor/upload-video/dropbox";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { firebaseStorage } from "@/firebase/firebaseStorage";
import { useState } from "react";
import ThumbnailImage from "@/components/editor/upload-page.jsx/thumbnail-image";
import { SaveThumbnailInfo } from "@/server/calls";
import { toast } from "sonner";

const EditPreview = ({ id }) => {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [title, setTitle] = useState();
    const [tags, setTags] = useState([]);
    const [description, setDescription] = useState();
    const [ uploading, setUploading ] = useState(false);
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleTags  = (e) => {
        const tags = e.target.value.split(",").map(tag => tag.trim());
        setTags(tags);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

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
            const metadata = {
                contentType: file?.type,
            };
            const storageRef = ref(firebaseStorage, `Thumbnails/` + file?.name);
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        
            // Create a promise to wrap the Firebase upload
            const uploadPromise = new Promise((resolve, reject) => {
                uploadTask.on('state_changed', 
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log(progress); // Optionally log the progress
                    }, 
                    (error) => {
                        reject(error);
                    }, 
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            const info = { title: title, 
                                tags: tags, 
                                description: description, 
                                thumbnail: downloadURL };
                            SaveThumbnailInfo(id, info)
                            .then((response) => {
                                resolve(response);
                            })
                            .catch((error) => {
                                reject(error);
                            });
                        }).catch((error) => {
                            reject(error); // Reject if getting the download URL fails
                        });
                    }
                );
            });

            toast.promise(
                uploadPromise, 
                {
                    loading: 'Uploading Thumbnail...',
                    success: 'Thumbnail Uploaded!',
                    error: 'Error Uploading Thumbnail',
                    duration: 2000,
                },
                
            );
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
                    onChange={handleTitle}
                />
                <input
                    type="text"
                    placeholder="Tags"
                    className="w-full h-10 px-3 mb-2 text-sm border-2 rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800 dark:border-gray-600"
                    onChange={handleTags}
                />
                <textarea
                    placeholder="Description"
                    className=" resize-none w-full h-32 p-3 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800 dark:border-gray-600"
                    onChange={handleDescription}
                ></textarea>
                { uploading ?                 
                    <button
                    disabled
                    
                    className="px-4 py-2 mt-4 cursor-progress text-white bg-primary rounded-lg hover:bg-accent"
                    >
                        Upload
                    </button>
                :
                    <button
                    type="submit"
                    className="px-4 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-accent"
                    >
                        Upload
                    </button>
                }
            </form>
        </div>
    );
    
};

export default EditPreview;