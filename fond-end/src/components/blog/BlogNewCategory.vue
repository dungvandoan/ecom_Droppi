<template>
	<div class="blogNewCategory">
		<h6 class="fw-400">Category: <span class="ms-1">{{newCategory}}</span></h6>
	</div>
</template>

<script>
	export default {
		props: {
			newCategory: String
		}
	}
</script>

<style>
	.blogNewCategory h6 {
		font-size: 16px;
		line-height: 26px;
		color: var(--gray-dark);
	}
	.blogNewCategory h6>span{
		text-transform: uppercase;
		color: var(--green-medium);
	}
</style>