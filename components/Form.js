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
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						id={field.key + item}
						vOn:change={(ev) => this.onCheckboxChange(ev, field, item)}
						checked={contains(field, item)}
					/>
					<label class="form-check-label" for={field.key + item}>
						{item}
					</label>
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
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						id={'f_bool_' + field.key}
						vOn:change={(ev) => this.onBooleanFieldChange(ev, field)}
						checked={field.value}
					/>
					<label class="form-check-label" for={'f_bool_' + field.key}>
						{field.label}
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
			field.value = JSON.stringify(ev.target.checked)
		},

		onDatetimeFieldChange (ev, field) {
			field.value = JSON.stringify(new Date(ev.target.value).toISOString())
		},
	},

	render (h) {
		var showForm = this.form && this.form.enabled && this.form.fields && this.form.fields.length > 0
		if (!showForm) return null
		let fields = this.form.fields || []
		let $fields = fields.map((field) => (
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
