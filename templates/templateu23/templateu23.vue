<script src='./templateu23.js'></script>
<style src="./templateu23.css"></style>

<template>
<div class="template templateu23">
	<div v-if="!close" :class="'container '+ mode">
		<div class="left-content">
			<button class="button-close" @click="onClose"></button>
		</div>
		<div class="right-content">
			<p class="title">{{page.title}}</p>
			<p class="description">{{page.description}}</p>
			<Form :form="page.form"/>
			<div class="buttons-container">
				<button @click="onPrimaryClick" v-if="showPrimaryButton"  class="primary-button">
					{{primaryButtonText}}
				</button>
			</div>
		</div>
	</div>
	</div>
</template>
