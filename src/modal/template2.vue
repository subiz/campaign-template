
<script>
import Form from '../components/Form.vue'
export default {
	name: 'template2',
	props:["page"],
	components: {Form},
	data(){
		return{
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
			secondary_button_text:"Cancle",
		}
	}
}
</script>
<template>
	<div class="container">
		<button class="button-close"></button>
		<div class="main">
			<p class="title">{{page.title||this.title}}</p>
			<p class="description">{{page.description||this.description}}</p>
			<Form :form="page.form || this.form" />
			<div class="buttons-container">
				<button v-show="page.primary_button && page.primary_button.enabled" class="primary-button">
					{{page.primary_button.text||this.primary_button_text}}
				</button>
				<button v-show="page.secondary_button && page.secondary_button.enabled" class="secondary-button">
					{{page.secondary_button.text||this.secondary_button_text}}
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.container {
	display: flex;
	flex-direction: column;

	width: 800px;

	max-width: 100%;

	align-items: center;
	background-image: url('../assets/bg2.png');
	background-size: auto;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}


.button-close {
	position: absolute;

	right: 10px;
	top: 10px;

	height: 20px;
	width: 20px;
	border-radius: 50%;
	border: 0px;

	background-image: url('../assets/x.png');
}

.main {
	display: flex;
	flex-direction: column;
	padding:45px;
	width: 430px;
	max-width: 100%;
	align-items: center;
	background-color: #fff;
	margin-top: 36px;
	margin-bottom: 36px;
	box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.0196802), 0px 2px 4px rgba(0, 0, 0, 0.03), 0px 7px 12px rgba(0, 0, 0, 0.0503198), 0px 18px 28px rgba(0, 0, 0, 0.07);
}

.title {
	font-size: 30px;
	font-weight: bold;
	/*font-family: 'Montserrat', sans-serif;*/
	font-style: normal;
	text-align: center;
}

.description {
	margin-top: 10px;
	/*font-family: 'Muli';*/
	font-weight: normal;
	text-align: center;
	font-size: 18px;
}

.buttons-container{
	display: flex;
	margin-top: 5px;
	align-items: center;
	justify-content: center;
	margin-top:37px;
}

.primary-button {
	border:0px;
	border-radius: 5px;
	background-color: #FDAD15;
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
	border-radius: 5px;
	background-color: #d1d1d1;
	color: #fff;
	font-size: 16px;
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;
	padding-left: 30px;
	padding-right: 30px;
	padding-top: 12px;
	padding-bottom: 12px;
	margin-left: 10px;
	white-space: nowrap;
	cursor: pointer;
}

/deep/ .form {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 15px;
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
