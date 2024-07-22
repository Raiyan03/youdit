"use client"
import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const Frame = ({ data }) => {
    const [visible, setVisible] = useState(false);
    const [rotated, setRotated] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { image, name, role } = data;

    const hover = () => {
        setVisible(true);
    };
    
    const leaveHover = () => {
        setVisible(false);
    };

    const handleClick = () => {
        setRotated(!rotated);
        setIsOpen(!isOpen);
    };

    return (
        <div onMouseEnter={hover} onMouseLeave={leaveHover} onClick={handleClick} className="flex flex-col cursor-pointer p-2 rounded-md items-center w-full bg-gray-200">
            <div className="flex justify-between w-full items-center">
                <div className="flex gap-3 items-center">
                    <Image src={image ? image : "/noavatar.png" } className="border rounded-full bg-slate-700" width={40} height={40} />
                    <h1>{name}</h1>
                </div>
                {visible && (
                    <FaChevronDown className={`transform transition-transform duration-300 ${rotated ? 'rotate-180' : 'rotate-0'}`} />
                )}
            </div>
            <div className={`transition-all duration-300 w-full ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100 focus-within:' : 'max-h-0 opacity-0'}`}>
                <div className="flex border-red-800 w-full flex-col gap-2 p-2">
                    <button className="p-2 bg-gray-200 rounded-sm">Edit</button>
                    <button className="p-2 bg-gray-200 rounded-sm">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Frame;