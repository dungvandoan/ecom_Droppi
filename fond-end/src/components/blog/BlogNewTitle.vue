<template>
	<div class="blogNewTitle fw-600">
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

<style>
	h3 {
		font-size: 24px;
		line-height: 31px;
	}
</style>