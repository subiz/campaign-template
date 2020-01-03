<script>
export default {
	name:"countdown2",
	props:['page'],
}
</script>
<template>
	<div class="container">
		<div class="header">
			<button class="header-button-close"/>
		</div>
		<div class="text">
			<p class="subtitle">{{this.page.subtitle}}</p>
			<p class="title">{{this.page.title}}</p>
		</div>
		<div class="countdown">
			<div class="element">
					<p class="countdown-number">120</p>
					<p class="countdown-text">Ngày</p>
			</div>
			<div class="countdown-icon">
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
			<div class="element">
					<p class="countdown-number">45</p>
					<p class="countdown-text">Giờ</p>
			</div>
				<div class="countdown-icon">
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
			<div class="element">
					<p class="countdown-number">19</p>
					<p class="countdown-text">Phút</p>
			</div>
				<div class="countdown-icon">
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
			<div class="element">
					<p class="countdown-number">07</p>
					<p class="countdown-text">Giây</p>
			</div>
		</div>
		<div class="description-container">
			<p class="description">{{this.page.description}}</p>
		</div>
		<div class="buttons-contaier">
			<input class="input" placeholder="Email của bạn" type="email"/>
			<button class="primary-button">
			</button>
		</div>
	</div>
</template>

<style scoped>
.container{
 display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-image: url('../assets/bg8.png');
}
.header{
	display: flex;
	width: 100%;
	flex: 1.5;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
}
.header-button-close{
	height: 30px;
	width: 30px;
	margin-right: 30px;
	border-radius: 15px;	
	border: 0px;
	background-color: #073a4b;
}
.text{
	width: 100%;
	flex:2.5;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5px;
	margin-top: 10px;
}
.subtitle{
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 60px;
	text-align: center;
	color: #fff;
}
.title{
	color: #fff;
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-style: normal;
	font-weight: 900;
	font-size: 72px;
	line-height: 90px;
	text-align: center;
	text-transform: uppercase;
}
.countdown{
	margin-top: 10px;
	width: 1073px;
	flex:2.5;
	display: flex;
	flex-direction: row;
	padding-top: 15px;
	border: solid 1px;
	border-color: #fff;
	justify-content:space-around;
}
.element{
	margin-top: 25px;	
	display: flex; 
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.countdown-icon{
	margin-top: 22px;	
	height: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
.dot{
	background-color: #fff;
	height: 10px;
	width:10px;
	border-radius: 5px;

}
.countdown-number{
	font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	font-size: 100px;
	line-height: 30px;
	color: #fff;
	font-weight: 600;
	text-align: center;
}
.countdown-text{
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 20px;
	line-height: 30px;
	color: #fff;
	text-align: center;
}
.description-container{
	padding-top: 20px;
	width: 60%;
	flex:1.5;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center
}
.description{
	color: #fff;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 24px;
}
.buttons-contaier{
	width: 100%;
	flex:2;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center
}
.input{
	height: 45px;
	width: 35%;
	border: 0px;
	padding-left: 15px;
}
.primary-button{
	position: absolute;
	background-color: "#ffffff";
	background-image: url('../assets/icon-send.png');
	right: 32%;
	height: 40px;
	width:40px;
}
</style>