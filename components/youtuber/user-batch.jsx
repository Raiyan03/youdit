import Image from "next/image"
const UserBatch = ({user}) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center ">
        <Image className="rounded-full" src={user?.image} width={100} height={100} />
        <h2 className="text-2xl">
          Welcome back, {user?.name}
        </h2>
    </div>
  )
}

export default UserBatch