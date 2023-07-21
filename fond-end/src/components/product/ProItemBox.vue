<script setup>
	import ProItemOrder from './ProItemOrder.vue'
	import ProItemImage from './ProItemImage.vue'
	import ProItemName from './ProItemName.vue'
	import ProItemStar from './ProItemStar.vue'
	import ProItemPrice from './ProItemPrice.vue'
</script>
<template>
	<div class="proItemBox">
		<RouterLink :to="`/san-pham/${items.txtLink}`" class="box">
			<div class="proItemImage">
				<ProItemImage :srcImage="items.img" />
			</div>
			<div class="wrapperPro">
				<div class="proItemName">
					<ProItemName :namePro="items.name" />
				</div>
				<span class="proItemStar">
					<ProItemStar />
				</span>
				<div class="proItemPrice">
					<ProItemPrice :pricePro="items.price" />
				</div>
			</div>
		</RouterLink>
	</div>
</template>

<script>
	export default {
		props: {
			items: {
				type: Object,
				requied: true
			}
		}
	}
</script>

<style scoped>
	.proItemBox {
		box-sizing: border-box;
		transition: all .1s;
	}

	.proItemBox:hover {
		box-shadow: 0px 0px 3px 3px #ccc;
	}

	.proItemImage {
		height: 243px;
	}

	.wrapperPro {
		padding: 5px;
		margin: 0 7px;
	}

	.proItemName {
		margin: 10px 0;
	}

	.proItemName h3 {
		font-size: 16px;
		font-weight: 600;
		line-height: 22px;
		text-overflow: ellipsis;
		max-height: 44px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.proItemStar{
		width: 300px;
	}

	.proItemPrice {
		margin: 10px 0;
	}

	.price {
		font-weight: 700;
		font-size: 16px;
		line-height: 16px;
	}
</style>