<template>
  <div id="account-page">
    <input type="text" placeholder="First Name" name="firstName" v-model="userFirstName">
    <input type="text" placeholder="Last Name" name="lastName" v-model="userLastName">
    <br>
    <input type="text" placeholder="E-mail Name" name="email" v-model="userEmail">
    <br>
    <input type="text" placeholder="Username" name="username" v-model="userName">
    <br>
    <input type="text" placeholder="Password" name="password" v-model="userPassword">
    <input type="text" placeholder="Confirm Password" name="cPassword" v-model="cUserPassword">
    <br>
    <button>Create Account</button>
  </div>
</template>
    
<script>
    export default {
      name: 'account-page',
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
    