export default{
	name:'promote1',
	props:['page'],
	render(){
		return(
			<div class="container">
				<div class="header">
						<button class="header-button-close">
						</button>
				</div>
				<div class="title-container">
					<p class="title">SẢN PHẨM MỚI</p>
				</div>
				<div class="three-products">
					<div class="product">
						<img class="product-image" />
						<p class="product-name">Yeezy Boost 700 "Teal Blue"</p>
						<p class="product-old-price"></p>
						<p class="product-new-price"></p>
					</div>
					<div class="product">
						<img class="product-image" />
						<p class="product-name">Yeezy Boost 700 "Teal Blue"</p>
						<p class="product-old-price"></p>
						<p class="product-new-price"></p>
					</div>
					<div class="product">
						<img class="product-image" />
						<p class="product-name">Yeezy Boost 700 "Teal Blue"</p>
						<p class="product-old-price"></p>
						<p class="product-new-price"></p>
					</div>
				</div>
				<div class="description-container">
					<p class="description">BỘ SƯU TẬP MÙA HÈ 2019</p>
				</div>
				<div class="buttons-container">
					<button class="">
						<p>Dạo một vòng</p>
					</button>
				</div>
			</div>
		)
	}
}