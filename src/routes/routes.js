const routers = [
    {
        path: "/",
        redirect: "/welcome",
        auth: false,
    },
    {
        component: "AuthLayout",
        path: "/auth",
        auth: false,
        name: "Auth",
        exact: false,
        redirect: "/auth/login",
        childrens: [
            {
                component: "Login",
                path: "/login/:id",
                componentPath: "pages/Auth/Login",
                name: "Login",
                auth: false,
                exact: true,
            },
        ],
    },
    {
        component: "MainLayout",
        path: "/forgot",
        auth: false,
        name: "forgot",
        exact: false,
        childrens: [
            {
                path: "/",
                componentPath: "pages/ForgotPasswordPage/index",
                name: "ForgotBase",
                auth: false,
                exact: true,
            },
        ],
    },

    {
        component: "HomeLayout",
        path: "/welcome",
        auth: false,
        name: "Dashboard",
        exact: false,
        childrens: [
            {
                path: "/",
                componentPath: "pages/Dashboard/index",
                name: "WelcomeDashboard",
                auth: false,
                exact: true,
            },
        ],
    },

    {
        component: "MainLayout",
        path: "/admin",
        auth: false,
        name: "Dashboard",
        exact: false,
        childrens: [
            {
                path: "/login",
                componentPath: "pages/AdminDashboard/Admin/Admin",
                name: "AdminLogin",
                auth: false,
                exact: true,
            },
        ],
    },

    {
        component: "DashboardLayout",
        path: "/admins",
        auth: true,
        name: "Dashboard",
        exact: false,
        redirect: "/admins/dashboard",

        childrens: [
            {
                path: "/dashboard",
                componentPath:
                    "pages/AdminDashboard/MainAdminComp/AdminDashboardList",
                name: "AdminDashboardList",
                auth: false,
                exact: true,
            },
            {
                path: "/trainer",
                componentPath: "pages/AdminDashboard/AdminTrainer/AdminTrainer",
                name: "AdminTrainer",
                auth: false,
                exact: true,
            },

            {
                path: "/view/:id",
                componentPath: "pages/AdminDashboard/AdminTrainer/ViewTrainer",
                name: "AdminTrainerView",
                auth: false,
                exact: true,
            },

            {
                path: "/user",
                componentPath: "pages/AdminDashboard/AdminUsers/AdminUser",
                name: "AdminUser",
                auth: false,
                exact: true,
            },
        ],
        // childrens: [
        //     {
        //         path: "/trainer",
        //         componentPath: "pages/AdminDashboard/AdminTrainer/AdminTrainer",
        //         name: "AdminTrainer",
        //         auth: false,
        //         exact: true,
        //     },
        // ],
    },

    {
        component: "MainLayout",
        path: "/trainer",
        auth: true,
        name: "Dashboard",
        exact: false,
        childrens: [
            {
                path: "/find",
                componentPath: "pages/Trainer/Find/index",
                name: "FindTrainer",
                auth: false,
                exact: true,
            },
            {
                path: "/profile/:id",
                componentPath: "pages/Trainer/Profile/index",
                name: "TrainerProfile",
                auth: false,
                exact: true,
            },
            {
                path: "/signup",
                componentPath: "pages/Trainer/Signup/index",
                name: "TrainerSignup",
                auth: false,
                exact: true,
            },
            {
                path: "/about",
                componentPath: "pages/Trainer/About/index",
                name: "TrainerAbout",
                auth: false,
                exact: true,
            },
            {
                path: "/background",
                componentPath: "pages/Trainer/Background/index",
                name: "TrainerBackgroundSection",
                auth: false,
                exact: true,
            },
            {
                path: "/availability",
                componentPath: "pages/Trainer/Avaliability/index",
                name: "TrainerAvaliabilitySection",
                auth: false,
                exact: true,
            },
            {
                path: "/card",
                componentPath: "pages/Trainer/Card/index",
                name: "TrainerCardSection",
                auth: false,
                exact: true,
            },
            {
                path: "/setup",
                componentPath: "pages/Trainer/Setup/index",
                name: "TrainerSetupSection",
                auth: false,
                exact: true,
            },
        ],
    },

    {
        component: "MainLayout",
        path: "/agreement",
        auth: false,
        name: "agree",
        exact: false,
        childrens: [
            {
                path: "/",
                componentPath: "pages/TrainerAggrement/TrainerAgreement",
                name: "AgreeBase",
                auth: false,
                exact: true,
            },
        ],
    },
    {
        component: "MainLayout",
        path: "/privacy",
        auth: false,
        name: "privacy",
        exact: false,
        childrens: [
            {
                path: "/",
                componentPath: "pages/Privacy/Privacy",
                name: "privacyBase",
                auth: false,
                exact: true,
            },
        ],
    },

    {
        component: "MainLayout",
        path: "/faq",
        auth: false,
        name: "FAQ",
        exact: false,
        childrens: [
            {
                path: "/",
                componentPath: "pages/FAQ/FAQMain",
                name: "FAQBase",
                auth: false,
                exact: true,
            },
        ],
    },
    {
        component: "MainLayout",
        path: "/how-it-works",
        auth: false,
        name: "HowItWorks",
        exact: false,
        childrens: [
            {
                path: "/",
                componentPath: "pages/HowItWorks/index",
                name: "HowItWorksBase",
                auth: false,
                exact: true,
            },
        ],
    },
    {
        component: "MainLayout",
        path: "/who-we-are",
        auth: false,
        name: "WhoAreWe",
        exact: false,
        childrens: [
            {
                path: "/",
                componentPath: "pages/WhoWeAre/WhoWeAre",
                name: "WhoAreWeBase",
                auth: false,
                exact: true,
            },
        ],
    },
    {
        component: "MainLayout",
        path: "/terms",
        auth: false,
        name: "TermsOfUse",
        exact: false,
        childrens: [
            {
                path: "/",
                componentPath: "pages/TermsOfUse/TermsOfUse",
                name: "TermsOfUse",
                auth: false,
                exact: true,
            },
        ],
    },

    {
        component: "MainLayout",
        path: "/user",
        auth: false,
        name: "User",
        exact: false,
        childrens: [
            {
                path: "/signup",
                componentPath: "pages/User/UserSignUp/index",
                name: "UserSignUpBase",
                auth: false,
                exact: true,
            },

            {
                path: "/scheduler",
                componentPath: "pages/User/UserSchedule/index",
                name: "UserScheduler",
                auth: false,
                exact: true,
            },
            {
                path: "/session-type",
                componentPath: "pages/User/BookASession/index",
                name: "SessionType",
                auth: false,
                exact: true,
            },
            {
                path: "/motto-pass",
                componentPath: "pages/User/MottoPass/index",
                name: "MottoPass",
                auth: false,
                exact: true,
            },
            {
                path: "/payment",
                componentPath: "pages/User/Payment/index",
                name: "UserPayment",
                auth: false,
                exact: true,
            },
            {
                path: "/with-friends",
                componentPath: "pages/User/TrainWithFriend/TrainWithFriend",
                name: "UserFriend",
                auth: false,
                exact: true,
            },
        ],
    },
    {
        component: "TrainerDashboardLayout",
        path: "/trainers/dashboard",
        auth: false,
        name: "TrainerDashboard",
        exact: false,
        redirect: "/trainers/dashboard/session",
        childrens: [
            {
                path: "/schedule",
                componentPath: "pages/TrainerDashboard/Schedule/Schedule",
                name: "TrainerSchedule",
                auth: false,
                exact: true,
            },
            {
                path: "/session",
                componentPath: "pages/TrainerDashboard/Session/index",
                name: "TrainerSession",
                auth: false,
                exact: true,
            },
            {
                path: "/earnings",
                componentPath: "pages/TrainerDashboard/Earnings/index",
                name: "TrainerEarnings",
                auth: false,
                exact: true,
            },
            {
                path: "/notification",
                componentPath: "pages/TrainerDashboard/Notifications/index",
                name: "TrainerNotification",
                auth: false,
                exact: true,
            },
            {
                path: "/settings/profile",
                componentPath: "pages/TrainerDashboard/Settings/MyProfile",
                name: "TrainerMyProfile",
                auth: false,
                exact: true,
            },
            {
                path: "/settings/card",
                componentPath: "pages/TrainerDashboard/Settings/CardTrainer",
                name: "TrainerCard",
                auth: false,
                exact: true,
            },
            {
                path: "/message",
                componentPath: "pages/TrainerDashboard/TrainerMessage",
                name: "TrainerMessage",
                auth: false,
                exact: true,
            },
        ],
    },
    {
        component: "UserDashboardLayout",
        path: "/users/dashboard",
        auth: false,
        name: "UserDashboardLayout",
        exact: false,
        redirect: "/user-dashboard/settings/profile",
        childrens: [
            {
                path: "/session",
                componentPath: "pages/UserDashboard/Session/index",
                name: "UserSession",
                auth: false,
                exact: true,
            },
            {
                path: "/message",
                componentPath: "pages/UserDashboard/Message/index",
                name: "UserMessage",
                auth: false,
                exact: true,
            },
            {
                path: "/notification",
                componentPath: "pages/UserDashboard/Notifications/index",
                name: "UserNotification",
                auth: false,
                exact: true,
            },
            {
                path: "/settings/profile",
                componentPath: "pages/UserDashboard/Settings/MyProfile",
                name: "UserProfile",
                auth: false,
                exact: true,
            },
        ],
    },
];

export default routers;
