<template>
  <div id="home-page">
      <!--In app.js-->
      <h1 class="logo">ChowNow</h1>
  
      <div style="text-align: center;">
          
          <select name="foodType" id="foodType" v-model="foodType">
              <option value="burger">Burger</option>
              <option value="chicken">Chicken</option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="pasta">Pasta</option>
              <option value="pet">Pet</option>
          </select>
          <br>
          <br>
          <br>
          <br>
          <router-link to="/chow" tag="button">Chow</router-link>
      </div>
      <div>
        <router-link to="/login" tag="button">Log-In</router-link>
        <router-link to="/create" tag="button">Create Account</router-link>
        <router-link to="/users" tag="button">View Account</router-link>
      </div>
  </div>
</template>
  
<script>
  export default {
    name: 'home-page',
    data: function() {
        return {
            name:'',
            foodType:'',
            hasLocation: false,
            x: 0.0000000,
            y: 0.0000000,
        }
    },
    methods: {
        ShowPosition: function(x, y) {
            this.x = x;
            this.y = y;
            console.log(x);
            console.log(y);
            this.hasLocation = true;
        },
        GetUserLocation: function(){
            navigator.geolocation.getCurrentPosition((position) => {
                this.ShowPosition(position.coords.latitude, position.coords.longitude)
            }
            )
        },
        LogUserData: function() {
            this.GetUserLocation();
            console.log(this.foodType);
        },
        
    },
    computed: {

    },
    props: {
    }
  }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    text-align: center;
}
  </style>
  