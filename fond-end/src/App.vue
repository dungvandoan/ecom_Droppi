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
		<Breadcrumb />
	</header>
	<RouterView />
	<Footer />
</template>