import React from "react";

import * as RiIcons from "react-icons/ri";
import SessionIcon from "../../../../assets/TrainerDashboard/SideBarAssets/Session Icon.svg";
import MessageIcon from "../../../../assets/TrainerDashboard/SideBarAssets/Message Icon.svg";
import NotificationIcon from "../../../../assets/TrainerDashboard/SideBarAssets/Notifications Icon.svg";
import SettingIcon from "../../../../assets/TrainerDashboard/SideBarAssets/Settings Icon.svg";
import LogoutIcon from "../../../../assets/TrainerDashboard/SideBarAssets/Logout Icon.svg";

export const SideBarRouteData = [
    {
        title: "MY Session",
        path: "/user-dashboard/my-session",
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
        path: "/user-dashboard/notifications",
        icon: <img src={NotificationIcon} alt="icon" />,
    },
    {
        title: "Settings",
        path: "/user-dashboard/setting",
        icon: <img src={SettingIcon} alt="icon" />,

        subNav: [
            {
                title: "Users",
                path: "/user-dashboard/setting/user",
                icon: <img src={SessionIcon} alt="icon" />,
            },
            {
                title: "Settings",
                path: "/user-dashboard/setting/user2",
                icon: <img src={SessionIcon} alt="icon" />,
            },
        ],
    },
    {
        title: "Log out",
        path: "/",
        icon: <img src={LogoutIcon} alt="icon" />,
    },
];
