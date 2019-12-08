(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Order History\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngFor=\"let item of orderList\" class=\"welcome-card\" >\n        <ion-card-header>\n          <ion-card-title>{{ item.name }}</ion-card-title>\n  \n          <ion-card-subtitle>ID: {{ item.id }}</ion-card-subtitle>\n          <ion-card-subtitle>PRICE: {{ item.price }} &euro;</ion-card-subtitle>\n          <ion-card-subtitle class=\"user\">USER: {{ item.user }} </ion-card-subtitle>\n        </ion-card-header>\n    \n      </ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-title {\n  font-size: 15px;\n  color: #404040;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXGlnb3JiXFxEZXNrdG9wXFxoYWNrYXRvbl9hbHRyYW5cXGlvbmljXFxmb29kdHJhY2svc3JjXFxhcHBcXHRhYjJcXHRhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0csZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuIGlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzQwNDA0MDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9IiwiaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNDA0MDQwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tab1_orders_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../tab1/orders/state */ "./src/app/tab1/orders/state.ts");



let Tab2Page = class Tab2Page {
    constructor() {
        this.orderList = [
            { id: "29734", name: "Feijoada", price: 5.99, user: "DiogoN", state: _tab1_orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "bacalhau.jpg" },
            { id: "98312", name: "Pernas de Frango", price: 7.39, user: "Asgard", state: _tab1_orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "frango.png" },
            { id: "42355", name: "Caldo Verde", price: 10.45, user: "RogueLiker", state: _tab1_orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "caldo.jpg" },
            { id: "19347", name: "Vitela Estufada", price: 12.45, user: "Megaman2", state: _tab1_orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "cozido.jpg" },
            { id: "29734", name: "Legumes Cozidos", price: 5.99, user: "DiogoN", state: _tab1_orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "bacalhau.jpg" },
            { id: "98312", name: "Bifes com Míscaros", price: 6.39, user: "Asgard", state: _tab1_orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "frango.png" },
            { id: "42355", name: "Robalo", price: 1.99, user: "RogueLiker", state: _tab1_orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "caldo.jpg" },
            { id: "19347", name: "Petingas", price: 12.45, user: "Megaman2", state: _tab1_orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "cozido.jpg" },
        ];
    }
};
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map