import { createWebHistory, createRouter } from "vue-router";
import MyLogin from "@/components/MyLogin"
import HomePage from "@/components/HomePage"

const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
        { path : "/", name : "HomePage", component : HomePage },
        { path : "/login", name : "login", component : MyLogin },
    ]
});

export default router;