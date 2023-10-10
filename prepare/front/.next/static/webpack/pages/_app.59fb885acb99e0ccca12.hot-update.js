webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialValue, generateDummyPost, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialValue\", function() { return initialValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateDummyPost\", function() { return generateDummyPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.legacy-esm.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar initialValue = {\n  mainPosts: [],\n  //이미지업로드 할떄 이미지경로들이 여기 들어간다.\n  imagePaths: [],\n  //게시글 추가가 완료되었을때 TRue\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  removePostLoading: false,\n  removePostDone: false,\n  removePostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n};\n//가짜 데이터\n\nvar generateDummyPost = function generateDummyPost(number) {\n  Array(number).fill().map(function () {\n    return {\n      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()\n      },\n      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),\n      //아무 문장,\n      Images: [{\n        src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.imageUrl()\n      }],\n      Comments: [{\n        User: {\n          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n          nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()\n        },\n        content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()\n      }]\n    };\n  });\n};\n\n//concat은 두개 이상의 배열을 합칠 때 사용\ninitialValue.mainPosts = initialValue.mainPosts.concat(generateDummyPost());\nvar ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nvar ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nvar ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nvar REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nvar REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nvar REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nvar ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nvar ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nvar ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: data.id,\n    content: data.content,\n    User: {\n      id: 1,\n      nickname: \"이현철\"\n    },\n    Images: [],\n    Comments: []\n  };\n};\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: \"이현철\"\n    }\n  };\n};\n//리듀서란 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(단, 불변성은 지키면서)\n//draft는 불변성 상관없이 바꾸면 immer가 알아서 불변성있게 만들어준다.\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialValue;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  return Object(immer__WEBPACK_IMPORTED_MODULE_1__[\"produce\"])(state, function (draft) {\n    switch (action.type) {\n      //게시글 추가\n      case ADD_POST_REQUEST:\n        draft.addPostLoading = true;\n        draft.addPostDone = false;\n        draft.addPostError = null;\n        break;\n      case ADD_POST_SUCCESS:\n        draft.addPostLoading = false;\n        draft.addPostDone = true;\n        draft.mainPosts.unshift(dummyPost(action.data));\n        //unshift란 배열의 맨 앞에다가 추가하는 함수\n        break;\n      case ADD_POST_FAILURE:\n        draft.addPostLoading = false;\n        draft.addPostError = action.error;\n        break;\n\n      //댓글 추가\n      case ADD_COMMENT_REQUEST:\n        draft.addCommentLoading = true;\n        draft.addCommentDone = false;\n        draft.addCommentError = null;\n        break;\n      case ADD_COMMENT_SUCCESS:\n        //immer버전 (너무 간단함)\n        var post = draft.mainPosts.find(function (v) {\n          return v.id === action.data.postId;\n        }); //해당 게시글 찾기\n        post.Comments.unshift(dummyComment(action.data.content));\n        draft.addCommentLoading = false;\n        draft.addCommentDone = true;\n        //댓글 넣어주기\n        break;\n\n      //immer를 안 쓴 부분\n      // const postIndex = state.mainPosts.findIndex(\n      //     (v) => v.id === action.data.postId\n      // );\n      // const post = { ...state.mainPosts[postIndex] };\n\n      // post.Comments = [\n      //     dummyComment(action.data.content),\n      //     ...post.Comments,\n      // ]; //얕은 복사\n\n      // const mainPosts = [...state.mainPosts];\n      // mainPosts[postIndex] = post; //댓글 추가하는 부분 너무어려움..\n      // //불변성을 지키다 보니 가독성이 너무 안좋음\n\n      // return {\n      //     ...state,\n      //     mainPosts,\n      //     addCommentLoading: false,\n      //     addCommentDone: true,\n      // };\n      case ADD_COMMENT_FAILURE:\n        draft.addCommentLoading = false;\n        draft.addCommentError = action.error;\n        break;\n\n      //게시글 삭제\n      case REMOVE_POST_REQUEST:\n        draft.removePostDone = false;\n        draft.removePostLoading = true;\n        draft.removePostError = null;\n        break;\n      case REMOVE_POST_SUCCESS:\n        draft.removePostLoading = false;\n        draft.removePostDone = true;\n        draft.mainPosts = draft.mainPosts.filter(function (v) {\n          return v.id !== action.data;\n        });\n        break;\n      case REMOVE_POST_FAILURE:\n        draft.removePostLoading = false;\n        draft.removePostError = action.error;\n        break;\n      default:\n        break;\n    }\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxWYWx1ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsImltYWdlVXJsIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsImNvbmNhdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJwb3N0IiwiZmluZCIsInYiLCJwb3N0SWQiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtB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aUJBQWlCLEdBQUcsSUFBSTtRQUM5Qm1ELEtBQUssQ0FBQ2pELGVBQWUsR0FBRyxJQUFJO1FBQzVCO01BRUosS0FBSytCLG1CQUFtQjtRQUNwQmtCLEtBQUssQ0FBQ25ELGlCQUFpQixHQUFHLEtBQUs7UUFDL0JtRCxLQUFLLENBQUNsRCxjQUFjLEdBQUcsSUFBSTtRQUMzQmtELEtBQUssQ0FBQ3hELFNBQVMsR0FBR3dELEtBQUssQ0FBQ3hELFNBQVMsQ0FBQytELE1BQU0sQ0FDcEMsVUFBQ0YsQ0FBQztVQUFBLE9BQUtBLENBQUMsQ0FBQzdDLEVBQUUsS0FBS3NDLE1BQU0sQ0FBQ1YsSUFBSTtRQUFBLENBQy9CLENBQUM7UUFDRDtNQUNKLEtBQUtMLG1CQUFtQjtRQUNwQmlCLEtBQUssQ0FBQ25ELGlCQUFpQixHQUFHLEtBQUs7UUFDL0JtRCxLQUFLLENBQUNqRCxlQUFlLEdBQUcrQyxNQUFNLENBQUNJLEtBQUs7UUFDcEM7TUFDSjtRQUNJO0lBQ1I7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDO0FBRWNULHNFQUFPLEVBQUMiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjtcbmltcG9ydCB7IHByb2R1Y2UgfSBmcm9tIFwiaW1tZXJcIjtcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxWYWx1ZSA9IHtcbiAgICBtYWluUG9zdHM6IFtdLFxuICAgIC8v7J2066+47KeA7JeF66Gc65OcIO2VoOuWhCDsnbTrr7jsp4Dqsr3roZzrk6TsnbQg7Jes6riwIOuTpOyWtOqwhOuLpC5cbiAgICBpbWFnZVBhdGhzOiBbXSxcbiAgICAvL+qyjOyLnOq4gCDstpTqsIDqsIAg7JmE66OM65CY7JeI7J2E65WMIFRSdWVcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcblxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxuXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXG59O1xuLy/qsIDsp5wg642w7J207YSwXG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IHtcbiAgICBBcnJheShudW1iZXIpXG4gICAgICAgIC5maWxsKClcbiAgICAgICAgLm1hcCgoKSA9PiAoe1xuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksIC8v7JWE66y0IOusuOyepSxcbiAgICAgICAgICAgIEltYWdlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSk7XG59O1xuXG4vL2NvbmNhdOydgCDrkZDqsJwg7J207IOB7J2YIOuwsOyXtOydhCDtlansuaAg65WMIOyCrOyaqVxuaW5pdGlhbFZhbHVlLm1haW5Qb3N0cyA9IGluaXRpYWxWYWx1ZS5tYWluUG9zdHMuY29uY2F0KGdlbmVyYXRlRHVtbXlQb3N0KCkpO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxuICAgIGRhdGEsXG59KTtcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgICBkYXRhLFxufSk7XG5cbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xuICAgIGlkOiBkYXRhLmlkLFxuICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcbiAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogXCLsnbTtmITssqBcIixcbiAgICB9LFxuICAgIEltYWdlczogW10sXG4gICAgQ29tbWVudHM6IFtdLFxufSk7XG5cbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gICAgY29udGVudDogZGF0YSxcbiAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogXCLsnbTtmITssqBcIixcbiAgICB9LFxufSk7XG4vL+umrOuTgOyEnOuegCDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOuLqCwg67aI67OA7ISx7J2AIOyngO2CpOuptOyEnClcbi8vZHJhZnTripQg67aI67OA7ISxIOyDgeq0gOyXhuydtCDrsJTqvrjrqbQgaW1tZXLqsIAg7JWM7JWE7IScIOu2iOuzgOyEseyeiOqyjCDrp4zrk6TslrTspIDri6QuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFZhbHVlLCBhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIC8v6rKM7Iuc6riAIOy2lOqwgFxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XG4gICAgICAgICAgICAgICAgLy91bnNoaWZ0656AIOuwsOyXtOydmCDrp6gg7JWe7JeQ64uk6rCAIOy2lOqwgO2VmOuKlCDtlajsiJhcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy/rjJPquIAg7LaU6rCAXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxuICAgICAgICAgICAgICAgIC8vaW1tZXLrsoTsoIQgKOuEiOustCDqsITri6jtlagpXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkXG4gICAgICAgICAgICAgICAgKTsgLy/tlbTri7kg6rKM7Iuc6riAIOywvuq4sFxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8v64yT6riAIOuEo+yWtOyjvOq4sFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvL2ltbWVy66W8IOyViCDsk7Qg67aA67aEXG4gICAgICAgICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KFxuICAgICAgICAgICAgLy8gICAgICh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWRcbiAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xuXG4gICAgICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW1xuICAgICAgICAgICAgLy8gICAgIGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSxcbiAgICAgICAgICAgIC8vICAgICAuLi5wb3N0LkNvbW1lbnRzLFxuICAgICAgICAgICAgLy8gXTsgLy/slpXsnYAg67O17IKsXG5cbiAgICAgICAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xuICAgICAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0OyAvL+uMk+q4gCDstpTqsIDtlZjripQg67aA67aEIOuEiOustOyWtOugpOybgC4uXG4gICAgICAgICAgICAvLyAvL+u2iOuzgOyEseydhCDsp4DtgqTri6Qg67O064uIIOqwgOuPheyEseydtCDrhIjrrLQg7JWI7KKL7J2MXG5cbiAgICAgICAgICAgIC8vIHJldHVybiB7XG4gICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxuICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIC8vICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8v6rKM7Iuc6riAIOyCreygnFxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGFcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})