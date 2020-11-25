import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CreateTaks from "../components/createTaks/CreateTaks.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "CreateTaks",
    component: CreateTaks
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
