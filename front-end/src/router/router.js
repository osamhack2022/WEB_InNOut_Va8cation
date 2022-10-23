import { createWebHistory, createRouter } from "vue-router";
import MyLogin from "@/components/Pages/MyLogin"
import HomePage from "@/components/Pages/HomePage"
import InputPoint from "@/components/Pages/InputPoint"
import PasswordReset from "@/components/Pages/PasswordReset"
import JoinPage from "@/components/Pages/JoinPage"
import JoinInfo from "@/components/Pages/JoinInfo"



const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
    { path : "/home", name : "HomePage", component : HomePage },
    { path : "/", name : "login", component : MyLogin },
    { path : "/inputpoint", name : "inputpoint", component : InputPoint },
    { path : "/passwordreset", name : "passwordreset", component : PasswordReset },
    { path : "/join", name : "join", component : JoinPage },
    { path : "/joininfo", name : "joininfo", component : JoinInfo },
    ]
});

export default router;