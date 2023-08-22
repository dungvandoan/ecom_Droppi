<script setup>
	import LineItemAction from '../components/common/LineItemAction.vue';
	import Footer from '../components/common/Footer.vue';
	import ProductList from '../components/product/ProductList.vue';
	import jsonProduct from '../data/product.json'
</script>
<template>
	<section class="product d-flex">
		<!-- s	ort -->
		<div class="top">
			<LineItemAction />
		</div>
		<!-- table -->
		<div class="mid">
			<ProductList :items="allProduct" :header="headerProduct" />
		</div>
		<!-- footer -->
		<div class="bottom">
			<Footer />
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				allProduct: jsonProduct,
				headerProduct: ['', 'Mã', 'Hỉnh Ảnh', 'Tên', 'Giá', 'Khuyến Mãi', 'Danh Mục', 'Tags', 'Trạng Thái',
					'Thao Tác'
				]
			}
		}
	}
</script>

<style>
	.product {
		flex-direction: column;
		height: 100%;
		width: 100%;
	}
	
	.top{
		height: 50px;
	}

	.bottom {
		height: 50px;
	}
</style>