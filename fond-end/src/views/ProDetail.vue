<script setup>
	import ProItemDetail from '../components/product/ProItemDetail.vue'
	import Category from '../components/pages/Category.vue'
</script>
<template>
	<main>
		<div class="container">
			<section class="proDetail">
				<div class="wrapper content-page">
					<ProItemDetail />
				</div>
				<aside class="wrapper aside">
					<Category />
				</aside>
			</section>
		</div>
	</main>
</template>

<script>
</script>

<style scoped>
	main {
		padding: 30px 0;
	}

	.proDetail {
		display: flex;
		box-sizing: border-box;
		gap: 50px
	}

	.aside {
		flex: 0 0 calc(20% - 25px);
	}

	.content-page {
		flex: 0 0 calc(75% - 25px);
	}
</style>