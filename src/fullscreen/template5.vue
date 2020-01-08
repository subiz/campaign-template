
<script>
import common from '../common.js'
var op = require('object-path')
import Form from '../components/Form.vue'
export default {
	name:'template5',
	props:['page'],
	components:{
		Form
	},
	data(){
		return{
			mobile :common.mobilecheck(),
			close: false,
			id:"template5",
			name:"Get leads",
			subtitle:"",
			title:"NHẬN NGAY ƯU ĐÃI KHỬNG",
			description:"Giảm 20% một ngày duy nhất. Miễn phí vận chuyển nội thành",
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
		op: op.get,
		onClose(){
			this.$emit("closeButtonClicked")
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
	<div v-show="!close" :class="'container '+(mobile ? 'mobile': '')">
		<div class="left">
			<button v-if="!close" class="button-close" @click="onClose"></button>
			<p class="subtitle">{{op(this.page, "subtitle",this.subtitle)}}</p>
			<p class="title">{{op(this.page, "title",this.title)}}</p>
			<p class="description">{{op(this.page, "description",this.description)}}</p>
			<Form :form="op(this.page,'form',this.form)" />
			<div class="buttons-container">
				<button @click="onPrimaryClick" v-show="op(this.page,'primary_button.enabled',true)" class="primary-button">
					{{op(this.page,"primary_button.text", this.primary_button_text)}}
				</button>
				<button @click="onSecondaryClick" v-show="op(this.page,'secondary_button.enabled',true)"  class="secondary-button">
					{{op(this.page,"secondary_button.text", this.secondary_button_text)}}
				</button>
			</div>
		</div>
		<div class="right">
			<button v-if="close" class="button-close" @click="onClose"></button>
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
	height: 100vh !important;
	width: 100% !important;
	max-width: 100% !important;
	max-height: 100% !important;
	background-image: url('../assets/bg5.png') !important;
	background-size: cover!important;
	background-repeat: no-repeat !important;
	background-position:center !important;
}
.right{
	display: flex !important;
	flex: 1 !important;
	position: relative !important;
}
.button-close{
	position: absolute !important;
	height: 30px !important;
	width: 30px !important;
	right:10px !important;
	top:10px !important;
	background-color: #091125 !important;
	border-radius: 15px !important;
	border:none !important;
	outline: 0 !important;
	cursor: pointer !important;
	background-image: url('../assets/close.png') !important;
	background-size: 100% 100% !important;
}
.left{
	display: flex !important;
	flex: 1 !important;
	flex-direction: column !important;
	align-items: center !important;
	justify-content: center !important;
}
.subtitle{
	color: #fff !important;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-weight: normal !important;
	font-size: 40px !important;
	text-align: center !important;
}
.title{
	margin-top: 5px !important;
	text-align: center !important;
	color: #FDAD15 !important;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-weight: bold !important;
	font-size: 50px !important;
	width: 100% !important;
}
.description{
	margin-top: 15px !important;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-size: 16px !important;
	color: #fff !important;
	text-align: center !important;
	width: 80% !important;
}

/deep/.form{
	margin-top: 30px !important;
	width: 8	0% !important;
	display:flex !important;
	flex-direction: column !important;
	align-items: center !important;
	justify-content: center !important;
}
/deep/.form-item{
	margin-top: 10px !important;	
	width: 100% !important;
	display:flex !important;
	justify-content: center !important;
	align-items: center!important;
	flex-direction: column !important;
}
/deep/ .label{
	margin-top: unset !important;
	color: #fff !important;
	font-size: 14 !important;
	padding: 5px !important;
	align-self:flex-start !important;
}
/deep/.text-input{
	width: 420px !important;
	height: 40px !important;
	background-color: #fff !important;
	border-radius: 25px !important;
	outline: 0 !important;
	border-bottom: 1px solid #d9d9d9  !important;
	border: none !important;
	padding-left: 10px !important;	
}
.buttons-container{
	width: 100% !important;
	padding-left: 35%;
	margin-top: 35px !important;
	display: flex !important;
	flex-direction: column !important;
	align-items: center !important;	
	justify-content: center !important;
	margin-bottom: 10px !important;
}
.primary-button{
	background-color: #FDAD15 !important;
	width: 430px !important;
	height: 40px !important;
	border-radius: 25px !important;
	border:none !important;
	font-size: 18px !important;
	font-weight: bold !important;
	color: #fff !important;
	outline: 0 !important;
	cursor: pointer !important;
}
.secondary-button{
	margin-top: 10px !important;
	background-color: ghostwhite !important;
	width: 430px !important;
	height: 40px !important;
	border-radius: 25px !important;
	border:none !important;
	font-size: 18px !important;
	font-weight: bold !important;
	border : solid 2px #ffffff;
	border-width: 2px;
	color: #000 !important;
	outline: 0 !important;
	cursor: pointer !important;
}
 .secondary-button:hover {
	 color: #bbbbbb !important;
 }
 .primary-button:hover{
	 background-color: #e69f17 !important;
 }
.mobile .right{
	display: none !important;
}
.mobile .left{
	display: flex !important;
	flex: 1 !important;
	width:100% !important;
	max-width: 100% !important;
	background-image: url('../assets/bg5_mobile.png') !important;
	position: relative !important;
	justify-content: flex-start !important;
	padding-top: 40px !important;
}
.mobile .left .subtitle{
	margin-top: 5px !important;
	font-size: 28px !important;
}
.mobile .left .title{
	margin-top: 5px !important;
	font-size: 34px !important;
}
.mobile .left .description{
	margin-top: 5px !important;
	font-size: 24px !important;
}
.mobile .left .form {
	margin-top: 5px !important;
	width:80% !important;
}
.mobile .left .form /deep/.text-input {
	margin-top: unset !important;
	width:100% !important;
}
.mobile .left .buttons-container {
	width: 80% !important;
}
.mobile .left .buttons-container .primary-button{
	width: 100% !important;
}
.mobile .left .buttons-container .secondary-button{
	width: 100% !important;
}
</style>