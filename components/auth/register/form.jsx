"use client"
import {createUser} from "@/data/user"
import { useEffect, useState } from 'react';
import axios from "axios";
const EditorForm = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger the animation when the component mounts
        setIsLoaded(true);
    }, []);
    const Register = () => {
        const values = {
            name: "test",
            email: " test.com ",
            password: "test"
        };
        try{
            axios.post("/api/auth/register", values)
            .then((res) => {
                console.log(res);
            })
        }catch (e){
            console.log(e);
        }
    } 
    return (
        <div className="flex flex-col items-center ">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Welcome to YouDit! 🎥
            </h1>
            <form className={`w-full flex flex-col gap-4 transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <input className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="text" 
                       placeholder="Enter your name" />
                <input className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="email" 
                       placeholder="Enter your email" />
                <input className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="password" 
                       placeholder="Create a password" />
                <input className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="password" 
                       placeholder="Confirm your password" />
                <button className="py-3 px-5 bg-primary text-white rounded-lg font-medium hover:bg-accent transition duration-300 ease-in-out"> 
                    Join Now
                </button>
            </form>
            <button onClick={Register} className="">
                create
            </button>
        </div>
    );
};

export default EditorForm;
