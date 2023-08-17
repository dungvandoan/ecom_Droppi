<script setup>
	import ProItemDetail from '../components/product/ProItemDetail.vue'
	import ProItemContent from '../components/product/ProItemContent.vue'
	import ProItemRelated from '../components/product/ProItemRelated.vue'
	import ViewHistory from '../components/aside/ViewHistory.vue'
</script>
<template>
	<main>
		<div class="container py-3">
			<section class="detail-page d-flex justify-content-between">
				<div class="content-page d-flex">
					<ProItemDetail />
					<ProItemContent />
					<ProItemRelated />
				</div>
				<aside class="aside">
					<ViewHistory />
				</aside>
			</section>
		</div>
	</main>
</template>

<script>
</script>

<style>
	.detail-page {
		gap: 40px
	}

	.content-page {
		flex-basis: calc(75% - 2px);
		flex-direction: column;
		overflow: hidden;
	}

	.aside {
		flex-basis: calc(25% - 20px);
	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (max-width: 991.98px) {
		.aside {
			flex-basis: 0;
		}

		.content-page {
			flex-basis: 100%;
		}
	}

	/* Large devices (laptop và màn hình lớn hơn) */
	@media (min-width: 992px) and (max-width: 1199.98px) {
		.detail-page {
			gap: 10px;
		}

		.aside {
			flex: 0 0 calc(25% - 5px);
		}

		.content-page {
			flex: 0 0 calc(75% - 5px);
		}
	}

	/* Extra large devices (màn hình rất lớn) */
	@media (min-width: 1200px) and (max-width: 1399.98px) {
		.aside {
			flex: 0 0 calc(25% - 25px);
		}

		.content-page {
			flex: 0 0 calc(75% - 25px);
		}
	}
</style>