import Image from "next/image";

const Navbar = () => {
    return (
        <div className=" h-[60px] flex items-center justify-between bg-background px-3 border-b shadow-sm">
            <div className="flex items-center">
                <Image src="/logo2.png" height={80} width={80} />
                <h1 className=" text-xl font-bold">
                    YouDit
                </h1>
            </div>
            <Image 
            src="https://lh3.googleusercontent.com/a/ACg8ocJuR7dMRe2CpFYa3N3XYwExQwcxWWDWhqF0ax2CZZ6e_scrvQ=s96-c"
            height={33}
            width={33}
             className="rounded-full"
            />
        </div>
    )
}

export default Navbar;