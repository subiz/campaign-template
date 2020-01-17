let template1 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template1"*/ './src/modal/template1/template1.vue')

let template1_2 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template1_2"*/ './src/modal/template1/template1_2.vue')

let template2 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template2" */ './src/modal/template2/template2.vue')
let template2_2 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template2_2" */ './src/modal/template2/template2_2.vue')

let template3 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template3" */ './src/modal/template3/template3.vue')
let template3_2 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template3_2" */ './src/modal/template3/template3_2.vue')

let template4 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template4" */ './src/modal/template4/template4.vue')
let template4_2 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template4_2" */ './src/modal/template4/template4_2.vue')

// let template5 = import (/*webpackChunkName: "template5" */ './src/modal/template5/template5.vue')
// let template6 = import (/*webpackChunkName: "template6" */ './src/modal/template6/template6.vue')
let template9 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template9" */ './src/modal/template9/template9.vue')
let template9_2 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template9_2" */ './src/modal/template9/template9_2.vue')

let template10 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template10" */ './src/modal/template10/template10.vue')
let template10_2 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template10_2" */ './src/modal/template10/template10_2.vue')

let template17 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template17" */ './src/modal/template17/template17.vue')
let template17_2 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "template17_2" */ './src/modal/template17/template17_2.vue')

let templateu23 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "templateu23" */ './src/modal/templateu23/templateu23.vue')
let templateu23_2 = () =>
	import(/*webpackPrefetch: true*/ /*webpackChunkName: "templateu23_2" */ './src/modal/templateu23/templateu23_2.vue')

var modal = {
	template1,
	template2,
	template3,
	template4,
	template9,
	template10,
	template17,
	templateu23,
}
//fullscreen: {
//template5,
//template6,
//},
var second = {
	template1_2,
	template2_2,
	template3_2,
	template4_2,
	template9_2,
	template10_2,
	template17_2,
	templateu23_2,
}

var all = Object.assign({}, modal, second)
export default {modal, all}
