<script setup>
	import Carousel from '../components/pages/Carousel/Carousel.vue';
	import Assurance from '../components/home/Assurance.vue';
	import ProductList from '../components/product/ProItemList.vue'
	import ProItemRelated from '../components/product/ProItemRelated.vue'
	import JsonPro from '../components/data/products.json'
</script>
<template>
	<main>
		<div class="banner">
			<img src="../assets/images/img-home/baner.jpg" class="img-fluid" alt="">
		</div>
		<div class="container">
			<section class="home">
				<Assurance />
				<div class="list-home">
					<h1 class="fw-600 text-center my-2">Sản phẩm tiêu biểu</h1>
					<ProductList :products="showProducts" />
				</div>
				<div class="slider-home my-5">
					<h1 class="fw-600 text-center my-2">Kiến thức cần biết</h1>
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
				itemsPerPage: 10,
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
	.list-home h1,
	.slider-home h1 {
		font-size: 30px;
		line-height: 40px;
	}

	.home .proItemList .wrapper-box {
		flex: 0 0 20%;
	}

	.home .proItemRelated>h6 {
		display: none;
	}

	@media (max-width: 575.98px) {
		.home .proItemList .wrapper-box {
			flex: 0 0 50%;
		}
	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (min-width: 576px) and (max-width: 991.98px) {
		.home .proItemList{
			padding: 0;
		}
		.home .proItemList .wrapper-box {
			flex: 0 0 calc(100% / 3);
		}
	}

	/* Large devices (laptop và màn hình lớn hơn) */
	@media (min-width: 992px) and (max-width: 1199.98px) {
		.home .proItemList .wrapper-box {
			flex: 0 0 25%;
		}
	}
</style>