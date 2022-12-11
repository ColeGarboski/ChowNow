<template>
    <div class="menu-item">
        <img class="food-image" src="src/assets/burger.png" alt="Burger" width="500" height="600" />
        <div class="food-attributes">
          <h2 style="text-align:center;">{{ foodName }}</h2> <!-- make dynamic font size-->
          <ul>
            <li>{{ restaurant }}</li>
            <li>{{ foodType }}</li>
            <li>{{ calories }} cal</li>
            <li>${{ price }}</li>
          </ul>
          <ul>
            <li v-for="location in menuItem.locations" :key="location">
              {{ locations }} ({{ locations }} mi)
            </li>
          </ul>
    
        </div>
        <div class="food-description">
          <h1>{{ description }}</h1> <!-- make dynamic font size-->
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name: 'food-menu-item',
    data: function(){
      return {
          city:'default',
          distance:-1,
          menuItem: {
              name:'Big Mac',
              restaurant:'McDonalds',
              foodType:'Burger',
              calories:600,
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
              glutenFree: true,
              vegan: false,
              price: 4.99,
  
          },
  
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
      foodItem: Object,

    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
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
  