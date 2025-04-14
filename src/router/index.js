import { createRouter, createWebHistory } from 'vue-router'
import WorkView from '@/views/WorkView.vue'
import InterestsView from '@/views/InterestsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import HomeView from '@/views/HomeView.vue'
import LearningsView from '@/views/LearningsView.vue'
import ArticleView from '@/views/learnings/ArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        showNav: false
      }
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
      path: '/learnings',
      name: 'learnings',
      component: LearningsView,
      children: [{
        path: ':name',
        name: 'article',
        component: ArticleView,
        meta: {
          showNav: false
        }
      }]
    }
  ],
})

export default router
