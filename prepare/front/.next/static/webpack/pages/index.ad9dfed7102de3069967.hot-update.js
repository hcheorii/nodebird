webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialValue, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialValue\", function() { return initialValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n\nvar initialValue = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"이현철\"\n    },\n    content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n    Images: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"https://cdn.newswatch.kr/news/photo/202210/60598_55659_5929.png\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"https://cdn.newswatch.kr/news/photo/202210/60598_55659_5929.png\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      src: \"https://cdn.newswatch.kr/news/photo/202210/60598_55659_5929.png\"\n    }],\n    Comments: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n        nickname: \"nero\"\n      },\n      content: \"우와 개정판이 나왔군요~\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n        nickname: \"hero\"\n      },\n      content: \"얼른 사고싶어요~\"\n    }]\n  }],\n  //이미지업로드 할떄 이미지경로들이 여기 들어간다.\n  imagePaths: [],\n  //게시글 추가가 완료되었을때 TRue\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  removePostLoading: false,\n  removePostDone: false,\n  removePostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n};\n//가짜 데이터\n\nvar ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nvar ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nvar ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nvar REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nvar REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nvar REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nvar ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nvar ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nvar ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: data.id,\n    content: data.content,\n    User: {\n      id: 1,\n      nickname: \"이현철\"\n    },\n    Images: [],\n    Comments: []\n  };\n};\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: \"이현철\"\n    }\n  };\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialValue;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    //게시글 추가\n    case ADD_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        addPostLoading: false,\n        addPostDone: true\n      });\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: false,\n        addPostError: action.error\n      });\n\n    //댓글 추가\n    case ADD_COMMENT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentDone: false,\n        addCommentError: null\n      });\n    case ADD_COMMENT_SUCCESS:\n      var postIndex = state.mainPosts.findIndex(function (v) {\n        return v.id === action.data.postId;\n      });\n      var post = _objectSpread({}, state.mainPosts[postIndex]);\n      post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments)); //얕은 복사\n\n      var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n      mainPosts[postIndex] = post; //댓글 추가하는 부분 너무어려움..\n      //불변성을 지키다 보니 가독성이 너무 안좋음\n      //\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: mainPosts,\n        addCommentLoading: false,\n        addCommentDone: true\n      });\n    case ADD_COMMENT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: false,\n        addCommentError: action.error\n      });\n\n    //게시글 삭제\n    case REMOVE_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        removePostLoading: true,\n        removePostDone: false,\n        removePostError: null\n      });\n    case REMOVE_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: state.mainPosts.filter(function (v) {\n          return v.id !== action.data;\n        }),\n        removePostLoading: false,\n        removePostDone: true\n      });\n    case REMOVE_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        removePostLoading: false,\n        removePostError: action.error\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxWYWx1ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJfb2JqZWN0U3ByZWFkIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZXJyb3IiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwicG9zdElkIiwicG9zdCIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRXZCLElBQU1BLFlBQVksR0FBRztFQUN4QkMsU0FBUyxFQUFFLENBQ1A7SUFDSUMsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFO01BQ0ZELEVB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LFNBQVMsRUFBRW9DLEtBQUssQ0FBQ3BDLFNBQVMsQ0FBQ2tELE1BQU0sQ0FBQyxVQUFDSCxDQUFDO1VBQUEsT0FBS0EsQ0FBQyxDQUFDOUMsRUFBRSxLQUFLdUMsTUFBTSxDQUFDVixJQUFJO1FBQUEsRUFBQztRQUM5RGhCLGlCQUFpQixFQUFFLEtBQUs7UUFDeEJDLGNBQWMsRUFBRTtNQUFJO0lBRTVCLEtBQUtVLG1CQUFtQjtNQUNwQixPQUFBZ0IsYUFBQSxDQUFBQSxhQUFBLEtBQ09MLEtBQUs7UUFDUnRCLGlCQUFpQixFQUFFLEtBQUs7UUFDeEJFLGVBQWUsRUFBRXdCLE1BQU0sQ0FBQ0k7TUFBSztJQUVyQztNQUNJLE9BQU9SLEtBQUs7RUFDcEI7QUFDSixDQUFDO0FBRWNELHNFQUFPLEVBQUMiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxWYWx1ZSA9IHtcbiAgICBtYWluUG9zdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgbmlja25hbWU6IFwi7J207ZiE7LKgXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqRcIixcbiAgICAgICAgICAgIEltYWdlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLm5ld3N3YXRjaC5rci9uZXdzL3Bob3RvLzIwMjIxMC82MDU5OF81NTY1OV81OTI5LnBuZ1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4ubmV3c3dhdGNoLmtyL25ld3MvcGhvdG8vMjAyMjEwLzYwNTk4XzU1NjU5XzU5MjkucG5nXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL2Nkbi5uZXdzd2F0Y2gua3IvbmV3cy9waG90by8yMDIyMTAvNjA1OThfNTU2NTlfNTkyOS5wbmdcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIENvbW1lbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IFwibmVyb1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuyasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUflwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IFwiaGVyb1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuyWvOuluCDsgqzqs6Dsi7bslrTsmpR+XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICAvL+ydtOuvuOyngOyXheuhnOuTnCDtlaDrloQg7J2066+47KeA6rK966Gc65Ok7J20IOyXrOq4sCDrk6TslrTqsITri6QuXG4gICAgaW1hZ2VQYXRoczogW10sXG4gICAgLy/qsozsi5zquIAg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCBUUnVlXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXG5cbiAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcblxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxufTtcbi8v6rCA7KecIOuNsOydtO2EsFxuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXG4gICAgZGF0YSxcbn0pO1xuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxuICAgIGRhdGEsXG59KTtcblxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XG4gICAgaWQ6IGRhdGEuaWQsXG4gICAgY29udGVudDogZGF0YS5jb250ZW50LFxuICAgIFVzZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5pY2tuYW1lOiBcIuydtO2YhOyyoFwiLFxuICAgIH0sXG4gICAgSW1hZ2VzOiBbXSxcbiAgICBDb21tZW50czogW10sXG59KTtcblxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICBjb250ZW50OiBkYXRhLFxuICAgIFVzZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5pY2tuYW1lOiBcIuydtO2YhOyyoFwiLFxuICAgIH0sXG59KTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxWYWx1ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAvL+qyjOyLnOq4gCDstpTqsIBcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOiBudWxsLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIC8v64yT6riAIOy2lOqwgFxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XG5cbiAgICAgICAgICAgIHBvc3QuQ29tbWVudHMgPSBbXG4gICAgICAgICAgICAgICAgZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLFxuICAgICAgICAgICAgICAgIC4uLnBvc3QuQ29tbWVudHMsXG4gICAgICAgICAgICBdOyAvL+yWleydgCDrs7XsgqxcblxuICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XG4gICAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7IC8v64yT6riAIOy2lOqwgO2VmOuKlCDrtoDrtoQg64SI66y07Ja066Ck7JuALi5cbiAgICAgICAgICAgIC8v67aI67OA7ISx7J2EIOyngO2CpOuLpCDrs7Tri4gg6rCA64+F7ISx7J20IOuEiOustCDslYjsoovsnYxcbiAgICAgICAgICAgIC8vXG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzLFxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAvL+qyjOyLnOq4gCDsgq3soJxcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})