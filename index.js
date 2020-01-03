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
<<<<<<< Updated upstream
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
=======
					vOn:click={this.onBackgroundClick}
					page={this.page}
					vOn:primaryClick={this.onPrimaryClick}
					vOn:secondaryClick={this.onSecondaryClick}
				/>
		)
	},
	methods: {
		onPrimaryClick() {
			console.log("onPrimaryClick",)
			this.$refs.form && this.$refs.form.validate()
		},
		onSecondaryClick() {
			console.log("onSecondaryClick")
		},
		onBackgroundClick(){
			console.log("onBackgroundClick")
		}
	},
>>>>>>> Stashed changes
}

