<script setup>
	import Close from '../../assets/icon-svg/viewHistory/close.vue'
	import SliderCate from '../../assets/icon-svg/viewHistory/sliders.vue'
	import ProItemBox from '../product/ProItemBox.vue';
	import JsonPro from '../data/products.json';
</script>
<template>
	<section class="viewHistory" :class="{actionShow : isShow }">
		<div class="btn-show d-none" @click="toggleSlidenav">
			<SliderCate :setWidth="20" :setHeight="20" v-if="!isShow" />
			<Close :setWidth="20" :setHeight="20" v-else />
		</div>
		<div class="wrapperDropCate d-flex align-items-center justify-content-between my-1 pe-1">
			<p class="txt-cate uppercase fw-700">Sản phẩm vừa xem</p>
		</div>
		<ul class="viewHistoryBox" ref="viewHistoryBox">
			<div class="wrapper-box" v-for="(data,index) in allProducts" v-show="index < 8" :key="index">
				<ProItemBox :items="data" />
			</div>
		</ul>
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
		data() {
			return {
				allProducts: JsonPro,
				isDropdownOpen: false,
				isShow: false,
			}
		},
		methods: {
			toggleSlidenav() {
				this.isShow = !this.isShow;
			}
		},
	}
</script>

<style>
	.viewHistoryBox .box{
		display: flex;
	}
	
	.viewHistoryBox .box .proItemImage {
		flex: 0 0 50%;
	}
	.viewHistoryBox .box .wrapperPro {
		flex: 0 0 50%;
	}
	
	@media (max-width: 575.98px) {
		.viewHistory {
			position: fixed;
			background: var(--white);
			left: -70%;
			width: 70%;
			top: 0;
			height: 100%;
			z-index: 2;
			padding: 50px 10px 0;
			transition: left 1s ease;
		}
		
		.viewHistoryBox{
			width: 100%;
			height: 100%;
			overflow: auto;
		}
		
		.btn-show {
			display: block;
			position: absolute;
			background: var(--white);
			left: 100%;
			top: 50%;
			padding: 5px;
			border: 1px solid var(--gray-medium);
			z-index: 2;
		}
		
		.btn-show svg {
			transition: all 1s ease;
		}
		
		.viewHistory.actionShow {
			left: 0;
		}
	}
	
	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (min-width: 576px) and (max-width: 991.98px) {
		.viewHistory {
			position: fixed;
			background: var(--white);
			left: -50%;
			width: 50%;
			top: 0;
			height: 100%;
			z-index: 2;
			padding: 50px 10px 0;
			transition: left 1s ease;
		}
		
		.viewHistoryBox {
			width: 100%;
			height: 100%;
			overflow: auto;
		}
		
		.btn-show {
			display: block;
			position: absolute;
			background: var(--white);
			left: 100%;
			top: 30%;
			padding: 5px;
			border: 1px solid var(--gray-medium);
			z-index: 2;
		}
		
		.btn-show svg {
			transition: all 1s ease;
		}
		
		.viewHistory.actionShow {
			left: 0;
		}
	}
</style>