(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~category-detail-category-detail-module~home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/components/cart-button/cart-button.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/components/cart-button/cart-button.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-chip (click)=\"openCart()\">\n    <ion-icon name=\"cart\"></ion-icon>\n    <ion-badge>{{ total$ | async }}</ion-badge>\n</ion-chip>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/components/cart/cart.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/components/cart/cart.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-button slot=\"icon-only\" (click)=\"dismiss()\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Resumen</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button slot=\"icon-only\"><ion-icon name=\"print\"></ion-icon></ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-list *ngFor=\"let categorySumm of cartStateSummary | keyvalue\">\r\n        <ion-list-header>\r\n            <div class=\"category-title\">\r\n                <ion-icon [name]=\"categorySumm.value.category.icon\"></ion-icon>\r\n                <ion-label>{{ categorySumm.key }}</ion-label>\r\n            </div>\r\n        </ion-list-header>\r\n        <ion-item *ngFor=\"let typeTickets of categorySumm.value.tickets | keyvalue\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <tb-ticket [ticket]=\"typeTickets.value.ticket\"></tb-ticket>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-label> X {{ typeTickets.value.units }}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col> = {{ typeTickets.value.total }} € </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-item>\r\n    </ion-list>\r\n    <!-- <ion-list>\r\n        <ion-item *ngFor=\"let item of ticketsByType | keyvalue\">\r\n            <ion-avatar slot=\"start\">\r\n                <ion-icon [name]=\"item.value.ticket.category.icon\" size=\"large\"></ion-icon>\r\n            </ion-avatar>\r\n            <ion-label>{{ item.key }}</ion-label>\r\n            <div class=\"item-note\" slot=\"end\">{{ item.value.units }}</div>\r\n            <div class=\"item-note\" slot=\"end\">{{ item.value.total }} €</div>\r\n        </ion-item>\r\n    </ion-list> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/components/ticket/ticket.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/components/ticket/ticket.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n    <ion-card-header>\r\n        <ion-label>Kiosko El Korner</ion-label>\r\n    </ion-card-header>\r\n    <ion-card-content *ngIf=\"!!ticket\">\r\n        <div class=\"ticket-content\">\r\n            <ion-icon [name]=\"ticket.category.icon\" size=\"large\"></ion-icon>\r\n            <ion-label>{{ ticket.type.name | uppercase }}</ion-label>\r\n        </div>\r\n        <div class=\"ticket-price\">\r\n            <ion-label slot=\"end\">{{ ticket.type.price }} €</ion-label>\r\n        </div>\r\n    </ion-card-content>\r\n</ion-card>\r\n");

/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _cart_store_cart_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart/store/cart.reducer */ "./src/app/cart/store/cart.reducer.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/cart/components/cart/cart.component.ts");
/* harmony import */ var _components_cart_button_cart_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cart-button/cart-button.component */ "./src/app/cart/components/cart-button/cart-button.component.ts");
/* harmony import */ var _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ticket/ticket.component */ "./src/app/cart/components/ticket/ticket.component.ts");










let CartModule = class CartModule {
};
CartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_cart_store_cart_reducer__WEBPACK_IMPORTED_MODULE_6__["cartFeatureKey"], _cart_store_cart_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"])],
        declarations: [_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"], _components_cart_button_cart_button_component__WEBPACK_IMPORTED_MODULE_8__["CartButtonComponent"], _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_9__["TicketComponent"]],
        entryComponents: [_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"]],
        exports: [_components_cart_button_cart_button_component__WEBPACK_IMPORTED_MODULE_8__["CartButtonComponent"]],
    })
], CartModule);



/***/ }),

/***/ "./src/app/cart/components/cart-button/cart-button.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/cart/components/cart-button/cart-button.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY29tcG9uZW50cy9jYXJ0LWJ1dHRvbi9jYXJ0LWJ1dHRvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/cart/components/cart-button/cart-button.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/cart/components/cart-button/cart-button.component.ts ***!
  \**********************************************************************/
/*! exports provided: CartButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartButtonComponent", function() { return CartButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _store_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/cart.service */ "./src/app/cart/store/cart.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/cart/components/cart/cart.component.ts");





let CartButtonComponent = class CartButtonComponent {
    constructor(modalController, cartService) {
        this.modalController = modalController;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.total$ = this.cartService.getTotal();
    }
    openCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"],
            });
            return yield modal.present();
        });
    }
};
CartButtonComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _store_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
CartButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tb-cart-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/components/cart-button/cart-button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart-button.component.css */ "./src/app/cart/components/cart-button/cart-button.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _store_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
], CartButtonComponent);



/***/ }),

/***/ "./src/app/cart/components/cart/cart.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/cart/components/cart/cart.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".category-title ion-label {\n  font-size: 1.4rem;\n}\n.category-title ion-icon {\n  font-size: 1.2rem;\n  padding-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jb21wb25lbnRzL2NhcnQvRTpcXFByb3llY3Rvc1xcTXkgUHJvamVjdHNcXHRpY2tldC1iYXIvc3JjXFxhcHBcXGNhcnRcXGNvbXBvbmVudHNcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnQvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtBQ0FSO0FERUk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LXRpdGxlIHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICB9XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIH1cclxufVxyXG4iLCIuY2F0ZWdvcnktdGl0bGUgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4uY2F0ZWdvcnktdGl0bGUgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cart/components/cart/cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cart/components/cart/cart.component.ts ***!
  \********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _store_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/cart.service */ "./src/app/cart/store/cart.service.ts");




let CartComponent = class CartComponent {
    constructor(modalCtrl, cartService) {
        this.modalCtrl = modalCtrl;
        this.cartService = cartService;
        this.cartStateSummary = {};
    }
    ngOnInit() {
        this.cartService.getCart().subscribe({
            next: cartState => {
                this.cartStateSummary = cartState.summary;
            },
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
CartComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _store_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tb-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/components/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/components/cart/cart.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _store_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
], CartComponent);



/***/ }),

/***/ "./src/app/cart/components/ticket/ticket.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/cart/components/ticket/ticket.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  width: 16rem;\n}\n\n.ticket-icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.ticket-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\n.ticket-content ion-label {\n  font-size: 1.4rem;\n}\n\n.ticket-content ion-icon {\n  padding-right: 1rem;\n}\n\n.ticket-price {\n  display: block;\n  float: right;\n}\n\n.ticket-price ion-label {\n  font-size: x-large;\n  font-weight: bold;\n  padding-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jb21wb25lbnRzL3RpY2tldC9FOlxcUHJveWVjdG9zXFxNeSBQcm9qZWN0c1xcdGlja2V0LWJhci9zcmNcXGFwcFxcY2FydFxcY29tcG9uZW50c1xcdGlja2V0XFx0aWNrZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnQvY29tcG9uZW50cy90aWNrZXQvdGlja2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNHSjs7QURESTtFQUNJLGlCQUFBO0FDR1I7O0FEREk7RUFDSSxtQkFBQTtBQ0dSOztBREFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNHSjs7QURESTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jb21wb25lbnRzL3RpY2tldC90aWNrZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMTZyZW07XHJcbn1cclxuLnRpY2tldC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRpY2tldC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG59XHJcbi50aWNrZXQtcHJpY2Uge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgfVxyXG59XHJcbiIsImlvbi1jYXJkIHtcbiAgd2lkdGg6IDE2cmVtO1xufVxuXG4udGlja2V0LWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRpY2tldC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnRpY2tldC1jb250ZW50IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLnRpY2tldC1jb250ZW50IGlvbi1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLnRpY2tldC1wcmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG59XG4udGlja2V0LXByaWNlIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cart/components/ticket/ticket.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cart/components/ticket/ticket.component.ts ***!
  \************************************************************/
/*! exports provided: TicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function() { return TicketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TicketComponent = class TicketComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TicketComponent.prototype, "ticket", void 0);
TicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tb-ticket',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ticket.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/components/ticket/ticket.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ticket.component.scss */ "./src/app/cart/components/ticket/ticket.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TicketComponent);



/***/ }),

/***/ "./src/app/cart/store/cart.actions.ts":
/*!********************************************!*\
  !*** ./src/app/cart/store/cart.actions.ts ***!
  \********************************************/
/*! exports provided: loadCart, loadCartSuccess, loadCartFailure, addTicket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCart", function() { return loadCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCartSuccess", function() { return loadCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCartFailure", function() { return loadCartFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTicket", function() { return addTicket; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const loadCart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Cart] Load Cart');
const loadCartSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Cart] Load Cart Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const loadCartFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Cart] Load Cart Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const addTicket = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Cart] Add Ticket', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/cart/store/cart.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/cart/store/cart.reducer.ts ***!
  \********************************************/
/*! exports provided: cartFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartFeatureKey", function() { return cartFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.actions */ "./src/app/cart/store/cart.actions.ts");



const cartFeatureKey = 'cart';
const initialState = {
    ticketsCount: 0,
};
const cartReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_cart_actions__WEBPACK_IMPORTED_MODULE_2__["loadCart"], state => state), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_cart_actions__WEBPACK_IMPORTED_MODULE_2__["loadCartSuccess"], (state, action) => state), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_cart_actions__WEBPACK_IMPORTED_MODULE_2__["loadCartFailure"], (state, action) => state), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_cart_actions__WEBPACK_IMPORTED_MODULE_2__["addTicket"], (state, action) => addTicketToState(state, action.ticket)));
const addTicketToState = (state, ticket) => {
    const category = ticket.category;
    const categorySumm = !!state.summary && state.summary[category.name] ? state.summary[category.name] : {};
    const ticketSumm = !!state.summary && state.summary[category.name] ? state.summary[category.name].tickets : {};
    return {
        summary: Object.assign({}, state.summary, { [category.name]: Object.assign({}, categorySumm, { category, tickets: createOrUpdateTicketSummary(ticket, ticketSumm) }) }),
        ticketsCount: state.ticketsCount + 1,
    };
};
/**
 * If the ticket type not already exists in the tickets summary, this is created.
 * Otherwise, the units and total are updated.
 */
const createOrUpdateTicketSummary = (ticket, ticketsSumm) => {
    const ticketType = ticket.type.name;
    const ticketTypeFound = ticketsSumm[ticketType];
    const units = !!ticketTypeFound ? ticketTypeFound.units + 1 : 1;
    const total = ticket.type.price * units;
    return Object.assign({}, ticketsSumm, { [ticket.type.name]: {
            ticket,
            units,
            total,
        } });
};
function reducer(state, action) {
    return cartReducer(state, action);
}


/***/ }),

/***/ "./src/app/cart/store/cart.selectors.ts":
/*!**********************************************!*\
  !*** ./src/app/cart/store/cart.selectors.ts ***!
  \**********************************************/
/*! exports provided: selectCartState, selectCartTotal, selectTicketsTypeCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCartState", function() { return selectCartState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCartTotal", function() { return selectCartTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTicketsTypeCount", function() { return selectTicketsTypeCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.reducer */ "./src/app/cart/store/cart.reducer.ts");



const selectCartState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__["cartFeatureKey"]);
const selectCartTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCartState, (state) => state.ticketsCount);
const selectTicketsTypeCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCartState, (state, ticketType) => !!state.summary
    ? Object.keys(state.summary).reduce((acc, categoryName) => acc + countTicketsByType(ticketType, state.summary[categoryName].tickets), 0)
    : 0);
const countTicketsByType = (ticketType, ticketSummary) => {
    return !!ticketSummary
        ? Object.keys(ticketSummary)
            .filter(tt => tt === ticketType)
            .reduce((count, tt) => ticketSummary[tt].units + count, 0)
        : 0;
};


/***/ }),

/***/ "./src/app/cart/store/cart.service.ts":
/*!********************************************!*\
  !*** ./src/app/cart/store/cart.service.ts ***!
  \********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.actions */ "./src/app/cart/store/cart.actions.ts");
/* harmony import */ var _cart_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.selectors */ "./src/app/cart/store/cart.selectors.ts");





let CartService = class CartService {
    constructor(store) {
        this.store = store;
    }
    loadCart() {
        this.store.dispatch(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["loadCart"]());
    }
    addTicket(ticket) {
        this.store.dispatch(_cart_actions__WEBPACK_IMPORTED_MODULE_3__["addTicket"]({ ticket }));
    }
    getTotal() {
        return this.store.select(_cart_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCartTotal"]);
    }
    getTicketsTypeCount(ticketType) {
        return this.store.select(_cart_selectors__WEBPACK_IMPORTED_MODULE_4__["selectTicketsTypeCount"], ticketType.name);
    }
    getCart() {
        return this.store.select(_cart_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCartState"]);
    }
};
CartService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], CartService);



/***/ }),

/***/ "./src/app/common/services/categories.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/services/categories.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoriesService = class CategoriesService {
    constructor() {
        this.foodTickets = [
            { name: 'Hamburguesa', price: 3.5 },
            { name: 'Pinchito', price: 3.5 },
            { name: 'Campero', price: 3.5 },
            { name: 'Patatas', price: 2 },
        ];
        this.drinkTickets = [
            { name: 'Combinado', price: 4 },
            { name: 'Refresco', price: 2.5 },
            { name: 'Agua', price: 1 },
        ];
        this.categories = [
            { id: '1', name: 'Bebida', icon: 'beer', color: 'food', tickets: this.drinkTickets },
            { id: '2', name: 'Comida', icon: 'pizza', color: 'drink', tickets: this.foodTickets },
            { id: '3', name: 'Otros', icon: 'wine', color: 'warning' },
        ];
    }
    getAllCategories() {
        return this.categories;
    }
    getCategory(id) {
        return this.categories.find(c => c.id === id);
    }
};
CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoriesService);



/***/ })

}]);
//# sourceMappingURL=default~category-detail-category-detail-module~home-home-module-es2015.js.map