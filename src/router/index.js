import { createRouter, createWebHistory } from 'vue-router'

import BaseLayout from '@/layouts/BaseLayout.vue'


import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "",
      path: "/",
      component: BaseLayout,
      children: [
        {
          name: "home",
          path: "/",
          component: HomeView
        }
      ]
    }
  ],
})

export default router
