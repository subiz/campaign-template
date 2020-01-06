<script>
export default {
	name:'template9',
	props:["page"],
}
</script>
<template>
		<div class="container"> 
			<button class="button--close"></button>	
			<p class="title">{{page.title}}</p>
			<div class="products">
			</div>
			<p class="description">{{page.description}}</p>
			<div class="buttons-container">
				<button v-show="page.primary_button.enabled" class="primary-button">
					{{this.page.primary_button.text}}
				</button>
				<button v-show="page.secondary_button.enabled" class="secondary-button">
					{{this.page.secondary_button.text}}
				</button>
			</div>
		</div>
		</div>
</template>
