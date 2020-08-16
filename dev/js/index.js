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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/menuResponsive.js":
/*!*********************************************!*\
  !*** ./src/js/components/menuResponsive.js ***!
  \*********************************************/
/*! exports provided: menuResponsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuResponsive\", function() { return menuResponsive; });\nvar menuResponsive = function menuResponsive() {\n  var boton = document.getElementById(\"boton-responsive\");\n  var ver_menu = document.getElementsByClassName(\"menu\")[0];\n  var boton_cursos = document.getElementsByClassName(\"cursos-titulo\")[0];\n  var ver_cursos = document.getElementsByClassName(\"cursos\")[0];\n  var header = document.getElementsByClassName(\"header\")[0];\n\n  var mostrar = function mostrar(elemento, _mostrar, clase) {\n    elemento.addEventListener(\"click\", function () {\n      if (_mostrar.classList.contains(clase)) _mostrar.classList.remove(clase);else _mostrar.classList.add(clase); // mostrar.classList.toogle(clase);\n    });\n  };\n\n  mostrar(boton, ver_menu, \"responsive\");\n  mostrar(boton_cursos, ver_cursos, \"responsive\");\n  mostrar(boton_cursos, header, \"expandido\");\n};\n\n//# sourceURL=webpack:///./src/js/components/menuResponsive.js?");

/***/ }),

/***/ "./src/js/components/scroll.js":
/*!*************************************!*\
  !*** ./src/js/components/scroll.js ***!
  \*************************************/
/*! exports provided: scrollSection, scrollMenu, contenidos, fadeFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollSection\", function() { return scrollSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollMenu\", function() { return scrollMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contenidos\", function() { return contenidos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeFooter\", function() { return fadeFooter; });\nvar ver_menu = document.getElementsByClassName(\"menu\")[0];\nvar ver_cursos = document.getElementsByClassName(\"cursos\")[0];\nvar header = document.getElementsByClassName(\"header\")[0];\nvar scrollMaxMenu = 300;\nvar footer = document.getElementsByClassName(\"footer\")[0];\nvar scrollFooter = screen.height * 0.65; // Fade a medida que scrollea, solo index\n\nvar scrollSection = function scrollSection(section, scroll) {\n  if (window.pageYOffset >= scroll) section.classList.add(\"mostrar\");else section.classList.remove(\"mostrar\");\n}; // Efecto menú fondo oscuro, letras blancas\n\nvar scrollMenu = function scrollMenu() {\n  if (window.pageYOffset >= scrollMaxMenu) {\n    header.classList.add(\"scroll\");\n    ver_menu.classList.add(\"scroll\");\n    ver_cursos.classList.add(\"scroll\");\n  } else {\n    header.classList.remove(\"scroll\");\n    ver_cursos.classList.remove(\"scroll\");\n  } // Incluye fade Footer\n\n}; // Fadein de contenidos, excepto index\n\nvar contenidos = function contenidos(section, tiempo) {\n  setTimeout(function () {\n    section.classList.add(\"mostrar\");\n  }, tiempo);\n};\nvar fadeFooter = function fadeFooter() {\n  scrollSection(footer, scrollFooter);\n};\n\n//# sourceURL=webpack:///./src/js/components/scroll.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scroll */ \"./src/js/components/scroll.js\");\n/* harmony import */ var _components_menuResponsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menuResponsive */ \"./src/js/components/menuResponsive.js\");\n\n\nvar scrollSection1 = 250;\nvar scrollSection2 = screen.height * 0.4;\nvar section1 = document.getElementsByClassName(\"section1\")[0];\nvar section2 = document.getElementsByClassName(\"section2\")[0];\nObject(_components_menuResponsive__WEBPACK_IMPORTED_MODULE_1__[\"menuResponsive\"])();\n\nwindow.onscroll = function () {\n  Object(_components_scroll__WEBPACK_IMPORTED_MODULE_0__[\"scrollMenu\"])();\n  Object(_components_scroll__WEBPACK_IMPORTED_MODULE_0__[\"scrollSection\"])(section1, scrollSection1);\n  Object(_components_scroll__WEBPACK_IMPORTED_MODULE_0__[\"scrollSection\"])(section2, scrollSection2);\n  Object(_components_scroll__WEBPACK_IMPORTED_MODULE_0__[\"fadeFooter\"])();\n};\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });