import React from "react";

import * as RiIcons from "react-icons/ri";
import SessionIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Session Icon.svg";
import MessageIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Message Icon.svg";
import NotificationIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Notifications Icon.svg";
import SettingIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Settings Icon.svg";
import LogoutIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Logout Icon.svg";

export const SideBarRouteData = [
  {
    title: "MY Session",
    path: "/user-dashboard/session",
    icon: <img src={SessionIcon} alt="icon" />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Messages",
    path: "/user-dashboard/message",
    icon: <img src={MessageIcon} alt="icon" />,
  },
  {
    title: "Notifications",
    path: "/user-dashboard/notification",
    icon: <img src={NotificationIcon} alt="icon" />,
  },
  {
    title: "Settings",
    path: "/user-dashboard/settings/profile",
    icon: <img src={SettingIcon} alt="icon" />,

    subNav: [
      {
        title: "My Profile",
        path: "/user-dashboard/settings/profile",
        // icon: <img src={SessionIcon} alt="icon" />,
      },
      {
        title: "Payment History",
        path: "/user-dashboard/settings/profile",
        // icon: <img src={SessionIcon} alt="icon" />,
      },
      {
        title: "Notification Settings",
        path: "/user-dashboard/settings/profile",
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
