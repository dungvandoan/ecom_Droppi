import {
	createRouter,
	createWebHistory
} from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [{
			path: '/',
			name: 'product',
			component: () => import('../views/Product.vue')
		},
		{
			path: '/category',
			name: 'category',
			component: () => import('../views/Category.vue')
		},
		{
			path: '/menu',
			name: 'menu',
			component: () => import('../views/Menu.vue')
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('../views/Blog.vue')
		},
		{
			path: '/order',
			name: 'order',
			component: () => import('../views/Order.vue')
		},
		{
			path: '/setting',
			name: 'setting',
			component: () => import('../views/Setting.vue')
		},

	]
})

export default router