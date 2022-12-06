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
      <div>
        <FoodMenuItem></FoodMenuItem> <!--https://www.smashingmagazine.com/2020/01/data-components-vue-js/   Use props to create components-->
        <FoodMenuItem></FoodMenuItem>
        <FoodMenuItem></FoodMenuItem>
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
        
    }
      
    },
    created() {
    axios.get("http://localhost:3000/ChowNowDatabase").then((result) => {
      console.log(result.data);
    })
    },
    methods: {
        Location: function(city, distanceFromUser) {
            this.city = city;
            this.distanceFromUser = distanceFromUser; //Calculate Me
            console.log(city);
            console.log(distanceFromUser);
        },
        AddLocation: function(city, distanceFromUser) { //Creates new location in array
            if (this.menuItem.numLocations < 3) {
                this.menuItem.locations[this.menuItem.numLocations] = new this.Location(city, distanceFromUser);
                this.menuItem.numLocations++;
            }
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
