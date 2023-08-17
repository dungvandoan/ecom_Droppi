<script setup>
	import ProductList from './ProItemList.vue'
	import JsonPro from '../data/products.json'
</script>
<template>
	<section class="proItemContent my-2">
		<ul class="list-tab d-flex align-items-center g20">
			<li @click="acShow = 1" :class="{active : acShow === 1}" class="tab-item text-wrap py-1 uppercase fw-700">mô
				tả
			</li>
			<li @click="acShow = 2" :class="{active : acShow === 2}" class="tab-item text-wrap py-1 uppercase fw-700">
				đánh giá
			</li>
			<li @click="acShow = 3" :class="{active : acShow === 3}" class="tab-item text-wrap py-1 uppercase fw-700">
				vendor
				info</li>
			<li @click="acShow = 4" :class="{active : acShow === 4}" class="tab-item text-wrap py-1 uppercase fw-700">
				more
				products</li>
		</ul>
		<div class="content-tab">
			<div v-if="acShow === 1">
				<div class="tab-content">
					<p><strong>1.</strong><strong> Tên sản phẩm:&nbsp;</strong>Bánh trung thu plant-based đầu tiên tại
						việt nam</p>
					<p><strong>2.</strong> <strong>Thương hiệu:&nbsp;</strong>365Begin</p>
					<p><strong>3.</strong><strong> Xuất xứ:&nbsp;</strong>Việt Nam</p>
					<p><strong>4.</strong><strong> Quy cách:&nbsp;</strong>Quy cách đóng gói: 100g/bánh</p>
					<p><strong>5.</strong> <strong>NSX &amp; HSD:&nbsp;</strong>45 ngày kể từ ngày sản xuất. Ngày sản
						xuất in trên bao bì sản phẩm</p>
					<p><strong>6.</strong> <strong>Thông tin cảnh báo:&nbsp;</strong>Không sử dụng sản phẩm khi quá hạn
						sử dụng hoặc có dấu hiệu hư hỏng.</p>
					<p><strong>7.</strong>&nbsp;<strong>Hướng dẫn sử dụng, hướng dẫn bảo quản:</strong></p>
					<p>Hướng dẫn sử dụng: Sử dụng trực tiếp ngay sau khi mở gói.</p>
					<p>Hướng dẫn bảo quản: Bảo quản nơi khô ráo, sạch sẽ, thoáng mát, tránh ánh nắng trực tiếp.</p>
					<p><strong>8.</strong>&nbsp;<strong>Cam kết</strong></p>
					<p>Không đường tinh luyện-&nbsp; dùng công nghệ vỏ bánh với mật ong</p>
					<p>Không chất bảo quản – dùng công nghệ chống oxi hoá nên đạt được 45 ngày sử dụng</p>
					<p>Không thịt động vật- protein đến từ thực vật 10-12gr protein/100gr bánh</p>
					<p><strong>9.</strong> <strong>Cân bằng dinh dưỡng</strong></p>
					<p><strong>– Gà Quay Thực Vật</strong></p>
					<p>Năng lượng: 427 kcal/100g</p>
					<p>Béo tổng: 17.6%</p>
					<p>Carbohydrate: 55%</p>
					<p>Đạm tổng: 12.2%</p>
					<p><strong>– Tomyum</strong></p>
					<p>Năng lượng: 437 kcal/100g</p>
					<p>Béo tổng: 19.3%</p>
					<p>Carbohydrate:54%</p>
					<p>Đạm tổng: 11.9%</p>
					<p><strong>– Hạt Phỉ – Dưa Lưới</strong></p>
					<p>Năng lượng: 468 kcal/100g</p>
					<p>Béo tổng: 23.4%</p>
					<p>Carbohydrate: 52.4%</p>
					<p>Đạm tổng: 11.9%</p>
					<p><strong>– Socola – Bạc Hà</strong></p>
					<p>Năng lượng: 477 kcal/100g</p>
					<p>Béo tổng: 25.3%</p>
					<p>Carbohydrate: 49.7%</p>
					<p>Đạm tổng: 12.5%</p>
					<p><strong>10.</strong>&nbsp;<strong>Thành phần:</strong></p>
					<p><strong>– BÁNH TRUNG THU- TOMYUM THỰC VẬT</strong></p>
					<p>Thành phần: Bột mì 20.7%, mật ong, trứng muối, thạch rong biển, hạt điều, hạt hướng dương. hạt
						dưa, maltodextrin, bột đậu xanh, dầu thực vật, trứng vịt, bột gấc, protein từ đậu Hà Lan, hương
						liệu tomyum tổng hợp 0.2%, hương liệu tomyum giống tự nhiên 1%, chất chống oxy hóa (INS 307b).
					</p>
					<p><strong>– BÁNH TRUNG THU – GÀ QUAY THỰC VẬT</strong></p>
					<p>Thành phần: Bột mì 21.3%, mật ong, trứng muối, thạch rong biển, hạt điều, hạt hướng dương, hạt
						dưa, chà bông gà chạy 5.9%, chà bông nấm, maltodextrin, bột đậu xanh, dầu thực vật, trứng vịt,
						bột than tre, hương liệu gà quay tổng hợp 0.1%, chất chống oxy hóa (INS 307b)</p>
					<p><strong>– BÁNH TRUNG THU –&nbsp; HẠT PHỈ DƯA LƯỚI</strong></p>
					<p>Thành phần: Bột mì 20.9%, mật ong, trứng muối, hạt điều, gạo lứt, hạnh nhân, hạt óc chó, chà là,
						sô cô la, bột đậu xanh, dầu thực vật, bột rau má, bột lá sen, trứng gà, hương liệu dưa lưới tổng
						hợp 0.27%, hương liệu hạt phỉ giống tự nhiên 0.17%, chất chống oxy hóa (INS 307b, INS 322(i)).
					</p>
					<p><strong>– BÁNH TRUNG THU –&nbsp; SÔ CÔ LA BẠC HÀ</strong></p>
					<p>Thành phần: Bột mì 21.5%, mật ong, trứng muối, hạt điều, gạo lứt, hạt óc chó, hạnh nhân, chà là,
						sô cô la 3.7%, bột cacao, bột đậu xanh, mạch nha, dầu thực vật, trứng gà, hương liệu bạc hà tự
						nhiên 0.43%, chất chống oxy hóa (INS 307b, INS 322(i)).</p>
				</div>
			</div>
			<div v-else-if="acShow === 2">
				<h3 class="my-2">Đánh giá</h3>
				<p class="my-3">Chưa có đánh giá nào.</p>
				<p>Chỉ những khách hàng đã đăng nhập và mua sản phẩm này mới có thể đưa ra đánh giá.</p>
			</div>
			<div v-else-if="acShow === 3">
				<h3 class="my-3">Vendor: <span>duyen.huynh</span></h3>
				<h4 class="my-1">Address:</h4>
				<span>No ratings found yet!</span>
			</div>
			<div v-else="acShow === 4">
				<ProductList :products="showProducts" />
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				acShow: 1,
				currentPage: 1,
				itemsPerPage: 4,
				allProducts: JsonPro,
				showProducts: []
			}
		},
		mounted() {
			this.currentProducts();
		},
		methods: {
			currentProducts() {
				const startIndex = (this.currentPage - 1) * this.itemsPerPage;
				const endIndex = startIndex + this.itemsPerPage;
				this.showProducts = this.allProducts.slice(startIndex, endIndex);
			},
			handlePageChange(newPage) {
				this.currentPage = newPage;
				this.currentProducts();
			}
		}
	}
</script>

<style>
	.list-tab {
		margin-bottom: 30px;
		border-bottom: 1px solid var(--gray-light);
	}

	.list-tab .tab-item {
		color: var(--gray-dark);
		box-sizing: border-box;
		position: relative;
		cursor: pointer;
		transition: all .3s;
	}

	.list-tab .tab-item.active::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 3px;
		top: 95%;
		left: 0;
		background: var(--green-medium);
	}

	.list-tab .tab-item:hover::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 3px;
		top: 95%;
		left: 0;
		background: var(--green-medium);
	}

	.list-tab .tab-item.active,
	.list-tab .tab-item:hover {
		color: var(--black);
	}

	.content-tab {
		transition: all .3s;
	}
	
	.tab-content strong,
	.tab-content p{
		font-size: 14px;
		line-height: 27px;
		color: var(--gray-dark);
		margin: 5px 0;
	}

	.tab-content strong{
		font-weight: 700;
	}
	

	@media (max-width: 575.98px) {
		.list-tab {
			margin: 0 30px;
		}

		.list-tab .tab-item {
			font-size: 12px;
		}

		.content-tab {
			margin: 30px;
		}
	}
</style>