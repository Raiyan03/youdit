"use client"
import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const Frame = ({ data }) => {
    const [visible, setVisible] = useState(false);
    const [rotated, setRotated] = useState(false);
    const { link, title } = data;

    const hover = () => {
        setVisible(true);
    };
    
    const leaveHover = () => {
        setVisible(false);
    };

    const handleClick = () => {
        setRotated(!rotated);
    };

    return (
        <div onMouseEnter={hover} onMouseLeave={leaveHover} onClick={handleClick} className="flex justify-between cursor-pointer p-1 rounded-sm items-center w-full bg-gray-200">
            <div className="flex gap-2 items-center">
                <Image src={link} width={50} height={50} />
                <h1>{title}</h1>
            </div>
            {visible && (
                <FaChevronDown className={`transform transition-transform duration-300 ${rotated ? 'rotate-180' : 'rotate-0'}`} />
            )}
        </div>
    );
}

export default Frame;
