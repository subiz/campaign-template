import { render, h, Component } from 'preact'
import { meta, Template } from './index.js'

window.CamTemp = {
	meta: meta,
	New: () => {
		return {
			render (ele, option) {
				if (typeof ele === 'string') ele = document.querySelector(ele)
				// 					key={this.i}
				return render(
					<Template
						template={option.template}
						page={option.page}
						select="secondary_button"
						onClick={() => true}
						onClose={() => true}
					/>,
					ele,
					ele,
				)
			},
		}
	},
}
