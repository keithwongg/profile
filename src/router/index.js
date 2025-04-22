import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '@/views/ProjectsView.vue'
import HomeView from '@/views/HomeView.vue'
import ArticleView from '@/views/utils/ArticleView.vue'
import UtilsView from '@/views/UtilsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
    // {
    //   path: '/work',
    //   name: 'work',
    //   component: WorkView,
    // },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/utils',
      name: 'utils',
      component: UtilsView,
      children: [{
        path: ':name',
        name: 'article',
        component: ArticleView,
        meta: {
          showNav: false
        }
      }]
    },
    {
      path: '/:catchAll(.*)',
      component: NotFoundView,
      name: 'NotFound',
      meta: {
        showNav: false
      }
    }
  ],
})

export default router
