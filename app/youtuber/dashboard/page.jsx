import UserBatch from "@/components/youtuber/user-batch";
import { auth } from "@/auth";
import Card from "@/components/youtuber/dashboard/card";
const YoutuberDashboard = async () => {
    const session = await auth();
    return (
        <div className="flex items-center gap-10 flex-col justify-center">
            <UserBatch user={session?.user} />
            <div className="flex flex-col justify-between w-full gap-7  sm:flex-col md:flex-row items-center">
                <Card title="Add an Editor!" description="Don't have an editor assigned, add one now!" image="/editor.png" link="/youtuber/videos" />
                <Card title="No videos in production" description="Assign a video to your editors and have a status on your videos" image="/editor.png" link="/youtuber/videos" />
            </div>
        </div>
    );
}

export default YoutuberDashboard;