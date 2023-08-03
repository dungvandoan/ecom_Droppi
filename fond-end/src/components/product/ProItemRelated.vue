<script setup>
	import Left from '../../assets/icon-svg/carousel/btn-left.vue'
	import Right from '../../assets/icon-svg/carousel/btn-right.vue'
	import ProItemBox from './ProItemBox.vue'
	import JsonPro from '../data/products.json'
</script>
<template>
	<section class="proItemRelated my-2 px-1">
		<h6 class="fw-700 my-2">SẢN PHẨM CÓ LIÊN QUAN</h6>
		<div class="carousel-container">
			<ul class="carousel d-flex justify-content-start align-items-center" ref="carousel">
				<li class="carousel-item" :style="styleItem" v-for="(data,index) in items" :key="index">
					<ProItemBox :items="data" />
				</li>
			</ul>
			<div class="controls">
				<span class="btn-control control-left" @click="prev">
					<Left :setWidth="20" :setHeight="20" :setColor="`var(--white)`" :setBack="`var(--green-medium)`" />
				</span>
				<span class="btn-control control-right" @click="next">
					<Right :setWidth="20" :setHeight="20" :setColor="`var(--white)`" :setBack="`var(--green-medium)`" />
				</span>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				items: JsonPro,
				step: 0,
				styleItem: {},
				tranform: 0,
				autoPlayInterval: null,
				autoPlayDelay: 7000
			}
		},
		mounted() {
			this.setStep();
			this.startAutoPlay();

		},
		methods: {
			setStep() {
				const carouselWidth = this.$refs.carousel.scrollWidth;
				const totalItem = this.items.length;
				this.step = carouselWidth / totalItem;
			},
			prev() {
				this.resetTransition('prev');
				this.addItemFirst();
				setTimeout(() => {
					this.styleItem =
						`transform: translateX(${this.tranform = this.tranform + this.step }px);transition: all .3s ease`;
				}, 100)
			},
			next() {
				this.resetTransition('next');
				this.addItemLast();
				setTimeout(() => {
					this.styleItem =
						`transform: translateX(${this.tranform = this.tranform - this.step }px);transition: all .3s ease`;
				}, 100);
			},
			addItemFirst() {
				const item = this.items.pop();
				this.items.unshift(item);
			},
			addItemLast() {
				const item = this.items.shift();
				this.items.push(item);
			},
			resetTransition(v) {
				if (v === 'prev') {
					this.styleItem = `transition:none;transform: translateX(${this.tranform = -this.step}px)`
				}
				if (v === 'next') {
					this.styleItem =
						`transition:none;transform: translateX(${this.tranform = this.step}px);justify-content: flex-end;`
				}
			},
			startAutoPlay() {
				this.autoPlayInterval = setInterval(() => {
					this.next();
				}, this.autoPlayDelay);
			},
		}
	}
</script>

<style>
	.proItemRelated {
		width: 100%;
	}

	.proItemRelated>h6 {
		font-size: 18px;
		line-height: 22px;
	}

	.carousel::-webkit-scrollbar {
		width: 0;
		display: none;
	}

	.carousel-container {
		width: 100%;
		position: relative;
	}

	.carousel {
		flex-wrap: nowrap;
		overflow: hidden;
		overflow-x: auto;
		cursor: pointer;
		user-select: none;
		scroll-behavior: auto;
	}

	.carousel-item {
		display: inline-flex;
		flex-basis: 20%;
		flex-grow: 0;
		flex-shrink: 0;
		transition: transform 0.3s ease;

	}

	.carousel-item .proItemImage {
		min-height: 0;
	}

	.btn-control {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 30px;
		height: 30px;
		background: var(--green-medium);
		text-align: center;
		border-radius: 50%;
		line-height: 42px;
		cursor: pointer;
	}

	.control-left {
		left: 10px;
	}

	.control-right {
		right: 10px;
	}

	@media (max-width: 575.98px) {
		.carousel-item {
			flex-basis: 50%;
		}

		.proItemImage {
			min-height: 100px;
		}
	}

	/* Small devices (màn hình nhỏ, ví dụ: điện thoại dọc) */
	@media (min-width: 576px) and (max-width: 767.98px) {
		.carousel-item {
			flex-basis: calc(100%/3);
		}

		.proItemImage {
			min-height: 100px;
		}
	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (min-width: 768px) and (max-width: 991.98px) {
		.carousel-item {
			flex-basis: 25%;
		}

		.proItemImage {
			min-height: 150px;
		}
	}

	/* Large devices (laptop và màn hình lớn hơn) */
	@media (min-width: 992px) and (max-width: 1199.98px) {
		.proItemImage {
			min-height: 170px;
		}
	}

	/* Extra large devices (màn hình rất lớn) */
	@media (min-width: 1200px) and (max-width: 1399.98px) {
		.proItemImage {
			min-height: 180px;
		}
	}

	@media (min-width: 1400px) {
		.proItemImage {
			min-height: 215px;
		}
	}
</style>