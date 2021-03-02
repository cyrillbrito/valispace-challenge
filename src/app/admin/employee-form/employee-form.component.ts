import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private employeeService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    const snapshot = this.route.snapshot;
    this.isCreate = snapshot.routeConfig.path === 'create';

    if (this.isCreate) {
      this.form = new FormGroup({
        id: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        username: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        phone: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        role: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        name: new FormControl('', [Validators.required, Validators.maxLength(100)])
      });
    } else {
      const id = Number(snapshot.params.id);
      this.employeeService.get(id).subscribe(employee => {
        this.form = new FormGroup({
          id: new FormControl(employee.id, [Validators.required, Validators.maxLength(60)]),
          username: new FormControl(employee.username, [Validators.required, Validators.maxLength(60)]),
          phone: new FormControl(employee.phone, [Validators.required, Validators.maxLength(60)]),
          role: new FormControl(employee.role, [Validators.required, Validators.maxLength(60)]),
          name: new FormControl(employee.name, [Validators.required, Validators.maxLength(100)])
        });
      });
    }

  }

  public submit(): void {


    if (!this.form.valid) {
      alert('invalid');
      console.log(this.form.controls.id.errors);
      console.log(this.form.controls.name.errors);
      console.log(this.form.controls.phone.errors);
      console.log(this.form.controls.role.errors);
      console.log(this.form.controls.name.errors);
      return;
    }

    const employee: Employee = {
      id: this.form.controls.id.value,
      username: this.form.controls.username.value,
      phone: this.form.controls.phone.value,
      role: this.form.controls.role.value,
      name: this.form.controls.name.value,
    };

    this.employeeService.add(employee).subscribe(() => this.router.navigate(['/admin']));

  }
}
