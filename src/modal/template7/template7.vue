<script src="./template7.js"></script>
<style src="./template7.css"></style>
<template>
	<div class="template template7">
		<div class="container">
			<button  class="button-close" @click="onClose"></button>
			<div class="left">
				<p class="title">{{page.title}}</p>
				<p class="description">{{page.description}}</p>
				<Countdown :countdown="page.countdown" />
				<Form :form="page.form" />
				<div class="buttons-container">
					<button @click="onPrimaryClick" v-show="showPrimaryButton" class="primary-button">
					{{primaryButtonText}}
					</button>
					<button @click="onSecondaryClick" v-show="showSecondaryButton"  class="secondary-button">
						{{secondaryButtonText}}
					</button>
				</div>
			</div>
			<div class="right">
			</div>
		</div>
	</div>
</template>