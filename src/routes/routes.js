const routers = [
  {
    path: "/",
    redirect: "/",
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
    path: "/findtrainer",
    auth: false,
    name: "FindTrainer",
    exact: false,
    childrens: [
      {
        path: "/",
        componentPath: "pages/FindTrainer/index",
        name: "FindTrainerBase",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/trainer-profile",
    auth: false,
    name: "TrainerProfile",
    exact: false,
    childrens: [
      {
        path: "/",
        componentPath: "pages/TrainerProfile/index",
        name: "TrainerProfileBase",
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
