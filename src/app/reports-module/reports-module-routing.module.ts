import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsModuleComponent } from './reports-module.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [{ path: '', component: ReportsModuleComponent, children: [{ path: '', redirectTo: 'reports', pathMatch: 'full' },
  { path: 'reports', component: ReportsComponent, data: { text: 'Reports' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsModuleRoutingModule {
}
