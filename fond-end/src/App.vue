<script setup>
	import {
		RouterLink,
		RouterView
	} from 'vue-router'
	import Navbar from './components/common/Navbar-top.vue'
	import Breadcrumb from './components/common/Breadcrumb.vue'
	import Footer from './components/common/Footer.vue'
</script>

<template>
	<!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
	<header>
		<Navbar />
		<Breadcrumb />
	</header>
	<RouterView />
	<Footer />
</template>

<style scoped>
</style>