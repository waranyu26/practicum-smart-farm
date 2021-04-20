webpackHotUpdate_N_E("pages/index",{

/***/ "./components/card-alarm.js":
/*!**********************************!*\
  !*** ./components/card-alarm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n\n\nvar _jsxFileName = \"/Users/mark26/Documents/Class Work/Practicum/practicum-smart-farm/components/card-alarm.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar CardAlarm = function CardAlarm(_ref) {\n  var isOn = _ref.isOn;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"p-4 w-full mb-20\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"bg-white p-10 rounded-lg shadow-lg mb-10 h-full relative text-center overflow-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-4xl font-bold\",\n        children: \"Alarm\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mt-4 mb-10\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-gray-600 text-lg mb-10 uppercase\",\n          children: \"CURRENT STATUS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this), isOn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Progress\"], {\n          type: \"circle\",\n          percent: 100,\n          format: function format() {\n            return 'ON';\n          },\n          width: 200\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 15\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Progress\"], {\n          type: \"circle\",\n          percent: 0,\n          format: function format() {\n            return 'OFF';\n          },\n          width: 200\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"text-md uppercase\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-col\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"relative text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg lg:w-1/2 mx-auto mb-4 rounded\",\n          onClick: true,\n          children: \"Toggle Alarm ON\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"relative text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg lg:w-1/2 mx-auto mb-4 rounded\",\n          children: \"Toggle Alarm OFF\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = CardAlarm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardAlarm);\n\nvar _c;\n\n$RefreshReg$(_c, \"CardAlarm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLWFsYXJtLmpzPzA1MTQiXSwibmFtZXMiOlsiQ2FyZEFsYXJtIiwiaXNPbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzlCLHNCQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsc0ZBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDLHVDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBR0lBLElBQUksZ0JBQ0YscUVBQUMsNkNBQUQ7QUFBVSxjQUFJLEVBQUMsUUFBZjtBQUF3QixpQkFBTyxFQUFFLEdBQWpDO0FBQXNDLGdCQUFNLEVBQUU7QUFBQSxtQkFBTSxJQUFOO0FBQUEsV0FBOUM7QUFBMEQsZUFBSyxFQUFFO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREUsZ0JBRUYscUVBQUMsNkNBQUQ7QUFBVSxjQUFJLEVBQUMsUUFBZjtBQUF3QixpQkFBTyxFQUFFLENBQWpDO0FBQW9DLGdCQUFNLEVBQUU7QUFBQSxtQkFBTSxLQUFOO0FBQUEsV0FBNUM7QUFBeUQsZUFBSyxFQUFFO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFVRTtBQUFJLGlCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFXRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNFO0FBQVEsbUJBQVMsRUFBQyxpSUFBbEI7QUFBb0osaUJBQU8sTUFBM0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFRLG1CQUFTLEVBQUMsaUlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQXJCRDs7S0FBTUQsUztBQXVCU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQtYWxhcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tICdhbnRkJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcbmltcG9ydCB7IHRvZ2dsZUFsYXJtIH0gZnJvbSAnLi4vbGliL2FwaSdcblxuY29uc3QgQ2FyZEFsYXJtID0gKHsgaXNPbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgdy1mdWxsIG1iLTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMTAgcm91bmRlZC1sZyBzaGFkb3ctbGcgbWItMTAgaC1mdWxsIHJlbGF0aXZlIHRleHQtY2VudGVyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkXCI+QWxhcm08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItMTBcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtbGcgbWItMTAgdXBwZXJjYXNlXCI+Q1VSUkVOVCBTVEFUVVM8L3A+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNPbiA/XG4gICAgICAgICAgICAgIDxQcm9ncmVzcyB0eXBlPVwiY2lyY2xlXCIgcGVyY2VudD17MTAwfSBmb3JtYXQ9eygpID0+ICdPTid9IHdpZHRoPXsyMDB9IC8+IDpcbiAgICAgICAgICAgICAgPFByb2dyZXNzIHR5cGU9XCJjaXJjbGVcIiBwZXJjZW50PXswfSBmb3JtYXQ9eygpID0+ICdPRkYnfSB3aWR0aD17MjAwfSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LW1kIHVwcGVyY2FzZVwiPjwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC13aGl0ZSBiZy1ncmF5LTUwMCBib3JkZXItMCBweS0yIHB4LTYgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLWluZGlnby02MDAgdGV4dC1sZyBsZzp3LTEvMiBteC1hdXRvIG1iLTQgcm91bmRlZFwiIG9uQ2xpY2s+VG9nZ2xlIEFsYXJtIE9OPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLWdyYXktNTAwIGJvcmRlci0wIHB5LTIgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctaW5kaWdvLTYwMCB0ZXh0LWxnIGxnOnctMS8yIG14LWF1dG8gbWItNCByb3VuZGVkXCI+VG9nZ2xlIEFsYXJtIE9GRjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkQWxhcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card-alarm.js\n");

/***/ })

})