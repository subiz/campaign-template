"use strict";

import _interopRequireDefault from "/home/thanh/src/campaign-template/node_modules/@babel/runtime/helpers/esm/interopRequireDefault";

var _vue = require("vue");

var _vue2 = _interopRequireDefault(_vue);

var _App = require("./App.vue");

var _App2 = _interopRequireDefault(_App);

_vue2.default.config.productionTip = false;
new _vue2.default({
  render: function render(h) {
    return h(_App2.default);
  }
}).$mount('#app');