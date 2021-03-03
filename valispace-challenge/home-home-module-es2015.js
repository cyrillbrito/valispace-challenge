(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/post-card/post-card.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/post-card/post-card.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n\n  <mat-card-header>\n    <mat-card-subtitle>{{ post.date }}</mat-card-subtitle>\n    <button mat-icon-button (click)=\"editPost(post)\" class=\"card-action\" *ngIf=\"!editing\">\n      <mat-icon>edit</mat-icon>\n    </button>\n  </mat-card-header>\n\n  <mat-card-content *ngIf=\"editing\">\n    <app-post-textarea [post]=\"post\"></app-post-textarea>\n  </mat-card-content>\n\n  <mat-card-content *ngIf=\"!editing\">\n    <ng-container *ngFor=\"let segment of segments\">\n      <span *ngIf=\"segment.employee\" class=\"user-highlight\" (click)=\"openEmployeeDetails(segment.employee)\">\n        {{ segment.text }}\n      </span>\n      <ng-container *ngIf=\"!segment.employee\">\n        {{ segment.text }}\n      </ng-container>\n    </ng-container>\n  </mat-card-content>\n\n  <mat-card-actions *ngIf=\"editing\">\n    <button mat-button (click)=\"cancelEdit(post)\">CANCEL</button>\n    <button mat-button color=\"accent\" (click)=\"update()\">UPDATE POST</button>\n  </mat-card-actions>\n\n</mat-card>\n\n<ng-template #details let-employee>\n  <h1>{{ employee.name }}</h1>\n  <mat-divider></mat-divider>\n  <p>Username: {{ employee.username }}</p>\n  <p>Phone: {{ employee.phone }}</p>\n  <p>Role: {{ employee.role }}</p>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/post-textarea/post-textarea.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/post-textarea/post-textarea.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field appearance=\"outline\">\n  <textarea #textarea matInput placeholder=\"What’s happening?\" rows=\"5\" (keydown.@)=\"open()\" [matAutocomplete]=\"auto\"\n    [matAutocompleteDisabled]=\"!show\" [(ngModel)]=\"post.text\">\n  </textarea>\n</mat-form-field>\n\n<mat-autocomplete #auto=\"matAutocomplete\" (closed)=\"close($event)\" (optionSelected)=\"optionSelected($event)\">\n  <mat-option *ngFor=\"let employee of employees$ | async\" [value]=\"employee.username\">\n    {{ employee.username }}\n  </mat-option>\n</mat-autocomplete>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/posts/posts.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/posts/posts.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n\n  <mat-card-content>\n    <app-post-textarea [(post)]=\"post\"></app-post-textarea>\n  </mat-card-content>\n\n  <mat-card-actions>\n    <button mat-button color=\"accent\" (click)=\"createPost()\">CREATE POST</button>\n  </mat-card-actions>\n\n</mat-card>\n\n<mat-divider></mat-divider>\n\n<app-post-card *ngFor=\"let post of posts$ | async\" [post]=\"post\">\n</app-post-card>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/home/posts/posts.component.ts");




const routes = [{ path: '', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"] }];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-card/post-card.component */ "./src/app/home/post-card/post-card.component.ts");
/* harmony import */ var _post_textarea_post_textarea_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-textarea/post-textarea.component */ "./src/app/home/post-textarea/post-textarea.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/home/posts/posts.component.ts");









let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_6__["PostCardComponent"],
            _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"],
            _post_textarea_post_textarea_component__WEBPACK_IMPORTED_MODULE_7__["PostTextareaComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/post-card/post-card.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/post-card/post-card.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card {\r\n  margin: 20px;\r\n}\r\n\r\n.user-highlight {\r\n  color: rgb(27, 149, 224);\r\n  cursor: pointer;\r\n}\r\n\r\n.user-highlight:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.card-action {\r\n  margin-left: auto;\r\n  margin-top: -10px;\r\n}\r\n\r\n.mat-card .mat-button {\r\n  margin-left: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wb3N0LWNhcmQvcG9zdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Bvc3QtY2FyZC9wb3N0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4udXNlci1oaWdobGlnaHQge1xyXG4gIGNvbG9yOiByZ2IoMjcsIDE0OSwgMjI0KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLWhpZ2hsaWdodDpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5jYXJkLWFjdGlvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCAubWF0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/post-card/post-card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/post-card/post-card.component.ts ***!
  \*******************************************************/
/*! exports provided: PostCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardComponent", function() { return PostCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/posts.service */ "./src/app/services/posts.service.ts");




let PostCardComponent = class PostCardComponent {
    constructor(postsService, dialog) {
        this.postsService = postsService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.segments = this.postsService.getPostSegments(this.post);
    }
    openEmployeeDetails(employee) {
        this.dialog.open(this.detailsTemplateRef, { data: employee });
    }
    editPost(post) {
        this.editing = true;
        this.original = post.text;
    }
    cancelEdit(post) {
        post.text = this.original;
        this.editing = false;
    }
    update() {
        this.postsService.update(this.post).subscribe(() => {
            this.segments = this.postsService.getPostSegments(this.post);
            this.editing = false;
        });
    }
};
PostCardComponent.ctorParameters = () => [
    { type: src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostCardComponent.prototype, "post", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('details', { static: false })
], PostCardComponent.prototype, "detailsTemplateRef", void 0);
PostCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/post-card/post-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-card.component.css */ "./src/app/home/post-card/post-card.component.css")).default]
    })
], PostCardComponent);



/***/ }),

/***/ "./src/app/home/post-textarea/post-textarea.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/post-textarea/post-textarea.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n}\r\n\r\ntextarea.mat-input-element {\r\n  resize: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wb3N0LXRleHRhcmVhL3Bvc3QtdGV4dGFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Bvc3QtdGV4dGFyZWEvcG9zdC10ZXh0YXJlYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG50ZXh0YXJlYS5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/post-textarea/post-textarea.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/post-textarea/post-textarea.component.ts ***!
  \***************************************************************/
/*! exports provided: PostTextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTextareaComponent", function() { return PostTextareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/employees.service */ "./src/app/services/employees.service.ts");



let PostTextareaComponent = class PostTextareaComponent {
    constructor(employeesService) {
        this.employeesService = employeesService;
    }
    ngOnInit() {
        this.employees$ = this.employeesService.list();
    }
    open() {
        this.show = true;
        this.original = this.post.text;
        this.cursor = this.textarea.nativeElement.selectionStart;
    }
    optionSelected(event) {
        const selected = event.option.value;
        this.post.text = this.original.slice(0, this.cursor) + '@' + selected + this.original.slice(this.cursor);
        this.success = true;
    }
    close() {
        if (!this.success) {
            this.post.text = this.original;
        }
        this.textarea.nativeElement.setSelectionRange(this.cursor, this.cursor);
        this.success = false;
        this.show = false;
    }
};
PostTextareaComponent.ctorParameters = () => [
    { type: src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_2__["EmployeesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostTextareaComponent.prototype, "post", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textarea', { static: false })
], PostTextareaComponent.prototype, "textarea", void 0);
PostTextareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-textarea',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-textarea.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/post-textarea/post-textarea.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-textarea.component.css */ "./src/app/home/post-textarea/post-textarea.component.css")).default]
    })
], PostTextareaComponent);



/***/ }),

/***/ "./src/app/home/posts/posts.component.css":
/*!************************************************!*\
  !*** ./src/app/home/posts/posts.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card {\r\n  margin: 20px;\r\n}\r\n\r\n.mat-card .mat-button {\r\n  margin-left: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wb3N0cy9wb3N0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wb3N0cy9wb3N0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCAubWF0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/posts/posts.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/posts/posts.component.ts ***!
  \***********************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");




let PostsComponent = class PostsComponent {
    constructor(postsService, dialog) {
        this.postsService = postsService;
        this.dialog = dialog;
        this.post = { text: '' };
    }
    ngOnInit() {
        this.posts$ = this.postsService.list();
    }
    createPost() {
        if (this.post.text.length) {
            this.post.date = new Date().toLocaleString();
            this.postsService.create(this.post).subscribe(() => {
                this.post = { text: '' };
                this.posts$ = this.postsService.list();
            });
        }
    }
};
PostsComponent.ctorParameters = () => [
    { type: _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/posts/posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.component.css */ "./src/app/home/posts/posts.component.css")).default]
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/services/posts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees.service */ "./src/app/services/employees.service.ts");





const INITIAL_DATA = [
    { id: 4, date: new Date(2021, 2, 4).toLocaleString(), text: 'Welcome to the company @1!!!' },
    { id: 3, date: new Date(2021, 2, 3).toLocaleString(), text: 'Thanks, @2, @3, @4' },
    { id: 2, date: new Date(2021, 2, 2).toLocaleString(), text: '@3 @2 @5' },
    { id: 1, date: new Date(2021, 2, 1).toLocaleString(), text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut tortor augue, commodo id commodo vitae, aliquam sit amet neque.Sed eu bibendum arcu.Suspendisse non tincidunt ligula.Praesent vel ipsum velit.Proin ante lacus, vulputate et accumsan sed, facilisis quis eros.Proin et imperdiet ipsum.Proin eget dictum lacus.Phasellus elementum eros eget urna faucibus luctus.Praesent ac sollicitudin nisi, at laoreet enim.Suspendisse potenti.Pellentesque efficitur tellus ac purus imperdiet luctus.Vestibulum id nulla ut est porta hendrerit.Aliquam pulvinar pretium diam at aliquam.' },
];
let PostsService = class PostsService {
    constructor(employeesService) {
        this.employeesService = employeesService;
        this.employeesService.list().subscribe(employees => this.employees = employees);
    }
    list() {
        const stored = localStorage.getItem('valispace-challenge-posts');
        if (stored) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(stored));
        }
        localStorage.setItem('valispace-challenge-posts', JSON.stringify(INITIAL_DATA));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(INITIAL_DATA);
    }
    create(post) {
        return this.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(posts => {
            post.id = posts[posts.length - 1].id + 1;
            this.parsePostToSave(post);
            posts.unshift(post);
            localStorage.setItem('valispace-challenge-posts', JSON.stringify(posts));
        }));
    }
    update(post) {
        return this.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(posts => {
            const index = posts.findIndex(p => p.id === post.id);
            posts[index] = post;
            this.parsePostToSave(post);
            localStorage.setItem('valispace-challenge-posts', JSON.stringify(posts));
        }));
    }
    parsePostToSave(post) {
        const regExp = /@[\w\-_]+/g;
        const matches = post.text.match(regExp);
        if (matches) {
            for (const match of matches) {
                const username = match.slice(1);
                const employee = this.employees.find(e => e.username === username);
                if (employee) {
                    const index = post.text.indexOf(match);
                    post.text = this.replaceInIndex(post.text, index + 1, employee.id, username.length);
                }
            }
        }
        return post;
    }
    getPostSegments(post) {
        const segments = [];
        const regExp = /@\d+/g;
        const matches = post.text.match(regExp);
        let lastIndex = 0;
        if (matches) {
            for (const match of matches) {
                const id = Number(match.slice(1));
                const employee = this.employees.find(e => e.id === id);
                if (employee) {
                    const index = post.text.indexOf(match, lastIndex);
                    if (lastIndex < index) {
                        segments.push({ text: post.text.substr(lastIndex, index - lastIndex) });
                    }
                    segments.push({ text: '@' + employee.username, employee });
                    post.text = this.replaceInIndex(post.text, index + 1, employee.username, match.length - 1);
                    lastIndex = index + employee.username.length + 1;
                }
            }
        }
        if (lastIndex < post.text.length) {
            segments.push({ text: post.text.substr(lastIndex, post.text.length - lastIndex) });
        }
        return segments;
    }
    replaceInIndex(str, index, replacer, length) {
        return str.slice(0, index) + replacer + str.slice(index + length);
    }
};
PostsService.ctorParameters = () => [
    { type: _employees_service__WEBPACK_IMPORTED_MODULE_4__["EmployeesService"] }
];
PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostsService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map