import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CreateTaks from "../components/createTaks/CreateTaks.vue";
import ListTaks from "../components/listTaks/ListTaks.vue";
import EditTaks from "../components/editTaks/EditTaks.vue";
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home", component: Home,
    children: [
      {
        path: "/createTaks",
        name: "Create Taks",
        component: CreateTaks
      },
      {
        path: "/listTaks",
        name: "List Taks",
        component: ListTaks
      },
      {
        path: "/editTaks",
        name: "Edit Taks",
        component: EditTaks
      },
    ]
  },
  { path: "/", component: Login }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
