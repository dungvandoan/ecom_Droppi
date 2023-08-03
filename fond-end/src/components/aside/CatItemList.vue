<script setup>
	import ChevronUp from '../../assets/icon-svg/category/chevron-up.vue'
	import ChevronDown from '../../assets/icon-svg/category/chevron-down.vue'
	import Plus from '../../assets/icon-svg/category/plus.vue'
	import Dash from '../../assets/icon-svg/category/dash.vue'
	import Close from '../../assets/icon-svg/category/close.vue'
	import SliderCate from '../../assets/icon-svg/category/sliders.vue'

	import JsonCat from '../data/category.json'
</script>
<template>
	<section class="catItemList" :class="{actionShow : isShow }">
		<div class="btn-show d-none" @click="toggleSlidenav">
			<SliderCate :setWidth="20" :setHeight="20" v-if="!isShow" />
			<Close :setWidth="20" :setHeight="20" v-else />
		</div>
		<div class="wrapperDropCate d-flex align-items-center justify-content-between my-1 pe-1">
			<p class="txt-cate uppercase fw-700">danh mục</p>
		</div>
		<ul class="catItemBox my-1" ref="catItemBox">
			<li class="catBox-item active p-1" v-for="(category,index) in data" :key="index">
				<a href="" class="catBox-link">{{ category.name }}</a>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				data: JsonCat,
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
	.catItemList {
		position: relative;
	}

	.wrapperDropCate {
		border-bottom: 1px solid var(--gray-medium);
	}

	.catItemBox {
		width: 100%;
		color: var(--gray-dark);
		overflow: hidden;
		transition: all 0.2s ease;
		box-sizing: border-box;
	}

	.catBox-item:hover>.catBox-link {
		text-decoration: underline;
	}

	.catBox-item.active>.catBox-link {
		color: var(--green-medium);
	}

	.catBox-item.active:hover>.catBox-link {
		text-decoration: none;
	}

	
	@media (max-width: 575.98px) {
		.catItemList {
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
		
		.catItemList.actionShow {
			left: 0;
		}
	}
	
	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (min-width: 576px) and (max-width: 991.98px) {
		.catItemList {
			position: fixed;
			background: var(--white);
			left: -30%;
			top: 0;
			height: 100%;
			width: 30%;
			z-index: 2;
			padding: 50px 10px 0;
			transition: left 1s ease;
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
		
		.catItemList.actionShow {
			left: 0;
		}
	}
</style>