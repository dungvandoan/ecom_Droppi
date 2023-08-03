<template>
	<div class="blogNewComment">
		<h6 class="fw-400">Bình luận: <span class="ms-1">{{ newComment }}</span></h6>
	</div>
</template>

<script>
	export default {
		props: {
			newComment: Number
		}
	}
</script>

<style>
	.blogNewComment h6 {
		font-size: 16px;
		line-height: 26px;
		color: var(--gray-dark);
	}
	.blogNewComment h6>span{
		text-transform: uppercase;
		color: var(--green-medium);
	}
</style>