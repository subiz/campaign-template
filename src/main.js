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
				title: '', //'Đăng ký để nhận ưu đãi đặc biệt',
				description: '', // 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
				form: {
					enabled: true,
					fields: [
						{ key: 1, label: 'Họ Tên', is_required: true, type: 'text', placeholder: ' Họ tên' },
						{ key: 2, label: 'Email', is_required: true, type: 'text', placeholder: ' Email' },
						{ key: 2, label: 'Số điện thoại', is_required: true, type: 'text', placeholder: ' Số điện thoại' },

						{ key: 2, is_required: true, type: 'list', label: 'Feedback',
						list: ['Ở đây không có điều tôi tìm kiếm', 'Đừng lo, tôi sẽ quay lại', 'Giá của bạn chưa hợp lý', 'Thông tin của bạn chưa rõ ràng']},
						//{ key: 3, label: 'Họ Tên', is_required: true, type: 'text', placeholder: 'John Doe' },
						// { key: 1, label: 'Họ Tên', is_required: true, type: 'text', placeholder: ' John Doe' },
						// { key: 2, label: 'Email', is_required: true, type: 'text', placeholder: ' johndoe@example.com' },
						// { key: 1, label: 'Họ Tên', is_required: true, type: 'text', placeholder: ' John Doe' },
						// { key: 2, label: 'Email', is_required: true, type: 'text', placeholder: ' johndoe@example.com' },
						// { key: 1, label: 'Họ Tên', is_required: true, type: 'text', placeholder: ' John Doe' },
						// { key: 2, label: 'Email', is_required: true, type: 'text', placeholder: ' johndoe@example.com' },
						// { key: 1, label: 'Họ Tên', is_required: true, type: 'text', placeholder: ' John Doe' },
						// { key: 2, label: 'Email', is_required: true, type: 'text', placeholder: 'johndoe@example.com' },
					],
				},
				primary_button: { enabled: true, text: '' },
				secondary_button: { enabled: true, text: '' },
			},
		}
	},
	mounted () {
		this.template = window.location.pathname.substr(1)
		var metadata = Template.meta[this.template].text
		if (!op.get(this.page, 'title')) op.set(this.page, 'title', op.get(metadata, 'title.vi'))
		if (!op.get(this.page, 'description')) op.set(this.page, 'description', op.get(metadata, 'description.vi'))
		if (!op.get(this.page, 'primary_button.text')) {
			op.set(this.page, 'primary_button.text', op.get(metadata, 'primary_button_text.vi'))
		}
		if (!op.get(this.page, 'secondary_button.text')) {
			op.set(this.page, 'secondary_button.text', op.get(metadata, 'secondary_button_text.vi'))
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
