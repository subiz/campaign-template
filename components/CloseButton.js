export default {
	render (h) {
		return (
			<div class="btn_close btn">
				<svg
					vOn:click={(e) => this.$emit('click', e)}
					class="btn_close__icon"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="#fff"
					stroke="#fff"
					stroke-linecap="round"
					stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18" style="stroke-width: 2 !important;"></line>
					<line x1="6" y1="6" x2="18" y2="18" style="stroke-width: 2 !important;"></line>
				</svg>
			</div>
		)
	},
}
