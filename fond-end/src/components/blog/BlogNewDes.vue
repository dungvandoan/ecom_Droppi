<template>
	<div class="blogNewDes">
		<p>{{newDes}}</p>
	</div>
</template>

<script>
	export default {
		props: {
			newDes: String
		}
	}
</script>

<style scoped>
	.blogNewDes{
		margin: 20px 0;
	}
	p {
		color: var(--cl-text-secondary);
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		text-overflow: ellipsis;
		max-height: 72px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
</style>