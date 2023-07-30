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
</script>

<template>
	<section class="header-navbar-top d-flex justify-content-between align-items-center px-3">
		<RouterLink class="nav-brand" to="/">
			<img src="../../assets/images/DROPPII-LogoMaster_Orange.png" alt="img-logo" class="img-fluid">
		</RouterLink>
		<ul class="navbar-menu d-flex align-items-center justify-content-center">
			<li class="nav-item" :class="{ active: currentPath === '' }">
				<RouterLink to="/" class="nav-link uppercase fw-600">
					<IconHome :setWidth="25" :setHeight="25" :setColor="getColor()" />
				</RouterLink>
			</li>
			<li class="nav-item" :class="{ active: currentPath === '/blog'}">
				<RouterLink to="/blog" class="nav-link uppercase fw-600">
					blog
				</RouterLink>
			</li>
			<li class="nav-item" :class="{ active: currentPath === '/lien-he'}">
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
			<IconMenu :setWidth="25" :setHeight="25" />
		</div>
		<div class="sidenav">
			<div class="btn btn-icon-close">

			</div>
			<ul class="sidenav-body">
				<li class="sidenav-item"><a href="#" class="sidenav-link">home</a></li>
				<li class="sidenav-item"><a href="#" class="sidenav-link">blog</a></li>
				<li class="sidenav-item"><a href="#" class="sidenav-link">liên hệ</a></li>
				<li class="sidenav-item"><a href="#" class="sidenav-link">giỏ hàng</a></li>
				<li class="sidenav-item"><a href="#" class="sidenav-link">đăng nhập</a></li>
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

			};
		},
		computed: {
			currentPath() {
				return this.$route.path;
			},
		},
		methods: {
			getColor() {
				if (this.$route.path === "/") {
					return "var(--green-medium)";
				} else {
					return "";
				}
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
		height: 70px;
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

	.btn-icon-search::after {
		content: "";
		position: absolute;
		width: 2px;
		height: 70%;
		background: var(--gray-medium);
		top: 50%;
		left: 0;
		transform: translateY(-50%);
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
		.header-navbar-top{
			position: relative;
			justify-content: center;
		}
		
		.nav-brand img{
			width: auto;
			height: 60px;
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

	/* 	.sidenav {
			display: block;
			height: 100%;
			width: 0;
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
			overflow-x: hidden;
			transition: 0.5s;
			background-color: red;
		} */

		.top-bar-buttons {
			display: none;
		}

	}

	/* Medium devices (tablet và một số màn hình nhỏ hơn) */
	@media (min-width: 576px) and (max-width: 991.98px) {
		.nav-brand {
			order: 2;
		}
		
		.nav-brand img{
			width: auto;
			height: 60px;
		}

		.navbar-menu {
			display: none;
		}

		.btn-icon-open {
			order: 1;
			display: block;
		}

		.sidenav {
			display: block;
			height: 100%;
			width: 0;
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
			overflow-x: hidden;
			transition: 0.5s;
			background-color: red;
		}

		.top-bar-buttons {
			order: 3;
		}
	}
</style>