import Vue from 'vue'
import Vuex from 'vuex'

import pokemons from './pokemon'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    pokemons
  },
  strict: debug,
})
