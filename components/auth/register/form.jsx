"use client"
import {createUser} from "@/data/user"
import ErrorBox from "@/components/auth/error"
import { useEffect, useState } from 'react';
import axios from "axios";
import Link from "next/link";
import { registrationInputValidation } from "@/lib/validation";
const EditorForm = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setError] = useState("");

    const handleChangName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }


    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const Register = (e) => {
        setError("");
        e.preventDefault();
        const response = registrationInputValidation({name, email, password, confirmPassword});
        if (response.error) {
            setError(response.error);
            return ;
        }
        const values = {
            name: name,
            email: email,
            password: password
        }
        try{
            axios.post("/api/auth/register", values)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                setError(err.response.data.message);
            })
        }
        catch(e){
            setError(e.message);
        }
    }

    return (
        <div className="flex flex-col items-center ">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Welcome to YouDit! 🎥
            </h1>
            <form onSubmit={Register} className={`w-full flex flex-col gap-4 transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <input onChange={handleChangName} className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="text" 
                       placeholder="Enter your name" />
                <input onChange={handleChangeEmail} className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="email" 
                       placeholder="Enter your email" />
                <input onChange={handleChangePassword} className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="password" 
                       placeholder="Create a password" />
                <input onChange={handleChangeConfirmPassword} className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="password" 
                       placeholder="Confirm your password" />
                {errorMessage && <ErrorBox message={errorMessage} />}
                <button type="submit" className="py-3 px-5 bg-primary text-white rounded-lg font-medium hover:bg-accent transition duration-300 ease-in-out"> 
                    Join Now
                </button>
                <Link href="/auth/login" className="mt-3 self-center underline hover:text-accent">
                    Already have an account? Login
                </Link>
            </form>
        </div>
    );
};

export default EditorForm;
