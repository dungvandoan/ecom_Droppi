<script setup>
	import ProductList from './ProItemList.vue'
</script>
<template>
	<section class="proItemContent my-2">
		<ul class="list-tab d-flex align-items-center g20">
			<li @click="acShow = 1" :class="{active : acShow === 1}" class="tab-item text-wrap py-1 uppercase fw-700">mô tả
			</li>
			<li @click="acShow = 2" :class="{active : acShow === 2}" class="tab-item text-wrap py-1 uppercase fw-700">đánh giá
			</li>
			<li @click="acShow = 3" :class="{active : acShow === 3}" class="tab-item text-wrap py-1 uppercase fw-700">vendor
				info</li>
			<li @click="acShow = 4" :class="{active : acShow === 4}" class="tab-item text-wrap py-1 uppercase fw-700">more
				products</li>
		</ul>
		<div class="content-tab">
			<div v-if="acShow === 1" class="tab-content resp-tab-content resp-tab-content-active" id="tab-description"
				aria-labelledby="tab_item-0" style="display:block">
				<p>MÁY LỌC NƯỚC NÓNG LẠNH&nbsp;WATEK&nbsp;RO</p>
				<p>Mã sản phẩm: WT-4200-RO</p>
				<p>Kích thước không gian:&nbsp;26 Rộng x 36.5 Dài x 110 Cao (cm)</p>
				<p>Tốc độ dòng chảy:&nbsp;10 – 15 lít/giờ</p>
				<p>Áp suất nước:&nbsp;10 – 125 psi (0.7 – 8.6 bar)</p>
				<p>Nhiệt độ nước đầu vào:&nbsp;2 – 38°C</p>
				<p>Nhiệt độ nước nóng:&nbsp;80 – 90°C</p>
				<p>Nhiệt độ nước lạnh:&nbsp;4 – 8°C</p>
				<p>Vị trí đặt máy:&nbsp;phòng khách/ phòng bếp/ phòng ngủ…</p>
				<p>Nguồn nước áp dụng: nước giếng, nước máy, nước mưa,…</p>
				<p>Thời gian bảo hành:&nbsp;2 năm, bảo hành toàn bộ phần điện và hệ thống làm nóng lạnh</p>
				<p>Thương hiệu:&nbsp;WATEK</p>
				<p>Hình thức bảo hành:&nbsp;Bảo hành điện tử</p>
				<p>THÔNG TIN SẢN PHẨM</p>
				<p>MÁY LỌC NƯỚC NÓNG LẠNH WATEK RO, MODEL WT-4200-RO</p>
				<p>ƯU ĐIỂM</p>
				<p>– Tích hợp diệt khuẩn lượng tử diệt khuẩn tối ưu chỉ sau 1/10 giây tiếp xúc</p>
				<p>– Tích hợp lõi tạo kiềm – hydrogen, bổ sung khoáng chất cho cơ thể</p>
				<p>– Công nghệ mắt thần cảm ứng ECO-WATEK tiết kiệm điện hơn vào ban đêm</p>
				<p>– Công nghệ EXTRA-WATEK tăng lượng nước dự trữ, giảm số lần máy hoạt động</p>
				<p>– Nước nóng 80 – 90 độ C, lạnh 4 – 8 độ C</p>
				<p>– Phù hợp với nguồn nước giếng, nước máy, nước mưa…</p>
				<p>– Sử dụng block LG bền bỉ, êm ái, tốc độ làm nóng / làm lạnh nhanh.</p>
				<p>– Nhập khẩu nguyên bộ từ Hàn Quốc</p>
				<p>Vị nước ngon, tự nhiên:</p>
				<p>– Loại bỏ tạp chất có kích thước nhỏ đến 0.02 micron bằng các phương pháp cơ học</p>
				<p>– Ứng dụng công nghệ lọc màng lọc RO nhằm loại bỏ các vật chất ô nhiễm và vi rút, vi khuẩn…</p>
				<p>– Tạo ra nguồn nước tinh khiết, giàu khoáng, có tính kiềm và giàu hydrogen.</p>
				<p>Nguồn gốc xuất xứ rõ ràng:</p>
				<p>– Bộ lọc dập nổi chữ Made in Korea tránh hàng nhái xuất xứ</p>
				<p>– Các lõi lọc có mã vạch quốc tế truy xuất nguồn gốc sản phẩm từ nhà sản xuất Hàn Quốc</p>
				<p>Thiết kế sang trọng, lịch sự hích hợp lắp cho nhiều không gian sử dụng:</p>
				<p>– Phù hợp lắp cho sử dụng tại gia đình, phòng khách, phòng ngủ, phòng bếp.</p>
				<p>– Công suất lớn:&nbsp;Phù hợp cho công sở, bệnh viện, trường học,..</p>
				<p>– Nhỏ gọn&nbsp;phù hợp lắp cho cả các vị trí chật hẹp: Chuỗi cafe, thức ăn nhanh, căng tin</p>
				<p>– Nước nóng đến 80 – 90 độ C, Lạnh 4 – 8 độ C</p>
				<p>CẤU TẠO</p>
				<p>LÕI 1: SENDIMENT ĐÚC NGUYÊN KHỐI HÀN QUỐC</p>
				<p>– Lọc tất cả các chất huyền phù, rỉ sét, bùn đất, các vật lơ lửng trong nước có kích thước lớn</p>
				<p>– Loại bỏ cặn bẩn, clo dư, cloramin trong nước</p>
				<p>– Ngăn cản bớt các vi khuẩn, vi sinh tiếp tục đi vào trong nước</p>
				<p>– Công suất/ Tuổi thọ: 12 – 18 tháng</p>
				<p>LÕI 2: PRE – CARBON ĐÚC NGUYÊN KHỐI HÀN QUỐC</p>
				<p>– Loại bỏ tạp chất, cặn bẩn có kích thước lớn với khả năng hấp thụ tốt hơn để tạo độ trong cho nước
				</p>
				<p>– Loại bỏ các chất hữu cơ hòa tan, chất độc hại như thuốc trừ sâu, chất tẩy rửa và các dung môi</p>
				<p>– Hiệu quả trong xử lý chất phóng xạ, arsen và amoni</p>
				<p>– Hấp thụ mạnh các loại chất nhờn, khử mùi hôi tanh, giữ vị ngọt thanh cho nước</p>
				<p>– Công suất/ Tuổi thọ: 12 – 18 tháng</p>
				<p>LÕI 3: MÀNG LỌC RO ĐÚC NGUYÊN KHỐI HÀN QUỐC</p>
				<p>– Ứng dụng công nghệ chống tắc hàng đầu thế giới</p>
				<p>– Loại bỏ hầu hết các tạp chất</p>
				<p>– Loại bỏ hoàn toàn các chất rắn hoà tan, khí, ion kim loại nặng</p>
				<p>– Loại bỏ những vi sinh vật, vi khuẩn… với kích thước siêu nhỏ (chỉ vài nanomet)</p>
				<p>– Tạo nước hoàn toàn tinh khiết</p>
				<p>– Công suất/ Tuổi thọ: 48 – 60 tháng</p>
				<p>LÕI 4: POST-CARBON ĐÚC NGUYÊN KHỐI</p>
				<p>– Bài trừ clo dư, các chất hữu cơ độc hại như thuốc trừ sâu, phân hoá học</p>
				<p>– Loại bỏ mùi hôi, vị lạ, cân bằng nước, đảm bảo độ ngọt cho nước</p>
				<p>– Công suất/ Tuổi thọ: 18 – 24 tháng</p>
				<p>LÕI 5: LÕI TẠO KIỀM – HYDROGEN 3 TRONG 1 HÀN QUỐC</p>
				<p>– Cung cấp khoáng chất tự nhiên như: Ca2+, K+, Na+, Fe2+ và Mg2+ cho nguồn nước, làm nước có vị ngọt
					tự nhiên, tốt cho sức khoẻ</p>
				<p>– Cân bằng độ pH, tạo tính kiềm: Cân bằng độ pH cho cơ thể, ngăn ngừa axit dư từ đó phòng các bệnh do
					dư axit gây ra.</p>
				<p>– Tạo nước Hydrogen: Chống lão hoá, phòng và chữa bệnh, chăm sóc da, tóc và làm đẹp…</p>
				<p>– Công suất / Tuổi thọ: 6.000 lít</p>
				<p>LÕI 6: DIỆT KHUẨN LƯỢNG TỬ (HẠT LƯỢNG TỬ 100% MADE IN CANADA)</p>
				<p>– Là công nghệ vận dụng các hạt cơ bản và sự tương tác giữa các hạt cơ bản tạo ra những đột phá về
					ứng dụng</p>
				<p>– Là công nghệ được ứng dụng trong các ngành đặc biệt như công nghệ vũ trụ không gian, công nghệ vật
					liệu mới và các ứng dụng mới phục vụ đời sống</p>
				<p>– Lần đầu tiên trên thế giới, Claire Technologies Hoa Kỳ thành công phát minh mới áp dụng công nghệ
					lượng tử vào sản xuất lõi lọc diệt khuẩn sử dụng công nghệ lượng tử</p>
				<p>Diệt khuẩn lượng tử ưu việt hoàn toàn so với đèn UV</p>
				<p>– Khả năng diệt khuẩn cao hơn đèn UV, diệt được cả khuẩn kị khí mà đèn UV diệt không hết</p>
				<p>– Tuổi thọ 5 năm, độ tin cậy cao không lo cháy như đèn UV, gấp 20-30 lần nano bạc</p>
				<p>– Hiệu suất diệt khuẩn siêu việt 99,9999%</p>
				<p>– 1/10 giây đầu tiên khi tiếp xúc khuẩn đã chết hoàn toàn</p>
				<p>Ưu điểm của lõi lọc diệt khuẩn lượng tử</p>
				<p>– KHÔNG DÙNG ĐIỆN</p>
				<p>– KHÔNG NƯỚC THẢI</p>
				<p>– KHÔNG DÙNG HOÁ CHẤT</p>
				<p>– KHÔNG TÁI NHIỄM KHUẨN</p>
				<p>– KHÔNG CÓ SẢN PHẨM PHỤ SINH SAU DIỆT KHUẨN</p>
				<p>Công suất – Tuổi thọ:&nbsp;19.000 lít (~5 năm)</p>
				<p>THÔNG SỐ KỸ THUẬT</p>
				<p>Kích thước không gian:&nbsp;26 Rộng x 36.5 Dài x 110 Cao (cm)</p>
				<p>Áp suất nước:&nbsp;10-125 psi ( 0,7 – 8,6 bar)</p>
				<p>Nhiệt độ nước đầu vào:&nbsp;2 – 38 độ C</p>
				<p>Công suất tiêu thụ làm nóng:&nbsp;430W – 510W</p>
				<p>Công suất tiêu thụ làm lạnh:&nbsp;100W</p>
				<p>Biến áp:&nbsp;12V /1.5A Hàn Quốc</p>
				<p>Nguồn điện:&nbsp;220 – 250V</p>
				<p>Bộ phận điện:&nbsp;biến áp, áp thấp, áp cao, van từ đồng bộ đi kèm</p>
				<p>Dung tích bình chứa (nóng / lạnh):&nbsp;1.8L / 3 – 4.2L</p>
				<p>Xuất xứ:&nbsp;Nhập khẩu nguyên bộ từ Hàn Quốc</p>
				<p>ỨNG DỤNG</p>
				<p>– Lắp đặt tại phòng khách: Watek WT-4200-RO được lắp đặt tại phòng khách để lấy nước uống trực tiếp
					đã có nóng lạnh</p>
				<p>– Lắp đặt các quán cafe, nhà hàng: Watek WT-4200-RO được lắp đặt để đáp ứng nhu cầu lọc nước tích hợp
					nóng lạnh tinh khiết, tiết kiệm diện tích và hiệu quả kinh tế, đáp ứng tiêu chuẩn cao nhất về nước
					uống.</p>
				<p>– Lắp đặt cho trường học, các cơ sở y khoa: Watek WT-4200-RO được lắp đặt tại trường học, bệnh viện,
					các cơ sở y tế, spa để đáp ứng nhu cầu về tiêu chuẩn nước cao và an toàn với diện tích lắp đặt nhỏ.
				</p>
				<p>BẢO HÀNH</p>
				<p>Thời gian bảo hành:&nbsp;24 tháng</p>
				<p>Bảo hành toàn bộ phần điện và hệ thống làm nóng lạnh.</p>
				<p>Chế độ bảo hành áp dụng cho các hỏng hóc do nhà sản xuất, không bảo hành việc tắc lõi lọc hoặc khấu
					hao tự nhiên do quá trình sử dụng.</p>
				<p>Thế Giới Lọc Nước có hệ thống bảo hành điện tử, đảm bảo quyền lợi chính đáng cho khách hàng khi sử
					dụng các sản phẩm chính hãng của chúng tôi.</p>
				<p>BẢO HÀNH ĐIỆN TỬ</p>
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
				<ProductList />
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				acShow: 1,
			}
		},
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
	
	.content-tab{
		transition: all .3s;
	}
	
	
	@media (max-width: 575.98px) {
		.list-tab{
			margin: 0 30px;
		}
		.list-tab .tab-item{
			font-size: 12px;
		}
		.content-tab{
			margin: 30px;
		}
	}
</style>