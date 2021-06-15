import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/Product.vue'),
      },
      {
        path: '/carts',
        component: () => import('../views/Cart.vue'),
      },
    ],
  },
  // {
  //   path: '/admin'
  //   compo dashboard
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
