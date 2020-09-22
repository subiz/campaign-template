import Form from '../components/Form.js'
import CloseButton from '../components/CloseButton.js'
import { render, h, Component } from 'preact'
var op = require('object-path')

// props: ['mode', 'page', 'frame', 'select', 'reset'],
class Template extends Component {
	setClose (close) {
		// so only us can scroll
		if (close) {
			this.setState({ closeAnimation: 'bounceOut' })
			setTimeout(() => {
				this.setState({ close: true, closeAnimation: '' })
				document.body.classList.remove('sbz_noscroll')
			}, 400)
		} else {
			this.setState({ closeAnimation: '' })
			document.body.classList.add('sbz_noscroll')
		}
	}

	onClose () {
		this.props.onClose()
		this.setClose(true)
	}

	onSecondaryClick () {
		this.props.onClick('secondary_button')
		this.onButtonClick(op.get(this.props.page, 'secondary_button'), 'secondaryButtonClicked')
	}

	onButtonClick (button, ev) {
		let actions = op.get(button, 'actions') || []
		let mustfillform = false
		for (let a of actions) {
			if (a.action === 'converstion' || a.action === 'submit') {
				mustfillform = true
				this.setState({ pressedSubmit: true })
			}
		}

		if (mustfillform && !formFilled(op.get(this.props.page, 'form'))) return
		for (let a of actions) {
			if (a.action === 'close') setTimeout(() => this.onClose(), 200)
		}
	}

	onBackgroundClick () {
		this.onButtonClick(op.get(this.props.page, 'background_click'), 'backgroundClicked')
	}

	onPrimaryClick () {
		this.$emit('clicked', 'primary_button')
		this.onButtonClick(op.get(this.props.page, 'primary_button'), 'primaryButtonClicked')
	}

	componentDidMount () {
		this.setClose(false) // auto open when created
	}

	render () {
		this.loadTemplate()
		if (this.state.close) return null

		let $close = <CloseButton onClick={(e) => this.onClose(e)} />
		let $primary = null
		let primaryBtnCls = 'btn btn--primary'
		if (this.props.select === 'primary_button') primaryBtnCls += ' text__shake'
		if (op.get(this.props.page, 'primary_button.enabled')) {
			$primary = (
				<button onClick={this.onPrimaryClick} class={primaryBtnCls}>
					{op.get(this.props.page, 'primary_button.text')}
				</button>
			)
		}

		let $secondary = null
		let secondaryBtnCls = 'btn btn--secondary'
		if (this.props.select === 'secondary_button') secondaryBtnCls += ' text__shake'
		if (op.get(this.props.page, 'secondary_button.enabled')) {
			$secondary = (
				<button onClick={(e) => this.onSecondaryClick(e)} class={secondaryBtnCls}>
					{op.get(this.props.page, 'secondary_button.text')}
				</button>
			)
		}

		let $form = <Form onClick={this.onClick} form={this.props.page.form} pressedSubmit={this.state.pressedSubmit} />
		var mode = this.props.mode

		var cls = 'overlay '
		if (this.props.frame) cls += ' overlay--' + this.props.frame
		var animation = 'container '
		if (this.state.closeAnimation) animation += this.state.closeAnimation
		else animation += this.props.page.animation

		let titlecls = 'title'
		if (this.props.select === 'title') titlecls += ' text__shake'

		let desccls = 'description'
		if (this.props.select === 'description') desccls += ' text__shake'

		return (
			<div class={'template ' + this.props.template}>
				<div class={mode}>
					<div class={cls} onClick={(e) => this.onBackgroundClick(e)}>
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
						<div class={animation} onClick={(e) => e.stopPropagation()}>
							{$close}
							<div class="container__inner">
								<div class="background"></div>
								<div class="content">
									<p class={titlecls} onClick={(e) => this.props.onClick('title')}>
										{this.props.page.title}
									</p>
									<div class="title-separator"></div>
									<p class={desccls} onClick={(e) => this.props.onClick('description')}>
										{this.props.page.description}
									</p>
									{$form}
									<div class="buttons">
										{$primary}
										{$secondary}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

function merge (a, b) {
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
}

// tokenizy(['hello XX andy XX go'], 'XX')
// => ['hello ', {type: 'XX'},' andy ', {type: 'XX'}, ' go']
function tokenize (arr, token) {
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
			out.push({ type: token })
		}
		out.pop()
	}
	return out
}

function replaceCssVariable (css, page) {
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

	tokens = tokenize(tokens, "'@desktop_appearance.title_font_family'")
	tokens = tokenize(tokens, "'@desktop_appearance.title_font_size'")
	tokens = tokenize(tokens, "'@desktop_appearance.title_font_style'")
	tokens = tokenize(tokens, "'@desktop_appearance.title_font_weight'")
	tokens = tokenize(tokens, "'@desktop_appearance.title_text_transform'")
	tokens = tokenize(tokens, "'@desktop_appearance.description_font_family'")
	tokens = tokenize(tokens, "'@desktop_appearance.description_font_size'")
	tokens = tokenize(tokens, "'@desktop_appearance.description_font_style'")
	tokens = tokenize(tokens, "'@desktop_appearance.description_font_weight'")
	tokens = tokenize(tokens, "'@desktop_appearance.description_text_transform'")
	tokens = tokenize(tokens, "'@desktop_appearance.input_label_color'")
	tokens = tokenize(tokens, "'@desktop_appearance.input_border_color'")

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

	tokens = tokenize(tokens, "'@mobile_appearance.title_font_family'")
	tokens = tokenize(tokens, "'@mobile_appearance.title_font_size'")
	tokens = tokenize(tokens, "'@mobile_appearance.title_font_style'")
	tokens = tokenize(tokens, "'@mobile_appearance.title_font_weight'")
	tokens = tokenize(tokens, "'@mobile_appearance.title_text_transform'")
	tokens = tokenize(tokens, "'@mobile_appearance.description_font_family'")
	tokens = tokenize(tokens, "'@mobile_appearance.description_font_size'")
	tokens = tokenize(tokens, "'@mobile_appearance.description_font_style'")
	tokens = tokenize(tokens, "'@mobile_appearance.description_font_weight'")
	tokens = tokenize(tokens, "'@mobile_appearance.description_text_transform'")
	tokens = tokenize(tokens, "'@mobile_appearance.input_label_color'")
	tokens = tokenize(tokens, "'@mobile_appearance.input_border_color'")
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

function replaceFileUrl (src) {
	if (!src) return ''
	src = src.replace('filev4.subiz.com', 'file-subiz.com')
	src = src.replace('file.subiz.com', 'file-subiz.com')
	src = src.replace('file.mysubiz.com', 'file-subiz.com')
	return src
}

function formFilled (form) {
	let hasForm = form && form.enabled && form.fields && form.fields.length > 0
	if (!hasForm) return true

	for (let i = 0; i < form.fields.length; i++) {
		let field = form.fields[i]
		if (field.is_required && (field.value === undefined || field.value === '')) return false
	}

	return true
}

function populatePage (temp, page, CSS) {
	if (!temp || !page) return
	var desktop_appearance = merge(temp.desktop_appearance, page.desktop_appearance)
	var mobile_appearance = merge(temp.mobile_appearance, page.mobile_appearance)

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

	var css = replaceCssVariable(CSS, { desktop_appearance, mobile_appearance })
	setCssToHead('subiz-template-style-' + temp.id, css)
}

function setCssToHead (id, css) {
	let cssStyleDiv = document.querySelector('#' + id)
	if (!cssStyleDiv) {
		cssStyleDiv = document.createElement('style')
		cssStyleDiv.type = 'text/css'
		cssStyleDiv.id = id
		document.head.appendChild(cssStyleDiv)
	}

	if (cssStyleDiv.styleSheet) {
		// This is required for IE8 and below.
		cssStyleDiv.styleSheet.cssText = css
	} else {
		cssStyleDiv.innerHTML = ''
		cssStyleDiv.appendChild(document.createTextNode(css))
	}
}

export function wrap (meta, css) {
	return {
		meta: meta,
		New: () => {
			// cache
			let my_ele = null // last element to render
			let my_option = null
			let last_desktop_appear = null
			let last_mobile_appear = null

			return {
				reset () {
					render(<div></div>, my_ele)
					this.forceUpdate()
				},

				forceUpdate () {
					return this.render(my_ele, my_option)
				},

				// ele: element to render to
				render (ele, option) {
					if (
						!eq(last_desktop_appear, op.get(option, 'page.desktop_appearance')) ||
						!eq(last_mobile_appear, op.get(option, 'page.mobile_appearance'))
					) {
						last_desktop_appear = copy(op.get(option, 'page.desktop_appearance'))
						last_mobile_appear = copy(op.get(option, 'page.mobile_appearance'))
						populatePage(meta, option.page, css)
					}

					if (typeof ele === 'string') ele = document.querySelector(ele)
					if (!ele) return

					my_ele = ele
					my_option = option
					let onclick = option.onClick || (() => true)
					let onclose = option.onClose || (() => true)
					return render(
						<Template
							page={option.page}
							select={option.select}
							onClick={onclick}
							onClose={onclose}
							mode={option.mode}
							frame={option.frame}
						/>,
						ele,
					)
				},
			}
		},
	}
}

function eq (a, b) {
	return JSON.stringify(a) === JSON.stringify(b)
}

function copy (a) {
	return JSON.parse(JSON.stringify(a))
}
