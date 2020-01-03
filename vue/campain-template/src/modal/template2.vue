<template>
	<div class="container">
		<div class="template-header">
			<button class="header-button-close">
				</button>
		</div>
		<div class="template-main">
			<div class="text-container">
				<p class="template-main--title">{{this.page.title}}</p>
				<p class="template-main--description">{{this.page.description}}</p>	
>>>>>>> Stashed changes
			</div>
			<Form :form="page"/>
		</div>
	</div>
</template>

<script>
import Form from '../components/Form.vue'
export default {
	name: 'template2',
	props:{page: Object},
	components: {
		Form
	},
}
</script>
<style >
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
		height: 20px;
		width: 20px;
		border-radius: 50%;
		border:0px;
	}
	.template-main {
		display:flex; 
		flex-direction: column;
		margin-top: 10px;
		padding-top:10px;
		height:450px;
		width: 430px;
		align-items: center;
		background-color: #fff;
	}
	.text-container{
		margin-left: 50px;
		margin-right: 50px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		flex:1;
	}
	.template-main--title { 
		font-size: 30px;
		font-weight: bold;
		font-family:'Montserrat', sans-serif;
		font-style: normal;
		text-align: center;
		width: 50;
	}
	.template-main--description {
		margin-top:10px;
		display: flex;
		font-family: 'Muli';
		font-weight: normal;
		text-align: center;
		font-size: 18px;
	}

	.inputs-container{
		display: flex;
		flex-direction:column;
		flex:1;
		width: 100%;
		align-items: center;
		justify-content:center;
	}
	.form{
		width: 75%;
	}
	.input{

		margin-top:15px;
		width: 100% ;
		height: 40px;
		border-top-width: 0px;
		border-right-width: 0px;
		border-left-width: 0px;
		border-bottom-color: #cccccc;
		border-bottom-width: 1px;
		padding-left: 10px;
	}
	.buttons-container{
		display: flex;
		margin-top: 5px;
		align-items: center;
		justify-content: center;
	}
	.primary-button{
			margin-top:20px;
		display: flex;
		align-items: center;
		justify-content: center;
		width:200px;
		height: 45px;
		border:0px;
		border-radius: 5px;
		background-color: #FDAD15;
	}
	.primary-button--text{
		color: #fff;
		font-size: 16px;
		line-height: 19px;
		font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 500;
		text-align: center;
		text-transform: uppercase;
	}
</style>
