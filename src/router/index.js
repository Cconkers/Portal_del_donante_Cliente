import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js';

Vue.use(VueRouter);

const routes = [{
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "Login" */ '../views/Login.vue'),
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: () => import( /* webpackChunkName: "ForgotPassword" */ '../views/ForgotPassword.vue'),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: '/',
    name: 'DashboardLayout',
    component: () => import( /* webpackChunkName: "DashboardLayout" */ '../layout/DashboardLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [{
        path: '/',
        name: 'profile',
        component: () => import( /* webpackChunkName: "News" */ '../views/Profile.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/BuscarDonantes',
        name: 'BuscarDonantes',
        component: () => import('../views/BuscarDonantes.vue'),
        meta: {
          requiresAuth: true,
          isAdmin: true
        },
      },
      {
        path: '/comunicadosAdmin',
        name: 'ComunicadosAdmin',
        component: () => import('../views/ComunicadosAdmin.vue'),
        meta: {
          requiresAuth: true,
          isAdmin: true
        },
      },
      {
        path: '/Peticion',
        name: 'Peticion',
        component: () => import('../views/Peticion.vue'),
        meta: {
          requiresAuth: true,
          isAdmin: true
        },
      },
      {
        path: '/comunicados',
        name: 'Comunicados',
        component: () => import( /* webpackChunkName: "Comunicados" */ '../views/Comunicados.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/notificaciones',
        name: 'Notificaciones',
        component: () => import( /* webpackChunkName: "Notificaciones" */ '../views/Notificaciones.vue'),
        meta: {
          requiresAuth: true
        },
      },

      {
        path: '/donaciones',
        name: 'Donaciones',
        component: () => import( /* webpackChunkName: "Donaciones" */ '../views/Donaciones.vue'),
        meta: {
          requiresAuth: true
        }
      },

      {
        path: '/donacionesPuntuales',
        name: 'DonacionesPuntuales',
        component: () => import( /* webpackChunkName: "DonacionesPuntuales" */ '../views/DonacionesPuntuales.vue'),
      },
      {
        path: '/preguntas',
        name: 'Preguntas',
        component: () => import( /* webpackChunkName: "Preguntas" */ '../views/Preguntas.vue'),
        meta: {
          requiresAuth: true
        },
      },

      {
        path: '/news',
        name: 'News',
        component: () => import( /* webpackChunkName: "Profile" */ '../views/News.vue'),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/:CatchAll(.*)",
    name: "NotFound",
    component: () =>
      import( /* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});






router.beforeEach((to, from, next) => {

  const loggedIn = !localStorage.getItem('user') || !localStorage.getItem('token');
  const reqAuth = to.matched.some(record => record.meta.requiresAuth);
  const reqAdmin = to.matched.some(record => record.meta.isAdmin);
  const user = localStorage.getItem('user');

    if (loggedIn && reqAuth) next({ name: 'Login' })
    // if the user is not authenticated, `next` is called twice
    next()
});
export default router