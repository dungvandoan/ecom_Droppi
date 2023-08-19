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
		<Navbar @sidenav-resized="handleNavbarClick" />
	</header>
	<main>
		<aside :style="{'width': clickNav ? '13%' : '4%','margin-right': clickNav ? '10px' : '0' }">
			<Sidenav :change="clickNav" />
		</aside>
		<section :style="{'width': clickNav ? '85%' : '95%'}">
			<RouterView />
		</section>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				clickNav: true,
			}
		},
		methods: {
			handleNavbarClick() {
				this.clickNav = !this.clickNav;
			}
		}
	}
</script>

<style scoped>
	main {
		display: flex;
		background: var(--whisper-white);
	    flex-basis: 100%;
		height: 100vh;
	}

	main>aside {
		display: flex;
		transition: all .3s ease;
	}

	main>section {
		display: flex;	
		transition: all .3s ease;
	}
</style>