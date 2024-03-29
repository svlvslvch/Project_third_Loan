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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/download */ "./src/js/modules/download.js");







window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.page',
    btns: 'a.next'
  });
  slider.render();
  const modulePageSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.moduleapp',
    btns: 'a.next',
    btnsNext: '.nextmodule',
    btnsPrev: '.prevmodule'
  });
  modulePageSlider.render();
  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init();
  const moduleSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.modules__content-slider',
    slides: '.modules__content-slider .card',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    autoplay: true
  });
  moduleSlider.init();
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.feed__slider',
    slides: '.feed__slider .feed__item ',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'
  });
  feedSlider.init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.showup .play', '.overlay').init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.module__video-item .play', '.overlay').init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officerold', '.officer__card-item').init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officernew', '.officer__card-item').init();
  new _modules_form__WEBPACK_IMPORTED_MODULE_4__["default"]('.form').init();
  new _modules_accordion__WEBPACK_IMPORTED_MODULE_5__["default"]('.plus').init();
  new _modules_download__WEBPACK_IMPORTED_MODULE_6__["default"]('.download').init();
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
class Accordion {
  constructor(tridders) {
    this.tridders = document.querySelectorAll(tridders);
  }

  showContent() {
    this.tridders.forEach(tridder => {
      tridder.addEventListener('click', () => {
        const content = tridder.parentNode.nextElementSibling;

        if (!content.classList.contains('fadeInDown')) {
          content.classList.add('animated', 'fadeInDown');
          content.style.display = 'block';
        } else {
          content.classList.remove('animated', 'fadeInDown');
          content.style.display = 'none';
        }
      });
    });
  }

  init() {
    this.showContent();
  }

}

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(officer, items) {
    try {
      this.officer = document.querySelector(officer);
      this.items = this.officer.querySelectorAll(items);
      this.count = 0;
    } catch (e) {}
  }

  bindTriggers(items, count) {
    items[items.length - 1].addEventListener('click', () => {
      items[count].style.display = 'flex';
      items[count].classList.add('fadeIn');

      if (count != items.length - 2) {
        count++;
      } else {
        items[items.length - 1].remove();
      }
    });
  }

  hide() {
    this.items.forEach((item, index, arr) => {
      if (index != arr.length - 1) {
        item.classList.add('animated');
        item.style.display = 'none';
      }
    });
  }

  init() {
    try {
      this.hide();
      this.bindTriggers(this.items, this.count);
    } catch (e) {}
  }

}

/***/ }),

/***/ "./src/js/modules/download.js":
/*!************************************!*\
  !*** ./src/js/modules/download.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Download; });
class Download {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = 'assets/img/mainbg.jpg';
  }

  downloadItem(path) {
    const elem = document.createElement('a');
    elem.setAttribute('href', path);
    elem.setAttribute('download', 'nice_picture');
    elem.style.display = 'none';
    document.body.append(elem);
    elem.click();
    elem.remove();
  }

  init() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        this.downloadItem(this.path);
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...'
    };
    this.path = 'assets/question.php';
  }

  async postData(url, data) {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  }

  clearInputs() {
    this.inputs.forEach(input => {
      input.value = '';
    });
    document.querySelector('select').selectedIndex = 0;
  }

  blockBtn(boolean) {
    this.forms.forEach(form => {
      let btn = form.querySelector('.btn');
      btn.disabled = boolean;
    });
  }

  checkInputsText() {
    this.inputs.forEach(input => {
      input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
          input.style.border = '1px solid red';
          this.blockBtn(true);
        } else {
          input.style.border = '';
          this.blockBtn(false);
        }
      });
    });
  }

  checkMailInputs() {
    const textInput = document.querySelectorAll('[type="email"]');
    textInput.forEach(input => {
      input.addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[^a-z 0-9 \. @ \-]/ig, '');
      });
    });
  }

  initMask() {
    let setCursorPosirion = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };

    function createMask(event) {
      let matrix = '+ 1 (___) ___-____',
          i = 0,
          def = matrix.replace(/\D/g, ''),
          val = this.value.replace(/\D/g, '');

      if (def.length >= val.length || this.selectionStart < 4 && this.selectionEnd < 4) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
        if (this.value.length < 6) {
          this.value = '';
        }
      } else {
        setCursorPosirion(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll('[name="phone"]');
    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
      input.addEventListener('click', createMask);
    });
  }

  init() {
    this.blockBtn(true);
    this.checkMailInputs();
    this.checkInputsText();
    this.initMask();
    this.forms.forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        let statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: green;
                `;
        form.parentNode.append(statusMessage);
        statusMessage.textContent = this.message.loading;
        const formData = new FormData(form);
        this.postData(this.path, formData).then(data => {
          console.log(data);
          statusMessage.textContent = this.message.success;
        }).catch(() => {
          statusMessage.textContent = this.message.failure;
        }).finally(() => {
          this.clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
          this.blockBtn(true);
        });
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  bindTriggers() {
    this.btns.forEach((btn, i) => {
      // try {
      //     const blockedElement = btn.closest('.module__video-item').nextElementSibling;
      //     if (i % 2 === 0) {
      //         blockedElement.setAttribute('data-disabled', 'true');
      //     }
      // } catch (e) {}
      //присвоение нечетным видео дата атрибута для дальнейшей проверки
      btn.addEventListener('click', () => {
        //if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
        //проверка дата атрибота, но проще провирь класс, так как он удаляется после просмотра видео
        if (!btn.querySelector('.play__circle').classList.contains('closed')) {
          this.activeBtn = btn;

          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex';

            if (this.path !== btn.getAttribute('data-url')) {
              this.path = btn.getAttribute('data-url');
              this.player.loadVideoById({
                videoId: this.path
              });
            }
          } else {
            this.path = btn.getAttribute('data-url');
            this.createPlayer(this.path);
          }
        }
      });
    });
  }

  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  }

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      events: {
        'onStateChange': this.onPlayerStateChange
      }
    });
    this.overlay.style.display = 'flex';
  }

  onPlayerStateChange(stage) {
    try {
      const blockedElement = this.activeBtn.parentNode.nextElementSibling;
      const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

      if (stage.data === 0 && blockedElement.tagName === 'DIV') {
        if (blockedElement.querySelector('.play__circle').classList.contains('closed')) {
          blockedElement.querySelector('.play__circle').classList.remove('closed');
          blockedElement.querySelector('svg').remove();
          blockedElement.querySelector('.play__circle').append(playBtn);
          blockedElement.querySelector('.play__text').textContent = 'play video';
          blockedElement.querySelector('.play__text').classList.remove('attention');
          blockedElement.style.opacity = 1;
          blockedElement.style.filter = 'none'; //при работе с проверкой по дата атрибуту
          // blockedElement.setAttribute('data-disabled', 'false');
        }
      }
    } catch (e) {}
  }

  init() {
    if (this.btns.length > 0) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTriggers();
      this.bindCloseBtn();
    }
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(btns) {
    super(btns);
  }

  showSlide(n) {
    if (n > this.slides.length) {
      this.sliderIndex = 1;
    }

    if (n < 1) {
      this.sliderIndex = this.slides.length;
    } //вместо forEach
    // for (let i = 0; i < this.slides.length; i++) {
    //     this.slides[i].style.display = 'none';
    // }


    [...this.slides].forEach(slide => {
      slide.style.display = 'none';
    });
    this.slides[this.sliderIndex - 1].style.display = 'block'; //всплывающий блок на слайде №3

    try {
      const hanson = document.querySelector('.hanson');
      let timerId;

      if (n == 3) {
        hanson.style.opacity = 0;
        timerId = setTimeout(() => {
          hanson.style.opacity = 1;
          hanson.classList.add('animated', 'slideInUp');
        }, 3000);
      } else {
        clearTimeout(timerId);
        hanson.classList.remove('slideInUp');
      }
    } catch (e) {}
  }

  plusSlide(n) {
    this.showSlide(this.sliderIndex += n);
  }

  switchingModules(directionBtn, n) {
    directionBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        this.plusSlide(n);
      });
    });
  }

  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.plusSlide(1);
      });
      btn.parentNode.previousElementSibling.addEventListener('click', e => {
        // e.preventDefault();
        this.sliderIndex = 1;
        this.showSlide(this.sliderIndex);
      });
    });
  }

  render() {
    if (this.container) {
      this.bindTriggers();
      this.switchingModules(this.btnsNext, 1);
      this.switchingModules(this.btnsPrev, -1);
      this.showSlide(this.sliderIndex);
    }
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
  }

  decoraizeSlide() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].classList.remove(this.activeClass);

      if (this.animate) {
        this.slides[i].querySelector('.card__title').style.opacity = '.4';
        this.slides[i].querySelector('.card__controls-arrow').style.opacity = '0';
      }
    } //вместо перебора for
    // [...this.slides].forEach(slide => {
    //     slide.classList.remove(this.activeClass);
    // });


    if (!this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass);
    }

    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide() {
    for (let i = 1; i < this.slides.length - 1; i++) {
      if (this.slides[i].tagName !== 'BUTTON') {
        this.container.appendChild(this.slides[0]);
        this.decoraizeSlide();
        break;
      } else {
        this.container.appendChild(this.slides[i]);
        this.decoraizeSlide();
        i--;
      }
    } //двойной щелчок для переключения
    // this.container.appendChild(this.slides[0]);
    // this.decoraizeSlide();
    // if (this.slides[0].tagName === 'BUTTON') {
    //    for (let i = 0; i < 2; i++) {
    //       this.next.click();
    //    }
    // }

  }

  bindTriggers() {
    this.next.addEventListener('click', () => {
      this.nextSlide();
    });
    this.prev.addEventListener('click', () => {
      for (let i = this.slides.length - 1; i > 0; i--) {
        if (this.slides[i].tagName !== 'BUTTON') {
          let active = this.slides[i];
          this.container.insertBefore(active, this.slides[0]);
          this.decoraizeSlide();
          break;
        }
      } //двойной щелчок для переключения
      // let active = this.slides[this.slides.length - 1];
      // this.container.insertBefore(active, this.slides[0]);
      // this.decoraizeSlides();
      // if (this.slides[0].tagName === 'BUTTON') {
      //     for (let i = 0; i < 2; i++) {
      //         this.prev.click();
      //     }
      // }

    });
  }

  autoplayGo() {
    let autoplay = setInterval(() => this.nextSlide(), 5000);
    this.next.addEventListener('mouseenter', () => {
      clearInterval(autoplay);
    });
    this.prev.addEventListener('mouseenter', () => {
      clearInterval(autoplay);
    });
    this.container.addEventListener('mouseenter', () => {
      clearInterval(autoplay);
    });
  }

  init() {
    try {
      this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-items: flex-start;
            `;
      this.bindTriggers();
      this.decoraizeSlide();

      if (this.autoplay) {
        this.autoplayGo();
        this.next.addEventListener('mouseleave', () => {
          this.autoplayGo();
        });
        this.prev.addEventListener('mouseleave', () => {
          this.autoplayGo();
        });
        this.container.addEventListener('mouseleave', () => {
          this.autoplayGo();
        });
      }
    } catch (e) {}
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor() {
    let {
      container = null,
      btns = null,
      btnsNext = null,
      btnsPrev = null,
      next = null,
      prev = null,
      activeClass,
      animate,
      autoplay
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.container = document.querySelector(container);

    try {
      this.slides = this.container.children;
    } catch (e) {}

    this.btns = document.querySelectorAll(btns);
    this.btnsNext = document.querySelectorAll(btnsNext);
    this.btnsPrev = document.querySelectorAll(btnsPrev);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.sliderIndex = 1;
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map