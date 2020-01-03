
<script>
import Form from '../components/Form.vue'
export default {
	name:"template4",
	props:{page: Object},
	components:{
		Form
	}
}
</script>
<template>
	<div class="container">
				<div class="header">
						<img class="header-image "/>
						<button class="header-button-close"/>
				</div>
				<div class="main">
				<div class="text-container">
					<p class="main-title">Đăng ký để nhận ưu đãi khủng</p>
					<p class="main-description">Giảm giá tới 95%. Miễn phí vận chuyển nội thành</p>
				</div>
				<Form :form="page" />
				</div>
			</div>
</template>

<style >
.container{
	width: 340px;
	height: 600px;
	display: flex;
	background-color: #fff;
	flex-direction: column;
}
.header{
	flex:1;
	display: flex;
	background-image: url('../assets/bg4.png');
	background-repeat: no-repeat;
	flex-direction: column;
	padding :3px;
}
.header-button-close{
	align-self: flex-end;
	height: 20px;
	width: 20px;
	border-radius: 10px;
	border:0px;
}
.main{
	flex: 3;
	display: flex;
	flex-direction: column;
}
.text-container{
	display: flex;
	flex-direction: column;
	flex:2;
	margin-left: 35px;
	justify-content: center;
}
.inputs-container{
	flex:3;
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
}
.form{
	width:90%;
	padding-left: 10px;
	padding-right: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.input{
	margin-top: 10px;
	width: 95%;
	height: 40px;
	padding-left: 10px;
	border-top-width: 0px;
	border-left-width: 0px;
	border-right-width: 0px;
}
.main-title{
	margin-top: 20px; 
	margin-right:26px;
	color: black;
	font-family: Yeseva One;
	font-weight: bold;
	font-size: 32px;
}
.main-description{
	margin-top: 8px; 
	margin-right:8px;
	font-family: Muli;
	font-weight: normal;
	font-size: 18px;
}
.buttons-container{
	flex:2;
	display: flex;
	width: 100%;
	justify-content: center;
}
.primary-button{
	background-color: #001984;
	width: 200px;
	height: 45px;
	border-radius: 7px;
}
.primary-button--text{
	color: #fff;
	font-style: normal;
	/* font-weight: bold; */
 font-size: 16px;
}

</style>