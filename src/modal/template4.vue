
<script>
import Form from '../components/Form.vue'
export default {
	name:"template4",
	props: ['page'],
	components:{
		Form
	},
	data(){
		return{
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
			<div class="image">
				<button class="button-close" @click="onClose"/>
			</div>

			<p class="title">{{page.title||this.title}}</p>
			<p class="description">{{page.description||this.description}}</p>
			<Form :form="page.form||form" />

			<div class="buttons-container">
				<button @click="onPrimaryClick" v-show="page.primary_button && page.primary_button.enabled" class="primary-button">
					{{this.page.primary_button.text||this.primary_button_text}}
				</button>
				<button @click="onSecondaryClick" v-show="page.secondary_button && page.secondary_button.enabled" class="secondary-button">
					{{this.page.secondary_button.text||this.secondary_button_text}}
				</button>
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
	width: 340px;
	max-width: 100%;
	display: flex;
	background-color: #fff;
	flex-direction: column;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.image{
	display: flex;
	background-image: url('../assets/bg4.png');
	background-size: auto;
	background-repeat: no-repeat;
	flex-direction: column;
	position: relative;
	height: 200px;
	padding-top: 10px;
}
.button-close{
	position: absolute;
	right: 10px;
	height: 20px;
	width: 20px;
	border-radius: 10px;
	border: none;
	outline: 0;
	cursor: pointer;
	background-image: url('../assets/close.png');
	background-size: 100% 100%;

}
/deep/.form{
	width:100%;
	display: flex;
	flex-direction: column;
	padding-left: 35px;
	padding-right: 35px;
}
/deep/.text-input{
	padding-left: 5px;
	margin-top: 10px;
	height: 40px;
	width: 100%;
	outline: 0;
	border: none;
	border-bottom: 1px solid #d9d9d9;
}
.title{
	margin-top: 17px;
	padding-left:35px;
	color:#000;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: bold;
	font-size: 32px;
}
.description{
	margin-top: 10px;
	margin-left:35px;
	color:#000;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: normal;
	font-size: 18px;
}
.buttons-container{
	margin-top: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
}
.primary-button{
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 30px;
	padding-right:30px;
	margin-right:5px;
	margin-left: 5px;
	color:#ffffff;
	font-size: 16px;
	background-color: #001984;
	height: 40px;
	border-radius: 5px;
	outline: 0;
	cursor: pointer;
}
.secondary-button{
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 30px;
	padding-right:30px;
	margin-right:5px;
	margin-left: 5px;
	color:#ffffff;
	font-size: 16px;
	background-color: #d9d9d9d9;
	height: 40px;
	border-radius: 5px;
	outline: 0;
	cursor: pointer;
}
.button-close:hover{background-color: #bbbbbb}
.primary-button:hover{background-color: #03176f}
.secondary-button:hover {background-color: #bbbbbb }

</style>