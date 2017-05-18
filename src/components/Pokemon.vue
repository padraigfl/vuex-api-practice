<template>
  <div class="pokemon">
    <div class="row">
      <div class="column small-12">
        <router-link
          v-bind:to="{name: 'Pokelist'}"
          >
          Back to list
        </router-link>
      </div>
      <div class="column small-12 pokemon-heading">
        <h1>#{{pokemon.id}}: <strong>{{pokemon.name}}</strong></h1>
      </div>
    </div>

    <div class="row">
    <h3>Types</h3>
    </div>
    <div class="row">
      <div class="column small-12 pokemon-type" v-for="type in pokemon.types" > {{type.type.name}}</div>
    </div>

    <div class="row">
    <h3>Initial Statistics</h3>
    </div>
    <div class="row pokemon-stats" v-for="stat in pokemon.stats">
      <div class="column medium-5 small-8"> {{stat.stat.name}}</div>
      <div class="column medium-3 small-3">{{stat.base_stat}}</div>
    </div>
    <div class="row">
      <div class="column small-2 medium-4 large-6" v-for="sprite in pokemon.sprites" v-show="sprite!==null" >
        <img class="pokemon-sprite" v-bind:src="sprite" />
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'pokemon',
  created () {
    this.$store.dispatch('fetchPokemon',  this.$route.params.id)
  },
  computed: mapGetters({
    pokemon: 'getPokemon'
  }),
  route: {
    canReuse: false
  },
  watch: {
    '$route': function(to, from) {
      if (from.params.id !== to.params.id) {
        //return this.getTasks()
        this.$store.dispatch('fetchPokemon',  this.$route.params.id)
      }
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
