<script setup>
	import BlogNewImage from './BlogNewImage.vue'
	import BlogNewTitle from './BlogNewTitle.vue'
	import BlogNewContent from './BlogNewContent.vue'

	import JsonNew from '../data/news.json'
	import {
		mixinGlobal
	} from '../../mixin/global.js';
</script>
<template>
	<section class="blogDetail">
		<div class="blog-wrapper">
			<div class="img-detail">
				<BlogNewImage :newImage="foundBlog.banner" />
			</div>
			<div class="title-detail ms-5 my-3">
				<BlogNewTitle :newTitle="foundBlog.title" />
			</div>
			<div class="content-detail ms-2">
				<BlogNewContent />
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		mixins: [mixinGlobal],
		data() {
			return {
				json: JsonNew,
				foundBlog: {},
			}
		},
		created() {
			try {
				const blogName = this.$route.params.nameBlog;
				this.foundBlog = this.json.find(data => this.removeDiacritics(data.title).split(' ').join("-") ===
					blogName);
			} catch (e) {
				console.log("báo lỗi", e);
			}
		},
	}
</script>

<style>
	.img-detail img{
		min-width: 100%;
		max-height: 400px;
	}
	.title-detail .blogNewTitle>h3{
		font-weight: 700;
		font-size: 30px;
		color: var(--green-medium);
	}
	
	
	@media (max-width: 575.98px) {
		.img-detail{
			margin: 0 5px;
		}
		.title-detail>.blogNewTitle>h3{
			margin: 0 10px;
		}
	}
</style>