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
		<aside :style="{'flex-basis': clickNav ? 'calc(13% - 5px)' : 'calc(4% - 5px)'}">
			<Sidenav :change="clickNav" />
		</aside>
		<section :style="{'flex-basis': clickNav ? 'calc(87% - 5px)' : 'calc(96% - 5px)'}">
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
	header{
		height: 75px;
	}
	
	main {
		height: calc(100vh - 75px);
		display: flex;
		background: var(--whisper-white);
		justify-content: space-between;
		align-items: flex-start;
		gap: 10px;
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