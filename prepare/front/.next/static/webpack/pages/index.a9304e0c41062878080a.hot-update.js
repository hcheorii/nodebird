webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/ihyeoncheol/Desktop/nodebird_project/prepare/front/components/FollowButton.js\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar FollowButton = function FollowButton(_ref) {\n  _s();\n  var post = _ref.post;\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n      return state.user;\n    }),\n    me = _useSelector.me,\n    followLoading = _useSelector.followLoading,\n    unFollowLoading = _useSelector.unFollowLoading;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {\n    return v.id === post.User.id;\n  });\n  //이미 팔로우를 하고 있는지.\n  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    if (isFollowing) {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"UNFOLLOW_REQUEST\"],\n        data: post.User.id //이 게시물을 쓴 사람의 정보\n      });\n    } else {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"FOLLOW_REQUEST\"],\n        data: post.User.id //이 게시물을 쓴 사람의 정보\n      });\n    }\n  }, [isFollowing]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    loading: followLoading || unFollowLoading,\n    onClick: onClickButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, isFollowing ? \"언팔로우\" : \"팔로우\");\n};\n_s(FollowButton, \"8YKfLjNofkkOUb0ZhVLoOYAaK4o=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n_c = FollowButton;\nFollowButton.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowButton);\nvar _c;\n$RefreshReg$(_c, \"FollowButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanM/YmQ0ZiJdLCJuYW1lcyI6WyJGb2xsb3dCdXR0b24iLCJfcmVmIiwiX3MiLCJwb3N0IiwiX3VzZVNlbGVjdG9yIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0xvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJvbkNsaWNrQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsImRhdGEiLCJGT0xMT1dfUkVRVUVTVCIsIl9fanN4IiwiQnV0dG9uIiwibG9hZGluZyIsIm9uQ2xpY2siLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX2MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkM7QUFDYjtBQUNLO0FBQ29CO0FBQ2E7QUFDcEUsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUFDLElBQUEsRUFBaUI7RUFBQUMsRUFBQTtFQUFBLElBQVhDLElBQUksR0FBQUYsSUFBQSxDQUFKRSxJQUFJO0VBQ3hCLElBQUFDLFlBQUEsR0FBK0NDLCtEQUFXLENBQ3RELFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxDQUN6QixDQUFDO0lBRk9DLEVBQUUsR0FBQUosWUFBQSxDQUFGSSxFQUFFO0lBQUVDLGFBQWEsR0FBQUwsWUFBQSxDQUFiSyxhQUFhO0lBQUVDLGVBQWUsR0FBQU4sWUFBQSxDQUFmTSxlQUFlO0VBRzFDLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxDQUFDO0VBRTlCLElBQU1DLFdBQVcsR0FBR0wsRUFBRSxhQUFGQSxFQUFFLHVCQUFGQSxFQUFFLENBQUVNLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLENBQUM7SUFBQSxPQUFLQSxDQUFDLENBQUNDLEVBQUUsS0FBS2QsSUFBSSxDQUFDZSxJQUFJLENBQUNELEVBQUU7RUFBQSxFQUFDO0VBQ3JFO0VBQ0EsSUFBTUUsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDcEMsSUFBSVAsV0FBVyxFQUFFO01BQ2JGLFFBQVEsQ0FBQztRQUNMVSxJQUFJLEVBQUVDLCtEQUFnQjtRQUN0QkMsSUFBSSxFQUFFcEIsSUFBSSxDQUFDZSxJQUFJLENBQUNELEVBQUUsQ0FBRTtNQUN4QixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU07TUFDSE4sUUFBUSxDQUFDO1FBQ0xVLElBQUksRUFBRUcsNkRBQWM7UUFDcEJELElBQUksRUFBRXBCLElBQUksQ0FBQ2UsSUFBSSxDQUFDRCxFQUFFLENBQUU7TUFDeEIsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDLEVBQUUsQ0FBQ0osV0FBVyxDQUFDLENBQUM7RUFDakIsT0FDSVksS0FBQSxDQUFDQywyQ0FBTTtJQUNIQyxPQUFPLEVBQUVsQixhQUFhLElBQUlDLGVBQWdCO0lBQzFDa0IsT0FBTyxFQUFFVCxhQUFjO0lBQUFVLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRXRCdEIsV0FBVyxHQUFHLE1BQU0sR0FBRyxLQUNwQixDQUFDO0FBRWpCLENBQUM7QUFBQ1gsRUFBQSxDQTdCSUYsWUFBWTtFQUFBLFFBQ2lDSyx1REFBVyxFQUd6Q08sdURBQVc7QUFBQTtBQUFBd0IsRUFBQSxHQUoxQnBDLFlBQVk7QUErQmxCQSxZQUFZLENBQUNxQyxTQUFTLEdBQUc7RUFDckJsQyxJQUFJLEVBQUVtQyxpREFBUyxDQUFDQyxNQUFNLENBQUNDO0FBQzNCLENBQUM7QUFDY3hDLDJFQUFZLEVBQUM7QUFBQSxJQUFBb0MsRUFBQTtBQUFBSyxZQUFBLENBQUFMLEVBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0J1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuY29uc3QgRm9sbG93QnV0dG9uID0gKHsgcG9zdCB9KSA9PiB7XG4gICAgY29uc3QgeyBtZSwgZm9sbG93TG9hZGluZywgdW5Gb2xsb3dMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihcbiAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS51c2VyXG4gICAgKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XG4gICAgLy/snbTrr7gg7YyU66Gc7Jqw66W8IO2VmOqzoCDsnojripTsp4AuXG4gICAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKGlzRm9sbG93aW5nKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsIC8v7J20IOqyjOyLnOusvOydhCDsk7Qg7IKs656M7J2YIOygleuztFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLCAvL+ydtCDqsozsi5zrrLzsnYQg7JO0IOyCrOuejOydmCDsoJXrs7RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW2lzRm9sbG93aW5nXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgbG9hZGluZz17Zm9sbG93TG9hZGluZyB8fCB1bkZvbGxvd0xvYWRpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufVxuICAgICAgICA+XG4gICAgICAgICAgICB7aXNGb2xsb3dpbmcgPyBcIuyWuO2MlOuhnOyasFwiIDogXCLtjJTroZzsmrBcIn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgKTtcbn07XG5cbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XG4gICAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FollowButton.js\n");

/***/ })

})