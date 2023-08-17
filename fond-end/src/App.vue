<script setup>
	import {
		RouterLink,
		RouterView
	} from 'vue-router'
	import Navbar from './components/common/Navbar.vue'
	import Breadcrumb from './components/common/Breadcrumb.vue'
	import Footer from './components/common/Footer.vue'
</script>

<template>
	<header>
		<Navbar />
		<Breadcrumb v-show="currentPath.length !== 0" />
	</header>
	<RouterView />
	<Footer />
</template>

<script>
	export default {
		computed: {
			currentPath() {
				return (this.$route.path.split('/')).filter(item => item !== "");
			},
		},
	}
</script>