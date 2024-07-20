"use client"
import FormModal from "@/components/youtuber/Modals/form-modal";
import EditorsList from "@/components/youtuber/dashboard/editors";
import UserBatch from "@/components/youtuber/user-batch";
import Card from "@/components/youtuber/dashboard/card";
import { useState, useContext } from "react";
import { useSession } from "next-auth/react";
import Hero from "@/components/youtuber/dashboard/hero";
const YoutuberDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const session = useSession()?.data;

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    } 

    return (
        <div className={`flex flex-col gap-3 `}>
            <Hero isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
            {isOpen 
            && 
            <FormModal 
            isOpen={isOpen} 
            onClose={closeModal} className="opacity-100"
             title={"Assign editor"} inputFields={[{label: "Editor's email", type: "Email", placeholder: "Enter editor's email", url: "/youtuber/videos"}]}
            />}
        </div>
    );
}

export default YoutuberDashboard;