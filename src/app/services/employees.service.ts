import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models';


const MOCKED_DATA: Employee[] = [
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
    return of(MOCKED_DATA);
  }

  public add(): Observable<void> {
    return of();
  }

  public edit(): Observable<void> {
    return of();
  }

  public remove(): Observable<void> {
    return of();
  }

}
