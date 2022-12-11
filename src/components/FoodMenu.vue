<template>
  <div id="food-menu"> <!--In app.js-->
    <h1 class="logo" style="text-align:left;">ChowNow</h1>
      <div class="filters">
        <input type="checkbox" id="burger" name="burger" v-model="typeBurger">
        <label for="burger"> Hamburger (numNearby) {{ typeBurger }}</label>
        <br>
        <input type="checkbox" id="chicken" name="chicken" v-model="typeChicken">
        <label for="chicken"> Chicken (numNearby) {{ typeChicken }}</label>
        <br>
        <input type="checkbox" id="salad" name="salad" v-model="typeSalad">
        <label for="salad"> Salad (numNearby) {{ typeSalad }}</label>
        <br>
        <input type="checkbox" id="pizza" name="pizza" v-model="typePizza">
        <label for="pizza"> Pizza (numNearby) {{ typePizza }}</label>
        <br>
        <input type="checkbox" id="pasta" name="pasta" v-model="typePasta">
        <label for="pasta"> Pasta (numNearby) {{ typePasta }}</label>
        <br>
        <input type="checkbox" id="gluten" name="gluten" v-model="isGlutenFree">
        <label for="gluten"> Gluten Free {{ isGlutenFree }}</label>
        <br>
        <input type="checkbox" id="vegan" name="vegan" v-model="isVegan">
        <label for="vegan"> Vegan {{ isVegan }}</label>
        <br>
        
      </div>
      <div v-for="(foodItem, index) in this.menuItems" :key="index">
        <FoodMenuItem :foodItem="foodItem"></FoodMenuItem>

      </div>
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
.filters {
    float: left;
    height: 700px;
    width: 200px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color:rgb(172, 165, 165);
    text-align: left;
    text-decoration: underline;
    font-size: large;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
