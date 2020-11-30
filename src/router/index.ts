import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "createTaks",
        name: "Create Taks",
        component: () => import("../components/createTaks/CreateTaks.vue"),
      },
      {
        path: "listTaks",
        name: "List Taks",
        component: () => import("../components/createTaks/ListTaks.vue"),
      },
      {
        path: "editTaks",
        name: "Edit Taks",
        component: () => import("../components/createTaks/EditTaks.vue"),
      },
    ],
  },
  { path: "/", name: "Login ", component: () => import("../views/Login.vue") },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
