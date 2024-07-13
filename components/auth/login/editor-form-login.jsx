"use client"
import { loginInputValidation } from "@/lib/validation";
import { useEffect, useState } from "react";
import ErrorBox from "../error";
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

    const Login = (e) => {
        e.preventDefault();
        setError("");
        const response = loginInputValidation({ email, password });
        if (response?.error) {
            setError(response.error);
            return;
        }
    }

    return (
        <div className="flex flex-col items-center ">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Welcome to YouDit! 🎥
            </h1>
            <form onSubmit={Login} className={`w-full flex flex-col gap-4 transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <input onChange={handleChangeEmail} className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="email" 
                       placeholder="Enter your email" />
                <input onChange={handleChangePassword} className="border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none rounded-lg p-3" 
                       type="password" 
                       placeholder="Create a password" />
                {errorMessage ? <ErrorBox message={errorMessage}  /> : null}
                <button type="submit" className="py-3 px-5 bg-primary text-white rounded-lg font-medium hover:bg-accent transition duration-300 ease-in-out"> 
                    Join Now
                </button>
            </form>
        </div>
    );
}

export default EditorFormLogin;