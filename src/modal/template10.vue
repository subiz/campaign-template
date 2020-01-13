<script src="./template10.js"></script>
<style src="./template10.css"></style>
<template>
 	<div class="template template10">
 		<div v-if="!close" :class="'container ' + mode">
 			<div class="header" >
 				<div class="overlay"></div>
 				<button class="button-close" @click="onClose"></button>
 				<p class="description">{{page.description}}</p>
 				<div class="black-div"/>
 				<p class="title">{{page.title}}</p>
 			</div>
 			<Form :form="page.form"/>
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
