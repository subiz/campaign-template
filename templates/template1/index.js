export default {
	name: 'template1',
	props: ['page', 'form', 'countdown', 'primaryButton', 'secondaryButton', 'closeButton'],
	render (h) {
		return (
			<div class="container">
				{this.closeButton}
				<div class="main">
					<div class="image"></div>
					<div class="div-left"></div>
					<div class="div-right">
						<p class="title">{this.page.title}</p>
						<p class="description">{this.page.description}</p>
						{this.form}
						<div class="buttons">
							{this.primaryButton}
							{this.secondaryButton}
						</div>
					</div>
				</div>
			</div>
		)
	},
}
