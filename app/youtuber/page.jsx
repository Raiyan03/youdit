import { auth, signOut } from "@/auth"

const YoutuberPage = async () => {  
    const session = await auth();
  return (
    <div>
        Youtuber
        <div>
            {JSON.stringify(session)}
        </div>
        <form action={ async () => {
                "use server"
                await signOut({ redirectTo: "/"});
            }}>
                <button type="submit">
                    Sign out
                </button>
            </form>
    </div>
  )
}

export default YoutuberPage