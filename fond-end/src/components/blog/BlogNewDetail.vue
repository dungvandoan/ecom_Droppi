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
			<div class="title-detail ms-5 py-3">
				<BlogNewTitle :newTitle="foundBlog.title" />
			</div>
			<div class="content-detail">
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
		object-fit: cover;
	}
	.title-detail h3{
		font-weight: 700;
		font-size: 30px;
		line-height: 40px;
		color: var(--green-medium);
	}
	.content-detail{
		margin-left: 75px;
	}
</style>