<script setup>
	import Category from '../components/category/CatItemList.vue'
	import ProItemRelated from '../components/product/ProItemRelated.vue'
	import ProductList from '../components/product/ProItemList.vue'
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

<style>
	main {
		padding: 30px 0;
	}

	.home-page {
		gap: 50px;
	}

	.aside {
		flex: 0 0 calc(20% - 25px);
	}

	.content-page {
		flex: 0 0 calc(75% - 25px);
	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (max-width: 991.98px) {
		.home-page {
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
		.home-page {
			gap: 10px;
		}

		.aside {
			flex: 0 0 calc(25% - 5px);
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