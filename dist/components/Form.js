import { h, Component } from 'preact';
export default class JForm extends Component {
  renderSingleChoiceList(h, field) {
    if (field.type !== 'list' || field.multiple_choice) return null;
    let $items = field.list.map(item => h("div", {
      class: "radio"
    }, h("input", {
      type: "radio",
      id: field.key + item,
      name: field.key,
      value: item,
      onChange: ev => this.onRadioChange(ev, field, item)
    }), h("label", {
      class: "radio--label",
      for: field.key + item
    }, item), h("div", {
      class: "radio--check"
    }, h("div", {
      class: "inside"
    }))));
    return h("div", {
      class: "form--list-container"
    }, $items);
  }

  renderMultipleChoiceList(h, field) {
    if (field.type !== 'list' || !field.multiple_choice) return null;
    let $items = field.list.map(item => h("div", {
      class: "form-check"
    }, h("input", {
      class: "form-check-input",
      type: "checkbox",
      id: field.key + item,
      onChange: ev => this.onCheckboxChange(ev, field, item),
      checked: contains(field, item)
    }), h("label", {
      class: "form-check-label",
      for: field.key + item
    }, item)));
    return h("div", {
      class: "form--list-container"
    }, $items);
  }

  renderDatetime(h, field) {
    if (field.type !== 'datetime') return null;
    return h("input", {
      type: "date",
      class: "form-control",
      onChange: ev => this.onDatetimeFieldChange(ev, field),
      value: this.toDate(field.value)
    });
  }

  toDate(v) {
    return new Date(parseJSON(v)).toLocaleDateString('en-CA');
  }

  renderEmail(h, field) {
    if (field.type !== 'text' || field.subtype !== 'email') return null;
    var cls = 'text-input f ';

    if (this.props.pressedSubmit && field.is_required && isEmpty(field.value)) {
      cls += 'text-input--error';
    }

    return h("input", {
      type: "email",
      class: cls,
      value: parseJSON(field.value) || '',
      placeholder: field.placeholder,
      onChange: ev => this.onTextFieldChange(ev, field)
    });
  }

  renderMultiLineText(h, field) {
    if (field.type !== 'text' || !field.multiline_text || field.subtype === 'email') return null;
    var cls = 'textarea';

    if (this.props.pressedSubmit && field.is_required && isEmpty(field.value)) {
      cls += ' textarea--error';
    }

    return h("textarea", {
      class: cls,
      placeholder: field.placeholder,
      onChange: ev => this.onTextFieldChange(ev, field),
      value: parseJSON(field.value) || ''
    });
  }

  renderSingleLineText(h, field) {
    if (field.type !== 'text' || field.multiline_text || field.subtype === 'email') return null;
    var cls = 'text-input';

    if (this.props.pressedSubmit && field.is_required && isEmpty(field.value)) {
      cls += ' text-input--error';
    }

    return h("input", {
      type: "text",
      class: cls,
      value: parseJSON(field.value) || '',
      placeholder: field.placeholder,
      onChange: ev => this.onTextFieldChange(ev, field)
    });
  }

  renderNumber(h, field) {
    if (field.type !== 'number') return;
    var cls = 'text-input';

    if (this.props.pressedSubmit && field.is_required && isEmpty(field.value)) {
      cls += ' text-input--error';
    }

    return h("input", {
      type: "number",
      class: cls,
      value: parseJSON(field.value) || 0,
      placeholder: field.placeholder,
      onChange: ev => this.onTextFieldChange(ev, field)
    });
  }

  renderBoolean(h, field) {
    if (field.type !== 'boolean') return null;
    return h("div", {
      class: "form-check"
    }, h("input", {
      class: "form-check-input",
      type: "checkbox",
      id: 'f_bool_' + field.key,
      onChange: ev => this.onBooleanFieldChange(ev, field),
      checked: field.value
    }), h("label", {
      class: "form-check-label",
      for: 'f_bool_' + field.key
    }, field.label));
  }

  onRadioChange(ev, field, item) {
    var v = [];
    if (ev.target.checked) v = [item];
    field.value = JSON.stringify(v);
  }

  onCheckboxChange(ev, field, item) {
    var v = [];

    try {
      v = JSON.parse(field.value);
    } catch (e) {}

    if (!Array.isArray(v)) v = [];

    if (ev.target.checked) {
      if (!v.includes(item)) v.push(item);
    } else {
      v = v.filter(i => i !== item);
    }

    field.value = JSON.stringify(v);
  }

  onTextFieldChange(ev, field) {
    field.value = JSON.stringify(ev.target.value);
  }

  onBooleanFieldChange(ev, field) {
    field.value = JSON.stringify(ev.target.checked);
  }

  onDatetimeFieldChange(ev, field) {
    field.value = JSON.stringify(new Date(ev.target.value).toISOString());
  }

  render() {
    var showForm = this.props.form && this.props.form.enabled && this.props.form.fields && this.props.form.fields.length > 0;
    if (!showForm) return null;
    let fields = this.props.form.fields || [];
    let $fields = fields.map(field => h("div", {
      class: "form-field"
    }, h("label", {
      class: "label"
    }, field.label + ':'), this.renderMultipleChoiceList(h, field), this.renderSingleChoiceList(h, field), this.renderEmail(h, field), this.renderMultiLineText(h, field), this.renderSingleLineText(h, field), this.renderNumber(h, field), this.renderBoolean(h, field)));
    return h("div", {
      class: "form",
      onClick: _ => this.props.onClick('form')
    }, $fields);
  }

}

function isEmpty(value) {
  return value === undefined || value === null || value === '';
}

function parseJSON(js) {
  try {
    return JSON.parse(js);
  } catch (e) {}
}

function contains(field, item) {
  var v = [];

  try {
    v = JSON.parse(field.value);
  } catch (e) {}

  if (!Array.isArray(v)) v = [];
  return v.includes(item);
}