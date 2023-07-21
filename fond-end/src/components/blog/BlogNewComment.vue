<template>
	<div class="blogNewComment">
		<h6>Bình luận: <span>{{ newComment }}</span></h6>
	</div>
</template>

<script>
	export default {
		props: {
			newComment: Number
		}
	}
</script>

<style scoped>
	.blogNewComment {}

	.blogNewComment h6 {
		font-size: 16px;
		font-weight: 400;
		line-height: 26px;
		color: var(--cl-text-secondary);
		margin: 10px 30px 50px ;
	}
	.blogNewComment h6>span{
		color: var(--cl-hover-menu-top);
		margin-left: 10px;
	}
</style>