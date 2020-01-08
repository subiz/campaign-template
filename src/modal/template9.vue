<script>
import Form from '../components/Form.vue'
var common = require('../common.js')
var op = require('object-path')
export default {
	name:'template9',
	props:["page"],
	components:{
		Form
	},
	data(){
		return{
			close: false,
			mobile: common.mobilecheck(),
			id:"template9",
			name:"Get feedback",
			title:"Bạn có tìm được thứ bạn cần?",
			description:"Chia sẻ cảm nhận của bạn cho chúng tôi bạn sẽ nhận được 10% GIẢM GIÁ.",
			primary_button_text:"Gửi cảm nhận",
			form:{
				fields:[
					{
						key :1,
						label : "Cảm nhận của bạn",
						is_required :true,
						type :"text",
						multiline_text:true,
						placeholder:"Cảm nhận của bạn",
					},
					{
						key :2,
						label : "Email cua ban",
						is_required :true,
						type :"text",
						multiline_text:false,
						placeholder:"Email của bạn",
					},
				],
			},
			secondary_button_text:"Cancel",
		}
	},
	methods:{
		op: op.get,
		onClose(){
			this.$emit("closeButtonClicked")
			this.close = true;
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
		<div v-if="!close" :class="'container '+ (mobile? 'mobile':'' )">
			<div class="left-content">
				<button v-if="mobile" class="button-close" @click="onClose"></button>
			</div>
			<div class="right-content">
				<button v-if="!mobile" class="button-close" @click="onClose"></button>
				<p class="title">{{op(this.page, 'title', this.title)}}</p>
				<p class="description">{{op(this.page, 'description', this.description)}}</p>
				<Form :form="op(this.page, 'form',this.form)"/>
				<div class="buttons-container">
					<button @click="onPrimaryClick"  v-show="op(this.page,'primary_button.enabled',true)"  class="primary-button">
						{{op(this.page,"primary_button.text", this.primary_button_text)}}
					</button>
					<button @click="onSecondaryClick" v-show="op(this.page,'secondary_button.enabled',true)" class="secondary-button">
						{{op(this.page,"secondary_button.text", this.secondary_button_text)}}
					</button>   
				</div>
			</div>
		</div>
</template>
<style scoped>
.container {
	width: 700px !important;
	background-color: #fff !important;
	display: flex !important;
	flex-direction: row !important;
	margin: 0 auto;
	position: unset;
}

.left-content {
	display: flex !important;
	flex: 1.3 !important;
	background-image: url('../assets/bg9.png') !important;
	background-size: cover !important;
	background-repeat: no-repeat !important;
}

.right-content {
	display: flex !important;
	flex-direction: column !important;
	flex: 1 !important;
	align-items: flex-start !important;
	background-color: #fff !important;
	padding-left: 10px !important;
	position: relative !important;
}

.button-close {
	height: 20px !important;
	width: 20px !important;
	border-radius: 10px !important;
	border: 0px !important;
	background-color: #000 !important;
	position: absolute !important;
	right: 10px !important;
	top: 10px !important;
	background-image: url("../assets/close.png") !important;
	background-size: 100% 100% !important;
}

.description {
	margin-top: 10px !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-weight: normal !important;
	font-size: 15px !important;
	align-self: flex-start !important;
}

.title {
	margin-top: 25px !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-weight: bold !important;
	font-size: 26px !important;
	line-height: 34px !important;
	align-self: flex-start !important;
	padding-right: 10px !important;
}

/deep/.form {
	display: flex !important;
	flex-direction: column !important;
	width: 100% !important;
	margin-top: 20px !important;
}
/deep/ .label{
	margin-top:unset;
}
/deep/.textarea {
	width: 90% !important;
	height: 70px !important;
	border: solid 1px !important;
	border-color: #c0c0c0 !important;
	padding-left: 5px !important;
	padding-top: 5px !important;
	border-radius: 3px !important;
}

/deep/.text-input {
	margin-top: 5px !important;
	width: 90% !important;
	height: 40px !important;
	border: solid 1px #d9d9d9 !important;
	padding-left: 5px !important;
	border-radius: 3px !important;
	outline: 0 !important;
}

.buttons-container {
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	margin-top: 5px !important;
	margin-bottom: 20px !important;

}

.primary-button {
	margin-top: 5px !important;
	margin-right: 5px !important;
	background-color: #FDAD15 !important;
	border-radius: 3px !important;
	border: solid 1px #fdad15 !important;
	padding-top: 10px !important;
	padding-bottom: 10px !important;
	padding-left: 30px !important;
	padding-right: 30px !important;
	color: #fff !important;
	font-size: 14px !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-weight: 600 !important;
	outline: 0 !important;
	cursor: pointer !important;
}

.secondary-button {
	margin-top: 5px !important;
	margin-left: 5px !important;
	background-color: #d9d9d9 !important;
	border-radius: 3px !important;
	border: solid 1px #d9d9d9 !important;
	padding-top: 10px !important;
	padding-bottom: 10px !important;
	padding-left: 30px !important;
	padding-right: 30px !important;
	color: #fff !important;
	font-size: 14px !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-weight: 600 !important;
	outline: 0 !important;
	cursor: pointer !important;
}

.primary-button:hover {
	background-color: #d78a38 !important;
}

.secondary-button:hover {
	background-color: #bbbbbb !important;
}

.container.mobile{
	height: 90% !important;
	flex-direction: column !important;
	width:95% !important;
}
.mobile .left-content{
	flex: 1 !important;
	position: relative !important;
}
.mobile .right-content{
	flex:1 !important;
}
</style>