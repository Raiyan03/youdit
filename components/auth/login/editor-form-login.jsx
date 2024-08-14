"use client"
import { loginInputValidation } from "@/lib/validation";
import { useEffect, useState } from "react";
import ErrorBox from "../error";
import axios from "axios";
import { redirect } from "next/navigation";
import { Login } from "@/actions/login";
import Link from "next/link";

const EditorFormLogin = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const response = loginInputValidation({ email, password });
        if (response?.error) {
            setError(response.error);
            return;
        }
        const values = {
            email,
            password
        };
        try {
            Login(values)
            .then((res) => {
                if (res.error) {
                    setError(res.error);
                }
            })
            .catch((err => {
                return null;
            }))
        } catch (error) {
            return null;
        }
    }

    return (
        <div className="flex flex-col items-center ">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Welcome to YouDit! 🎥
            </h1>
            <form onSubmit={onSubmit} className={`w-full flex flex-col gap-4 transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <input onChange={handleChangeEmail} className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="email" 
                       placeholder="Enter your email" />
                <input onChange={handleChangePassword} className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="password" 
                       placeholder="Create a password" />
                {errorMessage ? <ErrorBox message={errorMessage}  /> : null}
                <button type="submit" className="py-3 px-5 bg-primary text-white rounded-lg font-medium hover:bg-accent transition duration-300 ease-in-out"> 
                    Log in
                </button>
                <Link href="/auth/register" className="mt-3 self-center underline hover:text-accent">
                    Don&apos;t have an account? Register
                </Link>
            </form>
        </div>
    );
}

export default EditorFormLogin;