"use client"

import { MdDashboard, MdOutlineSupervisedUserCircle, MdYoutubeSearchedFor, MdGasMeter, MdLogout, MdEvent, MdQrCodeScanner, MdSwapCalls } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import NavLinks from "./navlinks";
import { logOut } from "@/actions/logout";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/auth";

const navbarItems = {
  list: [
    {
      title: "Dashboard",
      path: "/youtuber/dashboard",
      icon: <MdDashboard />,
    },
    {
      title: "Videos",
      path: "/youtuber/videos",
      icon: <FiYoutube />,
    },
  ],
};

export default function SideBar({ isToggle }) {
  const [load, setLoad] = useState(false);

  useEffect(() => setLoad(true), [])

  const router = useRouter()

  return (
    <div className=" flex flex-col mt-0  w-[200px] min-h-screen z-10 bg-background border-r ">
      <ul className="flex flex-col gap-2 overflow-auto">
        {navbarItems.list.map((item) => (
          <li key={item.title} className="block">
            <NavLinks item={item} />
          </li>
        ))}
      </ul>
      <form action={logOut}>
        <button type="submit"  className="flex items-center gap-3 p-2 ">
            <MdLogout />
            Logout
        </button>
      </form>
    </div>
  );
}