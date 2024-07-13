"use client"
import { useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';

const YoutuberForm = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const onClick = (provider) => {
        if (provider === 'google') {
            signIn(provider, {
                callbackUrl: "http://localhost:3000/youtuber"
            })
        }
    }
    useEffect(() => {
        // Trigger the animation when the component mounts
        setIsLoaded(true);
    }, []);

    return (
        <div onClick={() => {onClick("google")}} className={`flex w-[300px] py-2 cursor-pointer items-center justify-center border hover:border-primary rounded-lg transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <FcGoogle size={50} />
        </div>
    );
}

export default YoutuberForm;
