<script setup>
	import JsonPro from '../components/data/products.json'

	import Category from '../components/aside/CatItemList.vue'
	import ProItemRelated from '../components/product/ProItemRelated.vue'
	import ProductList from '../components/product/ProItemList.vue'
	import Pagination from '../components/common/Pagination.vue'
</script>

<template>
	<main>
		<div class="container py-3">
			<section class="shop d-flex justify-content-between">
				<aside class="aside">
					<Category />
				</aside>
				<div class="content-page d-flex">
					<ProductList :products="showProducts" />
					<Pagination @page-changed="handlePageChange" :numActive="currentPage"
						:totalItems="allProducts.length" />
					<ProItemRelated />
				</div>
			</section>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				currentPage: 1,
				itemsPerPage: 12,
				allProducts: JsonPro,
				showProducts: []
			}
		},
		mounted() {
			this.currentProducts();
		},
		methods: {
			currentProducts() {
				const startIndex = (this.currentPage - 1) * this.itemsPerPage;
				const endIndex = startIndex + this.itemsPerPage;
				this.showProducts = this.allProducts.slice(startIndex, endIndex);
			},
			handlePageChange(newPage) {
				this.currentPage = newPage;
				this.currentProducts();
			}
		}
	}
</script>

<style>
	.shop {
		gap: 50px;
	}

	.aside {
		flex: 0 0 calc(20% - 25px);
	}

	.content-page {
		flex: 0 0 calc(80% - 25px);
		flex-direction: column;
		overflow: hidden;
	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (max-width: 991.98px) {
		.shop {
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
		.shop {
			gap: 10px;
		}

		.aside {
			flex: 0 0 calc(20% - 5px);
		}

		.content-page {
			flex: 0 0 calc(80% - 5px);
		}
	}

	/* Extra large devices (màn hình rất lớn) */
	@media (min-width: 1200px) and (max-width: 1399.98px) {
		.aside {
			flex: 0 0 calc(20% - 25px);
		}

		.content-page {
			flex: 0 0 calc(80% - 25px);
		}
	}
</style>