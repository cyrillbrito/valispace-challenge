import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'phone', 'role', 'name'];
  // dataSource = ELEMENT_DATA;

  public employees$: Observable<Employee[]>;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employees$ = this.employeesService.list();
  }

}
