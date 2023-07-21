<template>
	<p class="price">
		{{ formattedNumber }}
	</p>
</template>

<script>
	export default {
		props: {
			pricePro: Number
		},
		computed: {
			formattedNumber() {
				return this.pricePro.toLocaleString('vi-VN', {
					style: 'currency',
					currency: 'VND'
				});
			}
		}
	}
</script>