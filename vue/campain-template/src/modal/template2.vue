<template>
   <div class="container">
				<div class="template-header">
					<button class="header-button-close">
						</button>
				</div>
				<div class="template-main">
					<p class="template-main--title">{{this.page.title}}</p>
					<p class="template-main--description">{{this.page.description}}</p>	
					<div class="template-main--inputs-container">
							<input class="template-main--input" id="name" placeholder="Họ tên" />
							<input class="template-main--input" id="email" placeholder="Email" />
					</div>
					<div class="template-main--buttons-container">
							<button class="template-main--primary-button">
								<p class="primary-button--text">{{this.page.primaryButtonTitle}}</p>
							</button>
					</div>
				</div>
			</div>
</template>

<script>
export default {
		name: 'template2',
		props:['page']
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
			flex-direction: column;
			height: 520px;
			width: 800px;
			align-items: center;
			background-image: url('../assets/bg2.png');
			background-color: #d26;
			background-size:auto;
	}
	.template-header{ 
		display: flex;
		align-self: flex-end;
		padding: 3px; 
	}
	.header-button-close{ 
		display: flex;
		/* background-color: #fff; */
		height: 20px;
		width: 20px;
		border-radius: 50%;
		border:0px;
	}
	.template-main {
		margin-top: 10px;
		padding-top:20px;
		height:450px;
		width: 430px;
		align-items: center;
		justify-content: center;
		background-color: #fff;
	}
	.template-main--title { 
		margin-left: 50px;
		margin-right: 50px;
		font-size: 30px;
		font-weight: bold;
		font-family:'Montserrat', sans-serif;
		font-style: normal;
		text-align: center;
		width: 50;
	}
	.template-main--description {
		margin-top:15px;
		margin-left: 27px;
		margin-right: 27px;
		display: flex;
		font-family: 'Muli';
		font-weight: normal;
		text-align: center;
		font-size: 18px;
	}
	.template-main--inputs-container{
		margin-top: 10px;
		background-color: #fff;
		display: flex;
		flex-direction:column;
		align-items: center;
		justify-content:space-between;
	}
	.template-main--input{
		margin-top:25px;
		width: 80% ;
		height: 40px;
		border-top-width: 0px;
		border-right-width: 0px;
		border-left-width: 0px;
		border-bottom-color: #cccccc;
		border-bottom-width: 1px;

	}
	.template-main--buttons-container{
		display: flex;
		margin-top: 20px;
		align-items: center;
		justify-content: center;
	}
	.template-main--primary-button{
			margin-top:20px;
		display: flex;
		align-items: center;
		justify-content: center;
		width:200px;
		height: 45px;
		border-radius: 5px;
		background-color: #FDAD15;
	}
	.primary-button--text{
	
		color: #fff;
		font-size: 16px;
		line-height: 19px;
		/* font-family: 'Roboto'; */
		font-weight: bold;
		text-align: center;
		text-transform: uppercase;
	}
</style>
