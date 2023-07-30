<script setup>
	import JsonPro from '../data/products.json'
	import ChevronRight from '../../assets/icon-svg/chevron-right.vue';
</script>
<template>
	<section class="breadcrumb">
		<div class="container">
			<ul class="list-breadcrumb d-flex align-items-center flex-wrap">
				<li v-for="(item,index) in listLink" :key="index" class="breadcrumb-item">
					<a :href="getLink(item)" class="breadcrumb-link uppercase">{{ item }}</a>
					<ChevronRight v-show="index < listLink.length - 1" :setWidth="10" :setHeight="10" class="mx-2" />
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				listLink: [],
				json: JsonPro,
			}
		},
		watch: {
			'$route'() {
				this.updateBreadcrumb();
			},
		},
		methods: {
			updateBreadcrumb() {
				this.listLink = this.buildBreadcrumbList(this.$route.path);
			},
			buildBreadcrumbList(currentLink) {
				const breadcrumbList = [];
				if (currentLink === '/') breadcrumbList.push('sản phẩm');
				if (currentLink === '/blog') breadcrumbList.push('blog');
				if (currentLink === '/lien-he') breadcrumbList.push('liên hệ');

				const x = (this.$route.path.split('/')).filter(item => item !== "")
				if (x.length >= 2) {
					const y = this.json.find(data => data.txtLink === x[1]);
					breadcrumbList.push('sản phẩm', y.category, y.name)
				}
				return breadcrumbList;
			},
			getLink(item) {
				if (item === 'sản phẩm') return '/';
				if (item === 'blog') return '/blog';
				if (item === 'liên hệ') return '/lien-he';
			}
		},
	}
</script>

<style>
	.breadcrumb {
		width: 100%;
		background: var(--gray-light);
		border-bottom: 1px solid var(--gray-medium);
	}

	.list-breadcrumb {
		min-height: 52px;
	}

	.list-breadcrumb .item .link {
		font-size: 10px;
		color: var(--gray-medium);
	}

	@media (max-width: 991.98px) {
		.breadcrumb{
			padding: 5px 30px;
			font-size: 10px;
		}
	}
</style>