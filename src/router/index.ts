import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes = [
  {
    path: '/',
    name: 'home-index',
    component: () => import('../components/home/home-index.vue'),
    children: [
      {
        path: "/home-block",
        name: "home-block",
        component: () => import('../components/home/home-block.vue')
      },
      {
        path: "/block/:hash",
        name: "block",
        component: () => import('../components/block/block-index.vue')
      },
      {
        path: "/address/:addr",
        name: "address",
        component: () => import( "../components/address/address-index.vue"),
      },
      {
        path: "/transaction/:tx",
        name: "transaction",
        component: () => import( "../components/transaction/transaction-index.vue"),
      },
      {
        path: 'error',
        name: 'error',
        component: () => import( "../components/errors/error.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
