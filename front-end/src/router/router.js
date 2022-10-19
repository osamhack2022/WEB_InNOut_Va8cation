import { createWebHistory, createRouter } from "vue-router";
import MyLogin from "@/components/MyLogin"
import HomePage from "@/components/HomePage"
import InputPoint from "@/components/InputPoint"
import PasswordReset from "@/components/PasswordReset"
import JoinPage from "@/components/JoinPage"
import PointStatus from "@/components/PointStatus"
import PointApply from "@/components/PointApply"

const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
    { path : "/home", name : "HomePage", component : HomePage },
    { path : "/", name : "login", component : MyLogin },
    { path : "/outstatus", name : "outstatus", component : OutStatus },
    { path : "/passwordreset", name : "passwordreset", component : PasswordReset },
    { path : "/signup", name : "signup", component : JoinPage },
    { path : "/pointstatus", name : "pointstatus", component : PointStatus },
    { path : "/pointapply", name : "pointapply", component : PointApply },
    ]
});

export default router;