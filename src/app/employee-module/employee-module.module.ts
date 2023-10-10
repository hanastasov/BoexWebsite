import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeModuleRoutingModule } from './employee-module-routing.module';
import { EmployeeModuleComponent } from './employee-module.component';
import { EmployeeRolesNewComponent } from './employee-roles-new/employee-roles-new.component';
import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxInputGroupModule, IgxCheckboxModule, IgxDialogModule, IgxAvatarModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { EmployeeRolesComponent } from './employee-roles/employee-roles.component';

@NgModule({
  declarations: [
    EmployeeModuleComponent,
    EmployeeRolesNewComponent,
    EmployeeRolesComponent
  ],
  imports: [
    CommonModule,
    EmployeeModuleRoutingModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxInputGroupModule,
    IgxCheckboxModule,
    IgxDialogModule,
    FormsModule,
    IgxAvatarModule,
    IgxIconModule
  ]
})
export class EmployeeModuleModule {
}
