<template>
  <div class="home">
    <img src="../assets/logo.png">
    <h1 class="titleScreen">Simple Pokemon Catching Game</h1>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  created() {
    if(localStorage.getItem('FBToken') != null){
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
img{
  height: 12rem;
  width: auto;
  margin: 5%
}

.titleScreen{
  font-family: 'Skranji', cursive;
}
</style>

