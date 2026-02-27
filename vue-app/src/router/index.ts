import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const router = createRouter({
    // Use memory history if we don't have a real server setup for history mode 
    // but webHistory is fine for Vite dev server.
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/region/:id', name: 'region-detail', component: () => import('../pages/RegionDetailView.vue') },
        { path: '/explore', name: 'explore', component: HomeView }, // Placeholder for explore tab
        { path: '/settings', name: 'settings', component: () => import('../pages/SettingsView.vue') }
    ],
    scrollBehavior() {
        return { top: 0, behavior: 'smooth' }
    }
})

export default router
