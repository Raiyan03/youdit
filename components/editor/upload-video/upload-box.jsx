"use client"
import { useState } from "react";
import FilePreview from "@/components/editor/upload-video/file-preview";
import DropBox from "@/components/editor/upload-video/dropbox";
import { firebaseStorage } from "@/firebase/firebaseStorage";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import ProgressBar from "@/components/editor/progress-bar"
import { SaveVideo } from "@/server/calls";
import { useRouter } from "next/navigation";

const UploadBox = ({youtuber, userId}) =>{
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [uploading, setUploading] = useState(false);
    const router = useRouter();

    const resetProgress = () => {
        setProgress(p => p = 0);
      }

      const uploadFile = async () => {
        
        const metadata = {
          contentType: file?.type,
        };
      
        const storageRef = ref(firebaseStorage, `Videos/` + file?.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      
        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress( p => p = progress);
          }, 
          (error) => {
            // Handle any errors during upload
          }, 
          () => {
            // This function runs after the upload completes
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              SaveVideo({url: downloadURL, youtuberId: youtuber, editorId: userId})
              .then((response) => {
                console.log(response?.response);
                setTimeout(() => {
                  router.push(`/editor/preview/${response?.response}`);
                }, 2000);
              });
            }).catch((error) => {

            });
          }
        );
      };

    const onChangeFile = async (e) => {
        const AddedFile = e.target.files[0];
        if (AddedFile) {
            setFile(AddedFile);
        }
    }

    const handleConfirm = async () => {
        if (file) {
            setUploading(true);
            await uploadFile();
        }
    }

    return (
        <div className="flex flex-col gap-3 items-center justify-center w-full">
            <DropBox uploading={uploading} onChangeFile={onChangeFile}/>
            { file && <FilePreview file={file}/>}
            { (file && !uploading) && (<button onClick={handleConfirm} className="px-4 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-accent">Confirm</button>)}
            { uploading && <ProgressBar progress={progress}/>}
        </div> 
    )
}

export default UploadBox;