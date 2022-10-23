import { createApp } from 'vue'
// import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


import App from './App.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import router from "./router/router"
import { createPopper } from '@popperjs/core';

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
// app.use(router)
app.mount('#app')


// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5PQPd-5UQrD1_UhylsQihrJ7ajwLXM1Y",
  authDomain: "inandout-8434d.firebaseapp.com",
  databaseURL: "https://inandout-8434d-default-rtdb.firebaseio.com",
  projectId: "inandout-8434d",
  storageBucket: "inandout-8434d.appspot.com",
  messagingSenderId: "128146842247",
  appId: "1:128146842247:web:c8d833e592eba5ae258e22",
  measurementId: "G-9431XGBXCY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);