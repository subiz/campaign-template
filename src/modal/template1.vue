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
	<div v-if="!close" :class="'template template1 container ' + (mobile ? 'mobile': '')">
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
<style src="./template1.css"></style>
