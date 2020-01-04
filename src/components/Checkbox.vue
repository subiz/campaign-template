<template>
	<label class="checkbox--label">
		{{title}}
		<input type="checkbox" @change="onChange" :checked="checked" />
		<span class="checkmark">
			<svg
				width="14"
				height="10"
				viewBox="0 0 8 6"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.33317 0.5L2.74984 5.08333L0.666504 3"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</svg>
		</span>
	</label>
</template>

<script>
 export default {
	 name: 'checkbox',

	 props: ['title', 'obj', 'prop'],

	 computed: {
		 checked: function() {
			 return sb.get(this.obj, this.prop)
		 },
	 },

	 methods: {
		 onChange (ev) {
			 sb.set(this.obj, this.prop, ev.target.checked)
		 },
	 },
 }
</script>
