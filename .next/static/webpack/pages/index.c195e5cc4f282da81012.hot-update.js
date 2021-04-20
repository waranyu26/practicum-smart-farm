webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: fetchData, toggleAlarm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchData\", function() { return fetchData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleAlarm\", function() { return toggleAlarm; });\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./lib/constants.js\");\n\n\n\n\nvar fetchData = /*#__PURE__*/function () {\n  var _ref = Object(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var response, lastIndex0, lastIndex1;\n    return _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_constants__WEBPACK_IMPORTED_MODULE_3__[\"API_ENDPOINT\"] + '/getdata');\n\n          case 3:\n            response = _context.sent;\n            lastIndex0 = response.data.Temp.length - 1;\n            lastIndex1 = response.data.Soil_Moisture.length - 1;\n            return _context.abrupt(\"return\", [response.data.Temp[lastIndex], response.data.Soil_Moisture[lastIndex]]);\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(_context.t0);\n            return _context.abrupt(\"return\", [0, 0]);\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 9]]);\n  }));\n\n  return function fetchData() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar toggleAlarm = /*#__PURE__*/function () {\n  var _ref2 = Object(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {\n    return _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            console.log(\"TOGGLE \" + id);\n            _context2.next = 4;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_constants__WEBPACK_IMPORTED_MODULE_3__[\"API_ENDPOINT\"] + \"/buzzer/\".concat(id));\n\n          case 4:\n            _context2.next = 9;\n            break;\n\n          case 6:\n            _context2.prev = 6;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.error(_context2.t0);\n\n          case 9:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 6]]);\n  }));\n\n  return function toggleAlarm(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcz9hYTg1Il0sIm5hbWVzIjpbImZldGNoRGF0YSIsImF4aW9zIiwiZ2V0IiwiQVBJX0VORFBPSU5UIiwicmVzcG9uc2UiLCJsYXN0SW5kZXgwIiwiZGF0YSIsIlRlbXAiLCJsZW5ndGgiLCJsYXN0SW5kZXgxIiwiU29pbF9Nb2lzdHVyZSIsImxhc3RJbmRleCIsImNvbnNvbGUiLCJlcnJvciIsInRvZ2dsZUFsYXJtIiwiaWQiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFNBQVM7QUFBQSw4WEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUVDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUMsdURBQVksR0FBRyxVQUF6QixDQUZGOztBQUFBO0FBRWZDLG9CQUZlO0FBR2ZDLHNCQUhlLEdBR0ZELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxJQUFkLENBQW1CQyxNQUFuQixHQUE0QixDQUgxQjtBQUlmQyxzQkFKZSxHQUlGTCxRQUFRLENBQUNFLElBQVQsQ0FBY0ksYUFBZCxDQUE0QkYsTUFBNUIsR0FBcUMsQ0FKbkM7QUFBQSw2Q0FLZCxDQUFDSixRQUFRLENBQUNFLElBQVQsQ0FBY0MsSUFBZCxDQUFtQkksU0FBbkIsQ0FBRCxFQUFnQ1AsUUFBUSxDQUFDRSxJQUFULENBQWNJLGFBQWQsQ0FBNEJDLFNBQTVCLENBQWhDLENBTGM7O0FBQUE7QUFBQTtBQUFBO0FBUXJCQyxtQkFBTyxDQUFDQyxLQUFSO0FBUnFCLDZDQVNkLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FUYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFUYixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7QUFhQSxJQUFNYyxXQUFXO0FBQUEsK1hBQUcsa0JBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXZCSCxtQkFBTyxDQUFDSSxHQUFSLENBQVksWUFBWUQsRUFBeEI7QUFGdUI7QUFBQSxtQkFHakJkLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUMsdURBQVkscUJBQWNZLEVBQWQsQ0FBdEIsQ0FIaUI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU12QkgsbUJBQU8sQ0FBQ0MsS0FBUjs7QUFOdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWEMsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQiIsImZpbGUiOiIuL2xpYi9hcGkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQVBJX0VORFBPSU5UIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbmV4cG9ydCBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoQVBJX0VORFBPSU5UICsgJy9nZXRkYXRhJyk7XG4gICAgY29uc3QgbGFzdEluZGV4MCA9IHJlc3BvbnNlLmRhdGEuVGVtcC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGxhc3RJbmRleDEgPSByZXNwb25zZS5kYXRhLlNvaWxfTW9pc3R1cmUubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gW3Jlc3BvbnNlLmRhdGEuVGVtcFtsYXN0SW5kZXhdLCByZXNwb25zZS5kYXRhLlNvaWxfTW9pc3R1cmVbbGFzdEluZGV4XV07XG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gWzAsIDBdXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUFsYXJtID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coXCJUT0dHTEUgXCIgKyBpZClcbiAgICBhd2FpdCBheGlvcy5nZXQoQVBJX0VORFBPSU5UICsgYC9idXp6ZXIvJHtpZH1gKTtcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ })

})