import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SustainabilityModuleComponent } from './sustainability-module.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';

const routes: Routes = [{ path: '', component: SustainabilityModuleComponent, children: [{ path: '', redirectTo: 'sustainability', pathMatch: 'full' },
  { path: 'sustainability', component: SustainabilityComponent, data: { text: 'Sustainability' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SustainabilityModuleRoutingModule {
}
