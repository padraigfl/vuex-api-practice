<template>
  <section>
  <div class="pokelist row text-center">
    <div class="small-6 text-right">
      <a href="#"
        v-if="pokelist.previous!==null"
        v-on:click.prevent="getNewPage(pokelist.previous.split('=')[1])"
        class="pokelink"
        id="pokelink-prev">
        Previous Page
      </a>
    </div>
    <div class="small-6 text-left">
      <a href="#"
        v-if="pokelist.next!==null"
        v-on:click.prevent="getNewPage(pokelist.next.split('=')[1])"
        class="pokelink"
        id="pokelink-next"
        @click="loader">
        Next Page
      </a>
    </div>
    <div class="small-12 page-count"> Page {{pagenumber}} of {{Math.ceil(pokelist.count/20)}}</div>
  </div>
  <div class="row pokelist">
    <div v-for="pokemon in pokelist.results" class="medium-4 small-12 columns">
      <router-link
        v-bind:to="{name: 'Pokemon', params: {id: pokemon.name}}"
        class="pokelist-entry"
        >
        {{pokemon.name}}
      </router-link>
    </div>
  </div>
  <!--<div v-show="isLoading">Loading</div>-->
  </section>
</template>

<script>

import { mapGetters } from 'vuex'

import '../styles/pokelist.css';

export default {
  name: 'Pokelist',
  computed: mapGetters({
    pokelist: 'getPokelist',
    pokemon: 'clearPokemon'
  }),
  methods: {
    getNewPage(page){
      this.pagenumber = ((parseInt(page)+20) / 20)
      this.$store.dispatch('fetchPokelist', page)
      this.isLoading = false
    },
    loader(){
      this.isLoading = true
    }
  },
  data() {
    return{
      pagenumber: 1,
      isLoading: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
