<template>
	<section class="proCategory">
		<ul class="list-itemp d-flex justify-content-start">
			<li class="p-item" v-for="data in pcategory" :key="data">
				- {{ data }}
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
	.list-itemp{
		flex-direction: column;
	}
</style>