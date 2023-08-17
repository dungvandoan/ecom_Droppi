<template>
	<div class="carousel-item">
		<slot></slot>
	</div>
</template>

<script>
	export default {
	  name: 'CarouselItem'
	};
</script>

<style scoped>
	.carousel-item {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background-color: #f0f0f0;
	}
</style>