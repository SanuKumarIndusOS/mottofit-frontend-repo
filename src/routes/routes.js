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
        component: "DashboardLayout",
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
                path: "/profile",
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
                path: "/avaliability",
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
        ],
    },

    {
        component: "TrainerDashboardLayout",
        path: "/trainers/dashboard",
        auth: false,
        name: "TrainerDashboard",
        exact: false,
        childrens: [
            {
                path: "/session",
                componentPath: "pages/TrainerDashboard/Session/index",
                name: "TrainerSession",
                auth: false,
                exact: true,
            },
        ],
    },
];

export default routers;
