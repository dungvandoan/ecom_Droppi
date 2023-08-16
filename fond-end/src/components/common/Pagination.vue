<script setup>
	import router from '../../router/index.js';
	import Left from '../../assets/icon-svg/pagination/btn-left.vue'
	import Right from '../../assets/icon-svg/pagination/btn-right.vue'
</script>
<template>
	<div class="pagination d-flex justify-content-end my-1 px-5">
		<ul class="wrapper-pagination d-flex align-items-center">
			<li class="pagination-item" :class="{active : numActive === pageNumber}"
				v-for="pageNumber in visiblePageNumbers" :key="pageNumber">
				<span v-if="pageNumber === '...'">...</span>
				<a @click="changePage(pageNumber)" v-else class="pagination-link fw-700">{{ pageNumber }}</a>
			</li>
			<span class="page pag-prev" v-show="numActive !== 1" @click="goToPage('prev',numActive)">
				<Left :setWidth="14" :setHeight="14" :setColor="`var(--gray-dark)`" />
			</span>
			<span class="page pag-next" v-show="numActive !== totalPages" @click="goToPage('next',numActive)">
				<Right :setWidth="14" :setHeight="14" :setColor="`var(--gray-dark)`" />
			</span>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			totalItems: Number,
			numActive: Number
		},
		data() {
			return {
				itemsPerPage: 12,
			};
		},
		computed: {
			totalPages() {
				return Math.ceil(this.totalItems / this.itemsPerPage);
			},
			visiblePageNumbers() {
				const maxVisiblePages = 1;
				const pages = [];

				const startPage = Math.max(1, this.numActive - maxVisiblePages);
				const endPage = Math.min(this.totalPages, this.numActive + maxVisiblePages);

				for (let i = startPage; i <= endPage; i++) {
					pages.push(i);
				}

				if (startPage > 1) {
					if (startPage > 2) {
						pages.unshift('...');
					}
					pages.unshift(1);
				}

				if (endPage < this.totalPages) {
					if (endPage < this.totalPages - 1) {
						pages.push('...');
					}
					pages.push(this.totalPages);
				}

				return pages;
			},
		},
		methods: {
			goToPage(curr, active) {
				if (curr === "prev") {
					this.changePage(active - 1);
				} else {
					this.changePage(active + 1)
				}
			},
			changePage(pageNumber) {
				router.push({
					name: 'shopPage',
					params: {
						pageNumber
					}
				});
				this.$emit('page-changed', pageNumber);
			}
		},
	};
</script>

<style>
	.wrapper-pagination {
		position: relative;
	}

	.pagination-item {
		margin: 0 3px;
		cursor: pointer;
	}

	.pagination-item .pagination-link {
		display: block;
		color: var(--gray-dark);
		width: 30px;
		height: 30px;
		line-height: 30px;
		border: 1px solid var(--gray-medium);
		border-radius: 50%;
		text-align: center;
	}

	.pagination-item.active .pagination-link {
		color: var(--white);
		background: var(--green-medium);
	}

	.page {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 30px;
		height: 30px;
		border: 1px solid var(--gray-medium);
		border-radius: 50%;
		text-align: center;
		line-height: 35px;
		cursor: pointer;
	}

	.page.pag-prev {
		left: -30px;
	}

	.page.pag-next {
		right: -30px;
	}
</style>