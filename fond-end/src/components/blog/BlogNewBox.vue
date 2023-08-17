<script setup>
	import BlogNewImage from './BlogNewImage.vue'
	import BlogNewTitle from './BlogNewTitle.vue'
	import BlogNewDes from './BlogNewDes.vue'
	import BlogNewCategory from './BlogNewCategory.vue'
	import BlogNewComment from './BlogNewComment.vue'

	import {
		mixinGlobal
	} from '../../mixin/global.js';
</script>
<template>
	<div class="blogNewBox d-flex g20">
		<a :href="`/tin-tuc/${getTxtLink(items.title)}`" class="new-img">
			<div class="blogNewImage text-center">
				<BlogNewImage :newImage="items.thumbnail" />
			</div>
		</a>
		<div class="new-content">
			<BlogNewTitle :newTitle="items.title" />
			<BlogNewDes :newDes="items.descript" />
			<span class="d-flex ms-5 my-3 g20">
				<BlogNewCategory :newCategory="items.category" />
				<BlogNewComment :newComment="items.comment" />
			</span>
			<a href="#" class="btn-more fw-600 uppercase">
				đọc thêm
			</a>
		</div>
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
			getTxtLink(v) {
				return this.removeDiacritics(v).split(" ").join("-");
			}
		},
	}
</script>

<style>
	.new-img {
		flex: 0 0 calc(35%);
	}

	.blogNewImage img {
		min-height: 300px;
	}

	.new-content {
		flex: 0 0 calc(65% - 20px);
	}

	.btn-more {
		padding: 10px 30px;
		font-size: 14px;
		line-height: 19px;
		border: 3px solid var(--green-medium);
		border-radius: 35px;
		color: var(--green-medium);
		transition: all .1s;
	}

	.btn-more:hover {
		color: var(--white);
		background: var(--green-medium);
	}

	@media (max-width: 575.98px) {
		.blogNewBox {
			flex-direction: column;
			margin: 0 10px;
		}

		.blogNewImage img {
			min-width: 100px;
			height: auto;
		}

		.new-content span {
			margin-left: 0;
		}
	}

	/* Small devices (màn hình nhỏ, ví dụ: điện thoại dọc) */
	@media (min-width: 576px) and (max-width: 767.98px) {
		.blogNewBox {
			flex-direction: column;
		}

		.blogNewImage img {
			min-width: 500px;
			height: auto;
		}
	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (min-width: 768px) and (max-width: 991.98px) {
		.new-content span {
			margin-left: 0;
		}
	}

	/* Large devices (laptop và màn hình lớn hơn) */
	@media (min-width: 992px) and (max-width: 1199.98px) {
		.new-content span {
			margin-left: 0;
		}
	}

	/* Extra large devices (màn hình rất lớn) */
	@media (min-width: 1200px) and (max-width: 1399.98px) {
		.new-content span {
			margin-left: 20px;
		}
	}
</style>