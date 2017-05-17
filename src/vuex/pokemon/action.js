import uuid from 'uuid';
import axios from 'axios';

import {
 FETCH_POKELIST,
 FETCH_POKEMON,
 GETTING,
 POKE_ERROR
} from './constants';

const API_URL = 'http://pokeapi.co/api/v2/';

export function fetchPokelist({commit}){
  axios.get((API_URL+'pokemon'))
    .then((response) => {
    commit(GETTING),
    commit(FETCH_POKELIST, response.data)
  }, (err) => {
    console.log(err),
    commit(POKE_ERROR)
  })
}

export function fetchPokemon({commit}, name){
  axios.get((API_URL+'pokemon/'+name))
    .then((response) => {
      commit(GETTING),
      commit(FETCH_POKEMON, response.data)
  }, (err) => {
    console.log(err),
    commit(POKE_ERROR, err)
  })
}

