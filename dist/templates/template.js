import "core-js/modules/es.array.join";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "/home/thanh/workspace/src/git.subiz.net/campaign-template/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import TEMPLATES from './index.js';
import Form from '../components/Form.js';
import './template.less';

var common = require('../src/common.js');

var op = require('object-path');

var MODE = common.mobilecheck() ? 'mobile' : 'desktop';
var Template = null;
var CSS = '';
export default {
  name: 'Template',
  props: ['mode', 'template', 'page'],
  data: function data() {
    return {
      close: false
    };
  },
  watch: {
    template: function () {
      var _template = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(t) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loadTemplate(t);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function template(_x) {
        return _template.apply(this, arguments);
      }

      return template;
    }(),
    page: function () {
      var _page2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_page) {
        var css;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                css = replaceCssVariable(CSS, _page);
                common.setCssToHead('subiz-template-style-' + this.template, css);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function page(_x2) {
        return _page2.apply(this, arguments);
      }

      return page;
    }()
  },
  created: function created() {
    this.loadTemplate(this.template);
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
    },
    loadTemplate: function () {
      var _loadTemplate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(template) {
        var temp, css;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                temp = TEMPLATES[t];

                if (temp) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                _context3.next = 5;
                return temp.js();

              case 5:
                Template = _context3.sent["default"];
                _context3.next = 8;
                return temp.css();

              case 8:
                CSS = _context3.sent["default"];
                css = replaceCssVariable(CSS, this.page);
                common.setCssToHead('subiz-template-style-' + template, css);
                this.$forceUpdate();

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadTemplate(_x3) {
        return _loadTemplate.apply(this, arguments);
      }

      return loadTemplate;
    }()
  },
  render: function render(h) {
    if (!Template) return null;
    if (this.close) return null;
    var mode = this.mode || MODE;
    var closeButton = h("button", {
      "class": "button-close",
      "on": {
        "click": this.onClose
      }
    });
    var primaryButton = null;

    if (op.get(this.page, 'primary_button.enabled')) {
      primaryButton = h("button", {
        "class": "primary-button",
        "on": {
          "click": this.onPrimaryClick
        }
      }, [op.get(this.page, 'primary_button.text')]);
    }

    var secondaryButton = null;

    if (op.get(this.page, 'secondary_button.enabled')) {
      secondaryButton = h("button", {
        "class": "secondary-button",
        "on": {
          "click": this.onSecondaryClick
        }
      }, [op.get(this.page, 'secondary_button.text')]);
    }

    return h("div", {
      "class": 'template' + this.template
    }, [h("div", {
      "class": mode
    }, [h(Template, {
      "attrs": {
        "page": this.page,
        "form": Form,
        "primaryButton": primaryButton,
        "secondaryButton": secondaryButton,
        "closeButton": closeButton
      }
    })])]);
  }
}; // tokenizy(['hello XX andy XX go'], 'XX')
// => ['hello ', {type: 'XX'},' andy ', {type: 'XX'}, ' go']

function tokenize(arr, token) {
  if (!arr || !arr.length) return [];
  var out = [];

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];

    if (typeof item !== 'string') {
      out.push(item);
      continue;
    }

    var ts = item.split(token);

    for (var i = 0; i < ts.length; i++) {
      out.push(ts[i]);
      out.push({
        type: token
      });
    }

    out.pop();
  }

  return out;
}

function replaceCssVariable(css, page) {
  // tokenize
  var tokens = [css];
  tokens = tokenize(tokens, "'@desktop_appearance.color'");
  tokens = tokenize(tokens, "'@desktop_appearance.background'");
  tokens = tokenize(tokens, "'@desktop_appearance.input_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.input_background'");
  tokens = tokenize(tokens, "'@primary_button.background'");
  tokens = tokenize(tokens, "'@primary_button.color'");
  tokens = tokenize(tokens, "'@secondary_button.background'");
  tokens = tokenize(tokens, "'@secondary_button.color'");
  tokens = tokenize(tokens, "'@desktop_appearance.background_image'");
  tokens = tokenize(tokens, "'@desktop_appearance.width'");
  tokens = tokenize(tokens, "'@desktop_appearance.min_height'");
  tokens = tokenize(tokens, "'@desktop_appearance.padding_left'");
  tokens = tokenize(tokens, "'@desktop_appearance.padding_right'");
  tokens = tokenize(tokens, "'@desktop_appearance.padding_top'");
  tokens = tokenize(tokens, "'@desktop_appearance.padding_bottom'");
  tokens = tokenize(tokens, "'@mobile_appearance.background_image'");
  tokens = tokenize(tokens, "'@mobile_appearance.width'");
  tokens = tokenize(tokens, "'@mobile_appearance.min_height'");
  tokens = tokenize(tokens, "'@mobile_appearance.padding_left'");
  tokens = tokenize(tokens, "'@mobile_appearance.padding_right'");
  tokens = tokenize(tokens, "'@mobile_appearance.padding_top'");
  tokens = tokenize(tokens, "'@mobile_appearance.padding_bottom'");
  var ret = [];

  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];

    if (typeof item === 'string') {
      ret.push(item);
      continue;
    } // remove @''


    var path = item.type.substr(2, item.type.length - 3);
    item.push(op.get(page, path));
  }

  return ret.join('');
}