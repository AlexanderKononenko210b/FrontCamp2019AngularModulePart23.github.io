function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<simple-notifications></simple-notifications>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-detail/article-detail.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-detail/article-detail.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesArticleDetailArticleDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-menu></app-menu>\n<app-header></app-header>\n<app-article-info \n    [article]=\"article\"\n    (onEdit)=\"onEdit($event)\" \n    (onDelete)=\"onDelete($event)\"></app-article-info>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-detail/article-info/article-info.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-detail/article-info/article-info.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesArticleDetailArticleInfoArticleInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card card-list m-3\">\n    <div *ngIf=\"isLoading === false\">\n        Loading...\n    </div>\n    <div *ngIf=\"isLoading\">\n        <div class=\"card-container\">\n            <img class=\"card-img-top card-list\" src={{article.urlToImage}} onError=\"this.src='FrontCamp2019AngularModulePart23.github.io/dist/assets/img/mock-img.png';\" alt=\"image\">\n        </div>\n        <div class=\"content-container\">\n            <h5 class=\"card-title\">{{article.title}}</h5>\n            <p class=\"card-text\">{{article.content}}</p>\n            <p class=\"card-text\">{{article.publishedAt | date:\"dd/MM/yyyy\"}}</p>\n            <p class=\"card-text\">{{article.author}}</p>\n        </div>\n        <div class=\"card-container\">\n            <div class=\"btn-group-vertical\" *ngIf=\"isCreatedByMe\">\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"edit(article._id)\">Edit</button>\n                <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"delete(article._id)\">Delete</button>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-form/article-form.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-form/article-form.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesArticleFormArticleFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-menu></app-menu>\n<app-header [title]=\"title\"></app-header>\n<app-form \n    [article]=\"article\" \n    (onCancel)=\"onCancel()\"\n    (onSubmit)=\"onSubmit($event)\"></app-form>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-form/form/form.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-form/form/form.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesArticleFormFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container main-container\">\n    <div *ngIf=\"isLoaded === false\">\n        Loading...\n    </div>\n    <form *ngIf=\"isLoaded\" (ngSubmit)=\"submit()\" [formGroup]=\"articleFormGroup\">\n        <div class=\"group-container\">\n            <div class=\"form-group\">\n                <label for=\"titleInput\" id=\"titleLabel\">Title</label>\n                <input [formControl]=\"titleControl\" id=\"titleInput\" type=\"text\" class=\"form-control\">\n                <div *ngIf=\"articleFormGroup.controls['title'].errors && !articleFormGroup.controls['title'].pristine\" class=\"alert alert-danger\">\n                    <div *ngIf=\"articleFormGroup.controls['title'].errors.required\">Title is required.</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"descriptionInput\" id=\"descriptionLabel\">Description</label>\n                <input [formControl]=\"descriptionControl\" id=\"descriptionInput\" type=\"text\" class=\"form-control\"> \n            </div>\n            <div class=\"form-group\">\n                <label for=\"contentInput\" id=\"contentLabel\">Content</label>\n                <textarea class=\"form-control rounded-0\" rows=\"3\" [formControl]=\"contentControl\" id=\"contentInput\"></textarea>\n                <div *ngIf=\"articleFormGroup.controls['content'].errors && !articleFormGroup.controls['content'].pristine\" class=\"alert alert-danger\">\n                    <div *ngIf=\"articleFormGroup.controls['content'].errors.required\">Content is required.</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"group-container\">\n            <div class=\"form-group\">\n                <label for=\"urlToImageInput\" id=\"urlToImageLabel\">Image</label>\n                <div class=\"form-check form-check-inline ml-3\">\n                    <input type=\"radio\" class=\"form-check-input\" id=\"urlToImageRadio\" name=\"imageSourceSelect\" (change)=\"urlImageSelect(true)\" checked>\n                    <label class=\"form-check-label\" for=\"urlToImageRadio\">URL</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input type=\"radio\" class=\"form-check-input\" id=\"fileToImageRadio\" name=\"imageSourceSelect\" (change)=\"urlImageSelect(false)\">\n                    <label class=\"form-check-label\" for=\"fileToImageRadio\">File</label>\n                </div>\n                <input [formControl]=\"urlToImageControl\" id=\"fileToImageInput\" type=\"text\" class=\"form-control\"> \n            </div>\n            <div class=\"form-group\">\n                <label for=\"publishedAtInput\" id=\"publishedAtLabel\">Date</label>\n                <input [formControl]=\"publishedAtControl\" id=\"publishedAtInput\" type=\"text\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"authorInput\" id=\"authorLabel\">Author</label>\n                <input [formControl]=\"authorControl\" id=\"authorInput\" type=\"text\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"urlInput\" id=\"urlLabel\">Source URL</label>\n                <input [formControl]=\"urlControl\" id=\"urlInput\" type=\"text\" class=\"form-control\">\n            </div>\n            <div class=\"btn-toolbar btn-group\" role=\"toolbar\" aria-label=\"Action buttons\">\n                <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Edit group\">\n                    <button type=\"submit\" class=\"btn btn-outline-primary\" [disabled]=\"articleFormGroup.invalid\" >Save</button>\n                </div>\n                <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Cancel group\">\n                    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"cancel()\">Cancel</button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/article/article.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/article/article.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesArticlesListArticleArticleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card card-list m-3\">\n    <div>\n        <div class=\"card-container\">\n            <img class=\"card-img-top card-list\" src={{article.urlToImage}} onError=\"this.src='FrontCamp2019AngularModulePart23.github.io/dist/assets/img/mock-img.png';\" alt=\"image\">\n        </div>\n        <div class=\"content-container\">\n            <h5 class=\"card-title\">{{article.title}}</h5>\n            <p class=\"card-text\">{{article.description}}</p>\n        </div>\n        <div class=\"card-container\">\n            <p class=\"card-text\">{{ article.publishedAt | date:\"dd/MM/yyyy\" }}</p>\n        </div>\n        <div class=\"card-container\">\n            <div class=\"btn-group-vertical\" *ngIf=\"isCreatedByMe\">\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click) = \"onEdit(article._id)\">Edit</button>\n                <button type=\"button\" class=\"btn btn-outline-danger\" (click) = \"delete(article._id)\">Delete</button>\n            </div>\n            <div class=\"mt-3\" *ngIf=\"article.url != ''\">\n                <a href=\"{{article.url}}\" target=\"blank\">\n                    <button type=\"button\" class=\"btn btn-outline-primary\">More...</button>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/articles-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/articles-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesArticlesListArticlesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-menu></app-menu>\n<app-header [title]=\"title\"></app-header>\n<option-example-element\n        (onSourceChange)=\"onSourceChange($event)\"\n        (onFilterClick)=\"onFilterClick($event)\"\n        (onCheckedByMe)=\"onCheckedByMe($event)\"\n        [selectedSources]=\"selectedSources\"\n        [inputFilter]=\"inputFilter\"\n        [sources]=\"sources\">\n</option-example-element>\n<div #articlesList></div>\n<app-load-more (onLoadMore)=\"onLoadMore()\"></app-load-more>\n<app-footer></app-footer>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/load-more/load-more.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/load-more/load-more.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesArticlesListLoadMoreLoadMoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card card-load-more ml-5 mr-3 mb-3\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"loadMore()\">Load more</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/options/options.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/options/options.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesArticlesListOptionsOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-options mb-3\">\n    <div class=\"row\">\n        <div class=\"form-group form-inline option-control\">\n            <select class=\"form-control\" id=\"sourceSelect\" [(ngModel)]=\"selectedSources\" (change)=\"sourceChange($event)\" [disabled]=\"isChecked\">\n                <option *ngFor=\"let source of sources;\"\n                    [value]=\"source.id\">\n                        {{source.name}}\n                </option>\n            </select>\n        </div>\n        <div class=\"form-group form-inline option-control\">\n            <input \n                type=\"email\" \n                class=\"form-control option\"\n                id=\"filterInput\"\n                placeholder=\"type your filter...\"\n                #filterInput>\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click) = \"filterClick(filterInput.value)\">Filter</button>\n        </div>\n        <div class=\"form-group form-inline option-control\">\n            <input \n                type=\"checkbox\" \n                class=\"form-check-input\" \n                value=\"\" \n                (change)=\"isCheckedByMe($event)\">\n            <label class=\"form-check-label\">Only Created by me</label>\n        </div>\n        <div class=\"form-group form-inline option-control\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click) = \"onAdd()\">Add</button>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/not-found/not-found.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/not-found/not-found.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n        <div class=\"error-template\">\n            <h1>Oops!</h1>\n            <h2>404 Not Found</h2>\n            <div class=\"error-details\">\n            Sorry, an error has occurred, Requested page not found!\n            </div>\n            <div class=\"error-actions\">\n            <a mat-flat-button routerLink=\"/\">Take Me Home</a>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/shared/footer/footer.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/shared/footer/footer.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-footer\">\n    <p class=\"footer-left\">Powered by NewsAPI</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/shared/header/header.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/shared/header/header.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-header\">\n    <h1 class=\"app-name\">{{title}}</h1>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/shared/menu/menu.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/shared/menu/menu.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesSharedMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-menu\">\n    <div class=\"container container-left\">\n        <span class=\"menu-title\">Aggregator Logo</span>\n    </div>\n    <div class=\"container container-right\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click) = \"onLogIn()\">Log In</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click) = \"onLogOut()\">Log Out</button>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _features_articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./features/articles-list/articles-list.component */
    "./src/app/features/articles-list/articles-list.component.ts");
    /* harmony import */


    var _features_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./features/article-detail/article-detail.component */
    "./src/app/features/article-detail/article-detail.component.ts");
    /* harmony import */


    var _features_article_form_article_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./features/article-form/article-form.component */
    "./src/app/features/article-form/article-form.component.ts");
    /* harmony import */


    var _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./features/not-found/not-found.component */
    "./src/app/features/not-found/not-found.component.ts");

    var routes = [{
      path: "",
      children: [{
        path: "",
        component: _features_articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_4__["ArticlesListComponent"]
      }, {
        path: "detail/:id",
        component: _features_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_5__["ArticleDetailComponent"]
      }, {
        path: "form",
        component: _features_article_form_article_form_component__WEBPACK_IMPORTED_MODULE_6__["ArticleFormComponent"]
      }, {
        path: "form/:id",
        component: _features_article_form_article_form_component__WEBPACK_IMPORTED_MODULE_6__["ArticleFormComponent"]
      }]
    }, {
      path: '404',
      component: _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
    }, {
      path: '**',
      redirectTo: '404'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_local_storage_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models/local-storage-user-model */
    "./src/app/models/local-storage-user-model.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'FrontCamp2019AngularModulePart23'; //temp solution to test components

      localStorage.setItem(_models_local_storage_user_model__WEBPACK_IMPORTED_MODULE_2__["LocalStorageUserModel"].name, "kv210");
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/elements */
    "./node_modules/@angular/elements/fesm2015/elements.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _features_shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./features/shared/header/header.component */
    "./src/app/features/shared/header/header.component.ts");
    /* harmony import */


    var _features_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./features/shared/footer/footer.component */
    "./src/app/features/shared/footer/footer.component.ts");
    /* harmony import */


    var _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./features/not-found/not-found.component */
    "./src/app/features/not-found/not-found.component.ts");
    /* harmony import */


    var _features_articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./features/articles-list/articles-list.component */
    "./src/app/features/articles-list/articles-list.component.ts");
    /* harmony import */


    var _features_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./features/article-detail/article-detail.component */
    "./src/app/features/article-detail/article-detail.component.ts");
    /* harmony import */


    var _features_article_form_article_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./features/article-form/article-form.component */
    "./src/app/features/article-form/article-form.component.ts");
    /* harmony import */


    var _features_shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./features/shared/menu/menu.component */
    "./src/app/features/shared/menu/menu.component.ts");
    /* harmony import */


    var _node_modules_angular2_notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../node_modules/angular2-notifications */
    "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _features_articles_list_article_article_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./features/articles-list/article/article.component */
    "./src/app/features/articles-list/article/article.component.ts");
    /* harmony import */


    var _features_articles_list_options_options_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./features/articles-list/options/options.component */
    "./src/app/features/articles-list/options/options.component.ts");
    /* harmony import */


    var _features_articles_list_load_more_load_more_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./features/articles-list/load-more/load-more.component */
    "./src/app/features/articles-list/load-more/load-more.component.ts");
    /* harmony import */


    var _features_article_detail_article_info_article_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./features/article-detail/article-info/article-info.component */
    "./src/app/features/article-detail/article-info/article-info.component.ts");
    /* harmony import */


    var _features_article_form_form_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./features/article-form/form/form.component */
    "./src/app/features/article-form/form/form.component.ts");
    /* harmony import */


    var _services_shared_pipes_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/shared/pipes/filter-pipe.pipe */
    "./src/app/services/shared/pipes/filter-pipe.pipe.ts");

    var AppModule =
    /*#__PURE__*/
    function () {
      function AppModule(injector) {
        _classCallCheck(this, AppModule);

        this.injector = injector;
        var optionElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_4__["createCustomElement"])(_features_articles_list_options_options_component__WEBPACK_IMPORTED_MODULE_18__["OptionsComponent"], {
          injector: this.injector
        });
        customElements.define('option-example-element', optionElement);
      }

      _createClass(AppModule, [{
        key: "ngDoBootstrap",
        value: function ngDoBootstrap() {}
      }]);

      return AppModule;
    }();

    AppModule.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
      }];
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _features_shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _features_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _features_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], _features_articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_10__["ArticlesListComponent"], _features_article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_11__["ArticleDetailComponent"], _features_article_form_article_form_component__WEBPACK_IMPORTED_MODULE_12__["ArticleFormComponent"], _features_shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"], _features_shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"], _features_articles_list_article_article_component__WEBPACK_IMPORTED_MODULE_17__["ArticleComponent"], _features_articles_list_options_options_component__WEBPACK_IMPORTED_MODULE_18__["OptionsComponent"], _features_articles_list_load_more_load_more_component__WEBPACK_IMPORTED_MODULE_19__["LoadMoreComponent"], _features_article_detail_article_info_article_info_component__WEBPACK_IMPORTED_MODULE_20__["ArticleInfoComponent"], _features_article_form_form_form_component__WEBPACK_IMPORTED_MODULE_21__["FormComponent"], _services_shared_pipes_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_22__["ArticleFilterPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _node_modules_angular2_notifications__WEBPACK_IMPORTED_MODULE_14__["SimpleNotificationsModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]],
      providers: [_services_shared_pipes_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_22__["ArticleFilterPipe"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      entryComponents: [_features_articles_list_article_article_component__WEBPACK_IMPORTED_MODULE_17__["ArticleComponent"], _features_articles_list_options_options_component__WEBPACK_IMPORTED_MODULE_18__["OptionsComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/config/app.config.ts":
  /*!**************************************!*\
    !*** ./src/app/config/app.config.ts ***!
    \**************************************/

  /*! exports provided: Config */

  /***/
  function srcAppConfigAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Config", function () {
      return Config;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Config = {
      URL_TOP_HEADLINES: 'https://newsapi.org/v2/top-headlines?',
      URL_SOURCES: "https://newsapi.org/v2/sources?",
      API_KEY: "64dbacdde33446cc855b6a5d8d59b450",
      NUMBER_ARTICLE_TO_SHOW: 5,
      PATH_TO_LOCAL_IMG: 'FrontCamp2019AngularModulePart23.github.io/dist/assets/img/mock-img.png'
    };
    /***/
  },

  /***/
  "./src/app/config/app.constants.ts":
  /*!*****************************************!*\
    !*** ./src/app/config/app.constants.ts ***!
    \*****************************************/

  /*! exports provided: Constants */

  /***/
  function srcAppConfigAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_source_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/source-model */
    "./src/app/models/source-model.ts");

    var Constants = {
      sources: [new _models_source_model__WEBPACK_IMPORTED_MODULE_1__["SourceModel"]("custom-news", "Custom Articles"), new _models_source_model__WEBPACK_IMPORTED_MODULE_1__["SourceModel"]("all-sources", "All Articles")],
      messages: [function (id) {
        return "Article with id = ".concat(id, " was added successfully.");
      }, function (id) {
        return "Article with id = ".concat(id, " was updated successfully");
      }, function (id) {
        return "No padding changes for id = ".concat(id);
      }, function (id) {
        return "Article for update with id = ".concat(id, " wasn't found.");
      }, function (id) {
        return "Article with id = ".concat(id, " was deleted successfully.");
      }, function (id) {
        return "Article for delete with id = ".concat(id, " wasn't found.");
      }, function () {
        return "Internal server error";
      }]
    };
    /***/
  },

  /***/
  "./src/app/config/app.enums.ts":
  /*!*************************************!*\
    !*** ./src/app/config/app.enums.ts ***!
    \*************************************/

  /*! exports provided: FormTitle, UrlBuilderType */

  /***/
  function srcAppConfigAppEnumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormTitle", function () {
      return FormTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlBuilderType", function () {
      return UrlBuilderType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FormTitle;

    (function (FormTitle) {
      FormTitle["Edit"] = "Edit";
      FormTitle["Create"] = "Create";
    })(FormTitle || (FormTitle = {}));

    var UrlBuilderType;

    (function (UrlBuilderType) {
      UrlBuilderType["Sources"] = "sources";
      UrlBuilderType["TopHeadLines"] = "topHeadLines";
    })(UrlBuilderType || (UrlBuilderType = {}));
    /***/

  },

  /***/
  "./src/app/features/article-detail/article-detail.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/features/article-detail/article-detail.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesArticleDetailArticleDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUtZGV0YWlsL2FydGljbGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/features/article-detail/article-detail.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/features/article-detail/article-detail.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ArticleDetailComponent */

  /***/
  function srcAppFeaturesArticleDetailArticleDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleDetailComponent", function () {
      return ArticleDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_shared_notificationSvc_notification_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/shared/notificationSvc/notification-manager.service */
    "./src/app/services/shared/notificationSvc/notification-manager.service.ts");
    /* harmony import */


    var _services_articleSvc_articles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/articleSvc/articles.service */
    "./src/app/services/articleSvc/articles.service.ts");
    /* harmony import */


    var _config_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../config/app.constants */
    "./src/app/config/app.constants.ts");

    var ArticleDetailComponent =
    /*#__PURE__*/
    function () {
      function ArticleDetailComponent(router, route, notification, articleSvc, location) {
        _classCallCheck(this, ArticleDetailComponent);

        this.router = router;
        this.route = route;
        this.notification = notification;
        this.articleSvc = articleSvc;
        this.location = location;
        this.title = "";
        this.localImgUrl = "";
      }

      _createClass(ArticleDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.localImgUrl = "/img/mock-img.png";
          this.route.params.subscribe(function (param) {
            if (param['id']) {
              _this.getArticleById(param['id']);
            }
          }, function (error) {
            return _this.notification.errorNotification(error);
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.router.navigate(["/form/".concat(id)]);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this2 = this;

          this.articleSvc.deleteArticle(id).subscribe(function (result) {
            if (result.n > 0 && result.ok > 0 && result.deletedCount > 0) {
              _this2.notification.okNotification(_config_app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].messages[4](id));

              _this2.location.back();
            } else if (result.n === 0) {
              _this2.notification.alertNotification(_config_app_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].messages[5](id));
            }
          }, function (error) {
            return _this2.notification.errorNotification(error);
          });
        }
      }, {
        key: "getArticleById",
        value: function getArticleById(id) {
          var _this3 = this;

          this.articleSvc.getCustomArticle(id).subscribe(function (result) {
            _this3.article = result;
            _this3.title = _this3.article.publishedAt != "" ? _this3.article.publishedAt : "Edit";
          }, function (error) {
            return _this3.notification.errorNotification(error);
          });
        }
      }]);

      return ArticleDetailComponent;
    }();

    ArticleDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_shared_notificationSvc_notification_manager_service__WEBPACK_IMPORTED_MODULE_4__["NotificationManagerService"]
      }, {
        type: _services_articleSvc_articles_service__WEBPACK_IMPORTED_MODULE_5__["ArticlesService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    ArticleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-detail/article-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-detail.component.scss */
      "./src/app/features/article-detail/article-detail.component.scss")).default]
    })], ArticleDetailComponent);
    /***/
  },

  /***/
  "./src/app/features/article-detail/article-info/article-info.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/features/article-detail/article-info/article-info.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesArticleDetailArticleInfoArticleInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-list {\n  background: #D4D2D2;\n}\n\n.card-container {\n  padding: 10px;\n  float: left;\n  text-align: center;\n  width: 10%;\n}\n\n.content-container {\n  padding: 10px;\n  float: left;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYXJ0aWNsZS1kZXRhaWwvYXJ0aWNsZS1pbmZvL0U6XFxGcm9udENhbXBfMjAxOVxcTGVzc29uMVxcRnJvbnRDYW1wMjAxOUFuZ3VsYXJNb2R1bGVQYXJ0MjMvc3JjXFxhcHBcXGZlYXR1cmVzXFxhcnRpY2xlLWRldGFpbFxcYXJ0aWNsZS1pbmZvXFxhcnRpY2xlLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUtZGV0YWlsL2FydGljbGUtaW5mby9hcnRpY2xlLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYXJ0aWNsZS1kZXRhaWwvYXJ0aWNsZS1pbmZvL2FydGljbGUtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogI0Q0RDJEMjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG59IiwiLmNhcmQtbGlzdCB7XG4gIGJhY2tncm91bmQ6ICNENEQyRDI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogODAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/features/article-detail/article-info/article-info.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/features/article-detail/article-info/article-info.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ArticleInfoComponent */

  /***/
  function srcAppFeaturesArticleDetailArticleInfoArticleInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleInfoComponent", function () {
      return ArticleInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_local_storage_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../models/local-storage-user-model */
    "./src/app/models/local-storage-user-model.ts");

    var ArticleInfoComponent =
    /*#__PURE__*/
    function () {
      function ArticleInfoComponent() {
        _classCallCheck(this, ArticleInfoComponent);

        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ArticleInfoComponent, [{
        key: "edit",
        value: function edit(id) {
          this.onEdit.emit(id);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          this.onDelete.emit(id);
        }
      }, {
        key: "articleInitialize",
        value: function articleInitialize(article) {
          this.isCreatedByMe = localStorage.getItem(_models_local_storage_user_model__WEBPACK_IMPORTED_MODULE_2__["LocalStorageUserModel"].name) === article.author;
        }
      }, {
        key: "article",
        get: function get() {
          return this._article;
        },
        set: function set(value) {
          this._article = value;
          this.articleInitialize(this._article);
          this.isLoading = true;
        }
      }]);

      return ArticleInfoComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ArticleInfoComponent.prototype, "article", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ArticleInfoComponent.prototype, "onEdit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ArticleInfoComponent.prototype, "onDelete", void 0);
    ArticleInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-detail/article-info/article-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-info.component.scss */
      "./src/app/features/article-detail/article-info/article-info.component.scss")).default]
    })], ArticleInfoComponent);
    /***/
  },

  /***/
  "./src/app/features/article-form/article-form.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/features/article-form/article-form.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesArticleFormArticleFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUtZm9ybS9hcnRpY2xlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/article-form/article-form.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/features/article-form/article-form.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ArticleFormComponent */

  /***/
  function srcAppFeaturesArticleFormArticleFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleFormComponent", function () {
      return ArticleFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/app.constants */
    "./src/app/config/app.constants.ts");
    /* harmony import */


    var _models_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/article */
    "./src/app/models/article.ts");
    /* harmony import */


    var _services_shared_notificationSvc_notification_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/shared/notificationSvc/notification-manager.service */
    "./src/app/services/shared/notificationSvc/notification-manager.service.ts");
    /* harmony import */


    var _models_local_storage_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/local-storage-user-model */
    "./src/app/models/local-storage-user-model.ts");
    /* harmony import */


    var _config_app_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../config/app.enums */
    "./src/app/config/app.enums.ts");
    /* harmony import */


    var _services_articleSvc_articles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/articleSvc/articles.service */
    "./src/app/services/articleSvc/articles.service.ts");
    /* harmony import */


    var _services_shared_helperSvc_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/shared/helperSvc/helper.service */
    "./src/app/services/shared/helperSvc/helper.service.ts");

    var ArticleFormComponent =
    /*#__PURE__*/
    function () {
      function ArticleFormComponent(notification, route, router, articleSvc) {
        _classCallCheck(this, ArticleFormComponent);

        this.notification = notification;
        this.route = route;
        this.router = router;
        this.articleSvc = articleSvc;
        this.article = new _models_article__WEBPACK_IMPORTED_MODULE_4__["ArticleModel"]("", "", "", "", "", "", "", "");
        this.id = "";
        this.updateMode = false;
        this.title = _config_app_enums__WEBPACK_IMPORTED_MODULE_7__["FormTitle"].Create;
        this.dateNow = "";
      }

      _createClass(ArticleFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.params.subscribe(function (param) {
            _this4.id = param["id"] ? param["id"] : "";
            _this4.updateMode = param["id"] ? true : false;

            if (_this4.updateMode) {
              _this4.getArticleById(_this4.id);
            } else {
              var date = new Date(Date.now());
              _this4.dateNow = date.toISOString();
              _this4.article.author = localStorage.getItem(_models_local_storage_user_model__WEBPACK_IMPORTED_MODULE_6__["LocalStorageUserModel"].name);
              _this4.article.publishedAt = _this4.dateNow;
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(article) {
          this.addUpdateAction(article);
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          if (this.id) {
            this.router.navigate(["/detail/".concat(this.id)]);
          } else {
            this.router.navigate([""]);
          }
        }
      }, {
        key: "getArticleById",
        value: function getArticleById(id) {
          var _this5 = this;

          this.articleSvc.getCustomArticle(id).subscribe(function (result) {
            _this5.article = result;
            _this5.id = _this5.article ? id : "";
            _this5.updateMode = _this5.id ? true : false;
            _this5.title = _this5.updateMode ? _config_app_enums__WEBPACK_IMPORTED_MODULE_7__["FormTitle"].Edit : _config_app_enums__WEBPACK_IMPORTED_MODULE_7__["FormTitle"].Create;
          }, function (error) {
            return _this5.notification.errorNotification(error);
          });
        }
      }, {
        key: "addUpdateAction",
        value: function addUpdateAction(article) {
          var _this6 = this;

          if (this.updateMode) {
            article._id = this.id;
            this.articleSvc.updateArticle(this.id, _services_shared_helperSvc_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"].mapArticleToServerUpdateModel(article)).subscribe(function (result) {
              if (result.n > 0 && result.nModified > 0 && result.ok > 0) {
                _this6.notification.okNotification(_config_app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].messages[1](_this6.id));
              } else if (result.n > 0 && result.ok > 0) {
                _this6.notification.alertNotification(_config_app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].messages[2](_this6.id));
              } else {
                _this6.notification.alertNotification(_config_app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].messages[3](_this6.id));
              }
            }, function (error) {
              return _this6.notification.errorNotification(error);
            });
          } else {
            this.articleSvc.addNewArticle(article).subscribe(function (result) {
              if (result) {
                _this6.notification.okNotification(_config_app_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].messages[0](result._id));
              }
            }, function (error) {
              return _this6.notification.errorNotification(error);
            });
          }
        }
      }]);

      return ArticleFormComponent;
    }();

    ArticleFormComponent.ctorParameters = function () {
      return [{
        type: _services_shared_notificationSvc_notification_manager_service__WEBPACK_IMPORTED_MODULE_5__["NotificationManagerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_articleSvc_articles_service__WEBPACK_IMPORTED_MODULE_8__["ArticlesService"]
      }];
    };

    ArticleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-form/article-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-form.component.scss */
      "./src/app/features/article-form/article-form.component.scss")).default]
    })], ArticleFormComponent);
    /***/
  },

  /***/
  "./src/app/features/article-form/form/form.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/features/article-form/form/form.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesArticleFormFormFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-container {\n  height: 500px;\n}\n\n.group-container {\n  padding: 5px;\n  float: left;\n  width: 50%;\n}\n\n.btn-group {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYXJ0aWNsZS1mb3JtL2Zvcm0vRTpcXEZyb250Q2FtcF8yMDE5XFxMZXNzb24xXFxGcm9udENhbXAyMDE5QW5ndWxhck1vZHVsZVBhcnQyMy9zcmNcXGFwcFxcZmVhdHVyZXNcXGFydGljbGUtZm9ybVxcZm9ybVxcZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvYXJ0aWNsZS1mb3JtL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGUtZm9ybS9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG4uZ3JvdXAtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4uYnRuLWdyb3VwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIubWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uZ3JvdXAtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmJ0bi1ncm91cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/features/article-form/form/form.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/features/article-form/form/form.component.ts ***!
    \**************************************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppFeaturesArticleFormFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _config_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../config/app.config */
    "./src/app/config/app.config.ts");

    var FormComponent =
    /*#__PURE__*/
    function () {
      function FormComponent(cdr) {
        _classCallCheck(this, FormComponent);

        this.cdr = cdr;
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isLoaded = false;
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.descriptionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.urlToImageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.publishedAtControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.authorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.urlControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.articleFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          title: this.titleControl,
          description: this.descriptionControl,
          content: this.contentControl,
          urlToImage: this.urlToImageControl,
          publishedAt: this.publishedAtControl,
          author: this.authorControl,
          url: this.urlControl
        });
      }

      _createClass(FormComponent, [{
        key: "urlImageSelect",
        value: function urlImageSelect(value) {
          this.urlToImageControl.setValue(value ? this.article.urlToImage : _config_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].PATH_TO_LOCAL_IMG);
        }
      }, {
        key: "submit",
        value: function submit() {
          this.onSubmit.emit(this.articleFormGroup.value);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.onCancel.emit();
        }
      }, {
        key: "formInitialize",
        value: function formInitialize(article) {
          this.articleFormGroup.patchValue(article);
        }
      }, {
        key: "article",
        get: function get() {
          return this._article;
        },
        set: function set(value) {
          console.log(value);
          this._article = value;
          this.formInitialize(this._article);
          this.isLoaded = true;
          this.cdr.detectChanges();
        }
      }]);

      return FormComponent;
    }();

    FormComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormComponent.prototype, "article", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FormComponent.prototype, "onCancel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FormComponent.prototype, "onSubmit", void 0);
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/article-form/form/form.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form.component.scss */
      "./src/app/features/article-form/form/form.component.scss")).default]
    })], FormComponent);
    /***/
  },

  /***/
  "./src/app/features/articles-list/article/article.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/features/articles-list/article/article.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesArticlesListArticleArticleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-list {\n  background: #D4D2D2;\n}\n\n.card-container {\n  padding: 10px;\n  float: left;\n  text-align: center;\n  width: 10%;\n}\n\n.content-container {\n  padding: 10px;\n  float: left;\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYXJ0aWNsZXMtbGlzdC9hcnRpY2xlL0U6XFxGcm9udENhbXBfMjAxOVxcTGVzc29uMVxcRnJvbnRDYW1wMjAxOUFuZ3VsYXJNb2R1bGVQYXJ0MjMvc3JjXFxhcHBcXGZlYXR1cmVzXFxhcnRpY2xlcy1saXN0XFxhcnRpY2xlXFxhcnRpY2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9hcnRpY2xlcy1saXN0L2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9hcnRpY2xlcy1saXN0L2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZC1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNENEQyRDI7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG4iLCIuY2FyZC1saXN0IHtcbiAgYmFja2dyb3VuZDogI0Q0RDJEMjtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/features/articles-list/article/article.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/features/articles-list/article/article.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppFeaturesArticlesListArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_local_storage_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../models/local-storage-user-model */
    "./src/app/models/local-storage-user-model.ts");
    /* harmony import */


    var _config_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../config/app.config */
    "./src/app/config/app.config.ts");

    var ArticleComponent =
    /*#__PURE__*/
    function () {
      function ArticleComponent(router) {
        _classCallCheck(this, ArticleComponent);

        this.router = router;

        this.onDelete = function (id) {};

        this.localImgUrl = "";
        this.isCreatedByMe = false;
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isCreatedByMe = this.article.author === localStorage.getItem(_models_local_storage_user_model__WEBPACK_IMPORTED_MODULE_3__["LocalStorageUserModel"].name);
          this.localImgUrl = _config_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].PATH_TO_LOCAL_IMG;
        }
      }, {
        key: "onEdit",
        value: function onEdit(id) {
          this.router.navigate(["/detail/".concat(id)]);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          this.onDelete(id);
        }
      }, {
        key: "_article",
        set: function set(value) {
          this.article = value;
        },
        get: function get() {
          return this.article;
        }
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ArticleComponent.prototype, "_article", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ArticleComponent.prototype, "onDelete", void 0);
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/article/article.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article.component.scss */
      "./src/app/features/articles-list/article/article.component.scss")).default]
    })], ArticleComponent);
    /***/
  },

  /***/
  "./src/app/features/articles-list/articles-list.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/features/articles-list/articles-list.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesArticlesListArticlesListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGVzLWxpc3QvYXJ0aWNsZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/features/articles-list/articles-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/features/articles-list/articles-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ArticlesListComponent */

  /***/
  function srcAppFeaturesArticlesListArticlesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesListComponent", function () {
      return ArticlesListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_source_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/source-model */
    "./src/app/models/source-model.ts");
    /* harmony import */


    var _services_shared_notificationSvc_notification_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/shared/notificationSvc/notification-manager.service */
    "./src/app/services/shared/notificationSvc/notification-manager.service.ts");
    /* harmony import */


    var _config_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/app.constants */
    "./src/app/config/app.constants.ts");
    /* harmony import */


    var _config_app_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../config/app.enums */
    "./src/app/config/app.enums.ts");
    /* harmony import */


    var _services_articleSvc_articles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/articleSvc/articles.service */
    "./src/app/services/articleSvc/articles.service.ts");
    /* harmony import */


    var _services_factories_urlBuilderFactorySvc_url_builder_factory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/factories/urlBuilderFactorySvc/url-builder-factory.service */
    "./src/app/services/factories/urlBuilderFactorySvc/url-builder-factory.service.ts");
    /* harmony import */


    var _services_shared_helperSvc_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/shared/helperSvc/helper.service */
    "./src/app/services/shared/helperSvc/helper.service.ts");
    /* harmony import */


    var src_app_config_app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/config/app.config */
    "./src/app/config/app.config.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/features/articles-list/article/article.component.ts");
    /* harmony import */


    var _services_shared_pipes_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/shared/pipes/filter-pipe.pipe */
    "./src/app/services/shared/pipes/filter-pipe.pipe.ts");

    var ArticlesListComponent =
    /*#__PURE__*/
    function () {
      function ArticlesListComponent(notification, articleSvc, urlBuilderFactory, factoryResolver, filterPipe) {
        var _this7 = this;

        _classCallCheck(this, ArticlesListComponent);

        this.notification = notification;
        this.articleSvc = articleSvc;
        this.urlBuilderFactory = urlBuilderFactory;
        this.factoryResolver = factoryResolver;
        this.filterPipe = filterPipe;
        this.articles = [];
        this.allArticles = [];
        this.sources = [];
        this.inputFilter = "";
        this.title = "";
        this.isCreatedByMe = false;
        this.selectedSources = _config_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].sources[0].id;
        this.numberOfPage = 1;

        this.onDelete = function (id) {
          _this7.articleSvc.deleteArticle(id).subscribe(function (result) {
            if (result.n > 0 && result.ok > 0 && result.deletedCount > 0) {
              _this7.notification.okNotification(_config_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].messages[4](id));

              _this7.loadCustomArticles();
            } else if (result.n === 0) {
              _this7.notification.alertNotification(_config_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].messages[5](id));
            }
          }, function (error) {
            return _this7.notification.errorNotification(error);
          });
        };

        this.onLoadMore = function () {
          var actualNumber = _this7.numberOfPage;
          var nextNumber = ++actualNumber;
          var existRecords = _this7.allArticles.length / src_app_config_app_config__WEBPACK_IMPORTED_MODULE_9__["Config"].NUMBER_ARTICLE_TO_SHOW;

          if (nextNumber > existRecords) {
            _this7.articles = _this7.allArticles;
          } else {
            _this7.numberOfPage = nextNumber;
            _this7.articles = _this7.allArticles.slice(0, nextNumber * src_app_config_app_config__WEBPACK_IMPORTED_MODULE_9__["Config"].NUMBER_ARTICLE_TO_SHOW + 1);
          }

          _this7.loadArticlesComponentList(_article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"], _this7.articles);
        };

        this.loadArticles = function (selectedSource) {
          _this7.title = _this7.sources.find(function (source) {
            return source.id === selectedSource;
          }).name;

          var urlBuilderSvc = _this7.urlBuilderFactory.create(_config_app_enums__WEBPACK_IMPORTED_MODULE_5__["UrlBuilderType"].TopHeadLines);

          var url = urlBuilderSvc.build();

          if (selectedSource === _config_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].sources[0].id) {
            //if custom articles go to database
            _this7.loadCustomArticles();

            return;
          } else if (selectedSource !== _config_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].sources[1].id) {
            //if specify api sources go to api source
            url = urlBuilderSvc.build(selectedSource);
          }

          _this7.articleSvc.getExternalArticles(url).subscribe(function (result) {
            _this7.allArticles = result.articles.map(function (apiArticle) {
              return _services_shared_helperSvc_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"].mapApiToArticle(apiArticle);
            });
            _this7.articles = _this7.allArticles.slice(0, src_app_config_app_config__WEBPACK_IMPORTED_MODULE_9__["Config"].NUMBER_ARTICLE_TO_SHOW);

            _this7.loadArticlesComponentList(_article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"], _this7.articles);
          }, function (error) {
            return _this7.notification.errorNotification(error);
          });
        };
      }

      _createClass(ArticlesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadCustomArticles();
          this.loadSources();
          this.title = _config_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].sources[0].name;
        }
      }, {
        key: "onSourceChange",
        value: function onSourceChange(selectedSource) {
          this.selectedSources = selectedSource.detail;
          this.loadArticles(this.selectedSources);
        }
      }, {
        key: "onCheckedByMe",
        value: function onCheckedByMe(value) {
          this.isCreatedByMe = value;
          this.loadCustomArticles();
          this.selectedSources = _config_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].sources[0].id;
          this.title = _config_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].sources[0].name;
        }
      }, {
        key: "onFilterClick",
        value: function onFilterClick(filter) {
          this.inputFilter = filter.detail;
          this.articles = this.filterPipe.transform(this.allArticles, this.inputFilter);
          this.loadArticlesComponentList(_article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"], this.articles);
        }
      }, {
        key: "loadSources",
        value: function loadSources() {
          var _this8 = this;

          var urlBuilder = this.urlBuilderFactory.create(_config_app_enums__WEBPACK_IMPORTED_MODULE_5__["UrlBuilderType"].Sources);
          var url = urlBuilder.build();
          this.articleSvc.getSources(url).subscribe(function (result) {
            var apiSources = result.sources.map(function (source) {
              return new _models_source_model__WEBPACK_IMPORTED_MODULE_2__["SourceModel"](source.id, source.name);
            }).slice(0, 10);
            _this8.sources = [].concat(_toConsumableArray(_this8.sources), _toConsumableArray(_config_app_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].sources), _toConsumableArray(apiSources));
          });
        }
      }, {
        key: "loadCustomArticles",
        value: function loadCustomArticles() {
          var _this9 = this;

          this.articleSvc.getAllCustomArticles().subscribe(function (result) {
            _this9.allArticles = result;
            _this9.articles = result.slice(0, src_app_config_app_config__WEBPACK_IMPORTED_MODULE_9__["Config"].NUMBER_ARTICLE_TO_SHOW);

            _this9.loadArticlesComponentList(_article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"], _this9.articles);
          }, function (error) {
            return _this9.notification.errorNotification(error);
          });
        }
      }, {
        key: "loadArticlesComponentList",
        value: function loadArticlesComponentList(type, articles) {
          var _this10 = this;

          var componentFactory = this.factoryResolver.resolveComponentFactory(type);
          this.articlesList.clear();
          articles.forEach(function (article) {
            var componentRef = _this10.articlesList.createComponent(componentFactory);

            var articleInst = componentRef.instance;
            articleInst.article = article;
            articleInst.onDelete = _this10.onDelete;
          });
        }
      }]);

      return ArticlesListComponent;
    }();

    ArticlesListComponent.ctorParameters = function () {
      return [{
        type: _services_shared_notificationSvc_notification_manager_service__WEBPACK_IMPORTED_MODULE_3__["NotificationManagerService"]
      }, {
        type: _services_articleSvc_articles_service__WEBPACK_IMPORTED_MODULE_6__["ArticlesService"]
      }, {
        type: _services_factories_urlBuilderFactorySvc_url_builder_factory_service__WEBPACK_IMPORTED_MODULE_7__["UrlBuilderFactoryService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _services_shared_pipes_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_11__["ArticleFilterPipe"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("articlesList", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      static: false
    })], ArticlesListComponent.prototype, "articlesList", void 0);
    ArticlesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-articles-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./articles-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/articles-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./articles-list.component.scss */
      "./src/app/features/articles-list/articles-list.component.scss")).default]
    })], ArticlesListComponent);
    /***/
  },

  /***/
  "./src/app/features/articles-list/load-more/load-more.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/features/articles-list/load-more/load-more.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesArticlesListLoadMoreLoadMoreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-load-more {\n  background: #D4D2D2;\n  height: 80px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYXJ0aWNsZXMtbGlzdC9sb2FkLW1vcmUvRTpcXEZyb250Q2FtcF8yMDE5XFxMZXNzb24xXFxGcm9udENhbXAyMDE5QW5ndWxhck1vZHVsZVBhcnQyMy9zcmNcXGFwcFxcZmVhdHVyZXNcXGFydGljbGVzLWxpc3RcXGxvYWQtbW9yZVxcbG9hZC1tb3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9hcnRpY2xlcy1saXN0L2xvYWQtbW9yZS9sb2FkLW1vcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYXJ0aWNsZXMtbGlzdC9sb2FkLW1vcmUvbG9hZC1tb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbG9hZC1tb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICNENEQyRDI7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iLCIuY2FyZC1sb2FkLW1vcmUge1xuICBiYWNrZ3JvdW5kOiAjRDREMkQyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/features/articles-list/load-more/load-more.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/features/articles-list/load-more/load-more.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LoadMoreComponent */

  /***/
  function srcAppFeaturesArticlesListLoadMoreLoadMoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadMoreComponent", function () {
      return LoadMoreComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_shared_notificationSvc_notification_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/shared/notificationSvc/notification-manager.service */
    "./src/app/services/shared/notificationSvc/notification-manager.service.ts");

    var LoadMoreComponent =
    /*#__PURE__*/
    function () {
      function LoadMoreComponent(notification) {
        _classCallCheck(this, LoadMoreComponent);

        this.notification = notification;
        this.onLoadMore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(LoadMoreComponent, [{
        key: "loadMore",
        value: function loadMore() {
          this.onLoadMore.emit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadMoreComponent;
    }();

    LoadMoreComponent.ctorParameters = function () {
      return [{
        type: _services_shared_notificationSvc_notification_manager_service__WEBPACK_IMPORTED_MODULE_2__["NotificationManagerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LoadMoreComponent.prototype, "onLoadMore", void 0);
    LoadMoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-load-more',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./load-more.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/load-more/load-more.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./load-more.component.scss */
      "./src/app/features/articles-list/load-more/load-more.component.scss")).default]
    })], LoadMoreComponent);
    /***/
  },

  /***/
  "./src/app/features/articles-list/options/options.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/features/articles-list/options/options.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesArticlesListOptionsOptionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-options {\n  background: #D4D2D2;\n  height: 80px;\n  padding: 25px;\n}\n\n.option-control {\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYXJ0aWNsZXMtbGlzdC9vcHRpb25zL0U6XFxGcm9udENhbXBfMjAxOVxcTGVzc29uMVxcRnJvbnRDYW1wMjAxOUFuZ3VsYXJNb2R1bGVQYXJ0MjMvc3JjXFxhcHBcXGZlYXR1cmVzXFxhcnRpY2xlcy1saXN0XFxvcHRpb25zXFxvcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9hcnRpY2xlcy1saXN0L29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FydGljbGVzLWxpc3Qvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1vcHRpb25zIHtcclxuICAgIGJhY2tncm91bmQ6ICNENEQyRDI7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4ub3B0aW9uLWNvbnRyb2wge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuXHJcbiIsIi5hcHAtb3B0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICNENEQyRDI7XG4gIGhlaWdodDogODBweDtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLm9wdGlvbi1jb250cm9sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDI1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/features/articles-list/options/options.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/features/articles-list/options/options.component.ts ***!
    \*********************************************************************/

  /*! exports provided: OptionsComponent */

  /***/
  function srcAppFeaturesArticlesListOptionsOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionsComponent", function () {
      return OptionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OptionsComponent =
    /*#__PURE__*/
    function () {
      function OptionsComponent(router) {
        _classCallCheck(this, OptionsComponent);

        this.router = router;
        this.sources = [];
        this.selectedSources = "";
        this.inputFilter = "";
        this.isChecked = false;
        this.onSourceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFilterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCheckedByMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(OptionsComponent, [{
        key: "sourceChange",
        value: function sourceChange(event) {
          this.onSourceChange.emit(event.target.value);
        }
      }, {
        key: "filterClick",
        value: function filterClick(filter) {
          this.onFilterClick.emit(filter);
        }
      }, {
        key: "isCheckedByMe",
        value: function isCheckedByMe(event) {
          this.isChecked = event.target.checked;
          this.onCheckedByMe.emit(event.target.checked);
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          this.router.navigate(["/form"]);
        }
      }]);

      return OptionsComponent;
    }();

    OptionsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OptionsComponent.prototype, "sources", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OptionsComponent.prototype, "selectedSources", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OptionsComponent.prototype, "inputFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], OptionsComponent.prototype, "onSourceChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], OptionsComponent.prototype, "onFilterClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], OptionsComponent.prototype, "onCheckedByMe", void 0);
    OptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-options',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./options.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/articles-list/options/options.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./options.component.scss */
      "./src/app/features/articles-list/options/options.component.scss")).default]
    })], OptionsComponent);
    /***/
  },

  /***/
  "./src/app/features/not-found/not-found.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/features/not-found/not-found.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesNotFoundNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-template {\n  padding: 40px 15px;\n  text-align: center;\n}\n\n.error-actions {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.error-actions .btn {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbm90LWZvdW5kL0U6XFxGcm9udENhbXBfMjAxOVxcTGVzc29uMVxcRnJvbnRDYW1wMjAxOUFuZ3VsYXJNb2R1bGVQYXJ0MjMvc3JjXFxhcHBcXGZlYXR1cmVzXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLXRlbXBsYXRlIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZXJyb3ItYWN0aW9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbn1cclxuLmVycm9yLWFjdGlvbnMgLmJ0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxufSIsIi5lcnJvci10ZW1wbGF0ZSB7XG4gIHBhZGRpbmc6IDQwcHggMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXJyb3ItYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5lcnJvci1hY3Rpb25zIC5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/features/not-found/not-found.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/features/not-found/not-found.component.ts ***!
    \***********************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppFeaturesNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent = function NotFoundComponent() {
      _classCallCheck(this, NotFoundComponent);
    };

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/not-found/not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.scss */
      "./src/app/features/not-found/not-found.component.scss")).default]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/features/shared/footer/footer.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/features/shared/footer/footer.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesSharedFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-footer {\n  background: #D4D2D2;\n  height: 80px;\n  border: 1px solid #eee;\n  padding: 25px;\n}\n\n.footer-left {\n  text-align: right;\n  font-size: 15px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2Zvb3Rlci9FOlxcRnJvbnRDYW1wXzIwMTlcXExlc3NvbjFcXEZyb250Q2FtcDIwMTlBbmd1bGFyTW9kdWxlUGFydDIzL3NyY1xcYXBwXFxmZWF0dXJlc1xcc2hhcmVkXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNENEQyRDI7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG4uZm9vdGVyLWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59IiwiLmFwcC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjRDREMkQyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5mb290ZXItbGVmdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/features/shared/footer/footer.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/features/shared/footer/footer.component.ts ***!
    \************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFeaturesSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/shared/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/features/shared/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/features/shared/header/header.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/features/shared/header/header.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesSharedHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-header {\n  background: #A5A1A1;\n  text-align: center;\n  padding: 16px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2hlYWRlci9FOlxcRnJvbnRDYW1wXzIwMTlcXExlc3NvbjFcXEZyb250Q2FtcDIwMTlBbmd1bGFyTW9kdWxlUGFydDIzL3NyY1xcYXBwXFxmZWF0dXJlc1xcc2hhcmVkXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNBNUExQTE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLmFwcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjQTVBMUExO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/features/shared/header/header.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/features/shared/header/header.component.ts ***!
    \************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppFeaturesSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.title = "";
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.title = this.title ? this.title : "BBC";
        }
      }]);

      return HeaderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/shared/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/features/shared/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/features/shared/menu/menu.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/features/shared/menu/menu.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesSharedMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-menu {\n  background: #D4D2D2;\n  padding: 16px;\n  height: 80px;\n}\n\n.container-left {\n  width: 50%;\n  text-align: left;\n  font-size: 15px;\n  font-weight: normal;\n  float: left;\n}\n\n.container-right {\n  width: 50%;\n  text-align: right;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL21lbnUvRTpcXEZyb250Q2FtcF8yMDE5XFxMZXNzb24xXFxGcm9udENhbXAyMDE5QW5ndWxhck1vZHVsZVBhcnQyMy9zcmNcXGFwcFxcZmVhdHVyZXNcXHNoYXJlZFxcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3NoYXJlZC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZDogI0Q0RDJEMjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLmNvbnRhaW5lci1sZWZ0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jb250YWluZXItcmlnaHQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuIiwiLmFwcC1tZW51IHtcbiAgYmFja2dyb3VuZDogI0Q0RDJEMjtcbiAgcGFkZGluZzogMTZweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uY29udGFpbmVyLWxlZnQge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29udGFpbmVyLXJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/features/shared/menu/menu.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/features/shared/menu/menu.component.ts ***!
    \********************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppFeaturesSharedMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_shared_notificationSvc_notification_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/shared/notificationSvc/notification-manager.service */
    "./src/app/services/shared/notificationSvc/notification-manager.service.ts");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(router, notification) {
        _classCallCheck(this, MenuComponent);

        this.router = router;
        this.notification = notification;
      }

      _createClass(MenuComponent, [{
        key: "onLogIn",
        value: function onLogIn() {
          this.notification.infoNotification("Feature coming soon");
        }
      }, {
        key: "onLogOut",
        value: function onLogOut() {
          this.notification.infoNotification("Feature coming soon");
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_shared_notificationSvc_notification_manager_service__WEBPACK_IMPORTED_MODULE_3__["NotificationManagerService"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/shared/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/features/shared/menu/menu.component.scss")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/models/article.ts":
  /*!***********************************!*\
    !*** ./src/app/models/article.ts ***!
    \***********************************/

  /*! exports provided: ArticleModel */

  /***/
  function srcAppModelsArticleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleModel", function () {
      return ArticleModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ArticleModel = function ArticleModel(_id, author, title, description, url, urlToImage, publishedAt, content) {
      _classCallCheck(this, ArticleModel);

      this._id = _id;
      this.author = author;
      this.title = title;
      this.description = description;
      this.url = url;
      this.urlToImage = urlToImage;
      this.publishedAt = publishedAt;
      this.content = content;
    };
    /***/

  },

  /***/
  "./src/app/models/local-storage-user-model.ts":
  /*!****************************************************!*\
    !*** ./src/app/models/local-storage-user-model.ts ***!
    \****************************************************/

  /*! exports provided: LocalStorageUserModel */

  /***/
  function srcAppModelsLocalStorageUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageUserModel", function () {
      return LocalStorageUserModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LocalStorageUserModel = function LocalStorageUserModel(name) {
      _classCallCheck(this, LocalStorageUserModel);

      this.name = name;
    };
    /***/

  },

  /***/
  "./src/app/models/server-update-model.ts":
  /*!***********************************************!*\
    !*** ./src/app/models/server-update-model.ts ***!
    \***********************************************/

  /*! exports provided: ServerUpdateModel */

  /***/
  function srcAppModelsServerUpdateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerUpdateModel", function () {
      return ServerUpdateModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ServerUpdateModel = function ServerUpdateModel(propName, value) {
      _classCallCheck(this, ServerUpdateModel);

      this.propName = propName;
      this.value = value;
    };
    /***/

  },

  /***/
  "./src/app/models/source-model.ts":
  /*!****************************************!*\
    !*** ./src/app/models/source-model.ts ***!
    \****************************************/

  /*! exports provided: SourceModel */

  /***/
  function srcAppModelsSourceModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceModel", function () {
      return SourceModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SourceModel = function SourceModel(id, name) {
      _classCallCheck(this, SourceModel);

      this.id = id;
      this.name = name;
    };
    /***/

  },

  /***/
  "./src/app/services/articleSvc/articles.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/articleSvc/articles.service.ts ***!
    \*********************************************************/

  /*! exports provided: ArticlesService */

  /***/
  function srcAppServicesArticleSvcArticlesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesService", function () {
      return ArticlesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var ArticlesService =
    /*#__PURE__*/
    function () {
      function ArticlesService(http) {
        _classCallCheck(this, ArticlesService);

        this.http = http;
        this.customApiUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "news/");
      }

      _createClass(ArticlesService, [{
        key: "getSources",
        value: function getSources(url) {
          return this.http.get(url);
        }
      }, {
        key: "getExternalArticles",
        value: function getExternalArticles(url) {
          return this.http.get(url);
        }
      }, {
        key: "getAllCustomArticles",
        value: function getAllCustomArticles() {
          return this.http.get("".concat(this.customApiUrl));
        }
      }, {
        key: "getCustomArticle",
        value: function getCustomArticle(id) {
          return this.http.get("".concat(this.customApiUrl).concat(id));
        }
      }, {
        key: "addNewArticle",
        value: function addNewArticle(article) {
          return this.http.post("".concat(this.customApiUrl), article);
        }
      }, {
        key: "updateArticle",
        value: function updateArticle(id, article) {
          return this.http.put("".concat(this.customApiUrl).concat(id), article);
        }
      }, {
        key: "deleteArticle",
        value: function deleteArticle(id) {
          return this.http.delete("".concat(this.customApiUrl).concat(id));
        }
      }]);

      return ArticlesService;
    }();

    ArticlesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ArticlesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ArticlesService);
    /***/
  },

  /***/
  "./src/app/services/factories/urlBuilderFactorySvc/url-builder-factory.service.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/services/factories/urlBuilderFactorySvc/url-builder-factory.service.ts ***!
    \****************************************************************************************/

  /*! exports provided: UrlBuilderFactoryService */

  /***/
  function srcAppServicesFactoriesUrlBuilderFactorySvcUrlBuilderFactoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlBuilderFactoryService", function () {
      return UrlBuilderFactoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_urlBuilders_sourcesUrlBuilderSvc_sources_url_builder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/urlBuilders/sourcesUrlBuilderSvc/sources-url-builder.service */
    "./src/app/services/urlBuilders/sourcesUrlBuilderSvc/sources-url-builder.service.ts");
    /* harmony import */


    var _services_urlBuilders_topHeadlinesUrlBuilderSvc_top_headlines_url_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/urlBuilders/topHeadlinesUrlBuilderSvc/top-headlines-url-builder.service */
    "./src/app/services/urlBuilders/topHeadlinesUrlBuilderSvc/top-headlines-url-builder.service.ts");

    var UrlBuilderFactoryService_1;

    var UrlBuilderFactoryService = UrlBuilderFactoryService_1 =
    /*#__PURE__*/
    function () {
      function UrlBuilderFactoryService() {
        _classCallCheck(this, UrlBuilderFactoryService);
      }

      _createClass(UrlBuilderFactoryService, [{
        key: "create",
        value: function create() {
          var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "topHeadlines";
          var UrlBuilder = UrlBuilderFactoryService_1.getBuilders()[type] || UrlBuilderFactoryService_1.getBuilders().topHeadLines;
          return new UrlBuilder();
        }
      }], [{
        key: "getBuilders",
        value: function getBuilders() {
          return {
            sources: _services_urlBuilders_sourcesUrlBuilderSvc_sources_url_builder_service__WEBPACK_IMPORTED_MODULE_2__["SourcesUrlBuilderService"],
            topHeadLines: _services_urlBuilders_topHeadlinesUrlBuilderSvc_top_headlines_url_builder_service__WEBPACK_IMPORTED_MODULE_3__["TopHeadlinesUrlBuilderService"]
          };
        }
      }]);

      return UrlBuilderFactoryService;
    }();

    UrlBuilderFactoryService = UrlBuilderFactoryService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UrlBuilderFactoryService);
    /***/
  },

  /***/
  "./src/app/services/shared/helperSvc/helper.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/shared/helperSvc/helper.service.ts ***!
    \*************************************************************/

  /*! exports provided: HelperService */

  /***/
  function srcAppServicesSharedHelperSvcHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperService", function () {
      return HelperService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../models/article */
    "./src/app/models/article.ts");
    /* harmony import */


    var _models_server_update_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../models/server-update-model */
    "./src/app/models/server-update-model.ts");

    var HelperService =
    /*#__PURE__*/
    function () {
      function HelperService() {
        _classCallCheck(this, HelperService);
      }

      _createClass(HelperService, null, [{
        key: "mapApiToArticle",
        value: function mapApiToArticle(apiArticle) {
          return new _models_article__WEBPACK_IMPORTED_MODULE_1__["ArticleModel"](apiArticle.source.id, apiArticle.author, apiArticle.title, apiArticle.description, apiArticle.url, apiArticle.urlToImage, apiArticle.publishedAt, apiArticle.content);
        }
      }, {
        key: "mapArticleToServerUpdateModel",
        value: function mapArticleToServerUpdateModel(article) {
          var articleEntries = Object.entries(article);
          var serverUpdateValue = articleEntries.map(function (item) {
            return new _models_server_update_model__WEBPACK_IMPORTED_MODULE_2__["ServerUpdateModel"](item[0], item[1]);
          });
          return serverUpdateValue;
        }
      }]);

      return HelperService;
    }();
    /***/

  },

  /***/
  "./src/app/services/shared/notificationSvc/notification-manager.service.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/services/shared/notificationSvc/notification-manager.service.ts ***!
    \*********************************************************************************/

  /*! exports provided: NotificationManagerService */

  /***/
  function srcAppServicesSharedNotificationSvcNotificationManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationManagerService", function () {
      return NotificationManagerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/fesm2015/angular2-notifications.js");

    var NotificationManagerService =
    /*#__PURE__*/
    function () {
      function NotificationManagerService(notificationService) {
        _classCallCheck(this, NotificationManagerService);

        this.notificationService = notificationService;
      }

      _createClass(NotificationManagerService, [{
        key: "okNotification",
        value: function okNotification(message) {
          this.notificationService.success('success', message);
        }
      }, {
        key: "alertNotification",
        value: function alertNotification(message) {
          this.notificationService.alert('alert', message);
        }
      }, {
        key: "errorNotification",
        value: function errorNotification(error) {
          this.notificationService.error(error.statusText, error.error.message);
        }
      }, {
        key: "infoNotification",
        value: function infoNotification(message) {
          this.notificationService.success("info", message);
        }
      }]);

      return NotificationManagerService;
    }();

    NotificationManagerService.ctorParameters = function () {
      return [{
        type: angular2_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]
      }];
    };

    NotificationManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationManagerService);
    /***/
  },

  /***/
  "./src/app/services/shared/pipes/filter-pipe.pipe.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/shared/pipes/filter-pipe.pipe.ts ***!
    \***********************************************************/

  /*! exports provided: ArticleFilterPipe */

  /***/
  function srcAppServicesSharedPipesFilterPipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleFilterPipe", function () {
      return ArticleFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ArticleFilterPipe =
    /*#__PURE__*/
    function () {
      function ArticleFilterPipe() {
        _classCallCheck(this, ArticleFilterPipe);
      }

      _createClass(ArticleFilterPipe, [{
        key: "transform",
        value: function transform(value, filter) {
          if (filter && value) {
            return value.filter(function (article) {
              return article.title.indexOf(filter) !== -1;
            });
          }

          return value;
        }
      }]);

      return ArticleFilterPipe;
    }();

    ArticleFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'articleFilter'
    })], ArticleFilterPipe);
    /***/
  },

  /***/
  "./src/app/services/urlBuilders/sourcesUrlBuilderSvc/sources-url-builder.service.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/services/urlBuilders/sourcesUrlBuilderSvc/sources-url-builder.service.ts ***!
    \******************************************************************************************/

  /*! exports provided: SourcesUrlBuilderService */

  /***/
  function srcAppServicesUrlBuildersSourcesUrlBuilderSvcSourcesUrlBuilderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourcesUrlBuilderService", function () {
      return SourcesUrlBuilderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _config_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../config/app.config */
    "./src/app/config/app.config.ts");

    var SourcesUrlBuilderService =
    /*#__PURE__*/
    function () {
      function SourcesUrlBuilderService() {
        _classCallCheck(this, SourcesUrlBuilderService);
      }

      _createClass(SourcesUrlBuilderService, [{
        key: "build",
        value: function build() {
          return "".concat(_config_app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].URL_SOURCES, "apiKey=").concat(_config_app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].API_KEY);
        }
      }]);

      return SourcesUrlBuilderService;
    }();
    /***/

  },

  /***/
  "./src/app/services/urlBuilders/topHeadlinesUrlBuilderSvc/top-headlines-url-builder.service.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/services/urlBuilders/topHeadlinesUrlBuilderSvc/top-headlines-url-builder.service.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: TopHeadlinesUrlBuilderService */

  /***/
  function srcAppServicesUrlBuildersTopHeadlinesUrlBuilderSvcTopHeadlinesUrlBuilderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopHeadlinesUrlBuilderService", function () {
      return TopHeadlinesUrlBuilderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _config_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../config/app.config */
    "./src/app/config/app.config.ts");

    var TopHeadlinesUrlBuilderService =
    /*#__PURE__*/
    function () {
      function TopHeadlinesUrlBuilderService() {
        _classCallCheck(this, TopHeadlinesUrlBuilderService);
      }

      _createClass(TopHeadlinesUrlBuilderService, [{
        key: "build",
        value: function build(sources) {
          return sources ? "".concat(_config_app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].URL_TOP_HEADLINES, "sources=").concat(sources, "&apiKey=").concat(_config_app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].API_KEY) : "".concat(_config_app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].URL_TOP_HEADLINES, "country=us&apiKey=").concat(_config_app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].API_KEY);
        }
      }]);

      return TopHeadlinesUrlBuilderService;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      apiUrl: 'http://localhost:3000/'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\FrontCamp_2019\Lesson1\FrontCamp2019AngularModulePart23\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map