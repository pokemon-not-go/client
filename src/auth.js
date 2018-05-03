export default {
  facebookLogin (data, callback) {
    FB.api(
      '/me',
      'GET',
      {'fields': 'email'},
      function (FBResponse) {
        Vue.http.post('fb-login', {email: FBResponse.email, userID: data.userID}).then(
          (response) => {
            store.commit('SET_USER', response.body.data.user)
            store.commit('SET_TOKEN', response.body.data.token)

            // Store token in local storage
            if (window.localStorage) window.localStorage.setItem('token', response.body.data.token)
            callback()
          }
        )// this.$http.post
      }
    ) // FB.api
  }
}