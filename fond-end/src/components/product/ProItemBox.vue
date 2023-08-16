<script setup>
	import ProItemOrder from './ProItemOrder.vue'
	import ProItemImage from './ProItemImage.vue'
	import ProItemName from './ProItemName.vue'
	import ProItemStar from './ProItemStar.vue'
	import ProItemPrice from './ProItemPrice.vue'
	
	import { mixinGlobal } from '../../mixin/global.js';
</script>
<template>
	<div class="proItemBox m-1">
		<a :href="`/san-pham/${getTxtLink(items.name)}`" class="box">
			<div class="proItemImage">
				<ProItemImage :srcImage="items.thumbnail[0]" />
			</div>
			<div class="wrapperPro">
				<div class="proItemName my-1 fw-600">
					<ProItemName :namePro="items.name" />
				</div>
				<ProItemStar :widthStar="13" />
				<div class="proItemPrice my-1">
					<ProItemPrice :pricePro="items.price" />
				</div>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		mixins: [mixinGlobal],
		props: {
			items: {
				type: Object,
				requied: true
			}
		},
		methods: {
			getTxtLink(v){
				return this.removeDiacritics(v).split(" ").join("-");
			}
		},
	}
</script>

<style>
	.proItemBox {
		box-sizing: border-box;
		transition: all .1s;
		padding-bottom: 10px;
	}

	.proItemBox:hover {
		box-shadow: 0px 0px 3px 3px #ccc;
	}

	.proItemImage {
		width: 100%;
		text-align: center;
		max-height: 200px;
	}

	.proItemImage img {
		min-height: 100px;
		max-height: 180px;
	}

	.proItemName>h3 {
		font-size: 16px;
		line-height: 22px;
		text-overflow: ellipsis;
		max-height: 44px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.price {
		font-size: 16px;
		line-height: 16px;
		font-weight: 700;
	}

	@media (max-width: 575.98px) {
		.proItemImage {
			min-height: 100px;
			max-height: 250px;
		}
		.proItemImage img {
			min-height: 100px;
			max-height: 200px;
		}
	}

	/* Small devices (màn hình nhỏ, ví dụ: điện thoại dọc) */
	@media (min-width: 576px) and (max-width: 767.98px) {
		.proItemImage {
			min-height: 75px;
		}
		.proItemImage img {
			min-height: 100px;
			max-height: 150px;
		}
	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (min-width: 768px) and (max-width: 991.98px) {
		.proItemImage {
			min-height: 150px;
			max-height: 200px;
		}
		.proItemImage img {
			min-height: 100px;
			max-height: 170px;
		}
	}

	/* Large devices (laptop và màn hình lớn hơn) */
	@media (min-width: 992px) and (max-width: 1199.98px) {
		.proItemImage {
			min-height: 100px;
			max-height: 170px;
		}
		.proItemImage img {
			min-height: 100px;
			max-height: 165px;
		}
	}

	/* Extra large devices (màn hình rất lớn) */
	@media (min-width: 1200px) and (max-width: 1399.98px) {
		.proItemImage {
			min-height: 100px;
			max-height: 200px;
		}
		.proItemImage img {
			min-height: 100px;
			max-height: 145px;
		}
	}

</style>