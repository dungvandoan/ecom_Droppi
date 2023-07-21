<script setup>
	// import ProItemOrder from './ProItemOrder.vue'
	import ProItemImage from './ProItemImage.vue'
	import ProItemName from './ProItemName.vue'
	import ProItemStar from './ProItemStar.vue'
	import ProItemPrice from './ProItemPrice.vue'
	import ProItemSocial from './ProItemSocial.vue'

	import Plus from '../../assets/icon-svg/plus.vue'
	import Dash from '../../assets/icon-svg/dash.vue'

	import JsonPro from '../data/products.json'
</script>
<template>
	<div class="proDetail">
		<div class="product-summary-wrap">
			<div class="product-images">
				<div class="slider-img">
					<ProItemImage :srcImage="foundProduct.img" />
				</div>
				<div class="pro-thumnail">
					<ul class="img-thumnail">
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
				<div class="detail-vote">
					<ProItemStar />
					<p>( Chưa có đánh giá nào. )</p>
				</div>
				<div class="detail-price">
					<ProItemPrice :pricePro="foundProduct.price" />
				</div>
				<hr>
				<div class="cart">
					<div class="form-cart">
						<Dash />
						<input type="text" class="input-cart">
						<Plus />
					</div>
					<a href="#" class="btn-buy">
						MUA HÀNG
					</a>
				</div>
				<ProItemSocial />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				json: JsonPro,
				productName: '',
				foundProduct: {},
			}
		},
		created() {
			try {
				this.productName = this.$route.params.nameDetail;
				this.foundProduct = this.json.find(data => data.txtLink === this.productName);
			} catch (e) {
				console.log("báo lỗi", e);
			}
		}
	}
</script>

<style scoped>
	.product-summary-wrap {
		display: flex;
		gap: 20px;
	}

	.product-images {
		flex-basis: calc(50% - 10px);
	}

	.slider-img {
		min-height: 450px;
		margin-bottom: 30px;
	}

	.img-thumnail {
		display: flex;
		gap: 10px;
		justify-content: start;
	}

	.item-img {
		flex-basis: calc(25% - 5px);
		width: 100%;
		min-height: 100px;
		border: 3px solid var(--cl-secondary);
		box-sizing: border-box;
		transition: all .1s;
	}

	.item-img:hover {
		border: 3px solid var(--cl-hover-menu-top);
	}

	.entry-summary {
		flex-basis: calc(50% - 10px);
	}

	.detailName {
		margin: 10px 0;
	}

	h3 {
		font-size: 27px;
		font-weight: 600;
		line-height: 30px;
	}

	.detail-vote {
		display: flex;
		gap: 30px;
		margin: 30px 0;
	}

	.detail-price .price {
		margin: 30px 0;
		color: var(--cl-hover-menu-top);
		font-weight: 700;
		font-size: 21px;
		line-height: 21px;
	}

	hr {
		background: var(--cl-secondary);
		margin: 30px 0;
	}

	.price {
		font-weight: 700;
		font-size: 16px;
		line-height: 16px;
	}

	.cart {
		display: flex;
		align-items: center;
		margin: 50px 0;
		gap: 50px;
	}

	.form-cart {
		height: 50px;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		position: relative;
		padding: 0 5px;
		border: 1px solid var(--cl-secondary);
	}

	.form-cart .input-cart {
		width: 50px;
		min-height: 100%;
		outline: none;
		box-sizing: border-box;
		border: none;
		padding: 0 15px;
		letter-spacing:2.5px;
	}
	.form-cart::after,
	.form-cart::before{
		content: "";
		position: absolute;
		top: 50%;
		width: 1px;
		height: 100%;
		background: var(--cl-secondary);
		transform: translateY(-50%);
	}
	.form-cart::before{
		left: 30%;
	}
	.form-cart::after{
		right: 30%;
	}
	
	.btn-buy{
		background: #EE9C9F;
		color: white;
		font-weight: 600;
		font-size: 15px;
		border-radius: 45px;
		padding: 20px 35px;
	}
</style>