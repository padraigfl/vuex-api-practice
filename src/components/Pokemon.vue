<template>
  <div class="pokemon" >
    TESTPAGE
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'hello',
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
