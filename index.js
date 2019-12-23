import Template1 from './templates/template1.js'
import Form from './components/Form.js'
var Template = null
export default {
	name: 'template',
	props: ['pages'],
	data() {},

	async created() {
		const loadTemplate1 = () =>
			import(/*webpackChunkName: "template1" */ './templates/template1.js')
		Template = (await loadTemplate1()).default
	},

	render() {
		return (
			<div vOn:click={this.onBackgroundClick}>
				<Template
					page={this.page}
					vOn:primaryClick={this.onPrimaryClick}
					vOn:secondaryClick={this.onSecondaryClick}
				>
					<template vSlot:form>
						<Form ref="form" form={this.page.form} />
					</template>
					<template vSlot:countdown>
						<CountDown />
					</template>

					<template vSlot:countdown>
						<Video />
					</template>
				</Template>
			</div>
		)
	},

	methods: {
		onPrimaryClick() {
			this.$refs.form && this.$refs.form.validate()
		},

		onSecondaryClick() {},
	},

	async created() {},
}
