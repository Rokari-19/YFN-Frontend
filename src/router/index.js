import { createRouter, createWebHistory } from 'vue-router'
import Waitlist from '@/views/Waitlist.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/waitlist',
    name: 'Waitlist',
    component: Waitlist
  },
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
