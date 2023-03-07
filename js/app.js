(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["app"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main_global.scss */ "./src/scss/main_global.scss");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var dev_vendors_dev_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dev_vendors/dev_widget */ "./src/js/dev_vendors/dev_widget.js");
/* harmony import */ var _js_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/App */ "./src/js/App.js");
// scss
 // js





var styles = ['color: #fff', 'background: #cf8e1f'].join(';');
var message = 'Developed by Glivera-team https://glivera-team.com/'; // eslint-disable-next-line no-console

console.info('%c%s', styles, message); // -------------------  dev widget

if (utils_constants__WEBPACK_IMPORTED_MODULE_2__.GLOBAL_VARS.projectDevStatus) {
  (0,dev_vendors_dev_widget__WEBPACK_IMPORTED_MODULE_3__["default"])();
} // -------------------  dev widget###
// -------------------  import sprite_icons svg


function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./src/images/icons/sprite_icons sync recursive \\.svg$")); // -------------------  import sprite_icons svg###
// -------------------  init App

(0,utils__WEBPACK_IMPORTED_MODULE_1__.documentReady)(function () {
  var appInit = new _js_App__WEBPACK_IMPORTED_MODULE_4__["default"]();
}); // -------------------  init App##

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var layout_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! layout/Layout */ "./src/js/layout/Layout.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.$htmlTag = document.querySelector('html');
    this.pageClass = this.$htmlTag.dataset.templateName && this.$htmlTag.dataset.templateName.length > 0 ? this.$htmlTag.dataset.templateName : null;
    this.init = this.init.bind(this);
    this.init();
  }

  _createClass(App, [{
    key: "importPage",
    value: function importPage() {
      if (this.pageClass && this.pageClass !== null) {
        __webpack_require__("./src/js/pages lazy recursive ^\\.\\/.*$")("./".concat(this.pageClass)).then(function (_ref) {
          var pageClass = _ref.default;
          var newPage = new pageClass();
          newPage.init();
        }).catch(function (error) {
          console.error('Failed to load page, check data-template-name at root if correct');
          console.dir(error, error.stack);
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      var initLayout = new layout_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]();
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.pageLoad)(function () {
        document.body.classList.add('body--loaded');
      });
      setTimeout(function () {
        _this.importPage();
      }, 0);
    }
  }]);

  return App;
}();



/***/ }),

/***/ "./src/js/components/Accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/Accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ "./src/js/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Accordion = /*#__PURE__*/function () {
  function Accordion(_ref) {
    var triggers = _ref.triggers,
        activeStateName = _ref.activeStateName,
        closeAllAccordions = _ref.closeAllAccordions;

    _classCallCheck(this, Accordion);

    this.$allTriggers = triggers ? triggers : null; // eslint-disable-line

    this.activeStateName = activeStateName ? activeStateName : this.CLASSNAMES.defaultActiveState; // eslint-disable-line

    this.closeAllAccordions = closeAllAccordions !== undefined ? closeAllAccordions : true;
    this.enabled = true;
    this.init = this.init.bind(this);
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
    this.isEnabled = this.isEnabled.bind(this);
    this.closeAllAccordion = this.closeAllAccordion.bind(this);
    this.openAccordion = this.openAccordion.bind(this);
    this.toggleActiveState = this.toggleActiveState.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  _createClass(Accordion, [{
    key: "CLASSNAMES",
    get: function get() {
      return {
        defaultActiveState: 'accordion__item--active-mod'
      };
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return this.enabled;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.enabled = true;
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var _this = this;

      if (this.isEnabled()) {
        this.$allTriggers.forEach(function ($item) {
          var $parentEl = $item.parentNode;

          if ($parentEl.classList.contains(_this.activeStateName)) {
            var $nextElementSibling = $item.nextElementSibling;
            $nextElementSibling.style.maxHeight = $nextElementSibling.scrollHeight + 'px'; // eslint-disable-line prefer-template
          }
        });
      }
    }
  }, {
    key: "closeAllAccordion",
    value: function closeAllAccordion() {
      var _this2 = this;

      this.$allTriggers.forEach(function ($item) {
        _this2.closeAccordion($item.parentNode, $item.nextElementSibling);
      });
    }
  }, {
    key: "closeAccordion",
    value: function closeAccordion($parentEl, $nextElementSibling) {
      $parentEl.classList.remove(this.activeStateName);
      $nextElementSibling.style.maxHeight = null; // eslint-disable-line no-param-reassign
    }
  }, {
    key: "openAccordion",
    value: function openAccordion($parentEl, $nextElementSibling) {
      var _this3 = this;

      setTimeout(function () {
        if (_this3.closeAllAccordions === true) _this3.closeAllAccordion();
        $parentEl.classList.add(_this3.activeStateName);
        $nextElementSibling.style.maxHeight = $nextElementSibling.scrollHeight + 'px'; // eslint-disable-line
      }, 100);
    }
  }, {
    key: "toggleActiveState",
    value: function toggleActiveState($trigger) {
      if (this.enabled) {
        if (!$trigger) return;
        var $parentEl = $trigger.parentNode;
        var $nextElementSibling = $trigger.nextElementSibling;

        if ($parentEl.classList.contains(this.activeStateName)) {
          this.closeAccordion($parentEl, $nextElementSibling);
        } else {
          this.openAccordion($parentEl, $nextElementSibling);
        }
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;

      if (this.$allTriggers) {
        (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(this.onResize);
        this.$allTriggers.forEach(function ($item) {
          var $parentEl = $item.parentNode;

          if ($parentEl.classList.contains(_this4.activeStateName) && _this4.isEnabled()) {
            var $nextElementSibling = $item.nextElementSibling;

            _this4.openAccordion($parentEl, $nextElementSibling);
          }

          $item.addEventListener('click', function () {
            _this4.toggleActiveState($item);
          });
        });
      }
    }
  }]);

  return Accordion;
}(); // ------------ how init
// copy past this
// import this and if u need fix path
// import Accordion from './components/accordion';
// add it in loadFunc
// const acc = new Accordion({
// 	triggers: document.querySelectorAll('.accordion__item_head'), // eslint-disable-line
// 	activeStateName: 'accordion__item--active-mod' // eslint-disable-line
// }).init();




/***/ }),

/***/ "./src/js/components/Header.js":
/*!*************************************!*\
  !*** ./src/js/components/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Accordion */ "./src/js/components/Accordion.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);

    this.$body = document.body;
    this.$header = document.querySelector(this.SELECTORS.header);
    this.$filters = document.querySelectorAll(this.SELECTORS.filterItem);
    this.$menuTriggers = document.querySelectorAll(".".concat(this.CLASSNAMES.menuTrigger));
    this.openMenuState = false;
    this.isDesktop = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)().windowWidth > _utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint1 - 1;
    this.headerScroll = this.headerScroll.bind(this);
    this.headerResize = this.headerResize.bind(this);
    this.prevFilterIndex = -1;
    this.init = this.init.bind(this);
    this.init();
  }

  _createClass(Header, [{
    key: "SELECTORS",
    get: function get() {
      return {
        header: '.header',
        filterItem: '.filterItem'
      };
    }
  }, {
    key: "CLASSNAMES",
    get: function get() {
      return {
        menuTrigger: 'menuTrigger',
        bodyScrollState: 'body--scroll_state',
        bodyOpenMenuState: 'body--open_menu_state',
        headerScrollState: 'header--scroll_state',
        filterLabelActiveState: 'header_list__link--active_state',
        filterItemActiveState: 'header_menu__body--active_state'
      };
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      if (!this.openMenuState) {
        this.$body.classList.add(this.CLASSNAMES.bodyOpenMenuState);
        this.openMenuState = true;
      } else {
        this.$body.classList.remove(this.CLASSNAMES.bodyOpenMenuState);
        this.openMenuState = false;
      }
    }
  }, {
    key: "headerScroll",
    value: function headerScroll(windowScrollTop) {
      if (windowScrollTop > 10 && !this.$body.classList.contains(this.CLASSNAMES.bodyScrollState)) {
        this.$body.classList.add(this.CLASSNAMES.bodyScrollState);
        this.$header.classList.add(this.CLASSNAMES.headerScrollState);
      }

      if (windowScrollTop <= 10 && this.$body.classList.contains(this.CLASSNAMES.bodyScrollState)) {
        this.$body.classList.remove(this.CLASSNAMES.bodyScrollState);
        this.$header.classList.remove(this.CLASSNAMES.headerScrollState);
      }
    }
  }, {
    key: "filterOpen",
    value: function filterOpen(filterId) {
      var $currentLabels = Array.from(this.$menuTriggers).filter(function ($item) {
        return $item.dataset.filter === filterId;
      });
      var $currentFilter = Array.from(this.$filters).find(function ($item) {
        return $item.dataset.filter === filterId;
      });
      if (!$currentLabels.length || !$currentFilter) return;

      if (this.isDesktop) {
        if (this.openMenuState && this.prevFilterIndex === filterId) {
          this.openMenu();
          this.removeAllActiveStates();
        } else if (this.openMenuState && this.prevFilterIndex !== filterId) {
          this.changeActiveStates($currentLabels, $currentFilter);
          this.prevFilterIndex = filterId;
        } else {
          this.openMenu();
          this.changeActiveStates($currentLabels, $currentFilter);
          this.prevFilterIndex = filterId;
        }
      } else {
        this.changeActiveStates($currentLabels, $currentFilter);
      }
    }
  }, {
    key: "headerResize",
    value: function headerResize() {
      var currentValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)().windowWidth > _utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint1 - 1;

      if (this.isDesktop !== currentValue) {
        this.isDesktop = currentValue;
        if (!this.isDesktop) this.filterOpen('0');
      }
    }
  }, {
    key: "removeClasses",
    value: function removeClasses($array, className) {
      $array.forEach(function (element) {
        element.classList.remove(className);
      });
    }
  }, {
    key: "removeAllActiveStates",
    value: function removeAllActiveStates() {
      this.removeClasses(Array.from(this.$filters), this.CLASSNAMES.filterItemActiveState);
      this.removeClasses(Array.from(this.$menuTriggers), this.CLASSNAMES.filterLabelActiveState);
    }
  }, {
    key: "changeActiveStates",
    value: function changeActiveStates($currentLabels, $currentFilter) {
      var _this = this;

      this.removeAllActiveStates();
      $currentFilter.classList.add(this.CLASSNAMES.filterItemActiveState);
      $currentLabels.forEach(function ($item) {
        return $item.classList.add(_this.CLASSNAMES.filterLabelActiveState);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      if (typeof this.$header !== 'undefined' && this.$header != null) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onWindowScroll)(this.headerScroll);
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(this.headerResize);
        new _Accordion__WEBPACK_IMPORTED_MODULE_2__["default"]({
          triggers: document.querySelectorAll('.accTriger'),
          activeStateName: 'header_menu__item--active_state'
        }).init();
        if (!this.$menuTriggers.length || !this.$filters.length) return;

        if (!this.isDesktop) {
          this.filterOpen('0');
        }

        document.addEventListener('click', function (e) {
          var isMenuTrigger = e.target.closest(".".concat(_this2.CLASSNAMES.menuTrigger));

          if (e.target.classList.contains(_this2.CLASSNAMES.menuTrigger)) {
            e.preventDefault();
          }

          if (isMenuTrigger && isMenuTrigger.dataset.filter) {
            _this2.filterOpen(isMenuTrigger.dataset.filter);
          } else if (isMenuTrigger) {
            _this2.openMenu();
          } else if (!e.target.closest(_this2.SELECTORS.header) && _this2.openMenuState === true) {
            _this2.openMenu();

            if (_this2.isDesktop) _this2.removeAllActiveStates();
          }
        });
      }
    }
  }]);

  return Header;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/js/components/Popup.js":
/*!************************************!*\
  !*** ./src/js/components/Popup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_popup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_popup.scss */ "./src/scss/components/_popup.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Popup = /*#__PURE__*/function () {
  function Popup() {
    _classCallCheck(this, Popup);

    var $btn = document.querySelectorAll(this.selectors.popupOpen);
    var $popup = document.querySelector(this.selectors.popup);
    var $close = document.querySelectorAll(this.selectors.popupClose);
    var $body = document.body;
    var $lockPadding = document.querySelectorAll(this.selectors.lockPadding);
    this.$btn = $btn;
    this.$popup = $popup;
    this.$close = $close;
    this.$lockPadding = $lockPadding;
    this.$body = $body;
  }

  _createClass(Popup, [{
    key: "selectors",
    get: function get() {
      return {
        popupOpen: '.popupOpen',
        popup: '.popupCard',
        popupContent: '.popupCardContent',
        popupClose: '.popupCardClose',
        lockPadding: '.lockPadding'
      };
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      var unlock = true;
      var timeout = 500;

      var bodyLock = function bodyLock() {
        var lockPaddingValue = window.innerWidth - document.body.offsetWidth;

        if (_this.$lockPadding.length > 0) {
          _this.$lockPadding.forEach(function (item) {
            var el = item;
            el.style.paddingRight = "".concat(lockPaddingValue, "px");
          });
        }

        _this.$body.style.paddingRight = "".concat(lockPaddingValue, "px");

        _this.$body.classList.add('body--popup_open');

        unlock = false;
        setTimeout(function () {
          unlock = true;
        }, timeout);
      };

      var bodyUnLock = function bodyUnLock() {
        setTimeout(function () {
          if (_this.$lockPadding.length > 0) {
            _this.$lockPadding.forEach(function (item) {
              var el = item;
              el.style.paddingRight = '0px';
            });
          }

          _this.$body.style.paddingRight = '0px';

          _this.$body.classList.remove('body--popup_open');
        }, timeout);
        unlock = false;
        setTimeout(function () {
          unlock = true;
        }, timeout);
      }; // Закрытие попапа


      function popupClose(popupActive) {
        var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (unlock) {
          popupActive.classList.remove('popup--open');

          if (doUnlock) {
            bodyUnLock();
          }
        }
      } // Закрытие попапа при нажатии Esc


      document.addEventListener('keydown', function (e) {
        if (e.which === 27) {
          var popupActive = document.querySelector('.popup--open');
          popupClose(popupActive);
        }
      }); // Открытие попапа

      var popupOpen = function popupOpen(currentPopup) {
        if (currentPopup && unlock) {
          var popupActive = document.querySelector('.popup--open');

          if (popupActive) {
            popupClose(popupActive, false);
          } else {
            bodyLock();
            currentPopup.classList.add('popup--open');
          } // Закрытие при нажатии на темную область


          currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest(_this.selectors.popupContent)) {
              popupClose(e.target.closest(_this.selectors.popup)); // bodyClass(false);
            }
          });
        }
      };

      if (!this.$btn.length && !this.$popup) return null;
      this.$btn.forEach(function (item) {
        var btnItem = item;
        btnItem.addEventListener('click', function (e) {
          var popupName = btnItem.getAttribute('href').replace('#', '');
          var currentPopup = document.getElementById(popupName);
          popupOpen(currentPopup);
          e.preventDefault();
        });
      });
      if (!this.$close) return null;
      this.$close.forEach(function (item) {
        var closeBtn = item;
        closeBtn.addEventListener('click', function () {
          popupClose(closeBtn.closest(_this.selectors.popup));
        });
      });
      return null;
    }
  }]);

  return Popup;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./src/js/components/ShowPassword.js":
/*!*******************************************!*\
  !*** ./src/js/components/ShowPassword.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ShowPassword = /*#__PURE__*/function () {
  function ShowPassword() {
    _classCallCheck(this, ShowPassword);

    this.$buttons = document.querySelectorAll(this.SELECTOR.button);
  }

  _createClass(ShowPassword, [{
    key: "SELECTOR",
    get: function get() {
      return {
        button: '.btnShowPass'
      };
    }
  }, {
    key: "showPass",
    value: function showPass() {
      if (!this.$buttons.length) return;
      Array.from(this.$buttons).forEach(function ($element) {
        $element.addEventListener('click', function () {
          var inputId = $element.dataset.inputId;
          if (!inputId) return;
          var $input = document.getElementById(inputId);
          if (!$input) return;
          var attrInput = $input.getAttribute('type');

          if (attrInput === 'password') {
            $input.setAttribute('type', 'text');
          } else {
            $input.setAttribute('type', 'password');
          }
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.showPass();
    }
  }]);

  return ShowPassword;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowPassword);

/***/ }),

/***/ "./src/js/dev_vendors/dev_widget.js":
/*!******************************************!*\
  !*** ./src/js/dev_vendors/dev_widget.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-plusplus */
var pageWidget = function pageWidget(pages) {
  var widgetWrap = document.createElement('div');
  widgetWrap.className = 'widget_wrap';
  var widgetList = '';

  for (var i = 0; i < pages.length; i++) {
    widgetList += "<li class=\"widget_item\"><a class=\"widget_link\" href=\"".concat(pages[i], ".html\">").concat(pages[i], "</a></li>");
  }

  widgetWrap.innerHTML = "<ul class=\"widget_list\">".concat(widgetList, "</ul>");
  document.body.appendChild(widgetWrap);
  var widgetStyles = '<style>body {position:relative} .widget_wrap{position:absolute;top:100px;left:0;z-index:9999;padding:10px 20px;background:#222;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:"Navigation menu";color:white;position:absolute;top:0;left:100%;width:auto;height:auto;padding:10px;text-transform:uppercase;background:#222;cursor:pointer}.widget_wrap:hover,.widget_wrap:active,.widget_wrap:focus{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline}  </style>';
  widgetWrap.innerHTML += widgetStyles;
};

var pageWidgetArray = [];
var pagesArray = ["about_us.pug","account_address_courier.pug","account_address_empty.pug","account_address_post.pug","account_info.pug","account_password.pug","account_wishlist.pug","account_wishlist_e.pug","brands.pug","empty_cart.pug","faq.pug","index.pug","products.pug","product_card.pug","registration.pug","shopping_cart.pug","wish_list.pug"];

var pageWidgetInit = function pageWidgetInit() {
  if (typeof pagesArray !== 'undefined' && pagesArray.length > 0) {
    console.log('dev functions loaded');
    pagesArray.forEach(function (page) {
      var pageName = page.split('.').slice(0, -1).join('.');
      pageWidgetArray.push(pageName);
    }); // console.log(pageWidgetArray);

    pageWidget(pageWidgetArray);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageWidgetInit);

/***/ }),

/***/ "./src/js/layout/Layout.js":
/*!*********************************!*\
  !*** ./src/js/layout/Layout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./src/js/components/Header.js");
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Popup */ "./src/js/components/Popup.js");
/* harmony import */ var _components_ShowPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ShowPassword */ "./src/js/components/ShowPassword.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// ------------------- imports

 // ------------------- imports###
// ------------------  import components




 // ------------------  import components###

var Layout = /*#__PURE__*/function () {
  function Layout() {
    _classCallCheck(this, Layout);

    this.init = this.init.bind(this);
    this.init();
  }

  _createClass(Layout, [{
    key: "loadFunc",
    value: function loadFunc() {
      console.log('layout load');
      (0,utils__WEBPACK_IMPORTED_MODULE_1__.calcViewportHeight)();
      var initHeader = new _components_Header__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var popup = new _components_Popup__WEBPACK_IMPORTED_MODULE_3__["default"]().init();
      var showPassword = new _components_ShowPassword__WEBPACK_IMPORTED_MODULE_4__["default"]().init();
    }
  }, {
    key: "init",
    value: function init() {
      (0,utils__WEBPACK_IMPORTED_MODULE_1__.onWindowResize)(function () {
        (0,utils__WEBPACK_IMPORTED_MODULE_1__.calcViewportHeight)();
      });
      this.loadFunc();
    }
  }]);

  return Layout;
}();



/***/ }),

/***/ "./src/js/utils/constants.js":
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLOBAL_VARS": () => (/* binding */ GLOBAL_VARS)
/* harmony export */ });
var GLOBAL_VARS = {
  degree: 0.0174532925,
  mediaPoint1: 1024,
  mediaPoint2: 768,
  mediaPoint3: 480,
  mediaPoint4: 320,
  projectDevStatus: "development" === 'development',
  projectWpBuildStatus: "development" === 'wp',
  // eslint-disable-next-line no-undef
  spritePath:  false ? 0 : 'images/sprite/sprite.svg'
};

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "debounceImmediate": () => (/* binding */ debounceImmediate),
/* harmony export */   "calcViewportHeight": () => (/* binding */ calcViewportHeight),
/* harmony export */   "calcRemValue": () => (/* binding */ calcRemValue),
/* harmony export */   "calcMobileRemValue": () => (/* binding */ calcMobileRemValue),
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "getRandom": () => (/* binding */ getRandom),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isTouchDevice": () => (/* binding */ isTouchDevice),
/* harmony export */   "getWindowSize": () => (/* binding */ getWindowSize),
/* harmony export */   "onWindowResize": () => (/* binding */ onWindowResize),
/* harmony export */   "detectUsersOS": () => (/* binding */ detectUsersOS),
/* harmony export */   "onWindowChangeOrientation": () => (/* binding */ onWindowChangeOrientation),
/* harmony export */   "onWindowScroll": () => (/* binding */ onWindowScroll),
/* harmony export */   "documentReady": () => (/* binding */ documentReady),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var ismobilejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ismobilejs */ "./node_modules/ismobilejs/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/js/utils/constants.js");


function debounce(delay, fn) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(function () {
      fn.apply(void 0, args);
      timerId = null;
    }, delay);
  };
}
function debounceImmediate(delay, fn) {
  var fired = false;
  return function () {
    if (!fired) {
      fn.apply(void 0, arguments);
      fired = true;
      setTimeout(function () {
        fired = false;
      }, delay);
    }
  };
}
var calcViewportHeight = function calcViewportHeight() {
  var isMobileData = (0,ismobilejs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var isApple = isMobileData.apple.phone;
  var isAndroid = isMobileData.android.phone;
  var isSeven = isMobileData.seven_inch;

  if (isApple || isAndroid || isSeven) {
    var vh = window.innerHeight * 0.01; // console.log(vh);

    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
};
var calcRemValue = function calcRemValue(_ref) {
  var windowWidth = _ref.windowWidth,
      windowHeight = _ref.windowHeight;
  var remValue = windowWidth * 0.5625 > windowHeight ? windowHeight / 800 * 10 : windowWidth / 1440 * 10;
  document.documentElement.style.setProperty('--rem', "".concat(remValue, "px"));
};
var calcMobileRemValue = function calcMobileRemValue(_ref2) {
  var windowHeight = _ref2.windowHeight;
  var mobileRemValue = windowHeight / 800 * 10;
  document.documentElement.style.setProperty('--mobile-rem', "".concat(mobileRemValue, "px"));
};
var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var getRandom = function getRandom(min, max) {
  return Math.random() * (max - min) + min;
};
function isFunction(func) {
  return func instanceof Function;
}
var isTouchDevice = function isTouchDevice() {
  return 'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
};
function getWindowSize() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  return {
    windowWidth: windowWidth,
    windowHeight: windowHeight
  };
}
var onWindowResize = function onWindowResize(cb) {
  if (!cb && !isFunction(cb)) return;

  var handleResize = function handleResize() {
    cb();
  };

  window.addEventListener('resize', debounce(15, handleResize));
  handleResize();
};
var detectUsersOS = function detectUsersOS() {
  if (window.navigator.userAgent.indexOf('Win') !== -1) return 'Windows OS';
  if (window.navigator.userAgent.indexOf('Mac') !== -1) return 'Macintosh';
  if (window.navigator.userAgent.indexOf('Linux') !== -1) return 'Linux OS';
  if (window.navigator.userAgent.indexOf('Android') !== -1) return 'Android OS';
  if (window.navigator.userAgent.indexOf('like Mac') !== -1) return 'iOS';
  return null;
};
var onWindowChangeOrientation = function onWindowChangeOrientation(cb) {
  if (!cb && !isFunction(cb) || !isTouchDevice()) return;

  var _getWindowSize = getWindowSize(),
      windowWidth = _getWindowSize.windowWidth;

  var handleResize = function handleResize() {
    var _getWindowSize2 = getWindowSize(),
        newWindowWidth = _getWindowSize2.windowWidth;

    if (windowWidth !== newWindowWidth) cb();
    windowWidth = newWindowWidth;
  };

  window.addEventListener('resize', debounce(100, handleResize));
};
var onWindowScroll = function onWindowScroll(cb) {
  if (!cb && !isFunction(cb)) return;

  var handleScroll = function handleScroll() {
    cb(window.pageYOffset);
  };

  window.addEventListener('scroll', debounce(15, handleScroll));
  handleScroll();
};
var documentReady = function documentReady(cb) {
  if (!cb && !isFunction(cb)) return;
  document.addEventListener('DOMContentLoaded', cb);
};
var pageLoad = function pageLoad(cb) {
  if (!cb && !isFunction(cb)) return;
  window.addEventListener('load', cb);
};

/***/ }),

/***/ "./node_modules/ismobilejs/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ismobilejs/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _isMobile__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMobile */ "./node_modules/ismobilejs/esm/isMobile.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ismobilejs/esm/isMobile.js":
/*!*************************************************!*\
  !*** ./node_modules/ismobilejs/esm/isMobile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMobile)
/* harmony export */ });
var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function (navigator) {
    return (typeof navigator !== 'undefined' &&
        navigator.platform === 'MacIntel' &&
        typeof navigator.maxTouchPoints === 'number' &&
        navigator.maxTouchPoints > 1 &&
        typeof MSStream === 'undefined');
};
function createMatch(userAgent) {
    return function (regex) { return regex.test(userAgent); };
}
function isMobile(param) {
    var nav = {
        userAgent: '',
        platform: '',
        maxTouchPoints: 0
    };
    if (!param && typeof navigator !== 'undefined') {
        nav = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
    }
    else if (typeof param === 'string') {
        nav.userAgent = param;
    }
    else if (param && param.userAgent) {
        nav = {
            userAgent: param.userAgent,
            platform: param.platform,
            maxTouchPoints: param.maxTouchPoints || 0
        };
    }
    var userAgent = nav.userAgent;
    var tmp = userAgent.split('[FBAN');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    tmp = userAgent.split('Twitter');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    var match = createMatch(userAgent);
    var result = {
        apple: {
            phone: match(appleIphone) && !match(windowsPhone),
            ipod: match(appleIpod),
            tablet: !match(appleIphone) &&
                (match(appleTablet) || isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone),
            universal: match(appleUniversal),
            device: (match(appleIphone) ||
                match(appleIpod) ||
                match(appleTablet) ||
                match(appleUniversal) ||
                isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone)
        },
        amazon: {
            phone: match(amazonPhone),
            tablet: !match(amazonPhone) && match(amazonTablet),
            device: match(amazonPhone) || match(amazonTablet)
        },
        android: {
            phone: (!match(windowsPhone) && match(amazonPhone)) ||
                (!match(windowsPhone) && match(androidPhone)),
            tablet: !match(windowsPhone) &&
                !match(amazonPhone) &&
                !match(androidPhone) &&
                (match(amazonTablet) || match(androidTablet)),
            device: (!match(windowsPhone) &&
                (match(amazonPhone) ||
                    match(amazonTablet) ||
                    match(androidPhone) ||
                    match(androidTablet))) ||
                match(/\bokhttp\b/i)
        },
        windows: {
            phone: match(windowsPhone),
            tablet: match(windowsTablet),
            device: match(windowsPhone) || match(windowsTablet)
        },
        other: {
            blackberry: match(otherBlackBerry),
            blackberry10: match(otherBlackBerry10),
            opera: match(otherOpera),
            firefox: match(otherFirefox),
            chrome: match(otherChrome),
            device: match(otherBlackBerry) ||
                match(otherBlackBerry10) ||
                match(otherOpera) ||
                match(otherFirefox) ||
                match(otherChrome)
        },
        any: false,
        phone: false,
        tablet: false
    };
    result.any =
        result.apple.device ||
            result.android.device ||
            result.windows.device ||
            result.other.device;
    result.phone =
        result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet =
        result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}
//# sourceMappingURL=isMobile.js.map

/***/ }),

/***/ "./src/scss/components/_popup.scss":
/*!*****************************************!*\
  !*** ./src/scss/components/_popup.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/main_global.scss":
/*!***********************************!*\
  !*** ./src/scss/main_global.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/icons/sprite_icons/about_decor.svg":
/*!*******************************************************!*\
  !*** ./src/images/icons/sprite_icons/about_decor.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "about_decor-usage",
      viewBox: "0 0 179.8 264.1",
      url: "/images/sprite/" + "sprite.svg#about_decor-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/arrow_icon.svg":
/*!******************************************************!*\
  !*** ./src/images/icons/sprite_icons/arrow_icon.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "arrow_icon-usage",
      viewBox: "0 0 586 426",
      url: "/images/sprite/" + "sprite.svg#arrow_icon-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/arrow_left.svg":
/*!******************************************************!*\
  !*** ./src/images/icons/sprite_icons/arrow_left.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "arrow_left-usage",
      viewBox: "0 0 21.7 14.7",
      url: "/images/sprite/" + "sprite.svg#arrow_left-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/bag.svg":
/*!***********************************************!*\
  !*** ./src/images/icons/sprite_icons/bag.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "bag-usage",
      viewBox: "0 0 431 512",
      url: "/images/sprite/" + "sprite.svg#bag-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/close.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite_icons/close.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "close-usage",
      viewBox: "0 0 22 22",
      url: "/images/sprite/" + "sprite.svg#close-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/eye.svg":
/*!***********************************************!*\
  !*** ./src/images/icons/sprite_icons/eye.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "eye-usage",
      viewBox: "0 0 14 14",
      url: "/images/sprite/" + "sprite.svg#eye-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/heart.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite_icons/heart.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "heart-usage",
      viewBox: "0 0 598 512",
      url: "/images/sprite/" + "sprite.svg#heart-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/icon_change_pass.svg":
/*!************************************************************!*\
  !*** ./src/images/icons/sprite_icons/icon_change_pass.svg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon_change_pass-usage",
      viewBox: "0 0 123 145",
      url: "/images/sprite/" + "sprite.svg#icon_change_pass-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/icon_exit.svg":
/*!*****************************************************!*\
  !*** ./src/images/icons/sprite_icons/icon_exit.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon_exit-usage",
      viewBox: "0 0 89 94",
      url: "/images/sprite/" + "sprite.svg#icon_exit-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/icon_history_of_buying.svg":
/*!******************************************************************!*\
  !*** ./src/images/icons/sprite_icons/icon_history_of_buying.svg ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon_history_of_buying-usage",
      viewBox: "0 0 76 58",
      url: "/images/sprite/" + "sprite.svg#icon_history_of_buying-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/icon_marker.svg":
/*!*******************************************************!*\
  !*** ./src/images/icons/sprite_icons/icon_marker.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon_marker-usage",
      viewBox: "0 0 65 84",
      url: "/images/sprite/" + "sprite.svg#icon_marker-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/iks.svg":
/*!***********************************************!*\
  !*** ./src/images/icons/sprite_icons/iks.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "iks-usage",
      viewBox: "0 0 20.7 20.7",
      url: "/images/sprite/" + "sprite.svg#iks-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/info_decor.svg":
/*!******************************************************!*\
  !*** ./src/images/icons/sprite_icons/info_decor.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "info_decor-usage",
      viewBox: "0 0 246 205",
      url: "/images/sprite/" + "sprite.svg#info_decor-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/slider_arrow.svg":
/*!********************************************************!*\
  !*** ./src/images/icons/sprite_icons/slider_arrow.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "slider_arrow-usage",
      viewBox: "0 0 18 41",
      url: "/images/sprite/" + "sprite.svg#slider_arrow-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/triangle_bottom.svg":
/*!***********************************************************!*\
  !*** ./src/images/icons/sprite_icons/triangle_bottom.svg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "triangle_bottom-usage",
      viewBox: "0 0 6.1 4.5",
      url: "/images/sprite/" + "sprite.svg#triangle_bottom-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/user.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite_icons/user.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "user-usage",
      viewBox: "0 0 455 512",
      url: "/images/sprite/" + "sprite.svg#user-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons sync recursive \\.svg$":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite_icons/ sync \.svg$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./about_decor.svg": "./src/images/icons/sprite_icons/about_decor.svg",
	"./arrow_icon.svg": "./src/images/icons/sprite_icons/arrow_icon.svg",
	"./arrow_left.svg": "./src/images/icons/sprite_icons/arrow_left.svg",
	"./bag.svg": "./src/images/icons/sprite_icons/bag.svg",
	"./close.svg": "./src/images/icons/sprite_icons/close.svg",
	"./eye.svg": "./src/images/icons/sprite_icons/eye.svg",
	"./heart.svg": "./src/images/icons/sprite_icons/heart.svg",
	"./icon_change_pass.svg": "./src/images/icons/sprite_icons/icon_change_pass.svg",
	"./icon_exit.svg": "./src/images/icons/sprite_icons/icon_exit.svg",
	"./icon_history_of_buying.svg": "./src/images/icons/sprite_icons/icon_history_of_buying.svg",
	"./icon_marker.svg": "./src/images/icons/sprite_icons/icon_marker.svg",
	"./iks.svg": "./src/images/icons/sprite_icons/iks.svg",
	"./info_decor.svg": "./src/images/icons/sprite_icons/info_decor.svg",
	"./slider_arrow.svg": "./src/images/icons/sprite_icons/slider_arrow.svg",
	"./triangle_bottom.svg": "./src/images/icons/sprite_icons/triangle_bottom.svg",
	"./user.svg": "./src/images/icons/sprite_icons/user.svg"
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
webpackContext.id = "./src/images/icons/sprite_icons sync recursive \\.svg$";

/***/ }),

/***/ "./src/js/pages lazy recursive ^\\.\\/.*$":
/*!******************************************************!*\
  !*** ./src/js/pages/ lazy ^\.\/.*$ namespace object ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AboutUsPage": [
		"./src/js/pages/AboutUsPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./AboutUsPage.js": [
		"./src/js/pages/AboutUsPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./AccountAddressPage": [
		"./src/js/pages/AccountAddressPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./AccountAddressPage.js": [
		"./src/js/pages/AccountAddressPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./AccountInfoPage": [
		"./src/js/pages/AccountInfoPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./AccountInfoPage.js": [
		"./src/js/pages/AccountInfoPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./AccountPasswordPage": [
		"./src/js/pages/AccountPasswordPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./AccountPasswordPage.js": [
		"./src/js/pages/AccountPasswordPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./AccountWishListPage": [
		"./src/js/pages/AccountWishListPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./AccountWishListPage.js": [
		"./src/js/pages/AccountWishListPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./BrandsPage": [
		"./src/js/pages/BrandsPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./BrandsPage.js": [
		"./src/js/pages/BrandsPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./FaqPage": [
		"./src/js/pages/FaqPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./FaqPage.js": [
		"./src/js/pages/FaqPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./IndexPage": [
		"./src/js/pages/IndexPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./IndexPage.js": [
		"./src/js/pages/IndexPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./ProductCardPage": [
		"./src/js/pages/ProductCardPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./ProductCardPage.js": [
		"./src/js/pages/ProductCardPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./ProductsPage": [
		"./src/js/pages/ProductsPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./ProductsPage.js": [
		"./src/js/pages/ProductsPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./RegistrationPage": [
		"./src/js/pages/RegistrationPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./RegistrationPage.js": [
		"./src/js/pages/RegistrationPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./ShoppingCartPage": [
		"./src/js/pages/ShoppingCartPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./ShoppingCartPage.js": [
		"./src/js/pages/ShoppingCartPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./WhishListPage": [
		"./src/js/pages/WhishListPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	],
	"./WhishListPage.js": [
		"./src/js/pages/WhishListPage.js",
		"vendors-src_js_pages_AboutUsPage_js-src_js_pages_AccountAddressPage_js-src_js_pages_AccountIn-b4e99f"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/js/pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=app.js.map