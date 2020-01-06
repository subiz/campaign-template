
<script>
import Form from '../components/Form.vue'
export default {
	name:'template5',
	props:['page'],
	components:{
		Form
	},

	data(){
		return{
			id:"template5",
			name:"Get leads",
			subtitle:"Đăng ký",
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
		<div class="left">
			<p class="subtitle">{{this.page.subtitle||this.subtitle}}</p>
			<p class="title">{{this.page.title||this.title}}</p>
			<p class="description">{{this.page.description|| this.description}}</p>
			<Form :form="page.form||this.form" />
			<div class="buttons-container">
				<button @click="onPrimaryClick" v-show="page.primary_button && page.primary_button.enabled" class="primary-button">
					{{this.page.primary_button.text||this.primary_button_text}}
				</button>
				<button @click="onSecondaryClick" v-show="page.secondary_button && page.secondary_button.enabled" class="secondary-button">
					{{this.page.secondary_button.text||this.secondary_button_text}}
				</button>
			</div>
		</div>
		<div class="right">
			<button class="button-close" @click="onClose"></button>
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
	flex-direction: row;
	height: 100vh;
	width: 100%;
	max-width: 100%;
	max-height: 100%;
	background-image: url('../assets/bg5.png');
	background-size:100% 100%;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.right{
	display: flex;
	flex: 1;
	position: relative;
	padding-top: 10px;
}
.button-close{
	position: absolute;
	height: 30px;
	width: 30px;
	right:10px;
	background-color: #091125;
	border-radius: 15px;
	border:none;
	outline: 0;
	cursor: pointer;
	background-image: url('../assets/close.png');
	background-size: 100% 100%;
}
.left{
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.subtitle{
	color: #fff;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: normal;
	font-size: 40px;
	text-align: center;
}
.title{
	margin-top: 5px;
	text-align: center;
	color: #FDAD15;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: bold;
	font-size: 50px;
	width: 100%;
}
.description{
	margin-top: 25px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 16px;
	color: #fff;
	text-align: center;
	width: 80%;
}
/deep/.form{
	margin-top: 30px;
	width: 100%;
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
/deep/.text-input{
	margin-top: 10px;
	width: 430px;
	height: 40px;
	background-color: #fff;
	text-align: center;
	border-radius: 25px;
	outline: 0;
	border-bottom: 1px solid #d9d9d9;
	border: none;
}
.buttons-container{
	margin-top: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
}
.primary-button{
	background-color: #FDAD15;
	width: 430px;
	height: 40px;
	border-radius: 25px;
	border:none;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	outline: 0;
	cursor: pointer;
}
.secondary-button{
	margin-top: 5px;
	background-color: #d9d9d9;
	width: 430px;
	height: 40px;
	border-radius: 25px;
	border:none;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	outline: 0;
	cursor: pointer;
}
.button-close:hover{background-color: #15203e}
.primary-button:hover{background-color: #e69f17}
.secondary-button:hover {background-color: #bbbbbb }
</style>