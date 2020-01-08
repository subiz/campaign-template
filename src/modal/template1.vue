
<script>
 var common = require('../common.js')
 var op = require('object-path')
 import Form from '../components/Form.vue'
 export default {
	 name: 'template1',
	 props: ['page','mode'],
	 components:{Form},
	 created(){
		 if (this.mode === 'mobile') this.mobile = true 
	 },
	 data(){
		 return{
			 mobile:  common.mobilecheck(),
			 close:false,
			 id:"template1",
			 name:"Get leads",
			 title:"Giảm 10%",
			 description:"với đơn hàng đầu tiên của bạn",
			 primary_button_text:"Đăng ký ngay",
			 secondary_button_text:"Không, cảm ơn. Tôi sẽ quay lại sau",
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
			 close: false,
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
	<div v-if="!close" :class="'container ' + (mobile ? 'mobile': '')">
		<button class="button-close" @click="onClose"></button>
		<div class="main">
			<div class="image"></div>
			<div class="div-left"></div>
			<div class="div-right">
				<p class="title">{{op(this.page, "title",this.title)}}</p>
				<p class="description">{{op(this.page, "description",this.description)}}</p>
				<Form :form="op(this.page,'form',this.form)" />
				<div class="buttons-container">
					<button @click="onPrimaryClick" v-show="op(this.page,'primary_button.enabled',true)" class="primary-button">
						{{op(this.page,"primary_button.text", this.primary_button_text)}}
					</button>
					<a @click="onSecondaryClick" v-show="op(this.page,'secondary_button.enabled',true)" class="secondary-button">
						{{op(this.page, "secondary_button.text", this.secondary_button_text)}}
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
 .container{
	 background-color: #f6f5f4 !important; 
	 display:flex !important;
	 flex-direction: row !important;
	 position: relative !important;
	 width: 800px !important;
	
	margin: 0 auto !important;
 }
 .image{
	 background-image: url("../assets/bg1.png") !important;
	 background-size:100% 100% !important;
	 width: 330px !important;
	 position: absolute !important;
	 top:-40px !important;
	 left:-40px !important;
	 bottom:63px !important;
 }
 .main {
	 margin:10px !important;
	 background-color: #fff !important; 
	 display: flex !important;
	 flex-direction: row !important;
	 flex:1 !important;
	 position: relative !important;
	 padding-top:10px !important;
 }
 .div-left{
	 flex:1 !important;
 }
 .div-right{
	 flex:1.5 !important;
 }
 .button-close{
	 height: 20px !important;
	 width: 20px !important;
	 border-radius: 10px !important;
	 position: absolute !important;
	 right: 10px !important;
	 top: 10px !important;
	 z-index: 100 !important;
	 background-image: url("../assets/close.png") !important;
	 background-size: 100% 100% !important;
	 border:none !important;
	 cursor: pointer !important;
 }
 .title{
	 margin-top:	50px !important;
	 font-family: Yeseva One !important;
	 font-style: normal !important;
	 font-weight: normal !important;
	 font-size: 48px !important;
	 line-height: 55px !important;
	 text-align: center !important;
	 text-transform: uppercase !important;
 }
 .description{
	 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	 font-style: normal !important;
	 font-weight: normal !important;
	 font-size: 24px !important;
	 /* or 229% */
	 text-align: center !important;
 }
 .buttons-container{
	 display: flex !important ;
	 flex-direction: column !important;
	 margin-top: 5px !important;
	 align-items: center !important;
	 justify-content: center !important ;
	 margin-top:10px !important;
	 margin-bottom:10px !important;
 }
 .primary-button {
	 border:0px !important;
	 border-radius: 5px !important;
	 background-color: #424E58 !important;
	 margin-top: 5px !important;
	 margin-bottom: 5px !important;
	 color: #fff !important;
	 font-size: 16px !important;
	 font-weight: 500 !important;
	 text-align: center !important;
	 text-transform: uppercase !important;

	 padding-left: 30px !important;
	 padding-right: 30px!important;
	 padding-top: 12px !important;
	 padding-bottom: 12px !important;

	 white-space: nowrap !important;
	 cursor: pointer !important;
	 border-radius: 28px !important;
 }

 .secondary-button {
	 border:0px !important;
	 color: #000 !important;
	 font-size: 14px !important;
	 font-weight: 500 !important;
	 text-align: center !important;
	 padding :5px !important;
	 cursor: pointer !important;
	 border-radius: 28px !important ;

 }

 /deep/ .form {
	 display: flex !important;
	 flex-direction: column !important;
	 padding-left: 10px !important;
	 padding-right: 10px !important;
 }
/deep/ .label { 
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 10px;
	color: #000;
}
 /deep/ .text-input {
	 border: none !important;
	 border-bottom: 1px solid #d9d9d9 !important;
	 width: 100% !important;
	 height: 40px !important;
	 font-size: 16px !important;
	 outline: none !important;
 }

 .secondary-button:hover {
	 color: #bbbbbb !important;
 }

 .primary-button:hover{
	 background-color: #343e46 !important;
 }

 .mobile .main {
	 background-image: url("../assets/bg1.png") !important;
	 background-size:100% 100% !important;
	 margin: 0 !important;
 }
 .mobile .main .image {
	 display: none !important;
 }

 .container.mobile {
	 width: 95% !important;
		height: 90%;
	 /* left: 10px !important; 
	 right: 10px !important; */

 }
 .mobile .div-left {
	 display: none !important;
 }
 .mobile .div-right {
	 background: white !important;
   margin-left: 20px !important;
   margin-right: 20px !important;
   margin-top: 50px !important;
   margin-bottom: 60px !important;
 }

</style>
