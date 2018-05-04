<template>
  <div id="app">
    <div class="row">
      <div class="col-12">
        <nav class="navbar justify-content-between navbar-light bg-dark">
          <strong><a class="navbar-brand navbar-nav mr-auto" href=""></a>Pokemon Not Go!</strong>
          <button v-if="isLogin" class="btn btn-outline-light my-0" @click="gotoHome">Home</button>
          <button v-if="isLogin" type="button" class="btn btn-danger my-2 my-sm-0" @click="doLogout">Logout</button>
          <button v-else-if="!isLogin" type="button" scope="public_profile, email, gender" class="btn btn-primary my-2 my-sm-0" @click="openFbLoginDialog">Facebook Login</button>
        </nav>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

 window.fbAsyncInit = function() {
    FB.init({
      appId      : '1767025910031278',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.0'
    });
      
    FB.AppEvents.logPageView()  
      
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'))

export default {
  computed: mapState([
    'isLogin'
  ]),
  methods: {
    openFbLoginDialog () {
      FB.login(this.checkLoginState, { scope: 'email' })
    },
    checkLoginState: function (response) {
      let self = this
      if (response.status === 'connected') {
        FB.api('me', { fields: ['id','name', 'email', 'gender', 'link'] }, function(profile) {
          self.$store.dispatch('loginUser', profile)
          self.$store.commit('setLogin')
          self.$router.push('/home')
        });
      } else if (response.status === 'not_authorized') {
        // the user is logged in to Facebook, 
        // but has not authenticated your app
      } else {
        // the user isn't logged in to Facebook.
        alert('Please login!')
        self.$router.push('/')
      }
    },
    doLogout () {
      localStorage.removeItem('FBToken')
      this.$store.commit('setLogout')
      this.$router.push('/')
    },
    gotoHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

strong {
  color: white;
  font-family: 'Skranji', cursive;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
