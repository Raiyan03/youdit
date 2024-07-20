import Navbar from "@/components/youtuber/navbar";
import Sidebar from "@/components/youtuber/sidebar";
import { SessionProvider } from "next-auth/react";
const YoutubeLayout = ({children}) => {
    return (
        <SessionProvider>
            <div className="flex flex-col min-h-screen bg-background">
                <div className="fixed w-full z-10">
                    <Navbar />
                </div>
                <div className="flex flex-grow  pt-16 relative"> {/* Adjust padding-top to the height of your Navbar if needed */}
                    <div className="fixed z-30">
                        <Sidebar />
                    </div>
                    <main className=" ml-[200px] min-h-sc z-0 flex-1 p-3 h-full">
                        {children}
                    </main>
                </div>
            </div>
        </SessionProvider>
    );
}

export default YoutubeLayout;