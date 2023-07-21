<script setup>
	import BlogNewBox from './BlogNewBox.vue'
	
	import JsonNew from '../data/news.json'
</script>
<template>
	<section class="blogNewList">
		<div class="wrapper-box" v-for="data in json" :key="data.id">
			<BlogNewBox :items="data" />
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				json : JsonNew,
			}
		}
	}
</script>

<style scoped>
	.blogNewLisT{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.wrapper-box{
		padding: 30px 0;
		border-bottom: 1px solid var(--bg-secondary);
	}
	.wrapper-box:first-child{
		padding-top: 0;
	}
	.wrapper-box:last-child{
		padding-bottom: 0;
		border-bottom: none;
	}
</style>