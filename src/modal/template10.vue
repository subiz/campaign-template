export default{

	render(){
		return(
			
		)
	}
}
<script>
import Form from '../components/Form.vue'
export default {
	name:'feedback2',
	props:{page: Object},
	components:{
		Form
	}
}
</script>
<template>
	<div class="container">
		<div class="header">
			<button class="close-button"></button>
		</div>
		<div class="text-container">
			<p class="description">{{page.description}}</p>
			<div class="black-div"/>
			<p class="title">{{page.title}}</p>
		</div>
		<div class="feedback">
			<Form/>
		</div>
		<div class="buttons-container">
			<button class="primary-button">
				<p>Gửi ngay</p>
			</button>
			</div>
		</div>
</template>