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
			<span class="btn-icon-cate" @click="toggleDropdown">
				<Plus v-if="!isDropdownOpen" :setWidth="20" :setHeight="20" />
				<Dash v-else :setWidth="20" :setHeight="20" />
			</span>
		</div>
		<ul class="catItemBox my-1" ref="catItemBox" :style="{ height: categoryListHeight + 'px'}">
			<li class="catBox-item p-1" v-for="(category,index) in data" :key="index">
				<div class="wrapperDropSub d-flex align-items-center justify-content-between">
					<a href="#" class="catBox-link">{{ category.name }}</a>
					<span class="icon-chevron" @click="selectCategory(category,index)"
						v-if="category.subCategories.length > 0">
						<ChevronDown v-if="checkChevron[index] === false" :setWidth="14" :setHeight="14" />
						<ChevronUp v-else :setWidth="14" :setHeight="14" />
					</span>
				</div>
				<ul v-if="category.subCategories.length > 0" class="subcategoryList"
					:style="{ height: subCategoryListHeight[index] + 'px' }" :ref="`subCategoryList_${index}`">
					<li class="subCate-item p-1" v-for="dataSub in category.subCategories" :key="dataSub.id">
						<a href="" class="subCate-link">{{dataSub.name}}</a>
					</li>
				</ul>
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
				getWidth: 0,
				checkChevron: [],
				categoryListHeight: 0,
				subCategoryListHeight: [],
			}
		},
		created() {
			this.checkChevron = this.data.map((category) => false);
			this.subCategoryListHeight = this.data.map((category) => 0);
		},
		methods: {
			toggleDropdown() {
				this.isDropdownOpen = !this.isDropdownOpen;
				this.categoryListHeight = this.isDropdownOpen ? this.getTotalCategoryHeight() : 0;
				this.checkChevron = this.checkChevron.fill(false, 0, this.checkChevron.lenght);
				this.subCategoryListHeight = this.subCategoryListHeight.fill(0, 0, this.subCategoryListHeight.lenght);
			},
			selectCategory(category, id) {
				this.checkChevron[id] = !this.checkChevron[id];

				this.subCategoryListHeight[id] = this.getTotalSubCategoryHeight(id);
				switch (this.checkChevron[id]) {
					case true:
						this.categoryListHeight = this.categoryListHeight + this.subCategoryListHeight[id];
						break;
					case false:
						this.categoryListHeight = this.categoryListHeight - this.subCategoryListHeight[id];
						this.subCategoryListHeight[id] = 0;
						break;
					default:
						break;
				}
			},
			getTotalCategoryHeight() {
				const categoryElement = this.$refs.catItemBox;
				return categoryElement ? categoryElement.scrollHeight : 0;
			},
			getTotalSubCategoryHeight(id) {
				const subCategoryElement = this.$refs[`subCategoryList_${id}`];
				return subCategoryElement ? subCategoryElement[0].scrollHeight : 0;
			},
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
		transition: height 0.2s ease;
		box-sizing: border-box;
	}

	.subcategoryList {
		transition: height 0.2s ease;
		overflow: hidden;
		width: 100%;
	}

	@media (max-width: 991.98px) {
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