let template1 = import(
	/*webpackChunkName: "template1" */ './src/modal/template1/template1.vue'
)
let template2 = import(
	/*webpackChunkName: "template2" */ './src/modal/template2/template2.vue'
)
let template3 = import(
	/*webpackChunkName: "template3" */ './src/modal/template3/template3.vue'
)
let template4 = import(
	/*webpackChunkName: "template4" */ './src/modal/template4/template4.vue'
)
// let template5 = import (/*webpackChunkName: "template5" */ './src/modal/template5/template5.vue')
// let template6 = import (/*webpackChunkName: "template6" */ './src/modal/template6/template6.vue')
let template9 = import(
	/*webpackChunkName: "template9" */ './src/modal/template9/template9.vue'
)
let template10 = import(
	/*webpackChunkName: "template10" */ './src/modal/template10/template10.vue'
)
let template17 = import(
	/*webpackChunkName: "template17" */ './src/modal/template17/template17.vue'
)
let templateu23 = import(
	/*webpackChunkName: "templateu23" */ './src/modal/templateu23/templateu23.vue'
)

export default {
	modal: {
		template1,
		template2,
		template3,
		template4,
		template7,
		template9,
		template10,
		template17,
		templateu23,
	},
	//fullscreen: {
	//template5,
	//template6,
	//},
}
