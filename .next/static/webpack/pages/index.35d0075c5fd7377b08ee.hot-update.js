webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: fetchData, toggleAlarm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchData\", function() { return fetchData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleAlarm\", function() { return toggleAlarm; });\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar fetchData = /*#__PURE__*/function () {\n  var _ref = Object(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var response;\n    return _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.all([axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.github.com/users/hacktivist123'), axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.github.com/users/adenekan41')]);\n\n          case 3:\n            response = _context.sent;\n            console.log('Date created: ', response[0].data.created_at);\n            console.log('Date created: ', response[1].data.created_at);\n            return _context.abrupt(\"return\", response);\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(_context.t0);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 9]]);\n  }));\n\n  return function fetchData() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar toggleAlarm = /*#__PURE__*/function () {\n  var _ref2 = Object(_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {\n    var response;\n    return _Users_mark26_Documents_Class_Work_Practicum_practicum_smart_farm_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.all([axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.github.com/users/hacktivist123'), axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.github.com/users/adenekan41')]);\n\n          case 3:\n            response = _context2.sent;\n            console.log('Date created: ', response[0].data.created_at);\n            console.log('Date created: ', response[1].data.created_at);\n            return _context2.abrupt(\"return\", response);\n\n          case 9:\n            _context2.prev = 9;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.error(_context2.t0);\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 9]]);\n  }));\n\n  return function toggleAlarm(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcz9hYTg1Il0sIm5hbWVzIjpbImZldGNoRGF0YSIsImF4aW9zIiwiYWxsIiwiZ2V0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNyZWF0ZWRfYXQiLCJlcnJvciIsInRvZ2dsZUFsYXJtIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQVM7QUFBQSw4WEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUVDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxDQUMvQkQsNENBQUssQ0FBQ0UsR0FBTixDQUFVLDRDQUFWLENBRCtCLEVBRS9CRiw0Q0FBSyxDQUFDRSxHQUFOLENBQVUseUNBQVYsQ0FGK0IsQ0FBVixDQUZGOztBQUFBO0FBRWZDLG9CQUZlO0FBTXJCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUcsSUFBWixDQUFpQkMsVUFBL0M7QUFDQUgsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlHLElBQVosQ0FBaUJDLFVBQS9DO0FBUHFCLDZDQVFkSixRQVJjOztBQUFBO0FBQUE7QUFBQTtBQVdyQkMsbUJBQU8sQ0FBQ0ksS0FBUjs7QUFYcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVFQsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmO0FBZUEsSUFBTVUsV0FBVztBQUFBLCtYQUFHLGtCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQVYsNENBQUssQ0FBQ0MsR0FBTixDQUFVLENBQy9CRCw0Q0FBSyxDQUFDRSxHQUFOLENBQVUsNENBQVYsQ0FEK0IsRUFFL0JGLDRDQUFLLENBQUNFLEdBQU4sQ0FBVSx5Q0FBVixDQUYrQixDQUFWLENBRkE7O0FBQUE7QUFFakJDLG9CQUZpQjtBQU12QkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlHLElBQVosQ0FBaUJDLFVBQS9DO0FBQ0FILG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZRyxJQUFaLENBQWlCQyxVQUEvQztBQVB1Qiw4Q0FRaEJKLFFBUmdCOztBQUFBO0FBQUE7QUFBQTtBQVd2QkMsbUJBQU8sQ0FBQ0ksS0FBUjs7QUFYdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWEMsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQiIsImZpbGUiOiIuL2xpYi9hcGkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuYWxsKFtcbiAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9oYWNrdGl2aXN0MTIzJyksXG4gICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWRlbmVrYW40MScpXG4gICAgXSlcbiAgICBjb25zb2xlLmxvZygnRGF0ZSBjcmVhdGVkOiAnLCByZXNwb25zZVswXS5kYXRhLmNyZWF0ZWRfYXQpO1xuICAgIGNvbnNvbGUubG9nKCdEYXRlIGNyZWF0ZWQ6ICcsIHJlc3BvbnNlWzFdLmRhdGEuY3JlYXRlZF9hdCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUFsYXJtID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5hbGwoW1xuICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2hhY2t0aXZpc3QxMjMnKSxcbiAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hZGVuZWthbjQxJylcbiAgICBdKVxuICAgIGNvbnNvbGUubG9nKCdEYXRlIGNyZWF0ZWQ6ICcsIHJlc3BvbnNlWzBdLmRhdGEuY3JlYXRlZF9hdCk7XG4gICAgY29uc29sZS5sb2coJ0RhdGUgY3JlYXRlZDogJywgcmVzcG9uc2VbMV0uZGF0YS5jcmVhdGVkX2F0KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ })

})