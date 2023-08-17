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
			path: '/san-pham',
			name: 'shop',
			component: () => import('../views/Shop.vue')
		},
		{
			path: '/san-pham/page/:pageNumber',
			name: 'shopPage',
			component: () => import('../views/Shop.vue')
		},
		{
			path: '/tin-tuc',
			name: 'tin-tuc',
			component: () => import('../views/Blog.vue')
		},
		{
			path: '/tin-tuc/:nameBlog',
			name: 'blog-detail',
			component: () => import('../views/BlogDetail.vue')
		},
		{
			path: '/san-pham/:nameDetail',
			name: 'product-detail',
			component: () => import('../views/ProDetail.vue')
		},
		{
			path: '/lien-he',
			name: 'contact',
			component: () => import('../views/Contact.vue')
		}
	]
})

export default router