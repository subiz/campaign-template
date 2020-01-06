<template>
	<div class="container">
		<div class="left-content"/>
		<div class="right-content">
			<button class="button-close"></button>
			<p class="description">{{page.description||this.description}}</p>
			<div class="red-div"></div>
			<p class="title">{{page.title||this.title}}</p>
			<Form :form="page.form||this.form"/>
			<div class="buttons-container">
				<button v-show="page.primary_button.enabled" class="primary-button">
					{{this.page.primary_button.text||this.primary_button_text}}
				</button>
				<button v-show="page.secondary_button.enabled" class="secondary-button">
					{{this.page.secondary_button.text||this.secondary_button_text}}
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import Form from '../components/Form.vue'
export default {
	name:'template3',
	props: ['page'],
	data() {
		return {
			id: 'template3',
			name: 'Đăng ký nhận ưu đãi',
		}
	},
	components:{
		Form
	},
	data(){
		return{
			id:"template3",
			name:"Get leads",
			title:"Đăng ký nhận ưu đãi đặc biệt.",
			description:"Giảm 20% chỉ một ngày suy nhất.",
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
			secondary_button_text:"Cancle",
		}
	}
}
</script>
<style scoped>
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.container{
	display: flex;
	flex-direction: row;
	width: 800px;
	max-width: 100%;
}
.left-content{
	display: flex;
	flex:1;
	background-image: url('../assets/bg3.png');
	background-size : auto;
	background-repeat: no-repeat
}
.right-content{
	display: flex;
	flex-direction: column;
	flex:1;
	align-items: center;
	background-color: #fff;
	padding-top: 42px;
	position: relative;
}
.button-close{
	position: absolute;
	right: 10px;
	top: 10px;
	height: 20px;
	width: 20px;
	border-radius: 10px;
	border:0px;
	background-image: url('../assets/close.png');
	background-size: 100% 100%;
}
.description{
	margin-top: 10px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	align-self: flex-start;
	margin-left: 15px;
}
.red-div{
	margin-top: 8px;
	width: 134px;
	height: 5px;
	background-color: #B91526;
	align-self: flex-start;
	margin-left: 15px;
}
.title{
	margin-top: 10px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 28px;
	line-height: 34px;
	align-self: flex-start;
	margin-left: 15px;
}
/deep/.form{
	width: 100%;
	padding-left: 10px;
	padding-right: 10px;
}
/deep/.text-input{
	width: 100%;
	height: 40px;
	border: none;
	border-bottom: 1px solid #d9d9d9;
	padding-left: 5px;
	font-size: 12px;
	margin-top: 10px;
	outline: 0;
}
.buttons-container{
	margin-top: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
}
.primary-button{
	margin-right: 5px;
	margin-left: 5px;
	background-color: #B91526;
	padding-left: 30px;
	padding-right:30px;
	height: 45px;
	border-radius: 5px;
	border:0px;
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	text-transform: uppercase;
	text-align: center;
	outline: 0;
	cursor: pointer;
}
.secondary-button{
	margin-right: 5px;
	margin-left: 5px;
	background-color: #d9d9d9;
	padding-left: 30px;
	padding-right:30px;
	height: 45px;
	border-radius: 5px;
	border:0px;
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	text-transform: uppercase;
	text-align: center;
	outline: 0;
	cursor: pointer;
}
.primary-button:hover {background-color: #92111e }
.secondary-button:hover {background-color: #bbbbbb }
</style>