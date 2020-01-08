<script>
 var common = require('../common.js')
 var op = require('object-path')
export default {
	name:"template2-2",
	props:['page'],
	data(){
		return{
			mobile: common.mobilecheck(),
			close:false,
			id:"template2_2",
			title:"Cảm ơn bạn!",
			description:"Chúng tôi đã nhận được thông tin yêu cầu liên hệ của bạn và chúng tôi sẽ gọi lạicho bạn vào thời gian bạn đã chọn.",
			primary_button_text: "Ok, Tôi đã hiểu",
			secondary_button_text: "Cancel",
		}
	},
	methods:{
		op:op.get,
		onClose(){
			this.$emit("closeButtonClicked")
			this.close=true
		},
		onSecondaryClick(){
			this.$emit("secondaryButtonClicked")
		},
		onPrimaryClick(){
			this.$emit("primaryButtonClicked")
		}
	}
}
</script>
<template>
<div  v-if="!close" :class="'container ' + (mobile ? 'mobile' :'')">
	<button class="button-close" @click="onClose"></button>
	<p class="title">{{ op(this.page, "title",this.title)}}</p>
	<p class="description">{{op(this.page, "description", this.description)}}</p>
	<div class="buttons-container">
		<button @click="onPrimaryClick" v-show="op(this.page,'primary_button.enabled',true)" class="primary-button">
			{{op(this.page,"primary_button.text", this.primary_button_text)}}
		</button>
		<button @click="onSecondaryClick" v-show="op(this.page,'secondary_button.enabled',true)" class="secondary-button">
			{{ op(this.page, "secondary_button.text", this.secondary_button_text)}}
		</button>
	</div>
</div>
</template>

<style scoped>
.container{
	width: 471px  !important;
	max-width: 100% !important;
	display:flex !important;
	flex-direction: column !important;
	padding-top: 10px !important;
	background: #fff !important;
	position: relative !important;
	margin: 0 auto !important;
}
.button-close{
	width: 20px !important;
	height: 20px !important;
	position: absolute !important;
	right:10px !important;
	border-radius: 10px !important;
	background-color:#d9d9d9 !important;
	border:none !important;
	cursor: pointer !important;
	background-image: url("../assets/close.png") !important;
	background-size:100% 100% !important;
}
.title{
	margin-top:46px !important;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-style: normal !important;
	font-weight: bold !important;
	font-size: 36px !important;
	line-height: 44px !important;
	text-align: center !important;

	color: #000000 !important;
}
.description{
	margin-top:6px !important;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-style: normal !important;
	font-weight: normal !important;
	font-size: 16px !important;
	line-height: 30px !important;
	text-align: center !important;

	color: #000000 !important;
}
.buttons-container{
	margin-top: 36px !important;
	display: flex !important;
	flex-direction: row !important;
	align-items: center !important;
	justify-content: center !important;
	margin-bottom: 30px !important;
}
.primary-button{
	margin-left: 5px !important;
	margin-right: 5px !important;
	background-color: #0265FF !important;
	padding-left: 30px !important;
	padding-right:30px !important;
	height: 45px !important;
	border-radius: 5px !important;
	border:0px !important;
	color: #fff !important;
	font-size: 16px !important;
	font-weight: 600 !important;
	text-transform: uppercase !important;
	text-align: center !important;
	outline: 0 !important;
	cursor: pointer !important;
}
.secondary-button{
	margin-left: 5px !important;
	margin-right: 5px !important;
	background-color: #d9d9d9 !important;
	padding-left: 30px !important;
	padding-right:30px !important;
	height: 45px !important;
	border-radius: 5px !important;
	border:0px !important;
	color: #fff !important;
	font-size: 16px !important;
	font-weight: 600 !important;
	text-transform: uppercase !important;
	text-align: center !important;
	outline: 0 !important;
	cursor: pointer !important;
}
 .secondary-button:hover {
	 color: #bbbbbb !important;
 }
 .primary-button:hover{
	 background-color: #03176f !important;
 }
 .container.mobile { 
	 width: 90%;
 }
</style>