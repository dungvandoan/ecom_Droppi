<script setup>
	import BlogNewBox from './BlogNewBox.vue'

	import JsonNew from '../data/news.json'
</script>
<template>
	<section class="blogNewList d-flex flex-wrap">
		<div class="wrapper-box-blog" v-for="data in json" :key="data.id">
			<BlogNewBox :items="data" />
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				json: JsonNew,
			}
		}
	}
</script>

<style>
	.blogNewList {
		flex-direction: column;
	}

	.wrapper-box-blog {
		padding: 30px 0;
		border-bottom: 1px solid var(--gray-medium);
	}

	.wrapper-box-blog:first-child {
		padding-top: 0;
	}

	.wrapper-box-blog:last-child {
		padding-bottom: 0;
		border-bottom: none;
	}
</style>