import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DappModuleRoutingModule } from './dapp-module-routing.module';
import { DappModuleComponent } from './dapp-module.component';
import { DappComponent } from './dapp/dapp.component';
import { IgxBadgeModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DappModuleComponent,
    DappComponent
  ],
  imports: [
    CommonModule,
    DappModuleRoutingModule,
    IgxBadgeModule,
    FormsModule
  ]
})
export class DappModuleModule {
}
