(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/employees.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/employees.service.ts ***!
  \***********************************************/
/*! exports provided: EmployeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function() { return EmployeesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




const INITIAL_DATA = [
    { id: 1, username: 'mathilde', phone: 992312312, role: 'CEO', name: 'Mathilde Saylors' },
    { id: 2, username: 'alia', phone: 986733455, role: 'Designer', name: 'Alia Ginder' },
    { id: 3, username: 'freeman', phone: 971232343, role: 'Developer ', name: 'Freeman Litten' },
    { id: 4, username: 'piedad', phone: 992362345, role: 'Sales ', name: 'Piedad Dewald' },
    { id: 5, username: 'beau', phone: 912342303, role: 'PR ', name: 'Beau Siegel' },
];
let EmployeesService = class EmployeesService {
    constructor() { }
    list() {
        const stored = localStorage.getItem('valispace-challenge-employees');
        if (stored) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(stored));
        }
        localStorage.setItem('valispace-challenge-employees', JSON.stringify(INITIAL_DATA));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(INITIAL_DATA);
    }
    get(id) {
        return this.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(employees => employees.find(e => e.id === id)));
    }
    create(employee) {
        return this.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(employees => {
            if (employees.some(e => e.id === employee.id)) {
                throw Error('same id');
            }
            if (employees.some(e => e.phone === employee.phone)) {
                throw Error('same phone');
            }
            employees.push(employee);
            localStorage.setItem('valispace-challenge-employees', JSON.stringify(employees));
        }));
    }
    update(employee) {
        return this.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(employees => {
            if (employees.some(e => e.phone === employee.phone)) {
                throw Error('same phone');
            }
            const index = employees.findIndex(e => e.id === employee.id);
            employees[index] = employee;
            localStorage.setItem('valispace-challenge-employees', JSON.stringify(employees));
        }));
    }
    delete(employee) {
        return this.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(employees => {
            const index = employees.findIndex(e => e.id === employee.id);
            employees.splice(index, 1);
            localStorage.setItem('valispace-challenge-employees', JSON.stringify(employees));
        }));
    }
};
EmployeesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeesService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map