webpackHotUpdate_N_E("pages/index",{

/***/ "./components/body.js":
/*!****************************!*\
  !*** ./components/body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ \"./components/card.js\");\n/* harmony import */ var _card_alarm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-alarm */ \"./components/card-alarm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/mark26/Documents/Class Work/Practicum/practicum-smart-farm/components/body.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n // import { fetchData } from '../lib/api'\n// import Chart from './chart'\n\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./chart */ \"./components/chart.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./chart */ \"./components/chart.js\")];\n    },\n    modules: ['./chart']\n  }\n});\n_c2 = Chart;\n\nvar Body = function Body(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    loading: false\n  }),\n      appState = _useState[0],\n      setAppState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var apiUrl = 'https://api.github.com/users/hacktivist123/repos';\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(apiUrl).then(function (repos) {\n      var allRepos = repos.data;\n      setAppState({\n        loading: false,\n        repos: allRepos\n      });\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Temperature\",\n      level: 10,\n      statusId: 0\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Humidity\",\n      level: 20,\n      statusId: 2\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_card_alarm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chart, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Body, \"M3Bb8pHczF6qHs331Taa57qIUOE=\");\n\n_c3 = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"Body\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2R5LmpzPzAyYWQiXSwibmFtZXMiOlsiQ2hhcnQiLCJkeW5hbWljIiwiQm9keSIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwiYXBwU3RhdGUiLCJzZXRBcHBTdGF0ZSIsInVzZUVmZmVjdCIsImFwaVVybCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcG9zIiwiYWxsUmVwb3MiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBQ0E7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHFIQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyxzQ0FBZDtBQUFBO0FBQUEsY0FBYyxTQUFkO0FBQUE7QUFBQSxFQUFyQjtNQUFNRCxLOztBQUVOLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBQUQsQ0FEWDtBQUFBLE1BQ3RCQyxRQURzQjtBQUFBLE1BQ1pDLFdBRFk7O0FBRzdCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxNQUFNLEdBQUcsa0RBQWY7QUFDQUMsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVRixNQUFWLEVBQWtCRyxJQUFsQixDQUF1QixVQUFDQyxLQUFELEVBQVc7QUFDaEMsVUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLElBQXZCO0FBQ0FSLGlCQUFXLENBQUM7QUFBRUYsZUFBTyxFQUFFLEtBQVg7QUFBa0JRLGFBQUssRUFBRUM7QUFBekIsT0FBRCxDQUFYO0FBQ0QsS0FIRDtBQUlELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFBTztBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLDRCQUNMLHFFQUFDLDZDQUFEO0FBQU0sV0FBSyxFQUFDLGFBQVo7QUFBMEIsV0FBSyxFQUFFLEVBQWpDO0FBQXFDLGNBQVEsRUFBRTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREssZUFFTCxxRUFBQyw2Q0FBRDtBQUFNLFdBQUssRUFBQyxVQUFaO0FBQXVCLFdBQUssRUFBRSxFQUE5QjtBQUFrQyxjQUFRLEVBQUU7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZLLGVBR0wscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhLLGVBSUwscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFNRCxDQWpCRDs7R0FBTVosSTs7TUFBQUEsSTtBQW1CU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvZHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuaW1wb3J0IENhcmRBbGFybSBmcm9tICcuL2NhcmQtYWxhcm0nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuLy8gaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi4vbGliL2FwaSdcblxuLy8gaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL2NoYXJ0JykpXG5cbmNvbnN0IEJvZHkgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFthcHBTdGF0ZSwgc2V0QXBwU3RhdGVdID0gdXNlU3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2hhY2t0aXZpc3QxMjMvcmVwb3MnO1xuICAgIGF4aW9zLmdldChhcGlVcmwpLnRoZW4oKHJlcG9zKSA9PiB7XG4gICAgICBjb25zdCBhbGxSZXBvcyA9IHJlcG9zLmRhdGE7XG4gICAgICBzZXRBcHBTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCByZXBvczogYWxsUmVwb3MgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgIDxDYXJkIHRpdGxlPVwiVGVtcGVyYXR1cmVcIiBsZXZlbD17MTB9IHN0YXR1c0lkPXswfSAvPlxuICAgIDxDYXJkIHRpdGxlPVwiSHVtaWRpdHlcIiBsZXZlbD17MjB9IHN0YXR1c0lkPXsyfSAvPlxuICAgIDxDYXJkQWxhcm0gLz5cbiAgICA8Q2hhcnQgLz5cbiAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/body.js\n");

/***/ })

})