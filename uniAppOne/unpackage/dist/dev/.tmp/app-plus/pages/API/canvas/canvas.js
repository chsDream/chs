(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/API/canvas/canvas"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\HB\\uniAppOne\\pages\\API\\canvas\\canvas.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/HB/uniAppOne/pages/API/canvas/canvas.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar context = null;var _default =\n{\n  data: function data() {\n    return {\n      title: 'createContext',\n      names: [\"rotate\", \"scale\", \"reset\", \"translate\", \"save\", \"restore\", \"drawImage\", \"fillText\", \"fill\",\n      \"stroke\", \"clearRect\", \"beginPath\", \"closePath\", \"moveTo\", \"lineTo\", \"rect\", \"arc\",\n      \"quadraticCurveTo\", \"bezierCurveTo\", \"setFillStyle\", \"setStrokeStyle\", \"setGlobalAlpha\",\n      \"setShadow\", \"setFontSize\", \"setLineCap\", \"setLineJoin\", \"setLineWidth\", \"setMiterLimit\"] };\n\n\n  },\n  onReady: function onReady() {\n    context = uni.createCanvasContext('canvas');\n  },\n  methods: {\n    toTempFilePath: function toTempFilePath() {\n      uni.canvasToTempFilePath({\n        canvasId: 'canvas',\n        success: function success(res) {\n          console.log(res.tempFilePath);\n        },\n        fail: function fail(err) {\n          console.error(JSON.stringify(err));\n        } });\n\n    },\n    handleCanvasButton: function handleCanvasButton(name) {\n      this[name] && this[name]();\n    },\n    rotate: function rotate() {\n      context.beginPath();\n      context.rotate(10 * Math.PI / 180);\n      context.rect(225, 75, 20, 10);\n      context.fill();\n      context.draw();\n    },\n    scale: function scale() {\n      context.beginPath();\n      context.rect(25, 25, 50, 50);\n      context.stroke();\n\n      context.scale(2, 2);\n\n      context.beginPath();\n      context.rect(25, 25, 50, 50);\n      context.stroke();\n      context.draw();\n    },\n    reset: function reset() {\n      context.beginPath();\n\n      context.setFillStyle('#000000');\n      context.setStrokeStyle('#000000');\n      context.setFontSize(10);\n      context.setGlobalAlpha(1);\n      context.setShadow(0, 0, 0, 'rgba(0, 0, 0, 0)');\n\n      context.setLineCap('butt');\n      context.setLineJoin('miter');\n      context.setLineWidth(1);\n      context.setMiterLimit(10);\n      context.draw();\n    },\n    translate: function translate() {\n      context.beginPath();\n      context.rect(10, 10, 100, 50);\n      context.fill();\n\n      context.translate(70, 70);\n\n      context.beginPath();\n      context.fill();\n      context.draw();\n    },\n    save: function save() {\n      context.beginPath();\n      context.setStrokeStyle('#00ff00');\n      context.save();\n\n      context.scale(2, 2);\n      context.setStrokeStyle('#ff0000');\n      context.rect(0, 0, 100, 100);\n      context.stroke();\n      context.restore();\n\n      context.rect(0, 0, 50, 50);\n      context.stroke();\n      context.draw();\n    },\n    restore: function restore() {\n      [3, 2, 1].forEach(function (item) {\n        context.beginPath();\n        context.save();\n        context.scale(item, item);\n        context.rect(10, 10, 100, 100);\n        context.stroke();\n        context.restore();\n      });\n      context.draw();\n    },\n    drawImage: function drawImage() {\n\n      context.drawImage('../../../static/app-plus/uni@2x.png', 0, 0);\n\n\n\n\n      context.draw();\n    },\n    fillText: function fillText() {\n      context.setStrokeStyle('#ff0000');\n\n      context.beginPath();\n      context.moveTo(0, 10);\n      context.lineTo(300, 10);\n      context.stroke();\n      // context.save()\n      // context.scale(1.5, 1.5)\n      // context.translate(20, 20)\n      context.setFontSize(10);\n      context.fillText('Hello World', 0, 30);\n      context.setFontSize(20);\n      context.fillText('Hello World', 100, 30);\n\n      // context.restore()\n\n      context.beginPath();\n      context.moveTo(0, 30);\n      context.lineTo(300, 30);\n      context.stroke();\n      context.draw();\n    },\n    fill: function fill() {\n      context.beginPath();\n      context.rect(20, 20, 150, 100);\n      context.setStrokeStyle('#00ff00');\n      context.fill();\n      context.draw();\n    },\n    stroke: function stroke() {\n      context.beginPath();\n      context.moveTo(20, 20);\n      context.lineTo(20, 100);\n      context.lineTo(70, 100);\n      context.setStrokeStyle('#00ff00');\n      context.stroke();\n      context.draw();\n    },\n    clearRect: function clearRect() {\n      context.setFillStyle('#ff0000');\n      context.beginPath();\n      context.rect(0, 0, 300, 150);\n      context.fill();\n      context.clearRect(20, 20, 100, 50);\n      context.draw();\n    },\n    beginPath: function beginPath() {\n      context.beginPath();\n      context.setLineWidth(5);\n      context.setStrokeStyle('#ff0000');\n      context.moveTo(0, 75);\n      context.lineTo(250, 75);\n      context.stroke();\n      context.beginPath();\n      context.setStrokeStyle('#0000ff');\n      context.moveTo(50, 0);\n      context.lineTo(150, 130);\n      context.stroke();\n      context.draw();\n    },\n    closePath: function closePath() {\n      context.beginPath();\n      context.setLineWidth(1);\n      context.moveTo(20, 20);\n      context.lineTo(20, 100);\n      context.lineTo(70, 100);\n      context.closePath();\n      context.stroke();\n      context.draw();\n    },\n    moveTo: function moveTo() {\n      context.beginPath();\n      context.moveTo(0, 0);\n      context.lineTo(300, 150);\n      context.stroke();\n      context.draw();\n    },\n    lineTo: function lineTo() {\n      context.beginPath();\n      context.moveTo(20, 20);\n      context.lineTo(20, 100);\n      context.lineTo(70, 100);\n      context.stroke();\n      context.draw();\n    },\n    rect: function rect() {\n      context.beginPath();\n      context.rect(20, 20, 150, 100);\n      context.stroke();\n      context.draw();\n    },\n    arc: function arc() {\n      context.beginPath();\n      context.setLineWidth(2);\n      context.arc(75, 75, 50, 0, Math.PI * 2, true);\n      context.moveTo(110, 75);\n      context.arc(75, 75, 35, 0, Math.PI, false);\n      context.moveTo(65, 65);\n      context.arc(60, 65, 5, 0, Math.PI * 2, true);\n      context.moveTo(95, 65);\n      context.arc(90, 65, 5, 0, Math.PI * 2, true);\n      context.stroke();\n      context.draw();\n    },\n    quadraticCurveTo: function quadraticCurveTo() {\n      context.beginPath();\n      context.moveTo(20, 20);\n      context.quadraticCurveTo(20, 100, 200, 20);\n      context.stroke();\n      context.draw();\n    },\n    bezierCurveTo: function bezierCurveTo() {\n      context.beginPath();\n      context.moveTo(20, 20);\n      context.bezierCurveTo(20, 100, 200, 100, 200, 20);\n      context.stroke();\n      context.draw();\n    },\n    setFillStyle: function setFillStyle() {\n      ['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {\n        context.setFillStyle(item);\n        context.beginPath();\n        context.rect(0 + 75 * index, 0, 50, 50);\n        context.fill();\n      });\n      context.draw();\n    },\n    setStrokeStyle: function setStrokeStyle() {\n      ['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {\n        context.setStrokeStyle(item);\n        context.beginPath();\n        context.rect(0 + 75 * index, 0, 50, 50);\n        context.stroke();\n      });\n      context.draw();\n    },\n    setGlobalAlpha: function setGlobalAlpha() {\n      context.setFillStyle('#000000');\n      [1, 0.5, 0.1].forEach(function (item, index) {\n        context.setGlobalAlpha(item);\n        context.beginPath();\n        context.rect(0 + 75 * index, 0, 50, 50);\n        context.fill();\n      });\n      context.draw();\n      context.setGlobalAlpha(1);\n    },\n    setShadow: function setShadow() {\n      context.beginPath();\n      context.setShadow(10, 10, 10, 'rgba(0, 0, 0, 199)');\n      context.rect(10, 10, 100, 100);\n      context.fill();\n      context.draw();\n    },\n    setFontSize: function setFontSize() {\n      [10, 20, 30, 40].forEach(function (item, index) {\n        context.setFontSize(item);\n        context.fillText('Hello, world', 20, 20 + 40 * index);\n      });\n      context.draw();\n    },\n    setLineCap: function setLineCap() {\n      context.setLineWidth(10);\n      ['butt', 'round', 'square'].forEach(function (item, index) {\n        context.beginPath();\n        context.setLineCap(item);\n        context.moveTo(20, 20 + 20 * index);\n        context.lineTo(100, 20 + 20 * index);\n        context.stroke();\n      });\n      context.draw();\n    },\n    setLineJoin: function setLineJoin() {\n      context.setLineWidth(10);\n      ['bevel', 'round', 'miter'].forEach(function (item, index) {\n        context.beginPath();\n        context.setLineJoin(item);\n        context.moveTo(20 + 80 * index, 20);\n        context.lineTo(100 + 80 * index, 50);\n        context.lineTo(20 + 80 * index, 100);\n        context.stroke();\n      });\n      context.draw();\n    },\n    setLineWidth: function setLineWidth() {\n      [2, 4, 6, 8, 10].forEach(function (item, index) {\n        context.beginPath();\n        context.setLineWidth(item);\n        context.moveTo(20, 20 + 20 * index);\n        context.lineTo(100, 20 + 20 * index);\n        context.stroke();\n      });\n      context.draw();\n    },\n    setMiterLimit: function setMiterLimit() {\n      context.setLineWidth(4);\n      [2, 4, 6, 8, 10].forEach(function (item, index) {\n        context.beginPath();\n        context.setMiterLimit(item);\n        context.moveTo(20 + 80 * index, 20);\n        context.lineTo(100 + 80 * index, 50);\n        context.lineTo(20 + 80 * index, 100);\n        context.stroke();\n      });\n      context.draw();\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js */ \"./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js\")[\"default\"]))\n\n//# sourceURL=uni-app:///pages/API/canvas/canvas.vue?vue&type=script&lang=js&?c1b8");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\HB\\uniAppOne\\pages\\API\\canvas\\canvas.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!E:/HB/uniAppOne/pages/API/canvas/canvas.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=E:/HB/uniAppOne/pages/API/canvas/canvas.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\HB\\uniAppOne\\pages\\API\\canvas\\canvas.vue?vue&type=template&id=05953fdc&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/HB/uniAppOne/pages/API/canvas/canvas.vue?vue&type=template&id=05953fdc& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"view\",\n    [\n      _c(\"page-head\", { attrs: { title: _vm.title, mpcomid: \"f0831138-0\" } }),\n      _c(\n        \"view\",\n        { staticClass: \"uni-common-mt\" },\n        [\n          _c(\"canvas\", {\n            staticClass: \"canvas-element\",\n            attrs: { \"canvas-id\": \"canvas\", id: \"canvas\" }\n          }),\n          _c(\n            \"scroll-view\",\n            { staticClass: \"canvas-buttons\", attrs: { \"scroll-y\": \"true\" } },\n            [\n              _vm._l(_vm.names, function(name, index) {\n                return _c(\n                  \"block\",\n                  { key: index },\n                  [\n                    _c(\n                      \"button\",\n                      {\n                        staticClass: \"canvas-button\",\n                        attrs: { eventid: \"f0831138-0-\" + index },\n                        on: {\n                          click: function($event) {\n                            _vm.handleCanvasButton(name)\n                          }\n                        }\n                      },\n                      [_vm._v(_vm._s(name))]\n                    )\n                  ],\n                  1\n                )\n              }),\n              _c(\n                \"button\",\n                {\n                  staticClass: \"canvas-button\",\n                  attrs: { type: \"primary\", eventid: \"f0831138-1\" },\n                  on: { click: _vm.toTempFilePath }\n                },\n                [_vm._v(\"toTempFilePath\")]\n              )\n            ],\n            2\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=E:/HB/uniAppOne/pages/API/canvas/canvas.vue?vue&type=template&id=05953fdc&");

/***/ }),

/***/ "E:\\HB\\uniAppOne\\main.js?{\"page\":\"pages%2FAPI%2Fcanvas%2Fcanvas\"}":
/*!************************************************************************!*\
  !*** E:/HB/uniAppOne/main.js?{"page":"pages%2FAPI%2Fcanvas%2Fcanvas"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ \"E:\\\\HB\\\\uniAppOne\\\\pages.json\");\nvar _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ \"./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js\"));\nvar _canvas = _interopRequireDefault(__webpack_require__(/*! ./pages/API/canvas/canvas.vue */ \"E:\\\\HB\\\\uniAppOne\\\\pages\\\\API\\\\canvas\\\\canvas.vue\"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory.default)(_canvas.default));\n\n//# sourceURL=E:/HB/uniAppOne/main.js?%7B%22page%22:%22pages%252FAPI%252Fcanvas%252Fcanvas%22%7D");

/***/ }),

/***/ "E:\\HB\\uniAppOne\\pages\\API\\canvas\\canvas.vue":
/*!***************************************************!*\
  !*** E:/HB/uniAppOne/pages/API/canvas/canvas.vue ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_vue_vue_type_template_id_05953fdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.vue?vue&type=template&id=05953fdc& */ \"E:\\\\HB\\\\uniAppOne\\\\pages\\\\API\\\\canvas\\\\canvas.vue?vue&type=template&id=05953fdc&\");\n/* harmony import */ var _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas.vue?vue&type=script&lang=js& */ \"E:\\\\HB\\\\uniAppOne\\\\pages\\\\API\\\\canvas\\\\canvas.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas.vue?vue&type=style&index=0&lang=css& */ \"E:\\\\HB\\\\uniAppOne\\\\pages\\\\API\\\\canvas\\\\canvas.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _canvas_vue_vue_type_template_id_05953fdc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _canvas_vue_vue_type_template_id_05953fdc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"E:/HB/uniAppOne/pages/API/canvas/canvas.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=E:/HB/uniAppOne/pages/API/canvas/canvas.vue");

/***/ }),

/***/ "E:\\HB\\uniAppOne\\pages\\API\\canvas\\canvas.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** E:/HB/uniAppOne/pages/API/canvas/canvas.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./canvas.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\\\HB\\\\uniAppOne\\\\pages\\\\API\\\\canvas\\\\canvas.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=uni-app:///pages/API/canvas/canvas.vue?vue&type=script&lang=js&?cebf");

/***/ }),

/***/ "E:\\HB\\uniAppOne\\pages\\API\\canvas\\canvas.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** E:/HB/uniAppOne/pages/API/canvas/canvas.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./canvas.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\\\HB\\\\uniAppOne\\\\pages\\\\API\\\\canvas\\\\canvas.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=E:/HB/uniAppOne/pages/API/canvas/canvas.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "E:\\HB\\uniAppOne\\pages\\API\\canvas\\canvas.vue?vue&type=template&id=05953fdc&":
/*!**********************************************************************************!*\
  !*** E:/HB/uniAppOne/pages/API/canvas/canvas.vue?vue&type=template&id=05953fdc& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_template_id_05953fdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./canvas.vue?vue&type=template&id=05953fdc& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\\\HB\\\\uniAppOne\\\\pages\\\\API\\\\canvas\\\\canvas.vue?vue&type=template&id=05953fdc&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_template_id_05953fdc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Admin_WEB_Desktop_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_canvas_vue_vue_type_template_id_05953fdc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=E:/HB/uniAppOne/pages/API/canvas/canvas.vue?vue&type=template&id=05953fdc&");

/***/ })

},[["E:\\HB\\uniAppOne\\main.js?{\"page\":\"pages%2FAPI%2Fcanvas%2Fcanvas\"}","common/runtime","common/vendor"]]]);