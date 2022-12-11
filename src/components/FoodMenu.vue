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


        city:'default',
        distance:-1,
        
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

        },

        ], 

    }
      
    },
    created() {
    axios.get("http://localhost:3000/ChowNowDatabase").then((result) => {
      console.log(result.data.data);
      this.tempMenuItems = result.data.data;
      console.log(this.tempMenuItems);
      console.log(this.tempMenuItems[0].F_Name);
      for (let i = 0; i < this.tempMenuItems.length; i++) {
        const name = this.tempMenuItems[0].F_Name;
        const restaurant = this.tempMenuItems[0].R_Name;
        const type = this.tempMenuItems[0].F_Type;
        const calories = this.tempMenuItems[0].F_Calorie;
        const description = this.tempMenuItems[0].F_Desc;
        const price = this.tempMenuItems[0].F_Price;
        const glutenFree = this.tempMenuItems[0].Gluten_Free;
        const vegan = this.tempMenuItems[0].vegan;
        
        AddFoodItem(i, name, restaurant, type, calories, description, price, glutenFree, vegan);

        console.log(this.menuItems[0]);
      }
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

        },
        AddFoodItem: function(index, name, restaurant, type, calories, description, price, glutenFree, vegan) { //Creates new location in array
          this.menuItems[index] = new this.FoodItem(name, restaurant, type, calories, description, price, glutenFree, vegan);
          console.log("Food Added");
        }
        //eyo
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
