<template>
	<section class="proPromotion">
		<ul class="list-itemp d-flex justify-content-start">
			<li class="p-item" v-for="data in ppromotion" :key="data">
				- {{ data }}
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		props: {
			ppromotion: Array
		}
	}
</script>

<style>
</style>