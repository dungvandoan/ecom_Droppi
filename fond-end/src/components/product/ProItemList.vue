<script setup>
	import ProItemBox from './ProItemBox.vue'
	import ProItemRelated from './ProItemRelated.vue'
</script>
<template>
	<section class="proItemList d-flex flex-wrap px-5">
		<div class="wrapper-box" v-for="data in products" :key="data">
			<ProItemBox :items="data" />
		</div>
	</section>
</template>

<script>
	export default {
		props:{
			products : {
				type : Object,
				requied: true
			}
		},
	}
</script>

<style>
	.wrapper-box {
		flex: 0 0 25%;
		box-sizing: border-box;
		padding: 0 5px;
	}

	@media (max-width: 575.98px) {
		.proItemList {
			box-sizing: border-box;
		}

		.wrapper-box {
			flex: 0 0 100%;
		}
	}

	@media (min-width: 576px) and (max-width: 991.98px) {
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