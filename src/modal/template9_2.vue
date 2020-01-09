<script src="./base.js"></script>
<style src="./template9_2.css"></style>
<template>
	<div class="template template9_2">
		<div  v-if="!close" :class="'container ' + mode">
			<button class="button-close" @click="onClose"></button>
			<p class="title">{{page.title}}</p>
			<p class="description">{{page.description}}</p>
			<div class="buttons-container">
				<button @click="onPrimaryClick" v-show="showPrimaryButton" class="primary-button">
					{{primaryButtonText}}
				</button>
				<button @click="onSecondaryClick" v-show="showSecondaryButton" class="secondary-button">
					{{secondaryButtonText}}
				</button>
			</div>
		</div>
	</div>
</template>
