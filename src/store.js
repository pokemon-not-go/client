import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {},
    token: '',
    currentWeather: '',
    pokemon: {},
  },
  mutations: {
    setUserData (state, userData) {
      state.user = userData.data.data
    },
    setLogin (state) {
      state.isLogin = true
    },
    setLogout (state) {
      state.isLogin = false
    },
    setWeather (state, weatherData){
      state.currentWeather = weatherData.data.currentWeather
    },
    setPokemon (state, pokemon){
      state.pokemon = pokemon.data.data
    },
  },
  actions: {
    getWeatherData ({commit}) {
      axios.get('http://localhost:3000/index/weather')
      .then(function(weatherData){
        console.log(weatherData)
        commit('setWeather', weatherData)
      })
      .catch(function(err){
        alert(err.message)
        console.log(err)
      })
    },
    loginUser ({commit}, profile) {
      axios.post('http://localhost:3000/index/login', {fbId: profile.id, name: profile.name, email: profile.email})
      .then(function(response){
        commit('setUserData', response)
        localStorage.setItem('jwtToken', response.data.token)
      })
      .catch(function(err){
        alert('something went wrong')
        console.log(err)
      })
    },
    findPokemon ({commit}, weather) {
      axios.post('http://localhost:3000/pokemon/get-pokemon', {weather: weather})
      .then(function(response){
        commit('setPokemon', response)
      })
      .catch(function(err){
        alert(err.message),
        console.log(err)
      })
    },
    catchPokemon ({dispatch}, payload) {
      console.log('ini payload di action=====', payload)
      axios.put('http://localhost:3000/pokemon/catch', {pokemon: payload.pokemon, id: payload.userId})
      .then(function(response){
        if(response.data.message != 'Success capture a pokemon'){
          alert(response.data.message)
        }else{
          alert(response.data.message)
          dispatch('getUserData', payload.userId)
        }
      })
      .catch(function(err){
        alert('error when capturing pokemon')
        console.log(err)
      })
    },
    getUserData ({commit}, userId) {
      axios.get(`http://localhost:3000/index/user/${userId}`)
      .then(function(userData){
        commit('setUserData', userData)
      })
      .catch(function(err){
        alert('Error while getting user data')
        console.log(err)
      })
    }
  }
})
