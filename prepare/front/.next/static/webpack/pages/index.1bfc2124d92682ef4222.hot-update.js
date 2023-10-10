webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ \"./components/PostForm.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/ihyeoncheol/Desktop/nodebird_project/prepare/front/pages/index.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n      return state.user;\n    }),\n    me = _useSelector.me;\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n      return state.post;\n    }),\n    mainPosts = _useSelector2.mainPosts,\n    hasMorePost = _useSelector2.hasMorePost,\n    loadPostsLoading = _useSelector2.loadPostsLoading;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_POSTS_REQUEST\"]\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    function onScroll() {\n      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);\n      if (\n      //만약 스크롤을 끝까지 다 내렸으면\n      window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {\n        if (hasMorePost && !loadPostsLoading) {\n          //로딩중이지 않을때만 딱 한번\n          dispatch({\n            //새로운거 불러와라\n            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_POSTS_REQUEST\"]\n          });\n        }\n      }\n    }\n    window.addEventListener(\"scroll\", onScroll);\n    return function () {\n      window.removeEventListener(\"scroll\", onScroll);\n    };\n  }, [hasMorePost, loadPostsLoading]);\n  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 20\n    }\n  }), mainPosts.map(function (post) {\n    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: post.id,\n      post: post,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    });\n  }));\n};\n_s(Home, \"i/nzWAUQQ+Depgog4i+rt8qcSuw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiX3MiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiX3VzZVNlbGVjdG9yIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsIl91c2VTZWxlY3RvcjIiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdHNMb2FkaW5nIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIm9uU2Nyb2xsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX19qc3giLCJBcHBMYXlvdXQiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiUG9zdEZvcm0iLCJtYXAiLCJQb3N0Q2FyZCIsImtleSIsImlkIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDTztBQUNUO0FBQ0E7QUFDWjtBQUNvQjtBQUV0RCxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFDZixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFBQyxZQUFBLEdBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtJQUFBLEVBQUM7SUFBekNDLEVBQUUsR0FBQUosWUFBQSxDQUFGSSxFQUFFO0VBQ1YsSUFBQUMsYUFBQSxHQUFxREosK0RBQVcsQ0FDNUQsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0ksSUFBSTtJQUFBLENBQ3pCLENBQUM7SUFGT0MsU0FBUyxHQUFBRixhQUFBLENBQVRFLFNBQVM7SUFBRUMsV0FBVyxHQUFBSCxhQUFBLENBQVhHLFdBQVc7SUFBRUMsZ0JBQWdCLEdBQUFKLGFBQUEsQ0FBaEJJLGdCQUFnQjtFQUdoREMsdURBQVMsQ0FBQyxZQUFNO0lBQ1paLFFBQVEsQ0FBQztNQUNMYSxJQUFJLEVBQUVDLGlFQUFrQkE7SUFDNUIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVORix1REFBUyxDQUFDLFlBQU07SUFDWixTQUFTRyxRQUFRQSxDQUFBLEVBQUc7TUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUNQQyxNQUFNLENBQUNDLE9BQU8sRUFDZEMsUUFBUSxDQUFDQyxlQUFlLENBQUNDLFlBQVksRUFDckNGLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDRSxZQUM3QixDQUFDO01BQ0Q7TUFDSTtNQUNBTCxNQUFNLENBQUNDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxlQUFlLENBQUNDLFlBQVksR0FDdERGLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDRSxZQUFZLEdBQUcsR0FBRyxFQUM3QztRQUNFLElBQUliLFdBQVcsSUFBSSxDQUFDQyxnQkFBZ0IsRUFBRTtVQUNsQztVQUNBWCxRQUFRLENBQUM7WUFDTDtZQUNBYSxJQUFJLEVBQUVDLGlFQUFrQkE7VUFDNUIsQ0FBQyxDQUFDO1FBQ047TUFDSjtJQUNKO0lBQ0FJLE1BQU0sQ0FBQ00sZ0JBQWdCLENBQUMsUUFBUSxFQUFFVCxRQUFRLENBQUM7SUFDM0MsT0FBTyxZQUFNO01BQ1RHLE1BQU0sQ0FBQ08sbUJBQW1CLENBQUMsUUFBUSxFQUFFVixRQUFRLENBQUM7SUFDbEQsQ0FBQztFQUNMLENBQUMsRUFBRSxDQUFDTCxXQUFXLEVBQUVDLGdCQUFnQixDQUFDLENBQUM7RUFFbkMsT0FDSWUsS0FBQSxDQUFDQyw2REFBUztJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNMNUIsRUFBRSxJQUFJb0IsS0FBQSxDQUFDUyw0REFBUTtJQUFBUCxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDbEJ6QixTQUFTLENBQUMyQixHQUFHLENBQUMsVUFBQzVCLElBQUk7SUFBQSxPQUNoQmtCLEtBQUEsQ0FBQ1csNERBQVE7TUFBQ0MsR0FBRyxFQUFFOUIsSUFBSSxDQUFDK0IsRUFBRztNQUFDL0IsSUFBSSxFQUFFQSxJQUFLO01BQUFvQixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxDQUFFLENBQUM7RUFBQSxDQUN6QyxDQUNNLENBQUM7QUFFcEIsQ0FBQztBQUFDbkMsRUFBQSxDQS9DSUQsSUFBSTtFQUFBLFFBQ1dHLHVEQUFXLEVBQ2JFLHVEQUFXLEVBQzJCQSx1REFBVztBQUFBO0FBQUFxQyxFQUFBLEdBSDlEMUMsSUFBSTtBQWlES0EsbUVBQUksRUFBQztBQUFBLElBQUEwQyxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3QsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxuICAgICAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RcbiAgICApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy/rp4zslb0g7Iqk7YGs66Gk7J2EIOuBneq5jOyngCDri6Qg64K066C47Jy866m0XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy/roZzrlKnspJHsnbTsp4Ag7JWK7J2E65WM66eMIOuUsSDtlZzrsohcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/sg4jroZzsmrTqsbAg67aI65+s7JmA6528XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgfSwgW2hhc01vcmVQb3N0LCBsb2FkUG9zdHNMb2FkaW5nXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cbiAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0FwcExheW91dD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})