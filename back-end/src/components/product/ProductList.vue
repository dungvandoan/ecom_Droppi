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
			<tr class="header-table">
				<th class="header-row fw-700" v-for="(data,index) in header" :key="index"
					:rowspan="data !== 'Trạng Thái' ? 2 : 'none'" :colspan="data === 'Trạng Thái' ? 3 : 'none'">
					{{ data }}
				</th>
			</tr>
			<tr>
				<th class="p-1" rowspan="1">Đang</th>
				<th class="p-1" rowspan="1">ẩn</th>
				<th class="p-1" rowspan="1">xoá</th>
			</tr>
			<tr class="list-data px-1" v-for="(item,i) in items" :key="i">
				<td class="data-row text-center">
					<input type="checkbox">
				</td>
				<td class="data-row text-center">
					{{ item.id }}
				</td>
				<td class="data-row data-img text-center">
					<img :src="`/src/assets/images${item.thumbnail[0]}`" alt="" class="img-fluid">
				</td>
				<td class="data-row text-center">
					{{ item.name }}
				</td>
				<td class="data-row fw-700">
					<Price :pprice="item.price" />
				</td>
				<td class="data-row">
					<Promotion :ppromotion="item.promotion" />
				</td>
				<td class="data-row">
					<Category :pcategory="item.category" />
				</td>
				<td class="data-row">
					<Tags :ptags="item.tags" />
				</td>
				<td class="data-row text-center">
					<input type="radio" checked :name="'status_' + i">
				</td>
				<td class="data-row text-center">
					<input type="radio" :name="'status_' + i">
				</td>
				<td class="data-row text-center">
					<input type="radio" :name="'status_' + i">
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
		min-width: 50px;
		padding: 0 5px;
	}

	.data-img {
		max-width: 100px;
	}
</style>