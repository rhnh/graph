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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  background-color: #1f2024;\n}\n.canvas {\n  background-color: #ffffff;\n  margin-top: 4em;\n  padding-left: 0;\n}\n\n#container {\n  text-align: center;\n  display: flex;\n  width: 50%;\n  margin: auto;\n}\n\nfooter {\n  text-align: center;\n  width: 50%;\n  margin: auto;\n}\nfooter > a {\n  color: #e6844f;\n  text-decoration: none;\n  cursor: pointer;\n  margin-top: 4em;\n  display: block;\n}\n\nfooter > a:hover {\n  text-decoration: underline;\n}\n#side {\n  margin-top: 4em;\n  padding-right: 0;\n  float: right;\n  background-color: rgba(228, 195, 136, 0.2);\n  display: block;\n  border-radius: 0.2em;\n  padding-top: 1em;\n}\n\nbutton {\n  width: 90%;\n  background-color: #4caf50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton:hover {\n  background: #e6844f;\n}\n\ninput {\n  width: 90%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: WIDTH, HEIGHT, GAP, GRID_GAP, xMid, yMid, positiveNumbers, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDTH", function() { return WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAP", function() { return GAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_GAP", function() { return GRID_GAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xMid", function() { return xMid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yMid", function() { return yMid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positiveNumbers", function() { return positiveNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
const WIDTH = 600;
const HEIGHT = 600;
const GAP = 40;
const GRID_GAP = 20;
const xMid = WIDTH / 2;
const yMid = HEIGHT / 2;
const positiveNumbers = Array.from(Array(WIDTH).keys()).map(x => x);
const negativeNumbers = positiveNumbers.map(x => x - WIDTH);
const numbers = negativeNumbers.concat(positiveNumbers);

/***/ }),

/***/ "./src/func.js":
/*!*********************!*\
  !*** ./src/func.js ***!
  \*********************/
/*! exports provided: parabola, sin, cos, hypot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parabola", function() { return parabola; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hypot", function() { return hypot; });
const parabola = x => x * x;
const sin = x => Math.sin(x + 3);
const cos = x => Math.cos(x);
const hypot = x => Math.hypot(x);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _func__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./func */ "./src/func.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);






let context = Object(_render__WEBPACK_IMPORTED_MODULE_0__["canvasManager"])("canvas");
_utils__WEBPACK_IMPORTED_MODULE_1__["grid"]({
  context,
  positiveNumbers: _constants__WEBPACK_IMPORTED_MODULE_2__["positiveNumbers"]
});
_utils__WEBPACK_IMPORTED_MODULE_1__["scale"]({
  context,
  positiveNumbers: _constants__WEBPACK_IMPORTED_MODULE_2__["positiveNumbers"]
});
_utils__WEBPACK_IMPORTED_MODULE_1__["text"]({
  context,
  positiveNumbers: _constants__WEBPACK_IMPORTED_MODULE_2__["positiveNumbers"]
});
_utils__WEBPACK_IMPORTED_MODULE_1__["axis"](context);
let plot = _utils__WEBPACK_IMPORTED_MODULE_1__["plot"](context, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"], _constants__WEBPACK_IMPORTED_MODULE_2__["xMid"], _constants__WEBPACK_IMPORTED_MODULE_2__["yMid"], _constants__WEBPACK_IMPORTED_MODULE_2__["GAP"]);

const filter = str => {
  var others = /[a-w|A-W]/;

  if (str.match(others)) {
    return false;
  }

  var letters = /(^([x]?)|[0-9]+[\\+\\*\\/\\-]+?[x]?)/g;
  return str.match(letters);
};

_render__WEBPACK_IMPORTED_MODULE_0__["btnPlot"].addEventListener("click", () => {
  let t = _render__WEBPACK_IMPORTED_MODULE_0__["inputBox"].value.toString();

  if (!filter(t)) {
    console.info("failed");
  } else {
    console.info("passed");
    let f = new Function("x", "return " + t);
    plot(f);
  }
});

_render__WEBPACK_IMPORTED_MODULE_0__["inputBox"].onfocus = function () {
  this.value = "";
}; // plot(parabola);


plot(_func__WEBPACK_IMPORTED_MODULE_3__["sin"], "green"); // plot(cos, "red");
// plot(hypot, "orange");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: canvasManager, btnPlot, inputBox, createHtmlElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasManager", function() { return canvasManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnPlot", function() { return btnPlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputBox", function() { return inputBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHtmlElement", function() { return createHtmlElement; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

const container = document.createElement("div");
function canvasManager(canvasID) {
  container.setAttribute("id", "container");
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", canvasID);
  canvas.setAttribute("class", "canvas");
  canvas.setAttribute("width", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] + "");
  canvas.setAttribute("height", _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] + "");
  document.body.insertAdjacentElement("afterbegin", container);
  container.appendChild(canvas);
  const context = canvas.getContext("2d");
  return context;
}
const btnPlot = createHtmlElement("button", "plot-input", "plot", "plot", "Plot");
const inputBox = createHtmlElement("input", "plot-input", "plot", "plot", "Plot");
const side = document.createElement("div");
side.setAttribute("id", "side");
container.appendChild(side);
side.appendChild(inputBox);
side.appendChild(btnPlot);
function createHtmlElement(element, id, value, innerHtml) {
  let elm = document.createElement(element);
  elm.setAttribute("id", id);
  elm.setAttribute("value", value);
  elm.innerHTML = innerHtml;
  const con = document.createElement("div");
  const btn = document.createElement("button");
  btn.innerHTML = "close";
  con.appendChild(elm);
  return elm;
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: grid, scale, text, axis, plot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axis", function() { return axis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plot", function() { return plot; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


function gridSetting(context, positiveNumbers, fn) {
  context.save();
  context.beginPath();
  fn(context, positiveNumbers);
  context.closePath();
  context.restore();
  return {
    context,
    positiveNumbers
  };
} //Horizontal Lines


const hLines = ({
  context,
  positiveNumbers
}) => gridSetting(context, positiveNumbers, (context, positiveNumbers) => {
  positiveNumbers.map(x => {
    x *= _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"];
    drawLine(context, 0, x, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] + _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"], x, "#999");
  });
}); //Vertical Lines


const vLines = ({
  context,
  positiveNumbers
}) => gridSetting(context, positiveNumbers, (context, positiveNumbers) => {
  positiveNumbers.map(x => {
    x *= _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"];
    drawLine(context, x, 0, x, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"], "#999");
  });
}); // Vertical gap lines


const vGapLines = ({
  context,
  positiveNumbers
}) => gridSetting(context, positiveNumbers, (context, positiveNumbers) => {
  context.lineWidth = 2;
  context.setLineDash([5, 1]);
  positiveNumbers.map(x => {
    x *= _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"];

    if (x % 8 === 0) {
      drawLine(context, _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"] + x, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"] + x, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"], "#666");
    }
  });
}); // Horizontal gap lines


const hGapLines = ({
  context,
  positiveNumbers
}) => gridSetting(context, positiveNumbers, (context, positiveNumbers) => {
  context.lineWidth = 2;
  context.setLineDash([5, 1]);
  positiveNumbers.map(x => {
    x *= _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"];

    if (x % 8 === 0) {
      context.fillStyle = "red";
      drawLine(context, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"] + x, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"] + x, "#666");
    }
  });
});

const hText = ({
  context,
  positiveNumbers
}) => gridSetting(context, positiveNumbers, (context, positiveNumbers) => {
  const magicNumber = 14; // number that shift zero to the center

  positiveNumbers.map((x, i) => {
    x *= _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"];

    if (x % 8 === 0) {
      context.fillStyle = "red";
      context.fillText(`${(i - magicNumber) / 2}`, _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"] + x, _constants__WEBPACK_IMPORTED_MODULE_0__["yMid"] - 5);
      context.textAlign = "center";
    }
  });
});

const vText = ({
  context,
  positiveNumbers
}) => gridSetting(context, positiveNumbers, (context, positiveNumbers) => {
  const magicNumber = 14; // number that shift zero to the center

  positiveNumbers.map((x, i) => {
    x *= _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"];

    if (x % 8 === 0) {
      context.fillStyle = "red";
      context.fillText(`${(i - magicNumber) / -2}`, _constants__WEBPACK_IMPORTED_MODULE_0__["yMid"] + 5, _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"] + x);
      context.textAlign = "center";
    }
  });
});

function drawAxes(context) {
  return function axes(fn) {
    context.save();
    context.lineWidth = 2;
    fn(context);
    context.closePath();
    context.restore();
    return context;
  };
}

const xAxes = context => drawAxes(context)(() => drawLine(context, _constants__WEBPACK_IMPORTED_MODULE_0__["xMid"], 0, _constants__WEBPACK_IMPORTED_MODULE_0__["xMid"], _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"], "#0008ff"));

const getColor = () => "#" + Math.random().toString(16).slice(-6);

const yAxes = context => drawAxes(context)(() => drawLine(context, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["xMid"], _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"], _constants__WEBPACK_IMPORTED_MODULE_0__["xMid"], "#0008ff"));

function drawLine(context, x0, y0, xn, yn, color) {
  context.save();
  context.beginPath();
  context.strokeStyle = color;
  context.moveTo(x0, y0);
  context.lineTo(xn, yn);
  context.stroke();
  context.closePath();
  context.restore();
}

function compose(a, b) {
  return function (c) {
    return a(b(c));
  };
}

const grid = compose(hLines, vLines);
const scale = compose(hGapLines, vGapLines);
const text = compose(hText, vText);
const axis = compose(yAxes, xAxes);
function plot(context, points, tx, ty, gap) {
  return function getPlot(fn, color = getColor()) {
    context.save();
    context.beginPath();
    context.translate(tx, ty);
    context.moveTo(points[0], fn(points[0]));
    points.map(x => {
      context.lineTo(x, -gap * fn(x / gap));
    });
    context.lineWidth = 2;
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
    context.restore();
  };
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz84ZjM0Iiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJXSURUSCIsIkhFSUdIVCIsIkdBUCIsIkdSSURfR0FQIiwieE1pZCIsInlNaWQiLCJwb3NpdGl2ZU51bWJlcnMiLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWFwIiwieCIsIm5lZ2F0aXZlTnVtYmVycyIsIm51bWJlcnMiLCJjb25jYXQiLCJwYXJhYm9sYSIsInNpbiIsIk1hdGgiLCJjb3MiLCJoeXBvdCIsImNvbnRleHQiLCJjYW52YXNNYW5hZ2VyIiwidXRpbHMiLCJwbG90IiwiY29uc3RhbnRzIiwiZmlsdGVyIiwic3RyIiwib3RoZXJzIiwibWF0Y2giLCJsZXR0ZXJzIiwiYnRuUGxvdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0IiwiaW5wdXRCb3giLCJ2YWx1ZSIsInRvU3RyaW5nIiwiY29uc29sZSIsImluZm8iLCJmIiwiRnVuY3Rpb24iLCJvbmZvY3VzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2FudmFzSUQiLCJzZXRBdHRyaWJ1dGUiLCJjYW52YXMiLCJib2R5IiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJnZXRDb250ZXh0IiwiY3JlYXRlSHRtbEVsZW1lbnQiLCJzaWRlIiwiZWxlbWVudCIsImlkIiwiaW5uZXJIdG1sIiwiZWxtIiwiaW5uZXJIVE1MIiwiY29uIiwiYnRuIiwiZ3JpZFNldHRpbmciLCJmbiIsInNhdmUiLCJiZWdpblBhdGgiLCJjbG9zZVBhdGgiLCJyZXN0b3JlIiwiaExpbmVzIiwic2V0dGluZ3MiLCJkcmF3TGluZSIsInZMaW5lcyIsInZHYXBMaW5lcyIsImxpbmVXaWR0aCIsInNldExpbmVEYXNoIiwiaEdhcExpbmVzIiwiZmlsbFN0eWxlIiwiaFRleHQiLCJtYWdpY051bWJlciIsImkiLCJmaWxsVGV4dCIsInRleHRBbGlnbiIsInZUZXh0IiwiZHJhd0F4ZXMiLCJheGVzIiwieEF4ZXMiLCJnZXRDb2xvciIsInJhbmRvbSIsInNsaWNlIiwieUF4ZXMiLCJ4MCIsInkwIiwieG4iLCJ5biIsImNvbG9yIiwic3Ryb2tlU3R5bGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJjb21wb3NlIiwiYSIsImIiLCJjIiwiZ3JpZCIsInNjYWxlIiwidGV4dCIsImF4aXMiLCJwb2ludHMiLCJ0eCIsInR5IiwiZ2FwIiwiZ2V0UGxvdCIsInRyYW5zbGF0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURB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MkMsU0FBUjtBQUNBM0MsV0FBTyxDQUFDMEYsU0FBUixDQUFrQkosRUFBbEIsRUFBc0JDLEVBQXRCO0FBQ0F2RixXQUFPLENBQUMwRSxNQUFSLENBQWVXLE1BQU0sQ0FBQyxDQUFELENBQXJCLEVBQTBCNUMsRUFBRSxDQUFDNEMsTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUE1QjtBQUNBQSxVQUFNLENBQUMvRixHQUFQLENBQVdDLENBQUMsSUFBSTtBQUNkUyxhQUFPLENBQUMyRSxNQUFSLENBQWVwRixDQUFmLEVBQWtCLENBQUNpRyxHQUFELEdBQU8vQyxFQUFFLENBQUNsRCxDQUFDLEdBQUdpRyxHQUFMLENBQTNCO0FBQ0QsS0FGRDtBQUdBeEYsV0FBTyxDQUFDbUQsU0FBUixHQUFvQixDQUFwQjtBQUNBbkQsV0FBTyxDQUFDeUUsV0FBUixHQUFzQkQsS0FBdEI7QUFDQXhFLFdBQU8sQ0FBQzRFLE1BQVI7QUFDQTVFLFdBQU8sQ0FBQzRDLFNBQVI7QUFDQTVDLFdBQU8sQ0FBQzZDLE9BQVI7QUFDRCxHQWJEO0FBY0QsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyMDI0O1xcbn1cXG4uY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW4tdG9wOiA0ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5mb290ZXIgPiBhIHtcXG4gIGNvbG9yOiAjZTY4NDRmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogNGVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmZvb3RlciA+IGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbiNzaWRlIHtcXG4gIG1hcmdpbi10b3A6IDRlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOCwgMTk1LCAxMzYsIDAuMik7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgcGFkZGluZy10b3A6IDFlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlNjg0NGY7XFxufVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImV4cG9ydCBjb25zdCBXSURUSCA9IDYwMDtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSA2MDA7XG5leHBvcnQgY29uc3QgR0FQID0gNDA7XG5leHBvcnQgY29uc3QgR1JJRF9HQVAgPSAyMDtcbmV4cG9ydCBjb25zdCB4TWlkID0gV0lEVEggLyAyO1xuZXhwb3J0IGNvbnN0IHlNaWQgPSBIRUlHSFQgLyAyO1xuXG5leHBvcnQgY29uc3QgcG9zaXRpdmVOdW1iZXJzID0gQXJyYXkuZnJvbShBcnJheShXSURUSCkua2V5cygpKS5tYXAoeCA9PiB4KTtcbmNvbnN0IG5lZ2F0aXZlTnVtYmVycyA9IHBvc2l0aXZlTnVtYmVycy5tYXAoeCA9PiB4IC0gV0lEVEgpO1xuXG5leHBvcnQgY29uc3QgbnVtYmVycyA9IG5lZ2F0aXZlTnVtYmVycy5jb25jYXQocG9zaXRpdmVOdW1iZXJzKTtcbiIsImV4cG9ydCBjb25zdCBwYXJhYm9sYSA9IHggPT4geCAqIHg7XG5leHBvcnQgY29uc3Qgc2luID0geCA9PiBNYXRoLnNpbih4ICsgMyk7XG5leHBvcnQgY29uc3QgY29zID0geCA9PiBNYXRoLmNvcyh4KTtcbmV4cG9ydCBjb25zdCBoeXBvdCA9IHggPT4gTWF0aC5oeXBvdCh4KTtcbiIsImltcG9ydCB7IGNhbnZhc01hbmFnZXIsIGlucHV0Qm94LCBidG5QbG90IH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgbnVtYmVycywgcG9zaXRpdmVOdW1iZXJzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYXJhYm9sYSwgc2luLCBjb3MsIGh5cG90IH0gZnJvbSBcIi4vZnVuY1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5sZXQgY29udGV4dCA9IGNhbnZhc01hbmFnZXIoXCJjYW52YXNcIik7XG5cbnV0aWxzLmdyaWQoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSk7XG51dGlscy5zY2FsZSh7IGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycyB9KTtcbnV0aWxzLnRleHQoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSk7XG51dGlscy5heGlzKGNvbnRleHQpO1xuXG5sZXQgcGxvdCA9IHV0aWxzLnBsb3QoXG4gIGNvbnRleHQsXG4gIG51bWJlcnMsXG4gIGNvbnN0YW50cy54TWlkLFxuICBjb25zdGFudHMueU1pZCxcbiAgY29uc3RhbnRzLkdBUFxuKTtcbmNvbnN0IGZpbHRlciA9IHN0ciA9PiB7XG4gIHZhciBvdGhlcnMgPSAvW2Etd3xBLVddLztcbiAgaWYgKHN0ci5tYXRjaChvdGhlcnMpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsZXR0ZXJzID0gLyheKFt4XT8pfFswLTldK1tcXFxcK1xcXFwqXFxcXC9cXFxcLV0rP1t4XT8pL2c7XG4gIHJldHVybiBzdHIubWF0Y2gobGV0dGVycyk7XG59O1xuYnRuUGxvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsZXQgdCA9IGlucHV0Qm94LnZhbHVlLnRvU3RyaW5nKCk7XG4gIGlmICghZmlsdGVyKHQpKSB7XG4gICAgY29uc29sZS5pbmZvKFwiZmFpbGVkXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuaW5mbyhcInBhc3NlZFwiKTtcbiAgICBsZXQgZiA9IG5ldyBGdW5jdGlvbihcInhcIiwgXCJyZXR1cm4gXCIgKyB0KTtcbiAgICBwbG90KGYpO1xuICB9XG59KTtcbmlucHV0Qm94Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52YWx1ZSA9IFwiXCI7XG59O1xuLy8gcGxvdChwYXJhYm9sYSk7XG5cbnBsb3Qoc2luLCBcImdyZWVuXCIpO1xuLy8gcGxvdChjb3MsIFwicmVkXCIpO1xuLy8gcGxvdChoeXBvdCwgXCJvcmFuZ2VcIik7XG4iLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5leHBvcnQgZnVuY3Rpb24gY2FudmFzTWFuYWdlcihjYW52YXNJRCkge1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXJcIik7XG5cbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIGNhbnZhc0lEKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FudmFzXCIpO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgY29uc3RhbnRzLldJRFRIICsgXCJcIik7XG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgY29uc3RhbnRzLldJRFRIICsgXCJcIik7XG5cbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGJ0blBsb3QgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgXCJidXR0b25cIixcbiAgXCJwbG90LWlucHV0XCIsXG4gIFwicGxvdFwiLFxuICBcInBsb3RcIixcbiAgXCJQbG90XCJcbik7XG5cbmV4cG9ydCBjb25zdCBpbnB1dEJveCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICBcImlucHV0XCIsXG4gIFwicGxvdC1pbnB1dFwiLFxuICBcInBsb3RcIixcbiAgXCJwbG90XCIsXG4gIFwiUGxvdFwiXG4pO1xuXG5jb25zdCBzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNpZGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlXCIpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGUpO1xuc2lkZS5hcHBlbmRDaGlsZChpbnB1dEJveCk7XG5zaWRlLmFwcGVuZENoaWxkKGJ0blBsb3QpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSHRtbEVsZW1lbnQoZWxlbWVudCwgaWQsIHZhbHVlLCBpbm5lckh0bWwpIHtcbiAgbGV0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGVsbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIGVsbS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gIGVsbS5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gIGNvbnN0IGNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5pbm5lckhUTUwgPSBcImNsb3NlXCI7XG5cbiAgY29uLmFwcGVuZENoaWxkKGVsbSk7XG4gIHJldHVybiBlbG07XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gZ3JpZFNldHRpbmcoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzLCBmbikge1xuICBjb250ZXh0LnNhdmUoKTtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgZm4oY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzKTtcbiAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgY29udGV4dC5yZXN0b3JlKCk7XG4gIHJldHVybiB7IGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycyB9O1xufVxuXG4vL0hvcml6b250YWwgTGluZXNcbmNvbnN0IGhMaW5lcyA9ICh7IGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycyB9KSA9PlxuICBncmlkU2V0dGluZyhjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMsIChjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMpID0+IHtcbiAgICBwb3NpdGl2ZU51bWJlcnMubWFwKHggPT4ge1xuICAgICAgeCAqPSBzZXR0aW5ncy5HUklEX0dBUDtcbiAgICAgIGRyYXdMaW5lKGNvbnRleHQsIDAsIHgsIHNldHRpbmdzLldJRFRIICsgc2V0dGluZ3MuR1JJRF9HQVAsIHgsIFwiIzk5OVwiKTtcbiAgICB9KTtcbiAgfSk7XG5cbi8vVmVydGljYWwgTGluZXNcbmNvbnN0IHZMaW5lcyA9ICh7IGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycyB9KSA9PlxuICBncmlkU2V0dGluZyhjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMsIChjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMpID0+IHtcbiAgICBwb3NpdGl2ZU51bWJlcnMubWFwKHggPT4ge1xuICAgICAgeCAqPSBzZXR0aW5ncy5HUklEX0dBUDtcbiAgICAgIGRyYXdMaW5lKGNvbnRleHQsIHgsIDAsIHgsIHNldHRpbmdzLkhFSUdIVCwgXCIjOTk5XCIpO1xuICAgIH0pO1xuICB9KTtcblxuLy8gVmVydGljYWwgZ2FwIGxpbmVzXG5jb25zdCB2R2FwTGluZXMgPSAoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSkgPT5cbiAgZ3JpZFNldHRpbmcoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzLCAoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzKSA9PiB7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xuICAgIGNvbnRleHQuc2V0TGluZURhc2goWzUsIDFdKTtcbiAgICBwb3NpdGl2ZU51bWJlcnMubWFwKHggPT4ge1xuICAgICAgeCAqPSBzZXR0aW5ncy5HUklEX0dBUDtcbiAgICAgIGlmICh4ICUgOCA9PT0gMCkge1xuICAgICAgICBkcmF3TGluZShcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIHNldHRpbmdzLkdSSURfR0FQICsgeCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHNldHRpbmdzLkdSSURfR0FQICsgeCxcbiAgICAgICAgICBzZXR0aW5ncy5IRUlHSFQsXG4gICAgICAgICAgXCIjNjY2XCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbi8vIEhvcml6b250YWwgZ2FwIGxpbmVzXG5jb25zdCBoR2FwTGluZXMgPSAoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSkgPT5cbiAgZ3JpZFNldHRpbmcoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzLCAoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzKSA9PiB7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xuICAgIGNvbnRleHQuc2V0TGluZURhc2goWzUsIDFdKTtcbiAgICBwb3NpdGl2ZU51bWJlcnMubWFwKHggPT4ge1xuICAgICAgeCAqPSBzZXR0aW5ncy5HUklEX0dBUDtcbiAgICAgIGlmICh4ICUgOCA9PT0gMCkge1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGRyYXdMaW5lKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBzZXR0aW5ncy5HUklEX0dBUCArIHgsXG4gICAgICAgICAgc2V0dGluZ3MuV0lEVEgsXG4gICAgICAgICAgc2V0dGluZ3MuR1JJRF9HQVAgKyB4LFxuICAgICAgICAgIFwiIzY2NlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG5jb25zdCBoVGV4dCA9ICh7IGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycyB9KSA9PlxuICBncmlkU2V0dGluZyhjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMsIChjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMpID0+IHtcbiAgICBjb25zdCBtYWdpY051bWJlciA9IDE0OyAvLyBudW1iZXIgdGhhdCBzaGlmdCB6ZXJvIHRvIHRoZSBjZW50ZXJcbiAgICBwb3NpdGl2ZU51bWJlcnMubWFwKCh4LCBpKSA9PiB7XG4gICAgICB4ICo9IHNldHRpbmdzLkdSSURfR0FQO1xuICAgICAgaWYgKHggJSA4ID09PSAwKSB7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcbiAgICAgICAgICBgJHsoaSAtIG1hZ2ljTnVtYmVyKSAvIDJ9YCxcbiAgICAgICAgICBzZXR0aW5ncy5HUklEX0dBUCArIHgsXG4gICAgICAgICAgc2V0dGluZ3MueU1pZCAtIDVcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuY29uc3QgdlRleHQgPSAoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSkgPT5cbiAgZ3JpZFNldHRpbmcoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzLCAoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzKSA9PiB7XG4gICAgY29uc3QgbWFnaWNOdW1iZXIgPSAxNDsgLy8gbnVtYmVyIHRoYXQgc2hpZnQgemVybyB0byB0aGUgY2VudGVyXG5cbiAgICBwb3NpdGl2ZU51bWJlcnMubWFwKCh4LCBpKSA9PiB7XG4gICAgICB4ICo9IHNldHRpbmdzLkdSSURfR0FQO1xuICAgICAgaWYgKHggJSA4ID09PSAwKSB7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcbiAgICAgICAgICBgJHsoaSAtIG1hZ2ljTnVtYmVyKSAvIC0yfWAsXG4gICAgICAgICAgc2V0dGluZ3MueU1pZCArIDUsXG4gICAgICAgICAgc2V0dGluZ3MuR1JJRF9HQVAgKyB4XG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbmZ1bmN0aW9uIGRyYXdBeGVzKGNvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGF4ZXMoZm4pIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDI7XG4gICAgZm4oY29udGV4dCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfTtcbn1cblxuY29uc3QgeEF4ZXMgPSBjb250ZXh0ID0+XG4gIGRyYXdBeGVzKGNvbnRleHQpKCgpID0+XG4gICAgZHJhd0xpbmUoXG4gICAgICBjb250ZXh0LFxuICAgICAgc2V0dGluZ3MueE1pZCxcbiAgICAgIDAsXG4gICAgICBzZXR0aW5ncy54TWlkLFxuICAgICAgc2V0dGluZ3MuSEVJR0hULFxuICAgICAgXCIjMDAwOGZmXCJcbiAgICApXG4gICk7XG5jb25zdCBnZXRDb2xvciA9ICgpID0+XG4gIFwiI1wiICtcbiAgTWF0aC5yYW5kb20oKVxuICAgIC50b1N0cmluZygxNilcbiAgICAuc2xpY2UoLTYpO1xuY29uc3QgeUF4ZXMgPSBjb250ZXh0ID0+XG4gIGRyYXdBeGVzKGNvbnRleHQpKCgpID0+XG4gICAgZHJhd0xpbmUoXG4gICAgICBjb250ZXh0LFxuICAgICAgMCxcbiAgICAgIHNldHRpbmdzLnhNaWQsXG4gICAgICBzZXR0aW5ncy5IRUlHSFQsXG4gICAgICBzZXR0aW5ncy54TWlkLFxuICAgICAgXCIjMDAwOGZmXCJcbiAgICApXG4gICk7XG5cbmZ1bmN0aW9uIGRyYXdMaW5lKGNvbnRleHQsIHgwLCB5MCwgeG4sIHluLCBjb2xvcikge1xuICBjb250ZXh0LnNhdmUoKTtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICBjb250ZXh0Lm1vdmVUbyh4MCwgeTApO1xuICBjb250ZXh0LmxpbmVUbyh4biwgeW4pO1xuICBjb250ZXh0LnN0cm9rZSgpO1xuICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICBjb250ZXh0LnJlc3RvcmUoKTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZShhLCBiKSB7XG4gIHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGEoYihjKSk7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBncmlkID0gY29tcG9zZShcbiAgaExpbmVzLFxuICB2TGluZXNcbik7XG5cbmV4cG9ydCBjb25zdCBzY2FsZSA9IGNvbXBvc2UoXG4gIGhHYXBMaW5lcyxcbiAgdkdhcExpbmVzXG4pO1xuZXhwb3J0IGNvbnN0IHRleHQgPSBjb21wb3NlKFxuICBoVGV4dCxcbiAgdlRleHRcbik7XG5cbmV4cG9ydCBjb25zdCBheGlzID0gY29tcG9zZShcbiAgeUF4ZXMsXG4gIHhBeGVzXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcGxvdChjb250ZXh0LCBwb2ludHMsIHR4LCB0eSwgZ2FwKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQbG90KGZuLCBjb2xvciA9IGdldENvbG9yKCkpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHR4LCB0eSk7XG4gICAgY29udGV4dC5tb3ZlVG8ocG9pbnRzWzBdLCBmbihwb2ludHNbMF0pKTtcbiAgICBwb2ludHMubWFwKHggPT4ge1xuICAgICAgY29udGV4dC5saW5lVG8oeCwgLWdhcCAqIGZuKHggLyBnYXApKTtcbiAgICB9KTtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDI7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=