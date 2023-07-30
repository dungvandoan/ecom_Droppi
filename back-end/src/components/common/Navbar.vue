<script setup>
	import IconMenu from '../../assets/icons/Navbar/menu.vue'
	import IconSearch from '../../assets/icons/Navbar/search.vue'
	import IconFilter from '../../assets/icons/Navbar/filter.vue'
	import IconSupport from '../../assets/icons/Navbar/support.vue'
	import IconSetting from '../../assets/icons/Navbar/setting.vue'
	import IconGrid from '../../assets/icons/Navbar/grid.vue'
	import IconUser from '../../assets/icons/Navbar/user.vue'
</script>
<template>
	<section class="navbar d-flex align-items-center">
		<div class="col nav-brand d-flex align-items-center px-2 g20">
			<div class="btn-icon btn-icon-sidenav">
				<IconMenu :setWidth="18" :setHeight="18" />
			</div>
			<div class="images-logo">
				<img src="../../assets/images/Navbar/logo_gmail.png" alt="img-logo" class="img-fluid">
			</div>
		</div>
		<div class="col form-search d-flex align-items-center">
			<div class="wrapper-search d-flex align-items-center px-1" :class="{'active' : focusSearch}">
				<div class="btn-icon btn-icon-search">
					<IconSearch :setWidth="18" :setHeight="18" />
				</div>
				<div class="form-control">
					<input type="text" placeholder="Tìm kiếm trong thư" @blur="focusSearch = false"
						@focus="focusSearch = true">
				</div>
				<div class="btn-icon btn-icon-filter">
					<IconFilter :setWidth="18" :setHeight="18" />
				</div>
			</div>
		<!-- 	<div class="form-filter"></div> -->
		</div>
		<div class="col button-support-user d-flex align-items-center justify-content-between	">
			<div class="btn-icon btn-icon-sp">
				<IconSupport :setWidth="18" :setHeight="18" />
			</div>
			<div class="btn-icon btn-icon-setting">
				<IconSetting :setWidth="18" :setHeight="18" />
			</div>
			<div class="btn-icon btn-icon-grid">
				<IconGrid :setWidth="18" :setHeight="18" />
			</div>
			<div class="btn-icon btn-icon-user">
				<IconUser :setWidth="18" :setHeight="18" />
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				focusSearch: false,
			}
		}
	}
</script>

<style>
	.navbar {
		background: var(--whisper-white);
		height: 75px;
	}

	.navbar .btn-icon {
		width: 50px;
		height: 50px;
		line-height: 57px;
		border-radius: 50%;
		text-align: center;
		outline: none;
		cursor: pointer;
	}

	.navbar .btn-icon:hover {
		background: var(--gray-light);
	}

	.col {
		flex-grow: 0;
		flex-shrink: 0;
		flex-wrap: nowrap;
		height: 100%;
	}

	.nav-brand {
		flex-basis: 13%;
	}

	.nav-brand .images-logo img {
		min-width: 120px;
	}

	.form-search {
		flex-basis: 37%;
		position: relative;
	}

	.form-search .wrapper-search {
		margin-left: 5px;
		width: 100%;
		height: 70%;
		border-radius: 50px;
		background: var(--calm-blue);
	}

	.form-search .wrapper-search .form-control {
		flex-basis: 90%;
		flex-grow: 0;
		flex-shrink: 1;
		height: 100%;
	}

	.form-search .wrapper-search .form-control>input {
		width: 100%;
		height: 100%;
		background: transparent;
		font-size: 16px;
	}

	.form-search .wrapper-search.active {
		background: white;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}


	.form-search .wrapper-search .btn-icon-search,
	.form-search .wrapper-search .btn-icon-filter {
		flex-grow: 0;
		flex-shrink: 0;
		text-align: center;
		max-width: 50px;
	}

	.button-support-user {
		flex-basis: 10%;
		margin-left: auto;
	}

	/* form-filter */
	/* .form-filter {
		width: 100%;
		height: 100%;
		position: absolute;
		background: red;
		top: 90%;
		left: 0;
	} */
</style>