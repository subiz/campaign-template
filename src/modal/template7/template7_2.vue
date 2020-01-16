<script src='./template7_2.js'></script>
<style src='./template7_2.css'></style>

<template>
<div class="template template7_2">
	<div  v-if="!close" :class="'container ' + mode">
		<button class="button-close" @click="onClose"></button>
		<p class="title">{{page.title}}</p>
		<p class="description">{{page.description}}</p>
		<div class="buttons-container">
			<button @click="onPrimaryClick" v-if="showPrimaryButton" class="primary-button">
				{{primaryButtonText}}
			</button>
			<button @click="onSecondaryClick" v-if="showSecondaryButton" class="secondary-button">
				{{secondaryButtonText}}
			</button>
		</div>
	</div>
</div>
</template>
