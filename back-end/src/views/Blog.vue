<script setup>
	import LineItemAction from '../components/common/LineItemAction.vue';
	import Footer from '../components/common/Footer.vue';
	import CategoryList from '../components/blog/CategorytList.vue';
	import jsonCategory from '../data/blog.json'
</script>
<template>
	<section class="blog d-flex">
		<!-- s	ort -->
		<LineItemAction />
		<!-- table -->
		<CategoryList :items="allCategory" :header="headerCategory"/>
		<!-- footer -->
		<Footer />
	</section>
</template>

<script>
	export default {
		data() {
			return{
				allCategory : jsonCategory,
				headerCategory: ['Trạng Thái','Mã','Hỉnh Ảnh','Tên','Nhóm','Tags','Thao Tác']
			}
		}
	}
</script>

<style>
	.category{
		flex-direction: column;
		flex: 0 0 100%;
		min-height: 100%;
	}
</style>