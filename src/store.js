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
    }
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
    }
  }
})
