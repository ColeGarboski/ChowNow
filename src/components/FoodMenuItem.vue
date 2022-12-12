<template>
    <div class="menu-item">
        <div class="card">
          <div class="card-image"></div>
        <h2>Big Mac</h2>
        <p>Mcdonald's</p>
        <p>Calories: 500</p>
        <p>Price: $100</p>
        <p>Locations: Manchester, Concord</p>
        <p>Distance: 2mi, 6mi</p>
        <a href="#" class="button-1">Directions</a>
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
}
.card:hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: all 0.7s ease;
}

.card-image {
  height: 170px;
  margin-bottom: 15px;
  background-image: url("https://s3-media0.fl.yelpcdn.com/bphoto/xxXLAvkl6cBSnK4RFmB6Xw/348s.jpg");
  background-size: cover;
  border-radius: 15px 15px 0 0;
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
  </style>
  