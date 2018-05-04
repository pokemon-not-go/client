<template>
  <div class="explore">
    <h3 class="mt-5">You Found a Wild Pokemon!</h3>
    <div class="mainBody">
      <h4>{{pokemon.name}}</h4>
      <img class="pokemonImg" :src="pokemon.sprite">
      <button class="btn btn-danger mt-3" @click="catchThatPokemon">Catch!</button>
      <button class="btn btn-primary mt-2" @click="gotoHome">Run!</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  created() {
    this.$store.dispatch('findPokemon', this.currentWeather)
  },
  computed: mapState([
    'pokemon', 'currentWeather', 'user'
  ]),
  methods: {
    gotoHome () {
      this.$router.push('/home')
    },
    catchThatPokemon () {
      let payload = {
        pokemon: this.pokemon.name,
        userId: this.user._id
      }
      console.log('masuk sini', payload)
      this.$store.dispatch('catchPokemon', payload)
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

  .mainBody{
    display: flex;
    flex-direction: column;
    height: 50rem;
    right: 50%;
    justify-content: center;
    margin: auto;
    width: 30rem;
  }
  .exploring{
    height:100%;
    width: 100%;
  }

  .pokemonImg{
    height: auto;
    width: 100%;
  }

  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
