import userSession from "@/lib/getSession";
import Image from "next/image";
const Navbar =  ({ user }) => {
    return (
        <div className=" h-[60px] flex items-center justify-between bg-background px-3 border-b shadow-sm">
            <div className="flex items-center">
                <Image src="/logo2.png" height={80} width={80} />
                <h1 className=" text-xl font-bold">
                    YouDit
                </h1>
            </div>
            <Image 
            src={user?.image ? user.image : "/noavatar.png"}
            height={33}
            width={33}
             className="rounded-full"
            />
        </div>
    )
}

export default Navbar;