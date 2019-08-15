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

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
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

/**
 * runs the callback against context and with positive number boundaries
 * @param {HTMLCanvasElement} context
 * @param {number} positiveNumbers
 * @param {Function} fn
 */

function draw(context, positiveNumbers, fn) {
  context.save();
  context.beginPath();
  fn(context, positiveNumbers);
  context.closePath();
  context.restore();
  return {
    context,
    positiveNumbers
  };
}
/**
 * passes context and array of positive numbers to draw() for drawing horizontal lines
 * @param {context,number} param
 */


const hLines = ({
  context,
  positiveNumbers
}) => draw(context, positiveNumbers, (context, positiveNumbers) => {
  positiveNumbers.map(x => {
    x *= _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"];
    drawLine(context, 0, x, _constants__WEBPACK_IMPORTED_MODULE_0__["WIDTH"] + _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"], x, "#999");
  });
});
/**
 * passes context and array of positive numbers to draw() for drawing Vertical Lines
 * @param {context,number} param
 * @returns {context,positiveNumbers}
 */


const vLines = ({
  context,
  positiveNumbers
}) => draw(context, positiveNumbers, (context, positiveNumbers) => {
  positiveNumbers.map(x => {
    x *= _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"];
    drawLine(context, x, 0, x, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"], "#999");
  });
});
/**
 * passes context and array of positive numbers to draw() for drawing Vertical dashed gap Lines
 * @param {context,number} param
 * @returns {context,positiveNumbers}
 */


const vGapLines = ({
  context,
  positiveNumbers
}) => draw(context, positiveNumbers, (context, positiveNumbers) => {
  context.lineWidth = 2;
  context.setLineDash([5, 1]);
  positiveNumbers.map(x => {
    x *= _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"];

    if (x % 8 === 0) {
      drawLine(context, _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"] + x, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"] + x, _constants__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"], "#666");
    }
  });
});
/**
 * passes context and array of positive numbers to draw() for drawing Horizontal dashed gap Lines
 * @param {context,number} param
 * @returns {context,positiveNumbers}
 */


const hGapLines = ({
  context,
  positiveNumbers
}) => draw(context, positiveNumbers, (context, positiveNumbers) => {
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
/**
 * passes context and array of positive numbers to draw() for writing text horizontally
 * @param {context,number} param
 * @returns {context,positiveNumbers}
 */


const hText = ({
  context,
  positiveNumbers
}) => draw(context, positiveNumbers, (context, positiveNumbers) => {
  const magicNumber = 14; // number that shift zero to the center

  positiveNumbers.map((x, i) => {
    x *= _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"];

    if (x % 8 === 0) {
      context.fillStyle = "red";
      context.font = "15px Arial";
      context.fillText(`${(i - magicNumber) / 2}`, _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"] + x, _constants__WEBPACK_IMPORTED_MODULE_0__["yMid"] - 5);
      context.textAlign = "center";
    }
  });
});
/**
 * passes context and array of positive numbers to draw() for writing text vertically
 * @param {context,number} param
 * @returns {context,positiveNumbers}
 */


const vText = ({
  context,
  positiveNumbers
}) => draw(context, positiveNumbers, (context, positiveNumbers) => {
  const magicNumber = 14; // number that shift zero to the center

  positiveNumbers.map((x, i) => {
    x *= _constants__WEBPACK_IMPORTED_MODULE_0__["GRID_GAP"];

    if (x % 8 === 0) {
      context.fillStyle = "red";
      context.font = "15px Arial";
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
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph */ "./src/graph.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);






let context = Object(_render__WEBPACK_IMPORTED_MODULE_0__["canvasManager"])("canvas");
_graph__WEBPACK_IMPORTED_MODULE_1__["grid"]({
  context,
  positiveNumbers: _constants__WEBPACK_IMPORTED_MODULE_3__["positiveNumbers"]
});
_graph__WEBPACK_IMPORTED_MODULE_1__["scale"]({
  context,
  positiveNumbers: _constants__WEBPACK_IMPORTED_MODULE_3__["positiveNumbers"]
});
_graph__WEBPACK_IMPORTED_MODULE_1__["text"]({
  context,
  positiveNumbers: _constants__WEBPACK_IMPORTED_MODULE_3__["positiveNumbers"]
});
_graph__WEBPACK_IMPORTED_MODULE_1__["axis"](context);
let plot = _graph__WEBPACK_IMPORTED_MODULE_1__["plot"](context, _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"], _constants__WEBPACK_IMPORTED_MODULE_3__["xMid"], _constants__WEBPACK_IMPORTED_MODULE_3__["yMid"], _constants__WEBPACK_IMPORTED_MODULE_3__["GAP"]);
_render__WEBPACK_IMPORTED_MODULE_0__["btnPlot"].addEventListener("click", () => {
  let str = _render__WEBPACK_IMPORTED_MODULE_0__["inputBox"].value.toString();
  let f = _utils__WEBPACK_IMPORTED_MODULE_2__["clean"](str);
  plot(f);
});

_render__WEBPACK_IMPORTED_MODULE_0__["inputBox"].onfocus = function () {
  this.value = "";
}; // plot(parabola);
// plot(sin, "green");
// // plot(cos, "red");
// // plot(hypot, "orange");

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
const btnPlot = createHtmlElement("button", "plot-input", "plot", "Plot", "Plot");
const inputBox = createHtmlElement("input", "plot-input", "x*sin(x)", "plot", "Plot");
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
/*! exports provided: filter, validate, clean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clean", function() { return clean; });
const filter = str => {
  var letters = /\b(?:sin|cos|x|!alert|!function|!let)\b|([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/g;
  return str.match(letters);
};
const validate = str => {
  str = str.replace("sin", "Math.sin");
  str = str.replace("cos", "Math.cos");
  str = str.replace("hypot", "Math.hypot");
  return str;
};
const clean = str => {
  if (!filter(str)) {
    return "";
  } else {
    str = validate(str);
    return new Function("x", "return " + str);
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/OGYzNCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsiV0lEVEgiLCJIRUlHSFQiLCJHQVAiLCJHUklEX0dBUCIsInhNaWQiLCJ5TWlkIiwicG9zaXRpdmVOdW1iZXJzIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1hcCIsIngiLCJuZWdhdGl2ZU51bWJlcnMiLCJudW1iZXJzIiwiY29uY2F0IiwiZHJhdyIsImNvbnRleHQiLCJmbiIsInNhdmUiLCJiZWdpblBhdGgiLCJjbG9zZVBhdGgiLCJyZXN0b3JlIiwiaExpbmVzIiwic2V0dGluZ3MiLCJkcmF3TGluZSIsInZMaW5lcyIsInZHYXBMaW5lcyIsImxpbmVXaWR0aCIsInNldExpbmVEYXNoIiwiaEdhcExpbmVzIiwiZmlsbFN0eWxlIiwiaFRleHQiLCJtYWdpY051bWJlciIsImkiLCJmb250IiwiZmlsbFRleHQiLCJ0ZXh0QWxpZ24iLCJ2VGV4dCIsImRyYXdBeGVzIiwiYXhlcyIsInhBeGVzIiwiZ2V0Q29sb3IiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsInlBeGVzIiwieDAiLCJ5MCIsInhuIiwieW4iLCJjb2xvciIsInN0cm9rZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY29tcG9zZSIsImEiLCJiIiwiYyIsImdyaWQiLCJzY2FsZSIsInRleHQiLCJheGlzIiwicGxvdCIsInBvaW50cyIsInR4IiwidHkiLCJnYXAiLCJnZXRQbG90IiwidHJhbnNsYXRlIiwiY2FudmFzTWFuYWdlciIsImdyYXBoIiwiY29uc3RhbnRzIiwiYnRuUGxvdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHIiLCJpbnB1dEJveCIsInZhbHVlIiwiZiIsInV0aWxzIiwib25mb2N1cyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNhbnZhc0lEIiwic2V0QXR0cmlidXRlIiwiY2FudmFzIiwiYm9keSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0Q29udGV4dCIsImNyZWF0ZUh0bWxFbGVtZW50Iiwic2lkZSIsImVsZW1lbnQiLCJpZCIsImlubmVySHRtbCIsImVsbSIsImlubmVySFRNTCIsImNvbiIsImJ0biIsImZpbHRlciIsImxldHRlcnMiLCJtYXRjaCIsInZhbGlkYXRlIiwicmVwbGFjZSIsImNsZWFuIiwiRnVuY3Rpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdI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R0EsR0FBRyxDQUFDNkIsT0FBSixDQUFZLEtBQVosRUFBbUIsVUFBbkIsQ0FBTjtBQUNBN0IsS0FBRyxHQUFHQSxHQUFHLENBQUM2QixPQUFKLENBQVksT0FBWixFQUFxQixZQUFyQixDQUFOO0FBQ0EsU0FBTzdCLEdBQVA7QUFDRCxDQUxNO0FBT0EsTUFBTThCLEtBQUssR0FBRzlCLEdBQUcsSUFBSTtBQUMxQixNQUFJLENBQUN5QixNQUFNLENBQUN6QixHQUFELENBQVgsRUFBa0I7QUFDaEIsV0FBTyxFQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLE9BQUcsR0FBRzRCLFFBQVEsQ0FBQzVCLEdBQUQsQ0FBZDtBQUNBLFdBQU8sSUFBSStCLFFBQUosQ0FBYSxHQUFiLEVBQWtCLFlBQVkvQixHQUE5QixDQUFQO0FBQ0Q7QUFDRixDQVBNLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjAyNDtcXG59XFxuLmNhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luLXRvcDogNGVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuZm9vdGVyID4gYSB7XFxuICBjb2xvcjogI2U2ODQ0ZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDRlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5mb290ZXIgPiBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4jc2lkZSB7XFxuICBtYXJnaW4tdG9wOiA0ZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjgsIDE5NSwgMTM2LCAwLjIpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gIHBhZGRpbmctdG9wOiAxZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZTY4NDRmO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJleHBvcnQgY29uc3QgV0lEVEggPSA2MDA7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gNjAwO1xuZXhwb3J0IGNvbnN0IEdBUCA9IDQwO1xuZXhwb3J0IGNvbnN0IEdSSURfR0FQID0gMjA7XG5leHBvcnQgY29uc3QgeE1pZCA9IFdJRFRIIC8gMjtcbmV4cG9ydCBjb25zdCB5TWlkID0gSEVJR0hUIC8gMjtcblxuZXhwb3J0IGNvbnN0IHBvc2l0aXZlTnVtYmVycyA9IEFycmF5LmZyb20oQXJyYXkoV0lEVEgpLmtleXMoKSkubWFwKHggPT4geCk7XG5jb25zdCBuZWdhdGl2ZU51bWJlcnMgPSBwb3NpdGl2ZU51bWJlcnMubWFwKHggPT4geCAtIFdJRFRIKTtcblxuZXhwb3J0IGNvbnN0IG51bWJlcnMgPSBuZWdhdGl2ZU51bWJlcnMuY29uY2F0KHBvc2l0aXZlTnVtYmVycyk7XG4iLCJpbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBydW5zIHRoZSBjYWxsYmFjayBhZ2FpbnN0IGNvbnRleHQgYW5kIHdpdGggcG9zaXRpdmUgbnVtYmVyIGJvdW5kYXJpZXNcbiAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGl2ZU51bWJlcnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIGRyYXcoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzLCBmbikge1xuICBjb250ZXh0LnNhdmUoKTtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgZm4oY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzKTtcbiAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgY29udGV4dC5yZXN0b3JlKCk7XG4gIHJldHVybiB7IGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycyB9O1xufVxuXG4vKipcbiAqIHBhc3NlcyBjb250ZXh0IGFuZCBhcnJheSBvZiBwb3NpdGl2ZSBudW1iZXJzIHRvIGRyYXcoKSBmb3IgZHJhd2luZyBob3Jpem9udGFsIGxpbmVzXG4gKiBAcGFyYW0ge2NvbnRleHQsbnVtYmVyfSBwYXJhbVxuICovXG5jb25zdCBoTGluZXMgPSAoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSkgPT5cbiAgZHJhdyhjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMsIChjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMpID0+IHtcbiAgICBwb3NpdGl2ZU51bWJlcnMubWFwKHggPT4ge1xuICAgICAgeCAqPSBzZXR0aW5ncy5HUklEX0dBUDtcbiAgICAgIGRyYXdMaW5lKGNvbnRleHQsIDAsIHgsIHNldHRpbmdzLldJRFRIICsgc2V0dGluZ3MuR1JJRF9HQVAsIHgsIFwiIzk5OVwiKTtcbiAgICB9KTtcbiAgfSk7XG5cbi8qKlxuICogcGFzc2VzIGNvbnRleHQgYW5kIGFycmF5IG9mIHBvc2l0aXZlIG51bWJlcnMgdG8gZHJhdygpIGZvciBkcmF3aW5nIFZlcnRpY2FsIExpbmVzXG4gKiBAcGFyYW0ge2NvbnRleHQsbnVtYmVyfSBwYXJhbVxuICogQHJldHVybnMge2NvbnRleHQscG9zaXRpdmVOdW1iZXJzfVxuICovXG5jb25zdCB2TGluZXMgPSAoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSkgPT5cbiAgZHJhdyhjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMsIChjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMpID0+IHtcbiAgICBwb3NpdGl2ZU51bWJlcnMubWFwKHggPT4ge1xuICAgICAgeCAqPSBzZXR0aW5ncy5HUklEX0dBUDtcbiAgICAgIGRyYXdMaW5lKGNvbnRleHQsIHgsIDAsIHgsIHNldHRpbmdzLkhFSUdIVCwgXCIjOTk5XCIpO1xuICAgIH0pO1xuICB9KTtcblxuLyoqXG4gKiBwYXNzZXMgY29udGV4dCBhbmQgYXJyYXkgb2YgcG9zaXRpdmUgbnVtYmVycyB0byBkcmF3KCkgZm9yIGRyYXdpbmcgVmVydGljYWwgZGFzaGVkIGdhcCBMaW5lc1xuICogQHBhcmFtIHtjb250ZXh0LG51bWJlcn0gcGFyYW1cbiAqIEByZXR1cm5zIHtjb250ZXh0LHBvc2l0aXZlTnVtYmVyc31cbiAqL1xuY29uc3QgdkdhcExpbmVzID0gKHsgY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzIH0pID0+XG4gIGRyYXcoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzLCAoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzKSA9PiB7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xuICAgIGNvbnRleHQuc2V0TGluZURhc2goWzUsIDFdKTtcbiAgICBwb3NpdGl2ZU51bWJlcnMubWFwKHggPT4ge1xuICAgICAgeCAqPSBzZXR0aW5ncy5HUklEX0dBUDtcbiAgICAgIGlmICh4ICUgOCA9PT0gMCkge1xuICAgICAgICBkcmF3TGluZShcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIHNldHRpbmdzLkdSSURfR0FQICsgeCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHNldHRpbmdzLkdSSURfR0FQICsgeCxcbiAgICAgICAgICBzZXR0aW5ncy5IRUlHSFQsXG4gICAgICAgICAgXCIjNjY2XCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbi8qKlxuICogcGFzc2VzIGNvbnRleHQgYW5kIGFycmF5IG9mIHBvc2l0aXZlIG51bWJlcnMgdG8gZHJhdygpIGZvciBkcmF3aW5nIEhvcml6b250YWwgZGFzaGVkIGdhcCBMaW5lc1xuICogQHBhcmFtIHtjb250ZXh0LG51bWJlcn0gcGFyYW1cbiAqIEByZXR1cm5zIHtjb250ZXh0LHBvc2l0aXZlTnVtYmVyc31cbiAqL1xuY29uc3QgaEdhcExpbmVzID0gKHsgY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzIH0pID0+XG4gIGRyYXcoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzLCAoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzKSA9PiB7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xuICAgIGNvbnRleHQuc2V0TGluZURhc2goWzUsIDFdKTtcbiAgICBwb3NpdGl2ZU51bWJlcnMubWFwKHggPT4ge1xuICAgICAgeCAqPSBzZXR0aW5ncy5HUklEX0dBUDtcbiAgICAgIGlmICh4ICUgOCA9PT0gMCkge1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGRyYXdMaW5lKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBzZXR0aW5ncy5HUklEX0dBUCArIHgsXG4gICAgICAgICAgc2V0dGluZ3MuV0lEVEgsXG4gICAgICAgICAgc2V0dGluZ3MuR1JJRF9HQVAgKyB4LFxuICAgICAgICAgIFwiIzY2NlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4vKipcbiAqIHBhc3NlcyBjb250ZXh0IGFuZCBhcnJheSBvZiBwb3NpdGl2ZSBudW1iZXJzIHRvIGRyYXcoKSBmb3Igd3JpdGluZyB0ZXh0IGhvcml6b250YWxseVxuICogQHBhcmFtIHtjb250ZXh0LG51bWJlcn0gcGFyYW1cbiAqIEByZXR1cm5zIHtjb250ZXh0LHBvc2l0aXZlTnVtYmVyc31cbiAqL1xuY29uc3QgaFRleHQgPSAoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSkgPT5cbiAgZHJhdyhjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMsIChjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMpID0+IHtcbiAgICBjb25zdCBtYWdpY051bWJlciA9IDE0OyAvLyBudW1iZXIgdGhhdCBzaGlmdCB6ZXJvIHRvIHRoZSBjZW50ZXJcbiAgICBwb3NpdGl2ZU51bWJlcnMubWFwKCh4LCBpKSA9PiB7XG4gICAgICB4ICo9IHNldHRpbmdzLkdSSURfR0FQO1xuICAgICAgaWYgKHggJSA4ID09PSAwKSB7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY29udGV4dC5mb250ID0gXCIxNXB4IEFyaWFsXCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoXG4gICAgICAgICAgYCR7KGkgLSBtYWdpY051bWJlcikgLyAyfWAsXG4gICAgICAgICAgc2V0dGluZ3MuR1JJRF9HQVAgKyB4LFxuICAgICAgICAgIHNldHRpbmdzLnlNaWQgLSA1XG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbi8qKlxuICogcGFzc2VzIGNvbnRleHQgYW5kIGFycmF5IG9mIHBvc2l0aXZlIG51bWJlcnMgdG8gZHJhdygpIGZvciB3cml0aW5nIHRleHQgdmVydGljYWxseVxuICogQHBhcmFtIHtjb250ZXh0LG51bWJlcn0gcGFyYW1cbiAqIEByZXR1cm5zIHtjb250ZXh0LHBvc2l0aXZlTnVtYmVyc31cbiAqL1xuY29uc3QgdlRleHQgPSAoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSkgPT5cbiAgZHJhdyhjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMsIChjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMpID0+IHtcbiAgICBjb25zdCBtYWdpY051bWJlciA9IDE0OyAvLyBudW1iZXIgdGhhdCBzaGlmdCB6ZXJvIHRvIHRoZSBjZW50ZXJcblxuICAgIHBvc2l0aXZlTnVtYmVycy5tYXAoKHgsIGkpID0+IHtcbiAgICAgIHggKj0gc2V0dGluZ3MuR1JJRF9HQVA7XG4gICAgICBpZiAoeCAlIDggPT09IDApIHtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjb250ZXh0LmZvbnQgPSBcIjE1cHggQXJpYWxcIjtcblxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KFxuICAgICAgICAgIGAkeyhpIC0gbWFnaWNOdW1iZXIpIC8gLTJ9YCxcbiAgICAgICAgICBzZXR0aW5ncy55TWlkICsgNSxcbiAgICAgICAgICBzZXR0aW5ncy5HUklEX0dBUCArIHhcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuZnVuY3Rpb24gZHJhd0F4ZXMoY29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gYXhlcyhmbikge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMjtcbiAgICBmbihjb250ZXh0KTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9O1xufVxuXG5jb25zdCB4QXhlcyA9IGNvbnRleHQgPT5cbiAgZHJhd0F4ZXMoY29udGV4dCkoKCkgPT5cbiAgICBkcmF3TGluZShcbiAgICAgIGNvbnRleHQsXG4gICAgICBzZXR0aW5ncy54TWlkLFxuICAgICAgMCxcbiAgICAgIHNldHRpbmdzLnhNaWQsXG4gICAgICBzZXR0aW5ncy5IRUlHSFQsXG4gICAgICBcIiMwMDA4ZmZcIlxuICAgIClcbiAgKTtcbmNvbnN0IGdldENvbG9yID0gKCkgPT5cbiAgXCIjXCIgK1xuICBNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDE2KVxuICAgIC5zbGljZSgtNik7XG5cbmNvbnN0IHlBeGVzID0gY29udGV4dCA9PlxuICBkcmF3QXhlcyhjb250ZXh0KSgoKSA9PlxuICAgIGRyYXdMaW5lKFxuICAgICAgY29udGV4dCxcbiAgICAgIDAsXG4gICAgICBzZXR0aW5ncy54TWlkLFxuICAgICAgc2V0dGluZ3MuSEVJR0hULFxuICAgICAgc2V0dGluZ3MueE1pZCxcbiAgICAgIFwiIzAwMDhmZlwiXG4gICAgKVxuICApO1xuXG5mdW5jdGlvbiBkcmF3TGluZShjb250ZXh0LCB4MCwgeTAsIHhuLCB5biwgY29sb3IpIHtcbiAgY29udGV4dC5zYXZlKCk7XG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgY29udGV4dC5tb3ZlVG8oeDAsIHkwKTtcbiAgY29udGV4dC5saW5lVG8oeG4sIHluKTtcbiAgY29udGV4dC5zdHJva2UoKTtcbiAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgY29udGV4dC5yZXN0b3JlKCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvc2UoYSwgYikge1xuICByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBhKGIoYykpO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ3JpZCA9IGNvbXBvc2UoXG4gIGhMaW5lcyxcbiAgdkxpbmVzXG4pO1xuXG5leHBvcnQgY29uc3Qgc2NhbGUgPSBjb21wb3NlKFxuICBoR2FwTGluZXMsXG4gIHZHYXBMaW5lc1xuKTtcbmV4cG9ydCBjb25zdCB0ZXh0ID0gY29tcG9zZShcbiAgaFRleHQsXG4gIHZUZXh0XG4pO1xuXG5leHBvcnQgY29uc3QgYXhpcyA9IGNvbXBvc2UoXG4gIHlBeGVzLFxuICB4QXhlc1xuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsb3QoY29udGV4dCwgcG9pbnRzLCB0eCwgdHksIGdhcCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UGxvdChmbiwgY29sb3IgPSBnZXRDb2xvcigpKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSh0eCwgdHkpO1xuICAgIGNvbnRleHQubW92ZVRvKHBvaW50c1swXSwgZm4ocG9pbnRzWzBdKSk7XG4gICAgcG9pbnRzLm1hcCh4ID0+IHtcbiAgICAgIGNvbnRleHQubGluZVRvKHgsIC1nYXAgKiBmbih4IC8gZ2FwKSk7XG4gICAgfSk7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBjYW52YXNNYW5hZ2VyLCBpbnB1dEJveCwgYnRuUGxvdCB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0ICogYXMgZ3JhcGggZnJvbSBcIi4vZ3JhcGhcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBudW1iZXJzLCBwb3NpdGl2ZU51bWJlcnMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmxldCBjb250ZXh0ID0gY2FudmFzTWFuYWdlcihcImNhbnZhc1wiKTtcblxuZ3JhcGguZ3JpZCh7IGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycyB9KTtcbmdyYXBoLnNjYWxlKHsgY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzIH0pO1xuZ3JhcGgudGV4dCh7IGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycyB9KTtcbmdyYXBoLmF4aXMoY29udGV4dCk7XG5cbmxldCBwbG90ID0gZ3JhcGgucGxvdChcbiAgY29udGV4dCxcbiAgbnVtYmVycyxcbiAgY29uc3RhbnRzLnhNaWQsXG4gIGNvbnN0YW50cy55TWlkLFxuICBjb25zdGFudHMuR0FQXG4pO1xuXG5idG5QbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCBzdHIgPSBpbnB1dEJveC52YWx1ZS50b1N0cmluZygpO1xuICBsZXQgZiA9IHV0aWxzLmNsZWFuKHN0cik7XG4gIHBsb3QoZik7XG59KTtcbmlucHV0Qm94Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52YWx1ZSA9IFwiXCI7XG59O1xuLy8gcGxvdChwYXJhYm9sYSk7XG5cbi8vIHBsb3Qoc2luLCBcImdyZWVuXCIpO1xuLy8gLy8gcGxvdChjb3MsIFwicmVkXCIpO1xuLy8gLy8gcGxvdChoeXBvdCwgXCJvcmFuZ2VcIik7XG4iLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5leHBvcnQgZnVuY3Rpb24gY2FudmFzTWFuYWdlcihjYW52YXNJRCkge1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXJcIik7XG5cbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIGNhbnZhc0lEKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FudmFzXCIpO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgY29uc3RhbnRzLldJRFRIICsgXCJcIik7XG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgY29uc3RhbnRzLldJRFRIICsgXCJcIik7XG5cbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGJ0blBsb3QgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgXCJidXR0b25cIixcbiAgXCJwbG90LWlucHV0XCIsXG4gIFwicGxvdFwiLFxuICBcIlBsb3RcIixcbiAgXCJQbG90XCJcbik7XG5cbmV4cG9ydCBjb25zdCBpbnB1dEJveCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICBcImlucHV0XCIsXG4gIFwicGxvdC1pbnB1dFwiLFxuICBcIngqc2luKHgpXCIsXG4gIFwicGxvdFwiLFxuICBcIlBsb3RcIlxuKTtcblxuY29uc3Qgc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZVwiKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlKTtcbnNpZGUuYXBwZW5kQ2hpbGQoaW5wdXRCb3gpO1xuc2lkZS5hcHBlbmRDaGlsZChidG5QbG90KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWxFbGVtZW50KGVsZW1lbnQsIGlkLCB2YWx1ZSwgaW5uZXJIdG1sKSB7XG4gIGxldCBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBlbG0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBlbG0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdmFsdWUpO1xuICBlbG0uaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICBjb25zdCBjb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uaW5uZXJIVE1MID0gXCJjbG9zZVwiO1xuXG4gIGNvbi5hcHBlbmRDaGlsZChlbG0pO1xuICByZXR1cm4gZWxtO1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0IGNvbnN0IGZpbHRlciA9IHN0ciA9PiB7XG4gIHZhciBsZXR0ZXJzID0gL1xcYig/OnNpbnxjb3N8eHwhYWxlcnR8IWZ1bmN0aW9ufCFsZXQpXFxifChbLStdP1swLTldKlxcLj9bMC05XStbXFwvXFwrXFwtXFwqXSkrKFstK10/WzAtOV0qXFwuP1swLTldKykvZztcbiAgcmV0dXJuIHN0ci5tYXRjaChsZXR0ZXJzKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZSA9IHN0ciA9PiB7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKFwic2luXCIsIFwiTWF0aC5zaW5cIik7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKFwiY29zXCIsIFwiTWF0aC5jb3NcIik7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKFwiaHlwb3RcIiwgXCJNYXRoLmh5cG90XCIpO1xuICByZXR1cm4gc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFuID0gc3RyID0+IHtcbiAgaWYgKCFmaWx0ZXIoc3RyKSkge1xuICAgIHJldHVybiBcIlwiO1xuICB9IGVsc2Uge1xuICAgIHN0ciA9IHZhbGlkYXRlKHN0cik7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcInhcIiwgXCJyZXR1cm4gXCIgKyBzdHIpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==