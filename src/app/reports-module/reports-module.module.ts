import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsModuleRoutingModule } from './reports-module-routing.module';
import { ReportsModuleComponent } from './reports-module.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    ReportsModuleComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsModuleRoutingModule
  ]
})
export class ReportsModuleModule {
}
