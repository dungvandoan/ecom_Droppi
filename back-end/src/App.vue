<script setup>
	import {
		RouterLink,
		RouterView
	} from 'vue-router'
	import Navbar from './components/common/Navbar.vue'
	import Sidenav from './components/common/Sidenav.vue'
</script>

<template>
	<header>
		<Navbar />
	</header>
	<main>
		<aside>
			<Sidenav />
		</aside>
		<RouterView />
	</main>
</template>

<style scoped>
	main {
		display: flex;
		background: var(--whisper-white);
	}

	main>aside {
		flex: 0 0 13%;
	}

	main>section {
		flex: 0 1 87%;
	}
</style>