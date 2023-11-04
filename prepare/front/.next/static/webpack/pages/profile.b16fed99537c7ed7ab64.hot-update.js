webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/ihyeoncheol/Desktop/nodebird_project/prepare/front/components/FollowList.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar FollowList = function FollowList(_ref) {\n  var header = _ref.header,\n    data = _ref.data;\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"List\"], {\n    style: {\n      marginBottom: 20\n    },\n    grid: {\n      gutter: 4,\n      xs: 2,\n      md: 3\n    },\n    size: \"small\",\n    header: __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 21\n      }\n    }, header),\n    loadMore: __jsx(\"div\", {\n      style: {\n        textAlign: \"center\",\n        margin: \"10px 0\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 21\n      }\n    }, \"\\uB354 \\uBCF4\\uAE30\")),\n    bordered: true,\n    dataSource: data //profil.js에서 넘겨준 팔로우 목록\n    ,\n    renderItem: function renderItem(item) {\n      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"List\"].Item, {\n        style: {\n          marginTop: 20\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 17\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"StopOutlined\"], {\n          key: \"stop\",\n          onClick: onClick,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 29\n          }\n        })],\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta, {\n        description: item.nickname,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 25\n        }\n      })));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  });\n};\n_c = FollowList;\nFollowList.propTypes = {\n  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\nvar _c;\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzP2ZhMDIiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsIl9yZWYiLCJoZWFkZXIiLCJkYXRhIiwiX19qc3giLCJMaXN0Iiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJncmlkIiwiZ3V0dGVyIiwieHMiLCJtZCIsInNpemUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwibG9hZE1vcmUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJCdXR0b24iLCJib3JkZXJlZCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkl0ZW0iLCJtYXJnaW5Ub3AiLCJDYXJkIiwiYWN0aW9ucyIsIlN0b3BPdXRsaW5lZCIsImtleSIsIm9uQ2xpY2siLCJNZXRhIiwiZGVzY3JpcHRpb24iLCJuaWNrbmFtZSIsIl9jIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ1A7QUFDYztBQUVqRCxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQUMsSUFBQSxFQUF5QjtFQUFBLElBQW5CQyxNQUFNLEdBQUFELElBQUEsQ0FBTkMsTUFBTTtJQUFFQyxJQUFJLEdBQUFGLElBQUEsQ0FBSkUsSUFBSTtFQUM5QixPQUNJQyxLQUFBLENBQUNDLHlDQUFJO0lBQ0RDLEtBQUssRUFBRTtNQUFFQyxZQUFZLEVBQUU7SUFBRyxDQUFFO0lBQzVCQyxJQUFJLEVBQUU7TUFBRUMsTUFBTSxFQUFFLENBQUM7TUFBRUMsRUFBRSxFQUFFLENBQUM7TUFBRUMsRUFBRSxFQUFFO0lBQUUsQ0FBRTtJQUNsQ0MsSUFBSSxFQUFDLE9BQU87SUFDWlYsTUFBTSxFQUFFRSxLQUFBO01BQUFTLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQU1qQixNQUFZLENBQUU7SUFDNUJrQixRQUFRLEVBQ0poQixLQUFBO01BQUtFLEtBQUssRUFBRTtRQUFFZSxTQUFTLEVBQUUsUUFBUTtRQUFFQyxNQUFNLEVBQUU7TUFBUyxDQUFFO01BQUFULE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQ2xEZixLQUFBLENBQUNtQiwyQ0FBTTtNQUFBVixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSx3QkFBYSxDQUNuQixDQUNSO0lBQ0RLLFFBQVE7SUFDUkMsVUFBVSxFQUFFdEIsSUFBSyxDQUFDO0lBQUE7SUFDbEJ1QixVQUFVLEVBQUUsU0FBQUEsV0FBQ0MsSUFBSTtNQUFBLE9BQ2J2QixLQUFBLENBQUNDLHlDQUFJLENBQUN1QixJQUFJO1FBQUN0QixLQUFLLEVBQUU7VUFBRXVCLFNBQVMsRUFBRTtRQUFHLENBQUU7UUFBQWhCLE1BQUEsRUFBQUMsS0FBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQ2hDZixLQUFBLENBQUMwQix5Q0FBSTtRQUNEQyxPQUFPLEVBQUUsQ0FDTDNCLEtBQUEsQ0FBQzRCLDhEQUFZO1VBQUNDLEdBQUcsRUFBQyxNQUFNO1VBQUNDLE9BQU8sRUFBRUEsT0FBUTtVQUFBckIsTUFBQSxFQUFBQyxLQUFBO1VBQUFDLFFBQUE7WUFBQUMsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBO1FBQUEsQ0FBRSxDQUFDLENBQy9DO1FBQUFOLE1BQUEsRUFBQUMsS0FBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBRUZmLEtBQUEsQ0FBQzBCLHlDQUFJLENBQUNLLElBQUk7UUFBQ0MsV0FBVyxFQUFFVCxJQUFJLENBQUNVLFFBQVM7UUFBQXhCLE1BQUEsRUFBQUMsS0FBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLENBQUUsQ0FDdEMsQ0FDQyxDQUFDO0lBQUEsQ0FDZDtJQUFBTixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNMLENBQUM7QUFFVixDQUFDO0FBQUNtQixFQUFBLEdBM0JJdEMsVUFBVTtBQTZCaEJBLFVBQVUsQ0FBQ3VDLFNBQVMsR0FBRztFQUNuQnJDLE1BQU0sRUFBRXNDLGlEQUFTLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVTtFQUNuQ3ZDLElBQUksRUFBRXFDLGlEQUFTLENBQUNHLEtBQUssQ0FBQ0Q7QUFDMUIsQ0FBQztBQUVjMUMseUVBQVUsRUFBQztBQUFBLElBQUFzQyxFQUFBO0FBQUFNLFlBQUEsQ0FBQU4sRUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9sbG93TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpc3QsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBTdG9wT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcblxuY29uc3QgRm9sbG93TGlzdCA9ICh7IGhlYWRlciwgZGF0YSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpc3RcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cbiAgICAgICAgICAgIGdyaWQ9e3sgZ3V0dGVyOiA0LCB4czogMiwgbWQ6IDMgfX1cbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XG4gICAgICAgICAgICBsb2FkTW9yZT17XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCIxMHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7rjZQg67O06riwPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX0gLy9wcm9maWwuanPsl5DshJwg64SY6rKo7KSAIO2MlOuhnOyasCDrqqnroZ1cbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIG9uQ2xpY2s9e29uQ2xpY2t9IC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICApO1xufTtcblxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

})