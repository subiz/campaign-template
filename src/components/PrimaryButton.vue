<script>
export default {
	name:'primarybutton',
	props:{primarybutton: Object}
}
</script>
<template>
		<div class="buttons-container">
			<button class="primary-button">
				<p class="primary-button--text">{{this.primarybutton.text}}</p>
			</button>
		</div>	
</template>