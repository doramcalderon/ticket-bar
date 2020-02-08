(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-detail-category-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category-detail/category-detail.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category-detail/category-detail.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryDetailCategoryDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{ category?.name }}</ion-title>\r\n        <tb-cart-button slot=\"end\"></tb-cart-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid *ngIf=\"!!category\">\r\n        <ion-row>\r\n            <ion-col col-md-4 *ngFor=\"let ticketType of category.tickets\">\r\n                <ion-card button=\"true\" (click)=\"addTicket(ticketType)\">\r\n                    <ion-card-header>\r\n                        <ion-item lines=\"none\">\r\n                            <ion-label>{{ ticketType.name }}</ion-label>\r\n                            <ion-badge slot=\"end\">{{ ticketsCountByType$[ticketType.name] | async }}</ion-badge>\r\n                        </ion-item>\r\n                    </ion-card-header>\r\n                    <ion-card-content><ion-label class=\"price\">{{ ticketType.price }} €</ion-label></ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/category-detail/category-detail-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/category-detail/category-detail-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CategoryDetailPageRoutingModule */

  /***/
  function srcAppCategoryDetailCategoryDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryDetailPageRoutingModule", function () {
      return CategoryDetailPageRoutingModule;
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


    var _category_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category-detail.page */
    "./src/app/category-detail/category-detail.page.ts");

    const routes = [{
      path: '',
      component: _category_detail_page__WEBPACK_IMPORTED_MODULE_3__["CategoryDetailPage"]
    }];
    let CategoryDetailPageRoutingModule = class CategoryDetailPageRoutingModule {};
    CategoryDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoryDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/category-detail/category-detail.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/category-detail/category-detail.module.ts ***!
    \***********************************************************/

  /*! exports provided: CategoryDetailPageModule */

  /***/
  function srcAppCategoryDetailCategoryDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryDetailPageModule", function () {
      return CategoryDetailPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _category_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category-detail-routing.module */
    "./src/app/category-detail/category-detail-routing.module.ts");
    /* harmony import */


    var _category_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category-detail.page */
    "./src/app/category-detail/category-detail.page.ts");
    /* harmony import */


    var _cart_cart_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../cart/cart.module */
    "./src/app/cart/cart.module.ts");

    let CategoryDetailPageModule = class CategoryDetailPageModule {};
    CategoryDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryDetailPageRoutingModule"], _cart_cart_module__WEBPACK_IMPORTED_MODULE_7__["CartModule"]],
      declarations: [_category_detail_page__WEBPACK_IMPORTED_MODULE_6__["CategoryDetailPage"]]
    })], CategoryDetailPageModule);
    /***/
  },

  /***/
  "./src/app/category-detail/category-detail.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/category-detail/category-detail.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryDetailCategoryDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".price {\n  font-size: x-large;\n  padding-left: 20%;\n}\n\nion-card-header {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnktZGV0YWlsL0U6XFxQcm95ZWN0b3NcXE15IFByb2plY3RzXFx0aWNrZXQtYmFyL3NyY1xcYXBwXFxjYXRlZ29yeS1kZXRhaWxcXGNhdGVnb3J5LWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5LWRldGFpbC9jYXRlZ29yeS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LWRldGFpbC9jYXRlZ29yeS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGItY2F0ZWdvcnktZGV0YWlsIHtcclxuLnByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG59XHJcbmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuLy8gfVxyXG4iLCIucHJpY2Uge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/category-detail/category-detail.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/category-detail/category-detail.page.ts ***!
    \*********************************************************/

  /*! exports provided: CategoryDetailPage */

  /***/
  function srcAppCategoryDetailCategoryDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryDetailPage", function () {
      return CategoryDetailPage;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _cart_store_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../cart/store/cart.service */
    "./src/app/cart/store/cart.service.ts");
    /* harmony import */


    var _common_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/services/categories.service */
    "./src/app/common/services/categories.service.ts");

    let CategoryDetailPage = class CategoryDetailPage {
      constructor(route, categoriesService, cartService) {
        this.route = route;
        this.categoriesService = categoriesService;
        this.cartService = cartService;
        this.summary = {};
        this.ticketsCountByType$ = {};
      }

      ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(params => this.categoriesService.getCategory(params.get('categoryId')))).subscribe(c => {
          this.category = c;
          this.initSummary();
        });
      }

      addTicket(type) {
        this.cartService.addTicket({
          type,
          category: this.category
        });
      }

      initSummary() {
        if (!!this.category.tickets) {
          this.category.tickets.forEach(ticketType => {
            this.ticketsCountByType$[ticketType.name] = this.cartService.getTicketsTypeCount(ticketType);
          });
        }
      }

    };

    CategoryDetailPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _common_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]
    }, {
      type: _cart_store_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
    }];

    CategoryDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tb-category-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category-detail/category-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-detail.page.scss */
      "./src/app/category-detail/category-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _common_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"], _cart_store_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])], CategoryDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=category-detail-category-detail-module-es5.js.map