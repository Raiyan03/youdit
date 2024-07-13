import { auth } from "@/auth"
import { signOut } from "@/auth";
import { server } from "typescript";

const Editor = async () => {
    const session = await auth();
  return (
    <div>
        Editor
        {session && JSON.stringify(session)}
        <form action={
          async () => {
            "use server";
            await signOut({redirectTo: "/"});
          }
        }>
            <button>
              Sign out
            </button>
        </form>
    </div>
  );
}

export default Editor