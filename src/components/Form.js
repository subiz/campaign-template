export default {
	name: 'jform',
	props: ['form'],
	computed: {
		showForm () {
			return this.form && this.form.enabled && this.form.fields && this.form.fields.length > 0
		},
	},

	render (h) {
		let v = [1, 2].filter(i => i < 3).join('x')
		return <i>{v}</i>
	},
}
