
<script>
import Form from '../components/Form.vue'
var op = require('object-path')
var common = require('../common.js')
export default {
	name: 'template2',
	props:["page", 'mode'],
	created(){
		if (this.mode === 'mobile') this.mobile = true
	},
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
<div class="template template2">
	<div v-if="!close" :class="'container '+(mobile ? 'mobile': '')  ">
		<button class="button-close" @click="onClose"></button>
		<div class="main">
			<p class="title">{{op(this.page, "title",this.title)}}</p>
			<p class="description">{{op(this.page, "description",this.description)}}</p>
			<Form :form="op(this.page,'form',this.form)" />
			<div class="buttons-container">
				<button @click="onPrimaryClick"  v-show="op(this.page,'primary_button.enabled',true)"  class="primary-button">
					{{op(this.page,"primary_button.text", this.primary_button_text)}}

				</button>
				<button @click="onSecondaryClick" v-show="op(this.page,'secondary_button.enabled',true)" class="secondary-button">
					{{op(this.page, "secondary_button.text", this.secondary_button_text)}}
				</button>
			</div>
		</div>
	</div>
	</div>
</template>

<style src="./template2.css"></style>
