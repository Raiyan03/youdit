import { auth } from "@/auth";

const YoutuberDashboard = async () => {
    const session = await auth();
    return (
        <div className="text-wrap">
            { JSON.stringify(session)}
        </div>
    );
}

export default YoutuberDashboard;