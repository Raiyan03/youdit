"use client"
import { useState } from "react";
import FilePreview from "@/components/editor/upload-video/file-preview";
import DropBox from "@/components/editor/upload-video/dropbox";
import { firebaseStorage } from "@/firebase/firebaseStorage";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"


const UploadBox = () =>{
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [uploadCompleted, setUploadCompleted] = useState();
    const resetProgress = () => {
        setProgress(p => p = 0);
      }

      const uploadFile = async () => {
        const metadata = {
          contentType: file?.type,
        };
      
        const storageRef = ref(firebaseStorage, 'Videos/' + file?.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      
        uploadTask.on('state_changed', 
          (snapshot) => {
            // Track upload progress
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress( p => p = progress);
            console.log('Upload is ' + progress + '% done');
          }, 
          (error) => {
            // Handle any errors during upload
            console.error('Upload failed:', error);
          }, 
          () => {
            // This function runs after the upload completes
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
            }).catch((error) => {
              console.error('Error getting download URL:', error);
            });
          }
        );
      };

    const onChangeFile = async (e) => {
        const AddedFile = e.target.files[0];
        if (AddedFile) {
            setFile(AddedFile);
            console.log(AddedFile);
        }
    }

    const handleConfirm = async () => {
        if (file) {
            console.log("Upload");
            // await Upload(file);
            await uploadFile();
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