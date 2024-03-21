/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n}\nbody {\n    \n}\n#contentContainer {\n    height: 100vh;\n    display: flex;\n    color: white;\n    background-color: rgb(7, 33, 41);\n}\n#sidebar, #mainContent, #newTaskContainer {\n    margin: 1.5rem 1rem;\n    border-radius: 1rem;\n    background-color: rgb(13, 62, 78);\n}\n#sidebar {\n    margin-right: 0rem;\n    flex: 1;\n}\n#mainContent {\n    flex: 3;\n    display: flex;\n    justify-content: center;\n    position: relative\n}\n#newTaskContainer {\n    background-color: rgb(10, 50, 63);\n    margin-left: 0;\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    height: 40rem;\n    width: 50rem;\n    right: 4.8rem;\n    bottom: 4.8rem;\n}\n\n/* SIDEBAR */\n.sidebarContainerTop, .sidebarContainerBottom {\n    display: flex;\n    flex-direction: column;\n    margin-top: 1rem;\n    gap: 0.2rem;\n}\n.sidebarContainerTop button {\n    width: 100%;\n    height: 3rem;\n    text-align: center;\n    font-size: 1.5rem;\n    border-radius: 1rem;\n    margin: 0 0.2rem;\n    border-style: none;\n    background-color: rgb(26, 133, 165);\n    transition: width 1s;\n}\n.sidebarContainerTop button:hover {\n    transition: width 0.75s;\n    width: 75%;\n    background-color: rgb(7, 33, 41);\n    color: white;\n}\n.sidebarContainerTop {\n    align-items: center;\n}\n.sidebarContainerBottom {\n    margin: 1rem 0.2rem;\n}\n.personalSectionContainer, .workSectionContainer, .uncategorizedSectionContainer {\n    height: 8rem;\n    padding-left: 0.8rem;\n    overflow: scroll;\n}\n.personalSectionContainer::-webkit-scrollbar, .workSectionContainer::-webkit-scrollbar, .uncategorizedSectionContainer::-webkit-scrollbar {\n    display: none;\n}\n.personalSectionTitle, .workSectionTitle, .uncategorizedSectionTitle {\n    position: sticky;\n    top: 0;\n    background-color: rgb(13, 62, 78);\n}\n\n/* MAIN CONTENT */\n.taskContentContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 75%;\n}\n.newTaskBtn {\n    position: absolute;\n    bottom: 25px;\n    right: 25px;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    font-size: 4rem;\n    border-style: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(26, 133, 165);\n}\n.newTaskBtn:hover {\n    background-color: rgb(7, 33, 41);\n    color: white;\n    border: 2px solid black;\n}\n.taskDisplayContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n.taskUnit {\n    border: 1px solid black;\n    width: 20rem;\n    padding: 0.6rem;\n    font-size: 1.4rem;\n    border-radius: 1rem;\n    display: flex;\n    align-items: baseline;\n}\n.completeTaskBtn {\n    border-radius: 50%;\n    width: 1.2rem;\n    height: 1.2rem;\n    margin-right: 0.5rem;\n}\n.lineThroughText {\n    text-decoration: line-through;\n}\n.sortTasksBtn {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    height: 2rem;\n    width: 2rem;\n    border-radius: 50%;\n    font-size: 1.5rem;\n    border-style: none;\n    background-color: rgb(26, 133, 165);\n}\n.sortTasksBtn:hover {\n    background-color: rgb(7, 33, 41);\n    color: white;\n}\n\n\n/* TASK CONTAINER */\n.taskInput {\n    margin: 0.75rem;\n    margin-bottom: 0rem;\n    padding: 0.5rem;\n    flex: 2;\n    border-radius: 1rem;\n    font-size: 1.5rem;\n    background-color: rgb(0, 0, 0);\n    overflow-y: auto;\n    outline: none;\n}\n.taskBtnContainer {\n    display: flex;\n    justify-content: space-between;\n    margin: 0.75rem;\n}\n.saveTaskBtn {\n    width: 6rem;\n    height: 2rem;\n    background-color: rgb(26, 133, 165);\n    border-radius: 1rem;\n    border-style: none;\n    margin-left: auto;\n}\n.saveTaskBtn:hover {\n    background-color: rgb(17, 86, 107);\n    color: white;\n}\n.projectTypeContainer {\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n.selectProjectType {\n    margin-left: 0.5rem;\n}\n.selectProjectType:hover {\n    cursor: crosshair;\n}\n.dropDownContainer {\n    display: none;\n    position: absolute;\n    background-color: rgb(17, 86, 107);\n    padding: 0.25rem;\n}\n.show {\n    display: flex;\n    flex-direction: column;\n}  \n.dateInputContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.dateTimeInput {\n    outline: none;\n    border-style: none;\n    background-color: rgb(10, 50, 63);\n}\n::-webkit-datetime-edit {\n    display: none;\n}\n::-webkit-calendar-picker-indicator {\n    cursor: pointer;\n    margin:0;\n    padding: 0;\n    height: 1rem;\n    width: 1rem;\n}\n\n/* CALENDAR PAGE */\n.mainContainer {\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding: 0 2rem;\n}\n.calendarContainer {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.calendarRow {\n    width: 100%;\n    height: 10.5rem;\n    display: flex;\n}\n.calendarSquare {\n    border: 1px solid black;\n    flex: 1;\n}\n.monthContainer {\n    display: flex;\n}\n.monthName {\n    width: 10rem;\n}\n.currentYear, .monthName {\n    font-size: 2.5rem;\n    padding: 1rem;\n}\n.currentYear, .monthName, .monthContainer button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.monthContainer button {\n    align-self: center;\n    width: 2rem;\n    height: 2rem;\n    margin: 0 2.5rem;\n}\n.calendarDaysHeader {\n    display: flex;\n    width: 100%;\n}\n\n.calendarDaysHeader div {\n    flex: 1;\n    border: 1px solid black;\n    text-align: center;\n    padding: 0.25rem;\n}\n\n\n@media only screen and (max-width: 1050px) {\n    /* CALENDAR PAGE */\n    .calendarRow {\n        height: 4.75rem;\n    }\n    .calendarDaysHeader div {\n        padding: 0.12rem;\n        font-size: 0.85rem;\n    }\n    .currentYear, .monthName {\n        font-size: 1.25rem;\n        padding: 0.5rem 0.35rem;\n    }\n    .monthName {\n        width: 5rem;\n    }\n\n    /* new task container */\n    #newTaskContainer {\n        max-height: 20rem;\n        max-width: 25rem;\n    }\n}`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://task-maker/./src/styles.css?./node_modules/css-loader/dist/cjs.js',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://task-maker/./node_modules/css-loader/dist/runtime/api.js?',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://task-maker/./node_modules/css-loader/dist/runtime/noSourceMaps.js?",
        );

        /***/
      },

    /***/ "./src/styles.css":
      /*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://task-maker/./src/styles.css?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://task-maker/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://task-maker/./node_modules/style-loader/dist/runtime/insertBySelector.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://task-maker/./node_modules/style-loader/dist/runtime/insertStyleElement.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://task-maker/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://task-maker/./node_modules/style-loader/dist/runtime/styleDomAPI.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://task-maker/./node_modules/style-loader/dist/runtime/styleTagTransform.js?",
        );

        /***/
      },

    /***/ "./src/calendar.js":
      /*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadCalendarPage: () => (/* binding */ loadCalendarPage)\n/* harmony export */ });\n/* harmony import */ var _new_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task.js */ \"./src/new-task.js\");\n\nfunction loadCalendarPage() {\n    // gets main content container\n    const mainContent = document.querySelector('#mainContent');\n    // resets main content so duplicate elements dont appear\n    mainContent.innerHTML = '';\n    // adds new task button back\n    (0,_new_task_js__WEBPACK_IMPORTED_MODULE_0__.makeNewTask)();\n    // creates container for content\n    const mainContainer = document.createElement('div');\n    mainContainer.classList.add('mainContainer');\n    // creates container for month name and buttons\n    const monthContainer = document.createElement('div');\n    monthContainer.classList.add('monthContainer');\n    // appends items to month container\n    monthContainer.append(makePreviousMonthButton(), getMonth(), currentYear(), makeNextMonthButton());\n    // appends items to correct containers\n    mainContainer.append(makeTitle(), monthContainer);\n    mainContent.append(mainContainer);\n    // makes the calendar\n    makeCalendar(mainContainer);\n}\n\nfunction makeCalendar(mainContainer) {\n    const calendarContainer = document.createElement('div');\n    calendarContainer.classList.add('calendarContainer');\n    for(let i = 0; i < 6; i++){\n        const row = document.createElement('div');\n        row.classList.add('calendarRow');\n        for(let i = 0; i < 7; i++){\n            const square = document.createElement('div');\n            square.classList.add('calendarSquare');\n            row.append(square);\n        }\n        calendarContainer.append(row);\n    }\n    calendarContainer.prepend(makeDayOfWeekHeader());\n    mainContainer.append(calendarContainer);\n}\n\nfunction makeDayOfWeekHeader() {\n    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n    const daysHeader = document.createElement('div');\n    daysHeader.classList.add('calendarDaysHeader');\n    for(let i = 0; i < 7; i++){\n        const box = document.createElement('div');\n        box.innerText = daysOfWeek[i];\n        daysHeader.append(box);\n    }\n    return daysHeader;\n}\n\n// array of objects for each month\nconst months = [\n    {\n        name: 'January',\n        days: 31\n    },\n    {\n        name: 'February',\n        days: getFebDays()\n    },\n    {\n        name: 'March',\n        days: 31\n    },\n    {\n        name: 'April',\n        days: 30\n    },\n    {\n        name: 'May',\n        days: 31\n    },\n    {\n        name: 'June',\n        days: 30\n    },\n    {\n        name: 'July',\n        days: 31\n    },\n    {\n        name: 'August',\n        days: 31\n    },\n    {\n        name: 'September',\n        days: 30\n    },\n    {\n        name: 'October',\n        days: 31\n    },\n    {\n        name: 'November',\n        days: 30\n    },\n    {\n        name: 'December',\n        days: 31\n    }\n];\n\n// returns the amount of days that are in february\nfunction getFebDays() {\n    const year = new Date();\n    if((0 == year.getFullYear() % 4) && (0 != year.getFullYear() % 100) || (0 == year.getFullYear() % 400)){\n        return 29;\n    } else {\n        return 28;\n    }\n}\n\n// makes title for today page\nfunction makeTitle() {\n    const h2 = document.createElement('h2');\n    h2.classList.add('calendarTitle');\n    h2.innerText = 'Calendar';\n    return h2;\n}\n\n// gets the current month\nfunction getMonth() {\n    const now = new Date();\n    const h2 = document.createElement('h2');\n    h2.classList.add('monthName');\n    h2.innerText = months[now.getMonth()].name;\n    return h2;\n}\n\n// returns the current year\nfunction currentYear() {\n    const now = new Date();\n    const div = document.createElement('div');\n    div.classList.add('currentYear');\n    div.innerText = now.getFullYear();\n    return div;\n}\n\n// makes the previous month button and event listener\nfunction makePreviousMonthButton() {\n    const button = document.createElement('button');\n    button.classList.add('previousMonthBtn');\n    button.innerText = '<';\n    button.addEventListener('click', changeMonth);\n    return button;\n}\n\n// makes the next month button and event listener\nfunction makeNextMonthButton() {\n    const button = document.createElement('button');\n    button.classList.add('nextMonthBtn');\n    button.innerText = '>';\n    button.addEventListener('click', changeMonth);\n    return button;\n}\n\n// changes the month to either the next month in array or the previous\nfunction changeMonth(e) {\n    const monthDisplay = document.querySelector('.monthName');\n    if(e.target.className === 'previousMonthBtn'){\n        let newMonth = months.findIndex(months => months.name == monthDisplay.innerText) - 1;\n        if(newMonth === -1){\n            newMonth = 11;\n            monthDisplay.innerText = months[newMonth].name;\n        }\n        monthDisplay.innerText = months[newMonth].name;\n    } else if(e.target.className === 'nextMonthBtn') {\n        let newMonth = months.findIndex(months => months.name == monthDisplay.innerText) + 1;\n        if(newMonth === 12){\n            newMonth = 0;\n            monthDisplay.innerText = months[newMonth].name; \n        }\n        monthDisplay.innerText = months[newMonth].name;\n    }\n}\n\n//# sourceURL=webpack://task-maker/./src/calendar.js?",
        );

        /***/
      },

    /***/ "./src/home.js":
      /*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _new_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task.js */ \"./src/new-task.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _sort_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-tasks.js */ \"./src/sort-tasks.js\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.js */ \"./src/local-storage.js\");\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n\n\n\n\n\n\nfunction loadHomePage() {\n    // gets main content container\n    const mainContent = document.querySelector('#mainContent');\n    // removes classes from main content\n    mainContent.className = '';\n    // adds home page class to main content\n    mainContent.classList.add('homePage');\n    // resets main content so duplicate elements dont appear\n    mainContent.innerHTML = '';\n    // adds new task button back\n    (0,_new_task_js__WEBPACK_IMPORTED_MODULE_0__.makeNewTask)();\n    // creates container for content\n    const taskContentContainer = document.createElement('div');\n    taskContentContainer.classList.add('taskContentContainer');\n    // creates complete task container\n    const completedTaskContainer = document.createElement('div');\n    completedTaskContainer.classList.add('completedTaskContainer');\n    // appends items to correct containers\n    taskContentContainer.append(makeTitle(), completedTaskContainer);\n    mainContent.append(taskContentContainer);\n    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)(_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.storedTaskList);\n    (0,_sort_tasks_js__WEBPACK_IMPORTED_MODULE_2__.sortTasks)();\n    (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_4__.displayOrganizedProjects)();\n}\n\n// makes title for home page\nfunction makeTitle() {\n    // gets the date\n    let currentDate = new Date();\n    currentDate.getHours();\n    \n    const h2 = document.createElement('h2');\n    h2.classList.add('homeTitle');\n    // sets header text depending on time of day\n    if (currentDate.getHours() >= 8 && currentDate.getHours() <= 11){\n        h2.innerText = 'Good Morning';\n    } else if(currentDate.getHours() > 11 && currentDate.getHours() <= 16){\n        h2.innerText = 'Good Afternoon';\n    } else if(currentDate.getHours() > 16 && currentDate.getHours() <= 21){\n        h2.innerText = 'Good evening';\n    } else {\n        h2.innerText = 'Go to sleep';\n    }\n    return h2;\n}\n\n\n//# sourceURL=webpack://task-maker/./src/home.js?",
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");\n/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today.js */ "./src/today.js");\n/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar.js */ "./src/calendar.js");\n/* harmony import */ var _new_task_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-task.js */ "./src/new-task.js");\n\n\n\n\n\n\n\n\n\n// this will load the home page when clicked\nconst homeBtn = document.querySelector(\'.homeBtn\');\nhomeBtn.addEventListener(\'click\', _home_js__WEBPACK_IMPORTED_MODULE_2__.loadHomePage);\n\n// this will load the today page when clicked\nconst todayBtn = document.querySelector(\'.todaysTasksBtn\');\ntodayBtn.addEventListener(\'click\', _today_js__WEBPACK_IMPORTED_MODULE_4__.loadTodayPage);\n\n// this will load the calendar page when clicked\nconst calendarBtn = document.querySelector(\'.calendarViewBtn\');\ncalendarBtn.addEventListener(\'click\', _calendar_js__WEBPACK_IMPORTED_MODULE_5__.loadCalendarPage);\n\n// loads home page when website loads\n(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.loadHomePage)();\n(0,_new_task_js__WEBPACK_IMPORTED_MODULE_6__.makeNewTask)();\n\n//# sourceURL=webpack://task-maker/./src/index.js?',
        );

        /***/
      },

    /***/ "./src/local-storage.js":
      /*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTaskListFromStorage: () => (/* binding */ getTaskListFromStorage),\n/* harmony export */   populateStorage: () => (/* binding */ populateStorage),\n/* harmony export */   storedTaskList: () => (/* binding */ storedTaskList)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n\nlet storedTaskList = [];\n\n// populates storage\nfunction populateStorage(){\n    if(_tasks_js__WEBPACK_IMPORTED_MODULE_0__.taskList.length !== 0){\n        storedTaskList = [];\n        _tasks_js__WEBPACK_IMPORTED_MODULE_0__.taskList.forEach((task) => {\n            storedTaskList.push(task);\n            localStorage.setItem('storedTaskList', JSON.stringify(storedTaskList));\n        });\n    };\n\n    getTaskListFromStorage();\n};\n\n// gets the task list from storage\nfunction getTaskListFromStorage(){\n    storedTaskList = JSON.parse(localStorage.getItem('storedTaskList') || '[]');\n    return storedTaskList;\n}\n\n// sends stored items to side bar\nfunction displayOrganizedProjectsFromStorage() {\n    const personalSection = document.querySelector('.personalSectionContainer');\n    const workSection = document.querySelector('.workSectionContainer');\n    const uncategorizedSection = document.querySelector('.uncategorizedSectionContainer');\n    // removes items from side bar\n    const sidebarContainerBottom = document.querySelectorAll('.sidebarContainerBottom > section > div');\n    sidebarContainerBottom.forEach((div)=> {\n        div.remove();\n    })\n    // gets all divs that are childen of section elements and removes them to avoid duplicates\n    let storedList = JSON.parse(localStorage.getItem('storedTaskList'));\n    console.log(storedList)\n    if(storedList !== null){\n        storedList.forEach((task) => {\n            if(task.projectType == 'isPersonalProject'){\n                const div = document.createElement('div');\n                div.innerText = task.title;\n                personalSection.append(div);\n            } else if(task.projectType == 'isWorkProject'){\n                const div = document.createElement('div');\n                div.innerText = task.title;\n                workSection.append(div);\n            } else {\n                const div = document.createElement('div');\n                div.innerText = task.title;\n                uncategorizedSection.append(div);\n            }\n        });\n    }\n}\n\n// calls the functions when website loads\ngetTaskListFromStorage();\npopulateStorage();\ndisplayOrganizedProjectsFromStorage();\n\n//# sourceURL=webpack://task-maker/./src/local-storage.js?",
        );

        /***/
      },

    /***/ "./src/new-task.js":
      /*!*************************!*\
  !*** ./src/new-task.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   indexNum: () => (/* binding */ indexNum),\n/* harmony export */   makeNewTask: () => (/* binding */ makeNewTask),\n/* harmony export */   makeNewTaskContainer: () => (/* binding */ makeNewTaskContainer)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today.js */ \"./src/today.js\");\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.js */ \"./src/local-storage.js\");\n\n\n\n\n\n\n\nfunction makeNewTask() {\n    const mainContent = document.querySelector('#mainContent');\n    mainContent.append(makeNewTaskBtn());\n}\nlet indexNum = getIndexNum();\n\nfunction getIndexNum(){\n    let storedIndex = localStorage.getItem('indexNum');\n    if(storedIndex != NaN || null || undefined){\n        return storedIndex;\n    } else {\n        return 0;\n    }\n}\ngetIndexNum();\n\nfunction makeNewTaskBtn() {\n    const newTaskBtn = document.createElement('button');\n    newTaskBtn.classList.add('newTaskBtn');\n    newTaskBtn.innerText = '+';\n    // event listner to create new task container\n    newTaskBtn.addEventListener('click', makeNewTaskContainer);\n    return newTaskBtn;\n}\n\nfunction makeNewTaskContainer() {\n    const taskContainer = document.querySelector('#taskContainer');\n    taskContainer.innerHTML = '';\n    //makes container for new task info\n    const newTaskContainer = document.createElement('div');\n    newTaskContainer.setAttribute('id', 'newTaskContainer');\n\n    // append inputs to task container\n    newTaskContainer.append(makeTaskInputs(), makeTaskButtons());\n\n    // append the container to the display on the page\n    taskContainer.append(newTaskContainer);\n}\n\nfunction makeTaskInputs() {\n    const taskInput = document.createElement('div');\n    taskInput.classList.add('taskInput');\n    taskInput.contentEditable = 'true';\n    return taskInput;\n}\n\nfunction makeTaskButtons() {\n    const taskBtnContainer = document.createElement('div')\n    taskBtnContainer.classList.add('taskBtnContainer');\n    taskBtnContainer.append(makeDateAndTime(), makeProjectTypeContainer(), makeSaveTaskBtn());\n    return taskBtnContainer;\n}\n\nfunction makeSaveTaskBtn() {\n    const saveTaskBtn = document.createElement('button');\n    saveTaskBtn.classList.add('saveTaskBtn');\n    saveTaskBtn.innerText = 'Save';\n    saveTaskBtn.addEventListener('click', saveTask);\n    return saveTaskBtn;\n}\n\n// makes the project type container with a drop down menu\nfunction makeProjectTypeContainer() {\n    // makes container\n    const container = document.createElement('div');\n    container.classList.add('projectTypeContainer');\n    // makes button for user to click\n    const dropDownBtn = document.createElement('div');\n    dropDownBtn.classList.add('selectProjectType');\n    dropDownBtn.innerText = 'Select Project Type';\n    dropDownBtn.addEventListener('click', displayDropDown)\n    // makes drop down content and appends it to button\n    dropDownBtn.append(makeProjectTypeDropDown());\n    // appends button to container\n    container.append(dropDownBtn);\n    return container;\n}\n\nfunction displayDropDown() {\n    const dropDownContainer = document.querySelector('.dropDownContainer');\n    dropDownContainer.classList.toggle('show');\n}\n\n// makes the drop down container\nfunction makeProjectTypeDropDown() {\n    const dropDownContainer = document.createElement('div');\n    dropDownContainer.classList.add('dropDownContainer');\n    // makes personal project input and label\n    const personalProject = document.createElement('label');\n    const personalProjectRadio = document.createElement('input');\n    personalProject.innerText = 'Personal';\n    personalProjectRadio.type = 'radio';\n    personalProjectRadio.value = 'isPersonalProject';\n    personalProjectRadio.name = 'personalOrWorkProject';\n    personalProject.append(personalProjectRadio);\n\n    // makes work project input and label\n    const workProject = document.createElement('label');\n    const workProjectRadio = document.createElement('input');\n    workProject.innerText = 'Work';\n    workProjectRadio.type = 'radio';\n    workProjectRadio.value = 'isWorkProject';\n    workProjectRadio.name = 'personalOrWorkProject';\n    workProject.append(workProjectRadio);\n\n    dropDownContainer.append(personalProject, workProject);\n    return dropDownContainer;\n}\n\n// sends selected project type to object or if non are checked sends as uncategorized\nfunction getProjectType(){\n    const projectType = document.querySelector('input[name=\"personalOrWorkProject\"]:checked');\n    if(projectType === null){\n        return 'uncategorized';\n    }\n    return projectType.value;\n}\n\n// displays the date and time picker that the user can choose when to set task to be completed\nfunction makeDateAndTime() {\n    // makes container for label and input\n    const container = document.createElement('div');\n    container.classList.add('dateInputContainer');\n    // makes label\n    const dateTimeLabel = document.createElement('label');\n    dateTimeLabel.innerText = 'Set Due Date';\n    // makes input\n    const dateTimeInput = document.createElement('input');\n    dateTimeInput.classList.add('dateTimeInput');\n    dateTimeInput.defaultValue = setDefaultDateTime();\n    dateTimeInput.type = 'datetime-local';\n    container.append(dateTimeLabel, dateTimeInput);\n    return container;\n}\n\n// sets default to input if user doesnt pick date and time\nfunction setDefaultDateTime(){\n    const now = new Date();\n    return `${now.getFullYear()}-${formatMonth(now)}-${formatDate(now)}T${now.getHours()}:${formatMinutes(now)}`\n}\n\n// returns current month with extra 0 at beginning if needed\nfunction formatMonth(now) {\n    let currentMonth = now.getMonth();\n    if(currentMonth.toString().length < 2){\n        return `0${Number(currentMonth) + 1}`;\n    }\n    return `${currentMonth + 1}`;\n}\n\n// returns current date with extra 0 at beginning if needed\nfunction formatDate(now) {\n    let currentDate = now.getDate();\n    if(currentDate.toString().length < 2){\n        return `0${Number(currentDate)}`;\n    }\n    return currentDate;\n}\n\n// returns current minutes with extra 0 at beginning if needed\nfunction formatMinutes(now) {\n    let currentMinutes = now.getMinutes();\n    if(currentMinutes.toString().length < 2){\n        return `0${Number(currentMinutes)}`;\n    }\n    return currentMinutes;\n}\n\n// splits the date and time from the input and sends them back to each function\nfunction splitDateAndTime(dateOrTime) {\n    const taskTime = document.querySelector('.dateTimeInput');\n    if(dateOrTime === 'date'){\n        return taskTime.value.split('T')[0];\n    } else {\n        return taskTime.value.split('T')[1];\n    }\n    \n}\n\n// gets the month day and year\nfunction getTheDate() {\n    const date = splitDateAndTime('date');\n    return date;\n}\n\n// gets the hours and minutes\nfunction getTheTime() {\n    const time = splitDateAndTime('time');\n    return time;\n}\n\n// sets number on the object to make it easier to delete\nfunction setTheIndex() {\n    indexNum++\n    localStorage.setItem('indexNum', indexNum);\n    return indexNum;\n}\n\nfunction saveTask() {\n    const mainContent = document.querySelector('#mainContent');\n    const newTaskContainer = document.querySelector('#newTaskContainer');\n    const taskDisplayContainer = document.querySelector('.taskDisplayContainer');\n    const taskTitle = document.querySelector('.taskInput');\n    const newTask = new Task(taskTitle.innerText, getTheDate(), getTheTime(), setTheIndex(), getProjectType());\n    // push new task to array\n    _tasks_js__WEBPACK_IMPORTED_MODULE_0__.taskList.push(newTask);\n    newTaskContainer.remove();\n    // removes container so duplicates dont happen\n    taskDisplayContainer.remove();\n\n    // calls the correct function to display tasks depending on which page is loaded\n    if(mainContent.classList.contains('homePage')){\n        // displays all tasks on page\n        (0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)(_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.storedTaskList);\n    } else if (mainContent.classList.contains('todayPage')){\n        // displays todays tasks on page\n        (0,_today_js__WEBPACK_IMPORTED_MODULE_1__.displayTodaysTasks)();\n    }\n    (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_2__.displayOrganizedProjects)();\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_3__.populateStorage)();\n}\n\nclass Task {\n    constructor(title, date, time, indexNum, projectType){\n        this.title = title;\n        this.date = date;\n        this.time = time;\n        this.indexNum = indexNum;\n        this.projectType = projectType;\n    }\n}\n\n//# sourceURL=webpack://task-maker/./src/new-task.js?",
        );

        /***/
      },

    /***/ "./src/sidebar.js":
      /*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayOrganizedProjects: () => (/* binding */ displayOrganizedProjects)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\nconst sidebarDisplay = document.querySelector('#sidebar');\n\n// creates all the buttons in the sidebar\nfunction makeSidebarTop() {\n    const sidebarContainerTop = document.createElement('div');\n    sidebarContainerTop.classList.add('sidebarContainerTop');\n    sidebarContainerTop.append(makeHomeBtn(), makeTodayBtn(), makeCalendarBtn());\n    sidebarDisplay.append(sidebarContainerTop);\n}\n\n// displays all tasks when page loads or clicked\nfunction makeHomeBtn() {\n    const button = document.createElement('button');\n    button.classList.add('homeBtn');\n    button.innerText = 'Home';\n    return button;\n}\n\n// displays todays tasks when clicked\nfunction makeTodayBtn() {\n    const button = document.createElement('button');\n    button.classList.add('todaysTasksBtn');\n    button.innerText = 'Today';\n    return button;\n}\n\n// displays a calendar showing all tasks on each date\nfunction makeCalendarBtn() {\n    const button = document.createElement('button');\n    button.classList.add('calendarViewBtn');\n    button.innerText = 'Calendar';\n    return button;\n}\n\n// creates personal and work sections\nfunction makeSidebarBottom() {\n    const sidebarContainerBottom = document.createElement('div');\n    sidebarContainerBottom.classList.add('sidebarContainerBottom');\n    sidebarContainerBottom.append(makePersonalSection(), makeWorkSection(), makeUncategorizedSection());\n    sidebarDisplay.append(sidebarContainerBottom);\n}\n\n// user projects tagged as personal will appear under this section\nfunction makePersonalSection() {\n    const section = document.createElement('section');\n    section.classList.add('personalSectionContainer');\n\n    const h2 = document.createElement('h2');\n    h2.classList.add('personalSectionTitle');\n    h2.innerText = 'Personal';\n\n    section.append(h2);\n    return section;\n}\n\n// user projects tagged as work will appear under this section\nfunction makeWorkSection() {\n    const section = document.createElement('section');\n    section.classList.add('workSectionContainer');\n\n    const h2 = document.createElement('h2');\n    h2.classList.add('workSectionTitle');\n    h2.innerText = 'Work';\n\n    section.append(h2);\n    return section;\n}\n\n// user projects tagged as unorganized will appear under this section\nfunction makeUncategorizedSection() {\n    const section = document.createElement('section');\n    section.classList.add('uncategorizedSectionContainer');\n\n    const h2 = document.createElement('h2');\n    h2.classList.add('uncategorizedSectionTitle');\n    h2.innerText = 'Uncategorized';\n\n    section.append(h2);\n    return section;\n}\n\n// sends the correct project to the correct container in the side bar\nfunction displayOrganizedProjects() {\n    const personalSection = document.querySelector('.personalSectionContainer');\n    const workSection = document.querySelector('.workSectionContainer');\n    const uncategorizedSection = document.querySelector('.uncategorizedSectionContainer');\n    // gets all divs that are childen of section elements and removes them to avoid duplicates\n    const sidebarContainerBottom = document.querySelectorAll('.sidebarContainerBottom > section > div');\n    sidebarContainerBottom.forEach((div)=> {\n        div.remove();\n    })\n    _tasks__WEBPACK_IMPORTED_MODULE_0__.taskList.forEach((task) => {\n        if(task.projectType == 'isPersonalProject'){\n            const div = document.createElement('div');\n            div.dataset.indexNum = task.indexNum;\n            div.innerText = task.title;\n            personalSection.append(div);\n        } else if(task.projectType == 'isWorkProject'){\n            const div = document.createElement('div');\n            div.dataset.indexNum = task.indexNum;\n            div.innerText = task.title;\n            workSection.append(div);\n        } else {\n            const div = document.createElement('div');\n            div.dataset.indexNum = task.indexNum;\n            div.innerText = task.title;\n            uncategorizedSection.append(div);\n        }\n    });\n}\n\nmakeSidebarTop();\nmakeSidebarBottom();\n\n\n//# sourceURL=webpack://task-maker/./src/sidebar.js?",
        );

        /***/
      },

    /***/ "./src/sort-tasks.js":
      /*!***************************!*\
  !*** ./src/sort-tasks.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sortTasks: () => (/* binding */ sortTasks)\n/* harmony export */ });\nfunction sortTasks() {\n    const mainContent = document.querySelector('#mainContent');\n    const sortTasksBtn = makeSortBtn();\n    mainContent.append(sortTasksBtn);\n}\n\n// makes the sort button\nfunction makeSortBtn() {\n    const sortBtn = document.createElement('button');\n    sortBtn.innerHTML = '&darr;';\n    sortBtn.classList.add('sortTasksBtn');\n    sortBtn.addEventListener('click', showSortTaskMenu);\n    return sortBtn;\n}\n\n// changes the sort button innerhtml and will eventually have a dropdown menu\nfunction showSortTaskMenu() {\n    this.classList.toggle('up-arrow');\n    if(this.classList.contains('up-arrow')){\n        this.innerHTML = '&uarr;'\n    } else {\n        this.innerHTML = '&darr;'\n    }\n}\n\n//# sourceURL=webpack://task-maker/./src/sort-tasks.js?",
        );

        /***/
      },

    /***/ "./src/tasks.js":
      /*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   crossOutInSidebar: () => (/* binding */ crossOutInSidebar),\n/* harmony export */   displayAllTasks: () => (/* binding */ displayAllTasks),\n/* harmony export */   taskList: () => (/* binding */ taskList)\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n\nlet taskList = [];\n\nfunction displayAllTasks(storedTaskList){\n    // query selectors for containers\"\n    const taskContentContainer = document.querySelector('.taskContentContainer');\n    const completedTaskContainer = document.querySelector('.completedTaskContainer');\n    // creates task display container and adds a class\n    const taskDisplayContainer = document.createElement('div');\n    taskDisplayContainer.classList.add('taskDisplayContainer');\n    // when the page loads if there is a stored task list it will get it and display it\n    document.addEventListener('DOMContentLoaded', function(){\n        if(storedTaskList.length !== 0){\n            displayChosenTaskList(storedTaskList);\n            // displays tasks again in side bar so marking as complete properly works\n            (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.displayOrganizedProjects)();\n        } else {\n            console.log('ELSE')\n        }\n    })\n    // inserts the task display container before the completed task container\n    taskContentContainer.insertBefore(taskDisplayContainer, completedTaskContainer);\n    // this is called when a new task is created\n    displayChosenTaskList(taskList);\n}\n\n// this function will display either the task from local storage or it will update when a new task is created and display the new array\nfunction displayChosenTaskList(sentList){\n    const taskDisplayContainer = document.querySelector('.taskDisplayContainer');\n    // each task gets its own container and is appended to a container that is added to the DOM\n    if(sentList !== '[]'){\n        sentList.forEach((task) => {\n            if(!task.completed == true){\n                const taskUnit = document.createElement('div');\n                const taskTitle = document.createElement('p');\n                taskTitle.innerText = task.title;\n                taskUnit.classList.add('taskUnit');\n                // adds a data-index-num attribute to the div\n                taskUnit.dataset.indexNum = task.indexNum;\n                taskUnit.append(makeCompleteBtn(), taskTitle);\n                taskDisplayContainer.prepend(taskUnit);\n            }\n        });\n    }\n    // sets the content of taskList to whichever list was sent\n    taskList = sentList;\n}\n\n// makes button that when clicked it will mark the task as completed\nfunction makeCompleteBtn() {\n    const button = document.createElement('button');\n    button.classList.add('completeTaskBtn');\n    button.addEventListener('click', completeTask)\n    return button;\n}\n\nfunction completeTask(e) {\n    const completedTaskContainer = document.querySelector('.completedTaskContainer');\n    // appends the completed task to the completed task container\n    completedTaskContainer.append(e.target.parentNode);\n    // sends completed task index num to add the true value to completed on the object\n    setCompleteOnObject(e.target.parentNode.getAttribute('data-index-num'));\n    e.target.parentNode.querySelector('p').classList.add('lineThroughText');\n    e.target.disabled = true;\n    removeCompletedTasks(e.target.parentNode.getAttribute('data-index-num'));\n    crossOutInSidebar(e.target.parentNode.getAttribute('data-index-num'));\n}\n\n// this function is called when the user marks a task as completed, it then adds a line through text in the side bar\nfunction crossOutInSidebar(completedIndex){\n    console.log(completedIndex)\n    const sidebarContainerBottom = document.querySelectorAll('.sidebarContainerBottom > section > div');\n    sidebarContainerBottom.forEach((div)=> {\n        if(completedIndex === div.getAttribute('data-index-num')){\n            div.classList.add('lineThroughText');\n        }\n    })\n}\n\n// when the user clicks on the complete task button this function will be called to removed the stored item from the task list\nfunction removeCompletedTasks(removedIndex){\n    let storedTaskList = JSON.parse(localStorage.getItem('storedTaskList'));\n    let newStoredTaskList = storedTaskList.filter(( obj ) => {\n        return obj.indexNum != removedIndex;\n    });\n    localStorage.setItem('storedTaskList', JSON.stringify(newStoredTaskList));\n}\n\n// checks for a match between completed index and marks it as true on the object\nfunction setCompleteOnObject(completedIndex) {\n    taskList.forEach((task) => {\n        if(task.indexNum == completedIndex){\n            task.completed = 'true';\n        }\n    })\n}\n\nfunction reAddEventListeners(){\n    document.querySelectorAll('.completeTaskBtn').forEach((button) => {\n        button.addEventListener('click', completeTask);\n    });\n}\nreAddEventListeners();\n\n//# sourceURL=webpack://task-maker/./src/tasks.js?",
        );

        /***/
      },

    /***/ "./src/today.js":
      /*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTodaysTasks: () => (/* binding */ displayTodaysTasks),\n/* harmony export */   loadTodayPage: () => (/* binding */ loadTodayPage)\n/* harmony export */ });\n/* harmony import */ var _new_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-task.js */ \"./src/new-task.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n\n\n\n\nfunction loadTodayPage() {\n    // gets main content container\n    const mainContent = document.querySelector('#mainContent');\n    // removes classes from main content\n    mainContent.className = '';\n    // adds today class to main content\n    mainContent.classList.add('todayPage');\n    // resets main content so duplicate elements dont appear\n    mainContent.innerHTML = '';\n    // adds new task button back\n    (0,_new_task_js__WEBPACK_IMPORTED_MODULE_0__.makeNewTask)();\n    // creates container for content\n    const taskContentContainer = document.createElement('div');\n    taskContentContainer.classList.add('taskContentContainer');\n    // creates complete task container\n    const completedTaskContainer = document.createElement('div');\n    completedTaskContainer.classList.add('completedTaskContainer');\n    // appends items to correct containers\n    taskContentContainer.append(makeTitle(), completedTaskContainer);\n    mainContent.append(taskContentContainer);\n    displayTodaysTasks();\n}\n\n// makes title for today page\nfunction makeTitle() {\n    const h2 = document.createElement('h2');\n    h2.classList.add('todayTitle');\n    h2.innerText = 'Today';\n    return h2;\n}\n\nfunction displayTodaysTasks() {\n    const taskContentContainer = document.querySelector('.taskContentContainer');\n    const completedTaskContainer = document.querySelector('.completedTaskContainer');\n    const taskDisplayContainer = document.createElement('div');\n    taskDisplayContainer.classList.add('taskDisplayContainer');\n\n    const todayDate = new Date();\n    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.taskList.forEach((task) => {\n        let dayOnly = task.date.replace(`${todayDate.getFullYear()}-${checkMonthForZero()}-`, '')\n        if(dayOnly == todayDate.getDate() && !task.completed == true){\n            const taskUnit = document.createElement('div');\n            const taskTitle = document.createElement('p');\n            taskTitle.innerText = task.title;\n            taskUnit.classList.add('taskUnit');\n            // adds a data-index-num attribute to the div\n            taskUnit.dataset.indexNum = task.indexNum;\n            taskUnit.append(makeCompleteBtn(), taskTitle);\n            taskDisplayContainer.prepend(taskUnit);\n        }\n    })\n    taskContentContainer.insertBefore(taskDisplayContainer, completedTaskContainer);\n}\n\nfunction checkMonthForZero() {\n    const now = new Date();\n    if(now.getMonth() >= 0 && now.getMonth() < 10){\n        return `0${now.getMonth() + 1}`;\n    } else {\n        return `${now.getMonth() + 1}`;\n    }\n}\n\nfunction makeCompleteBtn() {\n    const button = document.createElement('button');\n    button.classList.add('completeTaskBtn');\n    button.addEventListener('click', completeTask)\n    return button;\n}\n\nfunction completeTask(e) {\n    const completedTaskContainer = document.querySelector('.completedTaskContainer');\n    // appends the completed task to the completed task container\n    completedTaskContainer.append(e.target.parentNode);\n    // sends completed task index num to add the true value to completed on the object\n    setCompleteOnObject(e.target.parentNode.getAttribute('data-index-num'));\n    e.target.parentNode.querySelector('p').classList.add('lineThroughText');\n    e.target.disabled = true;\n    removeCompletedTasks(e.target.parentNode.getAttribute('data-index-num'));\n    (0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__.crossOutInSidebar)(e.target.parentNode.getAttribute('data-index-num'));\n}\n\n// when the user clicks on the complete task button this function will be called to removed the stored item from the task list\nfunction removeCompletedTasks(removedIndex){\n    let storedTaskList = JSON.parse(localStorage.getItem('storedTaskList'));\n    let newStoredTaskList = storedTaskList.filter(( obj ) => {\n        return obj.indexNum != removedIndex;\n    });\n    localStorage.setItem('storedTaskList', JSON.stringify(newStoredTaskList));\n}\n\n// checks for a match between completed index and marks it as true on the object\nfunction setCompleteOnObject(completedIndex) {\n    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.taskList.forEach((task) => {\n        if(task.indexNum == completedIndex){\n            task.completed = 'true';\n        }\n    });\n}\n\n//# sourceURL=webpack://task-maker/./src/today.js?",
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
