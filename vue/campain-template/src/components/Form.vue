<script>
	import PrimaryButton from './PrimaryButton.vue'
	export default {
		name:'form',
		props:{form: Object},
		components: {
    PrimaryButton
  },
	}
</script>
<template>
	<div class="template-main--inputs-container">
		<form class="form" >
				<input v-bind:key="field"  v-for="field in form.fields" class="template-main--input" id="name" :placeholder="field.label"/><br>
				<PrimaryButton :primarybutton="form.primary_button" type="submit" />
		</form>
	</div>
</template>

