<script setup>
	import Category from '../components/pages/Category.vue'
	import ProductList from '../components/product/ProItemList.vue'
</script>

<template>
	<main>
		<div class="container">
			<section class="home">
				<aside class="wrapper aside">
					<Category />
				</aside>
				<div class="wrapper content-page">
					<ProductList />
				</div>
			</section>
		</div>
	</main>
</template>

<style scoped>
	main {
		padding: 30px 0;
	}

	.home {
		display: flex;
		gap: 50px;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.aside {
		flex:0 0 calc(20% - 25px);
	}

	.content-page {
		flex:0 0 calc(75% - 25px);
	}
</style>