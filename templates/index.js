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

		text: {
			name: {vi: 'Form đăng ký nhận ưu đãi', en: 'Sign up offer'},
			title: {vi: 'Giảm 10%', en: '10% OFF'},
			description: {
				vi: 'với đơn hàng đầu tiên của bạn',
				en: 'your first order',
			},
			primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button_text: {
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
			import(
				/*webpackPrefetch: true*/ /*webpackChunkName: "template2_css" */ '!to-string-loader!css-loader!less-loader!./template2.less'
			),
		type: 'modal',
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
			primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg2.png') + ')',
			primary_button_background: '#FDAD15',
			primary_button_color: 'white;',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
	},
	template3: {
		css: () =>
			import(
				/*webpackPrefetch: true*/ /*webpackChunkName: "template3_css" */ '!to-string-loader!css-loader!less-loader!./template3.less'
			),
		type: 'modal',
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
			primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/template3.png') + ')',
			primary_button_background: '#d12',
			primary_button_color: 'white;',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
	},
	template4: {
		css: () =>
			import(
				/*webpackPrefetch: true*/ /*webpackChunkName: "template4_css" */ '!to-string-loader!css-loader!less-loader!./template4.less'
			),
		type: 'modal',
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
			primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			// background_image: 'url(' + require('../assets/background/bg4.png') + ')',
			primary_button_background: '#001984',
			primary_button_color: 'white;',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
	},
	template5: {
		css: () =>
			import(
				/*webpackPrefetch: true*/ /*webpackChunkName: "template5_css" */ '!to-string-loader!css-loader!less-loader!./template5.less'
			),
		type: 'modal',
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
			primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: '#001984',
			primary_button_color: 'white;',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
	},
	template6: {
		css: () =>
			import(
				/*webpackPrefetch: true*/ /*webpackChunkName: "template6_css" */ '!to-string-loader!css-loader!less-loader!./template6.less'
			),
		type: 'modal',
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
			primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
			secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
		},
		desktop_appearance: {
			title_color: '#fff',
			description_color: '#fff',
			background: 'white',
			primary_button_background: '#001984',
			primary_button_color: 'white;',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
		mobile_appearance: {
			title_color: '#fff',
			description_color: '#fff',
			background: 'white',
			background_image:  'url(' + require('../assets/background/template6_mobile.png') + ')',
			primary_button_background: '#dab86a',
			primary_button_color: 'white;',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
	},
	template9: {

		css: () =>
			import(
				/*webpackPrefetch: true*/ /*webpackChunkName: "template9_css" */ '!to-string-loader!css-loader!less-loader!./template9.less'
			),
		type: 'modal',
		text: {
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
		desktop_appearance: {
			title_color: 'black',
			description_color: 'black',
			background: 'white',
			primary_button_background: '#fdad15',
			primary_button_color: 'white;',
			secondary_button_background: '#777',
			secondary_button_color: 'white',
			input_color: '',
			input_background: '',
		},
		
	},
	// template10: {
	// 	name: {vi: 'Form hỏi ý kiến (feedback)', en: 'Feedback form'},
	// 	title: {
	// 		vi: 'Bạn có tìm được thứ mình cần?',
	// 		en: 'Did you find what you need?',
	// 	},
		
	// },
	// template17: {
	// 	name: {vi: 'Form đăng ký nhận ưu đãi', en: 'Sign up offer'},
	// 	title: {
	// 		vi: 'ĐĂNG KÝ ĐỂ NHẬN ƯU ĐÃI ĐẶC BIỆT',
	// 		en: 'SIGN UP TO GET SPECIAL OFFER',
	// 	},
	// 	description: {
	// 		vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
	// 		en: 'Get 20% off your first order. Sign up now!',
	// 	},
	// 	primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
	// 	secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
	// },
	// templateu23: {
	// 	name: {vi: 'Pop-up sự kiện', en: 'Event pop-up'},
	// 	title: {
	// 		vi: 'CHẶNG ĐƯỜNG MỚI \n THÀNH CÔNG MỚI',
	// 		en: 'NEW JOURNEY \n NEW SUCCESS',
	// 	},
	// 	description: {
	// 		vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
	// 		en: 'Get 20% off your first order. Sign up now!',
	// 	},
	// 	primary_button_text: {vi: 'Đăng ký ngay', en: 'Sign up now'},
	// 	secondary_button_text: {vi: 'Bỏ qua', en: 'Cancel'},
	// },
}

// add default js load function for any template dont has custom template
Object.keys(meta).map(id => {
	if (meta[id].js) return
	meta[id].desktop_appearance.background_image='url(' + require('../assets/background/'+ id +'.png') + ')'
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
										<div class="title-separator"></div>
										<p class="description">{this.page.description}</p>
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
	props: ['mode', 'template', 'page'],
	data() {
		return {
			Template: null,
			close: false,
			templateid: '',
		}
	},

	watch: {
		async template(template) {
			this.loadTemplate(template)
		},
		async page(page) {
			this.populatePage(this.templateid, page)
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
				if (b[keys[i]])  c[keys[i]] = b[keys[i]]
			}
			return c
		},

		populatePage(templateid, page) {
			let temp = meta[templateid]
			var desktop_appearance = this.merge(temp.desktop_appearance, page.desktop_appearance)
			var mobile_appearance = this.merge(temp.mobile_appearance, page.mobile_appearance)
			var css = replaceCssVariable(CSS, {desktop_appearance, mobile_appearance})
			common.setCssToHead('subiz-template-style-' + this.template, css)
		},
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
			this.populatePage(t, this.page)
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

	if (arr.length > 100) return []
	for (let i = 0; i < arr.length; i++) {
		var item = arr[i]
		if (typeof item !== 'string') {
			out.push(item)
			continue
		}
		var ts = item.split(token)
		if (ts.length > 100) return []
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

export default {meta, Template}
