import { createWebHistory, createRouter } from "vue-router";
import MyLogin from "@/components/MyLogin"
import HomePage from "@/components/HomePage"
import OutStatus from "@/components/OutStatus"
import PasswordReset from "@/components/PasswordReset"
import JoinPage from "@/components/JoinPage"

const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
        { path : "/", name : "HomePage", component : HomePage },
        { path : "/login", name : "login", component : MyLogin },
        { path : "/outstatus", name : "outstatus", component : OutStatus },
        { path : "/passwordreset", name : "passwordreset", component : PasswordReset },
        { path : "/join", name : "join", component : JoinPage },
    ]
});

export default router;