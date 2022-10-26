const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/QuizPage.vue") },
      {
        path: "/converter",
        component: () => import("pages/ConverterPage.vue"),
      },
      {
        path: "/color-picker",
        component: () => import("pages/ColorPickerPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
