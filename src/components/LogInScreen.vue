<template>
  <div id="login-page">
    <input type="text" placeholder="Username" name="username" v-model="username">
    <input type="text" placeholder="Password" name="password" v-model="password">
    <button>Log-In</button>
    <br>
    <button>Forgot Password?</button>
    <button>Create Account</button>
  </div>
</template>
    
<script>
    export default {
      name: 'login-page',
      data: function() {
          return {
              
          }
      },
      methods: {
          
          
      },
      computed: {
  
      },
      props: {
      }
    }
  </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
  </style>
    