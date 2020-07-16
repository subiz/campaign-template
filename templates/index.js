import Form from '../components/Form.js'
import CloseButton from '../components/CloseButton.js'
var common = require('../common.js')
var op = require('object-path')

const MODE = common.mobilecheck() ? 'mobile' : 'desktop'
var CSS = ''
var meta = {
	templateThanks: {
		css: () =>
			import(
				/*webpackChunkName: "templateThanks_css" */ '!to-string-loader!css-loader!less-loader!./templateThanks.less'
			),
		type: '2',
		text: {
			name: {vi: 'Form cảm ơn ', en: 'Form thank you'},
			title: {vi: 'Cảm ơn bạn!', en: 'Thank you!'},
			description: {
				vi: 'Chúng tôi đã nhận được yêu cầu liên hệ của bạn và chúng tôi sẽ gọi lại cho bạn vào thời gian bạn đã chọn.',
				en: 'Thanks for contacting us! We’ll get back to you as soon as possible',
			},
			primary_button: {vi: 'Hoàn tất', en: 'Done'},
			secondary_button: {
				vi: 'Đóng',
				en: 'Close',
			},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: '#0265ff',
			primary_button_color: 'white',
			secondary_button_background: '#e5e5e5',
			secondary_button_color: '#777',
			input_color: 'black',
			input_background: 'transparent',
		},
	},
	template1: {
		// js: () => import( /*webpackChunkName: "template1" */ './template1/index.js'),
		css: () =>
			import(/*webpackChunkName: "template1_css" */ '!to-string-loader!css-loader!less-loader!./template1.less'),

		type: 'modal',

		text: {
			name: {vi: 'Mẫu 1: Hỏi thông tin', en: 'Template 1: Ask information'},
			title: {vi: 'Giảm 10%', en: '10% OFF'},
			description: {
				vi: 'với đơn hàng đầu tiên của bạn',
				en: 'your first order',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Sign up now'},
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
		},
	},
	template2: {
		css: () =>
			import(/*webpackChunkName: "template2_css" */ '!to-string-loader!css-loader!less-loader!./template2.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 2: Hỏi thông tin', en: 'Template 2: Ask information'},
			title: {
				vi: 'Đăng ký để nhận ưu đãi đặc biệt',
				en: 'Sign up to get special offer',
			},
			description: {
				vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
				en: 'Get 20% off your first order. Sign up now!',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg2.png') + ')',
			primary_button_background: '#FDAD15',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
	},
	template3: {
		css: () =>
			import(/*webpackChunkName: "template3_css" */ '!to-string-loader!css-loader!less-loader!./template3.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 3: Hỏi thông tin', en: 'Template 3: Ask information'},
			title: {
				vi: 'Đăng ký để nhận ưu đãi đặc biệt',
				en: 'Sign up to get special offer',
			},
			description: {
				vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
				en: 'Get 20% off your first order. Sign up now!',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: '#d12',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
	},
	template4: {
		css: () =>
			import(/*webpackChunkName: "template4_css" */ '!to-string-loader!css-loader!less-loader!./template4.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 4: Hỏi thông tin', en: 'Template 4: Ask information'},
			title: {
				vi: 'Đăng ký để nhận ưu đãi đặc biệt',
				en: 'Sign up to get special offer',
			},
			description: {
				vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
				en: 'Get 20% off your first order. Sign up now!',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg4.png') + ')',
			primary_button_background: '#001984',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
	},
	template5: {
		css: () =>
			import(/*webpackChunkName: "template5_css" */ '!to-string-loader!css-loader!less-loader!./template5.less'),
		type: 'fullscreen',
		text: {
			name: {vi: 'Form đăng ký nhận ưu đãi', en: 'Sign up offer'},
			title: {
				vi: 'Đăng ký để nhận ưu đãi đặc biệt',
				en: 'Sign up to get special offer',
			},
			description: {
				vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
				en: 'Get 20% off your first order. Sign up now!',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: 'white',
			description_color: 'white',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: '#FDAD15',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '#000',
			input_background: '#fff',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/bg5_mobile.png') + ')',
		},
	},
	template6: {
		css: () =>
			import(/*webpackChunkName: "template6_css" */ '!to-string-loader!css-loader!less-loader!./template6.less'),
		type: 'fullscreen',
		text: {
			name: {vi: 'Form đăng ký nhận ưu đãi', en: 'Sign up offer'},
			title: {
				vi: 'Đăng ký để nhận ưu đãi đặc biệt',
				en: 'Sign up to get special offer',
			},
			description: {
				vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
				en: 'Get 20% off your first order. Sign up now!',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: '#fff',
			description_color: '#fff',
			background: 'white',
			primary_button_background: '#c89c3e',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
		mobile_appearance: {
			title_color: '#fff',
			description_color: '#fff',
			background: 'white',
			background_image: 'url(' + require('../assets/background/template6_mobile.png') + ')',
			primary_button_background: '#dab86a',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
	},
	template9: {
		css: () =>
			import(/*webpackChunkName: "template9_css" */ '!to-string-loader!css-loader!less-loader!./template9.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 5: Xin ý kiến đánh giá', en: 'Template 5: Feedback'},
			title: {
				vi: 'Bạn có tìm được thứ mình cần?',
				en: 'Did you find what you need?',
			},
			description: {
				vi: 'Chia sẻ cảm nhận của bạn cho chúng tôi bạn sẽ nhận được 10% GIẢM GIÁ.',
				en: 'Share your recent experience and get 10% off your next purchase',
			},
			primary_button: {vi: 'Gửi cảm nhận', en: 'Send feedback'},
			secondary_button: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: '#fdad15',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
	},
	template10: {
		css: () =>
			import(/*webpackChunkName: "template10_css" */ '!to-string-loader!css-loader!less-loader!./template10.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 6: Xin ý kiến đánh giá', en: 'Template 6: Feedback'},
			title: {
				vi: 'Feedback của bạn rất quan trọng với chúng tôi!',
				en: 'Your feedback is valuable to us!',
			},
			description: {
				vi: 'Oh không! Tại sao bạn lại rời khỏi đây quá sớm như thế?',
				en: 'Oh no! Why do you leave so soon?',
			},
			primary_button: {vi: 'Gửi ngay', en: 'Send feedback'},
			secondary_button: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: '#000',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '#000',
			input_background: '#fff',
		},
	},
	template20: {
		css: () =>
			import(/*webpackChunkName: "template20_css" */ '!to-string-loader!css-loader!less-loader!./template20.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 7: Hỏi thông tin', en: 'Template 7: Ask information'},
			title: {
				vi: 'Đăng ký ngay để nhận mã giảm gía 15%',
				en: 'Register and get 15% off your next order',
			},
			description: {
				vi: 'Và nhận thông báo về các chương trình khuyến mãi mới nhất của chúng tôi',
				en: 'And never miss out any new promotion',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Shop now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: 'white',
			description_color: 'black',
			background: 'white',
			primary_button_background: 'linear-gradient(107.32deg, #EE4A9B 0%, #F9A219 100%)',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '#000',
			input_background: '',
		},
	},

	template21: {
		css: () =>
			import(/*webpackChunkName: "template21_css" */ '!to-string-loader!css-loader!less-loader!./template21.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 9: Hỏi thông tin', en: 'Template 9: Ask information'},
			title: {
				vi: 'Đăng ký ngay để nhận mã giảm gía 15%',
				en: 'Register and get 15% off your next order',
			},
			description: {
				vi: 'Và nhận thông báo về các chương trình khuyến mãi mới nhất của chúng tôi',
				en: 'And never miss out any new promotion',
			},
			primary_button: {vi: 'Nhận mã giảm giá', en: 'Get the coupon code'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: 'white',
			description_color: 'white',
			background: 'white',
			primary_button_background: 'linear-gradient(109.98deg, #D53938 0%, #FEBD3C 100%);',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#B3C4CC',
			input_color: '#fff',
			input_background: 'none',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template21_mobile.png') + ')',
		},
	},
	template22: {
		css: () =>
			import(/*webpackChunkName: "template22_css" */ '!to-string-loader!css-loader!less-loader!./template22.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 10: Hỏi thông tin', en: 'Template 10: Ask information'},
			title: {
				vi: 'Săn coupon hot với ưu đãi đến 49%',
				en: 'Get up to 49% off now',
			},
			description: {
				vi: 'Đừng bỏ lỡ cơ hội này',
				en: "Don't miss this change",
			},
			primary_button: {vi: 'Săn coupon ngay', en: 'Get the coupon'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: 'white',
			description_color: 'white',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(109.98deg, #D53938 0%, #FEBD3C 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#B3C4CC',
			input_color: '#fff',
			input_background: 'none',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template22_mobile.png') + ')',
		},
	},
	template23: {
		css: () =>
			import(/*webpackChunkName: "template23_css" */ '!to-string-loader!css-loader!less-loader!./template23.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 11: Hỏi thông tin', en: 'Template 12: Ask information'},
			title: {
				vi: 'Săn coupon hot với ưu đãi đến 49%',
				en: 'Get up to 49% off now',
			},
			description: {
				vi: 'Đừng bỏ lỡ cơ hội này',
				en: "Don't miss this change",
			},
			primary_button: {vi: 'Săn coupon ngay', en: 'Get the coupon'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: 'white',
			description_color: 'white',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(109.98deg, #D53938 0%, #FEBD3C 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#B3C4CC',
			input_color: '#fff',
			input_background: 'none',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template23_mobile.png') + ')',
		},
	},
	template24: {
		css: () =>
			import(/*webpackChunkName: "template24_css" */ '!to-string-loader!css-loader!less-loader!./template24.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 12: Hỏi thông tin', en: 'Template 12: Ask information'},
			title: {
				vi: 'Ưu đãi 15% và miễn phí vận chuyển',
				en: 'Get 15% off and Free shipping',
			},
			description: {
				vi: 'Đăng ký ngay để nhận ưu đãi và thông báo cho các chương trình khuyến mãi tiếp',
				en: 'Register to get the discount and receive notification for next promotions',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Shop now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#2E052E',
			description_color: '#2E052E',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369;',
			input_color: '#996699',
			input_background: 'none',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template24_mobile.png') + ')',
		},
	},
	tet20201: {
		css: () => import(/*webpackChunkName: "tet20201_css" */ '!to-string-loader!css-loader!less-loader!./tet20201.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 13: Chúc mừng năm mới 2020', en: 'Template 13: New Year 2020'},
			title: {
				vi: 'Happy new year',
				en: 'Happy new year',
			},
			description: {
				vi: '2020',
				en: '2020',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Shop now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#FAC571',
			description_color: '#FAC571',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369;',
			input_color: '',
			input_background: '',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/tet20201_mobile.png') + ')',
		},
	},
	tet20202: {
		css: () => import(/*webpackChunkName: "tet20202_css" */ '!to-string-loader!css-loader!less-loader!./tet20202.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 14: Chúc mừng năm mới 2020', en: 'Template 14: New Year 2020'},
			title: {
				vi: 'Mừng xuân canh tý',
				en: 'Mừng xuân canh tý',
			},
			description: {
				vi: '2020',
				en: '2020',
			},
		},
		desktop_appearance: {
			title_color: '#FAC571',
			description_color: '#FAC571',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369;',
			input_color: '',
			input_background: '',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/tet20202_mobile.png') + ')',
		},
	},
	tet20203: {
		css: () =>
			import(/*webpackChunkName: "template20203_css" */ '!to-string-loader!css-loader!less-loader!./tet20203.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 15: Chúc mừng năm mới 2020', en: 'Template 15: New Year 2020'},
			title: {
				vi: 'Chúc mừng năm mới',
				en: 'Happy new year',
			},
			description: {
				vi: 'Tết tới tấn tài\nXuân sang đắc lộc\nGia đình hạnh phúc\nVạn sự cát tường',
				en: 'Tết tới tấn tài\nXuân sang đắc lộc\nGia đình hạnh phúc\nVạn sự cát tường',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Shop now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#FAC571',
			description_color: '#fff',
			background: '#9F0102',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '',
			input_background: '',
		},
	},
	tet20204: {
		css: () =>
			import(/*webpackChunkName: "template20204_css" */ '!to-string-loader!css-loader!less-loader!./tet20204.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 16: Chúc mừng năm mới 2020', en: 'Template 16: New Year 2020'},
			title: {
				vi: 'Happy new year 2020',
				en: 'Happy new year',
			},
			description: {
				vi: 'Kính chúc khách hàng một năm mới\nAn Khang Thịnh Vượng',
				en: 'Kính chúc khách hàng một năm mới\nAn Khang Thịnh Vượng',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Shop now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#FDE5AF',
			description_color: '#FCC626',
			background: '#9F0102',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '',
			input_background: '',
		},
	},
	template11: {
		css: () =>
			import(/*webpackChunkName: "template11_css" */ '!to-string-loader!css-loader!less-loader!./template11.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 17: Hỏi thông tin', en: 'Template 17: Ask information'},
			title: {vi: 'Giảm 10%', en: '10% OFF'},
			description: {
				vi: 'với đơn hàng đầu tiên của bạn',
				en: 'your first order',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button: {
				vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
				en: "No, thanks. I'll be back later",
			},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: 'linear-gradient(103.5deg, #D53938 0%, #FEBD3C 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'transparent',
			secondary_button_color: '#777',
			input_color: 'black',
			input_background: 'transparent',
		},
	},
	template12: {
		css: () =>
			import(/*webpackChunkName: "template12_css" */ '!to-string-loader!css-loader!less-loader!./template12.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 18: Hỏi thông tin', en: 'Template 18: Ask information'},
			title: {vi: 'ƯU ĐÃI 10%', en: '10% OFF'},
			description: {
				vi: 'dành riêng với bộ sưu tập mới',
				en: 'our new collection',
			},
			primary_button: {vi: 'ĐĂNG KÝ NGAY', en: 'SIGN UP NOW'},
			secondary_button: {
				vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
				en: "No, thanks. I'll be back later",
			},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: 'linear-gradient(103.5deg, #D53938 0%, #FEBD3C 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'transparent',
			secondary_button_color: '#777',
			input_color: 'black',
			input_background: 'transparent',
		},
	},
	template13: {
		css: () =>
			import(/*webpackChunkName: "template13_css" */ '!to-string-loader!css-loader!less-loader!./template13.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 19: Hỏi thông tin', en: 'Template 19: Ask information'},
			title: {vi: 'Giảm 10%', en: '10% OFF'},
			description: {
				vi: 'và miễn phí vận chuyển với tất cả những đơn hàng trị giá trên 500K',
				en: 'and get free worldwide shipping',
			},
			primary_button: {vi: 'ĐĂNG KÝ NGAY', en: 'SIGN UP NOW'},
			secondary_button: {
				vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
				en: "No, thanks. I'll be back later",
			},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: '#f13a86',
			primary_button_color: 'white',
			secondary_button_background: 'transparent',
			secondary_button_color: '#777',
			input_color: 'black',
			input_background: 'transparent',
		},
	},
	template14: {
		css: () =>
			import(/*webpackChunkName: "template14_css" */ '!to-string-loader!css-loader!less-loader!./template14.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 20: Hỏi thông tin', en: 'Template 20: Ask information'},
			title: {vi: 'ĐĂNG KÝ ĐỂ NHẬN ƯU ĐÃI ĐẶC BIỆT', en: '10% OFF'},
			description: {
				vi: 'nhận ngay mã giảm giá 50%',
				en: 'and get free worldwide shipping',
			},
			primary_button: {vi: 'ĐĂNG KÝ NGAY', en: 'SIGN UP NOW'},
			secondary_button: {
				vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
				en: "No, thanks. I'll be back later",
			},
		},
		desktop_appearance: {
			title_color: 'white',
			description_color: 'white',
			background: 'white',
			primary_button_background: 'linear-gradient(103.5deg, #D53938 0%, #FEBD3C 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'transparent',
			secondary_button_color: '#ffffff6f',
			input_color: 'white',
			input_background: 'transparent',
		},
	},
	template15: {
		css: () =>
			import(/*webpackChunkName: "template15_css" */ '!to-string-loader!css-loader!less-loader!./template15.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 21: Hỏi thông tin', en: 'Template 21: Ask information'},
			title: {vi: 'Giảm 10%', en: '10% OFF'},
			description: {
				vi: 'và miễn phí vận chuyển với tất cả những đơn hàng trị giá trên 500K',
				en: 'and get free worldwide shipping',
			},
			primary_button: {vi: 'ĐĂNG KÝ NGAY', en: 'SIGN UP NOW'},
			secondary_button: {
				vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
				en: "No, thanks. I'll be back later",
			},
		},
		desktop_appearance: {
			title_color: '#122121',
			description_color: '#244242',
			background: 'white',
			primary_button_background: '#ffba01',
			primary_button_color: 'white',
			secondary_button_background: 'transparent',
			secondary_button_color: '#5f6369',
			input_color: '#326767',
			input_background: 'transparent',
		},
	},
	templateu23: {
		css: () =>
			import(/*webpackChunkName: "templateu23_css" */ '!to-string-loader!css-loader!less-loader!./templateu23.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 21: U23 2019', en: 'Template 22: U23 2019'},
			title: {
				vi: `Chặng đường mới
thành công mới`,
				en: `Chặng đường mới
thành công mới`,
			},
			description: {
				vi: 'Đón thêm khách hàng mới cùng subiz new widget',
				en: 'Đón thêm khách hàng mới cùng subiz new widget',
			},
			primary_button: {vi: 'Xem ngay', en: 'See now'},
			secondary_button: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: '#FFC48B',
			description_color: 'white',
			background: '#B41A12',
			primary_button_background: '#FFC48B',
			primary_button_color: '#B41A12',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/templateu23_mobile.png') + ')',
		},
	},
	template16: {
		css: () =>
			import(/*webpackChunkName: "template16_css" */ '!to-string-loader!css-loader!less-loader!./template16.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 23: Hỏi thông tin', en: 'Template 23: Ask information'},
			title: {vi: 'Giảm 10%', en: '10% OFF'},
			description: {
				vi: 'với đơn hàng đầu tiền của bạn',
				en: 'your first order',
			},
			primary_button: {vi: 'ĐĂNG KÝ NGAY', en: 'SIGN UP NOW'},
			secondary_button: {
				vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
				en: "No, thanks. I'll be back later",
			},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: 'linear-gradient(103.5deg, #EE2849 0%, #D65C70 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'transparent',
			secondary_button_color: '#5f6369',
			input_color: '#5f6369',
			input_background: 'transparent',
		},
	},
	template17: {
		css: () =>
			import(/*webpackChunkName: "template17_css" */ '!to-string-loader!css-loader!less-loader!./template17.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 24: Hỏi thông tin', en: 'Template 24: Ask information'},
			title: {
				vi: 'Nhận ngay ưu đãi!',
				en: 'Get special offer now!',
			},
			description: {
				vi: 'Giảm 20% chỉ một ngày duy nhất. Miễn phí vận chuyển nội thành',
				en: '20% off for only one day. Free shipping in the city',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Register now'},
			secondary_button: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: '#FDAD15',
			description_color: 'white',
			background: 'white',
			primary_button_background: '#FDAD15',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template39_mobile.png') + ')',
		},
	},
	template39: {
		css: () =>
			import(/*webpackChunkName: "template39_css" */ '!to-string-loader!css-loader!less-loader!./template39.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 24: Hỏi thông tin', en: 'Template 24: Ask information'},
			title: {
				vi: 'Nhận ngay ưu đãi!',
				en: 'Get special offer now!',
			},
			description: {
				vi: 'Giảm 20% chỉ một ngày duy nhất. Miễn phí vận chuyển nội thành',
				en: '20% off for only one day. Free shipping in the city',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Register now'},
			secondary_button: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: '#FDAD15',
			description_color: 'white',
			background: 'white',
			primary_button_background: '#FDAD15',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template39_mobile.png') + ')',
		},
	},
	template117: {
		css: () =>
			import(/*webpackChunkName: "template117_css" */ '!to-string-loader!css-loader!less-loader!./template117.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 25: Hỏi thông tin', en: 'Template 25: Ask information'},
			title: {vi: 'Giảm 10%', en: '10% OFF'},
			description: {
				vi: 'với đơn hàng đầu tiền của bạn',
				en: 'your first order',
			},
			primary_button: {vi: 'ĐĂNG KÝ NGAY', en: 'SIGN UP NOW'},
			secondary_button: {
				vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
				en: "No, thanks. I'll be back later",
			},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: 'linear-gradient(103.5deg, #593EF4 0%, #525EE0 100%) ',
			primary_button_color: 'white',
			secondary_button_background: 'transparent',
			secondary_button_color: '#5f6369',
			input_color: '#5f6369',
			input_background: 'transparent',
		},
	},
	template25: {
		css: () =>
			import(/*webpackChunkName: "template25_css" */ '!to-string-loader!css-loader!less-loader!./template25.less'),
		text: {
			name: {vi: 'Mẫu 26: Hỏi thông tin', en: 'Template 26: Ask information'},
			title: {
				vi: 'Nhận giảm giá 20% cho đơn hàng tiếp theo',
				en: 'Get 20% off your next order',
			},
			description: {
				vi: 'Đăng ký ngay để nhận ưu đãi cho đơn hàng tiếp theo',
				en: 'Register to get the discount and receive notification for next promotions',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Register'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#062D29',
			description_color: '#062D29',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(73.97deg, #FF9500 0.21%, #FFBF00 100.21%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#fff',
			input_background: 'none',
		},
	},
	template26: {
		css: () =>
			import(/*webpackChunkName: "template26_css" */ '!to-string-loader!css-loader!less-loader!./template26.less'),
		text: {
			name: {vi: 'Mẫu 27: Hỏi thông tin', en: 'Template 27: Ask information'},
			title: {
				vi: 'Ưu đãi 10%',
				en: '10% off',
			},
			description: {
				vi: 'và miễn phí vận chuyển với tất cả các đơn hàng trên giá trị 500k',
				en: 'and get free worldwide shipping',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Shop now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#D01865',
			description_color: '#000000',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(79.26deg, #E61A6F 0.21%, #F53D8A 100.21%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#000',
			input_background: 'none',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template26_mobile.png') + ')',
		},
	},
	template18: {
		css: () =>
			import(/*webpackChunkName: "template18_css" */ '!to-string-loader!css-loader!less-loader!./template18.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 28: Hỏi thông tin', en: 'Template 28: Ask information'},
			title: {vi: 'ĐĂNG KÝ ĐỂ NHẬN ƯU ĐÃI ĐẶC BIỆT', en: '10% OFF'},
			description: {
				vi: 'nhận ngay mã giảm giá tới 500K cho đơn hàng đầu tiên',
				en: 'Get up to 100$ off your first order',
			},
			primary_button: {vi: 'ĐĂNG KÝ NGAY', en: 'SIGN UP NOW'},
			secondary_button: {
				vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
				en: "No, thanks. I'll be back later",
			},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: 'linear-gradient(74.1deg, #5E8D81 0.21%, #3FA684 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'transparent',
			secondary_button_color: 'black',
			input_color: 'black',
			input_background: 'transparent',
		},
		mobile_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: 'linear-gradient(74.1deg, #5E8D81 0.21%, #3FA684 100%)',
			primary_button_color: 'white',
			background_image: 'url(' + require('../assets/background/template18_mobile.png') + ')',
			secondary_button_background: 'transparent',
			secondary_button_color: 'black',
			input_color: 'black',
			input_background: 'transparent',
		},
	},
	template27: {
		css: () =>
			import(/*webpackChunkName: "template27_css" */ '!to-string-loader!css-loader!less-loader!./template27.less'),
		text: {
			name: {vi: 'Mẫu 29: Hỏi thông tin', en: 'Template 29: Ask information'},
			title: {
				vi: 'Giảm 10%',
				en: '10% off',
			},
			description: {
				vi: 'và miễn phí vận chuyển với tất cả các đơn hàng trên giá trị 500k',
				en: 'and get free worldwide shipping',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Shop now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#D01965',
			description_color: '#000000',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(79.26deg, #E61A6F 0.21%, #F53D8A 100.21%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#000',
			input_background: 'none',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template27_mobile.png') + ')',
		},
	},
	template19: {
		css: () =>
			import(/*webpackChunkName: "template19_css" */ '!to-string-loader!css-loader!less-loader!./template19.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 30: Hỏi thông tin', en: 'Template 30: Ask information'},
			title: {vi: 'ƯU ĐÃI 10%', en: '10% OFF'},
			description: {
				vi: 'Đăng ký ngay và nhận mã giảm giá 10% cho đơn hàng đầu tiên',
				en: 'Regiter now and get 10% OFF your first order',
			},
			primary_button: {vi: 'ĐĂNG KÝ NGAY', en: 'SIGN UP NOW'},
			secondary_button: {
				vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
				en: "No, thanks. I'll be back later",
			},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: 'linear-gradient(103.29deg, #D53938 0%, #FEBD3C 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'transparent',
			secondary_button_color: '#777',
			input_color: 'black',
			input_background: 'transparent',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template19_mobile.png') + ')',
		},
	},
	template28: {
		css: () =>
			import(/*webpackChunkName: "template28_css" */ '!to-string-loader!css-loader!less-loader!./template28.less'),
		text: {
			name: {vi: 'Mẫu 31: Hỏi thông tin', en: 'Template 31: Ask information'},
			title: {vi: 'ƯU ĐÃI 10%', en: '10% OFF'},
			description: {
				vi: 'Đăng ký để nhận ngay mã giảm giá 10%',
				en: 'Sign up to get 10% discount your next order',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#fff',
			description_color: '#fff',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: '#fff',
			primary_button_color: '#111231',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#DADDEF',
			input_background: 'none',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template28_mobile.png') + ')',
		},
	},
	template29: {
		css: () =>
			import(/*webpackChunkName: "template29_css" */ '!to-string-loader!css-loader!less-loader!./template29.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 32: Hỏi thông tin', en: 'Template 32: Ask information'},
			title: {
				vi: 'Giảm 25%',
				en: '25% off',
			},
			description: {
				vi: 'Đăng ký để nhận ngay ưu đãi',
				en: 'Sign up to get the promotion code ',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Shop now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#000',
			description_color: '#000',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(73.97deg, #CC8066 0.21%, #D99F8C 99.94%)',
			primary_button_color: '#fff',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#000',
			input_background: 'none',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template29_mobile.png') + ')',
		},
	},
	template30: {
		css: () =>
			import(/*webpackChunkName: "template30_css" */ '!to-string-loader!css-loader!less-loader!./template30.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 33: Hỏi thông tin', en: 'Template 33: Ask information'},
			title: {
				vi: 'Giảm 25%',
				en: '25% off',
			},
			description: {
				vi: 'Đăng ký để nhận ngay ưu đãi',
				en: 'Sign up to get the promotion code ',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Shop now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#000',
			description_color: '#000',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg5.png') + ')',
			primary_button_background: 'linear-gradient(73.97deg, #E61A6F 0.21%, #F53D8A 100.21%)',
			primary_button_color: '#fff',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#000',
			input_background: 'none',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../assets/background/template30_mobile.png') + ')',
		},
	},
}
// add default js load function for any template dont has custom template
Object.keys(meta).map((id) => {
	if (meta[id].js) return
	meta[id].desktop_appearance.background_image = 'url(' + require('../assets/background/' + id + '.png') + ')'

	// if (!meta[id].desktop_appearance.overlay)
	meta[id].desktop_appearance.overlay = 'rgba(0,0,0,0.8)'

	meta[id].js = () =>
		Promise.resolve({
			default: {
				name: 'subiz-template',
				props: [
					'page',
					'form',
					'countdown',
					'primaryButton',
					'secondaryButton',
					'closeButton',
					'frame',
					'closeAnimation',
					'select',
				],
				render(h) {
					var cls = 'overlay '
					if (this.frame) cls += ' overlay--' + this.frame
					var animation = 'container ' //+ (this.page.animation) + ' ' + this.closeAnimation
					if (this.closeAnimation) animation += this.closeAnimation
					else animation += this.page.animation

					let titlecls = 'title'
					if (this.select === 'title') titlecls += ' text__shake'

					let desccls = 'description'
					if (this.select === 'description') desccls += ' text__shake'

					//var animation = 'container ' + this.page.animation
					return (
						<div class={cls} vOn:click={() => this.$emit('backgroundClick')}>
							<div class="notch">
								<div class="notch__camera"></div>
								<div class="notch__audio"></div>
							</div>
							<div class="browser-bar">
								<div class="button__red"></div>
								<div class="button__yellow"></div>
								<div class="button__green"></div>
								<div class="bar__url"></div>
							</div>
							<div class={animation} vOn:click_stop={() => true}>
								{this.closeButton}
								<div class="container__inner">
									<div class="background"></div>
									<div class="content">
										<p class={titlecls} vOn:click={(_) => this.$emit('clicked', 'title')}>
											{this.page.title}
										</p>
										<div class="title-separator"></div>
										<p class={desccls} vOn:click={(_) => this.$emit('clicked', 'description')}>
											{this.page.description}
										</p>
										{this.form}
										<div class="buttons">
											{this.primaryButton}
											{this.secondaryButton}
										</div>
									</div>
								</div>
							</div>
						</div>
					)
				},
			},
		})
})

let Template = {
	name: 'Template',
	props: ['mode', 'template', 'page', 'frame', 'select'],
	data() {
		return {
			Template: null,
			close: false,
			templateid: '',
			pressedSubmit: false,
			closeAnimation: '',
		}
	},

	watch: {
		async template(template) {
			this.loadTemplate(template)
		},
	},

	created() {
		this.loadTemplate(this.template)
	},

	methods: {
		merge(a, b) {
			a = a || {}
			b = b || {}
			var c = {}
			var keys = Object.keys(a)
			for (let i = 0; i < keys.length; i++) c[keys[i]] = a[keys[i]]
			keys = Object.keys(b)
			for (let i = 0; i < keys.length; i++) {
				if (b[keys[i]]) c[keys[i]] = b[keys[i]]
			}
			return c
		},

		populatePage(templateid, page) {
			if (!templateid || !page) return
			let temp = meta[templateid]
			var desktop_appearance = this.merge(temp.desktop_appearance, page.desktop_appearance)
			var mobile_appearance = this.merge(temp.mobile_appearance, page.mobile_appearance)

			// replace file
			let src = op.get(desktop_appearance, 'background_image', '')
			src = replaceFileUrl(src)
			op.set(desktop_appearance, 'background_image', src)

			src = op.get(desktop_appearance, 'background', '')
			src = replaceFileUrl(src)
			op.set(desktop_appearance, 'background', src)

			src = op.get(mobile_appearance, 'background', '')
			src = replaceFileUrl(src)
			op.set(mobile_appearance, 'background', src)

			src = op.get(mobile_appearance, 'background_image', '')
			src = replaceFileUrl(src)
			op.set(mobile_appearance, 'background_image', src)

			var css = replaceCssVariable(CSS, {desktop_appearance, mobile_appearance})
			common.setCssToHead('subiz-template-style-' + this.template, css)
		},

		onClose() {
			this.$emit('closed')
			setTimeout(() => {
				this.close = true
			}, 400)
			this.closeAnimation = 'bounceOut'
		},

		checkFormFilled() {
			let form = op.get(this.page, 'form')
			let hasForm = form && form.enabled && form.fields && form.fields.length > 0
			if (!hasForm) return true

			for (let i = 0; i < form.fields.length; i++) {
				let field = form.fields[i]
				if (field.is_required && (field.value === undefined || field.value === '')) return false
			}

			return true
		},

		onSecondaryClick() {
			this.$emit('clicked', 'secondary_button')
			this.onButtonClick(op.get(this.page, 'secondary_button'), 'secondaryButtonClicked')
		},

		onButtonClick(button, ev) {
			let actions = op.get(button, 'actions') || []
			let mustfillform = false
			for (let a of actions) {
				if (a.action === 'converstion' || a.action === 'submit') {
					mustfillform = true
					this.pressedSubmit = true
				}
			}

			if (mustfillform && !this.checkFormFilled()) return

			this.$emit(ev)

			for (let a of actions) {
				if (a.action === 'close') setTimeout(() => this.onClose(), 200)
			}
		},

		onBackgroundClick() {
			this.onButtonClick(op.get(this.page, 'background_click'), 'backgroundClicked')
		},

		onPrimaryClick() {
			this.$emit('clicked', 'primary_button')
			this.onButtonClick(op.get(this.page, 'primary_button'), 'primaryButtonClicked')
		},

		async loadTemplate(t) {
			let temp = meta[t]
			if (!temp) return
			let template = (await temp.js()).default
			CSS = (await temp.css()).default
			this.Template = template
			this.populatePage(t, this.page)
		},
		onClicked(e) {
			this.$emit('clicked', e)
		},
		onClosed(e) {
			this.$emit('closed', e)
		},
	},

	render(h) {
		if (!this.Template) return null
		if (this.close) return null

		let $close = <CloseButton class="btn btn--close" vOn:click={this.onClose} />
		let $primary = null
		let primaryBtnCls = 'btn btn--primary'
		if (this.select === 'primary_button') primaryBtnCls += ' text__shake'
		if (op.get(this.page, 'primary_button.enabled')) {
			$primary = (
				<button vOn:click={this.onPrimaryClick} class={primaryBtnCls}>
					{op.get(this.page, 'primary_button.text')}
				</button>
			)
		}

		let $secondary = null
		let secondaryBtnCls = 'btn btn--secondary'
		if (this.select === 'secondary_button') secondaryBtnCls += ' text__shake'
		if (op.get(this.page, 'secondary_button.enabled')) {
			$secondary = (
				<button vOn:click={this.onSecondaryClick} class={secondaryBtnCls}>
					{op.get(this.page, 'secondary_button.text')}
				</button>
			)
		}

		let $form = <Form vOn:clicked={this.onClicked} form={this.page.form} pressedSubmit={this.pressedSubmit} />
		var mode = this.mode || MODE
		return (
			<div class={'template ' + this.template}>
				<div class={mode}>
					<this.Template
						vOn:clicked={this.onClicked}
						vOn:closed={this.onClosed}
						page={this.page}
						select={this.select}
						form={$form}
						primaryButton={$primary}
						secondaryButton={$secondary}
						closeButton={$close}
						frame={this.frame}
						vOn:backgroundClick={this.onBackgroundClick}
						closeAnimation={this.closeAnimation}
					/>
				</div>
			</div>
		)
	},
}

// tokenizy(['hello XX andy XX go'], 'XX')
// => ['hello ', {type: 'XX'},' andy ', {type: 'XX'}, ' go']
function tokenize(arr, token) {
	if (!arr || !arr.length) return []
	var out = []

	for (let i = 0; i < arr.length; i++) {
		var item = arr[i]
		if (typeof item !== 'string') {
			out.push(item)
			continue
		}
		var ts = item.split(token)
		for (let i = 0; i < ts.length; i++) {
			out.push(ts[i])
			out.push({type: token})
		}
		out.pop()
	}
	return out
}

function replaceCssVariable(css, page) {
	// tokenize
	var tokens = [css]
	tokens = tokenize(tokens, "'@desktop_appearance.title_color'")
	tokens = tokenize(tokens, "'@desktop_appearance.description_color'")
	tokens = tokenize(tokens, "'@desktop_appearance.background'")
	tokens = tokenize(tokens, "'@desktop_appearance.background_image'")
	tokens = tokenize(tokens, "'@desktop_appearance.primary_button_background'")
	tokens = tokenize(tokens, "'@desktop_appearance.primary_button_color'")
	tokens = tokenize(tokens, "'@desktop_appearance.secondary_button_background'")
	tokens = tokenize(tokens, "'@desktop_appearance.secondary_button_color'")
	tokens = tokenize(tokens, "'@desktop_appearance.input_color'")
	tokens = tokenize(tokens, "'@desktop_appearance.input_background'")
	tokens = tokenize(tokens, "'@desktop_appearance.overlay'")
	tokens = tokenize(tokens, "'@mobile_appearance.title_color'")
	tokens = tokenize(tokens, "'@mobile_appearance.description_color'")
	tokens = tokenize(tokens, "'@mobile_appearance.background'")
	tokens = tokenize(tokens, "'@mobile_appearance.background_image'")
	tokens = tokenize(tokens, "'@mobile_appearance.primary_button_background'")
	tokens = tokenize(tokens, "'@mobile_appearance.primary_button_color'")
	tokens = tokenize(tokens, "'@mobile_appearance.secondary_button_background'")
	tokens = tokenize(tokens, "'@mobile_appearance.secondary_button_color'")
	tokens = tokenize(tokens, "'@mobile_appearance.input_color'")
	tokens = tokenize(tokens, "'@mobile_appearance.input_background'")
	tokens = tokenize(tokens, "'@mobile_appearance.overlay'")
	var ret = []
	for (var i = 0; i < tokens.length; i++) {
		var item = tokens[i]
		if (typeof item === 'string') {
			ret.push(item)
			continue
		}

		// remove @''
		var path = item.type.substr(2, item.type.length - 3)
		ret.push(op.get(page, path))
	}
	return ret.join('')
}

function replaceFileUrl(src) {
	if (!src) return ''
	src = src.replace('filev4.subiz.com', 'file.mysubiz.com')
	src = src.replace('file.subiz.com', 'file.mysubiz.com')
	return src
}

export default {meta, Template}
