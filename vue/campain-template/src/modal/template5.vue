
<script>
export default {
	name:'template5',
	props:['page']
}
</script>
<template>
	<div class="container">
				<div class="main">
					<div class="main-left">
						<p class="main-subtitle">{{this.page.subtitle}}</p>
						<p class="main-title">{{this.page.title}}</p>
						<p class="main-description">{{this.page.description}}</p>
						<input class="main-input" type="number"  placeholder="Số điện thoại của bạn"/>
						<button class="primary-button">
						<p class="primary-button-text">{{this.page.buttonTitle}}</p>
						</button>	
					</div>
					<div class="main-right">
						<div class="header">
					<button class="header-close-button">
					</button>
					</div>
					</div>
				</div>
			</div>
</template>
<style scoped>
	.container{
		display: flex;
		flex-direction: column;
  align-items: center;
  height: 100vh;
		width: 100%;
		background-image: url('../assets/bg5.png');
		background-size:96% 100%;
	}
	.header{
		height: 30px;
		display: flex;
		flex-direction: row;
		align-self: flex-end;
		padding: 2px;
	}
.header-close-button{
	height: 28px;
	width: 28px;
	background-color: #091125;
	border-radius: 15px;
	border:0px;
}
.main{
	width: 100%;
	display: flex;
}
.main-left{
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
.main-right{
	display: flex;
	flex: 1;
	flex-direction: column;
}
.main-subtitle{
	color: #fff;
	font-family: Muli;
	font-style: normal;
	font-weight: normal;
	font-size: 42px;
}
.main-title{
	color: #FDAD15;
	font-family: 'Roboto';
	font-weight: bold;
	font-size: 50px;
}
.main-description{
	font-family: Muli;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	color: #fff;
}
.main-input{
	margin-top: 20px;
	width: 430px;
	height: 50px;
	background-color: #fff;
	border: 0px;
	border-radius: 50px;
	padding-left: 15px;
}
.primary-button{
	margin-top: 15px;
	background-color: #FDAD15;
	width: 446px;
	height: 50px;
	border-radius: 50px;
	border:0px;
}
.primary-button-text{
	color: #fff;
	font-size: 15px;
	font-weight: bold;
}
</style>