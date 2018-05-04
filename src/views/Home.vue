<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-3 col-sm-12"></div>
      <div class="col-lg-6 col-sm-12">
        <button class="btn btn-outline-warning m-3" @click="gotoProfile">View your Pokemon</button>
        <button class="btn btn-outline-danger m-3" @click="exploreMap">Explore!</button>
        <div class="col-12">
          <h3 class="mt-3">Hello, {{user.name}}</h3>
          <h4>Today's weather is {{currentWeather}}</h4>
        </div>
      </div>
      <div class="col-lg-3 col-sm-12"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'user', 'currentWeather'
  ]),
  created () {
    if(!localStorage.getItem('jwtToken')){
      this.$router.push('/')
    } else {
      this.$store.dispatch('getWeatherData')
    }
  },
  methods: {
    gotoProfile () {
      this.$router.push('/profile')
    },
    exploreMap () {
      this.$router.push('/explore')
    }
  }
}
</script>

<style>
  
</style>
