<script src="./base.js"></script>
<style src='./template3_2.css'></style>

<template>
<div class="template template3_2">
	<div  v-if="!close" :class="'container ' + mode">
		<button class="button-close" @click="onClose"></button>
		<p class="title">{{page.title}}</p>
		<p class="description">{{page.description}}</p>
		<div class="buttons-container">
			<button @click="onPrimaryClick" v-show="showPrimaryButton">
				{{primaryButtonText}}
			</button>
			<button @click="onSecondaryClick" v-show="showSecondaryButton" class="secondary-button">
				{{secondatyButtonText}}
			</button>
		</div>
	</div>
</div>
</template>
