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


/* eslint-disable no-console */

var midPart = $('.mid-part');
var forms = $('.forms');

$('#fileForm').submit(function (event) {
  event.preventDefault();

  var $form = $(this);
  var url = $form.attr('action');

  forms.detach();

  appendSpinnerTo(midPart);

  // source: http://portfolio.planetjon.ca/2014/01/26/submit-file-input-via-ajax-jquery-easy-way/
  var request = $.ajax({
    url: url,
    type: 'POST',
    data: new FormData(this),
    processData: false,
    contentType: false
  });

  request.done(function (data) {
    console.log(data);
    midPart.empty();
    appendPortraitDescriptionTo(midPart, data);
  });

  request.fail(function (data) {
    midPart.empty();
    forms.appendTo(midPart);
    $(input).addClass('is-error');
    $(inputContainer + ' .form-input-hint').remove();
    appendInputHintTo($(inputContainer), data.responseJSON.error);
  });
});

$('#urlForm').submit(function (event) {
  event.preventDefault();

  var $form = $(this);
  var url = $form.attr('action');

  forms.detach();

  appendSpinnerTo(midPart);

  var request = $.post(url, $form.serialize());

  request.done(function (data) {
    console.log(data);
    midPart.empty();
    appendPortraitDescriptionTo(midPart, data);
  });

  request.fail(function (data) {
    midPart.empty();
    forms.appendTo(midPart);
    $('#urlInput').addClass('is-error');
    $('#urlInputContainer .form-input-hint').remove();
    appendInputHintTo($('#urlInputContainer'), data.responseJSON.error);
  });
});

var appendPortraitDescriptionTo = function appendPortraitDescriptionTo(element, data) {
  var text = 'This portrait is clearly of a ' + data.gender + ', ' + data.ethnicity + ' Person';
  var description = $('<p></p>', {
    text: text
  });
  description.appendTo(element);
  var linkBack = $('<a></a>', {
    text: "I'm offended, let me try again."
  });
  linkBack.click(function (e) {
    restoreOriginalForm();
  });
  linkBack.appendTo(element);
};

var appendSpinnerTo = function appendSpinnerTo(element) {
  var spinner = $('<div></div>');
  spinner.addClass('loading');
  spinner.appendTo(element);
};

var appendInputHintTo = function appendInputHintTo(element, text) {
  var inputHint = $('<p></p>', {
    text: text
  });
  inputHint.addClass('form-input-hint');
  inputHint.appendTo(element);
};

var restoreOriginalForm = function restoreOriginalForm() {
  midPart.empty();
  midPart.append(forms);
};

/***/ })
/******/ ]);