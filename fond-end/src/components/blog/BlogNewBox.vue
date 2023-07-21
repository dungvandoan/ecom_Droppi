<script setup>
	import BlogNewImage from './BlogNewImage.vue'
	import BlogNewTitle from './BlogNewTitle.vue'
	import BlogNewDes from './BlogNewDes.vue'
	import BlogNewCategory from './BlogNewCategory.vue'
	import BlogNewComment from './BlogNewComment.vue'
</script>
<template>
	<div class="blogNewBox">
		<a href="/" class="new-img">
			<div class="blogNewImage">
				<BlogNewImage :newImage="items.thumbnail" />
			</div>
		</a>
		<div class="new-content">
			<BlogNewTitle :newTitle="items.title" />
			<BlogNewDes :newDes="items.descript" />
			<span>
				<BlogNewCategory :newCategory="items.category" />
				<BlogNewComment :newComment="items.comment" />
			</span>
			<a href="#" class="btn-more">
				đọc thêm
			</a>
		</div>
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
	.blogNewBox {
		display: flex;
		gap: 10px;
	}

	.new-img {
		flex: 0 0 calc(35% - 5px);
	}
	.blogNewImage {
		height: 300px;
	}

	.new-content {
		padding-left: 15px;
		flex: 0 0 calc(65% - 5px);
	}

	.new-content span {
		display: flex;
		margin-left: 50px;
	}

	.btn-more {
		font-size: 14px;
		line-height: 19px;
		font-weight: 600;
		padding: 11px 30px;
		text-transform: uppercase;
		border: 3px solid var(--cl-hover-menu-top);
		border-radius: 35px;
		color: var(--cl-hover-menu-top);
		transition: all .1s;
		margin-top: 10px;
	}

	.btn-more:hover {
		color: var(--bg-default);
		background: var(--cl-hover-menu-top);
	}
</style>