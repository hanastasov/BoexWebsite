import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SustainabilityModuleRoutingModule } from './sustainability-module-routing.module';
import { SustainabilityModuleComponent } from './sustainability-module.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';

@NgModule({
  declarations: [
    SustainabilityModuleComponent,
    SustainabilityComponent
  ],
  imports: [
    CommonModule,
    SustainabilityModuleRoutingModule
  ]
})
export class SustainabilityModuleModule {
}
