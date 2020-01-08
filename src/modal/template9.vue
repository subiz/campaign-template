<script>
import Form from '../components/Form.vue'
export default {
	name:'template9',
	props:["page"],
	components:{
		Form
	},
	data(){
		return{
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
		<div class="container">
			<div class="left-content"/>
			<div class="right-content">
				<button class="button--close" @click="onClose"></button>
			<p class="title">{{page.title||this.title}}</p>
			<p class="description">{{page.description||this.description}}</p>
			<Form :form="page.form||this.form"/>
			<div class="buttons-container">
				<button @click="onPrimaryClick" v-show="page.primary_button && page.primary_button.enabled" class="primary-button">
					{{this.page.primary_button.text||this.primary_button_text}}
				</button>
				<button @click="onSecondaryClick" v-show=" page.secondary_button &&page.secondary_button.enabled" class="secondary-button">
					{{this.page.secondary_button.text||this.secondary_button_text}}
				</button>
			</div>
		</div>
		</div>
</template>
<style scoped>
.container {
	height: 400px !important;
	width: 700px !important;
	background-color: #fff !important;
	display: flex !important;
	flex-direction: row !important;
	position: fixed !important;
	top: 50% !important;
	left: 50% !important;
	transform: translate(-50%, -50%) !important;
}

.left-content {
	display: flex !important;
	flex: 1.3 !important;
	background-image: url('../assets/bg9.png') !important;
	background-size: 100% 100% !important;
	background-repeat: no-repeat !important;
}

.right-content {
	display: flex !important;
	flex-direction: column !important;
	flex: 1 !important;
	align-items: flex-start !important;
	background-color: #fff !important;
	padding-left: 10px !important;
	padding-top: 10px !important;
	position: relative !important;
}

.button--close {
	height: 20px !important;
	width: 20px !important;
	border-radius: 10px !important;
	border: 0px !important;
	background-color: #000 !important;
	position: absolute !important;
	right: 10px !important;
	background-image: url("../assets/close.png") !important;
	background-size: 100% 100% !important;
}

.description {
	margin-top: 1px !important;
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
</style>