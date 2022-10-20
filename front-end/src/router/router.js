import { createWebHistory, createRouter } from "vue-router";
import MyLogin from "@/components/MyLogin"
import HomePage from "@/components/HomePage"
import InputPoint from "@/components/InputPoint"
import PasswordReset from "@/components/PasswordReset"
import JoinPage from "@/components/JoinPage"
import JoinInfo from "@/components/JoinInfo"

const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
        { path : "/", name : "HomePage", component : HomePage },
        { path : "/login", name : "login", component : MyLogin },
        { path : "/inputpoint", name : "inputpoint", component : InputPoint },
        { path : "/passwordreset", name : "passwordreset", component : PasswordReset },
        { path : "/join", name : "join", component : JoinPage },
        { path : "/joininfo", name : "joininfo", component : JoinInfo },
    ]
});

export default router;