var Template = null
export default {
	name: 'template',
	props: ['page'],
	data() {},
	async created() {
		const loadTemplate1 = () =>
		import('../campaign-template/vue/campain-template/src/modal/template2.vue')
			// import('../campaign-template/vue/campain-template/src/modal/template3.vue')
			// import('../campaign-template/vue/campain-template/src/modal/template4.vue')
		Template = (await loadTemplate1()).default
	},

	render() {
		return (
				<Template 
					// vOn:click={this.onBackgroundClick}
					// page={this.page}
					// vOn:primaryClick={this.onPrimaryClick}
					// vOn:secondaryClick={this.onSecondaryClick}
				/>
		)
	},
	// methods: {
	// 	onPrimaryClick() {
	// 		this.$refs.form && this.$refs.form.validate()
	// 	},
	// 	onSecondaryClick() {},
	// },
	async created() {},
}
