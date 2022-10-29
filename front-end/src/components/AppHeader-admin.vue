<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-dark py-3 px-4">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo_32_white.svg" width="32" height="32" alt="">
      </a>
      <div class="container-fluid">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/home" class="a nav-link">출타현황</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/inputvacation" class="a nav-link" >출타입력</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/inputpoint" class="a nav-link">상점입력/조회</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/settings" class="nav-link">환경설정</router-link>
          </li>
        </ul>
        <div class="Header-item position-relative">
          <b-avatar class="me-2" variant="secondary" size="2rem"></b-avatar>
          <b-badge variant="success">관리자</b-badge>
          <a v-on:click="logout" class="header-button ms-4">로그아웃</a>   
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  export default {
    name: 'AppHeader-admin',
    data(){

},

methods: {
  logout: function(){
    firebase.auth().signOut().then(() => {
      this.$router.replace('/')
    })
  }
}
  };
</script>

<style scoped lang="scss">.header-button {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
}

.header-button:hover {
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
}
</style>