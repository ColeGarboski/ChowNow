<template>
<div id="landing">
  <head>
    <title>ChowNow</title>
  </head>
  <body>
    <div class="banner">
      <div class="navbar">
        <h1 class ="logo">ChowNow</h1>
        <ul>
          <li><a href="#">Sign up</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="content">
        <h1>Hungry?<br>Find your way to food fast!</h1>
        <p>Click your desired food below:<br>We will find you all available options along with the distance to each!</p>
        <div>
          <router-link to="/chow/burger" tag="button">Burger</router-link>
          <router-link to="/chow/chicken" tag="button">Chicken</router-link>
          <router-link to="/chow/tacos" tag="button">Tacos</router-link>
          <router-link to="/chow/sub" tag="button">Sub</router-link>
        </div>
      </div>
    </div>
  </body>
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
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.banner{
  width: 100%;
  height: 100vh;
  background: #2f2fa2;
  background-image: url('assets/bg.jpg');
  background-size: cover;
  background-position: center;
}
.navbar{
  width: 85%;
  margin: auto;
  padding: 35px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{
  width: 120px;
  color: #f64c72;
  cursor: pointer;
}
.navbar ul li{
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  position: relative;
}
.navbar ul li a{
  text-decoration: none;
  color: white;
  text-transform:  uppercase;  
}
.navbar ul li::after{
  content: '';
  height: 3px;
  width: 0%;
  background: #f64c72;
  position: absolute;
  left: 0;  
  bottom: -5px;
  transition: 0.5s;
}
.navbar ul li:hover::after{
  width: 100%;

}
.content{
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: #000000
}
.content h1{
  font-size: 70px;
  margin-top: 80px;
  color:#f64c72
}
.content p{
  margin: 20px auto;
  font-weight: 100;
  line-height: 25px;
  color: white;
}
button{
  width: 200px;
  padding: 15px 0;
  text-align: center;
  margin: 20px 10px;
  border-radius: 25px;
  font-weight: bold;
  border: 2px solid #f64c72;
  background: transparent;
  color: white;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
span{
  background: #f64c72;
  height: 100%;
  width: 0%;
  border-radius: 25px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  transition: 0.5s;
}
button:hover {
 
  background-color: #f64c72;

}
button:hover{
  border: none;
}
</style>