<script setup>
	import LineItemAction from '../components/common/LineItemAction.vue';
	import Footer from '../components/common/Footer.vue';
	import ProductList from '../components/product/ProductList.vue';
	import jsonProduct from '../data/product.json'
</script>
<template>
	<section class="product d-flex">
		<!-- s	ort -->
		<LineItemAction />
		<!-- table -->
		<ProductList :items="allProduct" :header="headerProduct"/>
		<!-- footer -->
		<Footer />
	</section>
</template>

<script>
	export default {
		data() {
			return{
				allProduct : jsonProduct,
				headerProduct: ['','Mã','Hỉnh Ảnh','Tên','Giá','Khuyến Mãi','Danh Mục','Tags','Trạng Thái','Thao Tác']
			}
		}
	}
</script>

<style>
	.product{
		flex-direction: column;
		flex: 0 0 100%;
		min-height: 100%;
	}
</style>