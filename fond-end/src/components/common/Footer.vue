<script setup>
	import JsonStore from '../data/store.json'
</script>
<template>
	<section class="footer">
		<div class="footer-main d-flex">
			<div class="col col-1">
				<div class="ft-content mx-1">
					<h4 class="ft-title uppercase">
						{{ json.nameCTY }}
					</h4>
					<p>
						<span>Mã số thuế:</span>
						{{ json.ma_so_thue }}
					</p>
					<p>
						<span>Địa chỉ:</span>
						{{ json.dia_chi }}
					</p>
					<p>
						<span>Điện thoại:</span>
						{{ json.dien_thoai }}
					</p>
					<p>
						<span>Email:</span>
						{{ json.email }}
					</p>
					<p>
						<span>STK:</span>
						{{ json.STK }}
					</p>
					<p>
						<span>Chi nhánh:</span>
						{{ json.chi_nhanh }}
					</p>
				</div>
			</div>
			<div class="col col-2">
				<div class="ft-content">
					<h4 class="ft-title uppercase">DỊCH VỤ KHÁCH HÀNG</h4>
					<ul class="cus-service">
						<li class="cus-item"><a href="#" class="cus-link">Hướng dẫn đặt hàng</a></li>
						<li class="cus-item"><a href="#" class="cus-link">Chính sách kiểm hàng</a></li>
						<li class="cus-item"><a href="#" class="cus-link">Chính sách thanh toán, vận chuyển và giao
								hàng</a></li>
						<li class="cus-item"><a href="#" class="cus-link">Chính sách bảo mật</a></li>
						<li class="cus-item"><a href="#" class="cus-link">Điều khoản sử dụng</a></li>
						<li class="cus-item"><a href="#" class="cus-link">Chính sách đổi trả hàng</a></li>
						<li class="cus-item"><a href="#" class="cus-link">Phản ánh khiếu nại về chất lượng sản phẩm</a>
						</li>
						<li class="cus-item"><a href="#" class="cus-link">Cam kết về chất lượng sản phẩm</a></li>
					</ul>
				</div>
			</div>
			<div class="col col-3">
				<div class="ft-content">
					<h4 class="ft-title uppercase">DANH MỤC SẢN PHẨM</h4>
					<ul class="cate-product">
						<li class="cate-item"><a href="#" class="cate-link">Gia dụng & Đời sống</a></li>
						<li class="cate-item"><a href="#" class="cate-link">Sức khỏe & Làm đẹp</a></li>
						<li class="cate-item"><a href="#" class="cate-link">Mẹ và bé</a></li>
						<li class="cate-item"><a href="#" class="cate-link">Bách hóa tổng hợp</a></li>
						<li class="cate-item"><a href="#" class="cate-link">Thực phẩm</a></li>
						<li class="cate-item"><a href="#" class="cate-link">Thời trang & phụ kiện</a></li>
					</ul>
				</div>
			</div>
			<div class="col col-4">
				<div class="logo-success">
					<img src="../../assets/images/logoSaleNoti1.png" alt="logo-success" class="img-fluid">
				</div>
			</div>
		</div>
		<div class="footer-bottom d-flex align-items-center justify-content-between">
			<div class="copyright">
				<p>Copyright 2023 © DoanDung</p>
			</div>
			<div class="list-payment">
				<a href="#">
					<img src="../../assets/images/payment_logo.png" alt="">
				</a>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				json: JsonStore,
			}
		}
	}
</script>

<style>
	.footer {
		border-top: 2px solid var(--gray-medium);
	}

	.footer-main {
		padding: 50px 60px 30px;
	}

	.col {
		flex-grow: 0;
		flex-shrink: 0;
	}

	/* col-1 */
	.col-1 {
		flex-basis: calc(80%/3);
	}

	.ft-content {
		box-sizing: border-box;
	}

	.ft-content .ft-title {
		margin-bottom: 10px;
		font-size: 16px;
		line-height: 22px;
	}

	.ft-content p,
	.ft-content ul li a {
		line-height: 24px;
		color: var(--gray-dark);
		margin-bottom: 5px;
	}

	.ft-content p>span {
		font-weight: 700;
		line-height: 24px;
		margin-right: 10px;
		font-size: 14px;
	}

	/* col-2 */
	.col-2 {
		flex-basis: calc(80%/3);
	}

	.ft-content ul li {
		margin-bottom: 5px;
	}

	/* col-3 */
	.col-3 {
		flex-basis: calc(80%/3);
	}

	/* col-4 */
	.col-4 {
		flex-basis: 20%;
		align-self: center;
	}

	/* footer-bottom */
	.footer-bottom {
		min-height: 75px;
		padding: 0 75px;
		background: var(--yellow-medium);
		color: var(--white);
	}


	/* css container */
	@media (max-width: 575.98px) {
		.footer-main {
			display: grid;
			grid-gap: 30px;
		}

		.ft-content {
			margin: 0;
		}
		.footer-bottom {
			padding: 10px;
			flex-direction: column;
		}

	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (min-width: 576px) and (max-width: 991.98px) {
		.footer-main {
			display: grid;
			grid-gap: 30px;
		}

		.ft-content {
			margin: 0;
		}

		.col-1 {
			grid-column: 1 / span 2;
			gird-row: 1;
		}

		.col-4 {
			grid-column: 1 / span 2;
			gird-row: 3;
		}
	}
</style>