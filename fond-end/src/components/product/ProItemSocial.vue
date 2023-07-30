<script setup>
	import Facebook from '../../assets/icon-svg/social/facebook.vue'
	import Twitter from '../../assets/icon-svg/social/twitter.vue'
	import Linkedin from '../../assets/icon-svg/social/linkedin.vue'
	import Pinterest from '../../assets/icon-svg/social/pinterest.vue'
	import Email from '../../assets/icon-svg/social/email.vue'
	import Tumblur from '../../assets/icon-svg/social/tumblur.vue'
</script>
<template>
	<div class="proItemSocial d-flex align-items-center flex-wrap">
		<span class="uppercase fw-600 me-2">chia sẻ</span>
		<ul class="icon-social d-flex justify-content-center align-items-center">
			<li class="social-item">
				<a href="#" class="social-link">
					<Facebook />
				</a>
			</li>
			<li class="social-item">
				<a href="#" class="social-link">
					<Twitter />
				</a>
			</li>
			<li class="social-item">
				<a href="#" class="social-link">
					<Linkedin />
				</a>
			</li>
			<li class="social-item">
				<a href="#" class="social-link">
					<Pinterest />
				</a>
			</li>
			<li class="social-item">
				<a href="#" class="social-link">
					<Email />
				</a>
			</li>
			<li class="social-item">
				<a href="#" class="social-link">
					<Tumblur />
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	.proItemSocial span{
		font-size: 16px;
		line-height: 26px;
		color: var(--gray-dark);
	}
	.icon-social .social-item{
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: #4C4C4C;
		margin: 0 5px;
		text-align: center;
	}
	.icon-social .social-item .social-link{
		line-height: 37.5px;
	}
</style>