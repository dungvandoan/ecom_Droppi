<template>
	<section class="breadcrumb">
		<div class="container">
			<ol class="list-breadcrumb">
				<li class="item"><a href="#" class="link">home</a></li>
				<li class="item"><a href="#" class="link">sản phẩm</a></li>
			</ol>
		</div>
	</section>
</template>

<script>
</script>

<style>
	.breadcrumb {
		background: var(--bg-secondary);
		border-bottom: 1px solid var(--cl-secondary);
	}

	.list-breadcrumb {
		display: flex;
		align-items: center;
		min-height: 52px;
	}

	.list-breadcrumb>:not(.item:first-child) {
		margin-left: 20px;
	}

	.list-breadcrumb .item .link {
		text-transform: uppercase;
		color: var(--cl-text-secondary);
	}
</style>