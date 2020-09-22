import css from '!to-string-loader!css-loader!less-loader!./template2.less'
import { wrap } from './common.js'

var op = require('object-path')
op.get('a')
export default wrap(
	{
		id: 'template2',
		type: 'modal',
		text: {
			name: { vi: 'Mẫu 2: Hỏi thông tin', en: 'Template 2: Ask information' },
			title: {
				vi: 'Đăng ký để nhận ưu đãi đặc biệt',
				en: 'Sign up to get special offer',
			},
			description: {
				vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
				en: 'Get 20% off your first order. Sign up now!',
			},
			primary_button: { vi: 'Đăng ký ngay', en: 'Sign up now' },
			secondary_button: { vi: 'Bỏ qua', en: 'Cancel' },
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: '#FDAD15',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',

			title_font_size: '35px',
			title_font_weight: '700',
			title_font_family: 'Montserrat',

			description_font_size: '18px',
			description_font_family: 'Muli',

			input_border_color: '#d9d9d9',
		},
		mobile_appearance: {
			title_font_size: '28px',
		},
	},
	css,
)
