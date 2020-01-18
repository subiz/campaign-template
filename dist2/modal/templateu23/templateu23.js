"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
import _interopRequireDefault from "/home/thanh/src/campaign-template/node_modules/@babel/runtime/helpers/esm/interopRequireDefault";

var _Form = require("../../components/Form.vue");

var _Form2 = _interopRequireDefault(_Form);

var _Countdown = require("../../components/Countdown.vue");

var _Countdown2 = _interopRequireDefault(_Countdown);

var common = require('../../common.js');

var op = require('object-path');

exports.default = {
  props: ['page', 'mode'],
  components: {
    Form: _Form2.default,
    Countdown: _Countdown2.default
  },
  created: function created() {
    if (!this.mode) this.mode = common.mobilecheck() ? 'mobile' : 'desktop';
  },
  data: function data() {
    return {
      close: false
    };
  },
  computed: {
    showPrimaryButton: function showPrimaryButton() {
      return op.get(this.page, 'primary_button.enabled');
    },
    showSecondaryButton: function showSecondaryButton() {
      return op.get(this.page, 'secondary_button.enabled');
    },
    primaryButtonText: function primaryButtonText() {
      return op.get(this.page, 'primary_button.text');
    },
    secondaryButtonText: function secondaryButtonText() {
      return op.get(this.page, 'secondary_button.text');
    }
  },
  methods: {
    onClose: function onClose() {
      this.$emit('closeButtonClicked');
      this.close = true;
    },
    onSecondaryClick: function onSecondaryClick() {
      this.$emit('secondaryButtonClicked');
    },
    onPrimaryClick: function onPrimaryClick() {
      this.$emit('primaryButtonClicked');
    }
  }
};