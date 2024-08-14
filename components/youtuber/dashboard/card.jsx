import Image from "next/image"
import Link from "next/link"
import { GrLinkNext } from "react-icons/gr";

const Card  = ({ openModal, title, description, image, link}) => {
    return (
        <div className="flex flex-col w-1/2 p-3 gap-3 justify-center items-center border rounded-lg">
            <h1 className="text-lg font-semibold self-start">
                {title}
            </h1>
            <Image src={image} alt="image" width={100} height={100} />
            <p className="w-full text-wrap">
                {description}
            </p>
            <button className=" self-end" onClick={openModal} >
                <GrLinkNext className="hover:text-primary transition duration-400 ease-in-out" />
            </button>           
        </div>
    )
}

export default Card;