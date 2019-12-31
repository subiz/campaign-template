<script>
export default {
	name:'countdown1',
	props:['page'],
}
</script>
<template>
	<div class="container">
				<div class="header">
					<button class="header-button-close"/>
				</div>
				<div class="text-container">
					<p class="title">{{this.page.subtitle}}</p>
					<p class="title">{{this.page.title}}</p>
					<p class="description">{{this.page.description}}</p>
				</div>
				<div class="countdown">
					<div class="element">
						<div class="number-container">
								<p class="number">01</p>
						</div>
							<p class="countdown-text">NGÀY</p>
					</div>

					<div class="element">
							<div class="number-container">
								<p class="number">09</p>
							</div>
							<p class="countdown-text">GIỜ</p>
					</div>

					<div class="element">
						<div class="number-container">
								<p class="number">30</p>
						</div>
							<p class="countdown-text">PHÚT</p>
					</div>
				</div>
				<div class="buttons-container">
					<input class="input" placeholder="Số điện thoại của bạn"/>
					<button class="primary-button">
						<p class="primary-button-text">{{this.page.primaryButtonTitle}}</p>
					</button>
				</div>
			</div>
</template>
<style scoped>
.container{
	display: flex;
	flex-direction: column;
	width: 800px;
	height: 520px;
	background-color: #fff;
	padding-left: 50px;
	background-image: url('../assets/bg7.png');
	background-size:100% 100%;
}
.header{
	flex: 1;
	display: flex;
	height: 35px;
	align-items: flex-end;
	flex-direction: column;
}
.header-button-close{
	width: 28px;
	height: 28px;
	border:0px;
	background-color:aliceblue;
	background-image: url('../assets/x.png');
}
.text-container{
	display: flex;
	flex-direction: column;
	padding-left: 5px;
	margin-top: 15px;
	flex: 3
}
.title{
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	color: #000;
}
.description{
	font-family: Muli;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	color:#000;
}
.countdown{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 310px;
	height: 100;
	flex: 3;
}
.element{
	width: 86px;
	height: 71px;
	background-color: #e1e1e1;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.number-container{
	display: flex;
	align-items: center;
	justify-content: center;
}
.number{
	font-family: Montserrat;
	font-style: normal;
	font-weight: 600;
	font-size: 60px;
}
.countdown-text{
	margin-top: 10px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
}
.buttons-container{
	display: flex;
	flex-direction: column;
	margin-top:20px;
	flex: 3;
	width: 351px;
}
.input{
	height:30px;
	border:0px;
	border-radius: 5px;
	padding-left: 10px;
}
.primary-button{
	margin-top: 15px;
 background-color: #FDAD15;
	border-radius: 5px;
	height: 40px;
	border:0px;
}
.primary-button-text{
	color: #fff;
	font-weight: bold;
	font-size: 16px;
}
</style>
