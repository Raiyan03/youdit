"use client"
import Image from "next/image"
import Frame from "./editor-video-fram"
import { MdAdd } from "react-icons/md"
import { useState } from "react"
import FormModal from "@/components/youtuber/Modals/form-modal"

export const DisplayList = ({data, isOpenModal, closeModal, openModal}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-2 flex w-full flex-col gap-2">
            {data.map((item, index) => {
                return (
                    <Frame data={item} key={index}/>
                )
            })}
            <button onClick={openModal} className=" bg-primary text-white rounded-md p-1 self-end">
                + Add new
            </button>
        </div>
    )
}