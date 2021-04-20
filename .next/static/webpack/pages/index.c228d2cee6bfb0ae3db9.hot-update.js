webpackHotUpdate_N_E("pages/index",{

/***/ "./components/body.js":
/*!****************************!*\
  !*** ./components/body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card */ \"./components/card.js\");\n/* harmony import */ var _card_alarm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-alarm */ \"./components/card-alarm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/mark26/Documents/Class Work/Practicum/practicum-smart-farm/components/body.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar useInterval = function useInterval(callback, delay) {\n  _s();\n\n  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(); // Remember the latest callback.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    savedCallback.current = callback;\n  }, [callback]); // Set up the interval.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function tick() {\n      savedCallback.current();\n    }\n\n    if (delay !== null) {\n      var id = setInterval(tick, delay);\n      return function () {\n        return clearInterval(id);\n      };\n    }\n  }, [delay]);\n};\n\n_s(useInterval, \"dqNZMqbncP+HtqBlD20aSNv0Ugk=\");\n\nvar Body = function Body(_ref) {\n  _s2();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([0, 0]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(2000),\n      intervalTime = _useState2[0],\n      setIntervalTime = _useState2[1];\n\n  useInterval( /*#__PURE__*/Object(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var res;\n    return _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Object(_lib_api__WEBPACK_IMPORTED_MODULE_7__[\"fetchData\"])();\n\n          case 2:\n            res = _context.sent;\n            setData(res);\n            console.log(res);\n            setTimeout(function () {}, 500);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), intervalTime);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: \"Temperature\",\n      level: data[0],\n      unit: \"\\xB0C\",\n      goodInterval: [20, 30],\n      outerRange: 5\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: \"Humidity\",\n      level: data[1],\n      unit: \"%\",\n      goodInterval: [36, 70],\n      outerRange: 10\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card_alarm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Body, \"ws2HEtcVqS0JTIRms/n1m9I9TD4=\", false, function () {\n  return [useInterval];\n});\n\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\n\nvar _c;\n\n$RefreshReg$(_c, \"Body\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2R5LmpzPzAyYWQiXSwibmFtZXMiOlsidXNlSW50ZXJ2YWwiLCJjYWxsYmFjayIsImRlbGF5Iiwic2F2ZWRDYWxsYmFjayIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ0aWNrIiwiaWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJCb2R5IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiaW50ZXJ2YWxUaW1lIiwic2V0SW50ZXJ2YWxUaW1lIiwiZmV0Y2hEYXRhIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUFBOztBQUN2QyxNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCLENBRHVDLENBR3ZDOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsaUJBQWEsQ0FBQ0csT0FBZCxHQUF3QkwsUUFBeEI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsUUFBRCxDQUZNLENBQVQsQ0FKdUMsQ0FRdkM7O0FBQ0FJLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNFLElBQVQsR0FBZ0I7QUFDZEosbUJBQWEsQ0FBQ0csT0FBZDtBQUNEOztBQUNELFFBQUlKLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFVBQUlNLEVBQUUsR0FBR0MsV0FBVyxDQUFDRixJQUFELEVBQU9MLEtBQVAsQ0FBcEI7QUFDQSxhQUFPO0FBQUEsZUFBTVEsYUFBYSxDQUFDRixFQUFELENBQW5CO0FBQUEsT0FBUDtBQUNEO0FBQ0YsR0FSUSxFQVFOLENBQUNOLEtBQUQsQ0FSTSxDQUFUO0FBU0QsQ0FsQkQ7O0dBQU1GLFc7O0FBcUJOLElBQU1XLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLElBQUQsQ0FGbkI7QUFBQSxNQUV0QkcsWUFGc0I7QUFBQSxNQUVSQyxlQUZROztBQUk3QmpCLGFBQVcsZ1lBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUWtCLDBEQUFTLEVBRGpCOztBQUFBO0FBQ0pDLGVBREk7QUFFVkosbUJBQU8sQ0FBQ0ksR0FBRCxDQUFQO0FBQ0FDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBRyxzQkFBVSxDQUFDLFlBQU0sQ0FDaEIsQ0FEUyxFQUNQLEdBRE8sQ0FBVjs7QUFKVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBTVJOLFlBTlEsQ0FBWDtBQVFBLHNCQUFPO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsNEJBQ0wscUVBQUMsNkNBQUQ7QUFBTSxXQUFLLEVBQUMsYUFBWjtBQUEwQixXQUFLLEVBQUVGLElBQUksQ0FBQyxDQUFELENBQXJDO0FBQTBDLFVBQUksRUFBQyxPQUEvQztBQUFvRCxrQkFBWSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBbEU7QUFBNEUsZ0JBQVUsRUFBRTtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREssZUFFTCxxRUFBQyw2Q0FBRDtBQUFNLFdBQUssRUFBQyxVQUFaO0FBQXVCLFdBQUssRUFBRUEsSUFBSSxDQUFDLENBQUQsQ0FBbEM7QUFBdUMsVUFBSSxFQUFDLEdBQTVDO0FBQWdELGtCQUFZLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUE5RDtBQUF3RSxnQkFBVSxFQUFFO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSyxlQUdMLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUtELENBakJEOztJQUFNSCxJO1VBSUpYLFc7OztLQUpJVyxJO0FBbUJTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYm9keS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZCdcbmltcG9ydCBDYXJkQWxhcm0gZnJvbSAnLi9jYXJkLWFsYXJtJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4uL2xpYi9hcGknXG5cbmNvbnN0IHVzZUludGVydmFsID0gKGNhbGxiYWNrLCBkZWxheSkgPT4ge1xuICBjb25zdCBzYXZlZENhbGxiYWNrID0gdXNlUmVmKCk7XG5cbiAgLy8gUmVtZW1iZXIgdGhlIGxhdGVzdCBjYWxsYmFjay5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlZENhbGxiYWNrLmN1cnJlbnQgPSBjYWxsYmFjaztcbiAgfSwgW2NhbGxiYWNrXSk7XG5cbiAgLy8gU2V0IHVwIHRoZSBpbnRlcnZhbC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50KCk7XG4gICAgfVxuICAgIGlmIChkZWxheSAhPT0gbnVsbCkge1xuICAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwodGljaywgZGVsYXkpO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH1cbiAgfSwgW2RlbGF5XSk7XG59XG5cblxuY29uc3QgQm9keSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoWzAsIDBdKVxuICBjb25zdCBbaW50ZXJ2YWxUaW1lLCBzZXRJbnRlcnZhbFRpbWVdID0gdXNlU3RhdGUoMjAwMCk7XG5cbiAgdXNlSW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRGF0YSgpO1xuICAgIHNldERhdGEocmVzKVxuICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB9LCA1MDApO1xuICB9LCBpbnRlcnZhbFRpbWUpO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgPENhcmQgdGl0bGU9XCJUZW1wZXJhdHVyZVwiIGxldmVsPXtkYXRhWzBdfSB1bml0PVwiwrBDXCIgZ29vZEludGVydmFsPXtbMjAsIDMwXX0gb3V0ZXJSYW5nZT17NX0gLz5cbiAgICA8Q2FyZCB0aXRsZT1cIkh1bWlkaXR5XCIgbGV2ZWw9e2RhdGFbMV19IHVuaXQ9XCIlXCIgZ29vZEludGVydmFsPXtbMzYsIDcwXX0gb3V0ZXJSYW5nZT17MTB9IC8+XG4gICAgPENhcmRBbGFybSAvPlxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9keVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/body.js\n");

/***/ })

})