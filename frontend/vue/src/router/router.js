import VueRouter from 'vue-router';
import Vue from 'vue';
import SignUp from "@/view/SignUp.vue";
import UserLogin from "@/view/Login.vue";
import Home from "@/view/Home.vue";
Vue.use(VueRouter)
/*  경로 설정*/
const routes = [
    { path: '/signup', component: SignUp},
    { path: '/login', component: UserLogin},
    { path: '/' , component: Home},
]

const router = new VueRouter({
    routes // 단축 속성 이름으로 routes: routes
})

export default router