<script setup>
	import ListItemAction from '../components/common/ListItemAction.vue'
	import ProductList from '../components/pages/ProductList.vue'
</script>
<template>
	<section class="product">
		<!-- sort -->
		<ListItemAction />
		<!-- table -->
		<ProductList />
		<!-- footer -->
	</section>
</template>

<script>
</script>

<style>
	.product{
		margin-left: 5px;
	}
</style>