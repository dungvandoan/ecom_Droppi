<script setup>
	import BlogList from '../components/blog/BlogNewList.vue'
	import Aside from '../components/category/CatItemList.vue'
</script>
<template>
	<main>
		<div class="container">
			<section class="blog">
				<div class="wrapper content-page">
					<BlogList />
				</div>
				<aside class="wrapper aside">
					<Aside />
				</aside>
			</section>
		</div>
	</main>
</template>

<style scoped>
	main {
		padding: 30px 0;
	}
	.blog {
		display: flex;
		gap: 50px;
		justify-content: space-between;
	}

	.content-page {
		flex: 0 0 calc(75% - 25px);
	}

	.aside {
		flex: 0 0 calc(20% - 25px);
	}
</style>