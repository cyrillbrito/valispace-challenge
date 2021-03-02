import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observer } from 'rxjs';
import { Employee } from 'src/app/models';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  public form: FormGroup;

  public isCreate: boolean;

  public idError: boolean;
  public phoneError: boolean;

  constructor(
    private employeeService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    const snapshot = this.route.snapshot;
    this.isCreate = snapshot.routeConfig.path === 'create';

    if (this.isCreate) {
      this.initForm({});
      return;
    }

    const id = Number(snapshot.params.id);
    this.employeeService.get(id).subscribe(employee => {
      this.initForm(employee);
      this.form.controls.id.disable();
    });
  }

  private initForm(employee: Partial<Employee>): void {
    this.form = new FormGroup({
      id: new FormControl(employee.id, [Validators.required]),
      username: new FormControl(employee.username, [Validators.required, Validators.pattern(/^[\w\-_]+$/)]),
      phone: new FormControl(employee.phone, [Validators.required]),
      role: new FormControl(employee.role, [Validators.required]),
      name: new FormControl(employee.name, [Validators.required])
    });
  }

  public submit(): void {

    if (!this.form.valid) {
      return;
    }

    const employee: Employee = {
      id: this.form.controls.id.value,
      username: this.form.controls.username.value,
      phone: this.form.controls.phone.value,
      role: this.form.controls.role.value,
      name: this.form.controls.name.value,
    };

    const observer: Observer<void> = {
      next: () => this.router.navigate(['/admin']),
      error: (e: Error) => {
        if (e.message === 'same id') {
          this.form.controls.id.setErrors({ unique: true });
        } else {
          this.form.controls.phone.setErrors({ unique: true });
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

  public goBack(): void {
    this.router.navigate(['/admin']);
  }
}
