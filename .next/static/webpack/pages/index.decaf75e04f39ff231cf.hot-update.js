webpackHotUpdate_N_E("pages/index",{

/***/ "./components/body.js":
/*!****************************!*\
  !*** ./components/body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card */ \"./components/card.js\");\n/* harmony import */ var _card_alarm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-alarm */ \"./components/card-alarm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/mark26/Documents/Class Work/Practicum/practicum-smart-farm/components/body.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\n\n\n\n\n // import Chart from './chart'\n\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./chart */ \"./components/chart.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./chart */ \"./components/chart.js\")];\n    },\n    modules: ['./chart']\n  }\n});\n_c2 = Chart;\n\nvar useInterval = function useInterval(callback, delay) {\n  _s();\n\n  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(); // Remember the latest callback.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    savedCallback.current = callback;\n  }, [callback]); // Set up the interval.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function tick() {\n      savedCallback.current();\n    }\n\n    if (delay !== null) {\n      var id = setInterval(tick, delay);\n      return function () {\n        return clearInterval(id);\n      };\n    }\n  }, [delay]);\n};\n\n_s(useInterval, \"dqNZMqbncP+HtqBlD20aSNv0Ugk=\");\n\nvar Body = function Body(_ref) {\n  _s2();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([0, 0]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([0, 0]),\n      status = _useState2[0],\n      setStatus = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(2000),\n      intervalTime = _useState3[0],\n      setIntervalTime = _useState3[1];\n\n  useInterval( /*#__PURE__*/Object(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var res;\n    return _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Object(_lib_api__WEBPACK_IMPORTED_MODULE_7__[\"fetchData\"])();\n\n          case 2:\n            res = _context.sent;\n            console.log(res);\n            setTimeout(function () {}, 500);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), intervalTime);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: \"Temperature\",\n      level: data[0],\n      statusId: status[0],\n      unit: \"\\xB0C\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      title: \"Humidity\",\n      level: data[1],\n      statusId: 2,\n      unit: \"%\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card_alarm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chart, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(Body, \"dlIkMKftIcYqPf3mK2/AnMauiJw=\", false, function () {\n  return [useInterval];\n});\n\n_c3 = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"Body\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2R5LmpzPzAyYWQiXSwibmFtZXMiOlsiQ2hhcnQiLCJkeW5hbWljIiwidXNlSW50ZXJ2YWwiLCJjYWxsYmFjayIsImRlbGF5Iiwic2F2ZWRDYWxsYmFjayIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ0aWNrIiwiaWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJCb2R5IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiaW50ZXJ2YWxUaW1lIiwic2V0SW50ZXJ2YWxUaW1lIiwiZmV0Y2hEYXRhIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHFIQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyxzQ0FBZDtBQUFBO0FBQUEsY0FBYyxTQUFkO0FBQUE7QUFBQSxFQUFyQjtNQUFNRCxLOztBQUVOLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUFBOztBQUN2QyxNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCLENBRHVDLENBR3ZDOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsaUJBQWEsQ0FBQ0csT0FBZCxHQUF3QkwsUUFBeEI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsUUFBRCxDQUZNLENBQVQsQ0FKdUMsQ0FRdkM7O0FBQ0FJLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNFLElBQVQsR0FBZ0I7QUFDZEosbUJBQWEsQ0FBQ0csT0FBZDtBQUNEOztBQUNELFFBQUlKLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFVBQUlNLEVBQUUsR0FBR0MsV0FBVyxDQUFDRixJQUFELEVBQU9MLEtBQVAsQ0FBcEI7QUFDQSxhQUFPO0FBQUEsZUFBTVEsYUFBYSxDQUFDRixFQUFELENBQW5CO0FBQUEsT0FBUDtBQUNEO0FBQ0YsR0FSUSxFQVFOLENBQUNOLEtBQUQsQ0FSTSxDQUFUO0FBU0QsQ0FsQkQ7O0dBQU1GLFc7O0FBcUJOLElBQU1XLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUFBLG1CQUVERixzREFBUSxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxDQUZQO0FBQUEsTUFFdEJHLE1BRnNCO0FBQUEsTUFFZEMsU0FGYzs7QUFBQSxtQkFHV0osc0RBQVEsQ0FBQyxJQUFELENBSG5CO0FBQUEsTUFHdEJLLFlBSHNCO0FBQUEsTUFHUkMsZUFIUTs7QUFJN0JuQixhQUFXLGdZQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1FvQiwwREFBUyxFQURqQjs7QUFBQTtBQUNKQyxlQURJO0FBRVZDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBRyxzQkFBVSxDQUFDLFlBQU0sQ0FDaEIsQ0FEUyxFQUNQLEdBRE8sQ0FBVjs7QUFIVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBS1JOLFlBTFEsQ0FBWDtBQU9BLHNCQUFPO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsNEJBQ0wscUVBQUMsNkNBQUQ7QUFBTSxXQUFLLEVBQUMsYUFBWjtBQUEwQixXQUFLLEVBQUVKLElBQUksQ0FBQyxDQUFELENBQXJDO0FBQTBDLGNBQVEsRUFBRUUsTUFBTSxDQUFDLENBQUQsQ0FBMUQ7QUFBK0QsVUFBSSxFQUFDO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxlQUVMLHFFQUFDLDZDQUFEO0FBQU0sV0FBSyxFQUFDLFVBQVo7QUFBdUIsV0FBSyxFQUFFRixJQUFJLENBQUMsQ0FBRCxDQUFsQztBQUF1QyxjQUFRLEVBQUUsQ0FBakQ7QUFBb0QsVUFBSSxFQUFDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSyxlQUdMLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISyxlQUlMLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBTUQsQ0FqQkQ7O0lBQU1ILEk7VUFJSlgsVzs7O01BSklXLEk7QUFtQlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ib2R5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuaW1wb3J0IENhcmRBbGFybSBmcm9tICcuL2NhcmQtYWxhcm0nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi4vbGliL2FwaSdcblxuLy8gaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL2NoYXJ0JykpXG5cbmNvbnN0IHVzZUludGVydmFsID0gKGNhbGxiYWNrLCBkZWxheSkgPT4ge1xuICBjb25zdCBzYXZlZENhbGxiYWNrID0gdXNlUmVmKCk7XG5cbiAgLy8gUmVtZW1iZXIgdGhlIGxhdGVzdCBjYWxsYmFjay5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlZENhbGxiYWNrLmN1cnJlbnQgPSBjYWxsYmFjaztcbiAgfSwgW2NhbGxiYWNrXSk7XG5cbiAgLy8gU2V0IHVwIHRoZSBpbnRlcnZhbC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50KCk7XG4gICAgfVxuICAgIGlmIChkZWxheSAhPT0gbnVsbCkge1xuICAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwodGljaywgZGVsYXkpO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH1cbiAgfSwgW2RlbGF5XSk7XG59XG5cblxuY29uc3QgQm9keSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoWzAsMF0pXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShbMCwwXSlcbiAgY29uc3QgW2ludGVydmFsVGltZSwgc2V0SW50ZXJ2YWxUaW1lXSA9IHVzZVN0YXRlKDIwMDApO1xuICB1c2VJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB9LCA1MDApO1xuICB9LCBpbnRlcnZhbFRpbWUpO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgPENhcmQgdGl0bGU9XCJUZW1wZXJhdHVyZVwiIGxldmVsPXtkYXRhWzBdfSBzdGF0dXNJZD17c3RhdHVzWzBdfSB1bml0PVwiwrBDXCIgLz5cbiAgICA8Q2FyZCB0aXRsZT1cIkh1bWlkaXR5XCIgbGV2ZWw9e2RhdGFbMV19IHN0YXR1c0lkPXsyfSB1bml0PVwiJVwiIC8+XG4gICAgPENhcmRBbGFybSAvPlxuICAgIDxDaGFydCAvPlxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9keVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/body.js\n");

/***/ })

})