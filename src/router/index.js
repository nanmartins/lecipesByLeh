// Composables
import { guardReactiveProps } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/recipes',
        component: () => import('@/views/Recipes.vue')
      },
      {
        path: '/categories',
        component: () => import('@/views/Categories.vue')
      },
      {
        path: '/recipe/:id',
        name: 'RecipeView',
        component: () => import('@/components/RecipeView.vue')
      }
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
