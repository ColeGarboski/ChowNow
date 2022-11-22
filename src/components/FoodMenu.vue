<template>
  <div id="food-menu"> <!--In app.js-->
    <h1 class="logo" style="text-align:left;">ChowNow</h1>
      <div class="filters">
        <input type="checkbox" id="gluten" name="gluten" v-model="isGlutenFree">
        <label for="gluten"> Gluten Free {{ isGlutenFree }}</label>
        <br>
        <input type="checkbox" id="vegan" name="vegan" v-model="isVegan">
        <label for="vegan"> Vegan {{ isVegan }}</label>
        <br>
        <input type="checkbox" id="pet" name="pet" v-model="isForPets">
        <label for="pet"> Pet Food {{ isForPets }}</label>
        <br>
      </div>
      <div class="menu-item"> <!--put into vue component-->
        <img class="food-image" src="src/assets/burger.png" alt="Burger" width="500" height="600" />
        <div class="food-attributes">
          <h2 style="text-align:center;">{{ menuItem.name }}</h2> <!-- make dynamic font size-->
          <ul>
            <li>{{ menuItem.restaurant }}</li>
            <li>{{ menuItem.foodType }}</li>
            <li>{{ menuItem.calories }} cal</li>
          </ul>
          <ul>
            <li v-for="location in menuItem.locations" :key="location">
              {{ location.city }} ({{ location.distanceFromUser }} mi)
            </li>
          </ul>
    
        </div>
        <div class="food-description">
          <h1>{{ menuItem.description }}</h1> <!-- make dynamic font size-->
        </div>
      </div> <!--put into vue component-->
      <div>
        <input type="text" name="cityinput" v-model="city">
        <label for="cityinput">city</label>
        <input type="text" name="distanceinput" v-model="distance">
        <label for="distanceinput">distance</label>
        <button v-on:click="AddLocation(city, distance)">Add Location</button>   
      </div> 
  </div>
</template>

<script>
export default {
  name: 'food-menu',
  data: function(){
    return {
        isGlutenFree: false,
        isVegan: false,
        isForPets: false,
        city:'default',
        distance:-1,
        menuItem: {
            name:'Big Mac',
            restaurant:'McDonalds',
            foodType:'Burger',
            calories:600,
            location: {
                city:'Manchester',
                distanceFromUser:2, //Calculate me
            },
            numLocations:2,
            locations: [ //Play with having multiple location objects within here
                {
                    city: 'Manchester',
                    distanceFromUser: 2
                },
                {
                    city: 'Concord',
                    distanceFromUser: 6
                }



            ],
            description: 'mcdonalds new burger',

        },
        menuItems: [ //Will render a menu item component for each object within this dataset
            '1', 
            '2', 
            '3',
            '4',
            '5',
            '6',

        ],

    }
      
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
  props: {
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
.menu-item {
    position: relative;
    float: left;
    width: 370px;
    height: 250px;
    padding: 10px;
    border: 2px inset rgb(64, 64, 64); 
    margin-left: 20px;
    margin-top: 5px;
}
.food-image {
    position: absolute;

    width: 185px;
    height: 125px;
}
.food-attributes {
    position: absolute;
    right: 10px;
    height: 220px;
    width: 185px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.food-description {
    position: absolute;
    bottom: 10px;
    width: 185px;
    height: 125px;
}
</style>
