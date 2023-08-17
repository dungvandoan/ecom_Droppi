<script setup>
	import CarouselItem from './CarouselItem.vue';
</script>
<template>
	<div class="carousel">
		<button @click="prevSlide">Previous</button>
		<div class="carousel-content">
			<transition name="carousel-slide" mode="out-in">
				<carousel-item :key="currentIndex">
					<slot :name="currentIndex"></slot>
				</carousel-item>
			</transition>
		</div>
		<button @click="nextSlide">Next</button>
	</div>
</template>

<script>
	export default {
		name: 'Carousel',
		components: {
			CarouselItem
		},
		data() {
			return {
				currentIndex: 0
			};
		},
		methods: {
			prevSlide() {
				this.currentIndex = (this.currentIndex - 1 + this.$slots.default.length) % this.$slots.default.length;
			},
			nextSlide() {
				this.currentIndex = (this.currentIndex + 1) % this.$slots.default.length;
			}
		}
	};
</script>

<style scoped>
	.carousel {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20px;
	}

	.carousel-content {
		width: 100%;
		text-align: center;
	}

	.carousel-slide-enter-active,
	.carousel-slide-leave-active {
		transition: opacity 0.5s;
	}

	.carousel-slide-enter,
	.carousel-slide-leave-to {
		opacity: 0;
	}
</style>