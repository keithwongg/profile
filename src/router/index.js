import { createRouter, createWebHistory } from 'vue-router'
import WorkView from '@/views/WorkView.vue'
import InterestsView from '@/views/InterestsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import BlogView from '@/views/BlogView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/interests',
      name: 'interests',
      component: InterestsView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    }
  ],
})

export default router
