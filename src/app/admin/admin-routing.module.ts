import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'create', component: EmployeeComponent },
  { path: ':id', component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
