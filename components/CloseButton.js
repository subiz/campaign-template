export default {
	render (h) {
		return (
			<div class="btn-close">
				<svg
					vOn:click={e => this.$emit('click', e)}
					class="btn-close__icon"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="#fff"
					stroke="#fff"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</div>
		)
	},
}
