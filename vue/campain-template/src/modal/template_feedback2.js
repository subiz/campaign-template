export default{
	name:'feedback2',
	props:['page'],
	render(){
		return(
			<div class="container">
				<div class="header">
					<button class="close-button"></button>
				</div>
				<div class="text-container">
					<p class="description"></p>
					<div class="black-div"/>
					<p class="title"></p>
				</div>
				<div class="feedback">
					
				</div>
				<div class="buttons-container">
					<button class="primary-button">
						<p>Gửi ngay</p>
					</button>
				</div>
			</div>
		)
	}
}