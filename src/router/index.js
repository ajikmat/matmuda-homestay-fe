import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: { name: 'home' },
            component: () => import('@/layout/MainLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/views/HomeViews.vue'),
                },
                {
                    path: 'mat-muda-cottage',
                    name: 'mat-muda-cottage',
                    component: () => import('@/views/homestay/MudaMudaCottageView.vue'),
                },
            ],
        },
    ],
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
