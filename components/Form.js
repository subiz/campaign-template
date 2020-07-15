export default {
	name: 'jform',
	props: ['form', 'pressedSubmit'],
	methods: {
		renderSingleChoiceList (h, field) {
			if (field.type !== 'list' || field.multiple_choice) return null

			let $items = field.list.map((item) => (
				<div class="radio">
					<input
						type="radio"
						id={field.key + item}
						name={field.key}
						value={item}
						vOn:change={(ev) => this.onRadioChange(ev, field, item)}
					/>
					<label class="radio--label" for={field.key + item}>
						{item}
					</label>
					<div class="radio--check">
						<div class="inside"></div>
					</div>
				</div>
			))
			return <div class="form--list-container"> {$items}</div>
		},

		renderMultipleChoiceList (h, field) {
			if (field.type !== 'list' || !field.multiple_choice) return null
			let $items = field.list.map((item) => (
				<div class="checkbox">
					<input
						type="checkbox"
						id={field.key + item}
						vOn:change={(ev) => this.onCheckboxChange(ev, field, item)}
						checked={contains(field, item)}
					/>
					<label class="checkbox--label " for={field.key + item}>
						{item + ':'}
					</label>
					<div class="checkbox--check">
						<div></div>
					</div>
				</div>
			))

			return <div class="form--list-container"> {$items}</div>
		},

		renderDatetime (h, field) {
			if (field.type !== 'datetime') return null
			return (
				<input
					type="date"
					class="form-control"
					vOn:change={(ev) => this.onDatetimeFieldChange(ev, field)}
					value={this.toDate(field.value)}
				/>
			)
		},

		toDate (v) {
			return new Date(JSON.parse(v)).toLocaleDateString('en-CA')
		},

		renderEmail (h, field) {
			if (field.type !== 'text' || field.subtype !== 'email') return null
			var cls = 'text-input f '
			if (this.pressedSubmit && field.is_required && isEmpty(field.value)) {
				cls += 'text-input--error'
			}

			return (
				<input
					type="email"
					class={cls}
					value={parseJSON(field.value) || ''}
					placeholder={field.placeholder}
					vOn:keyup={(ev) => this.onTextFieldChange(ev, field)}
				/>
			)
		},

		renderMultiLineText (h, field) {
			if (field.type !== 'text' || !field.multiline_text || field.subtype === 'email') return null

			var cls = 'textarea'
			if (this.pressedSubmit && field.is_required && isEmpty(field.value)) {
				cls += ' textarea--error'
			}

			return (
				<textarea
					class={cls}
					placeholder={field.placeholder}
					vOn:keyup={(ev) => this.onTextFieldChange(ev, field)}
					value={parseJSON(field.value) || ''}
				/>
			)
		},

		renderSingleLineText (h, field) {
			if (field.type !== 'text' || field.multiline_text || field.subtype === 'email') return null

			var cls = 'text-input'
			if (this.pressedSubmit && field.is_required && isEmpty(field.value)) {
				cls += ' text-input--error'
			}

			return (
				<input
					type="text"
					class={cls}
					value={parseJSON(field.value) || ''}
					placeholder={field.placeholder}
					vOn:keyup={(ev) => this.onTextFieldChange(ev, field)}
				/>
			)
		},

		renderNumber (h, field) {
			if (field.type !== 'number') return

			var cls = 'text-input'
			if (this.pressedSubmit && field.is_required && isEmpty(field.value)) {
				cls += ' text-input--error'
			}

			return (
				<input
					type="number"
					class={cls}
					value={parseJSON(field.value) || 0}
					placeholder={field.placeholder}
					vOn:keyup={(ev) => this.onTextFieldChange(ev, field)}
				/>
			)
		},

		renderBoolean (h, field) {
			if (field.type !== 'boolean') return null
			return (
				<div>
					<label class="checkbox--label">
						{field.label + ':'}
						<input type="checkbox" vOn:change={(ev) => this.onBooleanFieldChange(ev, field)} checked={field.value} />
						<span class="checkmark">
							<svg width="14" height="10" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.33317 0.5L2.74984 5.08333L0.666504 3"
									stroke="white"
									stroke-linecap="round"
									stroke-linejoin="round"></path>
							</svg>
						</span>
					</label>
				</div>
			)
		},

		onRadioChange (ev, field, item) {
			var v = []
			if (ev.target.checked) v = [item]
			this.$set(field, 'value', JSON.stringify(v))
		},

		onCheckboxChange (ev, field, item) {
			var v = []
			try {
				v = JSON.parse(field.value)
			} catch (e) {}

			if (!Array.isArray(v)) v = []

			if (ev.target.checked) {
				if (!v.includes(item)) v.push(item)
			} else {
				v = v.filter((i) => i !== item)
			}
			this.$set(field, 'value', JSON.stringify(v))
		},

		onTextFieldChange (ev, field) {
			field.value = JSON.stringify(ev.target.value)
		},

		onBooleanFieldChange (ev, field) {
			field.value = JSON.tringify(ev.target.checked)
		},

		onDatetimeFieldChange (ev, field) {
			field.value = JSON.stringify(new Date(ev.target.value).toISOString())
		},
	},

	render (h) {
		var showForm = this.form && this.form.enabled && this.form.fields && this.form.fields.length > 0
		if (!showForm) return null

		let $fields = this.form.fields.map((field) => (
			<div class="form-field">
				<label class="label">{field.label + ':'}</label>
				{this.renderMultipleChoiceList(h, field)}
				{this.renderSingleChoiceList(h, field)}
				{this.renderEmail(h, field)}
				{this.renderMultiLineText(h, field)}
				{this.renderSingleLineText(h, field)}
				{this.renderNumber(h, field)}
				{this.renderBoolean(h, field)}
			</div>
		))
		return (
			<div class="form" vOn:click={(_) => this.$emit('clicked', 'form')}>
				{$fields}
			</div>
		)
	},
}

function isEmpty (value) {
	return value === undefined || value === null || value === ''
}

function parseJSON (js) {
	try {
		return JSON.parse(js)
	} catch (e) {}
}

function contains (field, item) {
	var v = []
	try {
		v = JSON.parse(field.value)
	} catch (e) {}

	if (!Array.isArray(v)) v = []
	return v.includes(item)
}
