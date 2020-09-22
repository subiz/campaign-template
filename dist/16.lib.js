(window["webpackJsonpcamtem"] = window["webpackJsonpcamtem"] || []).push([[16],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(98);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "59c058b79cf292f627086fc0c9c051ef.svg");

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(78);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(79);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(80);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Inconsolata:wght@300;400;500&family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Signika:wght@300;400;500;600&family=Source+Serif+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Yeseva+One&family=Montserrat&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".sbz_noscroll {\n  overflow: hidden !important;\n}\n#sbz-pop .template.tet20204 {\n  @import \"../node_modules/normalize.css/normalize.css\";\n  /* Handle on hover */\n}\n@keyframes bounceOut {\n  20% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n  50%,\n  55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n  to {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\n#sbz-pop .template.tet20204 .bounceOut {\n  animation-duration: 0.5s !important;\n  animation-name: bounceOut !important;\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n#sbz-pop .template.tet20204 .fadeInDown {\n  animation-name: fadeInDown !important;\n  animation-duration: 0.5s !important;\n}\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n#sbz-pop .template.tet20204 .fadeInUpBig {\n  animation-name: fadeInUpBig !important;\n  animation-duration: 0.5s !important;\n}\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n#sbz-pop .template.tet20204 .fadeInRightBig {\n  animation-name: fadeInRightBig !important;\n  animation-duration: 0.5s !important;\n}\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n#sbz-pop .template.tet20204 .fadeInLeftBig {\n  animation-name: fadeInLeftBig !important;\n  animation-duration: 0.5s !important;\n}\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n#sbz-pop .template.tet20204 .zoomIn {\n  animation-name: zoomIn !important;\n  animation-duration: 0.5s !important;\n}\n@keyframes zoomDownYX {\n  0% {\n    transform: scaleY(1);\n  }\n  50% {\n    transform: scaleY(0.01) scaleZ(1);\n  }\n  100% {\n    transform: scaleY(0.01) scaleX(0) scaleZ(0);\n  }\n}\n#sbz-pop .template.tet20204 .zoomDownYX {\n  animation-duration: 0.5s !important;\n  animation-name: zoomDownYX !important;\n}\n@keyframes zoomUpYX {\n  0% {\n    transform: scaleY(0.01) scaleX(0) scaleZ(0);\n  }\n  50% {\n    transform: scaleY(0.01) scaleZ(1);\n  }\n  100% {\n    transform: scaleY(1);\n  }\n}\n#sbz-pop .template.tet20204 .zoomUpYX {\n  animation-duration: 0.5s !important;\n  animation-name: zoomUpYX !important;\n}\n@keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n  40% {\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n  80% {\n    transform: scale3d(0.97, 0.97, 0.97);\n  }\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n#sbz-pop .template.tet20204 .bounceIn {\n  animation-duration: 0.5s !important;\n  animation-name: bounceIn !important;\n}\n#sbz-pop .template.tet20204 .form-check {\n  min-height: 20px !important;\n  padding-bottom: 10px !important;\n}\n#sbz-pop .template.tet20204 .form-check-input[type='checkbox'] {\n  border-radius: 4px !important;\n  outline: 0 !important;\n  cursor: pointer !important;\n}\n#sbz-pop .template.tet20204 .form-check-input {\n  width: 20px !important;\n  height: 20px !important;\n  margin-top: 0.125em !important;\n  vertical-align: top !important;\n  background-color: #fff !important;\n  border: 1px solid #00000040 !important;\n  appearance: none !important;\n}\n#sbz-pop .template.tet20204 .form-check-label {\n  margin-bottom: 0 !important;\n  cursor: pointer !important;\n  padding-left: 7px !important;\n  color: '@desktop_appearance.input_color' !important;\n  -webkit-text-fill-color: '@desktop_appearance.input_color' !important;\n}\n#sbz-pop .template.tet20204 .mobile .form-check-label {\n  color: '@mobile_appearance.input_color' !important;\n  -webkit-text-fill-color: '@mobile_appearance.input_color' !important;\n}\n#sbz-pop .template.tet20204 .form-check-input:checked[type='checkbox'] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") !important;\n}\n#sbz-pop .template.tet20204 .form-check-input:checked {\n  background: '@desktop_appearance.input_border_color' !important;\n  background-repeat: no-repeat !important;\n  background-position: center center !important;\n  background-size: 1em !important;\n  border-color: '@desktop_appearance.input_border_color' !important;\n}\n#sbz-pop .template.tet20204 .mobile .form-check-input:checked {\n  background: '@mobile_appearance.input_border_color' !important;\n  border-color: '@mobile_appearance.input_border_color' !important;\n}\n#sbz-pop .template.tet20204 ::-webkit-scrollbar {\n  width: 7px !important;\n  height: 7px !important;\n}\n#sbz-pop .template.tet20204 ::-webkit-scrollbar-track {\n  border-radius: 10px !important;\n}\n#sbz-pop .template.tet20204 ::-webkit-scrollbar-thumb {\n  border-radius: 10px !important;\n  background: #d6d6d6 !important;\n}\n#sbz-pop .template.tet20204 ::-webkit-scrollbar-thumb:hover {\n  background: #aaa !important;\n}\n#sbz-pop .template.tet20204 * {\n  padding: 0 !important;\n  margin: 0 !important;\n  box-sizing: border-box !important;\n}\n#sbz-pop .template.tet20204 div {\n  display: block !important;\n}\n#sbz-pop .template.tet20204 input {\n  display: inline-block !important;\n}\n#sbz-pop .template.tet20204 .overlay {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  bottom: 0 !important;\n  right: 0 !important;\n  background: #000c !important;\n  z-index: 20000000000100 !important;\n  overflow: auto !important;\n  display: flex !important;\n}\n#sbz-pop .template.tet20204 .overlay--iphone {\n  border: solid 5px #000000 !important;\n  border-radius: 30px !important;\n}\n#sbz-pop .template.tet20204 .notch {\n  display: none !important;\n}\n#sbz-pop .template.tet20204 .overlay--iphone .notch {\n  position: absolute !important;\n  z-index: 10 !important;\n  top: -5px !important;\n  height: 30px !important;\n  background-color: #000000 !important;\n  border-bottom-left-radius: 30px !important;\n  border-bottom-right-radius: 30px !important;\n  width: 200px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n#sbz-pop .template.tet20204 .notch__camera {\n  position: absolute !important;\n  left: 20px !important;\n  height: 10px !important;\n  width: 10px !important;\n  border-radius: 10px !important;\n  background-color: white !important;\n}\n#sbz-pop .template.tet20204 .notch__audio {\n  height: 10px !important;\n  width: 40% !important;\n  border-radius: 5px !important;\n  background-color: white !important;\n}\n#sbz-pop .template.tet20204 .mobile .overlay {\n  background: '@mobile_appearance.overlay' !important;\n}\n#sbz-pop .template.tet20204 .title {\n  color: '@desktop_appearance.title_color' !important;\n  -webkit-text-fill-color: '@desktop_appearance.title_color' !important;\n  white-space: pre-wrap !important;\n  text-transform: '@desktop_appearance.title_text_transform' !important;\n  font-family: '@desktop_appearance.title_font_family' !important;\n  font-size: '@desktop_appearance.title_font_size' !important;\n  font-style: '@desktop_appearance.title_font_style' !important;\n  font-weight: '@desktop_appearance.title_font_weight' !important;\n}\n#sbz-pop .template.tet20204 .mobile .title {\n  color: '@mobile_appearance.title_color' !important;\n  -webkit-text-fill-color: '@mobile_appearance.title_color' !important;\n  text-transform: '@mobile_appearance.title_text_transform' !important;\n  font-family: '@mobile_appearance.title_font_family' !important;\n  font-size: '@mobile_appearance.title_font_size' !important;\n  font-style: '@mobile_appearance.title_font_style' !important;\n  font-weight: '@mobile_appearance.title_font_weight' !important;\n}\n#sbz-pop .template.tet20204 .description {\n  color: '@desktop_appearance.description_color' !important;\n  -webkit-text-fill-color: '@desktop_appearance.description_color' !important;\n  white-space: pre-wrap !important;\n  text-transform: '@desktop_appearance.description_text_transform' !important;\n  font-family: '@desktop_appearance.description_font_family' !important;\n  font-size: '@desktop_appearance.description_font_size' !important;\n  font-style: '@desktop_appearance.description_font_style' !important;\n  font-weight: '@desktop_appearance.description_font_weight' !important;\n}\n#sbz-pop .template.tet20204 .mobile .description {\n  color: '@mobile_appearance.description_color' !important;\n  -webkit-text-fill-color: '@mobile_appearance.description_color' !important;\n  text-transform: '@mobile_appearance.description_text_transform' !important;\n  font-family: '@mobile_appearance.description_font_family' !important;\n  font-size: '@mobile_appearance.description_font_size' !important;\n  font-style: '@mobile_appearance.description_font_style' !important;\n  font-weight: '@mobile_appearance.description_font_weight' !important;\n}\n#sbz-pop .template.tet20204 .container {\n  background: '@desktop_appearance.background' !important;\n  margin: auto !important;\n  position: relative !important;\n  max-height: 100% !important;\n}\n#sbz-pop .template.tet20204 .mobile .container {\n  background: '@mobile_appearance.background' !important;\n  max-height: unset !important;\n}\n#sbz-pop .template.tet20204 .container__inner {\n  background: '@desktop_appearance.background' !important;\n  width: 100% !important;\n}\n#sbz-pop .template.tet20204 .mobile .container__inner {\n  background: '@mobile_appearance.background' !important;\n}\n#sbz-pop .template.tet20204 .background {\n  background: '@desktop_appearance.background' !important;\n  background-image: '@desktop_appearance.background_image' !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center !important;\n}\n#sbz-pop .template.tet20204 .mobile .background {\n  background: '@mobile_appearance.background' !important;\n  background-image: '@mobile_appearance.background_image' !important;\n}\n#sbz-pop .template.tet20204 .btn.btn_close {\n  z-index: 10 !important;\n  position: absolute !important;\n  right: 10px !important;\n  top: 10px !important;\n  height: 30px !important;\n  width: 30px !important;\n  border-radius: 50% !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  cursor: pointer !important;\n  transition: background-color 0.2s !important;\n}\n#sbz-pop .template.tet20204 .btn.btn_close:hover {\n  transition: background-color 0.2s !important;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n#sbz-pop .template.tet20204 .btn_close__icon {\n  height: 20px !important;\n  width: 20px !important;\n  border: 0px !important;\n  stroke: #fff !important;\n  margin: 5px auto !important;\n}\n#sbz-pop .template.tet20204 .form {\n  overflow: auto !important;\n  padding-left: 30px !important;\n  padding-right: 30px !important;\n  min-height: 100px !important;\n}\n#sbz-pop .template.tet20204 .mobile .form {\n  flex-shrink: 0 !important;\n}\n#sbz-pop .template.tet20204 .buttons {\n  display: flex !important;\n  flex-shrink: 0 !important;\n  padding-left: 30px !important;\n  padding-right: 30px !important;\n  align-items: center !important;\n  justify-content: center !important;\n  margin: unset !important;\n  margin-top: 30px !important;\n  overflow: hidden !important;\n}\n#sbz-pop .template.tet20204 .btn {\n  cursor: pointer !important;\n  outline: 0 !important;\n  font-family: 'Roboto' !important;\n  border: 0px !important;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  border-radius: 5px !important;\n  overflow: hidden !important;\n  text-align: center !important;\n}\n#sbz-pop .template.tet20204 .btn.btn--primary {\n  background: '@desktop_appearance.primary_button_background' !important;\n  color: '@desktop_appearance.primary_button_color' !important;\n  -webkit-text-fill-color: '@desktop_appearance.primary_button_color' !important;\n  padding-left: 22px !important;\n  padding-right: 22px !important;\n  padding-top: 12px !important;\n  padding-bottom: 12px !important;\n}\n#sbz-pop .template.tet20204 .mobile .btn.btn--primary {\n  background: '@mobile_appearance.primary_button_background' !important;\n  color: '@mobile_appearance.primary_button_color' !important;\n  -webkit-text-fill-color: '@mobile_appearance.primary_button_color' !important;\n}\n#sbz-pop .template.tet20204 .btn.btn--secondary {\n  background: '@desktop_appearance.secondary_button_background' !important;\n  color: '@desktop_appearance.secondary_button_color' !important;\n  -webkit-text-fill-color: '@desktop_appearance.secondary_button_color' !important;\n  padding-left: 22px !important;\n  padding-right: 22px !important;\n  padding-top: 12px !important;\n  padding-bottom: 12px !important;\n}\n#sbz-pop .template.tet20204 .mobile .btn.btn--secondary {\n  background: '@mobile_appearance.secondary_button_background' !important;\n  color: '@mobile_appearance.secondary_button_color' !important;\n  -webkit-text-fill-color: '@mobile_appearance.secondary_button_color' !important;\n}\n#sbz-pop .template.tet20204 .form-field {\n  display: flex !important;\n  width: 100% !important;\n  flex-direction: column !important;\n  margin-top: 15px !important;\n}\n#sbz-pop .template.tet20204 .radio {\n  display: block !important;\n  position: relative !important;\n  width: 100% !important;\n  height: 25px !important;\n  margin-top: 5px !important;\n}\n#sbz-pop .template.tet20204 input[type=radio] {\n  position: absolute !important;\n  visibility: hidden !important;\n}\n#sbz-pop .template.tet20204 .radio--label {\n  padding-left: 27px !important;\n  display: block !important;\n  position: relative !important;\n  z-index: 9 !important;\n  cursor: pointer !important;\n  color: '@desktop_appearance.input_color' !important;\n  -webkit-text-fill-color: '@desktop_appearance.input_color' !important;\n}\n#sbz-pop .template.tet20204 .mobile .radio--label {\n  color: '@mobile_appearance.input_color' !important;\n  -webkit-text-fill-color: '@mobile_appearance.input_color' !important;\n}\n#sbz-pop .template.tet20204 .radio--check {\n  display: block !important;\n  position: absolute !important;\n  border: 1px solid #aaa !important;\n  border-radius: 100% !important;\n  height: 20px !important;\n  width: 20px !important;\n  top: 0px !important;\n  left: 0px !important;\n  z-index: 5 !important;\n}\n#sbz-pop .template.tet20204 .radio--check:hover {\n  border: 2px solid #888 !important;\n}\n#sbz-pop .template.tet20204 .radio--check::before {\n  display: block !important;\n  position: absolute !important;\n  content: '' !important;\n  border-radius: 100% !important;\n  height: 12px !important;\n  width: 12px !important;\n  top: 2px !important;\n  left: 2px !important;\n  margin: auto !important;\n}\n#sbz-pop .template.tet20204 input[type=radio]:checked ~ .radio--check {\n  border: 2px solid '@desktop_appearance.input_border_color' !important;\n}\n#sbz-pop .template.tet20204 .mobile input[type=radio]:checked ~ .radio--check {\n  border: 2px solid '@mobile_appearance.input_border_color' !important;\n}\n#sbz-pop .template.tet20204 input[type=radio]:checked ~ .radio--check::before {\n  background-color: '@desktop_appearance.input_border_color' !important;\n}\n#sbz-pop .template.tet20204 .mobile input[type=radio]:checked ~ .radio--check::before {\n  background-color: '@mobile_appearance.input_border_color' !important;\n}\n#sbz-pop .template.tet20204 input {\n  background: '@desktop_appearance.input_background' !important;\n  color: '@desktop_appearance.input_color' !important;\n  -webkit-text-fill-color: '@desktop_appearance.input_color' !important;\n}\n#sbz-pop .template.tet20204 .mobile input {\n  background: '@mobile_appearance.input_background' !important;\n  color: '@mobile_appearance.input_color' !important;\n  -webkit-text-fill-color: '@mobile_appearance.input_color' !important;\n}\n#sbz-pop .template.tet20204 .text-input::placeholder {\n  color: '@desktop_appearance.input_color' !important;\n  -webkit-text-fill-color: '@desktop_appearance.input_color' !important;\n  opacity: 0.5 !important;\n}\n#sbz-pop .template.tet20204 .text-input.text-input--error {\n  border-color: #eb1000 !important;\n}\n#sbz-pop .template.tet20204 .text-input.text-input--error::placeholder {\n  color: #eb1000 !important;\n  -webkit-text-fill-color: #eb1000 !important;\n}\n#sbz-pop .template.tet20204 .textarea.textarea--error {\n  border-color: #eb1000 !important;\n}\n#sbz-pop .template.tet20204 .textarea.text-input--error::placeholder {\n  color: #eb1000 !important;\n  -webkit-text-fill-color: #eb1000 !important;\n}\n#sbz-pop .template.tet20204 .mobile .text-input::placeholder {\n  color: '@mobile_appearance.input_color' !important;\n  -webkit-text-fill-color: '@mobile_appearance.input_color' !important;\n  opacity: 0.3 !important;\n}\n#sbz-pop .template.tet20204 .textarea {\n  margin-top: 5px !important;\n  height: 70px !important;\n  font-size: 14px !important;\n  font-family: 'Roboto' !important;\n  padding-top: 5px !important;\n  padding-left: 8px !important;\n}\n#sbz-pop .template.tet20204 .textarea::placeholder {\n  color: '@desktop_appearance.input_color' !important;\n  -webkit-text-fill-color: '@desktop_appearance.input_color' !important;\n  opacity: 0.5 !important;\n}\n#sbz-pop .template.tet20204 .mobile .textarea::placeholder {\n  color: '@desktop_appearance.input_color' !important;\n  -webkit-text-fill-color: '@desktop_appearance.input_color' !important;\n  opacity: 0.3 !important;\n}\n#sbz-pop .template.tet20204 .form--list-container {\n  margin-top: 15px !important;\n}\n#sbz-pop .template.tet20204 .label {\n  font-family: 'Muli' !important;\n  font-size: 12px !important;\n  color: #000 !important;\n  -webkit-text-fill-color: #000 !important;\n  margin-top: unset !important;\n}\n#sbz-pop .template.tet20204 .text__shake {\n  animation: 2s shake normal forwards !important;\n}\n@keyframes shake {\n  0% {\n    transform: skewX(-15deg);\n  }\n  5% {\n    transform: skewX(15deg);\n  }\n  10% {\n    transform: skewX(-15deg);\n  }\n  15% {\n    transform: skewX(15deg);\n  }\n  20% {\n    transform: skewX(0deg);\n  }\n  100% {\n    transform: skewX(0deg);\n  }\n}\n#sbz-pop .template.tet20204 .container {\n  width: 375px !important;\n  position: relative !important;\n}\n#sbz-pop .template.tet20204 .desktop .container {\n  width: 720px !important;\n}\n#sbz-pop .template.tet20204 .background {\n  height: 667px !important;\n  display: inline-block !important;\n  min-width: 100% !important;\n}\n#sbz-pop .template.tet20204 .title {\n  position: absolute !important;\n  width: 240px !important;\n  left: 400px !important;\n  top: 461px !important;\n  text-align: center !important;\n}\n#sbz-pop .template.tet20204 .mobile .title {\n  top: 500px !important;\n  left: 43px !important;\n}\n#sbz-pop .template.tet20204 .description {\n  line-height: 130% !important;\n  position: absolute !important;\n  left: 0 !important;\n  width: 285px !important;\n  text-align: center !important;\n  top: 578px !important;\n}\n#sbz-pop .template.tet20204 .mobile .description {\n  top: 560px !important;\n}\n#sbz-pop .template.tet20204 .buttons,\n#sbz-pop .template.tet20204 .form {\n  display: none !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ })

}]);