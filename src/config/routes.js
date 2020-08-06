/** Definimos las rutas y subrutas */

const routes = [
  {
    path: "/admin",
    component: null,
    exact: false,
    routes: [
      {
        path: "/admin/blog-edition",
        component: null,
        exact: true,
      },
      {
        path: "/admin/log-in",
        component: null,
        exact: true,
      },
      {
        path: "/admin/sign-in",
        component: null,
        exact: true,
      },
      {
        path: "/admin/users",
        component: null,
        exact: true,
      },
      {
        path: "/admin",
        component: null,
        exact: true,
      },
    ],
  },
  {
    path: "/",
    component: null,
    exact: false,
    routes: [
      {
        path: "/about",
        component: null,
        exact: true,
      },
      {
        path: "/blog",
        component: null,
        exact: true,
      },
      {
        path: "/contact",
        component: null,
        exact: true,
      },
      {
        path: "/",
        component: null,
        exact: true,
      },
    ],
  },
];

export default routes;
