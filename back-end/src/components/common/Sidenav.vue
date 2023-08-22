<script setup>
	import product from '../../assets/icons/Sidenav/product.vue'
	import category from '../../assets/icons/Sidenav/category.vue'
	import edit from '../../assets/icons/Sidenav/edit.vue'
	import order from '../../assets/icons/Sidenav/order.vue'
	import blog from '../../assets/icons/Sidenav/blog.vue'
	import setting from '../../assets/icons/Sidenav/setting.vue'
	import Pencil from '../../assets/icons/Sidenav/pencil.vue'
</script>
<template>
	<section class="sidenav py-1">
		<span class="btn-create d-flex align-items-center">
			<span class="bg-radius-add" :style="{width : change ? '95%':'50px'}"></span>
			<div class="btn-icon-create ps-2">
				<Pencil :setWidth="25" :setHeight="25" />
			</div>
			<p v-show="change" class="name-icon p-2">Add Product</p>
		</span>
		<ul class="list-sidenav py-1">
			<li class="sidenav-item active my-1">
				<RouterLink to="/" class="sidenav-link d-flex align-items-center">
					<span class="bg-radius" :style="{width : change ? '95%':'40px',
					 'margin-left': change ? '0' : '15px',
					 'border-radius': change ? '0 20px 20px 0':'50%'}">
					</span>
					<div class="icon">
						<product :setWidth="20" :setHeight="20" />
					</div>
					<p class="ps-2 name-icon" v-show="change">Sản phẩm</p>
				</RouterLink>
			</li>
			<li class="sidenav-item my-1">
				<RouterLink to="/category" class="sidenav-link d-flex align-items-center">
					<span class="bg-radius" :style="{width : change ? '95%':'40px',
					 'margin-left': change ? '0' : '15px',
					 'border-radius': change ? '0 20px 20px 0':'50%'}">
					</span>
					<div class="icon">
						<category :setWidth="20" :setHeight="20" />
					</div>
					<p class="ps-2 name-icon" v-show="change">Category</p>
				</RouterLink>
			</li>
			<li class="sidenav-item my-1">
				<RouterLink to="/menu" class="sidenav-link d-flex align-items-center">
					<span class="bg-radius" :style="{width : change ? '95%':'40px',
				 'margin-left': change ? '0' : '15px',
				 'border-radius': change ? '0 20px 20px 0':'50%'}">
					</span>
					<div class="icon">
						<edit :setWidth="20" :setHeight="20" />
					</div>
					<p class="ps-2 name-icon" v-show="change">Menu</p>
				</RouterLink>
			</li>
			<li class="sidenav-item my-1">
				<RouterLink to="/order" class="sidenav-link d-flex align-items-center">
					<span class="bg-radius" :style="{width : change ? '95%':'40px',
				 'margin-left': change ? '0' : '15px',
				 'border-radius': change ? '0 20px 20px 0':'50%'}">
					</span>
					<div class="icon">
						<order :setWidth="20" :setHeight="20" />
					</div>
					<p class="ps-2 name-icon" v-show="change">Order</p>
				</RouterLink>
			</li>
			<li class="sidenav-item my-1">
				<RouterLink to="/blog" class="sidenav-link d-flex align-items-center">
					<span class="bg-radius" :style="{width : change ? '95%':'40px',
				 'margin-left': change ? '0' : '15px',
				 'border-radius': change ? '0 20px 20px 0':'50%'}">
					</span>
					<div class="icon">
						<blog :setWidth="20" :setHeight="20" />
					</div>
					<p class="ps-2 name-icon" v-show="change">Blog</p>
				</RouterLink>
			</li>
			<li class="sidenav-item my-1">
				<RouterLink to="/setting" class="sidenav-link d-flex align-items-center">
					<span class="bg-radius" :style="{width : change ? '95%':'40px',
				 'margin-left': change ? '0' : '15px',
				 'border-radius': change ? '0 20px 20px 0':'50%'}">
					</span>
					<div class="icon">
						<setting :setWidth="20" :setHeight="20" />
					</div>
					<p class="ps-2 name-icon" v-show="change">Setting</p>
				</RouterLink>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		props: {
			change: Boolean,
		},
		data() {
			return {

			}
		}
	}
</script>

<style>
	.sidenav {
		background: var(--whisper-white);
		width: 100%;
		height: 100%;
	}

	.btn-create {
		border-radius: 10px;
		cursor: pointer;
		height: 50px;
		position: relative;
	}

	.bg-radius-add {
		position: absolute;
		background: var(--aqua-breeze);
		height: 100%;
		left: 10px;
		transition: all .3s ease;
		border-radius: 10px;
	}

	.btn-icon-create {
		width: 50px;
		height: 50px;
		text-align: center;
		line-height: 65px;
		z-index: 1;
	}

	.sidenav-link {
		transition: all .1s ease;
		position: relative;
		height: 40px;
	}
	
	.sidenav-item.active .bg-radius{
		background: var(--pale-periwinkle);
	}

	.bg-radius {
		position: absolute;
		height: 100%;
		transition: all .3s ease;
	}

	.icon {
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 50px;
		border-radius: 50%;
		padding-left: 25px;
		z-index: 1;
	}

	.name-icon {
		z-index: 1;
	}
</style>