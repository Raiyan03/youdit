const AuthLayout = ({ children }) => {
    return (
        <div className=" min-h-screen flex flex-col items-center justify-center"> 
            <main>
                {children}
            </main>
        </div>
    );
}

export default AuthLayout;