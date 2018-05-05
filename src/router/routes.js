export default [
  {
    path: "/",
    component: () => import("layouts/default"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("pages/Chat")
      },
      {
        path: "chat",
        name: "Chat",
        component: () => import("pages/Chat")
      },
      {
        path: "signup",
        name: "Signup",
        component: () => import("pages/Signup")
      },
      {
        path: "login",
        name: "Login",
        component: () => import("pages/Login")
      }
    ]
  },

  {
    // Always leave this as last one
    path: "*",
    component: () => import("pages/404")
  }
];
