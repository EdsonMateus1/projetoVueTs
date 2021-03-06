import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/components/listTaks/ListTaks.vue"),
      },
      {
        path: "/home/createTaks",
        name: "Create Taks",
        component: () => import("@/components/createTaks/CreateTaks.vue"),
      },
      {
        path: "/home/editTaks",
        name: "Edit Taks",
        component: () => import("@/components/editTaks/EditTaks.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/views/LoginPage.vue"),
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/components/login/Login.vue"),
      },
      {
        path: "/sign",
        name: "Sign",
        component: () => import("@/components/sign/Sign.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//type guards global
router.beforeEach((to, from, next) => {
  const id = localStorage.getItem("toke-login") || null;
  if (!id && to.name != "Login" && to.name != "Sign") {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
