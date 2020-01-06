<template>
	<div class="container">
		<button class="button-close"></button>

		<div class="main">

			<p class="title">{{this.page.title}}</p>
			<p class="description">{{this.page.description}}</p>

			<Form :form="page.form" />

			<div class="buttons-container">
				<button v-show="page.primary_button.enabled" class="primary-button">
					{{this.page.primary_button.text}}
				</button>
				<button v-show="page.secondary_button.enabled" class="secondary-button">
					{{this.page.secondary_button.text}}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
 import Form from '../components/Form.vue'
 export default {
	 name: 'template2',
	 props:["page"],
	 data() {
		 return {
			 id: 'template2',
			 name: 'Đăng ký nhận ưu đãi',
		 }
	 },
	 components: {Form},
 }
</script>

<style scoped>
 * {
	 margin: 0;
	 padding: 0;
	 box-sizing: border-box;
 }

 .container {
	 display: flex;
	 flex-direction: column;

	 width: 800px;

	 max-width: 100%;

	 align-items: center;
	 background-image: url('../assets/bg2.png');
	 background-size: auto;

	 position: fixed;
	 top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
 }


 .button-close {
   position: absolute;

   right: 10px;
   top: 10px;

	 height: 20px;
	 width: 20px;
	 border-radius: 50%;
	 border: 0px;

	 background-image: url('../assets/x.png');
 }

 .main {
	 display: flex;
	 flex-direction: column;

	 padding:45px;

	 width: 430px;
	 max-width: 100%;

	 align-items: center;
	 background-color: #fff;

	 margin-top: 36px;
	 margin-bottom: 36px;

	 box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.0196802), 0px 2px 4px rgba(0, 0, 0, 0.03), 0px 7px 12px rgba(0, 0, 0, 0.0503198), 0px 18px 28px rgba(0, 0, 0, 0.07);
 }


 .title {
	 font-size: 30px;
	 font-weight: bold;
	 /*font-family: 'Montserrat', sans-serif;*/
	 font-style: normal;
	 text-align: center;
 }

 .description {
	 margin-top: 10px;
	 /*font-family: 'Muli';*/
	 font-weight: normal;
	 text-align: center;
	 font-size: 18px;
 }

 .buttons-container{
	 display: flex;
	 margin-top: 5px;
	 align-items: center;
	 justify-content: center;
	 margin-top:37px;
 }

 .primary-button {
	 border:0px;
	 border-radius: 5px;
	 background-color: #FDAD15;

	 color: #fff;
	 font-size: 16px;
	 font-weight: 500;
	 text-align: center;
	 text-transform: uppercase;

	 padding-left: 30px;
	 padding-right: 30px;
	 padding-top: 12px;
	 padding-bottom: 12px;

	 white-space: nowrap;
	 cursor: pointer;
 }

 .secondary-button {
	 border:0px;
	 border-radius: 5px;
	 background-color: #d1d1d1;

	 color: #fff;
	 font-size: 16px;
	 font-weight: 500;
	 text-align: center;
	 text-transform: uppercase;

	 padding-left: 30px;
	 padding-right: 30px;
	 padding-top: 12px;
	 padding-bottom: 12px;

	 margin-left: 10px;
	 white-space: nowrap;
	 cursor: pointer;
 }

 /deep/ .form {
	 display: flex;
	 flex-direction: column;
	 width: 100%;
	 margin-top: 15px;
 }

 /deep/ .text-input {
	 border: none;
	 border-bottom: 1px solid #d9d9d9;
	 width: 100%;
	 font-size: 16px;
	 margin-top: 19px;
 }

</style>
