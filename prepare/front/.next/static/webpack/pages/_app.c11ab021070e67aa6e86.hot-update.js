webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialValue, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialValue\", function() { return initialValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_NICKNAME_REQUEST\", function() { return CHANGE_NICKNAME_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_NICKNAME_SUCCESS\", function() { return CHANGE_NICKNAME_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_NICKNAME_FAILURE\", function() { return CHANGE_NICKNAME_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_REQUEST\", function() { return FOLLOW_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_SUCCESS\", function() { return FOLLOW_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_FAILURE\", function() { return FOLLOW_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_REQUEST\", function() { return UNFOLLOW_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_SUCCESS\", function() { return UNFOLLOW_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_FAILURE\", function() { return UNFOLLOW_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nvar initialValue = {\n  logInLoading: false,\n  //로그인 시도중\n  logInDone: false,\n  logInError: null,\n  logOutLoading: false,\n  //로그아웃 시도중\n  logOutDone: false,\n  logOutError: null,\n  signUpLoading: false,\n  //회원가입 시도중\n  signUpDone: false,\n  signUpError: null,\n  changeNicknameLoading: false,\n  // 닉네임 변경 시도중\n  changeNicknameDone: false,\n  changeNicknameError: null,\n  me: null,\n  signUpData: {},\n  LoginData: {}\n};\nvar LOG_IN_REQUEST = \"LOG_IN_REQUEST\";\nvar LOG_IN_SUCCESS = \"LOG_IN_SUCCESS\";\nvar LOG_IN_FAILURE = \"LOG_IN_FAILURE\";\nvar LOG_OUT_REQUEST = \"LOG_OUT_REQUEST\";\nvar LOG_OUT_SUCCESS = \"LOG_OUT_SUCCESS\";\nvar LOG_OUT_FAILURE = \"LOG_OUT_FAILURE\";\nvar SIGN_UP_REQUEST = \"SIGN_UP_REQUEST\";\nvar SIGN_UP_SUCCESS = \"SIGN_UP_SUCCESS\";\nvar SIGN_UP_FAILURE = \"SIGN_UP_FAILURE\";\nvar CHANGE_NICKNAME_REQUEST = \"CHANGE_NICKNAME_REQUEST\";\nvar CHANGE_NICKNAME_SUCCESS = \"CHANGE_NICKNAME_SUCCESS\";\nvar CHANGE_NICKNAME_FAILURE = \"CHANGE_NICKNAME_FAILURE\";\nvar FOLLOW_REQUEST = \"FOLLOW_REQUEST\";\nvar FOLLOW_SUCCESS = \"FOLLOW_SUCCESS\";\nvar FOLLOW_FAILURE = \"FOLLOW_FAILURE\";\nvar UNFOLLOW_REQUEST = \"UNFOLLOW_REQUEST\";\nvar UNFOLLOW_SUCCESS = \"UNFOLLOW_SUCCESS\";\nvar UNFOLLOW_FAILURE = \"UNFOLLOW_FAILURE\";\n\n//함수\nvar dummyUser = function dummyUser(data) {\n  return _objectSpread(_objectSpread({}, data), {}, {\n    nickname: \"hyeon cheol lee\",\n    id: 1,\n    Posts: [],\n    Followings: [],\n    Followers: []\n  });\n};\nvar loginRequestAction = function loginRequestAction(data) {\n  return {\n    type: LOG_IN_REQUEST,\n    data: data\n  };\n};\nvar logoutRequestAction = function logoutRequestAction(data) {\n  return {\n    type: LOG_OUT_REQUEST\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialValue;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case LOG_IN_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: true,\n        logInError: null,\n        logInDone: false\n      });\n    case LOG_IN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: false,\n        logInDone: true,\n        me: dummyUser(action.data) //더미데이터\n      });\n\n    case LOG_IN_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: false,\n        logInError: action.error\n      });\n    case LOG_OUT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logOutLoading: true,\n        //로그아웃 시도중\n        logOutDone: false,\n        logOutError: null\n      });\n    case LOG_OUT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logOutLoading: false,\n        //로그아웃 시도중\n        logOutDone: true,\n        me: null\n      });\n    case LOG_OUT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logOutLoading: false,\n        //로그아웃 시도중\n        logOutError: action.error\n      });\n    case SIGN_UP_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        signUpLoading: true,\n        //로그아웃 시도중\n        signUpDone: false,\n        signUpError: null\n      });\n    case SIGN_UP_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        signUpLoading: false,\n        //로그아웃 시도중\n        signUpDone: true\n      });\n    case SIGN_UP_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        signUpLoading: false,\n        //로그아웃 시도중\n        signUpError: action.error\n      });\n    case CHANGE_NICKNAME_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        changeNicknameLoading: true,\n        //로그아웃 시도중\n        changeNicknameDone: false,\n        changeNicknameError: null\n      });\n    case CHANGE_NICKNAME_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        changeNicknameLoading: false,\n        //로그아웃 시도중\n        changeNicknameDone: true\n      });\n    case CHANGE_NICKNAME_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        changeNicknameLoading: false,\n        //로그아웃 시도중\n        changeNicknameError: action.error\n      });\n    default:\n      return state;\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxWYWx1ZSIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJMb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJkdW1teVVzZXIiLCJkYXRhIiwiX29iamVjdFNwcmVhZCIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0VBQ3hCQyxZQUFZLEVBQUUsS0FBSztFQUFFO0VBQ3JCQyxTQUFTLEVBQUUsS0FBSztFQUNoQkMsVUFBVSxFQUFFLElBQUk7RUFFaEJDLGFBQWEsRUFBRSxLQUFLO0VBQUU7RUFDdEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxXQUFXLEVBQUUsSUFBSTtFQUVqQkMsYUFBYSxFQUFFLEtBQUs7RUFBRTtFQUN0QkMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLFdBQVcsRUFBRSxJQUFJO0VBRWpCQyxxQkFBcUIsRUFBRSxLQUFLO0VBQUU7RUFDOUJDLGtCQUFrQixFQUFFLEtBQUs7RUFDekJDLG1CQUFtQixFQUFFLElBQUk7RUFFekJDLEVBQUUsRUFBRSxJQUFJO0VBQ1JDLFVBQVUsRUFBRSxDQUFDLENBQUM7RUFDZEMsU0FBUyxFQUFFLENBQUM7QUFDaEIsQ0FBQztBQUVNLElBQU1DLGNBQWMsR0FBRyxnQkFBZ0I7QUFDdkMsSUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxJQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBRXZDLElBQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFDekMsSUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxJQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBRXpDLElBQU1DLGVBQWUsR0FBRyxpQkFBaUI7QUFDekMsSUFBTUMsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxJQUFNQyxlQUFlLEdBQUcsaUJBQWlCO0FBRXpDLElBQU1DLHVCQUF1QixHQUFHLHlCQUF5QjtBQUN6RCxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBeUI7QUFDekQsSUFBTUMsdUJBQXVCLEdBQUcseUJBQXlCO0FBRXpELElBQU1DLGNBQWMsR0FBRyxnQkFBZ0I7QUFDdkMsSUFBTUMsY0FBYyxHQUFHLGdCQUFnQjtBQUN2QyxJQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBRXZDLElBQU1DLGdCQUFnQixHQUFHLGtCQUFrQjtBQUMzQyxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBa0I7QUFDM0MsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQWtCOztBQUVsRDtBQUNBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJQyxJQUFJO0VBQUEsT0FBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ2hCRCxJQUFJO0lBQ1BFLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0JDLEVBQUUsRUFBRSxDQUFDO0lBQ0xDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLFNBQVMsRUFBRTtFQUFFO0FBQUEsQ0FDZjtBQUVLLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlQLElBQUksRUFBSztFQUN4QyxPQUFPO0lBQ0hRLElBQUksRUFBRTNCLGNBQWM7SUFDcEJtQixJQUFJLEVBQUpBO0VBQ0osQ0FBQztBQUNMLENBQUM7QUFFTSxJQUFNUyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJVCxJQUFJLEVBQUs7RUFDekMsT0FBTztJQUNIUSxJQUFJLEVBQUV4QjtFQUNWLENBQUM7QUFDTCxDQUFDO0FBRWMsMkVBQWtDO0VBQUEsSUFBakMwQixLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHOUMsWUFBWTtFQUFBLElBQUVpRCxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDeEMsUUFBUUMsTUFBTSxDQUFDTixJQUFJO0lBQ2YsS0FBSzNCLGNBQWM7TUFDZixPQUFBb0IsYUFBQSxDQUFBQSxhQUFBLEtBQ09TLEtBQUs7UUFDUjVDLFlBQVksRUFBRSxJQUFJO1FBQ2xCRSxVQUFVLEVBQUUsSUFBSTtRQUNoQkQsU0FBUyxFQUFFO01BQUs7SUFFeEIsS0FBS2UsY0FBYztNQUNmLE9BQUFtQixhQUFBLENBQUFBLGFBQUEsS0FDT1MsS0FBSztRQUNSNUMsWUFBWSxFQUFFLEtBQUs7UUFDbkJDLFNBQVMsRUFBRSxJQUFJO1FBQ2ZXLEVBQUUsRUFBRXFCLFNBQVMsQ0FBQ2UsTUFBTSxDQUFDZCxJQUFJLENBQUMsQ0FBRTtNQUFBOztJQUVwQyxLQUFLakIsY0FBYztNQUNmLE9BQUFrQixhQUFBLENBQUFBLGFBQUEsS0FDT1MsS0FBSztRQUNSNUMsWUFBWSxFQUFFLEtBQUs7UUFDbkJFLFVBQVUsRUFBRThDLE1BQU0sQ0FBQ0M7TUFBSztJQUdoQyxLQUFLL0IsZUFBZTtNQUNoQixPQUFBaUIsYUFBQSxDQUFBQSxhQUFBLEtBQ09TLEtBQUs7UUFDUnpDLGFBQWEsRUFBRSxJQUFJO1FBQUU7UUFDckJDLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxXQUFXLEVBQUU7TUFBSTtJQUV6QixLQUFLYyxlQUFlO01BQ2hCLE9BQUFnQixhQUFBLENBQUFBLGFBQUEsS0FDT1MsS0FBSztRQUNSekMsYUFBYSxFQUFFLEtBQUs7UUFBRTtRQUN0QkMsVUFBVSxFQUFFLElBQUk7UUFDaEJRLEVBQUUsRUFBRTtNQUFJO0lBRWhCLEtBQUtRLGVBQWU7TUFDaEIsT0FBQWUsYUFBQSxDQUFBQSxhQUFBLEtBQ09TLEtBQUs7UUFDUnpDLGFBQWEsRUFBRSxLQUFLO1FBQUU7UUFDdEJFLFdBQVcsRUFBRTJDLE1BQU0sQ0FBQ0M7TUFBSztJQUdqQyxLQUFLNUIsZUFBZTtNQUNoQixPQUFBYyxhQUFBLENBQUFBLGFBQUEsS0FDT1MsS0FBSztRQUNSdEMsYUFBYSxFQUFFLElBQUk7UUFBRTtRQUNyQkMsVUFBVSxFQUFFLEtBQUs7UUFDakJDLFdBQVcsRUFBRTtNQUFJO0lBRXpCLEtBQUtjLGVBQWU7TUFDaEIsT0FBQWEsYUFBQSxDQUFBQSxhQUFBLEtBQ09TLEtBQUs7UUFDUnRDLGFBQWEsRUFBRSxLQUFLO1FBQUU7UUFDdEJDLFVBQVUsRUFBRTtNQUFJO0lBRXhCLEtBQUtnQixlQUFlO01BQ2hCLE9BQUFZLGFBQUEsQ0FBQUEsYUFBQSxLQUNPUyxLQUFLO1FBQ1J0QyxhQUFhLEVBQUUsS0FBSztRQUFFO1FBQ3RCRSxXQUFXLEVBQUV3QyxNQUFNLENBQUNDO01BQUs7SUFFakMsS0FBS3pCLHVCQUF1QjtNQUN4QixPQUFBVyxhQUFBLENBQUFBLGFBQUEsS0FDT1MsS0FBSztRQUNSbkMscUJBQXFCLEVBQUUsSUFBSTtRQUFFO1FBQzdCQyxrQkFBa0IsRUFBRSxLQUFLO1FBQ3pCQyxtQkFBbUIsRUFBRTtNQUFJO0lBRWpDLEtBQUtjLHVCQUF1QjtNQUN4QixPQUFBVSxhQUFBLENBQUFBLGFBQUEsS0FDT1MsS0FBSztRQUNSbkMscUJBQXFCLEVBQUUsS0FBSztRQUFFO1FBQzlCQyxrQkFBa0IsRUFBRTtNQUFJO0lBRWhDLEtBQUtnQix1QkFBdUI7TUFDeEIsT0FBQVMsYUFBQSxDQUFBQSxhQUFBLEtBQ09TLEtBQUs7UUFDUm5DLHFCQUFxQixFQUFFLEtBQUs7UUFBRTtRQUM5QkUsbUJBQW1CLEVBQUVxQyxNQUFNLENBQUNDO01BQUs7SUFFekM7TUFDSSxPQUFPTCxLQUFLO0VBQ3BCO0FBQ0osQ0FBQyIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFZhbHVlID0ge1xuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsIC8v66Gc6re47J24IOyLnOuPhOykkVxuICAgIGxvZ0luRG9uZTogZmFsc2UsXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcblxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcblxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvL+2ajOybkOqwgOyehSDsi5zrj4TspJFcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcblxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxuXG4gICAgbWU6IG51bGwsXG4gICAgc2lnblVwRGF0YToge30sXG4gICAgTG9naW5EYXRhOiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XG5cbi8v7ZWo7IiYXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcbiAgICAuLi5kYXRhLFxuICAgIG5pY2tuYW1lOiBcImh5ZW9uIGNoZW9sIGxlZVwiLFxuICAgIGlkOiAxLFxuICAgIFBvc3RzOiBbXSxcbiAgICBGb2xsb3dpbmdzOiBbXSxcbiAgICBGb2xsb3dlcnM6IFtdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxuICAgICAgICBkYXRhLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsVmFsdWUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9nSW5Mb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvZ0luRXJyb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9nSW5Eb25lOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9nSW5Eb25lOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLCAvL+uNlOuvuOuNsOydtO2EsFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2dJbkVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2dPdXRMb2FkaW5nOiB0cnVlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgICAgICAgICAgICAgICBsb2dPdXREb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2dPdXRFcnJvcjogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXG4gICAgICAgICAgICAgICAgbG9nT3V0RG9uZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jslYTsm4Mg7Iuc64+E7KSRXG4gICAgICAgICAgICAgICAgbG9nT3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNpZ25VcExvYWRpbmc6IHRydWUsIC8v66Gc6re47JWE7JuDIOyLnOuPhOykkVxuICAgICAgICAgICAgICAgIHNpZ25VcERvbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgICAgICAgICAgICAgICBzaWduVXBEb25lOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgICAgICAgICAgICAgICBzaWduVXBFcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiB0cnVlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})