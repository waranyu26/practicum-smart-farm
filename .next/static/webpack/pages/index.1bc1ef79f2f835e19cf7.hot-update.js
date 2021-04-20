webpackHotUpdate_N_E("pages/index",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/mark26/Documents/Class Work/Practicum/practicum-smart-farm/components/card.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Card = function Card(_ref) {\n  var title = _ref.title,\n      level = _ref.level,\n      statusId = _ref.statusId;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"p-4 lg:w-1/2 w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"bg-white p-10 rounded-lg shadow-lg mb-10 h-full relative text-center overflow-hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-4xl font-bold\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mt-4 mb-10\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"text-gray-600 text-lg mb-10\",\n          children: [\"The \", title.toLowerCase(), \" level is about \", level]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this), statusId != 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Progress\"], {\n          type: \"circle\",\n          strokeColor: {\n            '0%': '#108ee9',\n            '100%': '#87d068'\n          },\n          percent: level,\n          width: 200\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"Progress\"], {\n          type: \"circle\",\n          percent: 100,\n          width: 200,\n          status: \"exception\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"text-md uppercase\",\n        children: \"Current status:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        className: \"tracking-wide text-2xl\",\n        children: _lib_constants__WEBPACK_IMPORTED_MODULE_2__[\"SHORT_STATUS\"][statusId]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        className: \"tracking-wide text-md\",\n        children: [\"The \", title, \" is \", _lib_constants__WEBPACK_IMPORTED_MODULE_2__[\"STATUS_DETAIL\"][statusId]]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      \"class\": \"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg\",\n      children: \"Button\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLmpzPzUxZTAiXSwibmFtZXMiOlsiQ2FyZCIsInRpdGxlIiwibGV2ZWwiLCJzdGF0dXNJZCIsInRvTG93ZXJDYXNlIiwiU0hPUlRfU1RBVFVTIiwiU1RBVFVTX0RFVEFJTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFnQztBQUFBLE1BQTdCQyxLQUE2QixRQUE3QkEsS0FBNkI7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzNDLHNCQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsc0ZBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsb0JBQWQ7QUFBQSxrQkFBb0NGO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDLDZCQUFiO0FBQUEsNkJBQWdEQSxLQUFLLENBQUNHLFdBQU4sRUFBaEQsc0JBQXFGRixLQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR0MsUUFBUSxJQUFJLENBQVosZ0JBQ0MscUVBQUMsNkNBQUQ7QUFBVSxjQUFJLEVBQUMsUUFBZjtBQUF3QixxQkFBVyxFQUFFO0FBQ25DLGtCQUFNLFNBRDZCO0FBRW5DLG9CQUFRO0FBRjJCLFdBQXJDO0FBR0csaUJBQU8sRUFBRUQsS0FIWjtBQUdtQixlQUFLLEVBQUU7QUFIMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxnQkFLQyxxRUFBQyw2Q0FBRDtBQUFVLGNBQUksRUFBQyxRQUFmO0FBQXdCLGlCQUFPLEVBQUUsR0FBakM7QUFBc0MsZUFBSyxFQUFFLEdBQTdDO0FBQWtELGdCQUFNLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVdFO0FBQUksaUJBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBWUU7QUFBSSxpQkFBUyxFQUFDLHdCQUFkO0FBQUEsa0JBQ0dHLDJEQUFZLENBQUNGLFFBQUQ7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkYsZUFlRTtBQUFJLGlCQUFTLEVBQUMsdUJBQWQ7QUFBQSwyQkFDT0YsS0FEUCxVQUNrQkssNERBQWEsQ0FBQ0gsUUFBRCxDQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXFCRTtBQUFRLGVBQU0sb0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0ExQkQ7O0tBQU1ILEk7QUE0QlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNIT1JUX1NUQVRVUywgU1RBVFVTX0RFVEFJTCB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tICdhbnRkJztcblxuY29uc3QgQ2FyZCA9ICh7IHRpdGxlLCBsZXZlbCwgc3RhdHVzSWQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGxnOnctMS8yIHctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTEwIHJvdW5kZWQtbGcgc2hhZG93LWxnIG1iLTEwIGgtZnVsbCByZWxhdGl2ZSB0ZXh0LWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZFwiPnt0aXRsZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItMTBcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtbGcgbWItMTBcIj5UaGUge3RpdGxlLnRvTG93ZXJDYXNlKCl9IGxldmVsIGlzIGFib3V0IHtsZXZlbH08L3A+XG4gICAgICAgICAge3N0YXR1c0lkICE9IDAgP1xuICAgICAgICAgICAgPFByb2dyZXNzIHR5cGU9XCJjaXJjbGVcIiBzdHJva2VDb2xvcj17e1xuICAgICAgICAgICAgICAnMCUnOiAnIzEwOGVlOScsXG4gICAgICAgICAgICAgICcxMDAlJzogJyM4N2QwNjgnLFxuICAgICAgICAgICAgfX0gcGVyY2VudD17bGV2ZWx9IHdpZHRoPXsyMDB9IC8+IDpcbiAgICAgICAgICAgIDxQcm9ncmVzcyB0eXBlPVwiY2lyY2xlXCIgcGVyY2VudD17MTAwfSB3aWR0aD17MjAwfSBzdGF0dXM9XCJleGNlcHRpb25cIiAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LW1kIHVwcGVyY2FzZVwiPkN1cnJlbnQgc3RhdHVzOjwvaDI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cmFja2luZy13aWRlIHRleHQtMnhsXCI+XG4gICAgICAgICAge1NIT1JUX1NUQVRVU1tzdGF0dXNJZF19XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cmFja2luZy13aWRlIHRleHQtbWRcIj5cbiAgICAgICAgICBUaGUge3RpdGxlfSBpcyB7U1RBVFVTX0RFVEFJTFtzdGF0dXNJZF19XG4gICAgICAgIDwvaDM+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwidGV4dC13aGl0ZSBiZy1pbmRpZ28tNTAwIGJvcmRlci0wIHB5LTIgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctaW5kaWdvLTYwMCByb3VuZGVkIHRleHQtbGdcIj5CdXR0b248L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/card.js\n");

/***/ })

})