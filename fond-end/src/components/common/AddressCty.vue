<script setup>
	import JsonStore from '../data/store.json'
</script>
<template>
	<section class="addressCty my-3">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.8879226812955!2d105.75850020036364!3d20.95701555909411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452e8033c9927%3A0x16bf2784f92c0c02!2zNzEyIMSQLiBRdWFuZyBUcnVuZywgTGEgS2jDqiwgSMOgIMSQw7RuZywgSMOgIE7hu5lpIDEwMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1692268638049!5m2!1svi!2s"
			width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"></iframe>
		<p>&nbsp;</p>
		<div class="information-cty">
			<h1 class="fw-600 my-4">{{ json.nameCTY }}</h1>
			<p>
				<span>Địa chỉ:</span>
				{{ json.dia_chi }}
			</p>
			<p>
				<span>Điện thoại:</span>
				{{ json.dien_thoai }}
			</p>
			<p>
				<span>Email:</span>
				{{ json.email }}
			</p>
		</div>
		<hr>
		<div class="information-cty">
			<h3 class="fw-600 my-2 uppercase">chi nhánh 1:</h3>
			<p>
				<span>Địa chỉ:</span>
				{{ json.dia_chi }}
			</p>
			<p>
				<span>Điện thoại:</span>
				{{ json.dien_thoai }}
			</p>
			<p>
				<span>Email:</span>
				{{ json.email }}
			</p>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				json: JsonStore,
			}
		}
	}
</script>

<style>
	.information-cty h1 {
		font-size: 30px;
		line-height: 40px;
	}

	.information-cty p {
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: var(--gray-dark);
		margin: 5px 0;
	}

	.information-cty span {
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
	}

	@media (max-width: 575.98px) {
		.addressCty {
			margin: 30px 10px;
		}
	}
</style>