"use client"
import Image from "next/image";
import { intoMb } from "@/lib/client-util";
const FilePreview = (props) => {
    const { file } = props;
    console.log(file);
    return (
        <div className="flex w-full p-5 items-center gap-5 border rounded-lg">
            <div className="">
                <Image src="/video-file.png"alt="Preview" width={70} height={60} className="rounded-lg" />
            </div>
            <div className="flex-col gap-1">
                <div className=" flex gap-2">
                    <p>File name: </p>
                    <p>{file?.name}</p>
                </div>
                <div className=" flex gap-2">
                    <p>File size: </p>
                    <p>{intoMb(file?.size)} mb</p>
                </div>
                <div className=" flex gap-2">
                    <p>File type: </p>
                    <p>{file?.type}</p>
                </div>
            </div>
        </div>
    )
};

export default FilePreview;