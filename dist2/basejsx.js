"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
import _interopRequireDefault from "/home/thanh/src/campaign-template/node_modules/@babel/runtime/helpers/esm/interopRequireDefault";

var _Form = require("./components/Form.vue");

var _Form2 = _interopRequireDefault(_Form);

var common = require('./common.js');

exports.default = {
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
    return h("div", ["HELLO ", h(_Form2.default), ' ']);
  }
};