<script>
import common from '../common.js'
var op = require('object-path')
import Form from '../components/Form.vue'
export default {
	name:'template3',
	props: ['page'],
	components:{
		Form
	},
	data(){
		return{
			mobile:common.mobilecheck(),
			close: false,
			id:"template3",
			name:"Get leads",
			title:"Đăng ký nhận ưu đãi đặc biệt.",
			description:"Giảm 20% chỉ một ngày suy nhất.",
			primary_button_text:"Đăng ký ngay",
			form:{
				fields:[
            {
              key :1,
              label : "Ho Ten",
              is_required :true,
              type :"text",
              placeholder:"Họ tên"
            },
            {
              key :2,
              label : "Email cua ban",
              is_required :true,
              type :"text",
              placeholder:"Email của bạn"
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
			this.close = true
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
	<div v-if="!close" :class="'container '+(mobile ? 'mobile': '')">
		<div class="left-content">
			<button v-if="mobile" class="button-close" @click="onClose"></button>
		</div>
		<div class="right-content">
			<button v-if="!mobile" class="button-close" @click="onClose"></button>
			<p class="description">{{op(this, "page.description",this.description)}}</p>
			<div class="red-div"></div>
			<p class="title">{{op(this, "page.title",this.title)}}</p>
			<Form :form="op(this,'page.form',this.form)"/>
			<div class="buttons-container">
				<button @click="onPrimaryClick" v-show="op(this,'page.primary_button.enabled',true)"  class="primary-button">
					{{op(this,"page.primary_button.text", this.primary_button_text)}}
				</button>
				<button @click="onSecondaryClick" v-show="op(this,'page.secondary_button.enabled',true)" class="secondary-button">
					{{op(this, "page.secondary_button.text", this.secondary_button_text)}}
				</button>
			</div>
		</div>
	</div>
</template>
<style scoped>
	* {
	margin: 0 !important;
	padding: 0 !important;
	box-sizing: border-box !important;
}
.container{
	display: flex !important;
	flex-direction: row !important;
	width: 800px !important;
	max-width: 100% !important;
	margin: 0 auto !important;
}
.left-content{
	display: flex !important;
	flex:1 !important;
	background-image: url('../assets/bg3.png') !important;
	background-size : auto !important;
	background-repeat: no-repeat !important
}
.right-content{
	display: flex !important;
	flex-direction: column !important;
	flex:1 !important;
	align-items: center !important;
	background-color: #fff !important;
	padding-top: 42px !important;
	position: relative !important;
}
.button-close{
	position: absolute !important;
	right: 10px !important;
	top: 10px !important;
	height: 20px !important;
	width: 20px !important;
	border-radius: 10px !important;
	border:0px !important;
	background-image: url('../assets/close.png') !important;
	background-size: 100% 100% !important;
}
.description{
	margin-top: 10px !important;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-style: normal !important;
	font-weight: normal !important;
	font-size: 16px !important;
	align-self: flex-start !important;
	margin-left: 15px !important;
}
.red-div{
	margin-top: 8px !important;
	width: 134px !important;
	height: 5px !important;
	background-color: #B91526 !important;
	align-self: flex-start !important;
	margin-left: 15px !important;
}
.title{
	margin-top: 10px !important;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-style: normal !important;
	font-weight: bold !important;
	font-size: 28px !important;
	line-height: 34px !important;
	align-self: flex-start !important;
	margin-left: 15px !important;
}
/deep/.form{
	width: 100% !important;
	padding-left: 10px !important;
	padding-right: 10px !important;
	margin-left: 15px !important;

}
/deep/.label{
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 10px;
	color: #000;
}
/deep/.text-input{
	width: 90% !important;
	height: 40px !important;
	border: none !important;
	border-bottom: 1px solid #d9d9d9 !important;
	padding-left: 5px !important;
	font-size: 12px !important;
	margin-top: 10px !important;
	outline: 0 !important;
}
.buttons-container{
	margin-top: 10px !important; 
	display: flex !important; 
	align-items: center !important; 
	justify-content: center !important; 
	margin-bottom: 10px !important; 
}
.primary-button{
	margin-right: 5px !important; 
	margin-left: 5px !important; 
	background-color: #B91526 !important; 
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
	cursor: pointer !important; 
}
.secondary-button{
	margin-right: 5px !important; 
	margin-left: 5px !important; 
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
	 background-color: #92111e !important;
 }
.container.mobile{
	height: 80% !important; 
	width: 90% !important; 
	flex-direction: column !important; 
}
.mobile .right-content{
	position: unset !important; 
	padding-top: 5px !important; 
}
.mobile .left-content{
	position: relative !important; 
}
</style>