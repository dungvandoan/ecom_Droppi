<script setup>
	// import ProItemOrder from './ProItemOrder.vue'
	import ProItemImage from './ProItemImage.vue'
	import ProItemName from './ProItemName.vue'
	import ProItemStar from './ProItemStar.vue'
	import ProItemPrice from './ProItemPrice.vue'
	import ProItemSocial from './ProItemSocial.vue'
	import ProItemRelated from './ProItemRelated.vue'

	import Cart from '../../assets/icon-svg/navbar/cart.vue'
	import Plus from '../../assets/icon-svg/category/plus.vue'
	import Dash from '../../assets/icon-svg/category/dash.vue'

	import JsonPro from '../data/products.json'
</script>
<template>
	<section class="proDetail d-flex">
		<div class="product-summary-wrap d-flex">
			<div class="product-images">
				<div class="slider-img">
					<ProItemImage :srcImage="foundProduct.img" />
				</div>
				<div class="pro-thumnail my-3">
					<ul class="img-thumnail d-flex g10 justify-content-start">
						<li class="item-img" v-for="items in foundProduct.thumbnail" :key="items.id">
							<ProItemImage :srcImage="items" />
						</li>
					</ul>
				</div>
			</div>
			<div class="entry-summary">
				<div class="detailName">
					<ProItemName :namePro="foundProduct.name" />
				</div>
				<div class="detail-vote d-flex align-items-center my-2">
					<ProItemStar :widthStar="18" :colorStar="`var(--yellow-medium)`" />
					<p>( Chưa có đánh giá nào. )</p>
				</div>
				<div class="detail-price">
					<ProItemPrice :pricePro="foundProduct.price" />
				</div>
				<div class="line my-2"></div>
				<div class="cart d-flex align-items-center my-2 flex-wrap">
					<div class="form-cart d-flex align-items-center m-3">
						<div class="btn-quantity p-1" @click="decrease" @mousedown="preventSelection">
							<Dash :setWidth="20" :setHeight="20" />
						</div>
						<input type="text" @mousedown="preventSelection" class="input-cart" v-model="quantity"
							@input="updateQuantity" :maxlength="2">
						<div class="btn-quantity p-1" @click="increase" @mousedown="preventSelection">
							<Plus :setWidth="20" :setHeight="20" />
						</div>
					</div>
					<a href="#" class="btn-buy d-flex justify-content-center align-items-center">
						<Cart :setWidth="16" :setHeight="16" :setColor="`var(--white)`" />
						<p class="uppercase ms-1">mua hàng</p>
					</a>
				</div>
				<ProItemSocial />
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				json: JsonPro,
				foundProduct: {},
				quantity: '1',
			}
		},
		created() {
			try {
				const productName = this.$route.params.nameDetail;
				this.foundProduct = this.json.find(data => data.txtLink === productName);
			} catch (e) {
				console.log("báo lỗi", e);
			}
		},
		methods: {
			updateQuantity() {
				if (this.quantity < 1) {
					this.quantity = "1";
				} else if (this.quantity > 99) {
					this.quantity = "99";
				}
			},
			increase() {
				this.quantity = Math.min(parseInt(this.quantity) + 1, 99).toString();
			},
			decrease() {
				this.quantity = Math.max(parseInt(this.quantity) - 1, 1).toString();
			},
			preventSelection(event) {
				event.preventDefault();
			}
		}
	};
</script>

<style>
	.proDetail {
		flex-direction: column;
	}

	.product-summary-wrap {
		gap: 30px;
	}

	.product-images {
		flex-basis: calc(50% - 15px);
	}

	.slider-img img {
		height: auto;
		width: 480px;
	}

	.item-img {
		border: 2px solid var(--gray-light);
		box-sizing: border-box;
		transition: all .1s;
	}

	.item-img img {
		width: 100px;
		height: auto;
	}

	.item-img:hover {
		border: 2px solid var(--gray-dark);
	}

	.entry-summary {
		flex-basis: calc(50% - 15px);

	}

	.detailName>h3 {
		font-size: 27px;
		font-weight: 600;
		line-height: 30px;
	}

	.detail-vote {
		gap: 30px;
	}

	.detail-vote>p {
		font-size: 16px;
		line-height: 26px;
		color: var(--gray-dark);
	}

	.detail-price .price {
		color: var(--black);
		font-size: 21px;
		line-height: 21px;
		font-weight: 700;
	}

	.line {
		width: 100%;
		height: 2px;
		background: var(--gray-light);
	}

	.form-cart {
		width: 150px;
		height: 50px;
		border: 1px solid var(--gray-medium);
	}

	.input-cart {
		width: 100%;
		height: 100%;
		text-align: center;
		outline: none;
		border-left: 1px solid var(--gray-medium);
		border-right: 1px solid var(--gray-medium);
	}

	.btn-quantity {
		cursor: pointer;
		outline: none;
	}

	.btn-buy {
		background: #EE9C9F;
		color: var(--white);
		font-size: 15px;
		font-weight: 600;
		border-radius: 45px;
		padding: 20px 35px;
		flex-wrap: nowrap;
	}

	@media (max-width: 575.98px) {
		.product-summary-wrap {
			gap: 10px;
		}

		.product-summary-wrap {
			flex-direction: column;
			margin: 0 30px;
		}

		.detailName>h3 {
			font-size: 25px;
		}

		.slider-img {
			text-align: center;
		}

		.slider-img img {
			height: auto;
			width: 480px;
		}

		.form-cart {
			width: 100px;
			height: 40px;
			border: 1px solid var(--gray-medium);
			margin: 30px 30px 30px 0;

		}

		.input-cart {
			width: 100%;
			height: 100%;
			text-align: center;
			outline: none;
			border-left: 1px solid var(--gray-medium);
			border-right: 1px solid var(--gray-medium);
		}

		.btn-quantity {
			cursor: pointer;
			outline: none;
			padding: 5px;
		}

		.btn-buy {
			background: #EE9C9F;
			color: var(--white);
			font-size: 15px;
			font-weight: 600;
			border-radius: 45px;
			padding: 15px 17px;
			flex-wrap: nowrap;
		}
	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (min-width: 576px) and (max-width: 991.98px) {
		.detailName>h3 {
			font-size: 25px;
		}

		.slider-img img {
			height: auto;
			width: 360px;
			border: 1px solid crimson;
		}

		.form-cart {
			width: 100px;
			height: 40px;
			border: 1px solid var(--gray-medium);
			margin: 30px 30px 30px 0;

		}

		.input-cart {
			width: 100%;
			height: 100%;
			text-align: center;
			outline: none;
			border-left: 1px solid var(--gray-medium);
			border-right: 1px solid var(--gray-medium);
		}

		.btn-quantity {
			cursor: pointer;
			outline: none;
			padding: 5px;
		}

		.btn-buy {
			background: #EE9C9F;
			color: var(--white);
			font-size: 15px;
			font-weight: 600;
			border-radius: 45px;
			padding: 15px 17px;
			flex-wrap: nowrap;
		}
	}

	/* Large devices (laptop và màn hình lớn hơn) */
	@media (min-width: 992px) and (max-width: 1199.98px) {
		.detailName>h3 {
			font-size: 25px;
		}

		.slider-img img {
			height: auto;
			width: 360px;
			border: 1px solid crimson;
		}

		.form-cart {
			width: 100px;
			height: 40px;
			border: 1px solid var(--gray-medium);
			margin: 30px 30px 30px 0;

		}

		.input-cart {
			width: 100%;
			height: 100%;
			text-align: center;
			outline: none;
			border-left: 1px solid var(--gray-medium);
			border-right: 1px solid var(--gray-medium);
		}

		.btn-quantity {
			cursor: pointer;
			outline: none;
			padding: 5px;
		}

		.btn-buy {
			background: #EE9C9F;
			color: var(--white);
			font-size: 15px;
			font-weight: 600;
			border-radius: 45px;
			padding: 15px 17px;
			flex-wrap: nowrap;
		}
	}
</style>