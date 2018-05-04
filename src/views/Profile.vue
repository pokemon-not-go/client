<template>
  <div class="profile">
    <div class="row">
      <div class="col-lg-6 col-xs-12">
        <img src="../assets/TrainerMale.png">
      </div>
      <div class="col-lg-6 col-xs-12 mt-3">
        <h4>Trainer Profile</h4>
        <div class="divtable mt-3">
          <table class="table table-bordered table-dark">
            <tr>
              <th scope="row">Name</th>
              <td>{{user.name}}</td>
            </tr>
            <tr>
              <th scope="row">Started Journey At</th>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-12">
        <h3>List Of Pokemons Obtained</h3>
        <div class="col-lg-3 col-sm-6 col-xs-12">
          <div class="polaroid">
            <img src="" alt="">
            <div class="container">
              <p>Pokemon Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'user'
  ]),
}
</script>

<style>
  img{
    width: 8rem;
    height: auto;
    margin: 3%
  }

  .divtable{
    width: 30rem
  }
  
  div.polaroid{
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
    margin-top: 20px;
  }

  div.container {
      text-align: center;
      padding: 0px;
  }
</style>
