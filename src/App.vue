<template>
  <div id="app">
    <div class="row">
      <div class="col-12">
        <nav class="navbar justify-content-between navbar-light bg-dark">
          <strong><a class="navbar-brand navbar-nav mr-auto" href=""></a>Pokemon Not Go!</strong>
          <div scope="public_profile,email" onlogin="checkLoginState()" class="fb-login-button" data-max-rows="1" data-size="small" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>
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
  data() {
    return {

    }
  },
  created () {
    
  },
  computed: mapState([
    'isLogin'
  ]),
  mounted(){
    window.checkLoginState = this.checkLoginState
  },
  methods: {
    checkLoginState () {
      FB.getLoginStatus(function(response) {
        if(response.status === 'connected'){
          FB.login(function (response){
            
          })
        }
      })
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
