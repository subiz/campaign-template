<script>
 export default {
	 name:'form',
	 props: ["form"],
 }
</script>

<template>
	<form class="form">
		<div v-bind:key="field" v-for="field in form.fields">
			<textarea v-if="field.multiline_text" class='textarea'
											:placeholder="field.placeholder" maxlength="1000"/>

			<input v-else class="text-input" :placeholder="field.placeholder"/><br>
		</div>
	</form>
</template>
