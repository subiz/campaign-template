var common = require('./common.js');

import Form from './components/Form.vue';
export default {
  props: ['page', 'mode'],
  created: function created() {
    if (!this.mode) this.mode = common.mobilecheck() ? 'mobile' : 'desktop';
  },
  data: function data() {
    return {
      close: false
    };
  },
  render: function render(h) {
    return h("div", ["HELLO ", h(Form), ' ']);
  }
};