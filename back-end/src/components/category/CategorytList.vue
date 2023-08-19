<script setup>
	import rotate from '../../assets/icons/ListAction/rotate.vue'
	import ellipsis from '../../assets/icons/ListAction/ellipsis.vue'
	import chevronLeft from '../../assets/icons/ListAction/chevronLeft.vue'
	
	import Group from './CatGroup.vue'
	import Tags from './CatTags.vue'
</script>
<template>
	<section class="categoryList">
		<table>
			<tr class="header-table px-1">
				<th class="header-row fw-700" v-for="data in header" :key="data">
					{{ data }}
				</th>
			</tr>
			<tr class="list-data px-1" v-for="item in items" :key="item">
				<td class="data-row text-center">
					<input type="checkbox">
				</td>
				<td class="data-row text-center">
					{{ item.id }}
				</td>
				<td class="data-row text-center data-img">
					<!-- <img :src="`/src/assets/images${item.thumbnail[0]}`" alt="" class="img-fluid"> -->
				</td>
				<td class="data-row text-center">
					{{ item.name }}
				</td>
				<td class="data-row text-center">
					<Group :cgroup="item.group" />
				</td>
				<td class="data-row text-center">
					<Tags :ctags="item.tags" />
				</td>
				<td class="data-row text-center">
					doan dung
				</td>
			</tr>
		</table>
	</section>
</template>

<script>
	export default {
		props: {
			items: Array,
			header: Array,
		}
	}
</script>

<style>
	.productLisst {
		padding: 0 10px;
		background: white;
		overflow-y: scroll;
		height: 750px;
	}

	.header-table {
		height: 50px;
		background: var(--white);
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	td,
	th {
		border: 1px solid #dddddd;
	}

	.data-row {
		min-width: 100px;
	}

	.data-img {
		max-width: 100px;
	}
</style>