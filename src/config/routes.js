/** Definimos las rutas y subrutas */
import AdminLayout from "../layouts/Admin/AdminLayout";
import UserLayout from "../layouts/User/UserLayout";

import AdminHome from "../pages/Admin/AdminHome/AdminHome";
import BlogEdition from "../pages/Admin/BlogEdition/BlogEdition";
import LogIn from "../pages/Admin/LogIn/LogIn";
import SignIn from "../pages/Admin/SignIn/SignIn";
import Users from "../pages/Admin/Users/Users";

import About from "../pages/User/About/About";
import Blog from "../pages/User/Blog/Blog";
import Contact from "../pages/User/Contact/Contact";
import Home from "../pages/User/Home/Home";

const routes = [
  {
    path: "/admin",
    component: AdminLayout,
    exact: false,
    routes: [
      {
        path: "/admin/blog-edition",
        component: BlogEdition,
        exact: true,
      },
      {
        path: "/admin/log-in",
        component: LogIn,
        exact: true,
      },
      {
        path: "/admin/sign-in",
        component: SignIn,
        exact: true,
      },
      {
        path: "/admin/users",
        component: Users,
        exact: true,
      },
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
    ],
  },
  {
    path: "/",
    component: UserLayout,
    exact: false,
    routes: [
      {
        path: "/about",
        component: About,
        exact: true,
      },
      {
        path: "/blog",
        component: Blog,
        exact: true,
      },
      {
        path: "/contact",
        component: Contact,
        exact: true,
      },
      {
        path: "/",
        component: Home,
        exact: true,
      },
    ],
  },
];

export default routes;
