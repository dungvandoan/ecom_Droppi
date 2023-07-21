<template>
	<div class="blogNewTitle">
		<h3>{{newTitle}}</h3>
	</div>
</template>

<script>
	export default {
		props: {
			newTitle: String
		}
	}
</script>

<style scoped>
	h3 {
		font-size: 24px;
		font-weight: 600;
		line-height: 31px;
		text-overflow: ellipsis;
		max-height: 62px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
</style>