webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/statusFormat.js":
/*!*****************************!*\
  !*** ./lib/statusFormat.js ***!
  \*****************************/
/*! exports provided: formatStatusIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatStatusIndex\", function() { return formatStatusIndex; });\nvar formatStatusIndex = function formatStatusIndex(level, goodInterval, outerRange) {\n  if (level === -1) return 0; // Untrack\n  else if (level >= goodInterval[0] && level <= goodInterval[1]) return 3; // Good\n    else if (level < goodInterval[0] + outerRange) return 1; // Lowest\n      else if (level < goodInterval[0]) return 2; // Low\n        else if (level > goodInterval[1] + outerRange) return 4; // Highest\n          else if (level > goodInterval[1]) return 5; // High\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3N0YXR1c0Zvcm1hdC5qcz80MGZlIl0sIm5hbWVzIjpbImZvcm1hdFN0YXR1c0luZGV4IiwibGV2ZWwiLCJnb29kSW50ZXJ2YWwiLCJvdXRlclJhbmdlIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQU8sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVFDLFlBQVIsRUFBc0JDLFVBQXRCLEVBQXFDO0FBQ3BFLE1BQUlGLEtBQUssS0FBSyxDQUFDLENBQWYsRUFDRSxPQUFPLENBQVAsQ0FERixDQUNXO0FBRFgsT0FFSyxJQUFJQSxLQUFLLElBQUlDLFlBQVksQ0FBQyxDQUFELENBQXJCLElBQTRCRCxLQUFLLElBQUlDLFlBQVksQ0FBQyxDQUFELENBQXJELEVBQ0gsT0FBTyxDQUFQLENBREcsQ0FDTTtBQUROLFNBRUEsSUFBSUQsS0FBSyxHQUFHQyxZQUFZLENBQUMsQ0FBRCxDQUFaLEdBQWtCQyxVQUE5QixFQUNILE9BQU8sQ0FBUCxDQURHLENBQ007QUFETixXQUVBLElBQUlGLEtBQUssR0FBR0MsWUFBWSxDQUFDLENBQUQsQ0FBeEIsRUFDSCxPQUFPLENBQVAsQ0FERyxDQUNNO0FBRE4sYUFFQSxJQUFJRCxLQUFLLEdBQUdDLFlBQVksQ0FBQyxDQUFELENBQVosR0FBa0JDLFVBQTlCLEVBQ0gsT0FBTyxDQUFQLENBREcsQ0FDTTtBQUROLGVBRUEsSUFBSUYsS0FBSyxHQUFHQyxZQUFZLENBQUMsQ0FBRCxDQUF4QixFQUNILE9BQU8sQ0FBUCxDQVprRSxDQVl6RDtBQUNaLENBYk0iLCJmaWxlIjoiLi9saWIvc3RhdHVzRm9ybWF0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjb25zdCBmb3JtYXRTdGF0dXNJbmRleCA9IChsZXZlbCwgZ29vZEludGVydmFsLCBvdXRlclJhbmdlKSA9PiB7XG4gIGlmIChsZXZlbCA9PT0gLTEpXG4gICAgcmV0dXJuIDAgLy8gVW50cmFja1xuICBlbHNlIGlmIChsZXZlbCA+PSBnb29kSW50ZXJ2YWxbMF0gJiYgbGV2ZWwgPD0gZ29vZEludGVydmFsWzFdKVxuICAgIHJldHVybiAzIC8vIEdvb2RcbiAgZWxzZSBpZiAobGV2ZWwgPCBnb29kSW50ZXJ2YWxbMF0gKyBvdXRlclJhbmdlKVxuICAgIHJldHVybiAxIC8vIExvd2VzdFxuICBlbHNlIGlmIChsZXZlbCA8IGdvb2RJbnRlcnZhbFswXSlcbiAgICByZXR1cm4gMiAvLyBMb3dcbiAgZWxzZSBpZiAobGV2ZWwgPiBnb29kSW50ZXJ2YWxbMV0gKyBvdXRlclJhbmdlKVxuICAgIHJldHVybiA0IC8vIEhpZ2hlc3RcbiAgZWxzZSBpZiAobGV2ZWwgPiBnb29kSW50ZXJ2YWxbMV0pXG4gICAgcmV0dXJuIDUgLy8gSGlnaFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/statusFormat.js\n");

/***/ })

})