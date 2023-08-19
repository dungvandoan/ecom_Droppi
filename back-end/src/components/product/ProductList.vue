<script setup>
	import rotate from '../../assets/icons/ListAction/rotate.vue'
	import ellipsis from '../../assets/icons/ListAction/ellipsis.vue'
	import chevronLeft from '../../assets/icons/ListAction/chevronLeft.vue'
	import Price from './ProPrice.vue'
	import Promotion from './ProPromotion.vue'
	import Category from './ProCategory.vue'
	import Tags from './ProTags.vue'
</script>
<template>
	<section class="productLisst">
		<table>
			<tr class="header-table px-1">
				<th class="header-row fw-700" v-for="data in header" :key="data"
					:rowspan="data !== 'Trạng Thái' ? 2 : 'none'" :colspan="data === 'Trạng Thái' ? 3 : 'none'">
					{{ data }}
				</th>
			</tr>
			<tr>
				<th rowspan="1" >Đang bán</th>
				<th rowspan="1" >ẩn</th>
				<th rowspan="1" >xoá</th>
			</tr>
			<tr class="list-data px-1" v-for="item in items" :key="item">
				<td class="data-row text-center">
					<input type="checkbox">
				</td>
				<td class="data-row text-center">
					{{ item.id }}
				</td>
				<td class="data-row text-center data-img">
					<img :src="`/src/assets/images${item.thumbnail[0]}`" alt="" class="img-fluid">
				</td>
				<td class="data-row text-center">
					{{ item.name }}
				</td>
				<td class="data-row text-center fw-700">
					<Price :pprice="item.price" />
				</td>
				<td class="data-row text-center">
					<Promotion :ppromotion="item.promotion" />
				</td>
				<td class="data-row text-center">
					<Category :pcategory="item.category" />
				</td>
				<td class="data-row text-center">
					<Tags :ptags="item.tags" />
				</td>
				<td class="data-row text-center">
					<input type="checkbox">
				</td>
				<td class="data-row text-center">
					<input type="checkbox">
				</td>
				<td class="data-row text-center">
					<input type="checkbox">
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
		},
		methods: {
			formattedNumber(x) {
				return x.toLocaleString('vi-VN', {
					style: 'currency',
					currency: 'VND'
				});
			}
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