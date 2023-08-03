<script setup>
	import BlogList from '../components/blog/BlogNewList.vue'
	import Aside from '../components/aside/CatItemList.vue'
</script>
<template>
	<main>
		<div class="container">
			<section class="blog d-flex justify-content-between">
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

<style>
	main {
		padding: 30px 0;
	}

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