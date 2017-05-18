import Vue from 'vue'
import Router from 'vue-router'
import Pokelist from '@/components/Pokelist'
import Pokemon from '@/components/Pokemon'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      name: 'Pokelist',
      alias: ['/', '/pokelist', '/pokemon'],
      component: Pokelist
    },
    {
      path: '/pokemon/:id',
      name: 'Pokemon',
      component: Pokemon
    },
    {
      path: '*',
      name: "Page Not Found",
      component: NotFound
    }
  ]
})
