<template>
  <!-- <HelloWorld/> -->
  <MyLogin/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyLogin from './components/MyLogin.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    MyLogin
}
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
}
</style>