"use client"
import { useState } from "react";
// import EditorForm from "./form";
// import YoutuberForm from "./youtuber-form";
const AuthForm = ({YoutuberForm, EditorForm}) => {
    const [isYoutuber, setYoutuber] = useState(false);
    return (
        <div className="flex flex-col overflow-hidden absolute top-10 mx-auto shadow-lg rounded-lg max-w-md bg-white">
            <div className="flex">
                <button onClick={() => setYoutuber(false)} className={`w-1/2 py-2 ${!isYoutuber ? "bg-red-600 text-white" : "text-red-600"} rounded-tl-lg`}>
                    Editor
                </button>
                <button onClick={() => setYoutuber(true)} className={`w-1/2 py-2 ${isYoutuber ? "bg-red-600 text-white" : "text-red-600"} rounded-tr-lg`}>
                    YouTuber
                </button>
            </div>
            <div className="p-8">
                {isYoutuber ? 
                <div className="w-full">
                    <YoutuberForm />
                </div> : 
                <EditorForm className="w-full" />}
            </div>
        </div>
    )
};

export default AuthForm;