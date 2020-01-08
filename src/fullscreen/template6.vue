<script>
import common from '../common.js'
var op = require('object-path')
import Form from '../components/Form.vue'
export default {
	name:'template6',
	props:['page'],
	components: {Form},
	data(){
		return{
			mobile: common.mobilecheck(),
			op: op.get,
			close: false,
			id:"template6",
			name:"Get leads",
			subtitle:"Giảm 30%",
			title:"Và miễn phí vận chuyển nội thành.",
			description:"Chỉ một ngày duy nhất.Đăng ký ngày để nhận được mã giảm giá",
			primary_button_text:"Đăng ký ngay",
			form:{
				fields:[
            {
              key :1,
              label : "Ho Ten",
              is_required :true,
              type :"text",
              placeholder:"Số điện thoại của bạn"
            },
          ],
			},
			secondary_button_text:"Cancel",
		}
	},
	methods:{
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
	<div v-show="!close" :class="'container '+( mobile ? 'mobile': '')">
		<button class="button-close" @click="onClose"/>
		<p class="subtitle">{{op(this,"page.subtitle",this.subtitle)}}</p>
		<p class="title">{{op(this,"page.title",this.title)}}</p>
		<div class="white-div"/>
		<p class="description">{{op(this,"page.description",this.description)}}</p>
		<Form :form="op(this,'page.form',this.form)" />
		<div class="buttons-container">
			<button @click="onPrimaryClick" v-show="op(this,'page.primary_button.enabled',true)" class="primary-button">
				{{op(this,"page.primary_button.text", this.primary_button_text)}}
			</button>
			<button @click="onSecondaryClick" v-show="op(this,'page.secondary_button.enabled',true)"  class="secondary-button">
				{{op(this, "page.secondary_button.text",this.secondary_button_text)}}
			</button>
		</div>
	</div>
</template>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.container{
	display: flex;
	flex-direction: column;
  align-items: center;
	padding-top: 10px;
  height: 100vh;
	width: 100%;
	max-width: 100%;
	max-height: 100%;
	background-image: url('../assets/bg6.png');
	background-size:cover;
	background-position: center;
	position: relative;
}
.button-close{
	width: 30px;
	height: 30px;
	position: absolute;
	right:10px;
	top:10px;
	border-radius: 15px;
	background-color:#d9d9d9;
	border:none;
	cursor: pointer;
	background-image: url("../assets/close.png");
	background-size:100% 100%;
}
.subtitle{
	margin-top: 10%;
	font-weight: normal;
	font-size: 60px;
	font-weight: 600;
	color: #fff;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	text-align: center;
}
.title{
	padding: 5px;
	color: #fff;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 500;
	font-size: 24px;
	text-align: center;
}
.mobile .white-div{
	width: 52px;
	height: 2px;	
}
.white-div{
	margin: 5px;
	width: 140px;
	height: 5px;
	background-color: #fff;
}
.description{
	color: #fff;
	font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	font-style: normal;
	font-size: 22px;
	width:50%;
	text-align: center;
}
/deep/.form{
	width:100%;
	display: flex;
	flex-direction: column;
	align-items:center;
	margin-top: 5px !important;
}
/deep/ .form-item{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
/deep/ .label{
	display: none;
}
/deep/.text-input{
	margin-top:10px;
	width: 40% !important;
	height: 35px !important;
	border:none !important;
	padding-left: 5px !important;
	border-bottom: 1px solid #d9d9d9 !important;
	border:none !important;
	outline: 0 !important;
	border-radius: 3px !important;

}
.buttons-container{
	margin-top: 10px !important;
	display: flex !important;	
	align-items: center !important;
	justify-content: center !important;
	margin-bottom: 10px !important;
}
.primary-button{
	padding-top: 10px !important;
	padding-bottom: 10px !important;
	padding-left: 25px !important;
	padding-right:25px !important;
	margin-top:5px !important;
	margin-right:5px !important;
	margin-left:5px !important;
	color: #eb6743 !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-weight: bold !important;
	font-size: 15px !important;
	background-color: #fff !important;
	border: none !important;
	border-radius: 5px !important;
	cursor: pointer !important;
	outline: 0 !important;
}
.secondary-button{
	margin-right:5px !important;
	margin-left:5px !important;
	padding-top: 10px !important;
	padding-bottom: 10px !important;
	padding-left: 25px !important;
	padding-right:25px !important;
	margin-top:5px !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-weight: bold !important;
	color:#000 !important;
	font-size: 16px !important;
	background-color: ghostwhite !important;
	border:none !important;
	border-radius: 5px !important;
	cursor: pointer !important;
	outline: 0 !important;
}
 .secondary-button:hover {
	 background-color: #e4e4e4 !important;
 }
 .primary-button:hover{
	 background-color: #d9d9d9 !important;
 }

.container.mobile{
	background-image: url('../assets/bg6_mobile.png') !important;
	background-size: 100% 100% !important;
	background-position: unset;
	align-items: center !important;
	justify-content: center !important;
	padding-bottom: 50px !important;
}
.mobile .subtitle{
margin-top: unset !important;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
font-style: normal !important;
font-weight: 500 !important;
font-size: 30px !important;
line-height: 22px !important;
text-align: center !important;
}
.mobile .title{
margin-top: 5px !important;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
font-style: normal !important;
font-weight: 500 !important;
font-size: 18px !important;
line-height: 22px !important;
text-align: center !important;
width: 65% !important;
}
.mobile .description{
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
font-style: normal !important;
font-weight: normal !important;
font-size: 13px !important;
line-height: 16px !important;
text-align: center !important;
width: 75% !important;
}
.mobile /deep/ .form {
	width: 50% !important;
}
.mobile /deep/ .text-input{
	width: 100% !important;
	height: 30px !important;
}
.mobile .buttons-container{
position: absolute !important;
bottom: 50px !important;
display: flex !important;
align-items: center !important;
justify-content: space-around !important;
width: 100% !important;
}
		
</style>