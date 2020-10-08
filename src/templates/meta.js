let meta = {
	templateThanks: {
		css: () => import(/*webpackChunkName: "templateThanks_css" */ '!css-loader!less-loader!./templateThanks.less'),
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

			title_font_family: 'Montserrat',
			title_font_weight: '700',
			title_font_size: '36px',

			description_font_family: 'Muli',
			description_font_size: '16px',
		},
	},
	template1: {
		css: () => import(/*webpackChunkName: "template1_css" */ '!css-loader!less-loader!./template1.less'),

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
	template2: {
		css: () => import(/*webpackChunkName: "template2_css" */ '!css-loader!less-loader!./template2.less'),
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
	template3: {
		css: () => import(/*webpackChunkName: "template3_css" */ '!css-loader!less-loader!./template3.less'),
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

			title_font_size: '16px',
			title_font_family: 'Muli',

			description_font_size: '28px',
			description_font_family: 'Montserrat',
			description_font_weight: '700',

			input_border_color: '#d9d9d9',
		},
		mobile_appearance: {
			title_font_size: '16px',
			description_font_size: '28px',
		},
	},
	template4: {
		css: () => import(/*webpackChunkName: "template4_css" */ '!css-loader!less-loader!./template4.less'),
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
			primary_button_background: '#001984',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',

			title_font_size: '25px',
			title_font_family: 'Yeseva One',

			description_font_size: '15px',
			description_font_family: 'Muli',

			input_border_color: '#d9d9d9',
		},
	},
	template5: {
		css: () => import(/*webpackChunkName: "template5_css" */ '!css-loader!less-loader!./template5.less'),
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
			primary_button_background: '#FDAD15',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '#000',
			input_background: '#fff',

			title_font_size: '55px',
			title_font_family: 'Muli',

			description_font_size: '24px',
			description_font_family: 'Muli',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/bg5_mobile.png').default + ')',
			title_font_size: '28px',
			description_font_size: '16px',
		},
	},
	template6: {
		css: () => import(/*webpackChunkName: "template6_css" */ '!css-loader!less-loader!./template6.less'),
		type: 'fullscreen',
		text: {
			name: {vi: 'Form đăng ký nhận ưu đãi', en: 'Sign up offer'},
			title: {
				vi: 'Giảm 30%',
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

			title_font_family: 'Yeseva One',
			title_font_size: '48px',
			title_font_weight: 'bold',

			description_font_size: '18px',
			description_font_family: 'Muli',
		},
		mobile_appearance: {
			title_color: '#fff',
			description_color: '#fff',
			background: 'white',
			background_image: 'url(' + require('../../assets/background/template6_mobile.png').default + ')',
			primary_button_background: '#dab86a',
			primary_button_color: 'white',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '#fff',
			input_background: '',

			description_font_size: '14px',
			title_font_size: '28px',
		},
	},
	template9: {
		css: () => import(/*webpackChunkName: "template9_css" */ '!css-loader!less-loader!./template9.less'),
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

			title_line_height: '44px',
			title_font_family: 'Montserrat',
			title_font_size: '36px',
			title_font_weight: '700',

			description_font_weight: 'normal',
			description_font_size: '16px',
			description_font_family: 'Muli',

			input_border_color: '#d9d9d9',
		},
	},
	template10: {
		css: () => import(/*webpackChunkName: "template10_css" */ '!css-loader!less-loader!./template10.less'),
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

			title_font_size: '16px',
			description_font_size: '28px',
			description_font_weight: 'bold',
		},
	},
	template20: {
		css: () => import(/*webpackChunkName: "template20_css" */ '!css-loader!less-loader!./template20.less'),
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

			title_font_size: '52px',
			title_font_weight: '700',
			title_font_family: 'Roboto',

			description_font_size: '16px',
			description_font_family: 'Roboto',

			input_border_color: '#5F6369',
		},
		mobile_appearance: {
			title_font_size: '23px',
			title_color: 'black',
			title_font_weight: '500',
			title_font_size: '32px',
		},
	},

	template21: {
		css: () => import(/*webpackChunkName: "template21_css" */ '!css-loader!less-loader!./template21.less'),
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

			title_font_size: '48px',
			title_line_height: '24px',
			title_color: '#5F6369',

			description_font_family: 'Roboto',
			description_font_size: '24px',
			input_border_color: '#ddd',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/template21_mobile.png').default + ')',
			description_font_size: '16px',
		},
	},
	template22: {
		css: () => import(/*webpackChunkName: "template22_css" */ '!css-loader!less-loader!./template22.less'),
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
			primary_button_background: 'linear-gradient(109.98deg, #D53938 0%, #FEBD3C 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#B3C4CC',
			input_color: '#fff',
			input_background: 'none',

			title_font_size: '56px',
			title_font_weight: '700',
			title_font_family: 'Roboto',

			description_font_size: '24px',
			description_font_family: 'Roboto',
			input_border_color: '#ddd',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/template22_mobile.png').default + ')',
			title_font_size: '37px',
		},
	},
	template23: {
		css: () => import(/*webpackChunkName: "template23_css" */ '!css-loader!less-loader!./template23.less'),
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
			primary_button_background: 'linear-gradient(109.98deg, #D53938 0%, #FEBD3C 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#B3C4CC',
			input_color: '#fff',
			input_background: 'none',
			input_border_color: '#ddd',

			title_font_size: '48px',
			title_font_weight: '700',
			title_font_family: 'Roboto',

			description_font_family: 'Roboto',
			description_font_size: '24px',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/template23_mobile.png').default + ')',
			title_font_size: '37px',
			description_font_size: '24px',
		},
	},
	template24: {
		css: () => import(/*webpackChunkName: "template24_css" */ '!css-loader!less-loader!./template24.less'),
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
			primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369;',
			input_color: '#996699',
			input_background: 'none',
			title_font_family: 'Yeseva One',
			title_font_size: '48px',

			description_font_size: '16px',
			description_font_family: 'Roboto',

			input_border_color: '#996699',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/template24_mobile.png').default + ')',
			description_font_size: '14px',
		},
	},
	tet20201: {
		css: () => import(/*webpackChunkName: "tet20201_css" */ '!css-loader!less-loader!./tet20201.less'),
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
			primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369;',
			input_color: '',
			input_background: '',

			title_font_size: '30px',
			title_font_weight: 'bold',
			title_text_transform: 'uppercase',

			description_font_size: '20px',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/tet20201_mobile.png').default + ')',
		},
	},
	tet20202: {
		css: () => import(/*webpackChunkName: "tet20202_css" */ '!css-loader!less-loader!./tet20202.less'),
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
			primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369;',
			input_color: '',
			input_background: '',

			title_font_size: '30px',
			title_font_weight: 'bold',
			title_text_transform: 'uppercase',

			description_font_size: '20px',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/tet20202_mobile.png').default + ')',
		},
	},
	tet20203: {
		css: () => import(/*webpackChunkName: "template20203_css" */ '!css-loader!less-loader!./tet20203.less'),
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
			primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '',
			input_background: '',

			title_font_size: '36px',
			title_font_family: 'Roboto',
			title_font_weight: 'bold',

			description_font_size: '20px',
			description_font_family: 'Roboto',
		},
	},
	tet20204: {
		css: () => import(/*webpackChunkName: "template20204_css" */ '!css-loader!less-loader!./tet20204.less'),
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
			primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '',
			input_background: '',
			title_font_weight: 'bold',
			title_font_size: '48px',
			description_font_size: '18px',
		},
		mobile_appearance: {
			title_font_size: '26px',
		},
	},
	template11: {
		css: () => import(/*webpackChunkName: "template11_css" */ '!css-loader!less-loader!./template11.less'),
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

			title_font_size: '48px',
			title_font_style: 'normal',
			title_font_weight: 'normal',
			title_text_transform: 'uppercase',
			title_font_family: 'Yeseva One',

			description_font_weight: 'normal',
			description_font_size: '24px',
			description_font_family: 'Roboto',
		},
		mobile_appearance: {
			title_font_size: '36px',
			description_font_size: '16px',
		},
	},
	template12: {
		css: () => import(/*webpackChunkName: "template12_css" */ '!css-loader!less-loader!./template12.less'),
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

			title_font_size: '48px',
			title_text_transform: 'uppercase',
			title_font_family: 'Yeseva One',

			description_font_size: '24px',
			description_font_family: 'Roboto',
		},
		mobile_appearance: {
			title_font_size: '36px',
			description_font_size: '16px',
		},
	},
	template13: {
		css: () => import(/*webpackChunkName: "template13_css" */ '!css-loader!less-loader!./template13.less'),
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

			title_font_family: 'Yeseva One',
			title_text_transform: 'uppercase',
			title_font_size: '56px',

			description_font_size: '24px',
			description_font_family: 'Roboto',
		},
		mobile_appearance: {
			description_font_size: '16px',
		},
	},
	template14: {
		css: () => import(/*webpackChunkName: "template14_css" */ '!css-loader!less-loader!./template14.less'),
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

			title_font_size: '45px',
			title_font_weight: '700',
			title_font_family: 'Montserrat',

			description_font_size: '30px',
			description_font_family: 'Montserrat',

			input_border_color: '#326767',
		},

		mobile_appearance: {
			title_font_size: '28px',
			description_font_size: '16px',
		},
	},
	template15: {
		css: () => import(/*webpackChunkName: "template15_css" */ '!css-loader!less-loader!./template15.less'),
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

			title_font_size: '56px',
			title_font_weight: 'bold',
			title_font_family: 'Yesava One',

			description_font_weight: 'normal',
			description_font_size: '16px',
			description_font_family: 'Roboto',

			input_border_color: '#3267673f',
		},
		mobile_appearance: {
			title_font_size: '52px',
		},
	},
	templateu23: {
		css: () => import(/*webpackChunkName: "templateu23_css" */ '!css-loader!less-loader!./templateu23.less'),
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

			title_text_transform: 'uppercase',
			title_font_weight: 'bold',
			title_font_family: 'Roboto Condensed',
			title_font_size: '33px',

			description_font_weight: '600',
			description_font_size: '18px',
			description_font_family: 'Muli',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/templateu23_mobile.png').default + ')',
		},
	},
	template16: {
		css: () => import(/*webpackChunkName: "template16_css" */ '!css-loader!less-loader!./template16.less'),
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

			title_font_size: '40px',
			title_font_weight: 'bold',
			title_font_family: 'Yesana One',
			title_text_transform: 'uppercase',

			description_font_size: '18px',
			description_font_family: 'Muli',
			input_border_color: '#d9d9d9',
		},
	},
	template17: {
		css: () => import(/*webpackChunkName: "template17_css" */ '!css-loader!less-loader!./template17.less'),
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
			input_color: '#fff',
			input_background: '',

			title_font_weight: 'bold',
			title_font_family: 'Roboto Condensed',
			title_text_transform: 'uppercase',
			title_font_size: '42px',

			input_border_color: '#fff',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/template39_mobile.png').default + ')',
		},
	},
	template39: {
		css: () => import(/*webpackChunkName: "template39_css" */ '!css-loader!less-loader!./template39.less'),
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
			input_color: '#fff',
			input_background: '',

			title_font_weight: 'bold',
			title_font_family: 'Roboto Condensed',
			title_font_size: '42px',
			title_text_transform: 'uppercase',

			input_border_color: '#d9d9d9',
			description_font_size: '18px',
			description_font_weight: 'normal',
			description_font_family: 'Muli',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/template39_mobile.png').default + ')',
			description_font_size: '16px',
			title_font_size: '28px',
		},
	},
	template117: {
		css: () => import(/*webpackChunkName: "template117_css" */ '!css-loader!less-loader!./template117.less'),
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

			title_text_transform: 'uppercase',
			title_font_family: 'Yesana One',

			title_font_size: '56px',
			title_font_weight: 'bold',

			description_font_weight: 'normal',
			description_font_size: '18px',
			description_font_family: 'Muli',
		},

		mobile_appearance: {
			title_font_size: '56px',
		},
	},
	template25: {
		css: () => import(/*webpackChunkName: "template25_css" */ '!css-loader!less-loader!./template25.less'),
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
			primary_button_background: 'linear-gradient(73.97deg, #FF9500 0.21%, #FFBF00 100.21%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#fff',
			input_background: 'none',

			title_font_family: 'Yeseva One',
			title_font_size: '48px',

			description_font_family: 'Roboto',
			description_font_size: '20px',
			input_border_color: '#FFBF00',
		},
		mobile_appearance: {
			title_font_size: '40px',
			description_font_size: '20px',
		},
	},
	template26: {
		css: () => import(/*webpackChunkName: "template26_css" */ '!css-loader!less-loader!./template26.less'),
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
			primary_button_background: 'linear-gradient(79.26deg, #E61A6F 0.21%, #F53D8A 100.21%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#000',
			input_background: 'none',

			title_font_family: 'Yeseva One',
			title_font_weight: 'bold',
			title_font_size: '48px',
			description_font_size: '16px',
			description_font_family: 'Roboto',

			input_border_color: '#5F6369',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/template26_mobile.png').default + ')',
			title_font_size: '48px',
			description_font_size: '16px',
		},
	},
	template18: {
		css: () => import(/*webpackChunkName: "template18_css" */ '!css-loader!less-loader!./template18.less'),
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

			title_font_size: '55px',
			title_font_weight: 'bold',
			title_font_family: 'Yeseva One',

			description_font_weight: 'normal',
			description_font_size: '24px',
			description_font_family: 'Montserrat',
			input_border_color: '#d9d9d9',
		},
		mobile_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: 'linear-gradient(74.1deg, #5E8D81 0.21%, #3FA684 100%)',
			primary_button_color: 'white',
			background_image: 'url(' + require('../../assets/background/template18_mobile.png').default + ')',
			secondary_button_background: 'transparent',
			secondary_button_color: 'black',
			input_color: 'black',
			input_background: 'transparent',
			title_font_size: '28px',
			description_font_size: '16px',
		},
	},
	template27: {
		css: () => import(/*webpackChunkName: "template27_css" */ '!css-loader!less-loader!./template27.less'),
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
			primary_button_background: 'linear-gradient(79.26deg, #E61A6F 0.21%, #F53D8A 100.21%)',
			primary_button_color: 'white',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#000',
			input_background: 'none',

			title_font_weight: 'bold',
			title_font_family: 'Yeseva One',
			title_font_size: '56px',

			description_font_family: 'Roboto',
			description_font_size: '16px',

			input_border_color: '#5F6369',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/template27_mobile.png').default + ')',
			title_font_size: '48px',
		},
	},
	template19: {
		css: () => import(/*webpackChunkName: "template19_css" */ '!css-loader!less-loader!./template19.less'),
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

			title_font_family: 'Roboto',
			title_font_weight: '700',
			title_font_size: '38px',
			title_text_transform: 'uppercase',

			description_font_weight: 'normal',
			description_font_size: '20px',
			description_font_family: 'Roboto',

			input_border_color: '#8d8d8d80',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/template19_mobile.png').default + ')',
			title_font_size: '30px',
			description_font_size: '16px',
		},
	},
	template28: {
		css: () => import(/*webpackChunkName: "template28_css" */ '!css-loader!less-loader!./template28.less'),
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
			primary_button_background: '#fff',
			primary_button_color: '#111231',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#DADDEF',
			input_background: 'none',

			title_font_family: 'Yeseva One',
			title_text_transform: 'uppercase',
			title_font_size: '48px',

			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: '#fff',
		},
		mobile_appearance: {
			title_font_size: '48px',
			background_image: 'url(' + require('../../assets/background/template28_mobile.png').default + ')',
		},
	},
	template202009021: {
		css: () =>
			import(/*webpackChunkName: "template202009021_css" */ '!css-loader!less-loader!./template202009021.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 32: Hỏi thông tin', en: 'Template 32: Ask information'},
			title: {
				vi: 'Ưu đãi đặc biệt mừng Quốc khánh 2/9',
				en: 'Special offer to celebrate National Day 2/9',
			},
			description: {
				vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
				en: '20% off for a single day. Sign up now to receive a discount code!',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Shop now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#226C92',
			description_color: '#000',
			background: 'white',
			background_image: 'url(' + require('../../assets/background/template29_mobile.png').default + ')',

			primary_button_background: '#226C92',
			primary_button_color: '#fff',

			input_color: '#000',
			input_background: 'none',

			title_font_size: '30px',
			title_font_weight: 'bold',
			title_font_family: 'Roboto',
			title_text_transform: 'none',

			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template202009022: {
		css: () =>
			import(/*webpackChunkName: "template202009022_css" */ '!css-loader!less-loader!./template202009022.less'),
		type: 'modal',
		text: {
			name: {vi: 'Bão sale mừng Quốc khánh 2/9', en: 'National Day September 2 Sale Storm'},
			title: {
				vi: 'Bão sale mừng Quốc khánh 2/9',
				en: 'National Day September 2 Sale Storm',
			},
			description: {
				vi: 'Ưu đãi lớn, quà ngập tràn. Săn ngay các deal giảm giá cực hot của chúng tôi',
				en: 'Big deals, overwhelming gifts. Hunt now for our extremely hot discount deals',
			},
			primary_button: {vi: 'Mua Ngay', en: 'Shop now'},
			secondary_button: {vi: 'Không, cảm ơn.Tôi sẽ quay lại sau', en: "No, thanks.I'll be back later"},
		},
		desktop_appearance: {
			title_color: '#FAC571',
			description_color: '#fff',
			primary_button_background: '#FAC571',
			primary_button_color: '##4B2C02',

			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369;',
			input_color: '',
			input_background: '',

			title_font_size: '38px',
			title_font_weight: 'bold',

			description_font_size: '16px',
		},
	},
	template29: {
		css: () => import(/*webpackChunkName: "template29_css" */ '!css-loader!less-loader!./template29.less'),
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
			primary_button_background: 'linear-gradient(73.97deg, #CC8066 0.21%, #D99F8C 99.94%)',
			primary_button_color: '#fff',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#000',
			input_background: 'none',

			title_font_size: '40px',
			title_font_family: 'Yeseva One',
			title_text_transform: 'uppercase',

			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: '#5f6369',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/template29_mobile.png').default + ')',
		},
	},
	template30: {
		css: () => import(/*webpackChunkName: "template30_css" */ '!css-loader!less-loader!./template30.less'),
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
			primary_button_background: 'linear-gradient(73.97deg, #E61A6F 0.21%, #F53D8A 100.21%)',
			primary_button_color: '#fff',
			secondary_button_background: 'unset',
			secondary_button_color: '#5F6369',
			input_color: '#000',
			input_background: 'none',

			title_font_size: '40px',
			title_font_family: 'Yeseva One',
			title_text_transform: 'uppercase',
			input_border_color: '#5f6369',
			description_font_size: '16px',
			description_font_family: 'Roboto',
		},
		mobile_appearance: {
			background_image: 'url(' + require('../../assets/background/template30_mobile.png').default + ')',
		},
	},
	template41: {
		css: () =>
			import(/*webpackChunkName: "template41_css" */ '!css-loader!less-loader!./template41.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 41: Đăng ký lái thử', en: 'Template 41: Schedule a test drive'},
			title: {
				vi: 'Đăng ký lái thử xe ngay hôm nay',
				en: 'Schedule a test drive near you',
			},
			description: {
				vi: 'Vui lòng cung cấp thông tin, chúng tôi sẽ liên hệ ngay với bạn',
				en: 'Please leave your contacts below and we will get back to you soon',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Register Now'},
		},
		desktop_appearance: {
			title_color: '#322626',
			description_color: '#000',
			background: 'white',
			primary_button_background: '#302828',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template42: {
		css: () =>
			import(/*webpackChunkName: "template42_css" */ '!css-loader!less-loader!./template42.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 42: Đăng ký nhận báo giá xe', en: 'Template 42: Get car pricing'},
			title: {
				vi: 'Cơ hội sở hữu xe với giá chỉ từ 459 triệu đồng',
				en: 'Save up to 500$ discount this month only',
			},
			description: {
				vi: 'Nhanh tay nhập thông tin để báo giá xe và ưu đãi tốt nhất!',
				en: 'Please leave your contacts here and we will get back to you soon',
			},
			primary_button: {vi: 'Nhận ưu đãi', en: 'Get the discount'},
		},
		desktop_appearance: {
			title_color: '#000',
			description_color: '#000',
			background: 'white',
			primary_button_background: '#0D59F2',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template43: {
		css: () =>
			import(/*webpackChunkName: "template43_css" */ '!css-loader!less-loader!./template43.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 43: Đăng ký nhận voucher', en: 'Template 43: Register for car promotion'},
			title: {
				vi: 'Giảm 50% lệ phí trước bạ khi mua xe',
				en: 'Save up to 500$ discount this month only',
			},
			description: {
				vi: 'Vui lòng để lại số điện thoại để nhận ưu đãi',
				en: 'Please leave your contacts here and we will get back to you soon',
			},
			primary_button: {vi: 'Nhận ưu đãi', en: 'Get the discount'},
		},
		desktop_appearance: {
			title_color: '#000',
			description_color: '#000',
			background: 'white',
			primary_button_background: '#0D59F2',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '24px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template44: {
		css: () =>
			import(/*webpackChunkName: "template44_css" */ '!css-loader!less-loader!./template44.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 44: Đăng ký nhận voucher', en: 'Template 44: Register for car promotion'},
			title: {
				vi: 'Giảm 50% lệ phí trước bạ khi mua xe',
				en: 'Save up to 500$ discount this month only',
			},
			description: {
				vi: 'Vui lòng để lại số điện thoại để nhận ưu đãi',
				en: 'Please leave your contacts here and we will get back to you soon',
			},
			primary_button: {vi: 'Nhận ưu đãi', en: 'Get the discount'},
		},
		desktop_appearance: {
			title_color: '#000',
			description_color: '#000',
			background: 'white',
			background_image: 'none',
			primary_button_background: '#0D59F2',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '24px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template45: {
		css: () =>
			import(/*webpackChunkName: "template45_css" */ '!css-loader!less-loader!./template45.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 45: Đăng ký xét tuyển', en: 'Template 45: Register for admission'},
			title: {
				vi: 'Đăng ký xét tuyển trực tuyến',
				en: 'Register online for admission',
			},
			description: {
				vi: 'Vui lòng điền đầy đủ thông tin để được liên hệ và giải đáp thắc mắc.',
				en: 'Please leave your contacts here and we will get back to you soon',
			},
			primary_button: {vi: 'Đăng ký', en: 'Register'},
		},
		desktop_appearance: {
			title_color: '#0D50A5',
			description_color: '#000',
			background: 'white',
			primary_button_background: '#302828',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template46: {
		css: () => import(/*webpackChunkName: "template46_css" */ '!css-loader!less-loader!./template46.less'),
		text: {
			name: {vi: 'Mẫu 46: Giới thiệu thông tin', en: 'Template 46: Education News'},
			title: {
				vi: '“Săn” học bổng: Tuyệt chiêu vào Đại học “xịn” vừa oai vừa đỡ lo học phí',
				en: 'How to boost your chance of getting a full scholarship',
			},
			description: {
				vi: 'Khám phá ngay bí kíp để giành được những suất học bổng giá trị, lên tới 100% học phí.',
				en: 'Explore tips on how to find, apply and get a full scholarship',
			},
			primary_button: {vi: 'KHÁM PHÁ NGAY', en: 'EXPLORE NOW'},
			secondary_button: {vi: 'Tôi không quan tâm thông tin này', en: 'No, thanks! I’m not interested'}
		},
		desktop_appearance: {
			title_color: '#FFFFFF',
			description_color: '#CDE6FE',
			background: 'transparent',
			primary_button_background: '#FFFFFF',
			primary_button_color: '#131C86',
			secondary_button_color: '#B4BAFD',
			title_text_transform: 'none',
			title_font_family: 'Roboto',
			title_font_weight: '700',
			title_font_size: '40px',
			description_font_size: '24px',
			description_font_family: 'Roboto',
			description_font_weight: '500'
		}
	},
	template47: {
		css: () =>
			import(/*webpackChunkName: "template47_css" */ '!css-loader!less-loader!./template47.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 47: Đăng ký khóa học', en: 'Template 47: Register for a course'},
			title: {
				vi: 'Đăng ký học và nhận giảm giá 20%',
				en: 'Register now and get 20% off any course',
			},
			description: {
				vi: 'Nhanh tay lên! Ưu đãi sẽ kết thúc trong hôm nay',
				en: 'Hurry up! Promotion ends at midnight',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Register Now'},
		},
		desktop_appearance: {
			title_color: '#000',
			description_color: '#000',
			background: 'white',
			primary_button_background: '#0D59F2',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '24px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template49: {
		css: () =>
			import(/*webpackChunkName: "template49_css" */ '!css-loader!less-loader!./template49.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 49: Đăng ký khóa học', en: 'Template 49: Register for a course'},
			title: {
				vi: 'Giảm giá 50% các khóa học',
				en: 'Our flagship courses is on sale up to 50%',
			},
			description: {
				vi: 'Đăng ký ngay! Ưu đãi sẽ hết hạn trong hôm nay',
				en: 'Register now to claim your spot',
			},
			primary_button: {vi: 'Đăng ký ngay', en: 'Register Now'},
		},
		desktop_appearance: {
			title_color: '#fff',
			description_color: '#fff',
			background: 'transparent',
			primary_button_background: '#0D59F2',
			primary_button_color: '#fff',
			input_color: 'rgba(255, 255, 255, .8)',
			input_background: 'rgba(255, 255, 255, .2)',
			title_font_size: '24px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: '#fff',
		},
	},
	template50: {
		css: () =>
			import(/*webpackChunkName: "template50_css" */ '!css-loader!less-loader!./template50.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 50: Đăng ký khóa học', en: 'Template 50: Register for a course'},
			title: {
				vi: 'Giảm giá 50% các khóa học',
				en: 'Our flagship courses is on sale up to 50%',
			},
			description: {
				vi: 'Đăng ký ngay! Ưu đãi sẽ hết hạn trong hôm nay',
				en: 'Register now to claim your spot',
			},
			primary_button: {vi: 'Đăng ký', en: 'Register'},
		},
		desktop_appearance: {
			title_color: '#000',
			description_color: '#000',
			background: 'white',
			background_image: 'none',
			primary_button_background: '#0D59F2',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '24px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template51: {
		css: () => import(/*webpackChunkName: "template51_css" */ '!css-loader!less-loader!./template51.less'),
		text: {
			name: {vi: 'Mẫu 51: Giới thiệu thông tin mới', en: 'Template 51: Travel news'},
			title: {
				vi: '5 địa điểm đẹp nhất Việt Nam',
				en: '5 Must-visit Places in Vietnam',
			},
			description: {
				vi: 'CHO NGƯỜI THÍCH KHÁM PHÁ',
				en: 'FOR FIRST TIME TRAVELERS',
			},
			primary_button: {vi: 'KHÁM PHÁ NGAY', en: 'UNLOCK THE LIST'},
			secondary_button: {vi: 'Tôi không quan tâm thông tin này', en: 'No, thanks! I’m not interested'}
		},
		desktop_appearance: {
			title_color: '#FFFFFF',
			description_color: '#FFFFFF',
			background: 'transparent',
			primary_button_background: '#0D59F2',
			primary_button_color: '#FFFFFF',
			secondary_button_color: '#B4BAFD',
			title_text_transform: 'none',
			title_font_family: 'Roboto',
			title_font_weight: '700',
			title_font_size: '40px',
			description_font_size: '24px',
			description_font_family: 'Roboto',
			description_font_weight: '500'
		}
	},
	template52: {
		css: () =>
			import(/*webpackChunkName: "template52_css" */ '!css-loader!less-loader!./template52.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 52: Đăng ký nhận ưu đãi du lịch', en: 'Template 52: Register and get a travel voucher'},
			title: {
				vi: 'Nhận ngay báo giá các tour hot nhất Việt Nam 2020',
				en: 'Explore the top destinations in Vietnam 2020',
			},
			description: {
				vi: 'Khám phá những địa điểm phải đến trong năm nay trên Việt Nam và nhận ngay voucher trị giá 500k',
				en: 'Eplore must-go destitnations, plus you’ll get a 500K voucher',
			},
			primary_button: {vi: 'Đăng ký', en: 'Register'},
		},
		desktop_appearance: {
			title_color: '#000',
			description_color: '#000',
			background: 'white',
			primary_button_background: '#0D59F2',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template53: {
		css: () =>
			import(/*webpackChunkName: "template53_css" */ '!css-loader!less-loader!./template53.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 53: Đăng ký nhận ưu đãi du lịch', en: 'Template 53: Register for travel promotion'},
			title: {
				vi: 'Phá băng du lịch, giá rẻ vô địch',
				en: 'Plan your perfect trips',
			},
			description: {
				vi: 'Vui lòng để lại số điện thoại để được tư vấn gói tour ưu đãi nhất',
				en: 'Please leave your contacts here, we will get back to you soon',
			},
			primary_button: {vi: 'Đăng ký', en: 'Register'},
		},
		desktop_appearance: {
			title_color: '#000',
			description_color: '#000',
			background: 'white',
			primary_button_background: '#0D59F2',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '24px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template54: {
		css: () => import(/*webpackChunkName: "template54_css" */ '!css-loader!less-loader!./template54.less'),
		text: {
			name: {vi: 'Mẫu 54: Đăng ký nhận ưu đãi du lịch', en: 'Template 54: Register for travel promotion'},
			title: {
				vi: 'Tự thiết kế tour cho chính bạn',
				en: 'Want to plan your perfect trips?',
			},
			description: {
				vi: 'Hãy để lại số điện thoại, tư vấn viên của chúng tôi sẽ liên hệ tư vấn và giúp bạn thiết kế chuyến đi phù hợp nhất',
				en: 'Please leave your contacts here, we will get back to you soon',
			},
			primary_button: {vi: 'ĐĂNG KÝ', en: 'REGISTER'}
		},
		desktop_appearance: {
			title_color: '#AA0927',
			description_color: '#000',
			background: '#FFFFFF',
			primary_button_background: '#D62A3A',
			primary_button_color: '#FFFFFF',
			secondary_button_color: '#B4BAFD',
			title_text_transform: 'none',
			title_font_family: 'Roboto',
			title_font_weight: '700',
			title_font_size: '36px',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, .5)'
		}
	},
	template55: {
		css: () => import(/*webpackChunkName: "template55_css" */ '!css-loader!less-loader!./template55.less'),
		text: {
			name: {vi: 'Mẫu 55: Đăng ký nhận ưu đãi du lịch', en: 'Template 55: Register for travel promotion'},
			title: {
				vi: 'Tự thiết kế tour cho chính bạn',
				en: 'Want to plan your perfect trips?',
			},
			description: {
				vi: 'Hãy để lại số điện thoại, tư vấn viên của chúng tôi sẽ liên hệ tư vấn và giúp bạn thiết kế chuyến đi phù hợp nhất',
				en: 'Please leave your contacts here, we will get back to you soon',
			},
			primary_button: {vi: 'ĐĂNG KÝ', en: 'REGISTER'}
		},
		desktop_appearance: {
			title_color: '#AA0927',
			description_color: '#000',
			background: '#FFFFFF',
			background_image: 'none',
			primary_button_background: '#D62A3A',
			primary_button_color: '#FFFFFF',
			title_text_transform: 'none',
			title_font_family: 'Roboto',
			title_font_weight: '700',
			title_font_size: '36px',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, .5)'
		}
	},
	template56: {
		css: () => import(/*webpackChunkName: "template56_css" */ '!css-loader!less-loader!./template56.less'),
		text: {
			name: {vi: 'Mẫu 56: Đặt lịch làm đẹp', en: 'Template 56: Register to book an appoinment'},
			title: {
				vi: 'Nhận ngay tư vấn liệu trình chăm sóc da hiệu quả',
				en: 'Get instant advice about effective skin care routine',
			},
			description: {
				vi: 'Vui lòng để lại số điện thoại để được tư vấn miễn phí và nhận ngay voucher giảm giá 15%',
				en: 'Please leave your phone number for a free consultation and receive a 15% discount voucher right away',
			},
			primary_button: {vi: 'Đăng ký', en: 'Register'}
		},
		desktop_appearance: {
			title_color: '#F43D2A',
			description_color: '#000',
			background: '#FFFFFF',
			primary_button_background: '#F43D2A',
			primary_button_color: '#FFFFFF',
			title_text_transform: 'none',
			title_font_family: 'Roboto',
			title_font_weight: '700',
			title_font_size: '36px',
			title_font_family: 'Yeseva One',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, .5)'
		}
	},
	template57: {
		css: () =>
			import(/*webpackChunkName: "template57_css" */ '!css-loader!less-loader!./template57.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 57: Đặt lịch làm đẹp', en: 'Template 57: Register to book an appoinment'},
			title: {
				vi: 'Thay đổi diện mạo, đẹp chuẩn sao',
				en: 'Book an appointment and get 15% off',
			},
			description: {
				vi: 'Để lại số điện thoại để nhận ngay voucher giảm giá 500k và được tư vấn miến phí',
				en: 'Please leave your contacts here for a free consultation and receive a 15% discount voucher right away',
			},
			primary_button: {vi: 'ĐĂNG KÝ', en: 'REGISTER'},
		},
		desktop_appearance: {
			title_color: '#582C37',
			description_color: '#361B22',
			background: 'white',
			primary_button_background: '#673340',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Yeseva One',
			title_text_transform: 'none',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template58: {
		css: () => import(/*webpackChunkName: "template58_css" */ '!css-loader!less-loader!./template58.less'),
		text: {
			name: {vi: 'Mẫu 58: Khuyến mãi', en: 'Template 58: Promotion'},
			title: {
				vi: 'Beauty Kits',
				en: 'Beauty Kits',
			},
			description: {
				vi: 'Trợ thủ đắc lực cho ngày dài bận rộn',
				en: 'Effective assistant for your long busy days',
			},
			primary_button: {vi: 'KHÁM PHÁ NGAY', en: 'SHOP NOW'},
		},
		desktop_appearance: {
			title_color: '#3F3327',
			description_color: '#3F3327',
			background: 'transparent',
			primary_button_background: '#3F3327',
			primary_button_color: 'white',
			title_text_transform: 'none',
			title_font_family: 'Roboto',
			title_font_weight: '700',
			title_font_size: '36px',
			description_font_size: '24px',
			description_font_family: 'Roboto',
		},
		mobile_appearance: {
			title_font_size: '36px',
			description_font_size: '24px',
		},
	},
	template59: {
		css: () => import(/*webpackChunkName: "template59_css" */ '!css-loader!less-loader!./template59.less'),
		text: {
			name: {vi: 'Khuyến mãi', en: 'Promotion'},
			title: {
				vi: 'Cần làm điệu? Săn ngay deal',
				en: 'The basic skin care starter pack',
			},
			description: {
				vi: 'Chính thức mở bán set trang điểm, giảm 50%',
				en: 'Officially open for sale, 50% off every product',
			},
			primary_button: {vi: 'MUA NGAY', en: 'SHOP NOW'},
		},
		desktop_appearance: {
			title_color: '#1F2E22',
			description_color: '#1F2E22',
			background: 'transparent',
			primary_button_background: '#1F2E22',
			primary_button_color: 'white',
			title_text_transform: 'uppercase',
			title_font_family: 'Roboto',
			title_font_weight: '500',
			title_font_size: '36px',
			description_font_size: '24px',
			description_font_family: 'Roboto',
		},
		mobile_appearance: {
			title_font_size: '36px',
			description_font_size: '24px',
		},
	},
	template60: {
		css: () =>
			import(/*webpackChunkName: "template60_css" */ '!css-loader!less-loader!./template60.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 60: Đặt lịch làm đẹp', en: 'Template 60: Register to book an appoinment'},
			title: {
				vi: 'Nhận ngay voucher ưu đãi 500K tháng 7',
				en: 'Get 50$ off your next appointment',
			},
			description: {
				vi: 'Để lại thông tin để được tư vấn gói dịch vụ phù hợp',
				en: 'Please leave your contacts here, we will get back to you soon',
			},
			primary_button: {vi: 'Nhận voucher', en: 'Get the voucher'},
		},
		desktop_appearance: {
			title_color: '#462F25',
			description_color: '#281B15',
			background: 'white',
			primary_button_background: '#462F25',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '24px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template61: {
		css: () => import(/*webpackChunkName: "template61_css" */ '!css-loader!less-loader!./template61.less'),
		text: {
			name: {vi: 'Mẫu 61: Khuyến mãi', en: 'Template 61: Promotion'},
			title: {
				vi: 'sản phẩm mới dành riêng cho bạn',
				en: 'New, Amazing Stuff is Here',
			},
			description: {
				vi: 'Mua ngay hôm nay để được giảm giá 20%',
				en: 'Shop today and get 20% discount',
			},
			primary_button: {vi: 'MUA NGAY', en: 'SHOP NOW'},
			secondary_button: {vi: 'Tôi không quan tâm thông tin này', en: 'No, thanks! I’m not interested'}
		},
		desktop_appearance: {
			title_color: '#FFFFFF',
			description_color: '#FFFFFF',
			background: 'transparent',
			primary_button_background: '#FFB033',
			primary_button_color: '#241869',
			secondary_button_color: '#B4BAFD',
			title_text_transform: 'uppercase',
			title_font_family: 'Roboto',
			title_font_weight: '700',
			title_font_size: '36px',
			description_font_size: '24px',
			description_font_family: 'Roboto',
			description_font_weight: '500'
		}
	},
	template62: {
		css: () => import(/*webpackChunkName: "template62_css" */ '!css-loader!less-loader!./template62.less'),
		text: {
			name: {vi: 'Mẫu 62: Khuyến mãi', en: 'Template 62: Promotion'},
			title: {
				vi: '',
				en: '',
			},
			description: {
				vi: '',
				en: '',
			},
			primary_button: {vi: '', en: ''},
		},
		desktop_appearance: {
			background: 'transparent',
		}
	},
	template63: {
		css: () =>
			import(/*webpackChunkName: "template63_css" */ '!css-loader!less-loader!./template63.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 63: Đăng ký tư vấn mua nhà', en: 'Template 63: Register for free consultant'},
			title: {
				vi: 'Lương 10 triệu Sở hữu căn nhà mơ ước',
				en: 'Now it’s easy to find your future home',
			},
			description: {
				vi: 'Vui lòng để lại số điện thoại để được liên hệ tư vấn các chính sách mua nhà trả góp phù hợp nhất',
				en: 'Please leave your contacts here, we will get back to you soon about the most suitable payment plan for you',
			},
			primary_button: {vi: 'Đăng ký', en: 'Register'},
		},
		desktop_appearance: {
			title_color: '#000',
			description_color: '#000',
			background: 'white',
			primary_button_background: '#0D59F2',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template64: {
		css: () =>
			import(/*webpackChunkName: "template64_css" */ '!css-loader!less-loader!./template64.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 64: Đăng ký tư vấn mua nhà', en: 'Template 64: Register for free consultant'},
			title: {
				vi: 'Sở hữu ngay căn hộ mơ ước',
				en: 'Find your perfect home',
			},
			description: {
				vi: 'Sở hữu căn hộ cao cấp chưa bao giờ dễ dàng đến thế với các gói hỗ trợ tài chính linh hoạt, lãi suất chỉ từ 7%/năm',
				en: 'Become a hown owner has never been so easy like this. Leave your contacts here and we will get back to you soon',
			},
			primary_button: {vi: 'Đăng ký', en: 'Register'},
		},
		desktop_appearance: {
			title_color: '#3C4936',
			description_color: '#000',
			background: 'transparent',
			primary_button_background: '#526B47',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template65: {
		css: () =>
			import(/*webpackChunkName: "template65_css" */ '!css-loader!less-loader!./template65.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 65: Đăng ký mua bảo hiểm', en: 'Template 65: Sign up to buy insurance'},
			title: {
				vi: 'Nhận ngay ưu đãi 40% khi đăng ký mua bảo hiểm',
				en: 'Get 40% off this month on any insurance plan',
			},
			description: {
				vi: 'Hãy để lại số điện thoại để được tư vấn các gói bảo hiểm phù hợp',
				en: 'Please leave your contacts below, we will get back to you soon',
			},
			primary_button: {vi: 'Nhận ưu đãi', en: 'Sign up'},
		},
		desktop_appearance: {
			title_color: '#A36F29',
			description_color: '#000',
			background: 'white',
			primary_button_background: '#CC8B33',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '16px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
	template66: {
		css: () =>
			import(/*webpackChunkName: "template66_css" */ '!css-loader!less-loader!./template66.less'),
		type: 'modal',
		text: {
			name: {vi: 'Mẫu 66: Đăng ký mua bảo hiểm', en: 'Template 66: Sign up to buy insurance'},
			title: {
				vi: 'Gắn bó lâu dài, an tâm vui sống',
				en: 'Get 40% off this month on any insurance plan',
			},
			description: {
				vi: 'Để lại thông tin để được tư vấn những sản phẩm phù hợp',
				en: 'Please leave your contacts below, we will get back to you soon',
			},
			primary_button: {vi: 'Nhận ưu đãi', en: 'Sign up'},
		},
		desktop_appearance: {
			title_color: '#523814',
			description_color: '#281B15',
			background: 'white',
			primary_button_background: '#7B541E',
			primary_button_color: '#fff',
			input_color: '#000',
			input_background: 'none',
			title_font_size: '36px',
			title_font_weight: '700',
			title_font_family: 'Roboto',
			title_text_transform: 'none',
			description_font_size: '24px',
			description_font_family: 'Roboto',
			input_border_color: 'rgba(0, 0, 0, 0.5)',
		},
	},
}

// add default js load function for any template dont has custom template
Object.keys(meta).map((id) => {
	if (meta[id].js) return

	if (meta[id].desktop_appearance.background_image !== 'none') {
		let img = require('../../assets/background/' + id + '.png')
		if (img.default) img = img.default
		meta[id].desktop_appearance.background_image = 'url(' + img + ')'
	}

	if (!meta[id].desktop_appearance.overlay) meta[id].desktop_appearance.overlay = 'rgba(0,0,0,0.8)'

	if (!meta[id].desktop_appearance.title_text_transform) meta[id].desktop_appearance.title_text_transform = 'none'
	if (!meta[id].desktop_appearance.title_font_family) meta[id].desktop_appearance.title_font_family = 'Roboto'
	if (!meta[id].desktop_appearance.title_font_size) meta[id].desktop_appearance.title_font_size = '30px'
	if (!meta[id].desktop_appearance.title_font_weight) meta[id].desktop_appearance.title_font_weight = 'normal'
	if (!meta[id].desktop_appearance.title_font_style) meta[id].desktop_appearance.title_font_style = 'normal'

	if (!meta[id].desktop_appearance.description_text_transform)
		meta[id].desktop_appearance.description_text_transform = 'none'
	if (!meta[id].desktop_appearance.description_font_family)
		meta[id].desktop_appearance.description_font_family = 'Roboto'
	if (!meta[id].desktop_appearance.description_font_size) meta[id].desktop_appearance.description_font_size = '30px'
	if (!meta[id].desktop_appearance.description_font_weight)
		meta[id].desktop_appearance.description_font_weight = 'normal'
	if (!meta[id].desktop_appearance.description_font_style) meta[id].desktop_appearance.description_font_style = 'normal'

	if (!meta[id].desktop_appearance.input_border_color) meta[id].desktop_appearance.input_border_color = '#000'
})

export default meta
