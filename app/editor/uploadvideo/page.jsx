"use client"
import { useState } from "react";
import { useEffect } from "react";
import UploadBox from "@/components/editor/upload-video/upload-box";
import ChooseYoutuberDropdown from "@/components/editor/upload-video/choose-youtuber-dropdown";
import { FetchEditor } from "@/server/calls";
import { getSession } from "next-auth/react";
const uploadVideos = () => {
    const [selectedName, setSelectedName] = useState('Youtuber');
    const [user, setUser] = useState(null);
    const [youtubers, setYoutubers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const session = await getSession();
            const user = session?.user;
            setUser(user);

            if (user) {
                const data = await FetchEditor(user.id);
                setYoutubers(data);
            }
        };
        fetchData();
    },[]);

    return (
    youtubers &&    
    <div className="flex flex-col gap-3">
            <ChooseYoutuberDropdown selectedName={selectedName} setSelectedName={setSelectedName} />
            <UploadBox youtuber={selectedName} />
    </div>
    )
}

export default uploadVideos;