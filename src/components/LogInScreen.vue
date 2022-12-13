<template>
  <div class="center background" id="login-page">

    <input 
      type="text" 
      placeholder="Username" 
      name="username" 
      v-model="username"
    >
    <input 
      type="text" 
      placeholder="Password" 
      name="password" 
      v-model="password"
    >
    <button>
      Log-In
    </button>
    <br>
    <router-link 
      to="/forgot" 
      tag="button"
    >Forgot Password?</router-link>
    <button>Create Account</button>
  </div>
</template>
    
<script>
export default {
  name: 'login-page',
  data: function () {
    return {
      password:"",
      username:"",
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
.background {
  position: relative;
  width: 100vw;
  height: 100vh;
}


</style>
    