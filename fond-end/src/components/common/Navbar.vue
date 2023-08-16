<script setup>
	import {
		RouterLink,
		RouterView
	} from 'vue-router';
	import IconUser from '../../assets/icon-svg/navbar/user.vue';
	import IconCart from '../../assets/icon-svg/navbar/cart.vue';
	import IconHome from '../../assets/icon-svg/navbar/home.vue';
	import IconSearch from '../../assets/icon-svg/navbar/search.vue';
	import IconMenu from '../../assets/icon-svg/navbar/menu.vue';
	import IconClose from '../../assets/icon-svg/navbar/close.vue';
</script>

<template>
	<section class="header-navbar-top d-flex justify-content-between align-items-center px-3">
		<RouterLink class="nav-brand" to="/">
			<img src="../../assets/images/amazon.png" alt="img-logo" class="img-fluid">
		</RouterLink>
		<ul class="navbar-menu d-flex align-items-center justify-content-center">
			<li class="nav-item" :class="{ active: currentPath[0] === '' }">
				<RouterLink to="/" class="nav-link uppercase fw-600">
					<IconHome :setWidth="25" :setHeight="25" :setColor="getColor()" />
				</RouterLink>
			</li>
			<li class="nav-item" :class="{ active: currentPath[0] === 'san-pham'}">
				<RouterLink to="/san-pham" class="nav-link uppercase fw-600">
					sản phẩm
				</RouterLink>
			</li>
			<li class="nav-item" :class="{ active: currentPath[0] === 'blog'}">
				<RouterLink to="/blog" class="nav-link uppercase fw-600">
					blog
				</RouterLink>
			</li>
			<li class="nav-item" :class="{ active: currentPath[0] === 'lien-he'}">
				<RouterLink to="/lien-he" class="nav-link uppercase fw-600">
					liên hệ
				</RouterLink>
			</li>
			<li class="nav-item">
				<div class="box-search d-flex justify-content-between align-items-stretch">
					<input type="text" class="input-search px-1" placeholder="Tìm kiếm...">
					<div class="btn btn-icon-search">
						<IconSearch :setWidth="20" :setHeight="20" :setColor="`var(--gray-medium)`" />
					</div>
				</div>
			</li>
		</ul>
		<div class="btn btn-icon-open">
			<IconMenu :setWidth="25" :setHeight="25" @click="openSidenav" />
		</div>
		<div class="sidenav px-2" :class="{active : showSidenav}">
			<div class="btn btn-icon-close my-3">
				<IconClose :setWidth="20" :setHeight="20" @click="openSidenav" :setColor="`var(--white)`" />
			</div>
			<ul class="sidenav-body">
				<li class="sidenav-item text-center my-1"><a href="/" class="sidenav-link  uppercase fw900">home</a>
				</li>
				<li class="sidenav-item text-center my-1"><a href="/blog" class="sidenav-link  uppercase fw900">blog</a>
				</li>
				<li class="sidenav-item text-center my-1"><a href="/lien-he" class="sidenav-link  uppercase fw900">liên
						hệ</a>
				</li>
				<li class="sidenav-item text-center my-1"><a href="/" class="sidenav-link  uppercase fw900">giỏ hàng</a>
				</li>
				<li class="sidenav-item text-center my-1"><a href="/" class="sidenav-link  uppercase fw900">đăng
						nhập</a></li>
			</ul>
		</div>
		<div class="top-bar-buttons d-flex justify-content-end me-2">
			<a href="/cart" class="btn btn-cart me-3">
				<IconCart :setWidth="25" :setHeight="25" />
				<span class="quantity">
					<div class="number text-center">10</div>
				</span>
			</a>
			<a href="/user" class="btn btn-user">
				<IconUser :setWidth="25" :setHeight="25" />
			</a>
		</div>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				showSidenav: false,
			};
		},
		computed: {
			currentPath() {
				console.log((this.$route.path.split('/')).filter(item => item !== ""));
				return (this.$route.path.split('/')).filter(item => item !== "");
			},
		},
		methods: {
			getColor() {
				if (this.$route.path === "/") {
					return "var(--green-medium)";
				} else {
					return "";
				}
			},
			openSidenav() {
				this.showSidenav = !this.showSidenav;
			}
		}
	}
</script>


<style>
	.header-navbar-top {
		height: 72px;
		border-bottom: 2px solid var(--gray-medium);
		overflow: hidden;
	}

	.nav-brand>img {
		display: inline-block;
		width: auto;
		max-width: 150px;
	}

	.navbar-menu {
		flex-grow: 2;
		flex-basis: 30%;
	}

	.sidenav,
	.btn-icon-open {
		display: none;
	}

	.navbar-menu .nav-item {
		padding: 0 15px;
	}

	.navbar-menu .nav-item:hover .nav-link,
	.navbar-menu .nav-item.active .nav-link {
		color: var(--green-medium);
	}

	.box-search {
		border: 2px solid var(--gray-medium);
		border-radius: 15px;
		overflow: hidden;
	}

	.input-search {
		flex-basis: 75%;
		border: none;
		min-height: 100%;
		outline: none;
		color: var(--gray-dark);
	}

	.btn-icon-search {
		flex-grow: 1;
		flex-basis: 20%;
		padding: 5px 7px;
		position: relative;
	}

	.btn-cart {
		position: relative;
	}

	.btn-cart .quantity {
		position: absolute;
		background: var(--orange-medium);
		width: 20px;
		height: 20px;
		top: 0;
		left: 100%;
		transform: translate(-30%, -30%);
		border-radius: 50%;
		z-index: 1;
	}

	.btn-cart .quantity .number {
		color: var(--white);
		line-height: 20px;
	}


	@media (max-width: 575.98px) {
		.header-navbar-top {
			position: relative;
			justify-content: center;
		}

		.nav-brand img {
			max-width: 150px;
			height: auto;
		}

		.navbar-menu {
			display: none;
		}

		.btn-icon-open {
			display: block;
			position: absolute;
			top: 50%;
			left: 30px;
			transform: translateY(-50%);
		}

		.btn-icon-close {
			text-align: end;
		}

		.sidenav {
			display: block;
			height: 100%;
			width: 50%;
			position: fixed;
			z-index: 5;
			top: 0;
			left: -50%;
			overflow-x: hidden;
			transition: all 0.5s;
			background: var(--black);
		}

		.sidenav-body .sidenav-item {
			border-bottom: 1px solid var(--gray-dark);
		}

		.sidenav-body .sidenav-link {
			color: var(--white);
			font-size: 15px;
			line-height: 25px;
		}

		.sidenav.active {
			left: 0%;
		}

		.top-bar-buttons {
			display: none;
		}

	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (min-width: 576px) and (max-width: 991.98px) {
		.nav-brand {
			order: 2;
		}

		.nav-brand img {
			max-width: 150px;
			height: auto;
		}

		.navbar-menu {
			display: none;
		}

		.btn-icon-open {
			order: 1;
			display: block;
		}

		.btn-icon-close {
			text-align: end;
		}

		.sidenav {
			display: block;
			height: 100%;
			width: 40%;
			position: fixed;
			z-index: 5;
			top: 0;
			left: -40%;
			overflow-x: hidden;
			transition: all 0.5s;
			background: var(--black);
		}

		.sidenav-body .sidenav-item {
			border-bottom: 1px solid var(--gray-dark);
		}

		.sidenav-body .sidenav-link {
			color: var(--white);
			font-size: 15px;
			line-height: 25px;
		}

		.sidenav.active {
			left: 0%;
		}

		.top-bar-buttons {
			order: 3;
		}
	}
</style>