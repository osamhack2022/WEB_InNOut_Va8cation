import { createWebHistory, createRouter } from "vue-router";
import MyLogin from "@/components/pages/MyLogin"
import HomePage from "@/components/pages/HomePage"
import InputPoint from "@/components/pages/InputPoint"
import InputVacation from "@/components/pages/InputVacation"
import PasswordReset from "@/components/pages/PasswordReset"
import JoinPage from "@/components/pages/JoinPage"
import JoinInfo from "@/components/pages/JoinInfo"
import Settings from "@/components/pages/Settings"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
    { path : "/home", name : "HomePage", component : HomePage, 
    beforeEnter: function(to, from, next){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          return next()
        } else {
          // No user is signed in.
          next('/')
        }
      });
    } },
    { path : "/", name : "login", component : MyLogin },
    { path : "/inputpoint", name : "inputpoint", component : InputPoint, 
    beforeEnter: function(to, from, next){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          return next()
        } else {
          // No user is signed in.
          next('/')
        }
      });
    }  },
    { path : "/inputvacation", name : "inputvacation", component : InputVacation, 
    beforeEnter: function(to, from, next){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          return next()
        } else {
          // No user is signed in.
          next('/')
        }
      });
    }  },
    { path : "/settings", name : "settings", component : Settings, 
    beforeEnter: function(to, from, next){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          return next()
        } else {
          // No user is signed in.
          next('/')
        }
      });
    }  },
    { path : "/passwordreset", name : "passwordreset", component : PasswordReset },
    { path : "/join", name : "join", component : JoinPage },
    { path : "/joininfo", name : "joininfo", component : JoinInfo },
    ]
});

export default router;
