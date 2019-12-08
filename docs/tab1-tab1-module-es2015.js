(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\r\n  <ion-toolbar>\r\n    <ion-title class=\"orderHeader\">\r\n        <img src=\"./../../assets/foodtrack_icon.png\" class=\"headerIcon\">\r\n      Orders\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"orderList\">\r\n\r\n    <div class=\"noOrders\" *ngIf=\"checkNoOrders()\">There are currently no orders.</div>\r\n  \r\n    <ion-card *ngFor=\"let item of orderList\" class=\"welcome-card\" >\r\n      <ion-img class=\"cardTopImage\" [src]=\"getImagePath(item)\"></ion-img>\r\n      <ion-card-header>\r\n        <ion-card-title>{{ item.name }}</ion-card-title>\r\n\r\n        <ion-segment color=\"primary\" class=\"stateRadio\" (ionChange)=\"segmentChanged($event)\">\r\n            <ion-segment-button value=\"READY\">\r\n              <ion-label>Ready</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"COOKING\">\r\n              <ion-label>Cooking</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"TO_DELIVER\">\r\n              <ion-label>To Deliver</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"CANCELLED\">\r\n              <ion-label>Cancelled</ion-label>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n\r\n        <ion-card-subtitle>ID: {{ item.id }}</ion-card-subtitle>\r\n        <ion-card-subtitle>PRICE: {{ item.price }} &euro;</ion-card-subtitle>\r\n        <ion-card-subtitle class=\"user\">USER: {{ item.user }} </ion-card-subtitle>\r\n      </ion-card-header>\r\n      <div class=\"buttonContainer\">\r\n        <ion-button fill=\"outline\" expand=\"block\" color=\"success\" (click)=\"finishOrder(item)\">Finish Order</ion-button>\r\n      </div>\r\n    </ion-card>\r\n\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.orderHeader {\n  background-color: red;\n  color: white;\n}\n\n.headerIcon {\n  width: 20%;\n  height: 20%;\n}\n\n.noOrders {\n  font-size: 16px !important;\n  float: none !important;\n  text-align: center !important;\n  width: 100%;\n  color: #747373;\n  margin-top: 80% !important;\n}\n\n#orderList {\n  background-color: #c52641;\n}\n\n#orderList ion-card {\n  border: 1px solid gray;\n}\n\n#orderList ion-card .cardTopImage {\n  margin-top: 40px !important;\n  width: 350px;\n  height: 140px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n#orderList ion-card .buttonContainer ion-button {\n  margin-bottom: 10px;\n  background-color: #a1f8d1;\n}\n\n#orderList ion-label {\n  font-size: 22px;\n}\n\n#orderList ion-card-title {\n  font-size: 20px;\n  color: #404040;\n}\n\n#orderList ion-card-subtitle {\n  font-size: 12px;\n  margin-top: 15px;\n}\n\n#orderList ion-segment {\n  padding-top: 10px;\n}\n\n#orderList ion-segment-button {\n  width: 25%;\n}\n\n#orderList ion-segment ion-label {\n  font-size: 10px;\n  font-weight: lighter;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXGlnb3JiXFxEZXNrdG9wXFxoYWNrYXRvbl9hbHRyYW5cXGlvbmljXFxmb29kdHJhY2svc3JjXFxhcHBcXHRhYjFcXHRhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0UsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREdBO0VBd0JJLHlCQUFBO0FDdkJKOztBRENFO0VBQ0Usc0JBQUE7QUNDSjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURNTTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUNKUjs7QURTSTtFQUNFLGVBQUE7QUNQTjs7QURXSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDVE47O0FEY0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURlRTtFQUNFLGlCQUFBO0FDYko7O0FEZ0JFO0VBQ0UsVUFBQTtBQ2RKOztBRGlCRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ2ZKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm9yZGVySGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGVcbn1cblxuLmhlYWRlckljb257XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjAlO1xuXG59XG5cbi5ub09yZGVyc3tcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZsb2F0Om5vbmUgICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNzQ3MzczO1xuICBtYXJnaW4tdG9wOjgwJSAhaW1wb3J0YW50O1xufVxuXG4jb3JkZXJMaXN0e1xuICBcbiAgaW9uLWNhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG5cblxuLmNhcmRUb3BJbWFnZXtcbiAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG5cbiAgICAuYnV0dG9uQ29udGFpbmVye1xuXG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ExZjhkMVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDM4LCA2NSk7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gXG5cbiAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiAjNDA0MDQwXG4gICAgfVxuXG4gIFxuXG4gIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gIGlvbi1zZWdtZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgd2lkdGg6MjUlXG4gIH1cblxuICBpb24tc2VnbWVudCAgaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgfVxuXG4gIC51c2Vye1xuXG4gIH1cblxuXG4gIFxufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm9yZGVySGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXJJY29uIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5ub09yZGVycyB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNzQ3MzczO1xuICBtYXJnaW4tdG9wOiA4MCUgIWltcG9ydGFudDtcbn1cblxuI29yZGVyTGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNTI2NDE7XG59XG4jb3JkZXJMaXN0IGlvbi1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cbiNvcmRlckxpc3QgaW9uLWNhcmQgLmNhcmRUb3BJbWFnZSB7XG4gIG1hcmdpbi10b3A6IDQwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbiNvcmRlckxpc3QgaW9uLWNhcmQgLmJ1dHRvbkNvbnRhaW5lciBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExZjhkMTtcbn1cbiNvcmRlckxpc3QgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuI29yZGVyTGlzdCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM0MDQwNDA7XG59XG4jb3JkZXJMaXN0IGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuI29yZGVyTGlzdCBpb24tc2VnbWVudCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuI29yZGVyTGlzdCBpb24tc2VnbWVudC1idXR0b24ge1xuICB3aWR0aDogMjUlO1xufVxuI29yZGVyTGlzdCBpb24tc2VnbWVudCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _orders_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders/state */ "./src/app/tab1/orders/state.ts");



let Tab1Page = class Tab1Page {
    constructor() {
        this.orderList = [
            { id: "29734", name: "Bacalhau a Brás", price: 5.99, user: "DiogoN", state: _orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "bacalhau.jpg" },
            { id: "98312", name: "Pernas de Frango", price: 4.39, user: "Asgard", state: _orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "frango.png" },
            { id: "42355", name: "Caldo Verde", price: 1.99, user: "RogueLiker", state: _orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "caldo.jpg" },
            { id: "19347", name: "Cozido a Portuguesa", price: 12.45, user: "Megaman2", state: _orders_state__WEBPACK_IMPORTED_MODULE_2__["STATE"].COOKING, image: "cozido.jpg" },
        ];
    }
    getImagePath(item) {
        return `${"/assets/menu/"}${item.image}`;
    }
    finishOrder(item) {
        this.orderList = this.orderList.filter((el) => el.id !== item.id);
    }
    checkNoOrders() {
        return this.orderList.length === 0;
    }
};
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map