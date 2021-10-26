import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes = [
  {
    path: '/',
    name: 'header-search',
    component: () => import('../components/header_&_footer/header-search.vue'),
    children: [
      {
        path: "/block/:hash",
        name: "block",
        component: () => import('../components/block/block-index.vue')
      },
      {
        path: "/address/:hash",
        name: "address",
        component: () => import( "../components/address/address-index.vue"),
      },
      {
        path: "/transaction/:hash",
        name: "transaction",
        component: () => import( "../components/transaction/transaction-index.vue"),
      },
    ]
  }


  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
