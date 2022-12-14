<template>
    <div class="menu-item">
        <div>
          <div class="card-image" :style="cardImageBackground(foodItem.Food_Img)"></div>
          <div class="cardtext">
        <h2>{{ foodItem.name }}</h2>
       
        <p>{{ foodItem.restaurant }}</p>
        <p>Calories: {{ foodItem.calories }}</p>
        <p>Price: ${{ foodItem.price }}</p>
        <p>Locations: {{ foodItem.locations[0].city }}, {{ foodItem.locations[1].city }}</p>
        <p>Distance: {{ Math.round(foodItem.locations[0].distanceFromUser) }}mi, {{ Math.round(foodItem.locations[1].distanceFromUser) }}mi</p>
      </div>
        <a href="#" class="button-1">Directions</a>
        </div>

      </div>
  </template>
  
  <script>
  export default {
    name: 'food-menu-item',
    data: function(){
      return {
          
      }
        
      },
      methods: {
          cardImageBackground(src) {

            console.log(src);
            
            return {
                backgroundImage: `url("${src}")`,
            }
          
        }
          //eyo
      },
      computed: {
      
      },
    props: {
      foodItem: Object,

    },

    
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  *{
   margin: 0;
   padding: 0;
   font-family: sans-serif;
   box-sizing: border-box;
  }
  body {
    background: black;
  }
  p{
    text-align: left;
    padding-left: 10px;
    padding-top: 2.5px;
  }

.card{
  background: white;
  width: 270px;
  height: 400px;
  margin: 10px;
  border-radius: 15px;
  text-align: center;
  display: block;
  transition: all 0.7s ease-in-out;
}
.card:hover{
  cursor: pointer;
  transform: scale(1.1);
  
}

.card-image {
  height: 170px;
  margin-bottom: 15px;
  background-size: cover;
  border-radius: 15px 15px 0 0;
  width: 270px
}
.button-1 {
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 35px;
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
.cardtext{
  overflow: auto;
  height: 130px;
}
  </style>
  