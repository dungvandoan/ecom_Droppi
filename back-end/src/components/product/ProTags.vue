<template>
	<section class="proTags">
		<ul class="list-itemp d-flex justify-content-start">
			<li class="p-item" v-for="data in ptags" :key="data">
				- {{ data }}
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		props: {
			ptags: Array
		}
	}
</script>

<style>
</style>