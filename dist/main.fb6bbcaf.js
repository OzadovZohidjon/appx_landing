// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//PROJECTS CARDS  START
var blocks = document.querySelectorAll('.block');
var wrapper = document.querySelector('.wrapper');
var right = document.querySelector('.right__blocks');
blocks.forEach(function (block) {
  block.addEventListener('mouseover', function () {
    gsap.set(block.querySelector('.images'), {
      scale: 0.93
    }); // gsap.set(block.querySelectorAll('.img'), { translate3d: 0 })

    gsap.to(block.querySelector('.text_two'), 0.08, {
      opacity: 1,
      ease: Power3.easeIn
    });
  });
  block.addEventListener('mouseout', function () {
    gsap.set(block.querySelector('.images'), {
      scale: 1
    });
    gsap.to(block.querySelectorAll('.img'), .8, {
      rotateX: "0deg",
      rotateY: "0deg"
    });
    gsap.to(block.querySelector('.text_two'), 0.08, {
      opacity: 0,
      ease: Power3.easeIn
    });
  });
  block.addEventListener('mousemove', function (event) {
    var center = (block.clientHeight + block.clientWidth) / 2 / 100;
    gsap.to(block.querySelectorAll('.img'), {
      rotateX: event.clientX / 100 - center + "deg",
      rotateY: event.clientY / 100 - center + "deg"
    });
  });
}); //PROJECTS CARDS  END
// IBG START

function ibg() {
  var ibg = document.querySelectorAll(".ibg");

  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg(); // IBG END
// CURSOR Start

function cursor(items, cursor) {
  items.forEach(function (item) {
    item.addEventListener('mousemove', function (e) {
      var r = this.getBoundingClientRect();
      this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)));
      this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)));
    });
    item.addEventListener('mouseleave', function () {
      this.style.setProperty('--x', 0);
      this.style.setProperty('--y', 0);
    });
    item.addEventListener('mouseover', function () {
      gsap.to(cursor, 0.25, {
        scale: 1,
        autoAlpha: 1
      });
      gsap.to('html', {
        cursor: 'none'
      });
    });
    item.addEventListener('mouseout', function () {
      gsap.to(cursor, 0.25, {
        scale: 0,
        autoAlpha: 0
      });
      gsap.to('html', {
        cursor: 'unset'
      });
    });
  });
  document.addEventListener('mousemove', function mMove(el) {
    // console.log(window.clientHeight)
    gsap.to(cursor, 0.2, {
      x: el.clientX,
      y: el.clientY
    });
  });
} // CURSOR END
//MAIN SCROLL ANIMATION START


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
var container = document.querySelector(".wrapper");

if (container) {
  var setHeight = function setHeight() {
    height = container.getBoundingClientRect().height;
    console.log(document.documentElement.clientHeight);
    document.body.style.height = height + "px";
  };

  var height;
  ScrollTrigger.addEventListener("refreshInit", setHeight); // smooth scrolling container

  gsap.to(document.body, {
    y: function y() {
      return -(height - document.documentElement.clientHeight);
    },
    ease: "power4",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      invalidateOnRefresh: true
    }
  });
} //MAIN SCROLL ANIMATION END


Splitting(); // BARBA js START

function delay(n) {
  n = n || 2000;
  return new Promise(function (done) {
    setTimeout(function () {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 0.5,
    height: '100%',
    bottom: '0%',
    ease: "Expo.easeInout"
  });
  tl.to(".loading-screen .char", {
    duration: 0.5,
    ease: "Power3.easeIn",
    stagger: 0.1,
    opacity: 1
  }, 0.014);
  tl.to(".loading-screen .char", {
    duration: 0.5,
    ease: "Power2.easeInout",
    stagger: 0.1,
    opacity: 0
  }, "-=1");
  tl.to(".loading-screen", {
    duration: 1,
    height: '100%',
    bottom: '100%',
    ease: "Expo.easeInout",
    delay: 1
  }, "-=1");
  tl.set(".loading-screen", {
    bottom: "-100%"
  });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".menu__logo", {
    duration: 0.6,
    y: -30,
    opacity: 0,
    delay: 0.2,
    ease: "Expo.easeInout"
  });
  tl.from(".menu__nav .nav__item", {
    duration: 0.6,
    y: -30,
    opacity: 0,
    stagger: 0.2,
    delay: 0.2,
    ease: "Expo.easeInout"
  });
  tl.from(".content__title h1", {
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    delay: 0.2,
    ease: "Expo.easeInout"
  });
  tl.from(".content__desc span", {
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    delay: 0.2,
    ease: "Expo.easeInout"
  });
  tl.from(".content__desc line", {
    duration: 0.6,
    x: '-100%',
    opacity: 0,
    ease: "Expo.easeInout"
  }, "-=1");
  tl.from(".content__img .img_wrap", {
    duration: 0.6,
    x: '100%',
    opacity: 0,
    ease: "Expo.easeInout"
  }, "-=1");
}

$(function () {
  barba.init({
    sync: true,
    transitions: [{
      leave: function leave(data) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var done;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  done = _this.async();
                  pageTransition();
                  _context.next = 4;
                  return delay(500);

                case 4:
                  done();

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      enter: function enter(data) {
        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  contentAnimation();

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      }
    }]
  });
}); // BARBA js END
// ABOUT PAGE START

var swiper = new Swiper(".about .mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 20,
  freeMode: true,
  grabCursor: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: false
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 60,
      centeredSlides: true
    }
  }
});
var AboutCursorItems = document.querySelectorAll('.about .slider__body');
var AboutCursor = document.querySelector('.about .cursor');
cursor(AboutCursorItems, AboutCursor); // ABOUT PAGE END
// PROJECTS PAGE START
// var ProjectsImages = document.querySelectorAll('.projects .item__img img');
// new simpleParallax(ProjectsImages, {
//     delay: 1,
//     scale: 1,
//     transition: 'linear'
// });

var itemsArray = document.querySelectorAll('.projects .item__img');
itemsArray.forEach(function (item) {
  gsap.to(item, {
    duration: 1,
    backgroundPosition: "50% 300%",
    ease: "Expo.easeInOut",
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5
    }
  });
});
var ProjectsCursor = document.querySelector('.projects .cursor');
var ProjectsCursorItems = document.querySelectorAll('.projects .project__item');
cursor(ProjectsCursorItems, ProjectsCursor); // PROJECTS PAGE END
},{}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "9048" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map