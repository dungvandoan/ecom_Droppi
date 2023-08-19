<template>
	<section class="proPrice">
		<ul class="list-itemp d-flex justify-content-start">
			<li class="p-item" v-for="data in pprice" :key="data">
				- {{ data }}
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		props: {
			pprice: Array
		},
		computed: {
			getTag() {
				return this.pprice.map(item => item.split('-')[0]);
			},
			getPrice() {
				const y = this.pprice.map(item => item.split('-')[1]);
				console.log(y);
				return y;
			}
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
</style>