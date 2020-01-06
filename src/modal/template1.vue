
<script>
import Form from '../components/Form.vue'
export default {
	name: 'template1',
	props: ['page'],
	components:{Form},
	data(){
		return{
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
		}
	}
}
</script>
<template>
	<div class="container">
		<div class="main">
			<div class="image"></div>
			<div class="div-left"></div>
			<div class="div-right">
				<button class="button-close"></button>
				<p class="title">{{page.title || this.title}}</p>
				<p class="description">{{page.description || this.description}}</p>
				<Form :form="page.form||this.form" />
				<div class="buttons-container">
					<button v-show="page.primary_button && page.primary_button.enabled" class="primary-button">
						{{this.page.primary_button.text || this.primary_button_text}}
					</button>
					<a v-show="page.secondary_button && page.secondary_button.enabled" class="secondary-button">
						{{this.page.secondary_button.text || this.secondary_button_text}}
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.container{
	background-color: #f6f5f4;
	display:flex;
	flex-direction: row;
	position: relative;
	width: 800px;
}
.image{
	background-image: url("../assets/bg1.png");
	background-size:100% 100%;
	width: 330px;
	position: absolute;
	top:-40px;
	left:-40px;
	bottom:63px;
}
.main {
	margin:10px;
	background-color: #fff;
	display: flex;
	flex-direction: row;
	flex:1;
	position: relative;
	padding-top:10px;
}
.div-left{
	flex:1
}
.div-right{
	flex:1
}
.button-close{
	height: 20px;
	width: 20px;
	border-radius: 10px;
	position: absolute;
	right: 10px;
	background-image: url("../assets/close.png");
	background-size: 100% 100%;
	border:none;
	cursor: pointer;
}
.title{
	margin-top:	50px;
	font-family: Yeseva One;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 55px;
	text-align: center;
	text-transform: uppercase;
}
.description{
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	/* or 229% */
	text-align: center;
}
.buttons-container{
	display: flex;
	flex-direction: column;
	margin-top: 5px;
	align-items: center;
	justify-content: center;
	margin-top:10px;
	margin-bottom:10px;
}
.primary-button {
	border:0px;
	border-radius: 5px;
	background-color: #424E58;
	margin-top: 5px;
	margin-bottom: 5px;
	color: #fff;
	font-size: 16px;
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;

	padding-left: 30px;
	padding-right: 30px;
	padding-top: 12px;
	padding-bottom: 12px;

	white-space: nowrap;
	cursor: pointer;
}

.secondary-button {
	border:0px;
	color: #000;
	font-size: 14px;
	font-weight: 500;
	text-align: center;
	padding :5px;
	cursor: pointer;
}

/deep/ .form {
	display: flex;
	flex-direction: column;
	width: 90%;
	margin-top: 5px;
}
/deep/ .text-input {
border: none;
border-bottom: 1px solid #d9d9d9;
width: 100%;
height: 40px;
font-size: 16px;
margin-top: 19px;
padding-left: 5px;
}
.secondary-button:hover {color: #bbbbbb }
.primary-button:hover{background-color: #343e46}

</style>