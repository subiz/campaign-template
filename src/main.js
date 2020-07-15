import Vue from 'vue'
Vue.config.productionTip = false

import Template from '../templates/index.js'
import op from 'object-path'
var common = require('../common.js')

new Vue({
	name: 'App',
	data () {
		return {
			template: '',
			page: {
				animation: 'bounceIn',
				title: 'Đăng ký để nhận ưu đãi đặc biệt',
				description: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
				form: {
					enabled: true,
					fields: [
						{ key: 'email', label: 'Email', is_required: true, type: 'text', placeholder: ' Email' },
						{ key: 2, label: 'Số điện thoại', is_required: true, type: 'text', placeholder: ' Số điện thoại' },
						{ key: 1, label: 'Họ Tên', is_required: true, type: 'text', placeholder: ' Họ tên' },
						{ key: 2, label: 'Số điện thoại', is_required: true, type: 'text', placeholder: ' Số điện thoại' },
						{ key: 1, label: 'Họ Tên', is_required: true, type: 'text', placeholder: ' Họ tên' },
						{ key: 2, label: 'Email', is_required: true, type: 'text', placeholder: ' Email' },
						{ key: 2, label: 'Số điện thoại', is_required: true, type: 'text', placeholder: ' Số điện thoại' },
					],
				},
				primary_button: { enabled: true, text: '', actions: [{ action: 'submit' }] },
				secondary_button: { enabled: true, text: '', actions: [{ action: 'close' }] },
			},
			desktop_appearance: {
				background: 'red',
			},
		}
	},
	mounted () {
		this.template = window.location.pathname.substr(1)

		var metadata = Template.meta[this.template].text
		if (!op.get(this.page, 'title')) op.set(this.page, 'title', op.get(metadata, 'title.vi'))
		if (!op.get(this.page, 'description')) op.set(this.page, 'description', op.get(metadata, 'description.vi'))
		if (!op.get(this.page, 'primary_button.text')) {
			op.set(this.page, 'primary_button.text', op.get(metadata, 'primary_button.vi'))
		}
		if (!op.get(this.page, 'secondary_button.text')) {
			op.set(this.page, 'secondary_button.text', op.get(metadata, 'secondary_button.vi'))
		}
		// make the environment look like widget environment
		// common.setCssToHead('subiz-template-style-app', '#sbz-pop * {all:unset;}')
	},

	render (h) {
		return (
			<div id="sbz-pop">
				<Template.Template template={this.template} page={this.page} frame="browser" select="secondary_button" />
			</div>
		)
	},
}).$mount('#app')
