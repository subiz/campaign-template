var Template = null
export default {
	name: 'template',
	props: ['page'],
	data() {},
	async created() {
		const loadTemplate = () =>
		import(`../campaign-template/vue/campain-template/src/modal/${page.template_id}.vue`)
		Template = (await loadTemplate()).default
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
