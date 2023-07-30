<script setup>
	import Star from '../../assets/icon-svg/star.vue'
	import StarHalf from '../../assets/icon-svg/star-half.vue'
	import StarFill from '../../assets/icon-svg/star-fill.vue'
</script>
<template>
	<span class="proItenStar">
		<Star :setWidth="widthStar" :setHeight="widthStar" :setColor="colorStar" />
		<Star :setWidth="widthStar" :setHeight="widthStar" :setColor="colorStar" />
		<Star :setWidth="widthStar" :setHeight="widthStar" :setColor="colorStar" />
		<Star :setWidth="widthStar" :setHeight="widthStar" :setColor="colorStar" />
		<Star :setWidth="widthStar" :setHeight="widthStar" :setColor="colorStar" />
	</span>

</template>
<script>
	export default {
		props: {
			widthStar: {
				type: Number,
			},
			colorStar: {
				type: String,
				default: `var(--gray-medium)`
			}
		},
		data() {
			return {
				vote: 4
			}
		}
	}
</script>