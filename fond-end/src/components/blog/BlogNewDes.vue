<template>
	<div class="blogNewDes my-2">
		<p class="txt-des fw-400">{{newDes}}</p>
	</div>
</template>

<script>
	export default {
		props: {
			newDes: String
		}
	}
</script>

<style>
	.txt-des {
		color: var(--gray-dark);
		font-size: 16px;
		line-height: 24px;
		text-overflow: ellipsis;
		max-height: 72px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
</style>