<template>
    <div class="menu-item">
        <div class="card">
          <div :class="cardImage"></div>
        <h2>{{ foodItem.name }}</h2>
        <p>{{ foodItem.restaurant }}</p>
        <p>Calories: {{ foodItem.calories }}</p>
        <p>Price: ${{ foodItem.price }}</p>
        <p>Locations: {{ foodItem.locations[0].city }}, {{ foodItem.locations[1].city }}</p>
        <p>Distance: {{ Math.round(foodItem.locations[0].distanceFromUser) }}mi, {{ Math.round(foodItem.locations[1].distanceFromUser) }}mi</p>
        <a class="button-1">Directions</a>
        </div>

      </div>
  </template>
  
  <script>
  export default {
    name: 'food-menu-item',
    data: function(){
      return {
          cardImage: "card-image-burger",
      }
        
      },
      created() {
        if (this.foodItem.type == "burger") {
          this.cardImage = "card-image-burger";
        }
        else if (this.foodItem.type == "pasta") {
          this.cardImage = "card-image-pasta";
        }
        else if (this.foodItem.type == "chicken") {
          this.cardImage = "card-image-chicken";
        }
        else if (this.foodItem.type == "tacos") {
          this.cardImage = "card-image-tacos";
        }
        else if (this.foodItem.type == "sub") {
          this.cardImage = "card-image-sub";
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

.card-image-burger {
  height: 170px;
  margin-bottom: 15px;
  background-image: url("https://s3-media0.fl.yelpcdn.com/bphoto/xxXLAvkl6cBSnK4RFmB6Xw/348s.jpg");
  background-size: cover;
  border-radius: 15px 15px 0 0;
}
.card-image-pasta {
  height: 170px;
  margin-bottom: 15px;
  background-image: url("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.616.493.suffix/1615916524567.jpeg");
  background-size: cover;
  border-radius: 15px 15px 0 0;
}
.card-image-chicken {
  height: 170px;
  margin-bottom: 15px;
  background-image: url("https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg");
  background-size: cover;
  border-radius: 15px 15px 0 0;
}
.card-image-tacos {
  height: 170px;
  margin-bottom: 15px;
  background-image: url("https://divascancook.com/wp-content/uploads/2022/06/crockot-chicken-tacos.jpg");
  background-size: cover;
  border-radius: 15px 15px 0 0;
}
.card-image-sub {
  height: 170px;
  margin-bottom: 15px;
  background-image: url("https://www.simplyrecipes.com/thmb/vvNq-kxnOSuwY3oV-axDOwzpxFA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__06__Italian-Party-Sub-LEAD-2-33a2a94b8bea47778eaaecfd91818d0b.jpg");
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
  