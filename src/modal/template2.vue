
<script>
import Form from '../components/Form.vue'
var op = require('object-path')
var common = require('../common.js')
export default {
	name: 'template2',
	props:["page"],
	components: {Form},
	data(){
		return{
			mobile: common.mobilecheck(),
			close: false,
			id:"template2",
			name:"Get leads",
			title:"Đăng ký để nhận ưu đãi đặc biệt",
			description:"Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá.",
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
	<div v-if="!close" :class="'container '+(mobile ? 'mobile': '')  ">
		<button class="button-close" @click="onClose"></button>
		<div class="main">
			<p class="title">{{op(this, "page.title",this.title)}}</p>
			<p class="description">{{op(this, "page.description",this.description)}}</p>
			<Form :form="op(this,'page.form',this.form)" />
			<div class="buttons-container">
				<button @click="onPrimaryClick"  v-show="op(this,'page.primary_button.enabled',true)"  class="primary-button">
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
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.container {
	display: flex;
	flex-direction: column;
	width: 800px;
	max-width: 100%;
	align-items: center;
	background-image: url('../assets/bg2.png');
	background-size: auto;
	margin: 0 auto;
	position: relative;
}


.button-close {
	position: absolute !important;
	right: 10px !important;
	top: 10px !important;
	height: 20px !important;
	width: 20px !important;
	border-radius: 50% !important;
	border: 0px !important;
	background-image: url('../assets/close.png') !important;
	background-size:100% 100% !important;
}

.main {
	display: flex !important;
	flex-direction: column !important;
	padding:45px !important !important;
	width: 430px !important;
	max-width: 100% !important;
	align-items: center !important;
	background-color: #fff !important;
	margin-top: 36px !important;
	margin-bottom: 36px !important;
	box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.0196802), 0px 2px 4px rgba(0, 0, 0, 0.03), 0px 7px 12px rgba(0, 0, 0, 0.0503198), 0px 18px 28px rgba(0, 0, 0, 0.07) !important;
}

.title {
	font-size: 30px !important;
	font-weight: bold !important;
	font-style: normal !important;
	text-align: center !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
}

.description {
	margin-top: 10px !important;
	font-weight: normal !important;
	text-align: center !important;
	font-size: 18px !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
}

.buttons-container{
	display: flex !important;
	margin-top: 5px !important;
	align-items: center !important;
	justify-content: center !important;
	margin-top:37px !important;
}

.primary-button {
	border:0px !important;
	border-radius: 5px !important;
	background-color: #FDAD15 !important;
	color: #fff !important;
	font-size: 16px !important;
	font-weight: 500 !important;
	text-align: center !important;
	text-transform: uppercase !important;
	padding-left: 30px !important;
	padding-right: 30px !important;
	padding-top: 12px !important;
	padding-bottom: 12px !important;
	white-space: nowrap !important;
	cursor: pointer !important;
}

.secondary-button {
	border:0px !important !important;
	border-radius: 5px !important;
	background-color: #d1d1d1 !important; 
	color: #fff !important;
	font-size: 16px !important;
	font-weight: 500 !important;
	text-align: center !important;
	text-transform: uppercase !important;
	padding-left: 30px !important;
	padding-right: 30px !important;
	padding-top: 12px !important;
	padding-bottom: 12px !important;
	margin-left: 10px !important;
	white-space: nowrap !important;
	cursor: pointer !important;
}

/deep/ .form {
	display: flex !important;
	flex-direction: column !important;
	width: 100% !important;
	margin-top: 15px !important;
}

/deep/ .text-input {
border: none !important;
border-bottom: 1px solid #d9d9d9 !important; 
width: 100% !important;
height: 40px !important;
font-size: 16px !important;
margin-top: 19px !important;
padding-left: 5px !important;
}
.container.mobile{
	padding-left: 20px !important;
	padding-right: 20px !important;
	width: 95% !important;
}

.secondary-button:hover {color: #bbbbbb }
.primary-button:hover{background-color: #343e46}
</style>
