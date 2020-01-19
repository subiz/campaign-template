export default {
	template1: {
		js: () => import(/*webpackPrefetch: true*/ /*webpackChunkName: "template1" */ './template1/template1.js'),
		css: () =>
			import(
				/*webpackPrefetch: true*/ /*webpackChunkName: "template1_css" */ '!raw-loader!./template1/template1.css'
			),
		type: 'modal',
		name: {
			vi: 'Form đăng ký nhận ưu đãi',
			en: 'Sign up offer',
		},
		title: {
			vi: 'Giảm 10%',
			en: '10% OFF',
		},
		description: {vi: 'với đơn hàng đầu tiên của bạn', en: 'your first order'},
		primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
		secondary_button_text: {
			vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
			en: "No, thanks. I'll be back later",
		},
	},
	template2: {
		name: {
			vi: 'Form đăng ký nhận ưu đãi',
			en: 'Sign up offer',
		},
		title: {
			vi: 'Đăng ký để nhận ưu đãi đặc biệt',
			en: 'Sign up to get special offer',
		},
		description: {
			vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
			en: 'Get 20% off your first order. Sign up now!',
		},
		primary_button_text: {
			vi: 'Đăng ký ngay',
			en: 'Sign up now',
		},
		secondary_button_text: {
			vi: 'Bỏ qua',
			en: 'Cancel',
		},
	},
	template3: {
		name: {
			vi: 'Form đăng ký nhận ưu đãi',
			en: 'Sign up offer',
		},
		title: {
			vi: 'Đăng ký nhận ưu đãi đặc biệt',
			en: 'Sign up to get special offer',
		},
		description: {
			vi: 'Giảm 20% chỉ một ngày duy nhất',
			en: '20% of your first purchase',
		},
		primary_button_text: {
			vi: 'Đăng ký ngay',
			en: 'Sign up now',
		},
		secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
	},
	template4: {
		name: {vi: 'Form đăng ký nhận ưu đãi', en: 'Sign up offer'},
		title: {
			vi: 'Đăng ký nhận ưu đãi khủng',
			en: 'Sign up to get special offer',
		},
		description: {
			vi: 'Giảm giá tới 95%. Miễn phí vận chuyển nội thành',
			en: 'Get 95% of your first purchase. Free shipping',
		},
		primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
		secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
	},
	template9: {
		name: {vi: 'Form hỏi ý kiến (feedback)', en: 'Feedback form'},
		title: {
			vi: 'Bạn có tìm được thứ mình cần?',
			en: 'Did you find what you need?',
		},
		description: {
			vi: 'Chia sẻ cảm nhận của bạn cho chúng tôi bạn sẽ nhận được 10% GIẢM GIÁ.',
			en: 'Share your recent experience and get 10% off your next purchase',
		},
		primary_button_text: {vi: 'Gửi cảm nhận', en: 'Send feedback'},
		secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
	},
	template10: {
		name: {vi: 'Form hỏi ý kiến (feedback)', en: 'Feedback form'},
		title: {
			vi: 'Bạn có tìm được thứ mình cần?',
			en: 'Did you find what you need?',
		},
		description: {
			vi: 'Chia sẻ cảm nhận của bạn cho chúng tôi bạn sẽ nhận được 10% GIẢM GIÁ.',
			en: 'Share your recent experience and get 10% off your next purchase',
		},
		primary_button_text: {vi: 'Gửi cảm nhận', en: 'Send feedback'},
		secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
	},
	template17: {
		name: {vi: 'Form đăng ký nhận ưu đãi', en: 'Sign up offer'},
		title: {
			vi: 'ĐĂNG KÝ ĐỂ NHẬN ƯU ĐÃI ĐẶC BIỆT',
			en: 'SIGN UP TO GET SPECIAL OFFER',
		},
		description: {
			vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
			en: 'Get 20% off your first order. Sign up now!',
		},
		primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
		secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
	},
	templateu23: {
		name: {vi: 'Pop-up sự kiện', en: 'Event pop-up'},
		title: {
			vi: 'CHẶNG ĐƯỜNG MỚI \n THÀNH CÔNG MỚI',
			en: 'NEW JOURNEY \n NEW SUCCESS',
		},
		description: {
			vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
			en: 'Get 20% off your first order. Sign up now!',
		},
		primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
		secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
	},
}
