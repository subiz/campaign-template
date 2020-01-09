<script src="./base.js"></script>
<style src="./template1.css"></style>

<template>
	<div class="template template1">
		<div v-if="!close" :class="'container ' + mode">
			<button class="button-close" @click="onClose"></button>
			<div class="main">
				<div class="image"></div>
				<div class="div-left"></div>
				<div class="div-right">
					<p class="title">{{page.title}}</p>
					<p class="description">{{page.description}}</p>
					<Form :form="page.form" />
					<div class="buttons-container">
						<button @click="onPrimaryClick" v-show="showPrimaryButton" class="primary-button">
							{{primaryButtonText}}
						</button>
						<a @click="onSecondaryClick" v-show="showSecondaryButton" class="secondary-button">
							{{secondaryButtonText}}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
