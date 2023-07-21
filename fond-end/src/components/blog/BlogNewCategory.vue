<template>
	<div class="blogNewCategory">
		<h6>Category: <span>{{newCategory}}</span></h6>
	</div>
</template>

<script>
	export default {
		props: {
			newCategory: String
		}
	}
</script>

<style scoped>
	.blogNewCategory {}

	.blogNewCategory h6 {
		font-size: 16px;
		font-weight: 400;
		line-height: 26px;
		color: var(--cl-text-secondary);
		margin: 10px 0;
	}
	.blogNewCategory h6>span{
		text-transform: uppercase;
		color: var(--cl-hover-menu-top);
		margin-left: 10px;
	}
</style>