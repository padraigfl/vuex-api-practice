import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pokemon from '@/components/Pokemon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      name: 'Pokedex',
      alias: ['/', '/pokelist', '/pokemon'],
      component: Hello
    },
    {
      path: '/pokemon/:id',
      name: 'Pokemon',
      component: Pokemon
    }
  ]
})
