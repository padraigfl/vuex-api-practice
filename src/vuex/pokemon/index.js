import * as actions from './action';
import * as getters from './getter';

import {
  FETCH_POKELIST,
  FETCH_POKEMON,
  GETTING,
  POKE_ERROR
} from './constants'

// initial state
const initialState = {
  pokelist: [],
  pokemon: {},
  isFetching: false,
  error: ""
}

// mutations
const mutations = {
  [FETCH_POKELIST] (state, pokelist){
    state.pokelist = pokelist,
    state.isFetching = false
  },
  [FETCH_POKEMON] (state, pokemon){
    state.pokemon = pokemon
    state.isFetching = false
  },
  [GETTING] (state){
    state.isFetching = true
  },
  [POKE_ERROR](state){
    state.error = message
  }
}

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
