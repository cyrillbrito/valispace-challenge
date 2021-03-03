function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee-form/employee-form.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee-form/employee-form.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminEmployeeFormEmployeeFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n\n  <div class=\"header\">\n    <h1>{{ isCreate ? 'Create Employee' : 'Edit Employee' }}</h1>\n    <div>\n      <button mat-raised-button (click)=\"goBack()\">\n        CANCEL\n      </button>\n      <button mat-raised-button color=\"accent\" type=\"submit\">\n        SAVE\n      </button>\n    </div>\n  </div>\n\n\n  {{ idError | json}}\n  <div class=\"mat-elevation-z8\">\n\n    <mat-form-field>\n      <input matInput type=\"number\" placeholder=\"Id\" formControlName=\"id\">\n      <mat-error *ngIf=\"form.controls.id.hasError('required')\">\n        is required\n      </mat-error>\n      <mat-error *ngIf=\"form.controls.id.hasError('unique')\">\n        is already in use\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Username\" formControlName=\"username\">\n      <mat-error *ngIf=\"form.controls.username.hasError('required')\">\n        is required\n      </mat-error>\n      <mat-error *ngIf=\"form.controls.username.hasError('pattern')\">\n        can only have letters, numbers, -, _\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"number\" placeholder=\"Phone\" formControlName=\"phone\">\n      <mat-error *ngIf=\"form.controls.phone.hasError('required')\">\n        is required\n      </mat-error>\n      <mat-error *ngIf=\"form.controls.phone.hasError('unique')\">\n        is already in use\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Role\" formControlName=\"role\">\n      <mat-error *ngIf=\"form.controls.role.hasError('required')\">\n        is required\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"form.controls.name.hasError('required')\">\n        is required\n      </mat-error>\n    </mat-form-field>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee-list/employee-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee-list/employee-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminEmployeeListEmployeeListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\n  <h1>Employees List</h1>\n\n  <button mat-raised-button routerLink=\"create\" color=\"primary\">\n    Create Employee\n  </button>\n\n</div>\n\n\n<table mat-table [dataSource]=\"employees$\" class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef>ID</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.id }}</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"username\">\n    <th mat-header-cell *matHeaderCellDef>Username</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.username }}</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"phone\">\n    <th mat-header-cell *matHeaderCellDef>Phone</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.phone }}</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"role\">\n    <th mat-header-cell *matHeaderCellDef>Role</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.role }}</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>Name</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef class=\"actions-col\">Actions</th>\n    <td mat-cell *matCellDef=\"let element\" class=\"actions-col\">\n      <button mat-icon-button color=\"accent\" (click)=\"navToEdit(element)\">\n        <mat-icon>edit</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\" (click)=\"delete(element)\">\n        <mat-icon>delete</mat-icon>\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (dblclick)=\"navToEdit(row)\"></tr>\n</table>";
    /***/
  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
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


    var _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employee-form/employee-form.component */
    "./src/app/admin/employee-form/employee-form.component.ts");
    /* harmony import */


    var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./employee-list/employee-list.component */
    "./src/app/admin/employee-list/employee-list.component.ts");

    var routes = [{
      path: '',
      component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"]
    }, {
      path: 'create',
      component: _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeFormComponent"]
    }, {
      path: ':id',
      component: _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeFormComponent"]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./employee-form/employee-form.component */
    "./src/app/admin/employee-form/employee-form.component.ts");
    /* harmony import */


    var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./employee-list/employee-list.component */
    "./src/app/admin/employee-list/employee-list.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeFormComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeListComponent"]],
      imports: [_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/employee-form/employee-form.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/employee-form/employee-form.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminEmployeeFormEmployeeFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\nbutton {\r\n  margin-left: 20px;\r\n}\r\n\r\n.mat-elevation-z8 {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px;\r\n}\r\n\r\nmat-form-field {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n/* Hide input number arrows */\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=number] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZW1wbG95ZWUtZm9ybS9lbXBsb3llZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFHQSw2QkFBNkI7O0FBQzdCOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9lbXBsb3llZS1mb3JtL2VtcGxveWVlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4ubWF0LWVsZXZhdGlvbi16OCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5cclxuLyogSGlkZSBpbnB1dCBudW1iZXIgYXJyb3dzICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/employee-form/employee-form.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/employee-form/employee-form.component.ts ***!
    \****************************************************************/

  /*! exports provided: EmployeeFormComponent */

  /***/
  function srcAppAdminEmployeeFormEmployeeFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeFormComponent", function () {
      return EmployeeFormComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/employees.service */
    "./src/app/services/employees.service.ts");

    var EmployeeFormComponent = /*#__PURE__*/function () {
      function EmployeeFormComponent(employeeService, router, route) {
        _classCallCheck(this, EmployeeFormComponent);

        this.employeeService = employeeService;
        this.router = router;
        this.route = route;
      }

      _createClass(EmployeeFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var snapshot = this.route.snapshot;
          this.isCreate = snapshot.routeConfig.path === 'create';

          if (this.isCreate) {
            this.initForm({});
            return;
          }

          var id = Number(snapshot.params.id);
          this.employeeService.get(id).subscribe(function (employee) {
            _this.initForm(employee);

            _this.form.controls.id.disable();
          });
        }
      }, {
        key: "initForm",
        value: function initForm(employee) {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](employee.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](employee.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[\w\-_]+$/)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](employee.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](employee.role, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](employee.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          if (!this.form.valid) {
            return;
          }

          var employee = {
            id: this.form.controls.id.value,
            username: this.form.controls.username.value,
            phone: this.form.controls.phone.value,
            role: this.form.controls.role.value,
            name: this.form.controls.name.value
          };
          var observer = {
            next: function next() {
              return _this2.router.navigate(['/admin']);
            },
            error: function error(e) {
              if (e.message === 'same id') {
                _this2.form.controls.id.setErrors({
                  unique: true
                });
              } else {
                _this2.form.controls.phone.setErrors({
                  unique: true
                });
              }
            },
            complete: null
          };

          if (this.isCreate) {
            this.employeeService.create(employee).subscribe(observer);
          } else {
            this.employeeService.update(employee).subscribe(observer);
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigate(['/admin']);
        }
      }]);

      return EmployeeFormComponent;
    }();

    EmployeeFormComponent.ctorParameters = function () {
      return [{
        type: src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_4__["EmployeesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    EmployeeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee-form/employee-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee-form.component.css */
      "./src/app/admin/employee-form/employee-form.component.css"))["default"]]
    })], EmployeeFormComponent);
    /***/
  },

  /***/
  "./src/app/admin/employee-list/employee-list.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/employee-list/employee-list.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminEmployeeListEmployeeListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n\r\n/* .mat-row {\r\n  cursor: pointer;\r\n} */\r\n\r\n\r\n.mat-stroked-button {\r\n  margin-right: 10px;\r\n}\r\n\r\n\r\n.actions-col {\r\n  width: 90px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7O0FBR0E7RUFDRSxXQUFXO0FBQ2I7OztBQUVBOztHQUVHOzs7QUFFSDtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIC5tYXQtcm93IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gKi9cclxuXHJcbi5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmFjdGlvbnMtY29sIHtcclxuICB3aWR0aDogOTBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/employee-list/employee-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/employee-list/employee-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: EmployeeListComponent */

  /***/
  function srcAppAdminEmployeeListEmployeeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () {
      return EmployeeListComponent;
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


    var _services_employees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/employees.service */
    "./src/app/services/employees.service.ts");

    var EmployeeListComponent = /*#__PURE__*/function () {
      function EmployeeListComponent(employeesService, router) {
        _classCallCheck(this, EmployeeListComponent);

        this.employeesService = employeesService;
        this.router = router;
        this.displayedColumns = ['id', 'username', 'phone', 'role', 'name', 'action'];
      }

      _createClass(EmployeeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.employees$ = this.employeesService.list();
        }
      }, {
        key: "navToEdit",
        value: function navToEdit(employee) {
          this.router.navigate(['admin', employee.id]);
        }
      }, {
        key: "delete",
        value: function _delete(employee) {
          var _this3 = this;

          this.employeesService["delete"](employee).subscribe(function () {
            return _this3.employees$ = _this3.employeesService.list();
          });
        }
      }]);

      return EmployeeListComponent;
    }();

    EmployeeListComponent.ctorParameters = function () {
      return [{
        type: _services_employees_service__WEBPACK_IMPORTED_MODULE_3__["EmployeesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employee-list/employee-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee-list.component.css */
      "./src/app/admin/employee-list/employee-list.component.css"))["default"]]
    })], EmployeeListComponent);
    /***/
  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map