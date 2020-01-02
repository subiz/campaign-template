<script>
export default {
	name:'primarybutton',
	props:{primarybutton: Object}
}
</script>
<template>
		<div class="template-main--buttons-container">
			<button class="template-main--primary-button">
				<p class="primary-button--text">{{this.primarybutton.text}}</p>
			</button>
		</div>	
</template>