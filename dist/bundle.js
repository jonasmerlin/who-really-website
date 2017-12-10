/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _greeter = __webpack_require__(1);

var _greeter2 = _interopRequireDefault(_greeter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log($('#urlToUpload')); /* eslint-disable no-console */

console.log((0, _greeter2.default)());

$('#urlButton').click(function (e) {
  e.preventDefault();
  // $.ajax({
  //     type: "POST",
  //     url: 'https://who-really.herokuapp.com/classification/portrait/url',
  //     crossDomain:true,
  //     success: function(data, status, xhr) {
  //         console.log(data);;
  //     }
  // })
  $.post("https://who-really.herokuapp.com/classification/portrait/url", $("#urlForm").serialize()).done(function (data) {
    console.log(data);
  });
  replaceContent();
});

var replaceContent = function replaceContent() {

  var midElement = $('.mid-part').empty(newBody);
  var newBody = $("<div></div>").addClass('loading').on({
    touchstart: function touchstart(event) {
      // Do something
    }
  }).appendTo(midElement);

  setTimeout(function () {
    midElement.empty();
    var newBody = $("<div></div>", {
      text: 'Go to Google!'
    }).on({
      touchstart: function touchstart(event) {
        // Do something
      }
    }).appendTo(midElement).hide().fadeIn("slow");
  }, 2000);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var greeter = function greeter() {
  var greeting = "I'm here, greeting.";
  return greeting;
};

exports.default = greeter;

/***/ })
/******/ ]);