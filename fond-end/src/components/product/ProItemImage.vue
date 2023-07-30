<template>
	<img :src="`/src/assets/images${srcImage}`" alt="proimg" class="img-fluid" />
</template>

<script>
	export default {
		props: {
			srcImage: String
		}
	}
</script>
