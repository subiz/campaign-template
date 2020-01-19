import Vue from 'vue'
Vue.config.productionTip = false

import index from '../templates/index.js'
import Template from '../templates/template.js'

var common = require('./common.js')

new Vue({
	name: 'App',
	data () {
		return {
			template: 'template1', // CHANGE THIS TO SWITCH TEMPLATE
			page: {
				title: '',
				description: '',
				form: {
					enabled: true,
					fields: [
						{ key: 1, label: 'Họ Tên', is_required: true, type: 'text', placeholder: 'John Doe' },
						{ key: 2, label: 'Email', is_required: true, type: 'text', placeholder: 'johndoe@example.com' },
						{ key: 3, label: 'Họ Tên', is_required: true, type: 'text', placeholder: 'John Doe' },
						{ key: 4, label: 'Emails', is_required: true, type: 'text', placeholder: 'johndoe@example.com' },
					],
				},
				primary_button: { enabled: true, text: '' },
				secondary_button: { enabled: true, text: '' },
			},
		}
	},
	mounted () {
		var metadata = index[this.template]
		this.page.title = metadata.title.vi
		this.page.description = metadata.description.vi
		this.page.primary_button.text = metadata.primary_button_text.vi
		this.page.secondary_button.text = metadata.secondary_button_text.vi

		// make the environment look like widget environment
		common.setCssToHead('subiz-template-style-app', '#subiz * {all:unset;}')
	},
	render (h) {
		return (
			<div id="subiz">
				<Template template={this.template} page={this.page} />
			</div>
		)
	},
}).$mount('#app')
