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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/OGYzNCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsiV0lEVEgiLCJIRUlHSFQiLCJHQVAiLCJHUklEX0dBUCIsInhNaWQiLCJ5TWlkIiwicG9zaXRpdmVOdW1iZXJzIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm1hcCIsIngiLCJuZWdhdGl2ZU51bWJlcnMiLCJudW1iZXJzIiwiY29uY2F0IiwiZ3JpZFNldHRpbmciLCJjb250ZXh0IiwiZm4iLCJzYXZlIiwiYmVnaW5QYXRoIiwiY2xvc2VQYXRoIiwicmVzdG9yZSIsImhMaW5lcyIsInNldHRpbmdzIiwiZHJhd0xpbmUiLCJ2TGluZXMiLCJ2R2FwTGluZXMiLCJsaW5lV2lkdGgiLCJzZXRMaW5lRGFzaCIsImhHYXBMaW5lcyIsImZpbGxTdHlsZSIsImhUZXh0IiwibWFnaWNOdW1iZXIiLCJpIiwiZmlsbFRleHQiLCJ0ZXh0QWxpZ24iLCJ2VGV4dCIsImRyYXdBeGVzIiwiYXhlcyIsInhBeGVzIiwiZ2V0Q29sb3IiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsInlBeGVzIiwieDAiLCJ5MCIsInhuIiwieW4iLCJjb2xvciIsInN0cm9rZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY29tcG9zZSIsImEiLCJiIiwiYyIsImdyaWQiLCJzY2FsZSIsInRleHQiLCJheGlzIiwicGxvdCIsInBvaW50cyIsInR4IiwidHkiLCJnYXAiLCJnZXRQbG90IiwidHJhbnNsYXRlIiwiY2FudmFzTWFuYWdlciIsImdyYXBoIiwiY29uc3RhbnRzIiwiYnRuUGxvdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHIiLCJpbnB1dEJveCIsInZhbHVlIiwiZiIsInV0aWxzIiwib25mb2N1cyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNhbnZhc0lEIiwic2V0QXR0cmlidXRlIiwiY2FudmFzIiwiYm9keSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0Q29udGV4dCIsImNyZWF0ZUh0bWxFbGVtZW50Iiwic2lkZSIsImVsZW1lbnQiLCJpZCIsImlubmVySHRtbCIsImVsbSIsImlubmVySFRNTCIsImNvbiIsImJ0biIsImZpbHRlciIsImxldHRlcnMiLCJtYXRjaCIsInZhbGlkYXRlIiwicmVwbGFjZSIsImNsZWFuIiwiRnVuY3Rpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsU0FBUyw4QkFBOEIsR0FBRyxXQUFXLDhCQUE4QixvQkFBb0Isb0JBQW9CLEdBQUcsZ0JBQWdCLHVCQUF1QixrQkFBa0IsZUFBZSxpQkFBaUIsR0FBRyxZQUFZLHVCQUF1QixlQUFlLGlCQUFpQixHQUFHLGNBQWMsbUJBQW1CLDBCQUEwQixvQkFBb0Isb0JBQW9CLG1CQUFtQixHQUFHLHNCQUFzQiwrQkFBK0IsR0FBRyxTQUFTLG9CQUFvQixxQkFBcUIsaUJBQWlCLCtDQUErQyxtQkFBbUIseUJBQXlCLHFCQUFxQixHQUFHLFlBQVksZUFBZSw4QkFBOEIsaUJBQWlCLHVCQUF1QixrQkFBa0IsaUJBQWlCLHVCQUF1QixvQkFBb0IsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsV0FBVyxlQUFlLHVCQUF1QixrQkFBa0IsMEJBQTBCLDJCQUEyQix1QkFBdUIsMkJBQTJCLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNGM2hDOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMscUJBQXFCO0FBQ2hFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxLQUFLLEdBQUcsR0FBZDtBQUNBLE1BQU1DLE1BQU0sR0FBRyxHQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFDQSxNQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFDQSxNQUFNQyxJQUFJLEdBQUdKLEtBQUssR0FBRyxDQUFyQjtBQUNBLE1BQU1LLElBQUksR0FBR0osTUFBTSxHQUFHLENBQXRCO0FBRUEsTUFBTUssZUFBZSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDUCxLQUFELENBQUwsQ0FBYVMsSUFBYixFQUFYLEVBQWdDQyxHQUFoQyxDQUFvQ0MsQ0FBQyxJQUFJQSxDQUF6QyxDQUF4QjtBQUNQLE1BQU1DLGVBQWUsR0FBR04sZUFBZSxDQUFDSSxHQUFoQixDQUFvQkMsQ0FBQyxJQUFJQSxDQUFDLEdBQUdYLEtBQTdCLENBQXhCO0FBRU8sTUFBTWEsT0FBTyxHQUFHRCxlQUFlLENBQUNFLE1BQWhCLENBQXVCUixlQUF2QixDQUFoQixDOzs7Ozs7Ozs7Ozs7QUNWUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLFNBQVNTLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCVixlQUE5QixFQUErQ1csRUFBL0MsRUFBbUQ7QUFDakRELFNBQU8sQ0FBQ0UsSUFBUjtBQUNBRixTQUFPLENBQUNHLFNBQVI7QUFDQUYsSUFBRSxDQUFDRCxPQUFELEVBQVVWLGVBQVYsQ0FBRjtBQUNBVSxTQUFPLENBQUNJLFNBQVI7QUFDQUosU0FBTyxDQUFDSyxPQUFSO0FBQ0EsU0FBTztBQUFFTCxXQUFGO0FBQVdWO0FBQVgsR0FBUDtBQUNELEMsQ0FFRDs7O0FBQ0EsTUFBTWdCLE1BQU0sR0FBRyxDQUFDO0FBQUVOLFNBQUY7QUFBV1Y7QUFBWCxDQUFELEtBQ2JTLFdBQVcsQ0FBQ0MsT0FBRCxFQUFVVixlQUFWLEVBQTJCLENBQUNVLE9BQUQsRUFBVVYsZUFBVixLQUE4QjtBQUNsRUEsaUJBQWUsQ0FBQ0ksR0FBaEIsQ0FBb0JDLENBQUMsSUFBSTtBQUN2QkEsS0FBQyxJQUFJWSxtREFBTDtBQUNBQyxZQUFRLENBQUNSLE9BQUQsRUFBVSxDQUFWLEVBQWFMLENBQWIsRUFBZ0JZLGdEQUFBLEdBQWlCQSxtREFBakMsRUFBb0RaLENBQXBELEVBQXVELE1BQXZELENBQVI7QUFDRCxHQUhEO0FBSUQsQ0FMVSxDQURiLEMsQ0FRQTs7O0FBQ0EsTUFBTWMsTUFBTSxHQUFHLENBQUM7QUFBRVQsU0FBRjtBQUFXVjtBQUFYLENBQUQsS0FDYlMsV0FBVyxDQUFDQyxPQUFELEVBQVVWLGVBQVYsRUFBMkIsQ0FBQ1UsT0FBRCxFQUFVVixlQUFWLEtBQThCO0FBQ2xFQSxpQkFBZSxDQUFDSSxHQUFoQixDQUFvQkMsQ0FBQyxJQUFJO0FBQ3ZCQSxLQUFDLElBQUlZLG1EQUFMO0FBQ0FDLFlBQVEsQ0FBQ1IsT0FBRCxFQUFVTCxDQUFWLEVBQWEsQ0FBYixFQUFnQkEsQ0FBaEIsRUFBbUJZLGlEQUFuQixFQUFvQyxNQUFwQyxDQUFSO0FBQ0QsR0FIRDtBQUlELENBTFUsQ0FEYixDLENBUUE7OztBQUNBLE1BQU1HLFNBQVMsR0FBRyxDQUFDO0FBQUVWLFNBQUY7QUFBV1Y7QUFBWCxDQUFELEtBQ2hCUyxXQUFXLENBQUNDLE9BQUQsRUFBVVYsZUFBVixFQUEyQixDQUFDVSxPQUFELEVBQVVWLGVBQVYsS0FBOEI7QUFDbEVVLFNBQU8sQ0FBQ1csU0FBUixHQUFvQixDQUFwQjtBQUNBWCxTQUFPLENBQUNZLFdBQVIsQ0FBb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFwQjtBQUNBdEIsaUJBQWUsQ0FBQ0ksR0FBaEIsQ0FBb0JDLENBQUMsSUFBSTtBQUN2QkEsS0FBQyxJQUFJWSxtREFBTDs7QUFDQSxRQUFJWixDQUFDLEdBQUcsQ0FBSixLQUFVLENBQWQsRUFBaUI7QUFDZmEsY0FBUSxDQUNOUixPQURNLEVBRU5PLG1EQUFBLEdBQW9CWixDQUZkLEVBR04sQ0FITSxFQUlOWSxtREFBQSxHQUFvQlosQ0FKZCxFQUtOWSxpREFMTSxFQU1OLE1BTk0sQ0FBUjtBQVFEO0FBQ0YsR0FaRDtBQWFELENBaEJVLENBRGIsQyxDQW1CQTs7O0FBQ0EsTUFBTU0sU0FBUyxHQUFHLENBQUM7QUFBRWIsU0FBRjtBQUFXVjtBQUFYLENBQUQsS0FDaEJTLFdBQVcsQ0FBQ0MsT0FBRCxFQUFVVixlQUFWLEVBQTJCLENBQUNVLE9BQUQsRUFBVVYsZUFBVixLQUE4QjtBQUNsRVUsU0FBTyxDQUFDVyxTQUFSLEdBQW9CLENBQXBCO0FBQ0FYLFNBQU8sQ0FBQ1ksV0FBUixDQUFvQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXBCO0FBQ0F0QixpQkFBZSxDQUFDSSxHQUFoQixDQUFvQkMsQ0FBQyxJQUFJO0FBQ3ZCQSxLQUFDLElBQUlZLG1EQUFMOztBQUNBLFFBQUlaLENBQUMsR0FBRyxDQUFKLEtBQVUsQ0FBZCxFQUFpQjtBQUNmSyxhQUFPLENBQUNjLFNBQVIsR0FBb0IsS0FBcEI7QUFDQU4sY0FBUSxDQUNOUixPQURNLEVBRU4sQ0FGTSxFQUdOTyxtREFBQSxHQUFvQlosQ0FIZCxFQUlOWSxnREFKTSxFQUtOQSxtREFBQSxHQUFvQlosQ0FMZCxFQU1OLE1BTk0sQ0FBUjtBQVFEO0FBQ0YsR0FiRDtBQWNELENBakJVLENBRGI7O0FBb0JBLE1BQU1vQixLQUFLLEdBQUcsQ0FBQztBQUFFZixTQUFGO0FBQVdWO0FBQVgsQ0FBRCxLQUNaUyxXQUFXLENBQUNDLE9BQUQsRUFBVVYsZUFBVixFQUEyQixDQUFDVSxPQUFELEVBQVVWLGVBQVYsS0FBOEI7QUFDbEUsUUFBTTBCLFdBQVcsR0FBRyxFQUFwQixDQURrRSxDQUMxQzs7QUFDeEIxQixpQkFBZSxDQUFDSSxHQUFoQixDQUFvQixDQUFDQyxDQUFELEVBQUlzQixDQUFKLEtBQVU7QUFDNUJ0QixLQUFDLElBQUlZLG1EQUFMOztBQUNBLFFBQUlaLENBQUMsR0FBRyxDQUFKLEtBQVUsQ0FBZCxFQUFpQjtBQUNmSyxhQUFPLENBQUNjLFNBQVIsR0FBb0IsS0FBcEI7QUFDQWQsYUFBTyxDQUFDa0IsUUFBUixDQUNHLEdBQUUsQ0FBQ0QsQ0FBQyxHQUFHRCxXQUFMLElBQW9CLENBQUUsRUFEM0IsRUFFRVQsbURBQUEsR0FBb0JaLENBRnRCLEVBR0VZLCtDQUFBLEdBQWdCLENBSGxCO0FBS0FQLGFBQU8sQ0FBQ21CLFNBQVIsR0FBb0IsUUFBcEI7QUFDRDtBQUNGLEdBWEQ7QUFZRCxDQWRVLENBRGI7O0FBaUJBLE1BQU1DLEtBQUssR0FBRyxDQUFDO0FBQUVwQixTQUFGO0FBQVdWO0FBQVgsQ0FBRCxLQUNaUyxXQUFXLENBQUNDLE9BQUQsRUFBVVYsZUFBVixFQUEyQixDQUFDVSxPQUFELEVBQVVWLGVBQVYsS0FBOEI7QUFDbEUsUUFBTTBCLFdBQVcsR0FBRyxFQUFwQixDQURrRSxDQUMxQzs7QUFFeEIxQixpQkFBZSxDQUFDSSxHQUFoQixDQUFvQixDQUFDQyxDQUFELEVBQUlzQixDQUFKLEtBQVU7QUFDNUJ0QixLQUFDLElBQUlZLG1EQUFMOztBQUNBLFFBQUlaLENBQUMsR0FBRyxDQUFKLEtBQVUsQ0FBZCxFQUFpQjtBQUNmSyxhQUFPLENBQUNjLFNBQVIsR0FBb0IsS0FBcEI7QUFDQWQsYUFBTyxDQUFDa0IsUUFBUixDQUNHLEdBQUUsQ0FBQ0QsQ0FBQyxHQUFHRCxXQUFMLElBQW9CLENBQUMsQ0FBRSxFQUQ1QixFQUVFVCwrQ0FBQSxHQUFnQixDQUZsQixFQUdFQSxtREFBQSxHQUFvQlosQ0FIdEI7QUFLQUssYUFBTyxDQUFDbUIsU0FBUixHQUFvQixRQUFwQjtBQUNEO0FBQ0YsR0FYRDtBQVlELENBZlUsQ0FEYjs7QUFrQkEsU0FBU0UsUUFBVCxDQUFrQnJCLE9BQWxCLEVBQTJCO0FBQ3pCLFNBQU8sU0FBU3NCLElBQVQsQ0FBY3JCLEVBQWQsRUFBa0I7QUFDdkJELFdBQU8sQ0FBQ0UsSUFBUjtBQUNBRixXQUFPLENBQUNXLFNBQVIsR0FBb0IsQ0FBcEI7QUFDQVYsTUFBRSxDQUFDRCxPQUFELENBQUY7QUFDQUEsV0FBTyxDQUFDSSxTQUFSO0FBQ0FKLFdBQU8sQ0FBQ0ssT0FBUjtBQUNBLFdBQU9MLE9BQVA7QUFDRCxHQVBEO0FBUUQ7O0FBRUQsTUFBTXVCLEtBQUssR0FBR3ZCLE9BQU8sSUFDbkJxQixRQUFRLENBQUNyQixPQUFELENBQVIsQ0FBa0IsTUFDaEJRLFFBQVEsQ0FDTlIsT0FETSxFQUVOTywrQ0FGTSxFQUdOLENBSE0sRUFJTkEsK0NBSk0sRUFLTkEsaURBTE0sRUFNTixTQU5NLENBRFYsQ0FERjs7QUFXQSxNQUFNaUIsUUFBUSxHQUFHLE1BQ2YsTUFDQUMsSUFBSSxDQUFDQyxNQUFMLEdBQ0dDLFFBREgsQ0FDWSxFQURaLEVBRUdDLEtBRkgsQ0FFUyxDQUFDLENBRlYsQ0FGRjs7QUFLQSxNQUFNQyxLQUFLLEdBQUc3QixPQUFPLElBQ25CcUIsUUFBUSxDQUFDckIsT0FBRCxDQUFSLENBQWtCLE1BQ2hCUSxRQUFRLENBQ05SLE9BRE0sRUFFTixDQUZNLEVBR05PLCtDQUhNLEVBSU5BLGlEQUpNLEVBS05BLCtDQUxNLEVBTU4sU0FOTSxDQURWLENBREY7O0FBWUEsU0FBU0MsUUFBVCxDQUFrQlIsT0FBbEIsRUFBMkI4QixFQUEzQixFQUErQkMsRUFBL0IsRUFBbUNDLEVBQW5DLEVBQXVDQyxFQUF2QyxFQUEyQ0MsS0FBM0MsRUFBa0Q7QUFDaERsQyxTQUFPLENBQUNFLElBQVI7QUFDQUYsU0FBTyxDQUFDRyxTQUFSO0FBQ0FILFNBQU8sQ0FBQ21DLFdBQVIsR0FBc0JELEtBQXRCO0FBQ0FsQyxTQUFPLENBQUNvQyxNQUFSLENBQWVOLEVBQWYsRUFBbUJDLEVBQW5CO0FBQ0EvQixTQUFPLENBQUNxQyxNQUFSLENBQWVMLEVBQWYsRUFBbUJDLEVBQW5CO0FBQ0FqQyxTQUFPLENBQUNzQyxNQUFSO0FBQ0F0QyxTQUFPLENBQUNJLFNBQVI7QUFDQUosU0FBTyxDQUFDSyxPQUFSO0FBQ0Q7O0FBRUQsU0FBU2tDLE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUNyQixTQUFPLFVBQVNDLENBQVQsRUFBWTtBQUNqQixXQUFPRixDQUFDLENBQUNDLENBQUMsQ0FBQ0MsQ0FBRCxDQUFGLENBQVI7QUFDRCxHQUZEO0FBR0Q7O0FBRU0sTUFBTUMsSUFBSSxHQUFHSixPQUFPLENBQ3pCakMsTUFEeUIsRUFFekJHLE1BRnlCLENBQXBCO0FBS0EsTUFBTW1DLEtBQUssR0FBR0wsT0FBTyxDQUMxQjFCLFNBRDBCLEVBRTFCSCxTQUYwQixDQUFyQjtBQUlBLE1BQU1tQyxJQUFJLEdBQUdOLE9BQU8sQ0FDekJ4QixLQUR5QixFQUV6QkssS0FGeUIsQ0FBcEI7QUFLQSxNQUFNMEIsSUFBSSxHQUFHUCxPQUFPLENBQ3pCVixLQUR5QixFQUV6Qk4sS0FGeUIsQ0FBcEI7QUFLQSxTQUFTd0IsSUFBVCxDQUFjL0MsT0FBZCxFQUF1QmdELE1BQXZCLEVBQStCQyxFQUEvQixFQUFtQ0MsRUFBbkMsRUFBdUNDLEdBQXZDLEVBQTRDO0FBQ2pELFNBQU8sU0FBU0MsT0FBVCxDQUFpQm5ELEVBQWpCLEVBQXFCaUMsS0FBSyxHQUFHVixRQUFRLEVBQXJDLEVBQXlDO0FBQzlDeEIsV0FBTyxDQUFDRSxJQUFSO0FBQ0FGLFdBQU8sQ0FBQ0csU0FBUjtBQUNBSCxXQUFPLENBQUNxRCxTQUFSLENBQWtCSixFQUFsQixFQUFzQkMsRUFBdEI7QUFDQWxELFdBQU8sQ0FBQ29DLE1BQVIsQ0FBZVksTUFBTSxDQUFDLENBQUQsQ0FBckIsRUFBMEIvQyxFQUFFLENBQUMrQyxNQUFNLENBQUMsQ0FBRCxDQUFQLENBQTVCO0FBQ0FBLFVBQU0sQ0FBQ3RELEdBQVAsQ0FBV0MsQ0FBQyxJQUFJO0FBQ2RLLGFBQU8sQ0FBQ3FDLE1BQVIsQ0FBZTFDLENBQWYsRUFBa0IsQ0FBQ3dELEdBQUQsR0FBT2xELEVBQUUsQ0FBQ04sQ0FBQyxHQUFHd0QsR0FBTCxDQUEzQjtBQUNELEtBRkQ7QUFHQW5ELFdBQU8sQ0FBQ1csU0FBUixHQUFvQixDQUFwQjtBQUNBWCxXQUFPLENBQUNtQyxXQUFSLEdBQXNCRCxLQUF0QjtBQUNBbEMsV0FBTyxDQUFDc0MsTUFBUjtBQUNBdEMsV0FBTyxDQUFDSSxTQUFSO0FBQ0FKLFdBQU8sQ0FBQ0ssT0FBUjtBQUNELEdBYkQ7QUFjRCxDOzs7Ozs7Ozs7Ozs7QUNuTUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJTCxPQUFPLEdBQUdzRCw2REFBYSxDQUFDLFFBQUQsQ0FBM0I7QUFFQUMsMkNBQUEsQ0FBVztBQUFFdkQsU0FBRjtBQUFXViw2RUFBZUE7QUFBMUIsQ0FBWDtBQUNBaUUsNENBQUEsQ0FBWTtBQUFFdkQsU0FBRjtBQUFXViw2RUFBZUE7QUFBMUIsQ0FBWjtBQUNBaUUsMkNBQUEsQ0FBVztBQUFFdkQsU0FBRjtBQUFXViw2RUFBZUE7QUFBMUIsQ0FBWDtBQUNBaUUsMkNBQUEsQ0FBV3ZELE9BQVg7QUFFQSxJQUFJK0MsSUFBSSxHQUFHUSwyQ0FBQSxDQUNUdkQsT0FEUyxFQUVUSCxrREFGUyxFQUdUMkQsK0NBSFMsRUFJVEEsK0NBSlMsRUFLVEEsOENBTFMsQ0FBWDtBQVFBQywrQ0FBTyxDQUFDQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxNQUFNO0FBQ3RDLE1BQUlDLEdBQUcsR0FBR0MsZ0RBQVEsQ0FBQ0MsS0FBVCxDQUFlbEMsUUFBZixFQUFWO0FBQ0EsTUFBSW1DLENBQUMsR0FBR0MsNENBQUEsQ0FBWUosR0FBWixDQUFSO0FBQ0FaLE1BQUksQ0FBQ2UsQ0FBRCxDQUFKO0FBQ0QsQ0FKRDs7QUFLQUYsZ0RBQVEsQ0FBQ0ksT0FBVCxHQUFtQixZQUFXO0FBQzVCLE9BQUtILEtBQUwsR0FBYSxFQUFiO0FBQ0QsQ0FGRCxDLENBR0E7QUFFQTtBQUNBO0FBQ0EsNEI7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1JLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ08sU0FBU2IsYUFBVCxDQUF1QmMsUUFBdkIsRUFBaUM7QUFDdENILFdBQVMsQ0FBQ0ksWUFBVixDQUF1QixJQUF2QixFQUE2QixXQUE3QjtBQUVBLFFBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUcsUUFBTSxDQUFDRCxZQUFQLENBQW9CLElBQXBCLEVBQTBCRCxRQUExQjtBQUNBRSxRQUFNLENBQUNELFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsUUFBN0I7QUFDQUMsUUFBTSxDQUFDRCxZQUFQLENBQW9CLE9BQXBCLEVBQTZCYixnREFBQSxHQUFrQixFQUEvQztBQUNBYyxRQUFNLENBQUNELFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEJiLGdEQUFBLEdBQWtCLEVBQWhEO0FBRUFVLFVBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxxQkFBZCxDQUFvQyxZQUFwQyxFQUFrRFAsU0FBbEQ7QUFDQUEsV0FBUyxDQUFDUSxXQUFWLENBQXNCSCxNQUF0QjtBQUVBLFFBQU10RSxPQUFPLEdBQUdzRSxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFDQSxTQUFPMUUsT0FBUDtBQUNEO0FBRU0sTUFBTXlELE9BQU8sR0FBR2tCLGlCQUFpQixDQUN0QyxRQURzQyxFQUV0QyxZQUZzQyxFQUd0QyxNQUhzQyxFQUl0QyxNQUpzQyxFQUt0QyxNQUxzQyxDQUFqQztBQVFBLE1BQU1mLFFBQVEsR0FBR2UsaUJBQWlCLENBQ3ZDLE9BRHVDLEVBRXZDLFlBRnVDLEVBR3ZDLFVBSHVDLEVBSXZDLE1BSnVDLEVBS3ZDLE1BTHVDLENBQWxDO0FBUVAsTUFBTUMsSUFBSSxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBUyxJQUFJLENBQUNQLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsTUFBeEI7QUFDQUosU0FBUyxDQUFDUSxXQUFWLENBQXNCRyxJQUF0QjtBQUNBQSxJQUFJLENBQUNILFdBQUwsQ0FBaUJiLFFBQWpCO0FBQ0FnQixJQUFJLENBQUNILFdBQUwsQ0FBaUJoQixPQUFqQjtBQUVPLFNBQVNrQixpQkFBVCxDQUEyQkUsT0FBM0IsRUFBb0NDLEVBQXBDLEVBQXdDakIsS0FBeEMsRUFBK0NrQixTQUEvQyxFQUEwRDtBQUMvRCxNQUFJQyxHQUFHLEdBQUdkLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QlUsT0FBdkIsQ0FBVjtBQUNBRyxLQUFHLENBQUNYLFlBQUosQ0FBaUIsSUFBakIsRUFBdUJTLEVBQXZCO0FBQ0FFLEtBQUcsQ0FBQ1gsWUFBSixDQUFpQixPQUFqQixFQUEwQlIsS0FBMUI7QUFDQW1CLEtBQUcsQ0FBQ0MsU0FBSixHQUFnQkYsU0FBaEI7QUFDQSxRQUFNRyxHQUFHLEdBQUdoQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFFBQU1nQixHQUFHLEdBQUdqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBZ0IsS0FBRyxDQUFDRixTQUFKLEdBQWdCLE9BQWhCO0FBRUFDLEtBQUcsQ0FBQ1QsV0FBSixDQUFnQk8sR0FBaEI7QUFDQSxTQUFPQSxHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDbkRELGNBQWMsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRTVFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1JLE1BQU0sR0FBR3pCLEdBQUcsSUFBSTtBQUMzQixNQUFJMEIsT0FBTyxHQUFHLGtHQUFkO0FBQ0EsU0FBTzFCLEdBQUcsQ0FBQzJCLEtBQUosQ0FBVUQsT0FBVixDQUFQO0FBQ0QsQ0FITTtBQUtBLE1BQU1FLFFBQVEsR0FBRzVCLEdBQUcsSUFBSTtBQUM3QkEsS0FBRyxHQUFHQSxHQUFHLENBQUM2QixPQUFKLENBQVksS0FBWixFQUFtQixVQUFuQixDQUFOO0FBQ0E3QixLQUFHLEdBQUdBLEdBQUcsQ0FBQzZCLE9BQUosQ0FBWSxLQUFaLEVBQW1CLFVBQW5CLENBQU47QUFDQTdCLEtBQUcsR0FBR0EsR0FBRyxDQUFDNkIsT0FBSixDQUFZLE9BQVosRUFBcUIsWUFBckIsQ0FBTjtBQUNBLFNBQU83QixHQUFQO0FBQ0QsQ0FMTTtBQU9BLE1BQU04QixLQUFLLEdBQUc5QixHQUFHLElBQUk7QUFDMUIsTUFBSSxDQUFDeUIsTUFBTSxDQUFDekIsR0FBRCxDQUFYLEVBQWtCO0FBQ2hCLFdBQU8sRUFBUDtBQUNELEdBRkQsTUFFTztBQUNMQSxPQUFHLEdBQUc0QixRQUFRLENBQUM1QixHQUFELENBQWQ7QUFDQSxXQUFPLElBQUkrQixRQUFKLENBQWEsR0FBYixFQUFrQixZQUFZL0IsR0FBOUIsQ0FBUDtBQUNEO0FBQ0YsQ0FQTSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjIwMjQ7XFxufVxcbi5jYW52YXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIG1hcmdpbi10b3A6IDRlbTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbmZvb3RlciA+IGEge1xcbiAgY29sb3I6ICNlNjg0NGY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiA0ZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuZm9vdGVyID4gYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI3NpZGUge1xcbiAgbWFyZ2luLXRvcDogNGVtO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LCAxOTUsIDEzNiwgMC4yKTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICBwYWRkaW5nLXRvcDogMWVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XFxuICBtYXJnaW46IDhweCAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2U2ODQ0ZjtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFdJRFRIID0gNjAwO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IDYwMDtcbmV4cG9ydCBjb25zdCBHQVAgPSA0MDtcbmV4cG9ydCBjb25zdCBHUklEX0dBUCA9IDIwO1xuZXhwb3J0IGNvbnN0IHhNaWQgPSBXSURUSCAvIDI7XG5leHBvcnQgY29uc3QgeU1pZCA9IEhFSUdIVCAvIDI7XG5cbmV4cG9ydCBjb25zdCBwb3NpdGl2ZU51bWJlcnMgPSBBcnJheS5mcm9tKEFycmF5KFdJRFRIKS5rZXlzKCkpLm1hcCh4ID0+IHgpO1xuY29uc3QgbmVnYXRpdmVOdW1iZXJzID0gcG9zaXRpdmVOdW1iZXJzLm1hcCh4ID0+IHggLSBXSURUSCk7XG5cbmV4cG9ydCBjb25zdCBudW1iZXJzID0gbmVnYXRpdmVOdW1iZXJzLmNvbmNhdChwb3NpdGl2ZU51bWJlcnMpO1xuIiwiaW1wb3J0ICogYXMgc2V0dGluZ3MgZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGdyaWRTZXR0aW5nKGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycywgZm4pIHtcbiAgY29udGV4dC5zYXZlKCk7XG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGZuKGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycyk7XG4gIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIGNvbnRleHQucmVzdG9yZSgpO1xuICByZXR1cm4geyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfTtcbn1cblxuLy9Ib3Jpem9udGFsIExpbmVzXG5jb25zdCBoTGluZXMgPSAoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSkgPT5cbiAgZ3JpZFNldHRpbmcoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzLCAoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzKSA9PiB7XG4gICAgcG9zaXRpdmVOdW1iZXJzLm1hcCh4ID0+IHtcbiAgICAgIHggKj0gc2V0dGluZ3MuR1JJRF9HQVA7XG4gICAgICBkcmF3TGluZShjb250ZXh0LCAwLCB4LCBzZXR0aW5ncy5XSURUSCArIHNldHRpbmdzLkdSSURfR0FQLCB4LCBcIiM5OTlcIik7XG4gICAgfSk7XG4gIH0pO1xuXG4vL1ZlcnRpY2FsIExpbmVzXG5jb25zdCB2TGluZXMgPSAoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSkgPT5cbiAgZ3JpZFNldHRpbmcoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzLCAoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzKSA9PiB7XG4gICAgcG9zaXRpdmVOdW1iZXJzLm1hcCh4ID0+IHtcbiAgICAgIHggKj0gc2V0dGluZ3MuR1JJRF9HQVA7XG4gICAgICBkcmF3TGluZShjb250ZXh0LCB4LCAwLCB4LCBzZXR0aW5ncy5IRUlHSFQsIFwiIzk5OVwiKTtcbiAgICB9KTtcbiAgfSk7XG5cbi8vIFZlcnRpY2FsIGdhcCBsaW5lc1xuY29uc3QgdkdhcExpbmVzID0gKHsgY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzIH0pID0+XG4gIGdyaWRTZXR0aW5nKGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycywgKGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycykgPT4ge1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMjtcbiAgICBjb250ZXh0LnNldExpbmVEYXNoKFs1LCAxXSk7XG4gICAgcG9zaXRpdmVOdW1iZXJzLm1hcCh4ID0+IHtcbiAgICAgIHggKj0gc2V0dGluZ3MuR1JJRF9HQVA7XG4gICAgICBpZiAoeCAlIDggPT09IDApIHtcbiAgICAgICAgZHJhd0xpbmUoXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBzZXR0aW5ncy5HUklEX0dBUCArIHgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBzZXR0aW5ncy5HUklEX0dBUCArIHgsXG4gICAgICAgICAgc2V0dGluZ3MuSEVJR0hULFxuICAgICAgICAgIFwiIzY2NlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4vLyBIb3Jpem9udGFsIGdhcCBsaW5lc1xuY29uc3QgaEdhcExpbmVzID0gKHsgY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzIH0pID0+XG4gIGdyaWRTZXR0aW5nKGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycywgKGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycykgPT4ge1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMjtcbiAgICBjb250ZXh0LnNldExpbmVEYXNoKFs1LCAxXSk7XG4gICAgcG9zaXRpdmVOdW1iZXJzLm1hcCh4ID0+IHtcbiAgICAgIHggKj0gc2V0dGluZ3MuR1JJRF9HQVA7XG4gICAgICBpZiAoeCAlIDggPT09IDApIHtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBkcmF3TGluZShcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgc2V0dGluZ3MuR1JJRF9HQVAgKyB4LFxuICAgICAgICAgIHNldHRpbmdzLldJRFRILFxuICAgICAgICAgIHNldHRpbmdzLkdSSURfR0FQICsgeCxcbiAgICAgICAgICBcIiM2NjZcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuY29uc3QgaFRleHQgPSAoeyBjb250ZXh0LCBwb3NpdGl2ZU51bWJlcnMgfSkgPT5cbiAgZ3JpZFNldHRpbmcoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzLCAoY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzKSA9PiB7XG4gICAgY29uc3QgbWFnaWNOdW1iZXIgPSAxNDsgLy8gbnVtYmVyIHRoYXQgc2hpZnQgemVybyB0byB0aGUgY2VudGVyXG4gICAgcG9zaXRpdmVOdW1iZXJzLm1hcCgoeCwgaSkgPT4ge1xuICAgICAgeCAqPSBzZXR0aW5ncy5HUklEX0dBUDtcbiAgICAgIGlmICh4ICUgOCA9PT0gMCkge1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoXG4gICAgICAgICAgYCR7KGkgLSBtYWdpY051bWJlcikgLyAyfWAsXG4gICAgICAgICAgc2V0dGluZ3MuR1JJRF9HQVAgKyB4LFxuICAgICAgICAgIHNldHRpbmdzLnlNaWQgLSA1XG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbmNvbnN0IHZUZXh0ID0gKHsgY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzIH0pID0+XG4gIGdyaWRTZXR0aW5nKGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycywgKGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycykgPT4ge1xuICAgIGNvbnN0IG1hZ2ljTnVtYmVyID0gMTQ7IC8vIG51bWJlciB0aGF0IHNoaWZ0IHplcm8gdG8gdGhlIGNlbnRlclxuXG4gICAgcG9zaXRpdmVOdW1iZXJzLm1hcCgoeCwgaSkgPT4ge1xuICAgICAgeCAqPSBzZXR0aW5ncy5HUklEX0dBUDtcbiAgICAgIGlmICh4ICUgOCA9PT0gMCkge1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoXG4gICAgICAgICAgYCR7KGkgLSBtYWdpY051bWJlcikgLyAtMn1gLFxuICAgICAgICAgIHNldHRpbmdzLnlNaWQgKyA1LFxuICAgICAgICAgIHNldHRpbmdzLkdSSURfR0FQICsgeFxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG5mdW5jdGlvbiBkcmF3QXhlcyhjb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBheGVzKGZuKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xuICAgIGZuKGNvbnRleHQpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH07XG59XG5cbmNvbnN0IHhBeGVzID0gY29udGV4dCA9PlxuICBkcmF3QXhlcyhjb250ZXh0KSgoKSA9PlxuICAgIGRyYXdMaW5lKFxuICAgICAgY29udGV4dCxcbiAgICAgIHNldHRpbmdzLnhNaWQsXG4gICAgICAwLFxuICAgICAgc2V0dGluZ3MueE1pZCxcbiAgICAgIHNldHRpbmdzLkhFSUdIVCxcbiAgICAgIFwiIzAwMDhmZlwiXG4gICAgKVxuICApO1xuY29uc3QgZ2V0Q29sb3IgPSAoKSA9PlxuICBcIiNcIiArXG4gIE1hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMTYpXG4gICAgLnNsaWNlKC02KTtcbmNvbnN0IHlBeGVzID0gY29udGV4dCA9PlxuICBkcmF3QXhlcyhjb250ZXh0KSgoKSA9PlxuICAgIGRyYXdMaW5lKFxuICAgICAgY29udGV4dCxcbiAgICAgIDAsXG4gICAgICBzZXR0aW5ncy54TWlkLFxuICAgICAgc2V0dGluZ3MuSEVJR0hULFxuICAgICAgc2V0dGluZ3MueE1pZCxcbiAgICAgIFwiIzAwMDhmZlwiXG4gICAgKVxuICApO1xuXG5mdW5jdGlvbiBkcmF3TGluZShjb250ZXh0LCB4MCwgeTAsIHhuLCB5biwgY29sb3IpIHtcbiAgY29udGV4dC5zYXZlKCk7XG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgY29udGV4dC5tb3ZlVG8oeDAsIHkwKTtcbiAgY29udGV4dC5saW5lVG8oeG4sIHluKTtcbiAgY29udGV4dC5zdHJva2UoKTtcbiAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgY29udGV4dC5yZXN0b3JlKCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvc2UoYSwgYikge1xuICByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBhKGIoYykpO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ3JpZCA9IGNvbXBvc2UoXG4gIGhMaW5lcyxcbiAgdkxpbmVzXG4pO1xuXG5leHBvcnQgY29uc3Qgc2NhbGUgPSBjb21wb3NlKFxuICBoR2FwTGluZXMsXG4gIHZHYXBMaW5lc1xuKTtcbmV4cG9ydCBjb25zdCB0ZXh0ID0gY29tcG9zZShcbiAgaFRleHQsXG4gIHZUZXh0XG4pO1xuXG5leHBvcnQgY29uc3QgYXhpcyA9IGNvbXBvc2UoXG4gIHlBeGVzLFxuICB4QXhlc1xuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsb3QoY29udGV4dCwgcG9pbnRzLCB0eCwgdHksIGdhcCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UGxvdChmbiwgY29sb3IgPSBnZXRDb2xvcigpKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSh0eCwgdHkpO1xuICAgIGNvbnRleHQubW92ZVRvKHBvaW50c1swXSwgZm4ocG9pbnRzWzBdKSk7XG4gICAgcG9pbnRzLm1hcCh4ID0+IHtcbiAgICAgIGNvbnRleHQubGluZVRvKHgsIC1nYXAgKiBmbih4IC8gZ2FwKSk7XG4gICAgfSk7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBjYW52YXNNYW5hZ2VyLCBpbnB1dEJveCwgYnRuUGxvdCB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0ICogYXMgZ3JhcGggZnJvbSBcIi4vZ3JhcGhcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBudW1iZXJzLCBwb3NpdGl2ZU51bWJlcnMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmxldCBjb250ZXh0ID0gY2FudmFzTWFuYWdlcihcImNhbnZhc1wiKTtcblxuZ3JhcGguZ3JpZCh7IGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycyB9KTtcbmdyYXBoLnNjYWxlKHsgY29udGV4dCwgcG9zaXRpdmVOdW1iZXJzIH0pO1xuZ3JhcGgudGV4dCh7IGNvbnRleHQsIHBvc2l0aXZlTnVtYmVycyB9KTtcbmdyYXBoLmF4aXMoY29udGV4dCk7XG5cbmxldCBwbG90ID0gZ3JhcGgucGxvdChcbiAgY29udGV4dCxcbiAgbnVtYmVycyxcbiAgY29uc3RhbnRzLnhNaWQsXG4gIGNvbnN0YW50cy55TWlkLFxuICBjb25zdGFudHMuR0FQXG4pO1xuXG5idG5QbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxldCBzdHIgPSBpbnB1dEJveC52YWx1ZS50b1N0cmluZygpO1xuICBsZXQgZiA9IHV0aWxzLmNsZWFuKHN0cik7XG4gIHBsb3QoZik7XG59KTtcbmlucHV0Qm94Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52YWx1ZSA9IFwiXCI7XG59O1xuLy8gcGxvdChwYXJhYm9sYSk7XG5cbi8vIHBsb3Qoc2luLCBcImdyZWVuXCIpO1xuLy8gLy8gcGxvdChjb3MsIFwicmVkXCIpO1xuLy8gLy8gcGxvdChoeXBvdCwgXCJvcmFuZ2VcIik7XG4iLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5leHBvcnQgZnVuY3Rpb24gY2FudmFzTWFuYWdlcihjYW52YXNJRCkge1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXJcIik7XG5cbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIGNhbnZhc0lEKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FudmFzXCIpO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgY29uc3RhbnRzLldJRFRIICsgXCJcIik7XG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgY29uc3RhbnRzLldJRFRIICsgXCJcIik7XG5cbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGJ0blBsb3QgPSBjcmVhdGVIdG1sRWxlbWVudChcbiAgXCJidXR0b25cIixcbiAgXCJwbG90LWlucHV0XCIsXG4gIFwicGxvdFwiLFxuICBcIlBsb3RcIixcbiAgXCJQbG90XCJcbik7XG5cbmV4cG9ydCBjb25zdCBpbnB1dEJveCA9IGNyZWF0ZUh0bWxFbGVtZW50KFxuICBcImlucHV0XCIsXG4gIFwicGxvdC1pbnB1dFwiLFxuICBcIngqc2luKHgpXCIsXG4gIFwicGxvdFwiLFxuICBcIlBsb3RcIlxuKTtcblxuY29uc3Qgc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZVwiKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlKTtcbnNpZGUuYXBwZW5kQ2hpbGQoaW5wdXRCb3gpO1xuc2lkZS5hcHBlbmRDaGlsZChidG5QbG90KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWxFbGVtZW50KGVsZW1lbnQsIGlkLCB2YWx1ZSwgaW5uZXJIdG1sKSB7XG4gIGxldCBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBlbG0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBlbG0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdmFsdWUpO1xuICBlbG0uaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICBjb25zdCBjb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uaW5uZXJIVE1MID0gXCJjbG9zZVwiO1xuXG4gIGNvbi5hcHBlbmRDaGlsZChlbG0pO1xuICByZXR1cm4gZWxtO1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0IGNvbnN0IGZpbHRlciA9IHN0ciA9PiB7XG4gIHZhciBsZXR0ZXJzID0gL1xcYig/OnNpbnxjb3N8eHwhYWxlcnR8IWZ1bmN0aW9ufCFsZXQpXFxifChbLStdP1swLTldKlxcLj9bMC05XStbXFwvXFwrXFwtXFwqXSkrKFstK10/WzAtOV0qXFwuP1swLTldKykvZztcbiAgcmV0dXJuIHN0ci5tYXRjaChsZXR0ZXJzKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZSA9IHN0ciA9PiB7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKFwic2luXCIsIFwiTWF0aC5zaW5cIik7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKFwiY29zXCIsIFwiTWF0aC5jb3NcIik7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKFwiaHlwb3RcIiwgXCJNYXRoLmh5cG90XCIpO1xuICByZXR1cm4gc3RyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFuID0gc3RyID0+IHtcbiAgaWYgKCFmaWx0ZXIoc3RyKSkge1xuICAgIHJldHVybiBcIlwiO1xuICB9IGVsc2Uge1xuICAgIHN0ciA9IHZhbGlkYXRlKHN0cik7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcInhcIiwgXCJyZXR1cm4gXCIgKyBzdHIpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==