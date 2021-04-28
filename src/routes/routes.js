const routers = [
  {
    path: "/",
    redirect: "/welcome",
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
    auth: false,
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
  },{
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
    path: "/signup",
    auth: false,
    name: "UserSignUp",
    exact: false,
    childrens: [
      {
        path: "/",
        componentPath: "pages/UserSignUp/index",
        name: "UserSignUpBase",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/user-onboard",
    auth: false,
    name: "UserOnBoard",
    exact: false,
    childrens: [
      {
        path: "/",
        componentPath: "pages/UserOnBoard/index",
        name: "UserOnBoardBase",
        auth: false,
        exact: true,
      },
    ],
  },
];

export default routers;
