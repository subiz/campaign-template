<script>
import Form from '../components/Form.vue'
export default {
	name:'template9',
	props:["page"],
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
						is_required :true,
						type :"text",
						multiline_text:true,
						placeholder:"Cảm nhận của bạn",
					},
					{
						key :2,
						label : "Email cua ban",
						is_required :true,
						type :"text",
						multiline_text:false,
						placeholder:"Email của bạn",
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
			<div class="left-content"/>
			<div class="right-content">
				<button class="button--close"></button>
			<p class="title">{{page.title||this.title}}</p>
			<p class="description">{{page.description||this.description}}</p>
			<Form :form="page.form||this.form"/>
			<div class="buttons-container">
				<button v-show="page.primary_button && page.primary_button.enabled" class="primary-button">
					{{this.page.primary_button.text||this.primary_button_text}}
				</button>
				<button v-show=" page.secondary_button &&page.secondary_button.enabled" class="secondary-button">
					{{this.page.secondary_button.text||this.secondary_button_text}}
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

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
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