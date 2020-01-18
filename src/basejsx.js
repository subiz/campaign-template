var common = require('./common.js')
import Form from './components/Form.vue'

export default {
	props: ['page', 'mode'],

	created () {
		if (!this.mode) this.mode = common.mobilecheck() ? 'mobile' : 'desktop'
	},

	data () {
		return {
			close: false,
		}
	},
	render (h) {
		return (
			<div>
				HELLO <Form />{' '}
			</div>
		)
	},
}
