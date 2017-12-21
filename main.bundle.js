/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		5: 0
/******/ 	};
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
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_form_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_form_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__form_form_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fireworks_fireworks_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fireworks_fireworks_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fireworks_fireworks_index__);
const template = __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 7));
const styles = __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 8));




(async function() {
    function onPhraseChange(phrase) {
        fireworks.doFireworks(phrase);
    }

    document.body.innerHTML = await template;
    const form = new __WEBPACK_IMPORTED_MODULE_0__form_form_index___default.a(document.getElementById('phrase-form-wrapper'));
    const fireworks = new __WEBPACK_IMPORTED_MODULE_1__fireworks_fireworks_index___default.a(document.getElementById('phrase-fireworks-wrapper'));
    form.listen(onPhraseChange);
})();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// get the template
const template = __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 4));
// get the styles
const styles = __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 5));

class YOPFForm{
    constructor(element) {
        this._element = element;
        this.setTemplate();
    }

    async setTemplate() {
        this._element.innerHTML = await template;
        this._form = this._element.getElementsByTagName('form')[0];
        this._form.addEventListener("submit", (event)=> {
            event.preventDefault();
            this.onSubmit(event.target);
        },
            false
        );
    }

    onSubmit(form) {
        this._callback(form.phrase.value);
    }

    listen(callback) {
        this._callback = callback;
    }
}

module.exports = YOPFForm;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const fireworks = __webpack_require__(3);
// get the styles
const styles = __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 6));

class YOPFFireworks{
    constructor(element) {
        this._element = element;
    }

    get centerX() {
        return this._centerX ? this._centerX : this._centerX = this._element.offsetLeft + this._element.offsetWidth / 2;
    }

    get centerY() {
        return this._centerY ? this._centerY : this._centerY = this._element.offsetTop + this._element.offsetHeight / 2;
    }

    doFireworks(phrase) {
        this._element.innerHTML = '<h1 class="phraseText">' + phrase + '</h1>';

        if (this._interval) {
            return;
        }

        this._interval = setInterval(() => {
            const newX = Math.random()*100*(Math.random() < .5 ? -1 : 1);
            const newY = Math.random()*100*(Math.random() < .5 ? -1 : 1);
            fireworks({
                x: this.centerX + newX,
                y: this.centerY + newY,
                colors: ["#cc3333", "#4CAF50", "#81C784"]
            });
        }, 500);
    }

    stopFireworks() {
        if (!this._interval) {
            return;
        }
        clearInterval(this._interval);
        this._interval = null;
    }
}
module.exports = YOPFFireworks;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
var randomRange = function r(a, b, c) {
  return parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0))
}

var render = function render(particles, ctx, width, height) {
  requestAnimationFrame(function () {
    return render(particles, ctx, width, height)
  })
  ctx.clearRect(0, 0, width, height)
  particles.forEach(function (p, i) {
    p.x += p.speed * Math.cos(p.rotation * Math.PI / 180)
    p.y += p.speed * Math.sin(p.rotation * Math.PI / 180)
    p.opacity -= .005
    p.speed *= p.friction
    p.radius *= p.friction
    p.yVel += p.gravity
    p.y += p.yVel

    if (p.opacity < 0 || p.radius < 0) {
      return
    }

    ctx.beginPath()
    ctx.globalAlpha = p.opacity
    ctx.fillStyle = p.color
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false)
    ctx.fill()
  })
  return ctx
}

function explode (opts) {
  if (!opts) {
    throw new Error('Missing options for fireworks')
  }

  var x = opts.x
  var y = opts.y
  var colors = opts.colors
  var parentNode = opts.parentNode || document.body
  var bubbleCount = opts.count || 25

  var particles = []
  var ratio = window.devicePixelRatio
  var c = document.createElement('canvas')
  var ctx = c.getContext('2d')

  c.style.position = 'absolute'
  c.style.left = x - 150 + 'px'
  c.style.top = y - 150 + 'px'
  c.style.pointerEvents = 'none'
  c.style.width = 300 + 'px'
  c.style.height = 300 + 'px'
  c.style.zIndex = 100
  c.width = 300 * ratio
  c.height = 300 * ratio
  parentNode.appendChild(c)

  for (var i = 0; i < bubbleCount; i++) {
    particles.push({
      x: c.width / 2,
      y: c.height / 2,
      radius: randomRange(10, 25),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: randomRange(0, 360, true),
      speed: randomRange(6, 10),
      friction: .96,
      opacity: randomRange(0, .5, true),
      yVel: 0,
      gravity: .05
    })
  }

  render(particles, ctx, c.width, c.height)

  setTimeout(function () {
    parentNode.removeChild(c)
  }, 1000)
}

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.Fireworks = factory()
  }
}(this, function () {
  return explode
}))


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTgyNDg1ZDk2NGZkNjg1YThkMTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS9mb3JtLmluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9maXJld29ya3MvZmlyZXdvcmtzLmluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maXJld29ya3MvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQSxrREFBMEMsb0JBQW9CLFdBQVc7O0FBRXpFO0FBQ0E7Ozs7Ozs7Ozs7O0FDL0lBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQjs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0I7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXSwgcmVzdWx0O1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3RzIHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDU6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhID09PSAwKSB7XG4gXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZSgpOyB9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua0RhdGFbMl07XG4gXHRcdH1cblxuIFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdH0pO1xuIFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlO1xuXG4gXHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiBcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjAwMDA7XG5cbiBcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdH1cbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuYnVuZGxlLmpzXCI7XG4gXHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLCAxMjAwMDApO1xuIFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRmdW5jdGlvbiBvblNjcmlwdENvbXBsZXRlKCkge1xuIFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdGNodW5rWzFdKG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLicpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuIFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU4MjQ4NWQ5NjRmZDY4NWE4ZDExIiwiY29uc3QgdGVtcGxhdGUgPSBpbXBvcnQoJy4vaW5kZXguaHRtbCcpO1xyXG5jb25zdCBzdHlsZXMgPSBpbXBvcnQgKCcuL2FwcC5jc3MnKTtcclxuXHJcbmltcG9ydCBZT1BGRm9ybSBmcm9tICcuL2Zvcm0vZm9ybS5pbmRleCc7XHJcbmltcG9ydCBZT1BGRmlyZXdvcmtzIGZyb20gJy4vZmlyZXdvcmtzL2ZpcmV3b3Jrcy5pbmRleCc7XHJcblxyXG4oYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBvblBocmFzZUNoYW5nZShwaHJhc2UpIHtcclxuICAgICAgICBmaXJld29ya3MuZG9GaXJld29ya3MocGhyYXNlKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGF3YWl0IHRlbXBsYXRlO1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBZT1BGRm9ybShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhyYXNlLWZvcm0td3JhcHBlcicpKTtcclxuICAgIGNvbnN0IGZpcmV3b3JrcyA9IG5ldyBZT1BGRmlyZXdvcmtzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaHJhc2UtZmlyZXdvcmtzLXdyYXBwZXInKSk7XHJcbiAgICBmb3JtLmxpc3RlbihvblBocmFzZUNoYW5nZSk7XHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvLyBnZXQgdGhlIHRlbXBsYXRlXHJcbmNvbnN0IHRlbXBsYXRlID0gaW1wb3J0KCcuL2Zvcm0uaW5kZXguaHRtbCcpO1xyXG4vLyBnZXQgdGhlIHN0eWxlc1xyXG5jb25zdCBzdHlsZXMgPSBpbXBvcnQoJy4vZm9ybS5pbmRleC5jc3MnKTtcclxuXHJcbmNsYXNzIFlPUEZGb3Jte1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc2V0VGVtcGxhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LmlubmVySFRNTCA9IGF3YWl0IHRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJylbMF07XHJcbiAgICAgICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCk9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZm9ybSkge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrKGZvcm0ucGhyYXNlLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW4oY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFlPUEZGb3JtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zvcm0vZm9ybS5pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJjb25zdCBmaXJld29ya3MgPSByZXF1aXJlKCdmaXJld29ya3MnKTtcclxuLy8gZ2V0IHRoZSBzdHlsZXNcclxuY29uc3Qgc3R5bGVzID0gaW1wb3J0KCcuL2ZpcmV3b3Jrcy5jc3MnKTtcclxuXHJcbmNsYXNzIFlPUEZGaXJld29ya3N7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNlbnRlclgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NlbnRlclggPyB0aGlzLl9jZW50ZXJYIDogdGhpcy5fY2VudGVyWCA9IHRoaXMuX2VsZW1lbnQub2Zmc2V0TGVmdCArIHRoaXMuX2VsZW1lbnQub2Zmc2V0V2lkdGggLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjZW50ZXJZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jZW50ZXJZID8gdGhpcy5fY2VudGVyWSA6IHRoaXMuX2NlbnRlclkgPSB0aGlzLl9lbGVtZW50Lm9mZnNldFRvcCArIHRoaXMuX2VsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBkb0ZpcmV3b3JrcyhwaHJhc2UpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LmlubmVySFRNTCA9ICc8aDEgY2xhc3M9XCJwaHJhc2VUZXh0XCI+JyArIHBocmFzZSArICc8L2gxPic7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3WCA9IE1hdGgucmFuZG9tKCkqMTAwKihNYXRoLnJhbmRvbSgpIDwgLjUgPyAtMSA6IDEpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdZID0gTWF0aC5yYW5kb20oKSoxMDAqKE1hdGgucmFuZG9tKCkgPCAuNSA/IC0xIDogMSk7XHJcbiAgICAgICAgICAgIGZpcmV3b3Jrcyh7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmNlbnRlclggKyBuZXdYLFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5jZW50ZXJZICsgbmV3WSxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW1wiI2NjMzMzM1wiLCBcIiM0Q0FGNTBcIiwgXCIjODFDNzg0XCJdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEZpcmV3b3JrcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2ludGVydmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gWU9QRkZpcmV3b3JrcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9maXJld29ya3MvZmlyZXdvcmtzLmluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIlxudmFyIHJhbmRvbVJhbmdlID0gZnVuY3Rpb24gcihhLCBiLCBjKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KChNYXRoLnJhbmRvbSgpICogKChhID8gYSA6IDEpIC0gKGIgPyBiIDogMCkpICsgKGIgPyBiIDogMCkpLnRvRml4ZWQoYyA/IGMgOiAwKSlcbn1cblxudmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwYXJ0aWNsZXMsIGN0eCwgd2lkdGgsIGhlaWdodCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZW5kZXIocGFydGljbGVzLCBjdHgsIHdpZHRoLCBoZWlnaHQpXG4gIH0pXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgcGFydGljbGVzLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHtcbiAgICBwLnggKz0gcC5zcGVlZCAqIE1hdGguY29zKHAucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKVxuICAgIHAueSArPSBwLnNwZWVkICogTWF0aC5zaW4ocC5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApXG4gICAgcC5vcGFjaXR5IC09IC4wMDVcbiAgICBwLnNwZWVkICo9IHAuZnJpY3Rpb25cbiAgICBwLnJhZGl1cyAqPSBwLmZyaWN0aW9uXG4gICAgcC55VmVsICs9IHAuZ3Jhdml0eVxuICAgIHAueSArPSBwLnlWZWxcblxuICAgIGlmIChwLm9wYWNpdHkgPCAwIHx8IHAucmFkaXVzIDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gcC5vcGFjaXR5XG4gICAgY3R4LmZpbGxTdHlsZSA9IHAuY29sb3JcbiAgICBjdHguYXJjKHAueCwgcC55LCBwLnJhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlKVxuICAgIGN0eC5maWxsKClcbiAgfSlcbiAgcmV0dXJuIGN0eFxufVxuXG5mdW5jdGlvbiBleHBsb2RlIChvcHRzKSB7XG4gIGlmICghb3B0cykge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBvcHRpb25zIGZvciBmaXJld29ya3MnKVxuICB9XG5cbiAgdmFyIHggPSBvcHRzLnhcbiAgdmFyIHkgPSBvcHRzLnlcbiAgdmFyIGNvbG9ycyA9IG9wdHMuY29sb3JzXG4gIHZhciBwYXJlbnROb2RlID0gb3B0cy5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHlcbiAgdmFyIGJ1YmJsZUNvdW50ID0gb3B0cy5jb3VudCB8fCAyNVxuXG4gIHZhciBwYXJ0aWNsZXMgPSBbXVxuICB2YXIgcmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIHZhciBjdHggPSBjLmdldENvbnRleHQoJzJkJylcblxuICBjLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICBjLnN0eWxlLmxlZnQgPSB4IC0gMTUwICsgJ3B4J1xuICBjLnN0eWxlLnRvcCA9IHkgLSAxNTAgKyAncHgnXG4gIGMuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJ1xuICBjLnN0eWxlLndpZHRoID0gMzAwICsgJ3B4J1xuICBjLnN0eWxlLmhlaWdodCA9IDMwMCArICdweCdcbiAgYy5zdHlsZS56SW5kZXggPSAxMDBcbiAgYy53aWR0aCA9IDMwMCAqIHJhdGlvXG4gIGMuaGVpZ2h0ID0gMzAwICogcmF0aW9cbiAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnViYmxlQ291bnQ7IGkrKykge1xuICAgIHBhcnRpY2xlcy5wdXNoKHtcbiAgICAgIHg6IGMud2lkdGggLyAyLFxuICAgICAgeTogYy5oZWlnaHQgLyAyLFxuICAgICAgcmFkaXVzOiByYW5kb21SYW5nZSgxMCwgMjUpLFxuICAgICAgY29sb3I6IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV0sXG4gICAgICByb3RhdGlvbjogcmFuZG9tUmFuZ2UoMCwgMzYwLCB0cnVlKSxcbiAgICAgIHNwZWVkOiByYW5kb21SYW5nZSg2LCAxMCksXG4gICAgICBmcmljdGlvbjogLjk2LFxuICAgICAgb3BhY2l0eTogcmFuZG9tUmFuZ2UoMCwgLjUsIHRydWUpLFxuICAgICAgeVZlbDogMCxcbiAgICAgIGdyYXZpdHk6IC4wNVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIocGFydGljbGVzLCBjdHgsIGMud2lkdGgsIGMuaGVpZ2h0KVxuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYylcbiAgfSwgMTAwMClcbn1cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuICB9IGVsc2Uge1xuICAgIHJvb3QuRmlyZXdvcmtzID0gZmFjdG9yeSgpXG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXhwbG9kZVxufSkpXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9maXJld29ya3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==