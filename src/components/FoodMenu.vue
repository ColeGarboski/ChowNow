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
          <li><button class="button-1" type="button" onclick="isGlutenFree=true">Gluten Free</button></li>
          <li><button class="button-1" role="button">Vegan</button></li>
          <li><button class="button-1" role="button">Look for different food</button></li>
        </ul>
      </div>
      <div class="content">
        <h1>Now its time to decide...</h1>
        <p>Below you will find an assortment of cards that are organized for your viewing</p>
      </div>
      <div class ="card" v-for="(foodItem, index) in this.menuItems" :key="index">
        <FoodMenuItem :foodItem="foodItem"></FoodMenuItem>

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
        typeBurger: false,
        typeChicken: false,
        typeSalad: false,
        typePizza: false,
        typePasta: false,
        isGlutenFree: false,
        isVegan: false,
        isForPets: false,

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
          
          this.AddFoodItem(j, name, restaurant, type, calories, description, price, glutenFree, vegan);
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
                  distanceFromUser: -1,
              };
              this.menuItems[k].locations.push(location);
              console.log("Location added to " + this.menuItems[k]);
              console.log(this.menuItems[k]);
            }
          }
        }
      }

      console.log(this.menuItems);

    })
    },
    methods: {
        FoodItem: function(name, restaurant, type, calories, description, price, glutenFree, vegan) {
            this.name = name;
            this.restaurant = restaurant;
            this.type = type;
            this.calories = calories;
            this.description = description;
            this.price = price;
            this.glutenFree = glutenFree;
            this.vegan = vegan;
            this.numLocations = 0;
            this.locations = [
              {
                lat: -1,
                lng: -1,
                city: "null",
                distanceFromUser: -1
              },
            ];

        },
        AddFoodItem: function(index, name, restaurant, type, calories, description, price, glutenFree, vegan) { //Creates new location in array
          this.menuItems[index] = new this.FoodItem(name, restaurant, type, calories, description, price, glutenFree, vegan);
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
          }
    },
    computed: {

    },
  components: {
    FoodMenuItem
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
.card{
  margin-top: 200px;
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
  background-color: #FFFFFF;
}

.banner{
  width: 100%;
  height: 100vh;
  background-image: url('assets/bg.jpg');
  background-size: cover;
  background-position: center;
}
.logo{
  width: 120px;
  color: #f64c72;
  cursor: pointer;
}
.navbar{
  width: 85%;
  margin: auto;
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
</style>
