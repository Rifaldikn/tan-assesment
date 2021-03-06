import Vue from "vue";
import VueRouter from "vue-router";
// import { RouterView } from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/views/Products.vue"),
  },
  {
    path: "/products/:id",
    name: "ProductsDetail",
    component: () => import("@/views/DetailProduct.vue"),
  },
  {
    path: "/checkout/:id",
    name: "ProductCheckout",
    component: () => import("@/views/ProductCheckout.vue"),
    props: {},
  },
  {
    path: "/store",
    name: "EStore",
    component: () => import("@/views/Store.vue"),
  },
  {
    path: "/signup/student",
    name: "SignUp_Student",
    component: () => import("@/views/Signup.vue"),
    meta: {
      layout: "AdminLayout",
      title: "Registrasi Siswa",
    },
  },
  {
    path: "/signup/mentor",
    name: "SignUp_Mentor",
    component: () => import("@/views/Signup.vue"),
    meta: {
      layout: "AdminLayout",
      title: "Registrasi Pengajar",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
