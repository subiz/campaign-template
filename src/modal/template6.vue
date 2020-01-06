<script>
import Form from '../components/Form.vue'
export default {
	name:'template6',
	props:['page'],
	components: {Form},
	data() {
		return {
			id: 'template6',
			name: 'Đăng ký nhận ưu đãi',
		}
	},
}
</script>
<template>
	<div class="container">
		<button class="button-close" />

		<p class="subtitle">{{this.page.subtitle}}</p>
		<p class="title">{{this.page.title}}</p>
		<div class="white-div"/>
		<p class="description">{{this.page.description}}</p>

		<Form :form="page.form" />
		<div class="buttons-container">
			<button v-show="page.primary_button.enabled" class="primary-button">
				{{this.page.primary_button.text}}
			</button>
			<button v-show="page.secondary_button.enabled" class="secondary-button">
				{{this.page.secondary_button.text}}
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
	display: flex;
	flex-direction: column;
  align-items: center;
	padding-top: 10px;
  height: 100vh;
	width: 100%;
	max-width: 100%;
	background-image: url('../assets/bg6.png');
	background-size:100% 100%;
	position: relative;
}
.button-close{
	width: 30px;
	height: 30px;
	position: absolute;
	right:10px;
	border-radius: 15px;
	background-color:#d9d9d9;
	border:none;
	cursor: pointer;
	background-image: url("../assets/close.png");
	background-size:100% 100%;
}
.subtitle{
	margin-top: 10%;
	font-weight: normal;
	font-size: 60px;
	font-weight: '700';
	color: #fff;
	font-family:monospace;
	text-align: center;
}
.title{
	padding: 5px;
	color: #fff;
	font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	font-weight: 500;
	font-size: 24px;
	text-align: center;
}
.white-div{
	margin: 5px;
	width: 140px;
	height: 5px;
	background-color: #fff;
}
.description{
	color: #fff;
	font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	font-style: normal;
	font-size: 22px;
	width:50%;
	text-align: center;
}
/deep/.form{
	width:100%;
	display: flex;
	flex-direction: column;
	align-items:center;
}
/deep/.text-input{
	margin-top: 5px;
	width: 490px;
	height: 35px;
	border:none;
	padding-left: 5px;
	border-bottom: 1px solid #d9d9d9;
	border:none;
	outline: 0;
}
.primary-button{
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 25px;
	padding-right:25px;
	margin-top:5px;
	margin-right:5px;
	margin-left:5px;
	color: #eb6743;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: bold;
	font-size: 15px;
	background-color: #fff;
	border: none;
	border-radius: 5px;
	border:none;
	cursor: pointer;
	outline: 0;
}
.secondary-button{
	margin-right:5px;
	margin-left:5px;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 25px;
	padding-right:25px;
	margin-top:5px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: bold;
	color:#ffffff;
	font-size: 16px;
	background-color: #d9d9d9d9;
	border:none;
	border-radius: 5px;
	cursor: pointer;
	outline: 0;
}
.button-close:hover{background-color: #bbbbbb}
.primary-button:hover{background-color: #d9d9d9}
.secondary-button:hover {background-color: #bbbbbb }
</style>