<script setup>
	import ProItemBox from './ProItemBox.vue'
	import ProItemRelated from './ProItemRelated.vue'
	import JsonPro from '../data/products.json'
</script>
<template>
	<section class="proItemList d-flex flex-wrap">
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
				json: JsonPro,
			}
		}
	}
</script>

<style>
	.wrapper-box {
		flex: 0 0 25%;
		box-sizing: border-box;
		padding: 0 5px;
	}
	
	@media (max-width: 991.98px){
		.wrapper-box {
			flex: 0 0 50%;
			box-sizing: border-box;
		}
	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (min-width: 768px) and (max-width: 1199.98px) {
		.wrapper-box {
			flex: 0 0 calc(100% / 3);
			box-sizing: border-box;
		}
	}

</style>