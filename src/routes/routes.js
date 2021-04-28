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
];

export default routers;
