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
			secondary_button_text:"Cancle",
		}
	}
}
</script>
<template>
	<div class="container">
		<div class="header" >
			<div class="overlay"></div>
			<button class="button-close"></button>
			<p class="description">{{page.description||description}}</p>
			<div class="black-div"/>
			<p class="title">{{page.title|| title}}</p>
		</div>
		<Form :form="page.form||this.form"/>
		<div class="buttons-container">
			<button v-show="page.primary_button.enabled" class="primary-button">
				{{this.page.primary_button.text||primary_button_text}}
			</button>
			<button v-show="page.secondary_button.enabled" class="secondary-button">
				{{this.page.secondary_button.text||"Cancel"}}
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
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 480px;
	max-width: 100%;
	max-height: 100%;
	background-color:#fff;
	}	
	.button-close{
	position: absolute;
	right: 10px;
	background-color: black;
	height: 20px;
	width: 20px;
	border-radius: 10px;
	background-image: url("../assets/close.png");
	background-size: 100% 100%;
	cursor: pointer;
	}
	.header{
	padding-top:10px;
	position: relative;
	padding-left: 34px;
	width:100%;
	height: ;
	background-image: url("../assets/bg10.png");
	background-size: 100% 300%;
	background-repeat: no-repeat;
	position: relative;
	}
	.overlay{
	background-color: #d6a7004f;
	position: absolute;
	top:0 ;
	left: 0;
	bottom: 0;
	right:0;
	}
	.description{
	margin-top:30px;
	padding-top:5px;
	padding-bottom:5px;
	font-weight: bold;
	font-size: 16px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	color: #000000;
	}
	.black-div{
	width: 134px;
	height: 3px;
	background-color: #000;
	margin-top: 8px;
	margin-bottom: 12px;
	}
	.title{
	padding-top:5px;
	padding-bottom:10px;
	margin-bottom: 34px;
	font-weight: bold;
	font-size: 28px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	color: #000000;
	}
	/deep/ .form{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.buttons-container{
	margin-top: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
}
.primary-button{
	background-color: #000000;
	height: 45px;
	padding-top: 12px;
	padding-bottom: 12px;
	padding-left: 20px;
	padding-right: 20px;
	margin-right:5px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	border:none;
	font-size: 18px;
	font-weight: normal;
	color: #fff;
	outline: 0;
	cursor: pointer;
}
.secondary-button{
	background-color: #d9d9d9;
	height: 45px;
	padding-top: 12px;
	padding-bottom: 12px;
	padding-left: 20px;
	padding-right: 20px;
	margin-left:5px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	border:none;
	font-size: 18px;
	font-weight: normal;
	color: #fff;
	outline: 0;
	cursor: pointer;
}
.primary-button:hover{background-color: #e69f17}
.secondary-button:hover {background-color: #bbbbbb }
</style>