
<script>
import common  from '../common.js'
var op = require('object-path')
import Form from '../components/Form.vue'
export default {
	name:"template4",
	props: ['page','mode'],
	created(){
	if (this.mode === 'mobile') this.mobile = true 
	},
	components:{
		Form
	},
	data(){
		return{
			mobile:common.mobilecheck(),
			close: false,
			id:"template4",
			name:"Get leads",
			title:"Đăng ký nhận ưu đãi khủng",
			description:"Giảm giá tới 95%. Miễn phí vận chuyển nội thành",
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
	<div v-if="!close" :class="'container '+ (mobile? 'mobile':'' )" >
			<div class="image">
				<button class="button-close" @click="onClose"/>
			</div>

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
</template>

<style scoped>
* {
	margin: 0 !important;
	padding: 0 !important;
	box-sizing: border-box !important;
}
.container{
	width: 340px !important;
	max-width: 100% !important;
	display: flex !important;
	background-color: #fff !important;
	flex-direction: column !important;

	position: fixed !important;
	top: 50% !important;
	left: 50% !important;
	transform: translate(-50%, -50%) !important;
}
.image{
	display: flex !important;
	background-image: url('../assets/bg4.png') !important;
	background-size: auto !important;
	background-repeat: no-repeat !important;
	flex-direction: column !important;
	position: relative !important;
	height: 200px !important;
	padding-top: 10px !important;
}
.button-close{
	position: absolute !important;
	right: 10px !important;
	height: 20px !important;
	width: 20px !important;
	border-radius: 10px !important;
	border: none !important;
	outline: 0 !important;
	cursor: pointer !important;
	background-image: url('../assets/close.png') !important;
	background-size: 100% 100% !important;

}
/deep/.form{
	width:100% !important;
	display: flex !important;
	flex-direction: column !important;
	padding-left: 35px !important;
	padding-right: 35px !important;
}
/deep/.label{
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 10px;
	color: #000;
}
/deep/.text-input{
	padding-left: 5px !important;
	margin-top: 10px !important;
	height: 40px !important;
	width: 100% !important;
	outline: 0 !important;
	border: none !important;
	border-bottom: 1px solid #d9d9d9 !important;
}
.title{
	margin-top: 17px !important;
	padding-left:35px !important;
	color:#000 !important;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-weight: bold !important;
	font-size: 32px !important;
}
.description{
	margin-top: 10px !important;
	margin-left:35px !important;
	color:#000 !important;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	font-weight: normal !important;
	font-size: 18px !important;
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
	padding-left: 30px !important;
	padding-right:30px !important;
	margin-right:5px !important;
	margin-left: 5px !important;
	color:#ffffff !important;
	font-size: 16px !important;
	background-color: #001984 !important;
	height: 40px !important;
	border-radius: 5px !important;
	outline: 0 !important;
	cursor: pointer !important;
}
.secondary-button{
	padding-top: 10px !important;
	padding-bottom: 10px !important;
	padding-left: 30px !important;
	padding-right:30px !important;
	margin-right:5px !important;
	margin-left: 5px !important;
	color:#ffffff !important;
	font-size: 16px !important;
	background-color: #d9d9d9d9 !important;
	height: 40px !important;
	border-radius: 5px !important;
	outline: 0 !important;
	cursor: pointer !important;
}

 .secondary-button:hover {
	 color: #bbbbbb !important;
 }
 .primary-button:hover{
	 background-color: #03173f !important;
 }
.container.mobile{
	height: 90% !important;
	widows: 95% !important;
}


</style>