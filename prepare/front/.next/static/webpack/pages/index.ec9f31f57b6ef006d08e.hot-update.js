webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialValue, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialValue\", function() { return initialValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n\nvar initialValue = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"이현철\"\n    },\n    content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n    Images: [{\n      src: \"https://cdn.newswatch.kr/news/photo/202210/60598_55659_5929.png\"\n    }, {\n      src: \"https://cdn.newswatch.kr/news/photo/202210/60598_55659_5929.png\"\n    }, {\n      src: \"https://cdn.newswatch.kr/news/photo/202210/60598_55659_5929.png\"\n    }],\n    Comments: [{\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n        nickname: \"nero\"\n      },\n      content: \"우와 개정판이 나왔군요~\"\n    }, {\n      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n      User: {\n        nickname: \"hero\"\n      },\n      content: \"얼른 사고싶어요~\"\n    }]\n  }],\n  //이미지업로드 할떄 이미지경로들이 여기 들어간다.\n  imagePaths: [],\n  //게시글 추가가 완료되었을때 TRue\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n};\n//가짜 데이터\n\nvar ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nvar ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nvar ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nvar ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nvar ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nvar ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    //더미데이터여도 계속 같은 값이 들어가면 안되니까 랜덤으로 생성.\n    content: data,\n    User: {\n      id: 1,\n      nickname: \"이현철\"\n    },\n    Images: [],\n    Comments: []\n  };\n};\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: \"이현철\"\n    }\n  };\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialValue;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    //게시글 추가\n    case ADD_POST_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: true,\n        addPostDone: false,\n        addPostError: null\n      });\n    case ADD_POST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        addPostLoading: false,\n        addPostDone: true\n      });\n    case ADD_POST_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addPostLoading: false,\n        addPostError: action.error\n      });\n\n    //댓글 추가\n    case ADD_COMMENT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: true,\n        addCommentDone: false,\n        addCommentError: null\n      });\n    case ADD_COMMENT_SUCCESS:\n      var postIndex = state.mainPosts.findIndex(function (v) {\n        return v.id === action.data.postId;\n      });\n      var post = _objectSpread({}, state.mainPosts[postIndex]);\n      post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(post.Comments)); //얕은 복사\n\n      var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts);\n      mainPosts[postIndex] = post; //댓글 추가하는 부분 너무어려움..\n      //불변성을 지키다 보니 가독성이 너무 안좋음\n      //\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: mainPosts,\n        addCommentLoading: false,\n        addCommentDone: true\n      });\n    case ADD_COMMENT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addCommentLoading: false,\n        addCommentError: action.error\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxWYWx1ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsIl9vYmplY3RTcHJlYWQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFdkIsSUFBTUEsWUFBWSxHQUFHO0VBQ3hCQyxTQUFTLEVBQUUsQ0FDUDtJQUNJQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxJQUFJLEVBQUU7TUFDRkQsRUFBRSxFQUFFLENBQUM7TUFDTEUsUUFBUSxFQUFFO0lBQ2QsQ0FBQztJQUNEQyxPQUFPLEVBQUUsdUJBQXVCO0lBQ2hDQyxNQUFNLEVBQUUsQ0FDSjtNQUNJQyxHQUFHLEVBQUU7SUFDVCxDQUFDLEVBQ0Q7TUFDSUEsR0FBRyxFQUFFO0lB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TUFDQTs7TUFFQSxPQUFBUixhQUFBLENBQUFBLGFBQUEsS0FDT0wsS0FBSztRQUNSOUIsU0FBUyxFQUFUQSxTQUFTO1FBQ1RjLGlCQUFpQixFQUFFLEtBQUs7UUFDeEJDLGNBQWMsRUFBRTtNQUFJO0lBRTVCLEtBQUtPLG1CQUFtQjtNQUNwQixPQUFBYSxhQUFBLENBQUFBLGFBQUEsS0FDT0wsS0FBSztRQUNSaEIsaUJBQWlCLEVBQUUsS0FBSztRQUN4QkUsZUFBZSxFQUFFa0IsTUFBTSxDQUFDSTtNQUFLO0lBRXJDO01BQ0ksT0FBT1IsS0FBSztFQUNwQjtBQUNKLENBQUM7QUFFY0Qsc0VBQU8sRUFBQyIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFZhbHVlID0ge1xuICAgIG1haW5Qb3N0czogW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCLsnbTtmITssqBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpFwiLFxuICAgICAgICAgICAgSW1hZ2VzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4ubmV3c3dhdGNoLmtyL25ld3MvcGhvdG8vMjAyMjEwLzYwNTk4XzU1NjU5XzU5MjkucG5nXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL2Nkbi5uZXdzd2F0Y2gua3IvbmV3cy9waG90by8yMDIyMTAvNjA1OThfNTU2NTlfNTkyOS5wbmdcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLm5ld3N3YXRjaC5rci9uZXdzL3Bob3RvLzIwMjIxMC82MDU5OF81NTY1OV81OTI5LnBuZ1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH5cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IFwiaGVyb1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuyWvOuluCDsgqzqs6Dsi7bslrTsmpR+XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICAvL+ydtOuvuOyngOyXheuhnOuTnCDtlaDrloQg7J2066+47KeA6rK966Gc65Ok7J20IOyXrOq4sCDrk6TslrTqsITri6QuXG4gICAgaW1hZ2VQYXRoczogW10sXG4gICAgLy/qsozsi5zquIAg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjCBUUnVlXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXG5cbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcbn07XG4vL+qwgOynnCDrjbDsnbTthLBcblxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcbiAgICBkYXRhLFxufSk7XG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gICAgZGF0YSxcbn0pO1xuXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLCAvL+uNlOuvuOuNsOydtO2EsOyXrOuPhCDqs4Tsho0g6rCZ7J2AIOqwkuydtCDrk6TslrTqsIDrqbQg7JWI65CY64uI6rmMIOuenOuNpOycvOuhnCDsg53shLEuXG4gICAgY29udGVudDogZGF0YSxcbiAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogXCLsnbTtmITssqBcIixcbiAgICB9LFxuICAgIEltYWdlczogW10sXG4gICAgQ29tbWVudHM6IFtdLFxufSk7XG5cbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgY29udGVudDogZGF0YSxcbiAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogXCLsnbTtmITssqBcIixcbiAgICB9LFxufSk7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsVmFsdWUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgLy/qsozsi5zquIAg7LaU6rCAXG4gICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAvL+uMk+q4gCDstpTqsIBcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XG4gICAgICAgICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgICh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xuXG4gICAgICAgICAgICBwb3N0LkNvbW1lbnRzID0gW1xuICAgICAgICAgICAgICAgIGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSxcbiAgICAgICAgICAgICAgICAuLi5wb3N0LkNvbW1lbnRzLFxuICAgICAgICAgICAgXTsgLy/slpXsnYAg67O17IKsXG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xuICAgICAgICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0OyAvL+uMk+q4gCDstpTqsIDtlZjripQg67aA67aEIOuEiOustOyWtOugpOybgC4uXG4gICAgICAgICAgICAvL+u2iOuzgOyEseydhCDsp4DtgqTri6Qg67O064uIIOqwgOuPheyEseydtCDrhIjrrLQg7JWI7KKL7J2MXG4gICAgICAgICAgICAvL1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1haW5Qb3N0cyxcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})