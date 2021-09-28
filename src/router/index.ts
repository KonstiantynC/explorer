import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/block",
    name: "block",
    component: () => import( "../components/block/MainPageBlock.vue"),
  },
  {
    path: "/address",
    name: "address",
    component: () => import( "../components/address/MainPageAddress.vue"),
  },
  {
    path: "/transaction",
    name: "transaction",
    component: () => import( "../components/transaction/MainPageTransaction.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
