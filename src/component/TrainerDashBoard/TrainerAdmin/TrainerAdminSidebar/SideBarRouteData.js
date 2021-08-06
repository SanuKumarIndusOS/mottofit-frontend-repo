import React from "react";

import * as RiIcons from "react-icons/ri";
import SessionIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Session Icon.svg";
import MessageIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Message Icon.svg";
import NotificationIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Notifications Icon.svg";
import SettingIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Settings Icon.svg";
import LogoutIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Logout Icon.svg";
import MyEarningIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/My Earnings Icon.svg";
import SheduleIcon from "../../../../assets/files/TrainerDashboard/SideBarAssets/Shedule Icon.svg";
import { logout } from "../../../../service/utilities";

export const SideBarRouteData = [
  {
    title: "MY Schedule",
    path: "/trainers/dashboard/schedule",
    icon: <img src={SheduleIcon} alt="icon" />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "My Session",
    path: "/trainers/dashboard/session",
    icon: <img src={SessionIcon} alt="icon" />,
  },

  {
    title: "Messages",
    path: "/trainers/dashboard/message/upcoming",
    icon: <img src={MessageIcon} alt="icon" />,
  },
  {
    title: "My Earnings",
    path: "/trainers/dashboard/earnings",
    icon: <img src={MyEarningIcon} alt="icon" />,
  },
  {
    title: "Notifications",
    path: "/trainers/dashboard/notification",
    icon: <img src={NotificationIcon} alt="icon" />,
  },
  {
    title: "Settings",
    path: "/trainers/dashboard/settings/profile",
    icon: <img src={SettingIcon} alt="icon" />,

    subNav: [
      {
        title: "My Trainer Card",
        path: "/trainers/dashboard/settings/card",
        // icon: <img src={SessionIcon} alt="icon" />,
      },
      {
        title: "My Profile",
        path: "/trainers/dashboard/settings/profile",
        // icon: <img src={SessionIcon} alt="icon" />,
      },
      {
        title: "Security & Payment Info",
        path: "/trainers/dashboard/settings/payment-history",
        // icon: <img src={SessionIcon} alt="icon" />,
      },
      {
        title: "Earning History ",
        path: "/trainers/dashboard/earnings",
        // icon: <img src={SessionIcon} alt="icon" />,
      },

      //   {
      //     title: "Notification Settings",
      //     path: "/trainers/dashboard/settings/notification",
      //     // icon: <img src={SessionIcon} alt="icon" />,
      //   },
      {
        title: "Password Settings",
        path: "/trainers/dashboard/settings/password",
        // icon: <img src={SessionIcon} alt="icon" />,
      },
    ],
  },
  {
    title: "Log out",
    path: "/",
    onClick: logout,
    icon: <img src={LogoutIcon} alt="icon" />,
  },
];
