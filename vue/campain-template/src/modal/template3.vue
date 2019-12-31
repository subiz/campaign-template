<template>
		<div class="container">
				<div class="left-content"/>
					<div class="right-content">
						<div class="header">
							<button class="template-button--close"></button>
					</div>	
						<p class="right-content--description">Only sales 20% in one day</p>
						<div class="right-content--red-div"></div>
						<p class="right-content--title">Đăng ký để nhận ưu đãi đặc biệt.</p>
						<div class="right-content--inputs-container">
							<input class="right-content--input" id="name" placeholder="Họ tên" />
							<input class="right-content--input" id="email" placeholder="Email" />
						</div>
						<div class="right-content--buttons-container">
								<button class="primary-button">
									<p class="primary-button--text">Đăng ký ngay</p>
								</button>
						</div>
					</div>
				</div>
		
			
</template>
<script>
export default {
	name:'template3',
}
</script>
<style scoped>
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.container{
	display: flex;
	flex-direction: row;
	height: 400px;
	width: 800px;
}
.left-content{
	display: flex;
	flex:1;
	background-image: url('../assets/bg3.png');
	background-size : auto;
	background-repeat: no-repeat
}
.right-content{
	display: flex;
	flex-direction: column;
	flex:1;
	align-items: center;
	background-color: #fff;
}
.header{
	display: flex;
	align-self: flex-end;
	padding: 3px;
}
.template-button--close{
	height: 20px;
	width: 20px;
	border-radius: 10px;
	border:0px;
}
.right-content--description{
	margin-top: 10px;
	font-family: Muli;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	align-self: flex-start;
	margin-left: 15px;
}
.right-content--red-div{
	margin-top: 10px;
	width: 134px;
	height: 5px;
	background-color: #B91526;
	align-self: flex-start;
	margin-left: 15px;
}
.right-content--title{
	margin-top: 15px;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 28px;
	line-height: 34px;
	align-self: flex-start;
	margin-left: 15px;
}
.right-content--inputs-container{
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;	
}
.right-content--input{
	margin-top: 20px;
	width: 80%;
	height: 45px;
	border-top-width: 0px;
	border-left-width: 0px;
	border-right-width: 0px;
}
.right-content--buttons-container{
	margin-top: 10px;
	padding-top:10px;
	display: flex;
	width: 100%;
	align-items: center;
}
.primary-button{
	margin-top: 15px;
	background-color: #B91526;
	width: 200px;
	height: 45px;
	border-radius: 7px;
}
.primary-button--text{
	color: #fff;
	font-style: normal;
 font-size: 16px;
}
</style>