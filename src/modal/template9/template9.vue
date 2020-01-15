<script src="./template9.js"></script>
<style src="./template9.css"></style>
<template>
	<div class="template template9">
		<div v-if="!close" :class="'container '+ mode">
			<div class="left-content">
			</div>
			<div class="right-content">
				<button class="button-close" @click="onClose"></button>
				<p class="title">{{page.title}}</p>
				<p class="description">{{page.description}}</p>
				<Form :form="page.form"/>
				<div class="buttons-container">
					<button @click="onPrimaryClick"  v-show="showPrimaryButton"  class="primary-button">
						{{primaryButtonText}}
					</button>
					<button @click="onSecondaryClick" v-show="showSecondaryButton" class="secondary-button">
						{{secondaryButtonText}}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
