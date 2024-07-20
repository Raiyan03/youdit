"use client"
import FormModal from "@/components/youtuber/Modals/form-modal";
import EditorsList from "@/components/youtuber/dashboard/editors";
import UserBatch from "@/components/youtuber/user-batch";
import Card from "@/components/youtuber/dashboard/card";
import { useState, useContext } from "react";
import { useSession } from "next-auth/react";
import Hero from "@/components/youtuber/dashboard/hero";
import { emailValidation } from "@/lib/validation";

const YoutuberDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputEmail, setInputEmail] = useState(null);
    const session = useSession()?.data;
    const [errorMsg, setErrorMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    } 

    const onChangeEmail = (e) => {
        setInputEmail(e.target.value);
    }

    const onSubmit = (e) => {
        setErrorMsg(null);
        setErrorMsg(null);
        e.preventDefault();
        const response = emailValidation(inputEmail);
        if (response.error) {
            setErrorMsg(response.error);
            return;
        }
        if (response.success) {
            setErrorMsg(null);
        }
    };

    return (
        <div className={`flex flex-col gap-3 `}>
            <Hero isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
            {isOpen 
            && 
            <FormModal 
            isOpen={isOpen} 
            onClose={closeModal} className="opacity-100" 
            title={"Assign editor"} 
            inputFields={[{label: "Editor's email", type: "Email", placeholder: "Enter editor's email", url: "/youtuber/videos", onChange: onChangeEmail}]} 
            onSubmit={onSubmit}
            submitLabel="Assign"
            errorMsg={errorMsg}
            successMsg={successMsg}
            />}
        </div>
    );
}

export default YoutuberDashboard;