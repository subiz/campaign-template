import css from '!to-string-loader!css-loader!less-loader!./template1.less'
import { wrap } from './common.js'
var op = require('object-path')
op.get('a')
export default wrap(
	{
		id: 'template1',
		type: 'modal',

		text: {
			name: { vi: 'Mẫu 1: Hỏi thông tin', en: 'Template 1: Ask information' },
			title: { vi: 'Giảm 10%', en: '10% OFF' },
			description: {
				vi: 'với đơn hàng đầu tiên của bạn',
				en: 'your first order',
			},
			primary_button: { vi: 'Đăng ký ngay', en: 'Sign up now' },
			secondary_button: {
				vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
				en: "No, thanks. I'll be back later",
			},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: '#424E58',
			primary_button_color: 'white',
			secondary_button_background: 'transparent',
			secondary_button_color: '#777',
			input_color: 'black',
			input_background: 'transparent',

			title_text_transform: 'uppercase',
			title_font_family: 'Yeseva One',
			title_font_size: '48px',
			title_font_weight: 'normal',
			title_font_style: 'normal',

			description_font_weight: 'normal',
			description_font_size: '24px',
			description_font_family: 'Roboto',
		},
		mobile_appearance: {
			title_font_size: '36px',
			description_front_size: '16px',
		},
	},
	css,
)
