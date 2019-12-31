export default{
	name:"feedback1",
	props:['page'],
	render(){
		<div class="container"> 
			<div class="header">
				<button class="close-button"></button>
			</div>
			<div class="text-container">
				<p class="title">Bạn có tìm được thứ mình cần?</p>
				<p class="description"> Chia sẻ cảm nhận của bạn với chúng tôi và bạn sẽ nhận được 10% GIẢM GIÁ!	</p>
			</div>
			<div class="inputs-container">
				<input class="feedback-input" placeholder="Cảm nhận của bạn..."/>
				<input class="email-input" placeholder="Email của bạn"/>
			</div>
			<div class="buttons-container">
			<button class="primary-button">
				<p>Gửi cảm nhận</p>
			</button>
			</div>
		</div>
	}
}