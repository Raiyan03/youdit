const RegisterForm = () => {
    return (
        <div className="flex flex-col items-center shadow-lg p-8 rounded-lg max-w-md mx-auto mt-10 bg-white">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Welcome to YouDit! 🎥
            </h1>
            <form className="w-full flex flex-col gap-4">
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
                <button className="py-3 px-5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition duration-300 ease-in-out"> 
                    Join Now
                </button>
            </form>
        </div>
    )
}

export default RegisterForm;
