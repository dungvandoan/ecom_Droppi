<script setup>
	import BlogList from '../components/blog/BlogNewList.vue'
	import Aside from '../components/category/CatItemList.vue'
</script>
<template>
	<main>
		<div class="container">
			<section class="home-page d-flex justify-content-between">
				<aside class="aside">
					<Category />
				</aside>
				<div class="content-page">
					<ProductList />
				</div>
			</section>
		</div>
	</main>
</template>

<script>
</script>

<style>
</style>