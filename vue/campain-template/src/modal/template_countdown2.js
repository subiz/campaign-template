export default{
	name:"countdown2",
	props:['page'],
	render(){
		return(
			<div class="container">
			<div class="header">
				<button class="header-close-button"/>
			</div>
			<div class="text">
				<p class="sub-title"></p>
				<p class="title"></p>
			</div>
			<div class="countdown">
				<div class="countdown-day">
					<div class="day-number">
						<p class="countdown-text">Ngày</p>
					</div>
				</div>
				<div class="countdown-hour">
					<div class="hour-number">
						<p class="countdown-text">Giờ</p>
					</div>
				</div>
				<div class="countdown-min">
					<div class="min-number">
						<p class="countdown-text">Phút</p>
					</div>
				</div>
				<div class="countdown-second">
					<div class="second-number">
						<p class="countdown-text">Giây</p>
					</div>
				</div>
			</div>
			<div class="description-container">
				<p class="description"></p>
			</div>
			<div class="buttons-contaier">
				<input class="intput" placeholder="Email của bạn"/>
				<button class="primary-button">
				</button>
			</div>
		</div>
		)
	}
}