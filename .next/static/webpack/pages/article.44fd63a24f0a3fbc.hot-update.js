"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article",{

/***/ "./pages/article/index.tsx":
/*!*********************************!*\
  !*** ./pages/article/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Article; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ \"./components/header/index.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Loading */ \"./components/Loading/index.tsx\");\n/* harmony import */ var _components_breadcrumb_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/breadcrumb/style */ \"./components/breadcrumb/style/index.tsx\");\n/* harmony import */ var _components_CardArticle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CardArticle */ \"./components/CardArticle/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Article() {\n    _s();\n    const breadcrumbLinks = [\n        {\n            name: \"Home\",\n            url: \"/home\"\n        },\n        {\n            name: \"Articles\",\n            url: \"/mapping\"\n        }\n    ];\n    const fetcher = async (url)=>await fetch(url).then((res)=>res.json());\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"\".concat(\"http://localhost:3032\", \"/api/articles\"), fetcher);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_3__.Loading, {}, void 0, false, {\n        fileName: \"/Users/macbook/Backup/mangrove-digital/pages/article/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 26\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                isHomePage: false\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Backup/mangrove-digital/pages/article/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_breadcrumb_style__WEBPACK_IMPORTED_MODULE_4__.Breadcrumb, {\n                title: \"Articles\",\n                links: breadcrumbLinks\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Backup/mangrove-digital/pages/article/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"main-wrapper\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: data && data.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4 col-sm-6 col-lg-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardArticle__WEBPACK_IMPORTED_MODULE_5__.CardArticle, {\n                                    id_article: item.id_article,\n                                    article_title: item.article_title,\n                                    article_image: item.article_image,\n                                    created_at: item.created_at\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbook/Backup/mangrove-digital/pages/article/index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 41\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/macbook/Backup/mangrove-digital/pages/article/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 37\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Backup/mangrove-digital/pages/article/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Backup/mangrove-digital/pages/article/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Backup/mangrove-digital/pages/article/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Article, \"3etLDUffADz62tD7g9gJKxYxEy4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Article;\nvar _c;\n$RefreshReg$(_c, \"Article\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ29CO0FBQ0U7QUFDWTtBQUNKO0FBRXZDLFNBQVNLOztJQUNwQixNQUFNQyxrQkFBa0I7UUFDcEI7WUFDSUMsTUFBTztZQUNQQyxLQUFNO1FBQ1Y7UUFBRTtZQUNFRCxNQUFPO1lBQ1BDLEtBQU07UUFDVjtLQUNIO0lBU0QsTUFBTUMsVUFBVSxPQUFPRCxNQUFlLE1BQU1FLE1BQU1GLEtBQUtHLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBRTdFLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHaEIsK0NBQU1BLENBQUMsR0FBdUMsT0FBcENpQix1QkFBbUMsRUFBQyxrQkFBZ0JSO0lBRWpHLElBQUdPLFdBQVcscUJBQU8sOERBQUNkLHdEQUFPQTs7Ozs7SUFFN0IscUJBQ0k7OzBCQUNJLDhEQUFDRCxzREFBTUE7Z0JBQUNtQixZQUFZOzs7Ozs7MEJBQ3BCLDhEQUFDakIsb0VBQVVBO2dCQUNQa0IsT0FBUTtnQkFDUkMsT0FBU2hCOzs7Ozs7MEJBRWIsOERBQUNpQjtnQkFBS0MsV0FBVTswQkFDWiw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUVQVixRQUNBQSxLQUFLWSxHQUFHLENBQUMsQ0FBQ0MsTUFBZUM7NEJBQ3JCLHFCQUNJLDhEQUFDSDtnQ0FBSUQsV0FBVTswQ0FDWCw0RUFBQ3BCLGdFQUFXQTtvQ0FDUnlCLFlBQVlGLEtBQUtFLFVBQVU7b0NBQzNCQyxlQUFlSCxLQUFLRyxhQUFhO29DQUNqQ0MsZUFBZUosS0FBS0ksYUFBYTtvQ0FDakNDLFlBQVlMLEtBQUtLLFVBQVU7Ozs7OzsrQkFMVUo7Ozs7O3dCQVNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVCO0dBdER3QnZCOztRQW9CZUwsMkNBQU1BOzs7S0FwQnJCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlL2luZGV4LnRzeD9jZWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICdAL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tICdAL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9zdHlsZSdcbmltcG9ydCB7IENhcmRBcnRpY2xlIH0gZnJvbSAnQC9jb21wb25lbnRzL0NhcmRBcnRpY2xlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlKCkge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJMaW5rcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZSA6ICdIb21lJyxcbiAgICAgICAgICAgIHVybCA6ICcvaG9tZSdcbiAgICAgICAgfSx7XG4gICAgICAgICAgICBuYW1lIDogJ0FydGljbGVzJyxcbiAgICAgICAgICAgIHVybCA6ICcvbWFwcGluZydcbiAgICAgICAgfVxuICAgIF1cblxuICAgIHR5cGUgZGF0YVR5cGUgPSB7XG4gICAgICAgIGlkX2FydGljbGU6IHN0cmluZyxcbiAgICAgICAgYXJ0aWNsZV90aXRsZTogc3RyaW5nLFxuICAgICAgICBhcnRpY2xlX2ltYWdlOiBzdHJpbmcsXG4gICAgICAgIGNyZWF0ZWRfYXQ6IHN0cmluZ1xuICAgIH1cblxuICAgIGNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsOnN0cmluZykgPT4gYXdhaXQgZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNXUihgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVJWRVJfSE9TVH0vYXBpL2FydGljbGVzYCwgZmV0Y2hlcilcblxuICAgIGlmKGlzTG9hZGluZykgcmV0dXJuIDxMb2FkaW5nIC8+XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciBpc0hvbWVQYWdlPXtmYWxzZX0gLz5cbiAgICAgICAgICAgIDxCcmVhZGNydW1iXG4gICAgICAgICAgICAgICAgdGl0bGUgPSBcIkFydGljbGVzXCJcbiAgICAgICAgICAgICAgICBsaW5rcyA9IHticmVhZGNydW1iTGlua3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW06ZGF0YVR5cGUsIGluZGV4Om51bWJlcik9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBjb2wtc20tNiBjb2wtbGctNFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9hcnRpY2xlPXtpdGVtLmlkX2FydGljbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGVfdGl0bGU9e2l0ZW0uYXJ0aWNsZV90aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZV9pbWFnZT17aXRlbS5hcnRpY2xlX2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0PXtpdGVtLmNyZWF0ZWRfYXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwiSGVhZGVyIiwiTG9hZGluZyIsIkJyZWFkY3J1bWIiLCJDYXJkQXJ0aWNsZSIsIkFydGljbGUiLCJicmVhZGNydW1iTGlua3MiLCJuYW1lIiwidXJsIiwiZmV0Y2hlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0VSVkVSX0hPU1QiLCJpc0hvbWVQYWdlIiwidGl0bGUiLCJsaW5rcyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZF9hcnRpY2xlIiwiYXJ0aWNsZV90aXRsZSIsImFydGljbGVfaW1hZ2UiLCJjcmVhdGVkX2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/article/index.tsx\n"));

/***/ })

});