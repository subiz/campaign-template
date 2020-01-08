<script>
 var common = require('../common.js')
 var op = require('object-path')
export default {
	name:"template2-2",
	props:['page','mode'],
	created(){
		if (this.mode === 'mobile') this.mobile = true
	},
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
<div class="template template2_2">
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
</div>
</template>

<style src="./template2_2.css"></style>