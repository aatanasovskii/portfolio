import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env?.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'HomePage' }
    },
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'HomePage',
          component: () => import('@/pages/HomePage.vue'),
        },
        {
          path: '/services',
          name: 'ServicesPage',
          component: () => import('@/pages/ServicesPage.vue'),
        },
        {
          path: '/skills',
          name: 'SkillsPage',
          component: () => import('@/pages/SkillsPage.vue'),
        },
        {
          path: '/about',
          name: 'AboutPage',
          component: () => import('@/pages/AboutPage.vue'),
        },
        {
          path: '/experience',
          name: 'ExperiencePage',
          component: () => import('@/pages/ExperiencePage.vue'),
        },
        {
          path: '/projects',
          name: 'ProjectsPage',
          component: () => import('@/pages/ProjectsPage.vue'),
        },
      ]
    },
  ],
})

export default router
