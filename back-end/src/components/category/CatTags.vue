<template>
	<section class="catTag">
		<ul class="list-itemc">
			<li class="c-item" v-for="data in ctags" :key="data">
				{{ data }}
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		props: {
			ctags: Array
		}
	}
</script>

<style>
</style>