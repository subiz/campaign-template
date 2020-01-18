var common = require('../../common.js');

var op = require('object-path');

import Form from '../../components/Form.vue';
import Countdown from '../../components/Countdown.vue';
export default {
  props: ['page', 'mode'],
  components: {
    Form: Form,
    Countdown: Countdown
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