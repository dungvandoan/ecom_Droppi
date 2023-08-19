<script setup>
	import rotate from '../../assets/icons/ListAction/rotate.vue'
	import ellipsis from '../../assets/icons/ListAction/ellipsis.vue'
	import chevronLeft from '../../assets/icons/ListAction/chevronLeft.vue'
</script>
<template>
	<section class="tableRow">
		<div class="top-list">
			<ul class="table d-flex justify-content-around">
				<li class="table-row">
					Thumbnail
				</li>
				<li class="table-row">
					Name
				</li>
				<li class="table-row">
					Price
				</li>
				<li class="table-row">
					Action
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
</script>

<style>
	.tableRow {
		width: 100%;
		background: var(--white);
		min-height: 50px;
	}
</style>