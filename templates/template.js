import TEMPLATES from './index.js'
import Form from '../components/Form.js'
import './template.less'

var common = require('../src/common.js')
var op = require('object-path')

const MODE = common.mobilecheck() ? 'mobile' : 'desktop'
var Template = null

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
		async loadTemplate (t) {
			let temp = TEMPLATES[t]
			if (!temp) return
			Template = (await temp.js()).default
			console.log('WWW', Template)

			let css = (await temp.css()).default
			common.setCssToHead('subiz-template-style-' + t, css)
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
			<div class={mode + ' template ' + this.template}>
				<Template
					page={this.page}
					form={Form}
					primaryButton={primaryButton}
					secondaryButton={secondaryButton}
					closeButton={closeButton}
				/>
			</div>
		)
	},
}
