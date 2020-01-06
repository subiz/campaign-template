<script>
export default {
	name:"template3-2",
	props:['page'],
	data(){
		return{
			title:"Cảm ơn bạn!",
			description:"Chúng tôi đã nhận được thông tin yêu cầu liên hệ của bạn và chúng tôi sẽ gọi lạicho bạn vào thời gian bạn đã chọn.",
			primary_button_text: "Ok, Tôi đã hiểu",
			secondary_button_text: "Cancle",
		}
	}
}
</script>
<template>
<div class="container">
	<button class="button-close"></button>
	<p class="title">{{page.title||this.title}}</p>
	<p class="description">{{page.description||this.description}}</p>
	<div class="buttons-container">
		<button v-show=" page.primary_button && page.primary_button.enabled" class="primary-button">
			{{page.primary_button.text||this.primary_button_text}}
		</button>
		<button v-show="page.secondary_button && page.secondary_button.enabled" class="secondary-button">
			{{page.secondary_button.text||this.secondary_button_text}}
		</button>
	</div>
</div>
</template>

<style scoped>
.container{
	width: 471px;
	max-width: 100%;
	display:flex;
	flex-direction: column;
	padding-top: 10px;
	background: #fff;
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
.title{
	margin-top:46px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 44px;
	text-align: center;

	color: #000000;
}
.description{
	margin-top:6px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 30px;
	text-align: center;

	color: #000000;
}
.buttons-container{
	margin-top: 36px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
}
.primary-button{
	margin-left: 5px;
	margin-right: 5px;
	background-color: #0265FF;
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
	margin-left: 5px;
	margin-right: 5px;;
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
.primary-button:hover{background-color: #03176f}
.secondary-button:hover {background-color: #bbbbbb }
</style>