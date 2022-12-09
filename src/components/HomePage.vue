<template>
<div class="center background" id="landing">
<div>
<nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <a href="#"><li>Sign up</li></a>
      <a href="#"><li>Login</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Contact</li></a>
    </ul>
  </div>
</nav>
<head>
  <title>ChowNow</title>
</head>
<body>
  <header>
      <h1>ChowNow</h1>
      <button>Login</button>
      <button>Sign up</button>
  </header>
  <main>
    <section id="home">
      <h2>Welcome to ChowNow</h2>
      <p>Hungry? Find your way to food fast.</p>
      <p>Select the photo of whatever food you are craving!</p>
    </section>
    <section id="menu">
      <ul>
        <li>
          <h3>Pizza</h3>
          <img src="https://www.pngmart.com/files/1/Pepperoni-Pizza-PNG-Image.png" 
               alt="A delicious, cheesy pizza topped with your choice of toppings."
               width="400"
               height="400"
               />
          <button>Add to cart</button>
        </li>
        <li>
          <h3>Burger</h3>
          <img src="https://static.vecteezy.com/system/resources/previews/008/507/708/original/classic-cheeseburger-with-beef-patty-pickles-cheese-tomato-onion-lettuce-and-ketchup-mustard-free-png.png" 
               alt="A juicy burger served on a toasted bun with your choice of toppings"
               width="400"
               height="400"/>
          <button>Add to cart</button>
        </li>
        <li>
          <h3>Fried Chicken</h3>
          <img src="https://www.pngplay.com/wp-content/uploads/9/Fried-Chicken-Transparent-Image.png" 
               alt="Crispy fried chicken served with your choice of side dishes."
               width="400"
               height="400"/>
          <button>Add to cart</button>
        </li>
        <li>
          <h3>Pasta</h3>
          <img src="https://www.pngplay.com/wp-content/uploads/4/Pasta-Transparent-Background.png" 
               alt="Pasta is a delicious, comforting food that is perfect for any occasion."
               width="400"
               height="400"/>
          <button>Add to cart</button>
        </li>
      </ul>
    </section>
  </main>
</body>
</div>
</div>
</template>
  
<script>
  export default {
    name: 'home-page',
    data: function() {
        return {
            name:'',
            foodType:'',
            hasLocation: false,
            x: 0.0000000,
            y: 0.0000000,
        }
    },
    methods: {
        ShowPosition: function(x, y) {
            this.x = x;
            this.y = y;
            console.log(x);
            console.log(y);
            this.hasLocation = true;
        },
        GetUserLocation: function(){
            navigator.geolocation.getCurrentPosition((position) => {
                this.ShowPosition(position.coords.latitude, position.coords.longitude)
            }
            )
        },
        LogUserData: function() {
            this.GetUserLocation();
            console.log(this.foodType);
        },
        
    },
    computed: {

    },
    props: {
    }
  }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
      background-color: #F5F5F5;
      font-family: sans-serif;
    }

    h1 {
      text-align: left;
      padding-left: 115px;
      font-family: "Fantasy", Copperplate, serif;
      color: #333;
      float: left
    }

    h2 {
      padding-top: 100px;
    }
    .content {
      max-width: 960px;
      margin: 0 auto;
      padding: 20px;
      background-color: #FFF;
      border-radius: 10px;
    }
    .feature {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    .feature-image {
      width: 200px;
      height: 200px;
      border-radius: 10px;
      margin-right: 20px;
    }
    .feature-text {
      font-size: 18px;
      color: #555;
      line-height: 1.5;
    }
    .button {
      display: block;
      width: 200px;
      height: 50px;
      background-color: #333;
      color: #FFF;
      font-size: 20px;
      text-align: center;
      line-height: 50px;
}
  
#menuToggle
{
  display: block;
  position: relative;
  top: 50px;
  left: 50px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: tomato;
}


#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0;
  z-index: 2;
  
  -webkit-touch-callout: none;
}

#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul
{
  transform: none;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.background {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.feature-image {
}
    
  </style>