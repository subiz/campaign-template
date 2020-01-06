<script>
import Form from '../components/Form.vue'
export default {
	name:'template9',
	props:["page"],
	components:{
		Form
	},
	data() {
		return {
			id: 'template9',
			name: 'Đăng ký nhận ưu đãi',
		}
	},
}
</script>
<template>
		<div class="container">
			<div class="left-content"/>
			<div class="right-content">
				<button class="button--close"></button>
			<p class="title">{{page.title}}</p>
			<p class="description">{{page.description}}</p>
			<Form :form="page.form"/>
			<div class="buttons-container">
			<button v-show="page.primary_button.enabled" class="primary-button">
				{{this.page.primary_button.text}}
			</button>
			<button v-show="page.secondary_button.enabled" class="secondary-button">
				{{this.page.secondary_button.text}}
			</button>
		</div>
		</div>
		</div>
</template>
<style scoped>
.container{
	height: 400px;
	width: 700px;
	background-color:#fff;
	display: flex;
	flex-direction: row;
}
.left-content{
	display: flex;
	flex:1.3;
	background-image: url('../assets/bg9.png');
	background-size : 100% 100%;
	background-repeat: no-repeat;
}
.right-content{
	display: flex;
	flex-direction: column;
	flex:1;
	align-items: flex-start;
	background-color: #fff;
	padding-left: 10px;
	padding-top:10px;
	position: relative;
}

.button--close{
	height: 20px;
	width: 20px;
	border-radius: 10px;
	border:0px;
	background-color: #000;
	position: absolute;
	right: 10px;
	background-image: url("../assets/close.png");
	background-size:100% 100%;
}
.description{
	margin-top: 1px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: normal;
	font-size: 15px;
	align-self: flex-start;
}
.title{
	margin-top: 25px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: bold;
	font-size: 26px;
	line-height: 34px;
	align-self: flex-start;
	padding-right: 10px;
}
/deep/.form{
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top:20px;
}
/deep/.textarea{
	width: 90%;
	height: 70px;
	border: solid 1px;
	border-color: #c0c0c0;
	padding-left: 5px;
	padding-top:5px;
	border-radius: 3px;
}
/deep/.text-input{
	margin-top: 5px;
	width: 90%;
	height: 40px;
	border: solid 1px #d9d9d9;
	padding-left: 5px;
	border-radius: 3px;
	outline: 0;
}
.buttons-container{
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top:5px;
}
.primary-button{
	margin-top: 5px;
	margin-right:5px;
	background-color: #FDAD15;
	border-radius: 3px;
	border: solid 1px #fdad15;
	padding-top:10px;
	padding-bottom:10px;
	padding-left: 30px;
	padding-right:30px;
	color: #fff;
	font-size: 14px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 600;
	outline: 0;
	cursor: pointer;
}
.secondary-button{
	margin-top: 5px;
	margin-left: 5px;
	background-color: #d9d9d9;
	border-radius: 3px;
	border: solid 1px #d9d9d9;
	padding-top:10px;
	padding-bottom:10px;
	padding-left: 30px;
	padding-right:30px;
	color: #fff;
	font-size: 14px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 600;
	outline: 0;
	cursor: pointer;
}
.primary-button:hover {background-color: #d78a38 }
.secondary-button:hover {background-color: #bbbbbb }
</style>