<template>
	<div class="assurance my-5">
		<ul class="assurance-wrapper d-flex justify-content-between g10">
			<li class="assurance-item d-flex justify-content-between g20">
				<div class="assurance-img">
					<img src="../../assets/images/img-home/icon-vàng-1.png" class="img-fluid">
				</div>
				<div class="assurance-content py-2">
					<h3 class="fw-700 ">TƯ VẤN & CHĂM SÓC 1 KÈM 1</h3>
					<p class="fw-400">Trong suốt quá trình sử dụng</p>
				</div>
			</li>
			<li class="assurance-item d-flex justify-content-between g20">
				<div class="assurance-img">
					<img src="../../assets/images/img-home/product.png" class="img-fluid">
				</div>
				<div class="assurance-content py-2">
					<h3 class="fw-700 ">SẢN PHẨM 100% CHÍNH HÃNG</h3>
					<p class="fw-400">Cam kết và đảm bảo về nguồn gốc</p>
				</div>
			</li>
			<li class="assurance-item d-flex justify-content-between g20">
				<div class="assurance-img">
					<img src="../../assets/images/img-home/return15day-1.png" class="img-fluid">
				</div>
				<div class="assurance-content py-2">
					<h3 class="fw-700 ">CHO PHÉP TRẢ HÀNG</h3>
					<p class="fw-400">Cho phép đổi trả trong vòng 15 ngày</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	.assurance-item {
		flex: 0 0 calc(100% / 3);
	}

	.assurance-img {
		flex:0 0 20%;
	}
	.assurance-img img{
		max-width: 100%;
		min-width: 85px;
	}

	.assurance-content {
		flex: 0 1 80%;
	}

	.assurance-content>h3,
	.assurance-content>p{
		font-size: 16px;
		line-height: 24px;
	}
	
	@media (max-width: 575.98px) {
		.assurance{
			margin: 0 30px;
		}
		
		.assurance-wrapper{
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
		}
		.assurance-item{
			flex: 0 0 100%;
		}
		
		.assurance-img {
			flex:0 0 30%;
		}
		
		.assurance-content {
			flex: 0 1 60%;
		}
	}
	
	@media (min-width: 576px) and  (max-width: 767.98px) {
		.assurance-wrapper{
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		}
		.assurance-item{
			flex: 0 0 100%;
		}
		
		.assurance-img {
			flex:0 0 30%;
		}
		
		.assurance-content {
			flex: 0 1 60%;
		}
		
	}
	
	/* Large devices (laptop và màn hình lớn hơn) */
	@media (min-width: 768px) and (max-width: 1199.98px) {
		.assurance-wrapper{
			flex-wrap: wrap;
			justify-content: center;
		}
		.assurance-item{
			flex: 0 0 calc(50% - 5px);
		}
	}
</style>