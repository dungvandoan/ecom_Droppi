<script setup>
	import JsonPro from '../data/products.json'
	import JsonNew from '../data/news.json'
	import ChevronRight from '../../assets/icon-svg/chevron-right.vue';

	import {
		mixinGlobal
	} from '../../mixin/global.js';
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
		mixins: [mixinGlobal],
		data() {
			return {
				listLink: [],
				jsonPro: JsonPro,
				jsonNew: JsonNew,
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
				const x = (this.$route.path.split('/')).filter(item => item !== "");
				
				if (currentLink === '/') breadcrumbList.push('home');
				if (currentLink === '/san-pham') breadcrumbList.push('home', 'Sản phẩm');
				if (currentLink === '/blog') breadcrumbList.push('home', 'blog');
				if (currentLink === '/lien-he') breadcrumbList.push('home', 'liên hệ');

				if (x.length >= 2) {
					if (x[0] === "san-pham") {
						const y = this.jsonPro.find(data => this.removeDiacritics(data.name).split(' ').join("-") === x[
						1]);
						breadcrumbList.push('home', 'sản phẩm', y.category, y.name);
					}
					if (x[0] === "blog") {
						const y = this.jsonNew.find(data => this.removeDiacritics(data.title).split(' ').join("-") === x[
							1]);
						breadcrumbList.push('home', 'blog', y.category, y.title);
					}
				}
				return breadcrumbList;
			},
			getLink(item) {
				if (item === 'sản phẩm') return '/shop';
				if (item === 'blog') return '/blog';
				if (item === 'liên hệ') return '/lien-he';
			},
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
		.breadcrumb {
			padding: 5px 30px;
			font-size: 10px;
		}
	}
</style>