<script setup>
	import sortDown from '../../assets/icons/ListAction/sortDown.vue'
	import rotate from '../../assets/icons/ListAction/rotate.vue'
	import ellipsis from '../../assets/icons/ListAction/ellipsis.vue'
	import chevronLeft from '../../assets/icons/ListAction/chevronLeft.vue'
	import chevronRight from '../../assets/icons/ListAction/chevronRight.vue'
</script>
<template>
	<section class="listItemAction d-flex justify-content-between px-1">
		<div class="button-top-action d-flex align-items-center g10 ps-2">
			<div class="form-check-items d-flex align-items-center">
				<div class="checkBoxAll text-center">
					<input type="checkbox">
				</div>
				<div class="btn-icon-down">
					<sortDown :setWidth="20" :setHeight="20" />
				</div>
			</div>
			<div class="btn-icon">
				<rotate :setWidth="20" :setHeight="20" />
			</div>
			<div class="btn-icon">
				<ellipsis :setWidth="20" :setHeight="20" />
			</div>
		</div>
		<div class="pagination d-flex align-items-center g10">
			<span>1-35 trong số 35</span>
			<div class="btn-icon">
				<chevronLeft :setWidth="20" :setHeight="20" />
			</div>
			<div class="btn-icon">
				<chevronRight :setWidth="20" :setHeight="20" />
			</div>
		</div>
	</section>
</template>

<script>
</script>

<style>
	.listItemAction {
		background: var(--white);
		min-height: 50px;
		border-radius: 20px 20px 0 0;
	}

	.form-check-items {
		height: 80%;
		align-items: center;
	}

	.form-check-items .checkBoxAll,
	.form-check-items .btn-icon-down {
		width: 20px;
		height: 100%;
	}
	.form-check-items .checkBoxAll{
		line-height: 40px;
	}
	
	.form-check-items .btn-icon-down{
		line-height: 40px;
	}

	.form-check-items .checkBoxAll:hover,
	.form-check-items .btn-icon-down:hover {
		background: var(--gray-light);
	}

	.listItemAction .btn-icon {
		width: 40px;
		height: 40px;
		line-height: 52px;
		border-radius: 50%;
		text-align: center;
		outline: none;
		cursor: pointer;
	}

	.listItemAction .btn-icon:hover {
		background: var(--gray-light);
	}
</style>