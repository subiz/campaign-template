import Vue from 'vue'
Vue.config.productionTip = false

import Template from '../templates/index.js'
import op from 'object-path'
var common = require('../common.js')

new Vue({
	name: 'App',
	data () {
		return {
			template: 'template1', // CHANGE THIS TO SWITCH TEMPLATE
			page: {
				title: 'Giam 10%',//'Đăng ký để nhận ưu đãi đặc biệt',
				description: 'với đơn hàng đầu tiên của bạn',// 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
				form: {
					enabled: true,
					fields: [
						{ key: 1, label: 'Họ Tên', is_required: true, type: 'text', placeholder: 'John Doe' },
						{ key: 2, label: 'Email', is_required: true, type: 'text', placeholder: 'johndoe@example.com' },
						{ key: 3, label: 'Họ Tên', is_required: true, type: 'text', placeholder: 'John Doe' },
						{ key: 4, label: 'Emails', is_required: true, type: 'text', placeholder: 'johndoe@example.com' },
						{ key: 2, label: 'Email', is_required: true, type: 'text', placeholder: 'johndoe@example.com' },
					],
				},
				primary_button: { enabled: true, text: 'DANG KY NGAY ' },
				secondary_button: { enabled: true, text: 'Khong, cam on toi se quay lai sau' },
			},
		}
	},
	mounted () {
		this.template = window.location.pathname.substr(1)
		var metadata = Template.meta[this.template].en
		if (!op.get(this.page, 'title')) op.set(this.page, 'title', op.get(metadata, 'title'))
		if (!op.get(this.page, 'description')) op.set(this.page, 'description', op.get(metadata, 'description'))
		if (!op.get(this.page, 'primary_button.text')) {
			op.set(this.page, 'primary_button.text', op.get(metadata, 'primary_button.text'))
		}
		if (!op.get(this.page, 'secondary_button.text')) {
			op.set(this.page, 'secondary_button.text', op.get(metadata, 'secondary_button.text'))
		}
		// make the environment look like widget environment
		// common.setCssToHead('subiz-template-style-app', '#subiz * {all:unset;}')
	},

	render (h) {
		return (
			<div id="subiz">
				<Template.Template template={this.template} page={this.page} />
			</div>
		)
	},
}).$mount('#app')
