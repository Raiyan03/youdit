import Navbar from "@/components/youtuber/navbar";
import Sidebar from "@/components/youtuber/sidebar";
const YoutubeLayout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar />
            <div className="flex flex-grow">
                <Sidebar/>
                <main className="flex-1 p-3">
                    {children}
                </main>
            </div>
        </div>

    );
}

export default YoutubeLayout;