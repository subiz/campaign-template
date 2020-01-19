<script src="./template6.js"></script>
<template>
	<div class="template template6">
	<div v-if="!close" :class="'container '+ mode">
		<button class="button-close" @click="onClose"></button>
		<p class="title">{{page.title}}</p>
		<div class="white-div"/>
		<p class="description">{{page.description}}</p>
		<Form :form="page.form" />
		<div class="buttons-container">
			<button @click="onPrimaryClick" v-if="showPrimaryButton" class="primary-button">
				{{primaryButtonText}}
			</button>
			<button @click="onSecondaryClick" v-if="showSecondaryButton"  class="secondary-button">
				{{secondaryButtonText}}
			</button>
		</div>
	</div>
	</div>
</template>
<style src="./template6.css"></style>