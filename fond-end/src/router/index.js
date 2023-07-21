import {
	createRouter,
	createWebHistory
} from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('../views/Blog.vue')
		},
		{
			path: '/san-pham/:nameDetail',
			name: 'productName',
			component: () => import('../views/ProDetail.vue')
		}
	]
})

export default router