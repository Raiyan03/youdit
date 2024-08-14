import React from 'react'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
const ThumbnailImage = ({ previewUrl, handleDelete }) => {
    const [ isHover, setHover] = useState(false);
    const onMouseEnter = () => {
        setHover(true);
    }
    const onMouseOut = () => {
        setHover(false);
    }

    return (
            <>
                <Image
                    src={previewUrl}
                    alt="Thumbnail Preview"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg hover:shadow-inner-2xl"
                    onMouseEnter={onMouseEnter}
                    onMouseOut={onMouseOut}
                />
                { isHover && 
                <button 
                className="absolute 
                top-2 right-2 
                bg-gray-100 
                hover:bg-gray-300 
                duration-150 
                transition 
                ease-in-out p-1 
                rounded-md" 
                onMouseEnter={onMouseEnter}
                onClick={handleDelete}
                >
                    <MdDelete size={20} className='text-red-500' />
                </button>}
            </>
    )
}

export default ThumbnailImage