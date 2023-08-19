<template>
	<section class="proCategory">
		<ul class="list-itemp">
			<li class="p-item" v-for="data in pcategory" :key="data">
				{{ data }}
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		props: {
			pcategory: Array
		}
	}
</script>

<style>
</style>