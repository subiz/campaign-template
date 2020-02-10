export default {
	name: 'template1',
	props: ['page', 'form', 'countdown', 'primaryButton', 'secondaryButton', 'closeButton'],
	render (h) {
		return (
			<div class="container">
				<div class="container__inner">
					{this.closeButton}
					<div class="background"/>
					<div class="content">
						<p class="title">{this.page.title}</p>
						<p class="description">{this.page.description}</p>
						<div class="form">
						{this.form}
						</div>
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
