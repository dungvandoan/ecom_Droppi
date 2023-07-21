<template>
	<img :src="`/src/assets/images${newImage}`" alt="blog-img" class="img-fluid" />
</template>

<script>
	export default {
		props: {
			newImage: String
		}
	}
</script>
