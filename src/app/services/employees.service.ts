import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models';


const INITIAL_DATA: Employee[] = [
  { id: 1, username: 'mathilde', phone: 992312312, role: 'CEO', name: 'Mathilde Saylors' },
  { id: 2, username: 'alia', phone: 986733455, role: 'Designer', name: 'Alia Ginder' },
  { id: 3, username: 'freeman', phone: 971232343, role: 'Developer ', name: 'Freeman Litten' },
  { id: 4, username: 'piedad', phone: 992362345, role: 'Sales ', name: 'Piedad Dewald' },
  { id: 5, username: 'beau', phone: 912342303, role: 'PR ', name: 'Beau Siegel' },
];


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  public list(): Observable<Employee[]> {

    const stored = localStorage.getItem('valispace-challenge-employees');

    if (stored) {
      return of(JSON.parse(stored));
    }

    localStorage.setItem('valispace-challenge-employees', JSON.stringify(INITIAL_DATA));
    return of(INITIAL_DATA);
  }

  public get(id: number): Observable<Employee> {
    return this.list().pipe(map(employees => employees.find(e => e.id === id)));
  }

  public create(employee: Employee): Observable<void> {
    return this.list().pipe(map(employees => {

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

  public update(employee: Employee): Observable<void> {
    return this.list().pipe(map(employees => {

      if (employees.some(e => e.phone === employee.phone)) {
        throw Error('same phone');
      }

      const index = employees.findIndex(e => e.id === employee.id);
      employees[index] = employee;

      localStorage.setItem('valispace-challenge-employees', JSON.stringify(employees));
    }));
  }

  public delete(employee: Employee): Observable<void> {
    return this.list().pipe(map(employees => {

      const index = employees.findIndex(e => e.id === employee.id);
      employees.splice(index, 1);

      localStorage.setItem('valispace-challenge-employees', JSON.stringify(employees));
    }));
  }

}
