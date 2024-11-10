"use strict";
(() => {
var exports = {};
exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 1987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fpartners_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fpartners_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/partners.ts
var partners_namespaceObject = {};
__webpack_require__.r(partners_namespaceObject);
__webpack_require__.d(partners_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./utils/mysql.js + 1 modules
var mysql = __webpack_require__(9829);
;// CONCATENATED MODULE: ./pages/api/partners.ts

async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const [rows] = await mysql/* default */.Z.execute("SELECT * FROM partners");
            res.status(200).json(rows); // Send all partners as JSON
        } catch (error) {
            res.status(500).json({
                error: "Failed to fetch partners"
            });
        }
    } else {
        res.status(405).json({
            error: "Method Not Allowed"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fpartners&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fpartners.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fpartners_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fpartners_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(partners_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(partners_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/partners",
        pathname: "/api/partners",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: partners_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ }),

/***/ 9829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ mysql)
});

;// CONCATENATED MODULE: external "mysql2"
const external_mysql2_namespaceObject = require("mysql2");
var external_mysql2_default = /*#__PURE__*/__webpack_require__.n(external_mysql2_namespaceObject);
;// CONCATENATED MODULE: ./utils/mysql.js
// lib/mysql.js

// Create a MySQL connection pool (you can reuse the connection)
const pool = external_mysql2_default().createPool({
    host: "202.157.189.174",
    user: "semari_mangrovedigital",
    password: "2018D3v####",
    database: "semari_mangrovedigital" // Database name
});
/* harmony default export */ const mysql = (pool.promise()); // Use promise-based API


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(1987)));
module.exports = __webpack_exports__;

})();