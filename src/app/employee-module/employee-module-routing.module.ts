import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeModuleComponent } from './employee-module.component';
import { EmployeeRolesNewComponent } from './employee-roles-new/employee-roles-new.component';
import { EmployeeRolesComponent } from './employee-roles/employee-roles.component';

const routes: Routes = [{ path: '', component: EmployeeModuleComponent, children: [{ path: 'employee-roles-new', component: EmployeeRolesNewComponent, data: { text: 'Employee roles new' } }, { path: 'employee-roles', component: EmployeeRolesComponent, data: { text: 'Employee roles' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeModuleRoutingModule {
}
