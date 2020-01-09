
<script src='./base.js'></script>
<style src='./template4.css'></style>

<template>
	<div class="template template4">
	<div v-if="!close" :class="'container '+  mode" >
			<div class="image">
				<button class="button-close" @click="onClose"/>
			</div>
			<p class="title">{{page.title}}</p>
			<p class="description">{{page.description}}</p>
			<Form :form="page.form" />
			<div class="buttons-container">
				<button @click="onPrimaryClick" v-show="showPrimaryButton">
					{{primaryButtonText}}
				</button>
				<button @click="onSecondaryClick" v-show="showSecondaryButton"  class="secondary-button">
					{{secondaryButtonText}}
				</button>
			</div>
	</div>
</div>
</template>
