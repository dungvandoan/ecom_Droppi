<script setup>
	import ProItemBox from './ProItemBox.vue'
	
	import JsonPro from '../data/products.json'
</script>
<template>
	<!-- Sort -->
	<!-- List ProItemBox -->
	<!-- Pager -->
	<section class="proItemList">
		<div class="wrapper-box" v-for="data in json" :key="data.id">
			<ProItemBox :items="data" />
		</div>
	</section>
</template>

<script>
	//ProItemBox.vue
	export default {
		data() {
			return {
				json : JsonPro,
			}
		}
	}
</script>

<style scoped>
	.proItemList {
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
	}

	.wrapper-box {
		flex: 0 0 calc(25% - 15px);
		box-sizing: border-box;
	}
</style>