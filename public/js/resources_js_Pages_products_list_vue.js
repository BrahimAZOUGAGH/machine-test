(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_products_list_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/products/list.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/products/list.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Services_ProductService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/ProductService */ "./resources/js/Services/ProductService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductList',
  data: function data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      products: [],
      fields: [{
        key: 'id',
        sortable: true
      }, {
        key: 'name',
        sortable: true
      }, {
        key: 'category',
        sortable: true
      }, {
        key: 'quantity',
        sortable: true
      }, {
        key: 'status',
        sortable: false
      }],
      filter: null
    };
  },
  methods: {
    retrieveProducts: function retrieveProducts() {
      var _this = this;

      _Services_ProductService__WEBPACK_IMPORTED_MODULE_0__.default.getAll().then(function (response) {
        _this.products = response.data;
        console.log(response.data);
      })["catch"](function (e) {
        console.log(e);
      });
    }
  },
  mounted: function mounted() {
    this.retrieveProducts();
  }
});

/***/ }),

/***/ "./resources/js/@config/http-common.js":
/*!*********************************************!*\
  !*** ./resources/js/@config/http-common.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json"
  }
}));

/***/ }),

/***/ "./resources/js/Services/ProductService.js":
/*!*************************************************!*\
  !*** ./resources/js/Services/ProductService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../@config/http-common */ "./resources/js/@config/http-common.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ProductService = /*#__PURE__*/function () {
  function ProductService() {
    _classCallCheck(this, ProductService);
  }

  _createClass(ProductService, [{
    key: "getAll",
    value: function getAll() {
      return _config_http_common__WEBPACK_IMPORTED_MODULE_0__.default.get("/products");
    }
  }, {
    key: "get",
    value: function get(id) {
      return _config_http_common__WEBPACK_IMPORTED_MODULE_0__.default.get("/products/".concat(id));
    }
  }, {
    key: "create",
    value: function create(data) {
      return _config_http_common__WEBPACK_IMPORTED_MODULE_0__.default.post("/products", data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return _config_http_common__WEBPACK_IMPORTED_MODULE_0__.default.put("/products/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return _config_http_common__WEBPACK_IMPORTED_MODULE_0__.default.delete("/products/".concat(id));
    }
  }]);

  return ProductService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProductService());

/***/ }),

/***/ "./resources/js/Pages/products/list.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/products/list.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_vue_vue_type_template_id_8c5559a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=8c5559a0& */ "./resources/js/Pages/products/list.vue?vue&type=template&id=8c5559a0&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/Pages/products/list.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _list_vue_vue_type_template_id_8c5559a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _list_vue_vue_type_template_id_8c5559a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/products/list.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/products/list.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/products/list.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/products/list.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/products/list.vue?vue&type=template&id=8c5559a0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/products/list.vue?vue&type=template&id=8c5559a0& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_8c5559a0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_8c5559a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_8c5559a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./list.vue?vue&type=template&id=8c5559a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/products/list.vue?vue&type=template&id=8c5559a0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/products/list.vue?vue&type=template&id=8c5559a0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/products/list.vue?vue&type=template&id=8c5559a0& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "product_list" }, [
    _c(
      "div",
      [
        _c(
          "b-row",
          [
            _c(
              "b-col",
              { staticClass: "my-1", attrs: { lg: "6" } },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "mb-5",
                    attrs: { to: { name: "product-add" }, tag: "div" }
                  },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: {
                          pill: "",
                          variant: "primary",
                          "text-variant": "white"
                        }
                      },
                      [_c("b-icon-plus"), _vm._v(" Add new")],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { staticClass: "my-1", attrs: { lg: "6" } },
              [
                _c(
                  "b-form-group",
                  {
                    staticClass: "mb-0",
                    attrs: {
                      label: "Search",
                      "label-for": "filter-input",
                      "label-cols-sm": "3",
                      "label-align-sm": "right",
                      "label-size": "sm"
                    }
                  },
                  [
                    _c(
                      "b-input-group",
                      { attrs: { size: "sm" } },
                      [
                        _c("b-form-input", {
                          attrs: {
                            id: "filter-input",
                            type: "search",
                            placeholder: "Type to Search"
                          },
                          model: {
                            value: _vm.filter,
                            callback: function($$v) {
                              _vm.filter = $$v
                            },
                            expression: "filter"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "b-input-group-append",
                          [
                            _c(
                              "b-button",
                              {
                                attrs: { disabled: !_vm.filter },
                                on: {
                                  click: function($event) {
                                    _vm.filter = ""
                                  }
                                }
                              },
                              [_vm._v("Clear")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("b-table", {
          attrs: {
            striped: "",
            hover: "",
            items: _vm.products,
            fields: _vm.fields,
            filter: _vm.filter,
            "sort-by": _vm.sortBy,
            "sort-desc": _vm.sortDesc,
            "show-empty": ""
          },
          on: {
            "update:sortBy": function($event) {
              _vm.sortBy = $event
            },
            "update:sort-by": function($event) {
              _vm.sortBy = $event
            },
            "update:sortDesc": function($event) {
              _vm.sortDesc = $event
            },
            "update:sort-desc": function($event) {
              _vm.sortDesc = $event
            }
          },
          scopedSlots: _vm._u([
            {
              key: "cell(name)",
              fn: function(data) {
                return [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "product-edit",
                          params: { id: data.item.id }
                        }
                      }
                    },
                    [_vm._v(_vm._s(data.item.name))]
                  )
                ]
              }
            },
            {
              key: "cell(status)",
              fn: function(data) {
                return [
                  _c("b", [
                    _vm._v(_vm._s(data.item.status ? "Active" : "Inactive"))
                  ])
                ]
              }
            },
            {
              key: "empty",
              fn: function(scope) {
                return [
                  _c("h5", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(scope.emptyText))
                  ])
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);