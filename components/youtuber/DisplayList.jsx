"use client"
import Frame from "./editor-video-fram"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { compareSync } from "bcryptjs"
import { FetchEditors } from "@/server/calls"

export const DisplayList = ({data, isOpenModal, closeModal, openModal}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [editors, setEditors] = useState();

    return (
        <div className="p-2 flex w-full flex-col gap-2">
            {data?.map((item, index) => {
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