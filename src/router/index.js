import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import UrunListesi from "../views/ProductList";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: UrunListesi
  },
  {
    path: '/urun-islemleri',
    name: 'Urun-islemleri',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "urun islemleri" */ '../views/ProductPurchase.vue')
  },
  {
    path: '/urun-cikisi',
    name: 'Urun-cikisi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "urun cikisi" */ '../views/ProductSell.vue')
  },
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
