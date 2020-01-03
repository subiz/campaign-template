<script>
import Form from '../components/Form.vue'
export default {
	name:'template9',
	props:{page: Object},
	components:{
		Form
	}
}
</script>
<template>
		<div class="container"> 
			<div class="left-content"/>
			<div class="right-content">
				<div class="header">
				<button class="template-button--close"></button>
			</div>	
			<p class="right-content--title">{{page.title}}</p>
			<p class="right-content--description">{{page.description}}</p>
			<Form :form="page"/>
		</div>
		</div>
</template>
<style >
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
}
.header{
	display: flex;
	align-self: flex-end;
	padding: 5px;
}
.template-button--close{
	height: 20px;
	width: 20px;
	border-radius: 10px;
	border:0px;
	background-color: #000;
}
.right-content--description{
	margin-top: 10px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: normal;
	font-size: 15	px;
	align-self: flex-start;
}
.right-content--title{
	margin-top: 5px;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: bold;
	font-size: 26px;
	line-height: 34px;
	align-self: flex-start;
	padding-right: 10px;
}
.inputs-container{
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	width: 85%;
	align-items: center;	
	justify-content: center;
}
.form{
	width: 100%;
}
.textarea{
	margin-top: 5px;
	width: 100%; 
	height: 70px;
	border: solid 1px;
	border-color: #c0c0c0;
	padding-left: 5px;
	border-radius: 3px;
	padding-top:5px;
}
.input{
	margin-top: 5px;
	width: 100%; 
	height: 45px;
	border: solid 1px;
	border-color: #c0c0c0;
	padding-left: 5px;
	border-radius: 3px;
}
.buttons-container{
	display: flex;
	width: 100% ;
}
.primary-button{
	margin-top: 5px;
	background-color: #FDAD15;
	width: 100%;
	height: 45px;
	border-radius: 3px;
	border: solid 1px; 
	border-color: #fdad15;
}
.primary-button--text{
	color: #fff;
	font-style: normal;
 font-size: 16px;
}
</style>