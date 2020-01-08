<script>
import Form from '../components/Form.vue'
export default {
	name:'feedback2',
	props:['page'],
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
						list:[
							"Ở đây không có điều tôi tìm kiếm",
							"Đừng lo, tôi sẽ quay lại",
							"Giá cả chưa hợp lý",
							"Thông tin của bạn chưa rõ ràng"
						],
						is_required :true,
						type :"list",
						multiline_text:false,
						multiple_choice:true,
						placeholder:"Cảm nhận của bạn",
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
		<div class="header" >
			<div class="overlay"></div>
			<button class="button-close" @click="onClose"></button>
			<p class="description">{{page.description||description}}</p>
			<div class="black-div"/>
			<p class="title">{{page.title|| title}}</p>
		</div>
		<Form :form="page.form||this.form"/>
		<div class="buttons-container">
			<button @click="onPrimaryClick" v-show="page.primary_button && page.primary_button.enabled" class="primary-button">
				{{this.page.primary_button.text||primary_button_text}}
			</button>
			<button @click="onSecondaryClick" v-show=" page.secondary_button && page.secondary_button.enabled" class="secondary-button">
				{{this.page.secondary_button.text||"Cancel"}}
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

.container {
	display: flex !important;
	flex-direction: column !important;
	align-items: center !important;
	width: 480px !important;
	max-width: 100% !important;
	max-height: 100% !important;
	background-color: #fff !important;
	position: fixed !important;
	top: 50% !important;
	left: 50% !important;
	transform: translate(-50%, -50%) !important;
}

.button-close {
	position: absolute !important;
	right: 10px !important;
	background-color: black !important;
	height: 20px !important;
	width: 20px !important;
	border-radius: 10px !important;
	background-image: url("../assets/close.png") !important;
	background-size: 100% 100% !important;
	cursor: pointer !important;
}

.header {
	padding-top: 10px !important;
	position: relative !important;
	padding-left: 34px !important;
	width: 100% !important;
	background-image: url("../assets/bg10.png") !important;
	background-size: 100% 300% !important;
	background-repeat: no-repeat !important;
	position: relative !important;
}

.overlay {
	background-color: #d6a7004f !important;
	position: absolute !important;
	top: 0 !important;
	left: 0 !important;
	bottom: 0 !important;
	right: 0 !important;
}

.description {
	margin-top: 30px !important;
	padding-top: 5px !important;
	padding-bottom: 5px !important;
	font-weight: bold !important;
	font-size: 16px !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	color: #000000 !important;
}

.black-div {
	width: 134px !important;
	height: 3px !important;
	background-color: #000 !important;
	margin-top: 8px !important;
	margin-bottom: 12px !important;
}

.title {
	padding-top: 5px !important;
	padding-bottom: 10px !important;
	margin-bottom: 34px !important;
	font-weight: bold !important;
	font-size: 28px !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	color: #000000 !important;
}

/deep/ .form {
	width: 100% !important;
	display: flex !important;
	justify-content: center !important;
}

.buttons-container {
	margin-top: 15px !important;
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	margin-bottom: 10px !important;
}

.primary-button {
	background-color: #000000 !important;
	height: 45px !important;
	padding-top: 12px !important;
	padding-bottom: 12px !important;
	padding-left: 20px !important;
	padding-right: 20px !important;
	margin-right: 5px !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	border: none !important;
	font-size: 18px !important;
	font-weight: normal !important;
	color: #fff !important;
	outline: 0 !important;
	cursor: pointer !important;
}

.secondary-button {
	background-color: #d9d9d9 !important;
	height: 45px !important;
	padding-top: 12px !important;
	padding-bottom: 12px !important;
	padding-left: 20px !important;
	padding-right: 20px !important;
	margin-left: 5px !important;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
	border: none !important;
	font-size: 18px !important;
	font-weight: normal !important;
	color: #fff !important;
	outline: 0 !important;
	cursor: pointer !important;
}

.primary-button:hover {
	background-color: #e69f17 !important;
}

.secondary-button:hover {
	background-color: #bbbbbb !important;
}
</style>