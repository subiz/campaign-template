import TEMPLATES from './index.js'
import Form from '../components/Form.js'
import './template.less'

var common = require('../src/common.js')
var op = require('object-path')

const MODE = common.mobilecheck() ? 'mobile' : 'desktop'
var Template = null
var CSS = ''

export default {
	name: 'Template',
	props: ['mode', 'template', 'page'],
	data () {
		return {
			close: false,
		}
	},
	watch: {
		async template (t) {
			this.loadTemplate(t)
		},
		async page (page) {
			var css = replaceCssVariable(CSS, page)
			common.setCssToHead('subiz-template-style-' + this.template, css)
		},
	},

	created () {
		this.loadTemplate(this.template)
	},

	methods: {
		onClose () {
			this.$emit('closeButtonClicked')
			this.close = true
		},

		onSecondaryClick () {
			this.$emit('secondaryButtonClicked')
		},

		onPrimaryClick () {
			this.$emit('primaryButtonClicked')
		},
		async loadTemplate (template) {
			let temp = TEMPLATES[t]
			if (!temp) return
			Template = (await temp.js()).default
			CSS = (await temp.css()).default
			var css = replaceCssVariable(CSS, this.page)
			common.setCssToHead('subiz-template-style-' + template, css)
			this.$forceUpdate()
		},
	},
	render (h) {
		if (!Template) return null
		if (this.close) return null
		var mode = this.mode || MODE

		let closeButton = <button class="button-close" vOn:click={this.onClose}></button>

		let primaryButton = null
		if (op.get(this.page, 'primary_button.enabled')) {
			primaryButton = (
				<button vOn:click={this.onPrimaryClick} class="primary-button">
					{op.get(this.page, 'primary_button.text')}
				</button>
			)
		}

		let secondaryButton = null
		if (op.get(this.page, 'secondary_button.enabled')) {
			secondaryButton = (
				<button vOn:click={this.onSecondaryClick} class="secondary-button">
					{op.get(this.page, 'secondary_button.text')}
				</button>
			)
		}

		return (
			<div class={'template' + this.template}>
				<div class={mode}>
					<Template
						page={this.page}
						form={Form}
						primaryButton={primaryButton}
						secondaryButton={secondaryButton}
						closeButton={closeButton}
					/>
				</div>
			</div>
		)
	},
}

// tokenizy(['hello XX andy XX go'], 'XX')
// => ['hello ', {type: 'XX'},' andy ', {type: 'XX'}, ' go']
function tokenize (arr, token) {
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
			out.push({ type: token })
		}
		out.pop()
	}
	return out
}

function replaceCssVariable (css, page) {
	// tokenize
	var tokens = [css]

	tokens = tokenize(tokens, "'@desktop_appearance.color'")
	tokens = tokenize(tokens, "'@desktop_appearance.background'")
	tokens = tokenize(tokens, "'@desktop_appearance.input_color'")
	tokens = tokenize(tokens, "'@desktop_appearance.input_background'")
	tokens = tokenize(tokens, "'@primary_button.background'")
	tokens = tokenize(tokens, "'@primary_button.color'")
	tokens = tokenize(tokens, "'@secondary_button.background'")
	tokens = tokenize(tokens, "'@secondary_button.color'")
	tokens = tokenize(tokens, "'@desktop_appearance.background_image'")
	tokens = tokenize(tokens, "'@desktop_appearance.width'")
	tokens = tokenize(tokens, "'@desktop_appearance.min_height'")
	tokens = tokenize(tokens, "'@desktop_appearance.padding_left'")
	tokens = tokenize(tokens, "'@desktop_appearance.padding_right'")
	tokens = tokenize(tokens, "'@desktop_appearance.padding_top'")
	tokens = tokenize(tokens, "'@desktop_appearance.padding_bottom'")
	tokens = tokenize(tokens, "'@mobile_appearance.background_image'")
	tokens = tokenize(tokens, "'@mobile_appearance.width'")
	tokens = tokenize(tokens, "'@mobile_appearance.min_height'")
	tokens = tokenize(tokens, "'@mobile_appearance.padding_left'")
	tokens = tokenize(tokens, "'@mobile_appearance.padding_right'")
	tokens = tokenize(tokens, "'@mobile_appearance.padding_top'")
	tokens = tokenize(tokens, "'@mobile_appearance.padding_bottom'")

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
