<script>
export default {
	name:'template6',
	props:['page']
}
</script>
<template>
	<div class="container">
			<div class="header">
				<button class="header-button-close" />
			</div>
			<div class="main">
				<div class="main-text-container">
					<p class="subtitle">{{this.page.subtitle}}</p>
					<p class="title">{{this.page.title}}</p>
					<div class="white-div"/>
					<p class="description">{{this.page.description}}</p>
				</div>
				<div class="main-inputs-container">
					<input class="input"  placeholder="Số điện thoại của bạn"/>
					<button class="primary-button">
					</button>
				</div>
			</div>
		</div>
</template>

<style scoped>
.container{
		display: flex;
		flex-direction: column;
  align-items: center;
		/* justify-content: center; */
  height: 100vh;
		width: 100%;
		background-image: url('../assets/bg6.png');
		background-size:100% 100%;
}
.header{
	display: flex;
	align-self: flex-end;
	padding:2px;
}
.header-button-close{
	width: 30px;
	height: 30px;
	border-radius: 15px; 
	background-color:azure;
	border:0px;
}
.main{
	margin-top: 10%;
	margin-left:28%;
	margin-right: 28%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.main-text-container{
	padding:10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.subtitle{
	font-family: Yeseva One;
	font-weight: normal;
	font-size: 80px;
	font-weight: '700';
	color: #fff;	
}
.title{
	padding: 10px;
	color: #fff;
	font-family: Montserrat;
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
	padding: 5px;
	color: #fff;
	font-family: Muli;
	font-style: normal;
	font-size: 22px;
	text-align: center;
}
.input{
	width: 490px;
	height: 35px;
	border:0px;
	padding-left: 10px;
}
.main-inputs-container{
	margin-top: 10px;
	align-items: center;
	justify-content: center;
}
.primary-button{
	/* margin-top: 3px; */
	position:absolute; 
	width: 34px;
	height: 34px;
	background-image: url('../assets/icon-send.png');
	background-size: cover;
	right: 400px;
	border:0px;
}
</style>