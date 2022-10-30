<template>                                                                          <!--계정레벨 간부에게 표시되는 헤더-->
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
            <router-link to="/inputvacation" class="a nav-link">출타입력</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/inputpoint" class="a nav-link">상점입력/조회</router-link>
          </li>
        </ul>
        <div class="Header-item position-relative">               <!--접속한 계정의 부대번호, 이름, 계정레벨 표시-->
          <b class="grey"> {{base}} </b>
          <b class="grey"> {{name}} </b>
          <b-avatar class="me-2" variant="secondary" size="2rem"></b-avatar>
          <b-badge variant="primary">간부</b-badge>   
          <a v-on:click="logout" class="header-button ms-4">로그아웃</a>   <!--로그아웃 버튼-->
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, set, ref, get, child, onValue } from "firebase/database"
export default {
  name: 'AppHeader',
  data(){
    return{
      base:'',
      name:''
    }

  },
  created() {
    var uid = (firebase.auth().currentUser.uid)

    async function getbasepromise() {                                   //현 접속 계정의 부대번호 조회
      try {
        const db = ref(getDatabase())
        const snapshot = await get(child(db, `user/${uid}/base`));
        if (snapshot.exists()) {
          
          const base = snapshot.val()
          return base;
        }
        else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    }

    getbasepromise().then((base) => {
      
      this.base = base + '부대 '
    })


    async function getnamepromise() {                                 //현 접속 계정의 이름 조회
      try {
        const db = ref(getDatabase())
        const snapshot = await get(child(db, `user/${uid}/name`));
        if (snapshot.exists()) {
          
          const name = snapshot.val()
          return name;
        }
        else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    }

    getnamepromise().then((name) => {
      
      this.name = name + '님 환영합니다.  '
    })
  },
  methods: {
    logout: function(){                                               //로그아웃 함수
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')                                      //로그아웃 시 로그인 페이지로 이동
      })
    }
  }
}
</script>

<style scoped lang="scss">
.header-button {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
}

.header-button:hover {
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
}

.grey{
  color: rgba(255, 255, 255, 0.75);
}
</style>