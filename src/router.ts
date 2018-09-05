import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  base: './',
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('./views/welcome/Welcome.vue')
    }
  ]
})
