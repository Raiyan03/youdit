import UserBatch from "@/components/youtuber/user-batch";
import { auth } from "@/auth";

const YoutuberDashboard = async () => {
    const session = await auth();
    return (
        <div className="flex items-center flex-col justify-center">
            <UserBatch user={session?.user} />
        </div>
    );
}

export default YoutuberDashboard;