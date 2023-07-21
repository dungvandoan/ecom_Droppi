<template>
	<section class="footer">
		<div class="footer-main">
			<div class="col col-1">
				<div class="ft-content">
					<h4 class="ft-title">CÔNG TY TNHH DANDELION VIỆT NAM</h4>
					<p>
						<span>Mã số thuế:</span>
						0317251228
					</p>
					<p>
						<span>Địa chỉ:</span>
						39A Tạ Hiện, Khu phố 1, Phường Thạnh Mỹ Lợi, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
					</p>
					<p>
						<span>Điện thoại:</span>
						19003126
					</p>
					<p>
						<span>Email:</span>
						hotro@droppii.com
					</p>
					<p>
						<span>STK:</span>
						110611768688
					</p>
					<p>
						<span>Chi nhánh:</span>
						Ngân hàng Thương mại cổ phần Công Thương Việt Nam (Vietinbank) – chi nhánh Thủ Thiêm
					</p>
				</div>
			</div>
			<div class="col col-2">
				<div class="ft-content">
					<h4 class="ft-title">DỊCH VỤ KHÁCH HÀNG</h4>
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
					<h4 class="ft-title">DANH MỤC SẢN PHẨM</h4>
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
		<div class="footer-bottom">
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
</script>

<style>
	.footer {
		margin-top: 30px;
		border-top: 2px solid var(--cl-secondary);
	}

	.footer-main {
		padding: 50px 60px 30px;
		display: flex;
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
		padding: 0 10px;
		box-sizing: border-box;
	}

	.ft-content .ft-title {
		margin-bottom: 10px;
		font-size: 16px;
		line-height: 22px;
		text-transform: uppercase;
	}

	.ft-content p,
	.ft-content ul li a{
		line-height: 24px;
		color: var(--cl-text-sendary);
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
		background: var(--cl-default);
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: var(--bg-default);
	}
</style>