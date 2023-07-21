<script setup>
	import {
		RouterLink,
		RouterView
	} from 'vue-router'
	import IconUser from '../../assets/icon-svg/icon-user.vue'
	import IconCart from '../../assets/icon-svg/icon-cart.vue'
	import Home from '../../assets/icon-svg/home.vue'
	import Search from '../../assets/icon-svg/search.vue'
</script>

<template>
	<section class="header-navbar-top">
		<RouterLink class="flex-item nav-brand" to="/">
			<img src="../../assets/images/DROPPII-LogoMaster_Orange.png" alt="img-logo" class="img-fluid">
		</RouterLink>
		<ul class="flex-item navbar-menu">
			<li class="nav-item">
				<RouterLink to="/" class="nav-link active">
					<Home />
				</RouterLink>
			</li>
			<li class="nav-item">
				<RouterLink to="/blog" class="nav-link">
					blog
				</RouterLink>
			</li>
			<li class="nav-item"><a href="/lien-he" class="nav-link">liên hệ</a></li>
			<li class="nav-item">
				<div class="box-search">
					<input type="text" class="input-search" placeholder="Tìm kiếm...">
					<div class="btn-icon-search">
						<Search />
					</div>
				</div>
			</li>
		</ul>
		<div class="flex-item top-bar-buttons">
			<a href="/cart" class="btn btn-cart">
				<IconCart />
				<span class="quantity">
					<div class="number">10</div>
				</span>
			</a>
			<a href="/user" class="btn btn-user">
				<IconUser />
			</a>
		</div>
	</section>
</template>

<script>
</script>

<style>
	.header-navbar-top {
		max-height: 72px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px solid var(--cl-secondary);
	}

	.flex-item {
		flex-grow: 0;
		flex-shrink: 1;
		box-sizing: border-box;
	}

	.nav-brand {
		flex-basis: 10%;
		margin: 5px 0 5px 20px;
	}

	.navbar-menu {
		flex-grow: 2;
		display: flex;
		flex-basis: 30%;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		align-items: center ;
	}

	.navbar-menu .nav-item {
		padding: 0 15px;
		box-sizing: border-box;
		align-items: center;
	}

	.navbar-menu .nav-item:hover .nav-link,
	.navbar-menu .nav-item .nav-link.active {
		color: var(--cl-hover-menu-top);
	}

	.navbar-menu .nav-item .nav-link {
		text-transform: uppercase;
		font-weight: 600;
	}
	
	.box-search{
		border: 2px solid var(--cl-secondary);
		border-radius: 15px;
		display: flex;
		justify-content: center;
		align-items: stretch;
		overflow: hidden;
	}
	.input-search{
		border: none;
		min-height: 100%;
		padding:0 10px;
		outline: none;
		color: var(--cl-text-secondary);
		flex-basis: 75%;
	}
	
	.btn-icon-search{
		flex-basis: 20%;
		cursor: pointer;
		padding: 5px 7px;
		position: relative;
	}
	.btn-icon-search::after{
		content: "";
		position: absolute;
		width: 2px;
		height: 70%;
		background: var(--cl-secondary);
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}

	.top-bar-buttons {
		flex-basis: 10%;
		margin-right: 20px;
		display: flex;
		justify-content: end;
	}

	.btn {
		box-sizing: border-box;
		margin: 0 15px;
	}

	.btn-cart {
		position: relative;
	}

	.btn-cart .quantity {
		position: absolute;
		background: var(--bg-quantity-cart);
		width: 20px;
		height: 20px;
		top: 0;
		left: 100%;
		transform: translate(-30%, -30%);
		border-radius: 50%;
		z-index: 2;
	}

	.btn-cart .quantity .number {
		color: var(--bg-default);
		text-align: center;
		line-height: 20px;
	}
</style>