import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from "@/views/users/UserView.vue";
import UserCreateView from "@/views/users/UserCreateView.vue";
import UserEditView from "@/views/users/UserEditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'user',
      component: UserView
    },
    {
      path: '/users/create',
      name: 'userCreate',
      component: UserCreateView
    },
    {
      path: '/users/:id/edit',
      name: 'userEdit',
      component: UserEditView
    },

  ]
})

export default router

