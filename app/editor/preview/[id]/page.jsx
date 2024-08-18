"use client"
import EditPreview from "@/components/editor/upload-page.jsx/edit-preview";
import { useParams } from "next/navigation";

const Preview = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <EditPreview id={id}/>
    );
};

export default Preview;