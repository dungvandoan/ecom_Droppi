<script setup>
	import BlogNewDetail from '../components/blog/BlogNewDetail.vue'
	import CatBlogList from '../components/aside/CatBlogList.vue'
</script>

<template>
	<main>
		<div class="container py-3">
			<section class="home-page d-flex justify-content-between">
				<div class="content-page">
					<BlogNewDetail />
				</div>
				<aside class="aside">
					<CatBlogList />
				</aside>
			</section>
		</div>
	</main>
</template>

<script>

</script>

<style>
	.blog {
		gap: 50px;
	}

	.content-page {
		flex: 0 0 calc(75% - 25px);
	}

	.aside {
		flex: 0 0 calc(20% - 25px);
	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (max-width: 991.98px) {
		.blog {
			gap: 0px;
		}

		.aside {
			flex-basis: 0;
		}

		.content-page {
			flex-basis: 100%;
		}
	}

	/* Large devices (laptop và màn hình lớn hơn) */
	@media (min-width: 992px) and (max-width: 1199.98px) {
		.blog {
			gap: 10px;
		}

		.aside {
			flex: 0 0 calc(20% - 5px);
		}

		.content-page {
			flex: 0 0 calc(75% - 5px);
		}
	}

	/* Extra large devices (màn hình rất lớn) */
	@media (min-width: 1200px) and (max-width: 1399.98px) {
		.aside {
			flex: 0 0 calc(25% - 25px);
		}

		.content-page {
			flex: 0 0 calc(75% - 25px);
		}
	}
</style>