import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
