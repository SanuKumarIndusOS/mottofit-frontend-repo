import React from "react";

import * as RiIcons from "react-icons/ri";
import SessionIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Session Icon.svg";
import MessageIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Message Icon.svg";
import NotificationIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Notifications Icon.svg";
import SettingIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Settings Icon.svg";
import LogoutIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Logout Icon.svg";
import { logout } from "../../../../service/utilities";

export const SideBarRouteDataAdmin = [
  {
    title: "Dashboard",
    path: "/admins/dashboard",
    icon: <img src={SessionIcon} alt="icon" />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Trainers",
    path: "/admins/trainer",
    icon: <img src={MessageIcon} alt="icon" />,
  },

  {
    title: "Users",
    path: "/admins/user",
    icon: <img src={MessageIcon} alt="icon" />,
  },
  {
    title: "Messages",
    path: "/admins/message/trainer",
    icon: <img src={MessageIcon} alt="icon" />,
  },
  {
    title: "Bookings",
    path: "/admins/bookings",
    icon: <img src={MessageIcon} alt="icon" />,
  },
  {
    title: "Payments",
    // path: "/trainers/dashboard/notification",
    icon: <img src={NotificationIcon} alt="icon" />,
  },
  {
    title: "Marketing",
    path: "/admins/marketing",
    icon: <img src={NotificationIcon} alt="icon" />,
  },
  {
    title: "Reports",
    // path: "/trainers/dashboard/settings/profile",
    icon: <img src={SettingIcon} alt="icon" />,
  },
  {
    title: "Log out",
    path: "/",
    onClick: logout,
    icon: <img src={LogoutIcon} alt="icon" />,
  },
];
