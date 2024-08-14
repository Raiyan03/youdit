import { MdDashboard, MdOutlineSupervisedUserCircle, MdYoutubeSearchedFor, MdGasMeter, MdLogout, MdEvent, MdQrCodeScanner, MdSwapCalls } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";

export const YoutuberSidebarItems = {
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