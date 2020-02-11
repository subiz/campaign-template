import Form from '../components/Form.js'
import CloseButton from '../components/CloseButton.js'
var common = require('../common.js')
var op = require('object-path')

const MODE = common.mobilecheck() ? 'mobile' : 'desktop'
var CSS = ''

var meta = {
	template1: {
		// js: () => import(/*webpackPrefetch: true*/ /*webpackChunkName: "template1" */ './template1/index.js'),
		css: () =>
			import(
				/*webpackPrefetch: true*/ /*webpackChunkName: "template1_css" */ '!to-string-loader!css-loader!less-loader!./template1.less'
			),

		type: 'modal',
		en: {
			name: 'Sign up offer',
			title: '10% OFF',
			description: 'your first order',
			primary_button: {text: 'Sign up now', background: '', color: ''},
			secondary_button: {text: "No, thanks. I'll be back later", background: '', color: ''},
			color: '',
			background: '',
			input_color: '',
			input_background: '',
			desktop_appearance: {
				background_image: '',
				width: '',
				min_height: '',
				padding_left: '5px',
				padding_right: '',
				padding_top: '',
				padding_bottom: '',
			},
			mobile_appearance: {
				background_image: '',
				width: '',
				min_height: '',
				padding_left: '',
				padding_right: '',
				padding_top: '',
				padding_bottom: '',
			},
		},
		vi: {
			name: 'Form đăng ký nhận ưu đãi',
			title: 'Giảm 10%',
			description: 'với đơn hàng đầu tiên của bạn',
			primary_button: {text: 'Đăng ký ngay'},
			secondary_button: {text: 'Không, cảm ơn. Tôi sẽ quay lại sau'},
		},
	},
	template2: {
		css: () =>
			import(
				/*webpackPrefetch: true*/ /*webpackChunkName: "template2_css" */ '!to-string-loader!css-loader!less-loader!./template2.less'
			),
		type: 'modal',
		en: {
			name: 'Sign up offer',
			title: 'Sign up to get special offer',
			description: 'Get 20% off your first order. Sign up now!',
			primary_button: {text: 'Sign up now'},
			secondary_button: {text: 'Cancel'},
		},
		vi: {
			name: 'Form đăng ký nhận ưu đãi',
			title: 'Đăng ký để nhận ưu đãi đặc biệt',
			description: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
			primary_button: {text: 'Đăng ký ngay'},
			secondary_button: {text: 'Bỏ qua'},
		},
	},
	template3: {
		css: () =>
			import(
				/*webpackPrefetch: true*/ /*webpackChunkName: "template3_css" */ '!to-string-loader!css-loader!less-loader!./template3.less'
			),
		type: 'modal',
		en: {
			name: 'Sign up offer',
			title: 'Sign up to get special offer',
			description: 'Get 20% off your first order. Sign up now!',
			primary_button: {text: 'Sign up now'},
			secondary_button: {text: 'Cancel'},
		},
		vi: {
			name: 'Form đăng ký nhận ưu đãi',
			title: 'Đăng ký để nhận ưu đãi đặc biệt',
			description: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
			primary_button: {text: 'Đăng ký ngay'},
			secondary_button: {text: 'Bỏ qua'},
		},
	},
	template4: {
		css: () =>
			import(
				/*webpackPrefetch: true*/ /*webpackChunkName: "template4_css" */ '!to-string-loader!css-loader!less-loader!./template4.less'
			),
		type: 'modal',
		en: {
			name: 'Sign up offer',
			title: 'Sign up to get special offer',
			description: 'Get 20% off your first order. Sign up now!',
			primary_button: {text: 'Sign up now'},
			secondary_button: {text: 'Cancel'},
		},
		vi: {
			name: 'Form đăng ký nhận ưu đãi',
			title: 'Đăng ký để nhận ưu đãi đặc biệt',
			description: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
			primary_button: {text: 'Đăng ký ngay'},
			secondary_button: {text: 'Bỏ qua'},
		},
		// name: {vi: 'Form đăng ký nhận ưu đãi', en: 'Sign up offer'},
		// title: {
		// 	vi: 'Đăng ký nhận ưu đãi khủng',
		// 	en: 'Sign up to get special offer',
		// },
		// description: {
		// 	vi: 'Giảm giá tới 95%. Miễn phí vận chuyển nội thành',
		// 	en: 'Get 95% of your first purchase. Free shipping',
		// },
		// primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
		// secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
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

// add default js load function for any template dont has custom template
Object.keys(meta).map(id => {
	if (meta[id].js) return
	meta[id].js = () =>
		Promise.resolve({
			default: {
				name: 'subiz-template',
				props: ['page', 'form', 'countdown', 'primaryButton', 'secondaryButton', 'closeButton'],
				render(h) {
					return (
						<div class="overlay">
							<div class="container">
								{this.closeButton}
								<div class="container__inner">
									<div class="background"></div>
									<div class="content">
										<p class="title">{this.page.title}</p>
										<p class="description">{this.page.description}</p>
										<div class="form">{this.form}</div>
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
	props: ['mode', 'template', 'page'],
	data() {
		return {
			Template: null,
			close: false,
		}
	},

	watch: {
		async template(template) {
			this.loadTemplate(template)
		},
		async page(page) {
			var css = replaceCssVariable(CSS, page)
			common.setCssToHead('subiz-template-style-' + this.template, css)
		},
	},

	created() {
		this.loadTemplate(this.template)
	},

	methods: {
		onClose() {
			this.$emit('closeButtonClicked')
			this.close = true
		},

		onSecondaryClick() {
			this.$emit('secondaryButtonClicked')
		},

		onPrimaryClick() {
			this.$emit('primaryButtonClicked')
		},

		async loadTemplate(t) {
			let temp = meta[t]
			if (!temp) return
			let template = (await temp.js()).default
			CSS = (await temp.css()).default
			this.Template = template
			var css = replaceCssVariable(CSS, this.page)
			common.setCssToHead('subiz-template-style-' + t, css)
		},
	},

	render(h) {
		if (!this.Template) return null
		if (this.close) return null

		let $close = <CloseButton class="btn btn--close" vOn:click={this.onClose} />
		let $primary = null
		if (op.get(this.page, 'primary_button.enabled')) {
			$primary = (
				<button vOn:click={this.onPrimaryClick} class="btn btn--primary">
					{op.get(this.page, 'primary_button.text')}
				</button>
			)
		}

		let $secondary = null
		if (op.get(this.page, 'secondary_button.enabled')) {
			$secondary = (
				<button vOn:click={this.onSecondaryClick} class="btn btn--secondary">
					{op.get(this.page, 'secondary_button.text')}
				</button>
			)
		}

		let $form = <Form form={this.page.form} />
		var mode = this.mode || MODE
		return (
			<div class={'template ' + this.template}>
				<div class={mode}>
					<this.Template
						page={this.page}
						form={$form}
						primaryButton={$primary}
						secondaryButton={$secondary}
						closeButton={$close}
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

	for (var i = 0; i < arr.length; i++) {
		var item = arr[i]

		if (typeof item !== 'string') {
			out.push(item)
			continue
		}
		var ts = item.split(token)
		for (var i = 0; i < ts.length; i++) {
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
	tokens = tokenize(tokens, "'@desktop_appearance.secondary_button.background'")
	tokens = tokenize(tokens, "'@desktop_appearance.secondary_button.color'")
	tokens = tokenize(tokens, "'@mobile_appearance.title_color'")
	tokens = tokenize(tokens, "'@mobile_appearance.description_color'")
	tokens = tokenize(tokens, "'@mobile_appearance.background'")
	tokens = tokenize(tokens, "'@mobile_appearance.background_image'")
	tokens = tokenize(tokens, "'@mobile_appearance.primary_button_background'")
	tokens = tokenize(tokens, "'@mobile_appearance.primary_button_color'")
	tokens = tokenize(tokens, "'@mobile_appearance.secondary_button.background'")
	tokens = tokenize(tokens, "'@mobile_appearance.secondary_button.color'")

	var ret = []
	for (var i = 0; i < tokens.length; i++) {
		var item = tokens[i]
		if (typeof item === 'string') {
			ret.push(item)
			continue
		}

		// remove @''
		var path = item.type.substr(2, item.type.length - 3)
		item.push(op.get(page, path))
	}
	return ret.join('')
}

export default {meta, Template}
