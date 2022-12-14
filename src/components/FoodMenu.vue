<template>
  <div id="food-menu"> <!--In app.js-->
    <head>
    <title>ChowNow</title>
  </head>
  <body>
    <div class="banner">
      <div class="navbar">
        <h1 class ="logo">ChowNow</h1>
        <ul>
          <li><button @click="FlipGluten" class="button-1">GLUTEN FREE</button></li>
          <li><button @click="FlipVegan" class="button-1">VEGAN</button></li>
          <li><a href="/" class="button-1">Look for Different Food</a></li>
        </ul>
      </div>
      <div class="content">
        <h1>Now its time to decide...</h1>
        <p>Below you will find an assortment of cards that are organized for your viewing</p>
      </div>
      <div>
        <section class="container">
      <div v-for="foodItem in this.menuItems" :key="foodItem.name"> 
        <FoodMenuItem v-if="IsReallyEqual($route.params.foodType, foodItem.type, isGlutenFree, foodItem.glutenFree, isVegan, foodItem.vegan)"
                             class="card" :foodItem="foodItem"></FoodMenuItem>
                             <!--<FoodMenuItem v-if="(IsEqual($route.params.foodType, foodItem.type)) && 
                            (foodItem.glutenFree == this.isGlutenFree) && 
                            (foodItem.vegan == this.isVegan)"
                             class="card" :foodItem="foodItem"></FoodMenuItem>-->
      </div>
    </section>
        </div>
    </div>
  </body>


      
</div>

</template>

<script>
import FoodMenuItem from '@/components/FoodMenuItem';
import axios from "axios";

export default {
  name: 'food-menu',
  data: function(){
    return {
        userLat: 0.0000000,
        userLng: 0.0000000,

        typeBurger: false,
        typeChicken: false,
        typeTacos: false,
        typeSub: false,
        typePasta: false,
        isGlutenFree: false,
        isVegan: false,

        createdFoods: [],
        tempMenuItems: [],
        menuItems: [
        {
          foodName: "null",
          restaurantName: "null",
          foodType: "null",
          calories: -1,
          description: "null",
          price: -1.0,
          glutenFree: -1,
          vegan: -1,
          numLocations: 0,
          locations: [
            {
              lat: -1,
              lng: -1,
              city: "null",
              distanceFromUser: -1
            },
          ],

        },

        ], 

    }
      
    },
    created() {

    this.GetUserLocation();
    console.log("Lat:" + this.userLat);
    console.log("Long:" + this.userLng);
    
    axios.get("http://localhost:3000/ChowNowDatabase").then((result) => {

      
      console.log(result.data.data);
      this.tempMenuItems = result.data.data;
      console.log(this.tempMenuItems);
      let j = 0;
      for (let i = 0; i < this.tempMenuItems.length; i++) {
        if (!(this.createdFoods.includes(this.tempMenuItems[i].F_Name))) { //If food item has not been created, create it
          const name = this.tempMenuItems[i].F_Name;
          const restaurant = this.tempMenuItems[i].R_Name;
          const type = this.tempMenuItems[i].F_Type;
          const calories = this.tempMenuItems[i].F_Calorie;
          const description = this.tempMenuItems[i].F_Desc;
          const price = this.tempMenuItems[i].F_Price;
          const glutenFree = this.tempMenuItems[i].Gluten_Free;
          const vegan = this.tempMenuItems[i].Vegan;
          const image = this.tempMenuItems[i].Food_Img;

          
          this.AddFoodItem(j, name, restaurant, type, calories, description, price, glutenFree, vegan, image);
          console.log(this.menuItems[j]);

          j++;

        }
        
      }

      console.log(this.menuItems);
      console.log(this.createdFoods);

      for (let i = 0; i < this.tempMenuItems.length; i++) {
        if (this.createdFoods.includes(this.tempMenuItems[i].F_Name)) { //If food item has been created, add location to it
          for (let k = 0; k < this.menuItems.length; k++) {
            if (this.menuItems[k].name == this.tempMenuItems[i].F_Name) {
              this.menuItems[k].numLocations++;
              const location = {
                  lat: this.tempMenuItems[i].R_lat,
                  lng: this.tempMenuItems[i].R_long,
                  city: this.tempMenuItems[i].R_city,
                  distanceFromUser: this.GetDistance(this.userLat, this.userLng, this.tempMenuItems[i].R_lat, this.tempMenuItems[i].R_long)
              };
              this.menuItems[k].locations.push(location);
              console.log("Location added to " + this.menuItems[k]);
              console.log(this.menuItems[k]);
            }
          }
        }
      }

      console.log(this.menuItems);

      this.FlipGluten(); //Fixes the card update issue lol
      this.FlipGluten();
      
    })
    },
    methods: {
        FoodItem: function(name, restaurant, type, calories, description, price, glutenFree, vegan, image) {
            this.name = name;
            this.restaurant = restaurant;
            this.type = type;
            this.calories = calories;
            this.description = description;
            this.price = price;
            this.glutenFree = glutenFree;
            this.vegan = vegan;
            this.numLocations = 0;
            this.Food_Img = image;
            this.locations = [
              {
                lat: -1,
                lng: -1,
                city: "null",
                distanceFromUser: -1
              },
            ];

        },
        AddFoodItem: function(index, name, restaurant, type, calories, description, price, glutenFree, vegan, image) { //Creates new location in array
          this.menuItems[index] = new this.FoodItem(name, restaurant, type, calories, description, price, glutenFree, vegan, image);
          this.createdFoods.push(name);
          this.menuItems[index].locations.length = 0;
          console.log("Food Added at index " + index);
        },
        //eyo
        Location: function(city, distanceFromUser, lat, long) {
              this.lat = lat;
              this.long = long;
              this.city = city;
              this.distanceFromUser = distanceFromUser; //Calculate Me
              console.log(city);
              console.log(distanceFromUser);
          },
          AddLocation: function(city, distanceFromUser, lat, long) { //Creates new location in array
              if (this.menuItem.numLocations < 3) {
                  this.menuItem.locations[this.menuItem.numLocations] = new this.Location(city, distanceFromUser, lat, long);
                  this.menuItem.numLocations++;
              }
          },
        FlipGluten: function() {
          this.isGlutenFree = !this.isGlutenFree;
        },
        FlipVegan: function() {
          this.isVegan = !this.isVegan;
        },
        GetDistance: function (userLat, userLng, restaurantLat, restaurantLng) {
          // Convert the latitudes and longitudes from degrees to radians
          const userLatRadians = (userLat * Math.PI) / 180;
          const userLngRadians = (userLng * Math.PI) / 180;
          const restaurantLatRadians = (restaurantLat * Math.PI) / 180;
          const restaurantLngRadians = (restaurantLng * Math.PI) / 180;

          // Calculate the difference between the latitudes and longitudes
          const latDiff = restaurantLatRadians - userLatRadians;
          const lngDiff = restaurantLngRadians - userLngRadians;

          // Use the Haversine formula to calculate the distance between the two points
          const a =
            Math.pow(Math.sin(latDiff / 2), 2) +
            Math.cos(userLatRadians) * Math.cos(restaurantLatRadians) * Math.pow(Math.sin(lngDiff / 2), 2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          const EARTH_RADIUS_IN_MILES = 3959;
          const distance = EARTH_RADIUS_IN_MILES * c;

          return distance;
        },
        GetUserLocation: function(){
            navigator.geolocation.getCurrentPosition((position) => {
                this.userLat = position.coords.latitude;
                this.userLng = position.coords.longitude;
            });
        },
        IsEqual: function(lhs, rhs) {
          console.log("if");
          console.log(lhs + " " + rhs);
          if (lhs == rhs) {
            return true;
          }
          else {
            return false;
          }
        },
        IsReallyEqual: function(one, two, three, four, five, six) {
          console.log(one);
          console.log(two);
          console.log(three);
          console.log(four);
          console.log(five);
          console.log(six);
          
          const temp1 = this.IsEqual(one, two);
          const temp2 = this.IsEqual(three, four);
          const temp3 = this.IsEqual(five, six);

          if (temp1 && temp2 && temp3) {
            return true;
          }
          else {
            return false;
          }
        }

    },
    computed: {

    },
  components: {
    FoodMenuItem
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
body {
  
}
.card{
  display: flex;
  justify-content: center;
}
.container {
  margin-top: 150px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.button-1{
  background-color: #f64c72;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-1:hover,
.button-1:focus {
  background-color: #F082AC;
}
.banner{
  background-image: url('assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 140vh;
  
}
.logo{
  width: 120px;
  color: #f64c72;
  cursor: pointer;
}
.navbar{
  width: 85%;
  margin: auto;
  margin-bottom: 80px;
  padding: 35px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
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
  bottom: -10px;
  transition: 0.5s;
}
.navbar ul li:hover::after{
  width: 100%;
}
.navbar ul li:click{
  width: 100%;
}
.content{
  width: 100%;
  position: absolute;
  top: 17.5%;
  transform: translateY(-50%);
  text-align: center;
  color: #000000;
  margin-top: 30px;
}
.content h1{
  font-size: 70px;
  color:#f64c72
}
.content p{
  margin: 20px auto;
  font-weight: 100;
  line-height: 25px;
  color: white;
}

.filters {
  margin-bottom: 80px;
}

</style>
