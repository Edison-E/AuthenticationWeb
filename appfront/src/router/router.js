import { createRouter, createWebHistory } from 'vue-router'
import HomeUser from '../components/User.vue'
import store from '../store/store'

const routes = [
    {
        path: '/User',
        name: 'Home',
        component: HomeUser,
        meta: { requiresAuth: true }
    },
    {
        path: '/',
        name: 'Login',
        component: () => import("../App.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isAuthenticate) {
        next('/');
    } else {
        next();
    }
})

export default router