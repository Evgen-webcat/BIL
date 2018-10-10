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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app/app.js":
/*!***********************!*\
  !*** ./js/app/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    $('.services').hover(function () {\n        var background = $(this).find('.services_background');\n        var src = background.attr('src');\n\n        $('.services_background').css('opacity', '0');\n        $('.screen_2_content').addClass('hover');\n        $('.screen_2_content').css('background-image', 'url(' + src + ')');\n\n    });\n\n    $('.services').mouseout(function () {\n        $('.services_background').css('opacity', '1');\n        $('.screen_2_content').removeClass('hover');\n        $('.screen_2_content').css('background-image', '');\n    });\n\n    $('.project').hover(function () {\n        var background = $(this).find('.project_background');\n        var src = background.attr('src');\n\n        $('.project_background').css('opacity', '0');\n        $(this).find('.project_content_paragraph').slideDown();\n        $('.projects').css('background-image', 'url(' + src + ')');\n\n    });\n\n    $('.project').mouseout(function () {\n        $('.project_background').css('opacity', '.7');\n        $(this).find('.project_content_paragraph').slideUp();\n        $('.projects').css('background-image', '');\n    });\n\n    if ($(window).width() > 1024) {\n        var src = $('.screen_video_background').data('src');\n        $('.screen_video_background').vide(src);\n    }\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/scroll.js":
/*!**************************!*\
  !*** ./js/app/scroll.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    var screens = $('.screen');\n    var current = 0;\n    var dot = '<a href=\"#\" class=\"dot\"></a>';\n    var number = true;\n\n    for (var i = 0; i < screens.length; i++) {\n        $('.dots').append(dot);\n    };\n\n    $('.dot').eq(0).addClass('active');\n    $('.dots').data('index', '1');\n    if ($(window).width() < 1025) {\n        $('.social_links, .dots, .mouse_img').removeClass('white');\n    }\n\n    $('.dot').click(function () {\n        var index = $(this).index();\n        scrollTo(index);\n    });\n\n    function bindWheel(event) {\n        $(window).bind('mousewheel', function (event) {\n            event.preventDefault();\n            Wheel(event);\n        });\n        $(window).swipe({\n            swipe: function (event, direction) {\n                tuoch(direction);\n            }\n        });\n    };\n\n    function Wheel(event) {\n        if (event.originalEvent.wheelDelta < 0) {\n            if (current !== screens.length - 1) {\n                var next = current + 1;\n                scrollTo(next);\n            }\n        } else {\n            if (current !== 0) {\n                var prev = current - 1;\n                scrollTo(prev);\n            }\n        }\n    };\n\n    function tuoch(direction) {\n        if (direction == 'down') {\n            if (current !== 0) {\n                var prev = current - 1;\n                scrollTo(prev);\n            }\n        } else if (direction == 'up') {\n            if (current !== screens.length - 1) {\n                var next = current + 1;\n                scrollTo(next);\n            }\n        }\n    }\n\n    bindWheel();\n\n    function numberOff() {\n        number = false\n    };\n\n    function scrollTo(screen) {\n        $(window).unbind('mousewheel');\n        $(window).swipe('disable');\n        $('.locker').css('display', 'block');\n        $('.fade').css('opacity', '0');\n        setTimeout(function () {\n            if (current !== screen) {\n                screen_active = $('.screen_active');\n\n                $('.screen_prev_up').removeClass('screen_prev_up');\n                $('.screen_prev_down').removeClass('screen_prev_down');\n                $('.screen_current_up').removeClass('screen_current_up');\n                $('.screen_current_down').removeClass('screen_current_down');\n                $('.dots').css('transform', 'translateY(-' + 40 * screen + 'px)');\n                $('.dot.active').removeClass('active');\n                $('.dot').eq(screen).addClass('active');\n\n                if (current < screen) {\n                    screen_active.addClass('screen_prev_up');\n                    setTimeout(function () {\n                        screen_active.removeClass('screen_active');\n                        screens.eq(screen).addClass('screen_current_up');\n                        screens.eq(screen).addClass('screen_active');\n                    }, 500);\n                } else if (current > screen) {\n                    screen_active.addClass('screen_prev_down');\n                    setTimeout(function () {\n                        screen_active.removeClass('screen_active');\n                        screens.eq(screen).addClass('screen_current_down');\n                        screens.eq(screen).addClass('screen_active');\n                    }, 500);\n                }\n\n                if (screen === 0) {\n                    if ($(window).width() < 1025) {\n                        setTimeout(function () {\n                            $('.social_links, .dots, .mouse_img').removeClass('white');\n                        }, 2000);\n                    } else {\n                        setTimeout(function () {\n                            $('.social_links, .dots, .mouse_img').addClass('white');\n                        }, 2000);\n                    }\n                } else if (screen === 5) {\n                    setTimeout(function () {\n                        $('.social_links, .dots, .mouse_img').removeClass('white');\n                    }, 2000);\n                } else if (screen === 4) {\n                    if ($(window).width() >= 1025) {\n                        $('.social_links').removeClass('white');\n                        $('.dots, .mouse_img').addClass('white');\n                    } else {\n                        $('.social_links').addClass('white');\n                        $('.dots, .mouse_img').addClass('white');\n                    }\n                } else {\n                    $('.social_links, .dots, .mouse_img').addClass('white');\n                }\n\n                if (screen === 2 && number === true) {\n                    setTimeout(function () {\n                        $('.number').spincrement({\n                            thousandSeparator: '',\n                            //                            fade: null,\n                            leeway: 0,\n                            duration: 10000,\n                            easing: '',\n                            complete: numberOff\n                        });\n                    }, 1000);\n                }\n            };\n        }, 500);\n        setTimeout(function () {\n            current = screen;\n            bindWheel();\n            $(window).swipe('enable');\n            $('.fade').css('opacity', '1');\n        }, 2500);\n        setTimeout(function () {\n            $('.locker').css('display', 'none');\n        }, 3000);\n    };\n});\n\n\n//# sourceURL=webpack:///./js/app/scroll.js?");

/***/ }),

/***/ "./js/app/ymaps.js":
/*!*************************!*\
  !*** ./js/app/ymaps.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    var mapBlock = document.getElementById('map');\n\n    if (mapBlock) {\n        ymaps.ready(init);\n        var map,\n            Placemark;\n\n        function init() {\n            map = new ymaps.Map(\"map\", {\n                center: [53.689614, 23.835898],\n                controls: [],\n                zoom: 17\n            });\n\n            map.behaviors.disable('scrollZoom');\n            if ($(this).width() < 1200) {\n                map.behaviors.disable('drag');\n            }\n\n            Placemark = new ymaps.Placemark([53.689614, 23.835898], {\n                hintContent: 'Белинтерлогистик',\n                balloonContent: 'Белинтерлогистик'\n            });\n\n            map.geoObjects.add(Placemark);\n        }\n    }\n});\n\n\n//# sourceURL=webpack:///./js/app/ymaps.js?");

/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi ./js/app/app.js ./js/app/scroll.js ./js/app/ymaps.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\n__webpack_require__(/*! ./js/app/scroll.js */\"./js/app/scroll.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/ymaps.js */\"./js/app/ymaps.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/scroll.js_./js/app/ymaps.js?");

/***/ })

/******/ });
