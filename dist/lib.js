(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["camtem"] = factory();
	else
		root["camtem"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".lib.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpcamtem"] = window["webpackJsonpcamtem"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31c0bf0c5610837c16cbe8985c63fe92.png");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d63eea57fcaecc3583c22a08b162e5b4.png");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31c0bf0c5610837c16cbe8985c63fe92.png");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e3aafb237bd2534bff282e07ad4d79c8.png");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2c7bc1a8494dd6c09e0492d31fb86b36.png");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9407ce24d20ad54b804920920ea95b76.png");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c5a5c285ed08a14d572732de624270c6.png");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7c31b414a653e02925c81fce94d0c3bb.png");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f60f64274863539804a3f00fd6e5d1a0.png");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2b407db4086a17b6e92b5229c2a3c06e.png");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "435fb54964c8efca8254c931da558f92.png");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2ddf13b18c2ffe2791cd8360539fae20.png");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1c58834ef4b0e123a421943d0a8317d4.png");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6e2da1b12914fb8251b56334afee3991.png");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "313054aa0e19cd5b50bfa3be37a64db5.png");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "548910bdeb0b46dd98ab0f9e4eeffc08.png");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1284260a9c92fbf19100c5183ea6c271.png");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if ( true && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function(){
  'use strict';

  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if(obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (typeof value !== 'string') {
        for (var i in value) {
            if (hasOwnProperty(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  var isArray = Array.isArray || function(obj){
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function factory(options) {
    options = options || {}

    var objectPath = function(obj) {
      return Object.keys(objectPath).reduce(function(proxy, prop) {
        if(prop === 'create') {
          return proxy;
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }

        return proxy;
      }, {});
    };

    function hasShallowProperty(obj, prop) {
      return (options.includeInheritedProps || (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop))
    }

    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }

    function set(obj, path, value, doNotReplace){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if(typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }

      if (!path || path.length === 0) {
        return !!obj;
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);

        if((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }

      return true;
    };

    objectPath.ensureExists = function (obj, path, value){
      return set(obj, path, value, true);
    };

    objectPath.set = function (obj, path, value, doNotReplace){
      return set(obj, path, value, doNotReplace);
    };

    objectPath.insert = function (obj, path, value, at){
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };

    objectPath.empty = function(obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }

      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };

    objectPath.push = function (obj, path /*, values */){
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }

      return defaultValue;
    };

    objectPath.get = function (obj, path, defaultValue){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }

      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue;
      }

      if (path.length === 1) {
        return nextObj;
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };

    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }

      if (obj == null) {
        return obj;
      }

      if (isEmpty(path)) {
        return obj;
      }
      if(typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }

      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }

      if(path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }

      return obj;
    }

    return objectPath;
  }

  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod;
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bg10.png": 20,
	"./bg12.png": 21,
	"./bg13.png": 22,
	"./bg14.png": 23,
	"./bg15.png": 24,
	"./bg16.png": 25,
	"./bg5_mobile.png": 2,
	"./bg7.png": 26,
	"./bg7_mobile.png": 27,
	"./bg8.png": 28,
	"./icon-send.png": 29,
	"./tempalate18_mobile.png": 30,
	"./template1.png": 31,
	"./template10.png": 32,
	"./template11.png": 33,
	"./template117.png": 34,
	"./template12.png": 35,
	"./template12_mobile.png": 36,
	"./template13.png": 37,
	"./template13_mobile.png": 38,
	"./template14.png": 39,
	"./template14_mobile.png": 40,
	"./template15.png": 41,
	"./template15_desktop.png": 42,
	"./template16.png": 43,
	"./template16_mobile.png": 44,
	"./template17.png": 45,
	"./template17_mobile.png": 46,
	"./template18.png": 47,
	"./template18_mobile.png": 12,
	"./template19.png": 48,
	"./template19_mobile.png": 14,
	"./template2.png": 49,
	"./template20.png": 50,
	"./template202009021.png": 51,
	"./template202009022.png": 52,
	"./template20_mobile.png": 53,
	"./template21.png": 54,
	"./template21_mobile.png": 4,
	"./template22.png": 55,
	"./template22_mobile.png": 5,
	"./template23.png": 56,
	"./template23_mobile.png": 6,
	"./template24.png": 57,
	"./template24_mobile.png": 7,
	"./template25.png": 58,
	"./template26.png": 59,
	"./template26_mobile.png": 11,
	"./template27.png": 60,
	"./template27_mobile.png": 13,
	"./template28.png": 61,
	"./template28_mobile.png": 15,
	"./template29.png": 62,
	"./template29_mobile.png": 1,
	"./template3.png": 63,
	"./template30.png": 64,
	"./template30_mobile.png": 16,
	"./template39.png": 65,
	"./template39_mobile.png": 0,
	"./template4.png": 66,
	"./template5.png": 67,
	"./template6.png": 68,
	"./template6_mobile.png": 3,
	"./template9.png": 69,
	"./templateThanks.png": 70,
	"./templateu23.png": 71,
	"./templateu23_mobile.png": 10,
	"./tet20201.png": 72,
	"./tet20201_mobile.png": 8,
	"./tet20202.png": 73,
	"./tet20202_mobile.png": 9,
	"./tet20203.png": 74,
	"./tet20204.png": 75,
	"./tet20204_mobile.png": 76
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 19;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4a242b0bd116f719bd1cb726beafc0bf.png");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7297b699a494aa6aece5a303808a6145.png");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f7d8660b52be191469d54275db88b67f.png");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2c6d582182a7e02919ea9967ebdc7c24.png");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "271a5028a668925e86e8204ed3c2a1d3.png");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ba91da1846478d5f5a50148c631e1c41.png");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "196cb2e1b830f8b05ac832c4bc7c7ff6.png");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "04bfc762ff4c224d2268d278a7792d45.png");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9335eadee8e8c04f3fac0afa080387c5.png");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3540448324fb910595612f8a706595e1.png");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "46ffeadada544ef38b682c8f8a122160.png");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a619284ec90fbd3ecdda4d3099da3163.png");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4a242b0bd116f719bd1cb726beafc0bf.png");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bfe7cc1032fd1bb3f305e62bf3fab714.png");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "295f9a71c4b1aad6cb01b7ba1f5339ff.png");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "05a30b152cac32dd01837aab2af5c8a7.png");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c5788e70b7271bad074487ee0f31133d.png");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d0370b6507016e62d0515566544310f4.png");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9c905ba7c1c810c12ce06abc53f726f7.png");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d6bdeff1d029ad4667bfb7adc3bf83c9.png");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "985c923ca52168bd3c69502ae98d0c95.png");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a1c39aab7c781873c14d372b1f14435b.png");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "418b64822b926b6e6c1c7ae040099101.png");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6a268eb7dfcd932630ceaed8ed3925ab.png");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2776b33cd73c0eddf033922172f507da.png");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ec1478dcee95a00fb9e371c68ec74e7b.png");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "87fe2a1d2fecb81bb64be30b343afb92.png");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d7073fc231063cead9b78f521d141271.png");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cd3765dfa3ececdae7a836803bb950c2.png");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d8d45fde64ba5739c3f9115707c2ea58.png");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b481c694d1c2094145b4373f65ead91b.png");

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "22b2a3393d704058092713068f4586d1.png");

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8d998e7df5cc8cf33eed11688cfe070b.png");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "167ba0fb95f18242247121d6501c47e5.png");

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "79f683f2d109beb3660244b278768c72.png");

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7e08ff89ac4011ab5c7dcdc7a4c2c860.png");

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d143d0641280775fe80068daccba0e60.png");

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "94234b4ffc89701ed1c903bd1b2cc003.png");

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f2eac2ad13408cba60e210c8e1eaf806.png");

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b84929df6efdd83bedfe6ef1d66cad14.png");

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2f9e2708cb4dce57dda89177a99a294a.png");

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "85162dade621570a4514e7375ad91ea9.png");

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "679392846e57f3018dbf7230eacc306a.png");

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1f26fd2971fcc07bc7705883d708de1c.png");

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cd19a774ed1f2e83b21df3e20b1d9976.png");

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ec1478dcee95a00fb9e371c68ec74e7b.png");

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "482ee116be1034d7070d63117356df3d.png");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ec1478dcee95a00fb9e371c68ec74e7b.png");

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bb86f37bde7a9833761ca0c3737158be.png");

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "59424ba8937dcf0407eaee4e2e4bd407.png");

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d7073fc231063cead9b78f521d141271.png");

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a687b60f8a3d9dc3bd2274c70e8081f8.png");

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8601f46a6527430643b506db513997b6.png");

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "47e5ec883d2c1e275c9f25f785ff94cc.png");

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d8876b33be90b82dd828bedd8fc32fec.png");

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11af649dc3253794d7bca54a091fa49a.png");

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f95a97fc5b50972af3dbc51bcd957e73.png");

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/preact/dist/preact.module.js
var n,l,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function v(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return h(n,f,i,t,null)}function h(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),null!=n.vnode&&n.vnode(r),r}function y(){return{current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?_(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!m.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(m)}function m(){for(var n;m.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=i,t=T(f,o,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==r?_(o):r),$(u,o),t!=r&&w(o)))})}function g(n,l,u,i,t,o,r,c,s,v){var y,d,w,k,m,g,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=r?r[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(k=u.__k[y]=null==(k=l[y])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?h(null,k,null,null,k):Array.isArray(k)?h(p,{children:k},null,null,null):null!=k.__e||null!=k.__c?h(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(w=A[y])||w&&k.key==w.key&&k.type===w.type)A[y]=void 0;else for(d=0;d<P;d++){if((w=A[d])&&k.key==w.key&&k.type===w.type){A[d]=void 0;break}w=null}m=T(n,k,w=w||f,t,o,r,c,s,v),(d=k.ref)&&w.ref!=d&&(b||(b=[]),w.ref&&b.push(w.ref,null,k),b.push(d,k.__c||m,k)),null!=m?(null==g&&(g=m),s=x(n,k,w,A,r,m,s),v||"option"!=u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&w.__e==s&&s.parentNode!=n&&(s=_(w))}if(u.__e=g,null!=r&&"function"!=typeof u.type)for(y=r.length;y--;)null!=r[y]&&a(r[y]);for(y=P;y--;)null!=A[y]&&I(A[y],A[y]);if(b)for(y=0;y<b.length;y++)H(b[y],b[++y],b[++y])}function b(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){b(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o,r){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||o!=r||null==o.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(o),f=null;else{for(e=r,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==o)break n;n.insertBefore(o,r),f=r}return void 0!==f?f:o.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px"}function C(n,l,u,i,t){var o,r;if(t&&"className"==l&&(l="class"),"style"===l)if("string"==typeof u)n.style=u;else{if("string"==typeof i&&(n.style=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else"o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),(r=l.toLowerCase())in n&&(l=r),l=l.slice(2),n.l||(n.l={}),n.l[l]=u,u?i||n.addEventListener(l,z,o):n.removeEventListener(l,z,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&"download"!==l&&"href"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u))}function z(l){this.l[l.type](n.event?n.event(l):l)}function N(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&N(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)))}function T(l,u,i,t,o,r,f,e,c){var a,v,h,y,_,w,k,m,b,x,A,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(m=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(m,x):(u.__c=v=new d(m,x),v.constructor=P,v.render=L),b&&b.sub(v),v.props=m,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(m,v.__s))),y=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(m,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(m,v.__s,x)||u.__v===i.__v){v.props=m,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),N(u,e,l);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(m,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,_,w)})}v.context=x,v.props=m,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,g(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){u.__v=null,n.__e(l,u,i)}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,r,c){var s,a,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,c=!1}if(null===l.type)p!==d&&n.data!==d&&(n.data=d);else{if(null!=o&&(o=e.slice.call(n.childNodes)),v=(p=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""))}A(n,d,p,t,c),h?l.__k=[]:(s=l.props.children,g(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,o,r,f,c)),c||("value"in d&&void 0!==(s=d.value)&&s!==n.value&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1))}return n}function H(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function I(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||H(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&I(t[r],u,i);null!=o&&a(o)}function L(n,l,u){return this.constructor(n,u)}function M(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=v(p,null,[l]),c=[],T(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),$(c,l)}function O(n,l){M(n,l,o)}function S(n,l,u){var i,t,o,r=arguments,f=s({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),h(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n,u,i){return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return k(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,o=f,r=0;
//# sourceMappingURL=preact.module.js.map

// CONCATENATED MODULE: ./components/Form.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Form_JForm = /*#__PURE__*/function (_Component) {
  _inherits(JForm, _Component);

  var _super = _createSuper(JForm);

  function JForm() {
    _classCallCheck(this, JForm);

    return _super.apply(this, arguments);
  }

  _createClass(JForm, [{
    key: "renderSingleChoiceList",
    value: function renderSingleChoiceList(h, field) {
      var _this = this;

      if (field.type !== 'list' || field.multiple_choice) return null;
      var $items = field.list.map(function (item) {
        return h("div", {
          "class": "radio"
        }, h("input", {
          type: "radio",
          id: field.key + item,
          name: field.key,
          value: item,
          onChange: function onChange(ev) {
            return _this.onRadioChange(ev, field, item);
          }
        }), h("label", {
          "class": "radio--label",
          "for": field.key + item
        }, item), h("div", {
          "class": "radio--check"
        }, h("div", {
          "class": "inside"
        })));
      });
      return h("div", {
        "class": "form--list-container"
      }, $items);
    }
  }, {
    key: "renderMultipleChoiceList",
    value: function renderMultipleChoiceList(h, field) {
      var _this2 = this;

      if (field.type !== 'list' || !field.multiple_choice) return null;
      var $items = field.list.map(function (item) {
        return h("div", {
          "class": "form-check"
        }, h("input", {
          "class": "form-check-input",
          type: "checkbox",
          id: field.key + item,
          onChange: function onChange(ev) {
            return _this2.onCheckboxChange(ev, field, item);
          },
          checked: contains(field, item)
        }), h("label", {
          "class": "form-check-label",
          "for": field.key + item
        }, item));
      });
      return h("div", {
        "class": "form--list-container"
      }, $items);
    }
  }, {
    key: "renderDatetime",
    value: function renderDatetime(h, field) {
      var _this3 = this;

      if (field.type !== 'datetime') return null;
      return h("input", {
        type: "date",
        "class": "form-control",
        onChange: function onChange(ev) {
          return _this3.onDatetimeFieldChange(ev, field);
        },
        value: this.toDate(field.value)
      });
    }
  }, {
    key: "toDate",
    value: function toDate(v) {
      return new Date(parseJSON(v)).toLocaleDateString('en-CA');
    }
  }, {
    key: "renderEmail",
    value: function renderEmail(h, field) {
      var _this4 = this;

      if (field.type !== 'text' || field.subtype !== 'email') return null;
      var cls = 'text-input f ';

      if (this.props.pressedSubmit && field.is_required && isEmpty(field.value)) {
        cls += 'text-input--error';
      }

      return h("input", {
        type: "email",
        "class": cls,
        value: parseJSON(field.value) || '',
        placeholder: field.placeholder,
        onChange: function onChange(ev) {
          return _this4.onTextFieldChange(ev, field);
        }
      });
    }
  }, {
    key: "renderMultiLineText",
    value: function renderMultiLineText(h, field) {
      var _this5 = this;

      if (field.type !== 'text' || !field.multiline_text || field.subtype === 'email') return null;
      var cls = 'textarea';

      if (this.props.pressedSubmit && field.is_required && isEmpty(field.value)) {
        cls += ' textarea--error';
      }

      return h("textarea", {
        "class": cls,
        placeholder: field.placeholder,
        onChange: function onChange(ev) {
          return _this5.onTextFieldChange(ev, field);
        },
        value: parseJSON(field.value) || ''
      });
    }
  }, {
    key: "renderSingleLineText",
    value: function renderSingleLineText(h, field) {
      var _this6 = this;

      if (field.type !== 'text' || field.multiline_text || field.subtype === 'email') return null;
      var cls = 'text-input';

      if (this.props.pressedSubmit && field.is_required && isEmpty(field.value)) {
        cls += ' text-input--error';
      }

      return h("input", {
        type: "text",
        "class": cls,
        value: parseJSON(field.value) || '',
        placeholder: field.placeholder,
        onChange: function onChange(ev) {
          return _this6.onTextFieldChange(ev, field);
        }
      });
    }
  }, {
    key: "renderNumber",
    value: function renderNumber(h, field) {
      var _this7 = this;

      if (field.type !== 'number') return;
      var cls = 'text-input';

      if (this.props.pressedSubmit && field.is_required && isEmpty(field.value)) {
        cls += ' text-input--error';
      }

      return h("input", {
        type: "number",
        "class": cls,
        value: parseJSON(field.value) || 0,
        placeholder: field.placeholder,
        onChange: function onChange(ev) {
          return _this7.onTextFieldChange(ev, field);
        }
      });
    }
  }, {
    key: "renderBoolean",
    value: function renderBoolean(h, field) {
      var _this8 = this;

      if (field.type !== 'boolean') return null;
      return h("div", {
        "class": "form-check"
      }, h("input", {
        "class": "form-check-input",
        type: "checkbox",
        id: 'f_bool_' + field.key,
        onChange: function onChange(ev) {
          return _this8.onBooleanFieldChange(ev, field);
        },
        checked: field.value
      }), h("label", {
        "class": "form-check-label",
        "for": 'f_bool_' + field.key
      }, field.label));
    }
  }, {
    key: "onRadioChange",
    value: function onRadioChange(ev, field, item) {
      var v = [];
      if (ev.target.checked) v = [item];
      field.value = JSON.stringify(v);
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(ev, field, item) {
      var v = [];

      try {
        v = JSON.parse(field.value);
      } catch (e) {}

      if (!Array.isArray(v)) v = [];

      if (ev.target.checked) {
        if (!v.includes(item)) v.push(item);
      } else {
        v = v.filter(function (i) {
          return i !== item;
        });
      }

      field.value = JSON.stringify(v);
    }
  }, {
    key: "onTextFieldChange",
    value: function onTextFieldChange(ev, field) {
      field.value = JSON.stringify(ev.target.value);
    }
  }, {
    key: "onBooleanFieldChange",
    value: function onBooleanFieldChange(ev, field) {
      field.value = JSON.stringify(ev.target.checked);
    }
  }, {
    key: "onDatetimeFieldChange",
    value: function onDatetimeFieldChange(ev, field) {
      field.value = JSON.stringify(new Date(ev.target.value).toISOString());
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var showForm = this.props.form && this.props.form.enabled && this.props.form.fields && this.props.form.fields.length > 0;
      if (!showForm) return null;
      var fields = this.props.form.fields || [];
      var $fields = fields.map(function (field) {
        return v("div", {
          "class": "form-field"
        }, v("label", {
          "class": "label"
        }, field.label + ':'), _this9.renderMultipleChoiceList(v, field), _this9.renderSingleChoiceList(v, field), _this9.renderEmail(v, field), _this9.renderMultiLineText(v, field), _this9.renderSingleLineText(v, field), _this9.renderNumber(v, field), _this9.renderBoolean(v, field));
      });
      return v("div", {
        "class": "form",
        onClick: function onClick(_) {
          return _this9.props.onClick('form');
        }
      }, $fields);
    }
  }]);

  return JForm;
}(d);



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
// CONCATENATED MODULE: ./components/CloseButton.js
function CloseButton_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CloseButton_typeof = function _typeof(obj) { return typeof obj; }; } else { CloseButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CloseButton_typeof(obj); }

function CloseButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CloseButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CloseButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) CloseButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) CloseButton_defineProperties(Constructor, staticProps); return Constructor; }

function CloseButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CloseButton_setPrototypeOf(subClass, superClass); }

function CloseButton_setPrototypeOf(o, p) { CloseButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CloseButton_setPrototypeOf(o, p); }

function CloseButton_createSuper(Derived) { var hasNativeReflectConstruct = CloseButton_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CloseButton_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CloseButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CloseButton_possibleConstructorReturn(this, result); }; }

function CloseButton_possibleConstructorReturn(self, call) { if (call && (CloseButton_typeof(call) === "object" || typeof call === "function")) { return call; } return CloseButton_assertThisInitialized(self); }

function CloseButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CloseButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function CloseButton_getPrototypeOf(o) { CloseButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CloseButton_getPrototypeOf(o); }



var CloseButton_CloseButton = /*#__PURE__*/function (_Component) {
  CloseButton_inherits(CloseButton, _Component);

  var _super = CloseButton_createSuper(CloseButton);

  function CloseButton() {
    CloseButton_classCallCheck(this, CloseButton);

    return _super.apply(this, arguments);
  }

  CloseButton_createClass(CloseButton, [{
    key: "render",
    value: function render() {
      var _this = this;

      return v("div", {
        "class": "btn_close btn",
        onClick: function onClick(e) {
          return _this.props.onClick(e);
        }
      }, v("svg", {
        "class": "btn_close__icon",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "#fff",
        stroke: "#fff",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, v("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18",
        style: "stroke-width: 2 !important;"
      }), v("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18",
        style: "stroke-width: 2 !important;"
      })));
    }
  }]);

  return CloseButton;
}(d);


// CONCATENATED MODULE: ./templates/meta.js
var _desktop_appearance, _desktop_appearance2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var meta = {
  templateThanks: {
    css: function css() {
      return __webpack_require__.e(/* import() | templateThanks_css */ 35).then(__webpack_require__.t.bind(null, 119, 7));
    },
    type: '2',
    text: {
      name: {
        vi: 'Form cảm ơn ',
        en: 'Form thank you'
      },
      title: {
        vi: 'Cảm ơn bạn!',
        en: 'Thank you!'
      },
      description: {
        vi: 'Chúng tôi đã nhận được yêu cầu liên hệ của bạn và chúng tôi sẽ gọi lại cho bạn vào thời gian bạn đã chọn.',
        en: 'Thanks for contacting us! We’ll get back to you as soon as possible'
      },
      primary_button: {
        vi: 'Hoàn tất',
        en: 'Done'
      },
      secondary_button: {
        vi: 'Đóng',
        en: 'Close'
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#0265ff',
      primary_button_color: 'white',
      secondary_button_background: '#e5e5e5',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_font_family: 'Montserrat',
      title_font_weight: '700',
      title_font_size: '36px',
      description_font_family: 'Muli',
      description_font_size: '16px'
    }
  },
  template1: {
    css: function css() {
      return __webpack_require__.e(/* import() | template1_css */ 12).then(__webpack_require__.t.bind(null, 120, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 1: Hỏi thông tin',
        en: 'Template 1: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'với đơn hàng đầu tiên của bạn',
        en: 'your first order'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#424E58',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_text_transform: 'uppercase',
      title_font_family: 'Yeseva One',
      title_font_size: '48px',
      title_font_weight: 'normal',
      title_font_style: 'normal',
      description_font_weight: 'normal',
      description_font_size: '24px',
      description_font_family: 'Roboto'
    },
    mobile_appearance: {
      title_font_size: '36px',
      description_front_size: '16px'
    }
  },
  template2: {
    css: function css() {
      return __webpack_require__.e(/* import() | template2_css */ 27).then(__webpack_require__.t.bind(null, 121, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 2: Hỏi thông tin',
        en: 'Template 2: Ask information'
      },
      title: {
        vi: 'Đăng ký để nhận ưu đãi đặc biệt',
        en: 'Sign up to get special offer'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: 'Get 20% off your first order. Sign up now!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#FDAD15',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_font_size: '35px',
      title_font_weight: '700',
      title_font_family: 'Montserrat',
      description_font_size: '18px',
      description_font_family: 'Muli',
      input_border_color: '#d9d9d9'
    },
    mobile_appearance: {
      title_font_size: '28px'
    }
  },
  template3: {
    css: function css() {
      return __webpack_require__.e(/* import() | template3_css */ 30).then(__webpack_require__.t.bind(null, 122, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 3: Hỏi thông tin',
        en: 'Template 3: Ask information'
      },
      title: {
        vi: 'Đăng ký để nhận ưu đãi đặc biệt',
        en: 'Sign up to get special offer'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: 'Get 20% off your first order. Sign up now!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: (_desktop_appearance = {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#d12',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_font_size: '16px',
      title_font_family: 'Muli'
    }, _defineProperty(_desktop_appearance, "title_font_size", '28px'), _defineProperty(_desktop_appearance, "title_font_family", 'Montserrat'), _defineProperty(_desktop_appearance, "title_font_weight", '700'), _defineProperty(_desktop_appearance, "input_border_color", '#d9d9d9'), _desktop_appearance),
    mobile_appearance: {
      title_font_size: '16px',
      description_font_size: '28px'
    }
  },
  template4: {
    css: function css() {
      return __webpack_require__.e(/* import() | template4_css */ 31).then(__webpack_require__.t.bind(null, 123, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 4: Hỏi thông tin',
        en: 'Template 4: Ask information'
      },
      title: {
        vi: 'Đăng ký để nhận ưu đãi đặc biệt',
        en: 'Sign up to get special offer'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: 'Get 20% off your first order. Sign up now!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#001984',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_font_size: '25px',
      title_font_family: 'Yeseva One',
      description_font_size: '15px',
      description_font_family: 'Muli',
      input_border_color: '#d9d9d9'
    }
  },
  template5: {
    css: function css() {
      return __webpack_require__.e(/* import() | template5_css */ 32).then(__webpack_require__.t.bind(null, 124, 7));
    },
    type: 'fullscreen',
    text: {
      name: {
        vi: 'Form đăng ký nhận ưu đãi',
        en: 'Sign up offer'
      },
      title: {
        vi: 'Đăng ký để nhận ưu đãi đặc biệt',
        en: 'Sign up to get special offer'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: 'Get 20% off your first order. Sign up now!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: 'white',
      description_color: 'white',
      background: 'white',
      primary_button_background: '#FDAD15',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#000',
      input_background: '#fff',
      title_font_size: '55px',
      title_font_family: 'Muli',
      description_font_size: '24px',
      description_font_family: 'Muli'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(2)["default"] + ')',
      title_font_size: '28px',
      description_font_size: '16px'
    }
  },
  template6: {
    css: function css() {
      return __webpack_require__.e(/* import() | template6_css */ 33).then(__webpack_require__.t.bind(null, 125, 7));
    },
    type: 'fullscreen',
    text: {
      name: {
        vi: 'Form đăng ký nhận ưu đãi',
        en: 'Sign up offer'
      },
      title: {
        vi: 'Đăng ký để nhận ưu đãi đặc biệt',
        en: 'Sign up to get special offer'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: 'Get 20% off your first order. Sign up now!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: '#fff',
      description_color: '#fff',
      background: 'white',
      primary_button_background: '#c89c3e',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_font_family: 'Montserrat',
      title_font_size: '48px',
      title_font_weight: 'bold',
      description_font_size: '18px',
      description_font_family: 'Muli'
    },
    mobile_appearance: {
      title_color: '#fff',
      description_color: '#fff',
      background: 'white',
      background_image: 'url(' + __webpack_require__(3)["default"] + ')',
      primary_button_background: '#dab86a',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#fff',
      input_background: '',
      description_font_size: '14px',
      title_font_size: '28px'
    }
  },
  template9: {
    css: function css() {
      return __webpack_require__.e(/* import() | template9_css */ 34).then(__webpack_require__.t.bind(null, 126, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 5: Xin ý kiến đánh giá',
        en: 'Template 5: Feedback'
      },
      title: {
        vi: 'Bạn có tìm được thứ mình cần?',
        en: 'Did you find what you need?'
      },
      description: {
        vi: 'Chia sẻ cảm nhận của bạn cho chúng tôi bạn sẽ nhận được 10% GIẢM GIÁ.',
        en: 'Share your recent experience and get 10% off your next purchase'
      },
      primary_button: {
        vi: 'Gửi cảm nhận',
        en: 'Send feedback'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#fdad15',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_line_height: '44px',
      title_font_family: 'Montserrat',
      title_font_size: '36px',
      title_font_weight: '700',
      description_font_weight: 'normal',
      description_font_size: '16px',
      description_font_family: 'Muli',
      input_border_color: '#d9d9d9'
    }
  },
  template10: {
    css: function css() {
      return __webpack_require__.e(/* import() | template10_css */ 1).then(__webpack_require__.t.bind(null, 127, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 6: Xin ý kiến đánh giá',
        en: 'Template 6: Feedback'
      },
      title: {
        vi: 'Feedback của bạn rất quan trọng với chúng tôi!',
        en: 'Your feedback is valuable to us!'
      },
      description: {
        vi: 'Oh không! Tại sao bạn lại rời khỏi đây quá sớm như thế?',
        en: 'Oh no! Why do you leave so soon?'
      },
      primary_button: {
        vi: 'Gửi ngay',
        en: 'Send feedback'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#000',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#000',
      input_background: '#fff',
      title_font_size: '16px',
      description_font_size: '28px',
      description_font_weight: 'bold'
    }
  },
  template20: {
    css: function css() {
      return __webpack_require__.e(/* import() | template20_css */ 17).then(__webpack_require__.t.bind(null, 128, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 7: Hỏi thông tin',
        en: 'Template 7: Ask information'
      },
      title: {
        vi: 'Đăng ký ngay để nhận mã giảm gía 15%',
        en: 'Register and get 15% off your next order'
      },
      description: {
        vi: 'Và nhận thông báo về các chương trình khuyến mãi mới nhất của chúng tôi',
        en: 'And never miss out any new promotion'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'white',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(107.32deg, #EE4A9B 0%, #F9A219 100%)',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#000',
      input_background: '',
      title_font_size: '52px',
      title_font_weight: '700',
      title_font_family: 'Roboto',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#5F6369'
    },
    mobile_appearance: {
      title_font_size: '32px'
    }
  },
  template21: {
    css: function css() {
      return __webpack_require__.e(/* import() | template21_css */ 18).then(__webpack_require__.t.bind(null, 129, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 9: Hỏi thông tin',
        en: 'Template 9: Ask information'
      },
      title: {
        vi: 'Đăng ký ngay để nhận mã giảm gía 15%',
        en: 'Register and get 15% off your next order'
      },
      description: {
        vi: 'Và nhận thông báo về các chương trình khuyến mãi mới nhất của chúng tôi',
        en: 'And never miss out any new promotion'
      },
      primary_button: {
        vi: 'Nhận mã giảm giá',
        en: 'Get the coupon code'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: (_desktop_appearance2 = {
      title_color: 'white',
      description_color: 'white',
      background: 'white',
      primary_button_background: 'linear-gradient(109.98deg, #D53938 0%, #FEBD3C 100%);',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#B3C4CC',
      input_color: '#fff',
      input_background: 'none',
      title_font_size: '48px',
      title_line_height: '24px'
    }, _defineProperty(_desktop_appearance2, "title_color", '#5F6369'), _defineProperty(_desktop_appearance2, "description_font_family", 'Roboto'), _defineProperty(_desktop_appearance2, "description_font_size", '24px'), _defineProperty(_desktop_appearance2, "input_border_color", '#ddd'), _desktop_appearance2),
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(4)["default"] + ')',
      description_font_size: '16px'
    }
  },
  template22: {
    css: function css() {
      return __webpack_require__.e(/* import() | template22_css */ 19).then(__webpack_require__.t.bind(null, 130, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 10: Hỏi thông tin',
        en: 'Template 10: Ask information'
      },
      title: {
        vi: 'Săn coupon hot với ưu đãi đến 49%',
        en: 'Get up to 49% off now'
      },
      description: {
        vi: 'Đừng bỏ lỡ cơ hội này',
        en: "Don't miss this change"
      },
      primary_button: {
        vi: 'Săn coupon ngay',
        en: 'Get the coupon'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'white',
      description_color: 'white',
      background: 'white',
      primary_button_background: 'linear-gradient(109.98deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#B3C4CC',
      input_color: '#fff',
      input_background: 'none',
      title_font_size: '56px',
      title_font_weight: '700',
      title_font_family: 'Roboto',
      description_font_size: '24px',
      description_font_family: 'Roboto',
      input_border_color: '#ddd'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(5)["default"] + ')',
      title_font_size: '37px'
    }
  },
  template23: {
    css: function css() {
      return __webpack_require__.e(/* import() | template23_css */ 20).then(__webpack_require__.t.bind(null, 131, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 11: Hỏi thông tin',
        en: 'Template 12: Ask information'
      },
      title: {
        vi: 'Săn coupon hot với ưu đãi đến 49%',
        en: 'Get up to 49% off now'
      },
      description: {
        vi: 'Đừng bỏ lỡ cơ hội này',
        en: "Don't miss this change"
      },
      primary_button: {
        vi: 'Săn coupon ngay',
        en: 'Get the coupon'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'white',
      description_color: 'white',
      background: 'white',
      primary_button_background: 'linear-gradient(109.98deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#B3C4CC',
      input_color: '#fff',
      input_background: 'none',
      input_border_color: '#ddd',
      title_font_size: '48px',
      title_font_weight: '700',
      title_font_family: 'Roboto',
      description_font_family: 'Roboto',
      description_font_size: '24px'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(6)["default"] + ')',
      title_font_size: '37px',
      description_font_size: '24px'
    }
  },
  template24: {
    css: function css() {
      return __webpack_require__.e(/* import() | template24_css */ 21).then(__webpack_require__.t.bind(null, 132, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 12: Hỏi thông tin',
        en: 'Template 12: Ask information'
      },
      title: {
        vi: 'Ưu đãi 15% và miễn phí vận chuyển',
        en: 'Get 15% off and Free shipping'
      },
      description: {
        vi: 'Đăng ký ngay để nhận ưu đãi và thông báo cho các chương trình khuyến mãi tiếp',
        en: 'Register to get the discount and receive notification for next promotions'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#2E052E',
      description_color: '#2E052E',
      background: 'white',
      primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369;',
      input_color: '#996699',
      input_background: 'none',
      title_font_family: 'Yeseva One',
      title_font_size: '48px',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#996699'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(7)["default"] + ')',
      description_font_size: '14px'
    }
  },
  tet20201: {
    css: function css() {
      return __webpack_require__.e(/* import() | tet20201_css */ 37).then(__webpack_require__.t.bind(null, 133, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 13: Chúc mừng năm mới 2020',
        en: 'Template 13: New Year 2020'
      },
      title: {
        vi: 'Happy new year',
        en: 'Happy new year'
      },
      description: {
        vi: '2020',
        en: '2020'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#FAC571',
      description_color: '#FAC571',
      primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369;',
      input_color: '',
      input_background: '',
      title_font_size: '30px',
      title_font_weight: 'bold',
      title_text_transform: 'uppercase',
      description_font_size: '20px'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(8)["default"] + ')'
    }
  },
  tet20202: {
    css: function css() {
      return __webpack_require__.e(/* import() | tet20202_css */ 38).then(__webpack_require__.t.bind(null, 134, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 14: Chúc mừng năm mới 2020',
        en: 'Template 14: New Year 2020'
      },
      title: {
        vi: 'Mừng xuân canh tý',
        en: 'Mừng xuân canh tý'
      },
      description: {
        vi: '2020',
        en: '2020'
      }
    },
    desktop_appearance: {
      title_color: '#FAC571',
      description_color: '#FAC571',
      primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369;',
      input_color: '',
      input_background: '',
      title_font_size: '30px',
      title_font_weight: 'bold',
      title_text_transform: 'uppercase',
      description_font_size: '20px'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(9)["default"] + ')'
    }
  },
  tet20203: {
    css: function css() {
      return __webpack_require__.e(/* import() | template20203_css */ 15).then(__webpack_require__.t.bind(null, 135, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 15: Chúc mừng năm mới 2020',
        en: 'Template 15: New Year 2020'
      },
      title: {
        vi: 'Chúc mừng năm mới',
        en: 'Happy new year'
      },
      description: {
        vi: 'Tết tới tấn tài\nXuân sang đắc lộc\nGia đình hạnh phúc\nVạn sự cát tường',
        en: 'Tết tới tấn tài\nXuân sang đắc lộc\nGia đình hạnh phúc\nVạn sự cát tường'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#FAC571',
      description_color: '#fff',
      background: '#9F0102',
      primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '',
      input_background: '',
      title_font_size: '36px',
      title_font_family: 'Roboto',
      title_font_weight: 'bold',
      description_font_size: '20px',
      description_font_family: 'Roboto'
    }
  },
  tet20204: {
    css: function css() {
      return __webpack_require__.e(/* import() | template20204_css */ 16).then(__webpack_require__.t.bind(null, 136, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 16: Chúc mừng năm mới 2020',
        en: 'Template 16: New Year 2020'
      },
      title: {
        vi: 'Happy new year 2020',
        en: 'Happy new year'
      },
      description: {
        vi: 'Kính chúc khách hàng một năm mới\nAn Khang Thịnh Vượng',
        en: 'Kính chúc khách hàng một năm mới\nAn Khang Thịnh Vượng'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#FDE5AF',
      description_color: '#FCC626',
      background: '#9F0102',
      primary_button_background: 'linear-gradient(109.98deg, #593EF4 0%, #525EE0 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '',
      input_background: '',
      title_font_weight: 'bold',
      title_font_size: '48px',
      description_font_size: '18px'
    },
    mobile_appearance: {
      title_font_size: '26px'
    }
  },
  template11: {
    css: function css() {
      return __webpack_require__.e(/* import() | template11_css */ 3).then(__webpack_require__.t.bind(null, 137, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 17: Hỏi thông tin',
        en: 'Template 17: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'với đơn hàng đầu tiên của bạn',
        en: 'your first order'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(103.5deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_font_size: '48px',
      title_font_style: 'normal',
      title_font_weight: 'normal',
      title_text_transform: 'uppercase',
      title_font_family: 'Yeseva One',
      description_font_weight: 'normal',
      description_font_size: '24px',
      description_font_family: 'Roboto'
    },
    mobile_appearance: {
      title_font_size: '36px',
      description_font_size: '16px'
    }
  },
  template12: {
    css: function css() {
      return __webpack_require__.e(/* import() | template12_css */ 4).then(__webpack_require__.t.bind(null, 138, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 18: Hỏi thông tin',
        en: 'Template 18: Ask information'
      },
      title: {
        vi: 'ƯU ĐÃI 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'dành riêng với bộ sưu tập mới',
        en: 'our new collection'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(103.5deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_font_size: '48px',
      title_text_transform: 'uppercase',
      title_font_family: 'Yeseva One',
      description_font_size: '24px',
      description_font_family: 'Roboto'
    },
    mobile_appearance: {
      title_font_size: '36px',
      description_font_size: '16px'
    }
  },
  template13: {
    css: function css() {
      return __webpack_require__.e(/* import() | template13_css */ 5).then(__webpack_require__.t.bind(null, 139, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 19: Hỏi thông tin',
        en: 'Template 19: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'và miễn phí vận chuyển với tất cả những đơn hàng trị giá trên 500K',
        en: 'and get free worldwide shipping'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: '#f13a86',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_font_family: 'Yeseva One',
      title_text_transform: 'uppercase',
      title_font_size: '56px',
      description_font_size: '24px',
      description_font_family: 'Roboto'
    },
    mobile_appearance: {
      description_font_size: '16px'
    }
  },
  template14: {
    css: function css() {
      return __webpack_require__.e(/* import() | template14_css */ 6).then(__webpack_require__.t.bind(null, 140, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 20: Hỏi thông tin',
        en: 'Template 20: Ask information'
      },
      title: {
        vi: 'ĐĂNG KÝ ĐỂ NHẬN ƯU ĐÃI ĐẶC BIỆT',
        en: '10% OFF'
      },
      description: {
        vi: 'nhận ngay mã giảm giá 50%',
        en: 'and get free worldwide shipping'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'white',
      description_color: 'white',
      background: 'white',
      primary_button_background: 'linear-gradient(103.5deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#ffffff6f',
      input_color: 'white',
      input_background: 'transparent',
      title_font_size: '45px',
      title_font_weight: '700',
      title_font_family: 'Montserrat',
      description_font_size: '30px',
      description_font_family: 'Montserrat',
      input_border_color: '#326767'
    },
    mobile_appearance: {
      title_font_size: '28px',
      description_font_size: '16px'
    }
  },
  template15: {
    css: function css() {
      return __webpack_require__.e(/* import() | template15_css */ 7).then(__webpack_require__.t.bind(null, 141, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 21: Hỏi thông tin',
        en: 'Template 21: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'và miễn phí vận chuyển với tất cả những đơn hàng trị giá trên 500K',
        en: 'and get free worldwide shipping'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#122121',
      description_color: '#244242',
      background: 'white',
      primary_button_background: '#ffba01',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#5f6369',
      input_color: '#326767',
      input_background: 'transparent',
      title_font_size: '56px',
      title_font_weight: 'bold',
      title_font_family: 'Yesava One',
      description_font_weight: 'normal',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#3267673f'
    },
    mobile_appearance: {
      title_font_size: '52px'
    }
  },
  templateu23: {
    css: function css() {
      return __webpack_require__.e(/* import() | templateu23_css */ 36).then(__webpack_require__.t.bind(null, 142, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 21: U23 2019',
        en: 'Template 22: U23 2019'
      },
      title: {
        vi: "Ch\u1EB7ng \u0111\u01B0\u1EDDng m\u1EDBi\nth\xE0nh c\xF4ng m\u1EDBi",
        en: "Ch\u1EB7ng \u0111\u01B0\u1EDDng m\u1EDBi\nth\xE0nh c\xF4ng m\u1EDBi"
      },
      description: {
        vi: 'Đón thêm khách hàng mới cùng subiz new widget',
        en: 'Đón thêm khách hàng mới cùng subiz new widget'
      },
      primary_button: {
        vi: 'Xem ngay',
        en: 'See now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: '#FFC48B',
      description_color: 'white',
      background: '#B41A12',
      primary_button_background: '#FFC48B',
      primary_button_color: '#B41A12',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '',
      input_background: '',
      title_text_transform: 'uppercase',
      title_font_weight: 'bold',
      title_font_family: 'Roboto Condensed',
      title_font_size: '33px',
      description_font_weight: '600',
      description_font_size: '18px',
      description_font_family: 'Muli'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(10)["default"] + ')'
    }
  },
  template16: {
    css: function css() {
      return __webpack_require__.e(/* import() | template16_css */ 8).then(__webpack_require__.t.bind(null, 143, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 23: Hỏi thông tin',
        en: 'Template 23: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'với đơn hàng đầu tiền của bạn',
        en: 'your first order'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(103.5deg, #EE2849 0%, #D65C70 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#5f6369',
      input_color: '#5f6369',
      input_background: 'transparent',
      title_font_size: '40px',
      title_font_weight: 'bold',
      title_font_family: 'Yesana One',
      title_text_transform: 'uppercase',
      description_font_size: '18px',
      description_font_family: 'Muli',
      input_border_color: '#d9d9d9'
    }
  },
  template17: {
    css: function css() {
      return __webpack_require__.e(/* import() | template17_css */ 9).then(__webpack_require__.t.bind(null, 144, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 24: Hỏi thông tin',
        en: 'Template 24: Ask information'
      },
      title: {
        vi: 'Nhận ngay ưu đãi!',
        en: 'Get special offer now!'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Miễn phí vận chuyển nội thành',
        en: '20% off for only one day. Free shipping in the city'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Register now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: '#FDAD15',
      description_color: 'white',
      background: 'white',
      primary_button_background: '#FDAD15',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#fff',
      input_background: '',
      title_font_weight: 'bold',
      title_font_family: 'Roboto Condensed',
      title_text_transform: 'uppercase',
      title_font_size: '42px',
      input_border_color: '#fff'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(0)["default"] + ')'
    }
  },
  template39: {
    css: function css() {
      return __webpack_require__.e(/* import() | template39_css */ 29).then(__webpack_require__.t.bind(null, 145, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 24: Hỏi thông tin',
        en: 'Template 24: Ask information'
      },
      title: {
        vi: 'Nhận ngay ưu đãi!',
        en: 'Get special offer now!'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Miễn phí vận chuyển nội thành',
        en: '20% off for only one day. Free shipping in the city'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Register now'
      },
      secondary_button: {
        vi: 'Bỏ qua',
        en: 'Cancel'
      }
    },
    desktop_appearance: {
      title_color: '#FDAD15',
      description_color: 'white',
      background: 'white',
      primary_button_background: '#FDAD15',
      primary_button_color: 'white',
      secondary_button_background: '#777',
      secondary_button_color: 'white',
      input_color: '#fff',
      input_background: '',
      title_font_weight: 'bold',
      title_font_family: 'Roboto Condensed',
      title_font_size: '42px',
      title_text_transform: 'uppercase',
      input_border_color: '#d9d9d9',
      description_font_size: '18px',
      description_font_weight: 'normal',
      description_font_family: 'Muli'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(0)["default"] + ')',
      description_font_size: '16px',
      title_font_size: '28px'
    }
  },
  template117: {
    css: function css() {
      return __webpack_require__.e(/* import() | template117_css */ 2).then(__webpack_require__.t.bind(null, 146, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 25: Hỏi thông tin',
        en: 'Template 25: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'với đơn hàng đầu tiền của bạn',
        en: 'your first order'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(103.5deg, #593EF4 0%, #525EE0 100%) ',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#5f6369',
      input_color: '#5f6369',
      input_background: 'transparent',
      title_text_transform: 'uppercase',
      title_font_family: 'Yesana One',
      title_font_size: '56px',
      title_font_weight: 'bold',
      description_font_weight: 'normal',
      description_font_size: '18px',
      description_font_family: 'Muli'
    },
    mobile_appearance: {
      title_font_size: '56px'
    }
  },
  template25: {
    css: function css() {
      return __webpack_require__.e(/* import() | template25_css */ 22).then(__webpack_require__.t.bind(null, 147, 7));
    },
    text: {
      name: {
        vi: 'Mẫu 26: Hỏi thông tin',
        en: 'Template 26: Ask information'
      },
      title: {
        vi: 'Nhận giảm giá 20% cho đơn hàng tiếp theo',
        en: 'Get 20% off your next order'
      },
      description: {
        vi: 'Đăng ký ngay để nhận ưu đãi cho đơn hàng tiếp theo',
        en: 'Register to get the discount and receive notification for next promotions'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Register'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#062D29',
      description_color: '#062D29',
      background: 'white',
      primary_button_background: 'linear-gradient(73.97deg, #FF9500 0.21%, #FFBF00 100.21%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#fff',
      input_background: 'none',
      title_font_family: 'Yeseva One',
      title_font_size: '48px',
      description_font_family: 'Roboto',
      description_font_size: '20px',
      input_border_color: '#FFBF00'
    },
    mobile_appearance: {
      title_font_size: '40px',
      description_font_size: '20px'
    }
  },
  template26: {
    css: function css() {
      return __webpack_require__.e(/* import() | template26_css */ 23).then(__webpack_require__.t.bind(null, 148, 7));
    },
    text: {
      name: {
        vi: 'Mẫu 27: Hỏi thông tin',
        en: 'Template 27: Ask information'
      },
      title: {
        vi: 'Ưu đãi 10%',
        en: '10% off'
      },
      description: {
        vi: 'và miễn phí vận chuyển với tất cả các đơn hàng trên giá trị 500k',
        en: 'and get free worldwide shipping'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#D01865',
      description_color: '#000000',
      background: 'white',
      primary_button_background: 'linear-gradient(79.26deg, #E61A6F 0.21%, #F53D8A 100.21%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#000',
      input_background: 'none',
      title_font_family: 'Yeseva One',
      title_font_weight: 'bold',
      title_font_size: '48px',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#5F6369'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(11)["default"] + ')',
      title_font_size: '48px',
      description_font_size: '16px'
    }
  },
  template18: {
    css: function css() {
      return __webpack_require__.e(/* import() | template18_css */ 10).then(__webpack_require__.t.bind(null, 149, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 28: Hỏi thông tin',
        en: 'Template 28: Ask information'
      },
      title: {
        vi: 'ĐĂNG KÝ ĐỂ NHẬN ƯU ĐÃI ĐẶC BIỆT',
        en: '10% OFF'
      },
      description: {
        vi: 'nhận ngay mã giảm giá tới 500K cho đơn hàng đầu tiên',
        en: 'Get up to 100$ off your first order'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(74.1deg, #5E8D81 0.21%, #3FA684 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: 'black',
      input_color: 'black',
      input_background: 'transparent',
      title_font_size: '55px',
      title_font_weight: 'bold',
      title_font_family: 'Yeseva One',
      description_font_weight: 'normal',
      description_font_size: '24px',
      description_font_family: 'Montserrat',
      input_border_color: '#d9d9d9'
    },
    mobile_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(74.1deg, #5E8D81 0.21%, #3FA684 100%)',
      primary_button_color: 'white',
      background_image: 'url(' + __webpack_require__(12)["default"] + ')',
      secondary_button_background: 'transparent',
      secondary_button_color: 'black',
      input_color: 'black',
      input_background: 'transparent',
      title_font_size: '28px',
      description_font_size: '16px'
    }
  },
  template27: {
    css: function css() {
      return __webpack_require__.e(/* import() | template27_css */ 24).then(__webpack_require__.t.bind(null, 150, 7));
    },
    text: {
      name: {
        vi: 'Mẫu 29: Hỏi thông tin',
        en: 'Template 29: Ask information'
      },
      title: {
        vi: 'Giảm 10%',
        en: '10% off'
      },
      description: {
        vi: 'và miễn phí vận chuyển với tất cả các đơn hàng trên giá trị 500k',
        en: 'and get free worldwide shipping'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#D01965',
      description_color: '#000000',
      background: 'white',
      primary_button_background: 'linear-gradient(79.26deg, #E61A6F 0.21%, #F53D8A 100.21%)',
      primary_button_color: 'white',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#000',
      input_background: 'none',
      title_font_weight: 'bold',
      title_font_family: 'Yeseva One',
      title_font_size: '56px',
      description_font_family: 'Roboto',
      description_font_size: '16px',
      input_border_color: '#5F6369'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(13)["default"] + ')',
      title_font_size: '48px'
    }
  },
  template19: {
    css: function css() {
      return __webpack_require__.e(/* import() | template19_css */ 11).then(__webpack_require__.t.bind(null, 151, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 30: Hỏi thông tin',
        en: 'Template 30: Ask information'
      },
      title: {
        vi: 'ƯU ĐÃI 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'Đăng ký ngay và nhận mã giảm giá 10% cho đơn hàng đầu tiên',
        en: 'Regiter now and get 10% OFF your first order'
      },
      primary_button: {
        vi: 'ĐĂNG KÝ NGAY',
        en: 'SIGN UP NOW'
      },
      secondary_button: {
        vi: 'Không, cảm ơn. Tôi sẽ quay lại sau',
        en: "No, thanks. I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: 'black',
      description_color: 'black',
      background: 'white',
      primary_button_background: 'linear-gradient(103.29deg, #D53938 0%, #FEBD3C 100%)',
      primary_button_color: 'white',
      secondary_button_background: 'transparent',
      secondary_button_color: '#777',
      input_color: 'black',
      input_background: 'transparent',
      title_font_family: 'Roboto',
      title_font_weight: '700',
      title_font_size: '38px',
      title_text_transform: 'uppercase',
      description_font_weight: 'normal',
      description_font_size: '20px',
      description_font_family: 'Roboto',
      input_border_color: '#8d8d8d80'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(14)["default"] + ')',
      title_font_size: '30px',
      description_font_size: '16px'
    }
  },
  template28: {
    css: function css() {
      return __webpack_require__.e(/* import() | template28_css */ 25).then(__webpack_require__.t.bind(null, 152, 7));
    },
    text: {
      name: {
        vi: 'Mẫu 31: Hỏi thông tin',
        en: 'Template 31: Ask information'
      },
      title: {
        vi: 'ƯU ĐÃI 10%',
        en: '10% OFF'
      },
      description: {
        vi: 'Đăng ký để nhận ngay mã giảm giá 10%',
        en: 'Sign up to get 10% discount your next order'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Sign up now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#fff',
      description_color: '#fff',
      background: 'white',
      primary_button_background: '#fff',
      primary_button_color: '#111231',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#DADDEF',
      input_background: 'none',
      title_font_family: 'Yeseva One',
      title_text_transform: 'uppercase',
      title_font_size: '48px',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#fff'
    },
    mobile_appearance: {
      title_font_size: '48px',
      background_image: 'url(' + __webpack_require__(15)["default"] + ')'
    }
  },
  template202009021: {
    css: function css() {
      return __webpack_require__.e(/* import() | template202009021_css */ 13).then(__webpack_require__.t.bind(null, 153, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 32: Hỏi thông tin',
        en: 'Template 32: Ask information'
      },
      title: {
        vi: 'Ưu đãi đặc biệt mừng Quốc khánh 2/9',
        en: 'Special offer to celebrate National Day 2/9'
      },
      description: {
        vi: 'Giảm 20% chỉ một ngày duy nhất. Đăng ký ngay để nhận được mã giảm giá!',
        en: '20% off for a single day. Sign up now to receive a discount code!'
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#226C92',
      description_color: '#000',
      background: 'white',
      background_image: 'url(' + __webpack_require__(1)["default"] + ')',
      primary_button_background: '#226C92',
      primary_button_color: '#fff',
      input_color: '#000',
      input_background: 'none',
      title_font_size: '30px',
      title_font_weight: 'bold',
      title_font_family: 'Roboto',
      title_text_transform: 'none',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: 'rgba(0, 0, 0, 0.5)'
    }
  },
  template202009022: {
    css: function css() {
      return __webpack_require__.e(/* import() | template202009022_css */ 14).then(__webpack_require__.t.bind(null, 154, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Bão sale mừng Quốc khánh 2/9',
        en: 'National Day September 2 Sale Storm'
      },
      title: {
        vi: 'Bão sale mừng Quốc khánh 2/9',
        en: 'National Day September 2 Sale Storm'
      },
      description: {
        vi: 'Ưu đãi lớn, quà ngập tràn. Săn ngay các deal giảm giá cực hot của chúng tôi',
        en: 'Big deals, overwhelming gifts. Hunt now for our extremely hot discount deals'
      },
      primary_button: {
        vi: 'Mua Ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#FAC571',
      description_color: '#fff',
      primary_button_background: '#FAC571',
      primary_button_color: '##4B2C02',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369;',
      input_color: '',
      input_background: '',
      title_font_size: '38px',
      title_font_weight: 'bold',
      description_font_size: '16px'
    }
  },
  template29: {
    css: function css() {
      return __webpack_require__.e(/* import() | template29_css */ 26).then(__webpack_require__.t.bind(null, 155, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 32: Hỏi thông tin',
        en: 'Template 32: Ask information'
      },
      title: {
        vi: 'Giảm 25%',
        en: '25% off'
      },
      description: {
        vi: 'Đăng ký để nhận ngay ưu đãi',
        en: 'Sign up to get the promotion code '
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#000',
      description_color: '#000',
      background: 'white',
      primary_button_background: 'linear-gradient(73.97deg, #CC8066 0.21%, #D99F8C 99.94%)',
      primary_button_color: '#fff',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#000',
      input_background: 'none',
      title_font_size: '40px',
      title_font_family: 'Yeseva One',
      title_text_transform: 'uppercase',
      description_font_size: '16px',
      description_font_family: 'Roboto',
      input_border_color: '#5f6369'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(1)["default"] + ')'
    }
  },
  template30: {
    css: function css() {
      return __webpack_require__.e(/* import() | template30_css */ 28).then(__webpack_require__.t.bind(null, 156, 7));
    },
    type: 'modal',
    text: {
      name: {
        vi: 'Mẫu 33: Hỏi thông tin',
        en: 'Template 33: Ask information'
      },
      title: {
        vi: 'Giảm 25%',
        en: '25% off'
      },
      description: {
        vi: 'Đăng ký để nhận ngay ưu đãi',
        en: 'Sign up to get the promotion code '
      },
      primary_button: {
        vi: 'Đăng ký ngay',
        en: 'Shop now'
      },
      secondary_button: {
        vi: 'Không, cảm ơn.Tôi sẽ quay lại sau',
        en: "No, thanks.I'll be back later"
      }
    },
    desktop_appearance: {
      title_color: '#000',
      description_color: '#000',
      background: 'white',
      primary_button_background: 'linear-gradient(73.97deg, #E61A6F 0.21%, #F53D8A 100.21%)',
      primary_button_color: '#fff',
      secondary_button_background: 'unset',
      secondary_button_color: '#5F6369',
      input_color: '#000',
      input_background: 'none',
      title_font_size: '40px',
      title_font_family: 'Yeseva One',
      title_text_transform: 'uppercase',
      input_border_color: '#5f6369',
      description_font_size: '16px',
      description_font_family: 'Roboto'
    },
    mobile_appearance: {
      background_image: 'url(' + __webpack_require__(16)["default"] + ')'
    }
  }
}; // add default js load function for any template dont has custom template

Object.keys(meta).map(function (id) {
  if (meta[id].js) return;
  meta[id].desktop_appearance.background_image = 'url(' + __webpack_require__(19)("./" + id + ".png")["default"] + ')';
  if (!meta[id].desktop_appearance.overlay) meta[id].desktop_appearance.overlay = 'rgba(0,0,0,0.8)';
  if (!meta[id].desktop_appearance.title_text_transform) meta[id].desktop_appearance.title_text_transform = 'none';
  if (!meta[id].desktop_appearance.title_font_family) meta[id].desktop_appearance.title_font_family = 'Roboto';
  if (!meta[id].desktop_appearance.title_font_size) meta[id].desktop_appearance.title_font_size = '30px';
  if (!meta[id].desktop_appearance.title_font_weight) meta[id].desktop_appearance.title_font_weight = 'normal';
  if (!meta[id].desktop_appearance.title_font_style) meta[id].desktop_appearance.title_font_style = 'normal';
  if (!meta[id].desktop_appearance.description_text_transform) meta[id].desktop_appearance.description_text_transform = 'none';
  if (!meta[id].desktop_appearance.description_font_family) meta[id].desktop_appearance.description_font_family = 'Roboto';
  if (!meta[id].desktop_appearance.description_font_size) meta[id].desktop_appearance.description_font_size = '30px';
  if (!meta[id].desktop_appearance.description_font_weight) meta[id].desktop_appearance.description_font_weight = 'normal';
  if (!meta[id].desktop_appearance.description_font_style) meta[id].desktop_appearance.description_font_style = 'normal';
  if (!meta[id].desktop_appearance.input_border_color) meta[id].desktop_appearance.input_border_color = '#000';
});
/* harmony default export */ var templates_meta = (meta);
// CONCATENATED MODULE: ./index.js
function index_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { index_typeof = function _typeof(obj) { return typeof obj; }; } else { index_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return index_typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function index_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function index_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function index_createClass(Constructor, protoProps, staticProps) { if (protoProps) index_defineProperties(Constructor.prototype, protoProps); if (staticProps) index_defineProperties(Constructor, staticProps); return Constructor; }

function index_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) index_setPrototypeOf(subClass, superClass); }

function index_setPrototypeOf(o, p) { index_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return index_setPrototypeOf(o, p); }

function index_createSuper(Derived) { var hasNativeReflectConstruct = index_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = index_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = index_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return index_possibleConstructorReturn(this, result); }; }

function index_possibleConstructorReturn(self, call) { if (call && (index_typeof(call) === "object" || typeof call === "function")) { return call; } return index_assertThisInitialized(self); }

function index_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function index_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function index_getPrototypeOf(o) { index_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return index_getPrototypeOf(o); }





var op = __webpack_require__(18);


var MODE = mobilecheck() ? 'mobile' : 'desktop'; // props: ['mode', 'template', 'page', 'frame', 'select', 'reset'],

var index_Template = /*#__PURE__*/function (_Component) {
  index_inherits(Template, _Component);

  var _super = index_createSuper(Template);

  function Template() {
    index_classCallCheck(this, Template);

    return _super.apply(this, arguments);
  }

  index_createClass(Template, [{
    key: "setClose",
    value: function setClose(close) {
      var _this = this;

      // so only us can scroll
      if (close) {
        this.setState({
          closeAnimation: 'bounceOut'
        });
        setTimeout(function () {
          _this.setState({
            close: true,
            closeAnimation: ''
          });

          document.body.classList.remove('sbz_noscroll');
        }, 400);
      } else {
        this.setState({
          closeAnimation: ''
        });
        document.body.classList.add('sbz_noscroll');
      }
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.props.onClose();
      this.setClose(true);
    }
  }, {
    key: "onSecondaryClick",
    value: function onSecondaryClick() {
      this.props.onClick('secondary_button');
      this.onButtonClick(op.get(this.props.page, 'secondary_button'), 'secondaryButtonClicked');
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(button, ev) {
      var _this2 = this;

      var actions = op.get(button, 'actions') || [];
      var mustfillform = false;

      var _iterator = _createForOfIteratorHelper(actions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var a = _step.value;

          if (a.action === 'converstion' || a.action === 'submit') {
            mustfillform = true;
            this.setState({
              pressedSubmit: true
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (mustfillform && !formFilled(op.get(this.props.page, 'form'))) return;

      var _iterator2 = _createForOfIteratorHelper(actions),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _a = _step2.value;
          if (_a.action === 'close') setTimeout(function () {
            return _this2.onClose();
          }, 200);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "onBackgroundClick",
    value: function onBackgroundClick() {
      this.onButtonClick(op.get(this.props.page, 'background_click'), 'backgroundClicked');
    }
  }, {
    key: "onPrimaryClick",
    value: function onPrimaryClick() {
      this.$emit('clicked', 'primary_button');
      this.onButtonClick(op.get(this.props.page, 'primary_button'), 'primaryButtonClicked');
    }
  }, {
    key: "loadTemplate",
    value: function loadTemplate() {
      var _this3 = this;

      console.log('LOAD 00', this.state.lastTemplate, this.props.template);
      if (this.state.lastTemplate === this.props.template) return;
      this.state.lastTemplate = this.props.template;
      var temp = templates_meta[this.props.template];
      console.log('LOAD 11', temp);
      if (!temp) return;
      setTimeout(function () {
        temp.css().then(function (mod) {
          console.log('LOAD 22', mod["default"]);
          populatePage(_this3.props.template, _this3.props.page, mod["default"]);

          _this3.forceUpdate();
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setClose(false); // auto open when created
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      this.loadTemplate();
      if (this.state.close) return null;
      var $close = v(CloseButton_CloseButton, {
        onClick: function onClick(e) {
          return _this4.onClose(e);
        }
      });
      var $primary = null;
      var primaryBtnCls = 'btn btn--primary';
      if (this.props.select === 'primary_button') primaryBtnCls += ' text__shake';

      if (op.get(this.props.page, 'primary_button.enabled')) {
        $primary = v("button", {
          onClick: this.onPrimaryClick,
          "class": primaryBtnCls
        }, op.get(this.props.page, 'primary_button.text'));
      }

      var $secondary = null;
      var secondaryBtnCls = 'btn btn--secondary';
      if (this.props.select === 'secondary_button') secondaryBtnCls += ' text__shake';

      if (op.get(this.props.page, 'secondary_button.enabled')) {
        $secondary = v("button", {
          onClick: function onClick(e) {
            return _this4.onSecondaryClick(e);
          },
          "class": secondaryBtnCls
        }, op.get(this.props.page, 'secondary_button.text'));
      }

      var $form = v(Form_JForm, {
        onClick: this.onClick,
        form: this.props.page.form,
        pressedSubmit: this.state.pressedSubmit
      });
      var mode = this.props.mode || MODE;
      var cls = 'overlay ';
      if (this.props.frame) cls += ' overlay--' + this.props.frame;
      var animation = 'container ';
      if (this.state.closeAnimation) animation += this.state.closeAnimation;else animation += this.props.page.animation;
      var titlecls = 'title';
      if (this.props.select === 'title') titlecls += ' text__shake';
      var desccls = 'description';
      if (this.props.select === 'description') desccls += ' text__shake';
      return v("div", {
        "class": 'template ' + this.props.template
      }, v("div", {
        "class": mode
      }, v("div", {
        "class": cls,
        onClick: function onClick(e) {
          return _this4.onBackgroundClick(e);
        }
      }, v("div", {
        "class": "notch"
      }, v("div", {
        "class": "notch__camera"
      }), v("div", {
        "class": "notch__audio"
      })), v("div", {
        "class": "browser-bar"
      }, v("div", {
        "class": "button__red"
      }), v("div", {
        "class": "button__yellow"
      }), v("div", {
        "class": "button__green"
      }), v("div", {
        "class": "bar__url"
      })), v("div", {
        "class": animation,
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, $close, v("div", {
        "class": "container__inner"
      }, v("div", {
        "class": "background"
      }), v("div", {
        "class": "content"
      }, v("p", {
        "class": titlecls,
        onClick: function onClick(e) {
          return _this4.props.onClick('title');
        }
      }, this.props.page.title), v("div", {
        "class": "title-separator"
      }), v("p", {
        "class": desccls,
        onClick: function onClick(e) {
          return _this4.props.onClick('description');
        }
      }, this.props.page.description), $form, v("div", {
        "class": "buttons"
      }, $primary, $secondary)))))));
    }
  }]);

  return Template;
}(d);

function merge(a, b) {
  a = a || {};
  b = b || {};
  var c = {};
  var keys = Object.keys(a);

  for (var i = 0; i < keys.length; i++) {
    c[keys[i]] = a[keys[i]];
  }

  keys = Object.keys(b);

  for (var _i = 0; _i < keys.length; _i++) {
    if (b[keys[_i]]) c[keys[_i]] = b[keys[_i]];
  }

  return c;
} // tokenizy(['hello XX andy XX go'], 'XX')
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

    for (var _i2 = 0; _i2 < ts.length; _i2++) {
      out.push(ts[_i2]);
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
  tokens = tokenize(tokens, "'@desktop_appearance.title_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.background'");
  tokens = tokenize(tokens, "'@desktop_appearance.background_image'");
  tokens = tokenize(tokens, "'@desktop_appearance.primary_button_background'");
  tokens = tokenize(tokens, "'@desktop_appearance.primary_button_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.secondary_button_background'");
  tokens = tokenize(tokens, "'@desktop_appearance.secondary_button_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.input_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.input_background'");
  tokens = tokenize(tokens, "'@desktop_appearance.overlay'");
  tokens = tokenize(tokens, "'@desktop_appearance.title_font_family'");
  tokens = tokenize(tokens, "'@desktop_appearance.title_font_size'");
  tokens = tokenize(tokens, "'@desktop_appearance.title_font_style'");
  tokens = tokenize(tokens, "'@desktop_appearance.title_font_weight'");
  tokens = tokenize(tokens, "'@desktop_appearance.title_text_transform'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_font_family'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_font_size'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_font_style'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_font_weight'");
  tokens = tokenize(tokens, "'@desktop_appearance.description_text_transform'");
  tokens = tokenize(tokens, "'@desktop_appearance.input_label_color'");
  tokens = tokenize(tokens, "'@desktop_appearance.input_border_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.background'");
  tokens = tokenize(tokens, "'@mobile_appearance.background_image'");
  tokens = tokenize(tokens, "'@mobile_appearance.primary_button_background'");
  tokens = tokenize(tokens, "'@mobile_appearance.primary_button_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.secondary_button_background'");
  tokens = tokenize(tokens, "'@mobile_appearance.secondary_button_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.input_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.input_background'");
  tokens = tokenize(tokens, "'@mobile_appearance.overlay'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_font_family'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_font_size'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_font_style'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_font_weight'");
  tokens = tokenize(tokens, "'@mobile_appearance.title_text_transform'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_font_family'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_font_size'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_font_style'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_font_weight'");
  tokens = tokenize(tokens, "'@mobile_appearance.description_text_transform'");
  tokens = tokenize(tokens, "'@mobile_appearance.input_label_color'");
  tokens = tokenize(tokens, "'@mobile_appearance.input_border_color'");
  var ret = [];

  for (var i = 0; i < tokens.length; i++) {
    var item = tokens[i];

    if (typeof item === 'string') {
      ret.push(item);
      continue;
    } // remove @''


    var path = item.type.substr(2, item.type.length - 3);
    ret.push(op.get(page, path));
  }

  return ret.join('');
}

function replaceFileUrl(src) {
  if (!src) return '';
  src = src.replace('filev4.subiz.com', 'file-subiz.com');
  src = src.replace('file.subiz.com', 'file-subiz.com');
  src = src.replace('file.mysubiz.com', 'file-subiz.com');
  return src;
}

function formFilled(form) {
  var hasForm = form && form.enabled && form.fields && form.fields.length > 0;
  if (!hasForm) return true;

  for (var i = 0; i < form.fields.length; i++) {
    var field = form.fields[i];
    if (field.is_required && (field.value === undefined || field.value === '')) return false;
  }

  return true;
}

function populatePage(templateid, page, CSS) {
  if (!templateid || !page) return;
  var temp = templates_meta[templateid];
  var desktop_appearance = merge(temp.desktop_appearance, page.desktop_appearance);
  var mobile_appearance = merge(temp.mobile_appearance, page.mobile_appearance); // replace file

  var src = op.get(desktop_appearance, 'background_image', '');
  src = replaceFileUrl(src);
  op.set(desktop_appearance, 'background_image', src);
  src = op.get(desktop_appearance, 'background', '');
  src = replaceFileUrl(src);
  op.set(desktop_appearance, 'background', src);
  src = op.get(mobile_appearance, 'background', '');
  src = replaceFileUrl(src);
  op.set(mobile_appearance, 'background', src);
  src = op.get(mobile_appearance, 'background_image', '');
  src = replaceFileUrl(src);
  op.set(mobile_appearance, 'background_image', src);
  var css = replaceCssVariable(CSS, {
    desktop_appearance: desktop_appearance,
    mobile_appearance: mobile_appearance
  });
  setCssToHead('subiz-template-style-' + templateid, css);
} // tell whether the current device is mobile


function mobilecheck() {
  var a = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
}

function setCssToHead(id, css) {
  var cssStyleDiv = document.querySelector('#' + id);

  if (!cssStyleDiv) {
    cssStyleDiv = document.createElement('style');
    cssStyleDiv.type = 'text/css';
    cssStyleDiv.id = id;
    document.head.appendChild(cssStyleDiv);
  }

  if (cssStyleDiv.styleSheet) {
    // This is required for IE8 and below.
    cssStyleDiv.styleSheet.cssText = css;
  } else {
    cssStyleDiv.innerHTML = '';
    cssStyleDiv.appendChild(document.createTextNode(css));
  }
}

var CampTemp = {
  meta: templates_meta,
  New: function New() {
    // cache
    var my_ele = null; // last element to render

    var my_option = null;
    return {
      reset: function reset() {
        M(v("div", null), my_ele);

        this.forceUpdate();
      },
      forceUpdate: function forceUpdate() {
        return this.render(my_ele, my_option);
      },
      // ele: element to render to
      render: function render(ele, option) {
        if (typeof ele === 'string') ele = document.querySelector(ele);
        if (!ele) return;
        my_ele = ele;
        my_option = option;

        var onclick = option.onClick || function () {
          return true;
        };

        var onclose = option.onClose || function () {
          return true;
        };

        return M(v(index_Template, {
          template: option.template,
          page: option.page,
          select: option.select,
          onClick: onclick,
          onClose: onclose,
          mode: option.mode,
          frame: option.frame
        }), ele);
      }
    };
  }
}; // for debugging only

window.__CamTemp = CampTemp;
/* harmony default export */ var index = __webpack_exports__["default"] = (CampTemp);

/***/ })
/******/ ]);
});