<script setup>
	import ChevronUp from '../../assets/icon-svg/chevron-up.vue'
	import ChevronDown from '../../assets/icon-svg/chevron-down.vue'
	import Plus from '../../assets/icon-svg/plus.vue'
	import Dash from '../../assets/icon-svg/dash.vue'
</script>

<template>
	<section class="category">
		<div class="drop-down">
			<div class="btn-drop">
				<span class="txt-cate" @click="checkTarget">danh mục</span>
				<span class="icon-cate" @click="toggleList">
					<Plus v-if="!checkShowCate" />
					<Dash v-else />
				</span>
			</div>
			<ul class="list-cate" :class="{toggleHeight: !checkShowCate}" :style="{height : maxHeightCate+'px'}">
				<li class="cate-item">
					<div class="btn-icon-drop">
						<a href="#" class="cate-link">
							Bách hóa tổng hợp
						</a>
						<span class="icon-drop" @click="toggleList">
							<ChevronDown v-if="!checkChevron" />
							<ChevronUp v-else />
						</span>
					</div>
					<ul class="show-drop" :class="{toggleHeight: !checkChevron}" :style="{height : maxHeightChev+'px'}">
						<li class="show-item">
							<a href="#" class="show-link">
								Khẩu trang
							</a>
						</li>
						<li class="show-item">
							<a href="#" class="show-link">
								Vệ sinh nhà cửa
							</a>
						</li>
					</ul>
				</li>
				<li class="cate-item">
					<a href="#" class="cate-link">
						Bảo hiểm
					</a>
				</li>
				<li class="cate-item">
					<a href="#" class="cate-link">
						Chăm Sóc Cá Nhân
					</a>
				</li>
				<li class="cate-item">
					<a href="#" class="cate-link">
						Đặc sản địa phương
					</a>
				</li>
				<li class="cate-item">
					<a href="#" class="cate-link">
						Dịch vụ
					</a>
				</li>
				<li class="cate-item">
					<div class="btn-icon-drop">
						<a href="#" class="cate-link">
							Mẹ và Bé
						</a>
						<span class="icon-drop" @click="toggleList">
							<ChevronDown v-if="!checkChevron" />
							<ChevronUp v-else />
						</span>
					</div>
					<ul class="show-drop" :class="{toggleHeight: !checkChevron}" :style="{height : maxHeightChev+'px'}">
						<li class="show-item"><a href="#" class="show-link">Chăm sóc cơ thể cho bé</a></li>
						<li class="show-item"><a href="#" class="show-link">Đồ dùng ăn dặm</a></li>
						<li class="show-item"><a href="#" class="show-link">Đồ dùng cho trẻ sơ sinh</a></li>
						<li class="show-item"><a href="#" class="show-link">Học tập</a></li>
						<li class="show-item"><a href="#" class="show-link">Sữa Mẹ & Bé</a></li>
						<li class="show-item"><a href="#" class="show-link">Thực phẩm cho bé</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				checkShowCate: false,
				checkChevron: false,
				// checkChevron2: false,
				maxHeightCate: 0,
				maxHeightChev: 0,
			}
		},
		methods: {
			toggleList(event) {
				const element = event.currentTarget.className;
				console.log(element);
				if (element  === "icon-cate") {
					this.checkShowCate = !this.checkShowCate;
					this.maxHeightCate = this.checkShowCate ? this.getListHeight('.list-cate') : 0
				} else {
					
					// const parentE = event.currentTarget.closest('.cate-item');
					// console.log(parentE)
					// const findSelector = parentE.querySelector('.show-drop').classList;
					// console.log(findSelector[0]);
					// this.checkChevron = !this.checkChevron;
					// this.maxHeightChev = this.checkChevron ? this.getListHeight(`${'.'+findSelector[0]}`) : 0
					// this.maxHeightCate = this.maxHeightCate + this.maxHeightChev;
				}
			},
			getListHeight(nClass) {
				console.log(nClass);
				const contentElement = this.$el.querySelector(nClass);
				console.log(contentElement.scrollHeight)
				return contentElement.scrollHeight;
			},
			checkTarget(e){
				console.log(e.target.className)
			}
		}
	}
</script>

<style>
	.category {
		/* width: 100%; */
	}

	.drop-down {
		position: relative;
	}

	.txt-cate {
		text-transform: uppercase;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		color: var(--cl-black);
	}

	.icon-cate {
		cursor: pointer;
	}

	.btn-drop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
		padding: 0 3px;
	}

	.list-cate {
		margin-top: 10px;
		transition: height .3s;
		overflow: hidden;
		transition-delay: .1s;
	}

	.list-cate .cate-item {
		margin-left: 15px;
		padding: 5px 0;
	}

	.btn-icon-drop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 15px;
	}
	.icon-drop svg{
		pointer-events: none;
	}

	.list-cate .cate-item .cate-link {
		transition: all .1s;
		line-height: 26px;
		color: var(--cl-text-secondary);
	}

	.list-cate .cate-item .cate-link:hover,
	.show-drop .show-item .show-link:hover {
		text-decoration: underline;
	}

	.show-drop {
		transition: height .3s;
		overflow: hidden;
		transition-delay: .1s;
	}

	.show-drop .show-item {
		margin-left: 15px;
		padding: 5px 0;
	}

	.show-drop .show-item .show-link {
		transition: all .1s;
		line-height: 26px;
		color: var(--cl-text-secondary);
	}

	.list-cate.toggleHeight,
	.show-drop.toggleHeight {
		height: 0;
	}
</style>