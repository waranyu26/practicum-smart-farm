webpackHotUpdate_N_E("pages/index",{

/***/ "./components/body.js":
/*!****************************!*\
  !*** ./components/body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card */ \"./components/card.js\");\n/* harmony import */ var _card_alarm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-alarm */ \"./components/card-alarm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/mark26/Documents/Class Work/Practicum/practicum-smart-farm/components/body.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar useInterval = function useInterval(callback, delay) {\n  _s();\n\n  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(); // Remember the latest callback.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    savedCallback.current = callback;\n  }, [callback]); // Set up the interval.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function tick() {\n      savedCallback.current();\n    }\n\n    if (delay !== null) {\n      var id = setInterval(tick, delay);\n      return function () {\n        return clearInterval(id);\n      };\n    }\n  }, [delay]);\n};\n\n_s(useInterval, \"dqNZMqbncP+HtqBlD20aSNv0Ugk=\");\n\nvar Body = function Body(_ref) {\n  _s2();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([-1, -1]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(2000),\n      intervalTime = _useState2[0],\n      setIntervalTime = _useState2[1];\n\n  useInterval( /*#__PURE__*/Object(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var res;\n    return _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Object(_lib_api__WEBPACK_IMPORTED_MODULE_7__[\"fetchData\"])();\n\n          case 2:\n            res = _context.sent;\n            setData(res);\n            setTimeout(function () {}, 500);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), intervalTime);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: \"Temperature\",\n      level: data[0],\n      unit: \"\\xB0C\",\n      goodInterval: [20, 30],\n      outerRange: 5\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: \"Humidity\",\n      level: data[1],\n      unit: \"%\",\n      goodInterval: [36, 70],\n      outerRange: 10\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card_alarm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Body, \"fOEt9VUHgo/KDuAtY/pbN1NVheQ=\", false, function () {\n  return [useInterval];\n});\n\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\n\nvar _c;\n\n$RefreshReg$(_c, \"Body\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2R5LmpzPzAyYWQiXSwibmFtZXMiOlsidXNlSW50ZXJ2YWwiLCJjYWxsYmFjayIsImRlbGF5Iiwic2F2ZWRDYWxsYmFjayIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ0aWNrIiwiaWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJCb2R5IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiaW50ZXJ2YWxUaW1lIiwic2V0SW50ZXJ2YWxUaW1lIiwiZmV0Y2hEYXRhIiwicmVzIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQUE7O0FBQ3ZDLE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sRUFBNUIsQ0FEdUMsQ0FHdkM7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixpQkFBYSxDQUFDRyxPQUFkLEdBQXdCTCxRQUF4QjtBQUNELEdBRlEsRUFFTixDQUFDQSxRQUFELENBRk0sQ0FBVCxDQUp1QyxDQVF2Qzs7QUFDQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBU0UsSUFBVCxHQUFnQjtBQUNkSixtQkFBYSxDQUFDRyxPQUFkO0FBQ0Q7O0FBQ0QsUUFBSUosS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsVUFBSU0sRUFBRSxHQUFHQyxXQUFXLENBQUNGLElBQUQsRUFBT0wsS0FBUCxDQUFwQjtBQUNBLGFBQU87QUFBQSxlQUFNUSxhQUFhLENBQUNGLEVBQUQsQ0FBbkI7QUFBQSxPQUFQO0FBQ0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ04sS0FBRCxDQVJNLENBQVQ7QUFTRCxDQWxCRDs7R0FBTUYsVzs7QUFxQk4sSUFBTVcsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFDLENBQU4sQ0FBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLElBQUQsQ0FGbkI7QUFBQSxNQUV0QkcsWUFGc0I7QUFBQSxNQUVSQyxlQUZROztBQUk3QmpCLGFBQVcsZ1lBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUWtCLDBEQUFTLEVBRGpCOztBQUFBO0FBQ0pDLGVBREk7QUFFVkosbUJBQU8sQ0FBQ0ksR0FBRCxDQUFQO0FBQ0FDLHNCQUFVLENBQUMsWUFBTSxDQUNoQixDQURTLEVBQ1AsR0FETyxDQUFWOztBQUhVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFLUkosWUFMUSxDQUFYO0FBT0Esc0JBQU87QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSw0QkFDTCxxRUFBQyw2Q0FBRDtBQUFNLFdBQUssRUFBQyxhQUFaO0FBQTBCLFdBQUssRUFBRUYsSUFBSSxDQUFDLENBQUQsQ0FBckM7QUFBMEMsVUFBSSxFQUFDLE9BQS9DO0FBQW9ELGtCQUFZLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFsRTtBQUE0RSxnQkFBVSxFQUFFO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxlQUVMLHFFQUFDLDZDQUFEO0FBQU0sV0FBSyxFQUFDLFVBQVo7QUFBdUIsV0FBSyxFQUFFQSxJQUFJLENBQUMsQ0FBRCxDQUFsQztBQUF1QyxVQUFJLEVBQUMsR0FBNUM7QUFBZ0Qsa0JBQVksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQTlEO0FBQXdFLGdCQUFVLEVBQUU7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZLLGVBR0wscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBS0QsQ0FoQkQ7O0lBQU1ILEk7VUFJSlgsVzs7O0tBSklXLEk7QUFrQlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ib2R5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuaW1wb3J0IENhcmRBbGFybSBmcm9tICcuL2NhcmQtYWxhcm0nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi4vbGliL2FwaSdcblxuY29uc3QgdXNlSW50ZXJ2YWwgPSAoY2FsbGJhY2ssIGRlbGF5KSA9PiB7XG4gIGNvbnN0IHNhdmVkQ2FsbGJhY2sgPSB1c2VSZWYoKTtcblxuICAvLyBSZW1lbWJlciB0aGUgbGF0ZXN0IGNhbGxiYWNrLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVkQ2FsbGJhY2suY3VycmVudCA9IGNhbGxiYWNrO1xuICB9LCBbY2FsbGJhY2tdKTtcblxuICAvLyBTZXQgdXAgdGhlIGludGVydmFsLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgICBzYXZlZENhbGxiYWNrLmN1cnJlbnQoKTtcbiAgICB9XG4gICAgaWYgKGRlbGF5ICE9PSBudWxsKSB7XG4gICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbCh0aWNrLCBkZWxheSk7XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfVxuICB9LCBbZGVsYXldKTtcbn1cblxuXG5jb25zdCBCb2R5ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbLTEsIC0xXSlcbiAgY29uc3QgW2ludGVydmFsVGltZSwgc2V0SW50ZXJ2YWxUaW1lXSA9IHVzZVN0YXRlKDIwMDApO1xuXG4gIHVzZUludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaERhdGEoKTtcbiAgICBzZXREYXRhKHJlcylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB9LCA1MDApO1xuICB9LCBpbnRlcnZhbFRpbWUpO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgPENhcmQgdGl0bGU9XCJUZW1wZXJhdHVyZVwiIGxldmVsPXtkYXRhWzBdfSB1bml0PVwiwrBDXCIgZ29vZEludGVydmFsPXtbMjAsIDMwXX0gb3V0ZXJSYW5nZT17NX0gLz5cbiAgICA8Q2FyZCB0aXRsZT1cIkh1bWlkaXR5XCIgbGV2ZWw9e2RhdGFbMV19IHVuaXQ9XCIlXCIgZ29vZEludGVydmFsPXtbMzYsIDcwXX0gb3V0ZXJSYW5nZT17MTB9IC8+XG4gICAgPENhcmRBbGFybSAgLz5cbiAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/body.js\n");

/***/ })

})