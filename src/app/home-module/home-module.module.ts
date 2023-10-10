import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeModuleComponent } from './home-module.component';
import { HomeComponent } from './home/home.component';
import { IgxSelectModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxNavbarModule, IgxToggleModule, IgxIconModule, IgxNavigationDrawerModule, IgxDialogModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    HomeModuleComponent,
    HomeComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCardModule,
    FormsModule,
    IgxNavbarModule,
    IgxToggleModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxDialogModule
  ]
})
export class HomeModuleModule {
}
