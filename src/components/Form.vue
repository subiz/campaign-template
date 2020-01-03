<script>
	export default {
		name:'form',
		props:{form: Object},
		components: {
    PrimaryButton
  },
	}
</script>
<template>
	<div class="inputs-container">
		<form class="form">
			<div class="form"  v-bind:key="field" v-for="field in form.fields">
				<textarea  v-if="field.multiline_text" class='textarea' :placeholder="field.placeholder" maxlength="1000"/>
				<input v-else  class="input" id="name" :placeholder="field.placeholder"/><br>
			</div>
		</form>
	</div>
</template>
