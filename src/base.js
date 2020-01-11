var common = require('../common.js')
var op = require('object-path')
import Form from '../components/Form.vue'

export default {
	props: ['page', 'mode'],
	components: { Form },

	created () {
		if (!this.mode) this.mode = common.mobilecheck() ? 'mobile' : 'desktop'
	},

	data () {
		return {
			close: false,
		}
	},

	computed: {
		showPrimaryButton () {
			return op.get(this.page, 'primary_button.enabled')
		},
		showSecondaryButton () {
			return op.get(this.page, 'secondary_button.enabled')
		},
		primaryButtonText () {
			return op.get(this.page, 'primary_button.text')
		},
		secondaryButtonText () {
			return op.get(this.page, 'secondary_button.text')
		},
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
	},
}
