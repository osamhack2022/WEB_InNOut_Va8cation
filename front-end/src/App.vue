<template>
  <div id="app">
    <nav>
      <router-link to="/">MyLogin</router-link> |
      <router-link to="/join">JoinPage</router-link> |
      <router-link to="/passwordreset">PasswordReset</router-link> |
      <router-link to="/home">HomePage</router-link> |
      <router-link to="/outstatus">OutStatus</router-link> |
      <router-link to="/pointstatus">pointStatus</router-link> |
      <router-link to="/pointapply">pointApply</router-link> |
      <router-link to="/inputpoint">InputPoint</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue';
// import MyLogin from './components/MyLogin.vue'
// import PasswordReset from './components/passwordreset.vue'

export default {}
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