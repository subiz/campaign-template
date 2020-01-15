<script>
export default {
	
}
</script>
<style src="./template7.css"></style>
<template>
	<div class="template template7">
		<div class="container">
			<div class="left">
				<p>Đăng ký để nhận ưu đãi đặc biệt.</p>
				<p>Giảm 20% chỉ một ngày duy nhất. Miễn phí vận chuyển></p>
				<Countdown />
				<div class="button-container">
					<button @click="onPrimaryClick" v-show="showPrimaryButton" class="primary-button">
					{{primaryButtonText}}
					</button>
					<button @click="onSecondaryClick" v-show="showSecondaryButton"  class="secondary-button">
						{{secondaryButtonText}}
					</button>
				</div>
			</div>
			<div class="right"></div>

		</div>
	</div>
</template>