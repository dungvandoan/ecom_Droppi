<script setup>
	import product from '../../assets/icons/Sidenav/product.vue'
	import category from '../../assets/icons/Sidenav/category.vue'
	import edit from '../../assets/icons/Sidenav/edit.vue'
	import order from '../../assets/icons/Sidenav/order.vue'
	import blog from '../../assets/icons/Sidenav/blog.vue'
	import setting from '../../assets/icons/Sidenav/setting.vue'
	import circlePlus from '../../assets/icons/Sidenav/circle-plus.vue'
</script>
<template>
	<section class="sidenav">
		<span class="btn-create d-flex align-items-center g15 p-1 ms-1 me-5" >
			<circlePlus :setWidth="30" :setHeight="30" />
			Add Product
		</span>
		<ul class="list-sidenav py-2">
			<li class="sidenav-item active py-1 me-1">
				<a href="" class="sidenav-link ps-3 d-flex align-items-center g20">
					<product :setWidth="20" :setHeight="20" />
					Product
				</a>
			</li>
			<li class="sidenav-item py-1">
				<a href="" class="sidenav-link ps-3 d-flex align-items-center g20">
					<category :setWidth="20" :setHeight="20" />
					Category
				</a>
			</li>
			<li class="sidenav-item py-1">
				<a href="" class="sidenav-link ps-3 d-flex align-items-center g20">
					<edit :setWidth="20" :setHeight="20" />
					Menu
				</a>
			</li>
			<li class="sidenav-item py-1">
				<a href="" class="sidenav-link ps-3 d-flex align-items-center g20">
					<order :setWidth="20" :setHeight="20" />
					Order
				</a>
			</li>
			<li class="sidenav-item py-1">
				<a href="" class="sidenav-link ps-3 d-flex align-items-center g20">
					<blog :setWidth="20" :setHeight="20" />
					Blog
				</a>
			</li>
			<li class="sidenav-item py-1">
				<a href="" class="sidenav-link ps-3 d-flex align-items-center g20">
					<setting :setWidth="20" :setHeight="20" />
					Setting
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
</script>

<style>
	.sidenav {
		background: var(--whisper-white);
		width: 100%;
		min-height: 90vh;
	}
	
	.btn-create{
		background: var(--aqua-breeze);
		border-radius: 20px;
		cursor: pointer;
	}
	
	.sidenav-item.active{
		background: var(--pale-periwinkle);
		border-radius: 0 20px 20px 0;
	}
</style>