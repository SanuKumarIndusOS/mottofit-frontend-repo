import React from "react";

import * as RiIcons from "react-icons/ri";
import SessionIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Session Icon.svg";
import MessageIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Message Icon.svg";
import NotificationIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Notifications Icon.svg";
import SettingIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Settings Icon.svg";
import LogoutIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Logout Icon.svg";

export const SideBarRouteData = [
  {
    title: "MY Schedule",
    path: "/trainer-dashboard/schedule",
    icon: <img src={SessionIcon} alt="icon" />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "My Session",
    path: "/trainers/dashboard/session",
    icon: <img src={MessageIcon} alt="icon" />,
  },

  {
    title: "Messages",
    path: "/trainer-dashboard/message",
    icon: <img src={MessageIcon} alt="icon" />,
  },
  {
    title: "My Earnings",
    path: "/trainer-dashboard/earnings",
    icon: <img src={MessageIcon} alt="icon" />,
  },
  {
    title: "Notifications",
    path: "/trainer-dashboard/notifications",
    icon: <img src={NotificationIcon} alt="icon" />,
  },
  {
    title: "Settings",
    path: "/trainer-dashboard/notifications",
    icon: <img src={SettingIcon} alt="icon" />,

    subNav: [
      {
        title: "My Profile",
        path: "/trainer-dashboard/setting/profile",
        // icon: <img src={SessionIcon} alt="icon" />,
      },
      {
        title: "Payment History",
        path: "/trainer-dashboard/setting/payment-history",
        // icon: <img src={SessionIcon} alt="icon" />,
      },
      {
        title: "Notification Settings",
        path: "/trainer-dashboard/setting/notification",
        // icon: <img src={SessionIcon} alt="icon" />,
      },
    ],
  },
  {
    title: "Log out",
    path: "/",
    icon: <img src={LogoutIcon} alt="icon" />,
  },
];
