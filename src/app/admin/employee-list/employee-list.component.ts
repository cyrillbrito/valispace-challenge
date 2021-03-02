import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../../models';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'phone', 'role', 'name', 'action'];
  // dataSource = ELEMENT_DATA;

  public employees$: Observable<Employee[]>;

  constructor(
    private employeesService: EmployeesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.employees$ = this.employeesService.list();
  }

  navToEdit(employee: Employee): void {
    this.router.navigate(['admin', employee.id]);
  }

}
