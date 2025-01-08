import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [],
});

router.beforeResolve((to, from, next) => {
    next();

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});

export default router;
