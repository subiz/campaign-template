import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.join";
export default {
  name: 'jform',
  props: ['form'],
  computed: {
    showForm: function showForm() {
      return this.form && this.form.enabled && this.form.fields && this.form.fields.length > 0;
    }
  },
  render: function render(h) {
    var v = [1, 2].filter(function (i) {
      return i < 3;
    }).join('x');
    return h("i", [v]);
  }
};