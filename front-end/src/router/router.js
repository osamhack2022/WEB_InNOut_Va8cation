import { createWebHistory, createRouter } from "vue-router";
import MyLogin from "@/components/pages/MyLogin"
import HomePage from "@/components/pages/HomePage"
import InputPoint from "@/components/pages/InputPoint"
import InputVacation from "@/components/pages/InputVacation"
import PasswordReset from "@/components/pages/PasswordReset"
import JoinPage from "@/components/pages/JoinPage"
import JoinInfo from "@/components/pages/JoinInfo"



const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
    { path : "/home", name : "HomePage", component : HomePage },
    { path : "/", name : "login", component : MyLogin },
    { path : "/inputpoint", name : "inputpoint", component : InputPoint },
    { path : "/inputvacation", name : "inputvacation", component : InputVacation },
    { path : "/passwordreset", name : "passwordreset", component : PasswordReset },
    { path : "/join", name : "join", component : JoinPage },
    { path : "/joininfo", name : "joininfo", component : JoinInfo },
    ]
});

export default router;