export default {
	name: 'template1',
	props: ['page'],
	render () {
		return (
			<div>
				<p>{this.page.title}</p>
				<p>{this.page.description}</p>
				<slot name="form" />
				<slot name="countdown" />
				<a class="primary-button" vOn:click={() => this.$emit('primaryClick')}>
					Primary
				</a>
				<a
					class="primary-button"
					vOn:click={() => this.$emit('secondaryClick')}
				>
					Secondary
				</a>
			</div>
		)
	},
}
