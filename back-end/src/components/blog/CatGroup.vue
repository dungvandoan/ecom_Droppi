<template>
	<section class="catGroup">
		<ul class="list-itemc">
			<li class="c-item" v-for="data in cgroup" :key="data">
				{{ data }}
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		props: {
			cgroup: Array
		}
	}
</script>

<style>
</style>