import VueRouter from 'vue-router';
import Vue from 'vue';
import SignUp from "@/view/SignUp.vue";
import UserLogin from "@/view/Login.vue";
import Home from "@/view/Home.vue";
import MyPage from "@/view/MyPage/MyPage.vue";
import UserDelete from "@/view/MyPage/UserDelete.vue";
import PasswordChange from "@/view/MyPage/PasswordChange.vue";
import NicknameChange from "@/view/MyPage/NicknameChange.vue";
import store from "@/store";
Vue.use(VueRouter)

const routes = [
    { path: '/signup', component: SignUp, meta: { hideHeader: true,hideFooter: true}},
    { path: '/login', component: UserLogin, meta: { hideHeader: true,hideFooter: true}},
    { path: '/' , component: Home},
    { path: '/mypage', component: MyPage, meta: { hideHeader: true,hideFooter: true, requiresAuth: true}},
    { path: '/mypage/user/delete', component: UserDelete, meta: { hideHeader: true,hideFooter: true, requiresAuth: true}},
    { path: '/mypage/user/passwordchange', component: PasswordChange, meta: { hideHeader: true,hideFooter: true, requiresAuth: true}},
    { path: '/mypage/user/nicknamechange', component: NicknameChange, meta: { hideHeader: true,hideFooter: true, requiresAuth: true}},
    { path: '/' , component: Home, meta: { hideHeader: false,hideFooter: false}},
    { path: '/' , component: Home, meta: { hideFooter: false,hideHeader: false}},
]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = store.getters.isLogin; // Vuex에서 로그인 상태 가져오기

    if (requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});
export default router