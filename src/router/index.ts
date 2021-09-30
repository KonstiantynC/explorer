import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Search from "../components/header/Search.vue"
import App from '../App.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "App",
    component: App,
    children: [
      {
        path: "/block",
        name: "block",
        component: () => import('../components/block/MainPageBlock.vue')
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
    ]
  },


  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
