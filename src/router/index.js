import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactsList from '../views/ContactsList.vue'
import ContactChange from '../views/ContactChange.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ContactsList',
    component: ContactsList
  },
  {
    path: '/contact/:id',
    name: 'ContactChange',
    component: ContactChange
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
