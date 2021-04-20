webpackHotUpdate_N_E("pages/index",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/mark26/Documents/Class Work/Practicum/practicum-smart-farm/components/card.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Card = function Card(_ref) {\n  var title = _ref.title,\n      level = _ref.level,\n      statusId = _ref.statusId,\n      unit = _ref.unit;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"p-4 lg:w-1/2 w-full\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"bg-white p-10 rounded-lg shadow-lg mb-10 h-full relative text-center overflow-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-4xl font-bold\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mt-4 mb-10\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-gray-600 text-lg mb-10\",\n          children: [\"The \", title.toLowerCase(), \" level is about \", level, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this), statusId != 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Progress\"], {\n          type: \"circle\",\n          strokeColor: {\n            '0%': '#108ee9',\n            '100%': '#87d068'\n          },\n          percent: level,\n          width: 200\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Progress\"], {\n          type: \"circle\",\n          percent: 100,\n          width: 200,\n          status: \"exception\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"text-md uppercase\",\n        children: \"Current status:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        className: \"tracking-wide text-2xl\",\n        children: _lib_constants__WEBPACK_IMPORTED_MODULE_2__[\"SHORT_STATUS\"][statusId]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        className: \"tracking-wide text-md\",\n        children: [\"The \", title, \" is \", _lib_constants__WEBPACK_IMPORTED_MODULE_2__[\"STATUS_DETAIL\"][statusId]]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLmpzPzUxZTAiXSwibmFtZXMiOlsiQ2FyZCIsInRpdGxlIiwibGV2ZWwiLCJzdGF0dXNJZCIsInVuaXQiLCJ0b0xvd2VyQ2FzZSIsIlNIT1JUX1NUQVRVUyIsIlNUQVRVU19ERVRBSUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBc0M7QUFBQSxNQUFuQ0MsS0FBbUMsUUFBbkNBLEtBQW1DO0FBQUEsTUFBNUJDLEtBQTRCLFFBQTVCQSxLQUE0QjtBQUFBLE1BQXJCQyxRQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDakQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxzRkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxvQkFBZDtBQUFBLGtCQUFvQ0g7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUMsNkJBQWI7QUFBQSw2QkFBZ0RBLEtBQUssQ0FBQ0ksV0FBTixFQUFoRCxzQkFBcUZILEtBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHQyxRQUFRLElBQUksQ0FBWixnQkFDQyxxRUFBQyw2Q0FBRDtBQUFVLGNBQUksRUFBQyxRQUFmO0FBQXdCLHFCQUFXLEVBQUU7QUFDbkMsa0JBQU0sU0FENkI7QUFFbkMsb0JBQVE7QUFGMkIsV0FBckM7QUFHRyxpQkFBTyxFQUFFRCxLQUhaO0FBR21CLGVBQUssRUFBRTtBQUgxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQUtDLHFFQUFDLDZDQUFEO0FBQVUsY0FBSSxFQUFDLFFBQWY7QUFBd0IsaUJBQU8sRUFBRSxHQUFqQztBQUFzQyxlQUFLLEVBQUUsR0FBN0M7QUFBa0QsZ0JBQU0sRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBV0U7QUFBSSxpQkFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUFZRTtBQUFJLGlCQUFTLEVBQUMsd0JBQWQ7QUFBQSxrQkFDR0ksMkRBQVksQ0FBQ0gsUUFBRDtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRixlQWVFO0FBQUksaUJBQVMsRUFBQyx1QkFBZDtBQUFBLDJCQUNPRixLQURQLFVBQ2tCTSw0REFBYSxDQUFDSixRQUFELENBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQXhCRDs7S0FBTUgsSTtBQTBCU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU0hPUlRfU1RBVFVTLCBTVEFUVVNfREVUQUlMIH0gZnJvbSAnLi4vbGliL2NvbnN0YW50cyc7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBDYXJkID0gKHsgdGl0bGUsIGxldmVsLCBzdGF0dXNJZCwgdW5pdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgbGc6dy0xLzIgdy1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMTAgcm91bmRlZC1sZyBzaGFkb3ctbGcgbWItMTAgaC1mdWxsIHJlbGF0aXZlIHRleHQtY2VudGVyIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBtYi0xMFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1sZyBtYi0xMFwiPlRoZSB7dGl0bGUudG9Mb3dlckNhc2UoKX0gbGV2ZWwgaXMgYWJvdXQge2xldmVsfSB7fTwvcD5cbiAgICAgICAgICB7c3RhdHVzSWQgIT0gMCA/XG4gICAgICAgICAgICA8UHJvZ3Jlc3MgdHlwZT1cImNpcmNsZVwiIHN0cm9rZUNvbG9yPXt7XG4gICAgICAgICAgICAgICcwJSc6ICcjMTA4ZWU5JyxcbiAgICAgICAgICAgICAgJzEwMCUnOiAnIzg3ZDA2OCcsXG4gICAgICAgICAgICB9fSBwZXJjZW50PXtsZXZlbH0gd2lkdGg9ezIwMH0gLz4gOlxuICAgICAgICAgICAgPFByb2dyZXNzIHR5cGU9XCJjaXJjbGVcIiBwZXJjZW50PXsxMDB9IHdpZHRoPXsyMDB9IHN0YXR1cz1cImV4Y2VwdGlvblwiIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbWQgdXBwZXJjYXNlXCI+Q3VycmVudCBzdGF0dXM6PC9oMj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGUgdGV4dC0yeGxcIj5cbiAgICAgICAgICB7U0hPUlRfU1RBVFVTW3N0YXR1c0lkXX1cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGUgdGV4dC1tZFwiPlxuICAgICAgICAgIFRoZSB7dGl0bGV9IGlzIHtTVEFUVVNfREVUQUlMW3N0YXR1c0lkXX1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/card.js\n");

/***/ })

})